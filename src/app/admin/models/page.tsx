import { routeToCollectionBrandModelPage } from "@/app/services/commonFunctions";
import Link from "next/link";

import DevOnly from "../DevOnly";
import { brandSeries, enumOptions, listMovements } from "./catalogue";
import ModelEditor from "./ModelEditor";
import ModelPicker from "./ModelPicker";
import { listModels, loadModel } from "./modelSource";

/**
 * A watch's fields and photographs, edited with the photos in front of you:
 * the order of the gallery, the cover and hover photo, the specification, and
 * for a new watch, its photos from the folder and its place on the site.
 * Save writes the model file and its collectionData entry; the diff is
 * reviewed before committing.
 */
export default async function ModelsPage({
  searchParams,
}: {
  searchParams: Promise<{ file?: string }>;
}) {
  if (process.env.NODE_ENV === "production") return <DevOnly />;

  const { file } = await searchParams;
  const header = (title: string, aside?: React.ReactNode) => (
    <div className="mb-8 border-b border-border pb-6">
      <p className="lab">Local tool</p>
      <div className="mt-2 flex flex-wrap items-baseline gap-x-6 gap-y-2">
        <h1 className="font-display text-display-m font-medium">{title}</h1>
        {aside}
      </div>
      <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
        Save writes the model file in <code className="num">src/app/data/watchModels/</code> and its
        entry in <code className="num">collectionData.tsx</code>. Review the diff before committing.
        Click a photo to select it, Shift-click to select a run, and drag to reorder.
      </p>
    </div>
  );

  if (!file) {
    return (
      <div className="pb-24">
        {header("Watch Models")}
        <ModelPicker models={listModels()} />
      </div>
    );
  }

  let loaded;
  try {
    loaded = loadModel(file);
  } catch (error) {
    return (
      <div className="pb-24">
        {header("Watch Models")}
        <p className="border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
          {error instanceof Error ? error.message : String(error)}.{" "}
          <Link href="/admin/models" className="text-brand underline-offset-4 hover:underline">
            Pick a watch
          </Link>
        </p>
      </div>
    );
  }

  const enums = enumOptions();
  const brand = loaded.model.fields["information.brand"];
  const brandName =
    brand?.kind === "enum" ? enums.BrandsEnum.find((o) => o.value === brand.keys[0])?.label : null;
  const viewHref =
    loaded.collection.status === "visible" && brandName
      ? routeToCollectionBrandModelPage(brandName, loaded.collection.legend)
      : null;
  const series = brandSeries(loaded.brand);
  const movements = listMovements()
    .map((m) => ({ value: m.path, label: `${m.title} · ${m.keys.join(" / ")}` }))
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div className="pb-40">
      {header(
        loaded.model.title,
        <span className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
          <span className="num break-all text-xs text-muted-foreground">{file}</span>
          {viewHref ? (
            <Link
              href={viewHref}
              className="lab text-brand no-underline underline-offset-4 hover:underline"
            >
              View page
            </Link>
          ) : (
            <span className="lab text-brand">
              {loaded.collection.status === "hidden" ? "Hidden" : "Not in the collection"}
            </span>
          )}
          <Link
            href="/admin/models"
            className="lab text-muted-foreground no-underline transition-colors hover:text-brand"
          >
            All watches
          </Link>
        </span>,
      )}

      <ModelEditor key={file} loaded={loaded} options={{ enums, series, movements }} />
    </div>
  );
}
