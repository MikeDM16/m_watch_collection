"use client";

import {
  getExternalResource,
  getImgURLForSizeType,
  routeToCollectionBrandModelPage,
  SizeType,
} from "@/app/services/commonFunctions";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export interface SearchEntry {
  brand: string;
  legend: string;
  year: number;
  srcImage: string;
  movementTitle?: string;
}

export default function SearchBarComponent() {
  const [data, setData] = useState<Record<string, SearchEntry> | null>(null);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const wrapperSearchBarRef = useRef<HTMLDivElement>(null);

  const loadSearchData = useCallback(async () => {
    if (data || isLoading) return;
    setIsLoading(true);
    try {
      const res = await fetch("/api/search-index");
      const json = await res.json();
      setData(json);
    } finally {
      setIsLoading(false);
    }
  }, [data, isLoading]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setQuery(searchValue);

    if (!data) return;

    const matches = Object.entries(data).filter(([key, value]) => {
      const search = searchValue.toLowerCase();

      const keyMatch = key.toLowerCase().includes(search);

      const movementtitleMatch = value?.movementTitle?.toLowerCase()?.includes(search);

      return keyMatch || movementtitleMatch;
    });
    const matchedKeys = matches.map(([key]) => key);
    setFiltered(searchValue ? matchedKeys : []);
    setIsOpen(!!searchValue && matchedKeys.length > 0);
  };

  // Use wrapperSearchBarRef to know if the click is in the searhcbar or outside, to close it
  const handleClickOutside = (e: MouseEvent) => {
    if (wrapperSearchBarRef.current && !wrapperSearchBarRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Re-run search when data arrives after user already typed
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (data && query) {
      handleChange({ target: { value: query } } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [data]);

  return (
    <div ref={wrapperSearchBarRef} className="w-full max-w-md mx-auto mt-10 relative">
      <div className="flex items-center gap-2 bg-white shadow-md rounded-2xl p-2">
        <Search className="w-5 h-5 text-gray-500" />
        <Input
          placeholder={isLoading ? "Loading search data..." : "Search by Brand, Model or Movement name..."}
          value={query}
          onChange={handleChange}
          onFocus={loadSearchData}
          className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      {isOpen && filtered.length > 0 && (
        <Card className="absolute w-full mt-2 p-2 z-10 bg-white rounded-xl shadow-lg">
          <ul className="divide-y">
            {filtered.map((item_key, index) => {
              const entry = data![item_key];
              const imagesrc = getExternalResource(
                getImgURLForSizeType(entry.srcImage, SizeType.THUMBNAIL),
              );
              const href = routeToCollectionBrandModelPage(entry.brand, entry.legend);
              const hrefText = `${entry.year} ${entry.legend}`;
              return (
                <Link key={index} className="info-text link" href={href} target={"_blank"}>
                  <li
                    key={index}
                    className="p-2 flex items-center gap-3 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    <Image
                      className="w-8 h-8 object-cover"
                      src={imagesrc}
                      alt={hrefText}
                      width={32}
                      height={32}
                    />
                    {hrefText}
                  </li>
                </Link>
              );
            })}
          </ul>
        </Card>
      )}
    </div>
  );
}
