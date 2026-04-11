"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MultiSelect, SearchableSelect, SelectOption } from "@/components/ui/select";
import { useCallback, useEffect, useState } from "react";

import { generateMovementFile, generateWatchModelFile } from "./generateFileContent";

type Enums = Record<string, Record<string, string>>;

function enumToOptions(enumObj: Record<string, string>): SelectOption[] {
  return Object.entries(enumObj).map(([key, val]) => ({ value: key, label: val }));
}

// ─── Step Indicator ──────────────────────────────────
function StepIndicator({ current, steps }: { current: number; steps: string[] }) {
  return (
    <div className="mb-8 flex items-center gap-2">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
              i === current
                ? "bg-primary text-primary-foreground"
                : i < current
                  ? "bg-green-600 text-white"
                  : "bg-muted text-muted-foreground"
            }`}
          >
            {i < current ? "✓" : i + 1}
          </div>
          <span className={`text-sm ${i === current ? "font-semibold" : "text-muted-foreground"}`}>
            {s}
          </span>
          {i < steps.length - 1 && <div className="mx-1 h-px w-6 bg-border" />}
        </div>
      ))}
    </div>
  );
}

// ─── Field Row ──────────────────────────────────
function FieldRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[180px_1fr] items-start gap-3 py-1.5">
      <label className="pt-2 text-sm font-medium text-muted-foreground">{label}</label>
      <div>{children}</div>
    </div>
  );
}

// ─── Section Header ──────────────────────────────────
function SectionHeader({ title }: { title: string }) {
  return <h3 className="mb-3 mt-6 border-b border-border pb-1 text-lg font-semibold">{title}</h3>;
}

const STEPS = ["Brand", "Template", "File Name", "Details", "Movement", "Features", "Review"];

const STYLE_TO_TYPE: Record<string, string> = {
  DRESS: "DRESS",
  CASUAL: "CASUAL",
  SPORTS: "SPORTS",
  DIVE: "DIVE",
};

export default function CreateModelPage() {
  const [step, setStep] = useState(0);
  const [enums, setEnums] = useState<Enums>({});
  const [movements, setMovements] = useState<string[]>([]);
  const [allModels, setAllModels] = useState<{ brand: string; file: string }[]>([]);
  const [brandLogos, setBrandLogos] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  // Step 1: Brand
  const [brandKey, setBrandKey] = useState("");
  const [brandFolder, setBrandFolder] = useState("");

  // Step 2: Template
  const [brandSeries, setBrandSeries] = useState<Record<string, string> | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [, setTemplateContent] = useState("");

  // Step 3: File Name
  const [modelName, setModelName] = useState("");
  const [year, setYear] = useState("");
  const [fileName, setFileName] = useState("");

  // Step 4: Details fields
  const [title, setTitle] = useState("");
  const [series, setSeries] = useState("");
  const [seriesType, setSeriesType] = useState<"string" | "brand_series">("string");
  const [seriesFileName, setSeriesFileName] = useState("");
  const [catalogueRef, setCatalogueRef] = useState("");
  const [prodYear, setProdYear] = useState("");
  const [movementType, setMovementType] = useState("");
  const [style, setStyle] = useState("");
  // Case
  const [diameter, setDiameter] = useState("");
  const [thickness, setThickness] = useState("");
  const [caseMaterial, setCaseMaterial] = useState("");
  const [waterRes, setWaterRes] = useState("");
  const [caseFinishing, setCaseFinishing] = useState("");
  const [bezel, setBezel] = useState("");
  const [crownType, setCrownType] = useState("");
  const [crystal, setCrystal] = useState("");
  const [caseback, setCaseback] = useState("");
  // Dial
  const [dialColor, setDialColor] = useState("");
  const [dialMarkers, setDialMarkers] = useState("");
  const [dialFinishing, setDialFinishing] = useState("");
  const [luminescent, setLuminescent] = useState<string[]>([]);
  const [calendar, setCalendar] = useState<string[]>([]);
  // Bracelet
  const [braceletMat, setBraceletMat] = useState("");
  const [buckleType, setBuckleType] = useState("");
  const [braceletWidth, setBraceletWidth] = useState("");
  const [braceletColor, setBraceletColor] = useState("");

  // Step 5: Movement
  const [movementRef, setMovementRef] = useState("");
  const [showNewMovement, setShowNewMovement] = useState(false);
  const [mvVarName, setMvVarName] = useState("");
  const [mvTitle, setMvTitle] = useState("");
  const [mvDesc, setMvDesc] = useState("");
  const [mvManufacturer, setMvManufacturer] = useState("");
  const [mvModelRef, setMvModelRef] = useState("");
  const [mvType, setMvType] = useState("");
  const [mvFreq, setMvFreq] = useState("");
  const [mvJewels, setMvJewels] = useState("");
  const [mvReserve, setMvReserve] = useState("");
  const [mvFunctions, setMvFunctions] = useState("");
  const [mvBattery, setMvBattery] = useState("");

  // Step 6: Features
  const [features, setFeatures] = useState<string[]>([]);
  const [customFeatures, setCustomFeatures] = useState<string[]>([]);
  const [customFeatureText, setCustomFeatureText] = useState("");

  // ─── Data Loading ──────────────────────────────────
  useEffect(() => {
    Promise.all([
      fetch("/api/admin/enums").then((r) => r.json()),
      fetch("/api/admin/models?action=allModels").then((r) => r.json()),
      fetch("/api/admin/models?action=movements").then((r) => r.json()),
      fetch("/api/admin/models?action=brandLogos").then((r) => r.json()),
    ]).then(([enumData, modelsData, mvData, logoData]) => {
      setEnums(enumData);
      setAllModels(modelsData.allModels);
      setMovements(mvData.movements);
      setBrandLogos(logoData.logos || {});
      setLoading(false);
    });
  }, []);

  // ─── Brand selection side effects ──────────────────────────────────
  const loadBrandModels = useCallback(async (folder: string) => {
    const res = await fetch(`/api/admin/models?action=models&brand=${folder}`);
    const data = await res.json();
    if (data.series) {
      setBrandSeries(data.series);
      setSeriesType("brand_series");
      // Extract series file name from the first key pattern
      const seriesFile =
        Object.keys(data.series).length > 0 ? folder.replace(/_/g, "") + "BrandSeries" : "";
      // Try to find actual file name by checking known patterns
      setSeriesFileName(seriesFile || "");
    } else {
      setBrandSeries(null);
      setSeriesType("string");
      setSeriesFileName("");
    }
  }, []);

  // ─── Template parsing ──────────────────────────────────

  /** Extract a brace-balanced section like `case: { ... }` from content */
  function extractSection(content: string, sectionName: string): string {
    const startPattern = new RegExp(`\\b${sectionName}\\s*:\\s*\\{`);
    const startMatch = startPattern.exec(content);
    if (!startMatch) return "";
    // Find the opening { and track depth
    let depth = 1;
    const searchStart = startMatch.index + startMatch[0].length;
    for (let i = searchStart; i < content.length; i++) {
      if (content[i] === "{") depth++;
      if (content[i] === "}") depth--;
      if (depth === 0) return content.slice(searchStart, i);
    }
    return "";
  }

  /** Extract EnumName.KEY → returns KEY, or "" if not found */
  function extractEnumFrom(section: string, field: string): string {
    const m = section.match(new RegExp(`\\b${field}\\s*:\\s*(\\w+)\\.(\\w+)`));
    return m ? m[2] : "";
  }

  /** Extract string value "..." → returns the string, or "" */
  function extractStrFrom(section: string, field: string): string {
    const m = section.match(new RegExp(`\\b${field}\\s*:\\s*"([^"]*)"`));
    return m ? m[1] : "";
  }

  /** Extract concatenated enum refs like A.X + A.Y → returns [X, Y] */
  function extractConcatFrom(section: string, field: string): string[] {
    const m = section.match(new RegExp(`\\b${field}\\s*:\\s*(.+)`, "m"));
    if (!m) return [];
    const refs = [...m[1].matchAll(/(\w+)\.(\w+)/g)];
    return refs.map((r) => r[2]);
  }

  const parseTemplate = useCallback((content: string) => {
    const infoSection = extractSection(content, "information");
    const caseSection = extractSection(content, "case");
    const dialSection = extractSection(content, "dial");
    const braceletSection = extractSection(content, "bracelet");

    // Title (top-level)
    setTitle(extractStrFrom(content, "title"));

    // Information
    setCatalogueRef(extractStrFrom(infoSection, "catalogueReference"));
    setProdYear(extractStrFrom(infoSection, "productionYear"));
    setMovementType(extractEnumFrom(infoSection, "movementType"));
    setStyle(extractEnumFrom(infoSection, "style"));

    // Series (can be enum or string)
    const seriesEnumMatch = infoSection.match(/series\s*:\s*(\w+)\.(\w+)/);
    if (seriesEnumMatch) {
      setSeries(seriesEnumMatch[2]);
    } else {
      setSeries(extractStrFrom(infoSection, "series"));
    }

    // Case
    setDiameter(extractEnumFrom(caseSection, "diameter"));
    setThickness(extractEnumFrom(caseSection, "thickness"));
    setCaseMaterial(extractEnumFrom(caseSection, "material"));
    setWaterRes(extractEnumFrom(caseSection, "waterResistance"));
    setCaseFinishing(extractEnumFrom(caseSection, "finishingDetails"));
    setBezel(extractEnumFrom(caseSection, "bezel"));
    setCrownType(extractEnumFrom(caseSection, "crownType"));
    setCrystal(extractEnumFrom(caseSection, "crystal"));
    setCaseback(extractEnumFrom(caseSection, "caseback"));

    // Dial
    setDialColor(extractEnumFrom(dialSection, "color"));
    setDialMarkers(extractEnumFrom(dialSection, "dialMarkers"));
    setDialFinishing(extractEnumFrom(dialSection, "finishingDetails"));
    setLuminescent(extractConcatFrom(dialSection, "luminiscentIndexes"));
    setCalendar(extractConcatFrom(dialSection, "calendar"));

    // Bracelet
    setBraceletMat(extractEnumFrom(braceletSection, "material"));
    setBuckleType(extractEnumFrom(braceletSection, "buckleType"));
    setBraceletWidth(extractEnumFrom(braceletSection, "width"));
    setBraceletColor(extractEnumFrom(braceletSection, "color"));

    // Movement
    const mvMatch = content.match(/movement\s*:\s*MovementsDataDB\.(\w+)/);
    setMovementRef(mvMatch ? mvMatch[1] : "");

    // Features
    const featuresMatch = content.match(/features\s*:\s*\[([\s\S]*?)\]/);
    setFeatures(
      featuresMatch ? [...featuresMatch[1].matchAll(/featuresEnum\.(\w+)/g)].map((r) => r[1]) : [],
    );
  }, []);

  // ─── Load template content ──────────────────────────────────
  const [templateLoading, setTemplateLoading] = useState(false);

  const loadTemplate = useCallback(
    async (brand: string, file: string) => {
      setTemplateLoading(true);
      try {
        const res = await fetch(`/api/admin/models?action=template&brand=${brand}&file=${file}`);
        const data = await res.json();
        setTemplateContent(data.content);
        parseTemplate(data.content);
      } finally {
        setTemplateLoading(false);
      }
    },
    [parseTemplate],
  );

  // ─── Submit ──────────────────────────────────
  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      // If creating new movement, do that first
      if (showNewMovement && mvVarName) {
        const mfr = enums.CaliberBrandsEnum?.[mvManufacturer] || mvManufacturer;
        const mfrFolder = mfr.replace(/ /g, "_").replace(/[()]/g, "");
        const simpleFolders: Record<string, string> = {
          "A. Schild": "AS",
          "FE (France Ebauche)": "FE",
          "FHF (Fabrique d'Horlogerie de Fontainemelon)": "FHF",
        };
        const folder = simpleFolders[mfr] || mfrFolder;

        const mvContent = generateMovementFile({
          variableName: mvVarName,
          title: mvTitle,
          description: mvDesc,
          manufacturer: mvManufacturer,
          modelReference: mvModelRef,
          type: mvType,
          frequency: mvFreq,
          jewels: mvJewels,
          reserve: mvReserve,
          functions: mvFunctions,
          battery: mvBattery,
          imgFolder: `public/assets/Images/Movements/${folder}/${mvVarName}`,
        });

        const mvRes = await fetch("/api/admin/create-movement", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            manufacturerFolder: folder,
            variableName: mvVarName,
            fileContent: mvContent,
          }),
        });

        if (!mvRes.ok) {
          const err = await mvRes.json();
          setResult({ success: false, message: `Movement creation failed: ${err.error}` });
          setSubmitting(false);
          return;
        }
        setMovementRef(mvVarName);
      }

      const actualMovementRef = showNewMovement ? mvVarName : movementRef;
      const imgFolder = `public/assets/Images/${brandFolder}/${year}_${brandFolder}_${modelName}`;

      const fileContent = generateWatchModelFile({
        title,
        brandEnumKey: brandKey,
        seriesType,
        seriesValue: series,
        seriesFileName: seriesType === "brand_series" ? seriesFileName : undefined,
        catalogueReference: catalogueRef,
        productionYear: prodYear,
        movementType,
        style,
        diameter,
        thickness,
        caseMaterial,
        waterResistance: waterRes,
        caseFinishing,
        bezel,
        crownType,
        crystal,
        caseback,
        dialColor,
        dialMarkers,
        dialFinishing,
        luminescent,
        calendar,
        braceletMaterial: braceletMat,
        buckleType,
        braceletWidth,
        braceletColor,
        movementRef: actualMovementRef,
        features,
        customFeatures,
        imgFolder,
      });

      const res = await fetch("/api/admin/create-model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brandFolder,
          filename: fileName,
          fileContent,
          collectionEntry: {
            legend: title,
            brandEnumKey: brandKey,
            year: parseInt(year),
            watchType: STYLE_TO_TYPE[style] || "CASUAL",
            imgFolder: `${year}_${brandFolder}_${modelName}`,
          },
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setResult({
          success: true,
          message: `Created:\n• ${data.modelFile}\n• ${data.imgFolder}\n• Registered in collectionData.tsx`,
        });
      } else {
        setResult({ success: false, message: data.error });
      }
    } catch (err) {
      setResult({ success: false, message: String(err) });
    }
    setSubmitting(false);
  };

  // ─── Loading / Error ──────────────────────────────────
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg">Loading enums and data...</p>
      </div>
    );
  }

  if (process.env.NODE_ENV === "production") {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg text-muted-foreground">
          This page is only available in development mode.
        </p>
      </div>
    );
  }

  // ─── Brand options ──────────────────────────────────
  const brandOptions: SelectOption[] = Object.entries(enums.BrandsEnum || {}).map(([k, v]) => ({
    value: k,
    label: v,
    image: brandLogos[k],
  }));

  // ─── Render ──────────────────────────────────
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Create Watch Model</h1>
        <Button variant="outline" size="sm" onClick={() => (window.location.href = "/")}>
          Back to Site
        </Button>
      </div>
      <p className="mb-6 text-sm text-muted-foreground">
        Dev-only tool for creating new watch model files.
      </p>

      <StepIndicator current={step} steps={STEPS} />

      {result && (
        <div
          className={`mb-6 rounded-md p-4 ${result.success ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}
        >
          <pre className="whitespace-pre-wrap text-sm">{result.message}</pre>
          {result.success && (
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                Next: add images to the folder, then update sliderImages/srcImage paths.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => window.location.reload()}>
                  Create Another
                </Button>
                <Button variant="outline" onClick={() => (window.location.href = "/")}>
                  Back to Home
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ───── Step 0: Brand ───── */}
      {step === 0 && (
        <div>
          <SectionHeader title="Select Brand" />
          <SearchableSelect
            options={brandOptions}
            value={brandKey}
            onChange={(v) => {
              setBrandKey(v);
              const display = enums.BrandsEnum?.[v] || v;
              setBrandFolder(display.replace(/ /g, "_"));
              loadBrandModels(display.replace(/ /g, "_"));
            }}
            placeholder="Search brands..."
            className="max-w-md"
          />
          <div className="mt-6">
            <Button onClick={() => step === 0 && brandKey && setStep(1)} disabled={!brandKey}>
              Next
            </Button>
          </div>
        </div>
      )}

      {/* ───── Step 1: Template ───── */}
      {step === 1 && (
        <div>
          <SectionHeader title="Select Template to Duplicate" />
          <p className="mb-3 text-sm text-muted-foreground">
            Pick any existing model as starting template. All fields will be pre-filled. Models from{" "}
            <strong>{brandFolder}</strong> are listed first.
          </p>
          <SearchableSelect
            options={(() => {
              // Current brand models first, then all others
              const currentBrand = allModels
                .filter((m) => m.brand === brandFolder)
                .map((m) => ({
                  value: `${m.brand}/${m.file}`,
                  label: m.file.replace(".tsx", ""),
                }));
              const otherBrands = allModels
                .filter((m) => m.brand !== brandFolder)
                .map((m) => ({
                  value: `${m.brand}/${m.file}`,
                  label: `${m.brand} / ${m.file.replace(".tsx", "")}`,
                }));
              return [...currentBrand, ...otherBrands];
            })()}
            value={selectedTemplate}
            onChange={(val) => {
              setSelectedTemplate(val);
              const [folder, file] = val.split("/");
              loadTemplate(folder, file);
            }}
            placeholder="Search models..."
            className="max-w-lg"
          />
          {templateLoading && (
            <p className="mt-3 text-sm text-muted-foreground">Loading template...</p>
          )}
          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={() => setStep(0)}>
              Back
            </Button>
            <Button onClick={() => setStep(2)} disabled={!selectedTemplate || templateLoading}>
              Next
            </Button>
          </div>
        </div>
      )}

      {/* ───── Step 2: File Name ───── */}
      {step === 2 && (
        <div>
          <SectionHeader title="File Name" />
          <FieldRow label="Brand">
            <span className="pt-2 text-sm">{enums.BrandsEnum?.[brandKey]}</span>
          </FieldRow>
          <FieldRow label="Model Name">
            <Input
              value={modelName}
              onChange={(e) => {
                setModelName(e.target.value);
                setFileName(`${brandFolder}_${e.target.value.replace(/ /g, "_")}_${year}.tsx`);
                setTitle(
                  `${year} ${enums.BrandsEnum?.[brandKey]} ${e.target.value.replace(/_/g, " ")}`,
                );
                setProdYear(year);
              }}
              placeholder="e.g. Seastar_PR516"
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Year">
            <Input
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
                setFileName(`${brandFolder}_${modelName.replace(/ /g, "_")}_${e.target.value}.tsx`);
                setTitle(
                  `${e.target.value} ${enums.BrandsEnum?.[brandKey]} ${modelName.replace(/_/g, " ")}`,
                );
                setProdYear(e.target.value);
              }}
              placeholder="e.g. 1967"
              className="max-w-32"
            />
          </FieldRow>
          <FieldRow label="File Name">
            <span className="pt-2 text-sm font-mono text-muted-foreground">{fileName}</span>
          </FieldRow>
          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button onClick={() => setStep(3)} disabled={!modelName || !year}>
              Next
            </Button>
          </div>
        </div>
      )}

      {/* ───── Step 3: Details ───── */}
      {step === 3 && (
        <div>
          <SectionHeader title="Model Information" />
          <FieldRow label="Title">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} className="max-w-lg" />
          </FieldRow>
          <FieldRow label="Series">
            {brandSeries ? (
              <SearchableSelect
                options={enumToOptions(brandSeries)}
                value={series}
                onChange={setSeries}
                placeholder="Select series..."
                className="max-w-sm"
              />
            ) : (
              <Input
                value={series}
                onChange={(e) => setSeries(e.target.value)}
                className="max-w-sm"
              />
            )}
          </FieldRow>
          <FieldRow label="Catalogue Ref">
            <Input
              value={catalogueRef}
              onChange={(e) => setCatalogueRef(e.target.value)}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Production Year">
            <Input
              value={prodYear}
              onChange={(e) => setProdYear(e.target.value)}
              className="max-w-32"
            />
          </FieldRow>
          <FieldRow label="Movement Type">
            <SearchableSelect
              options={enumToOptions(enums.MovementWatchTypeEnum || {})}
              value={movementType}
              onChange={setMovementType}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Style">
            <SearchableSelect
              options={enumToOptions(enums.WatchStyleEnum || {})}
              value={style}
              onChange={setStyle}
              className="max-w-sm"
            />
          </FieldRow>

          <SectionHeader title="Case" />
          <FieldRow label="Diameter">
            <SearchableSelect
              options={enumToOptions(enums.CaseDiameterEnum || {})}
              value={diameter}
              onChange={setDiameter}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Thickness">
            <SearchableSelect
              options={enumToOptions(enums.CaseThicknessEnum || {})}
              value={thickness}
              onChange={setThickness}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Material">
            <SearchableSelect
              options={enumToOptions(enums.CaseMaterialEnum || {})}
              value={caseMaterial}
              onChange={setCaseMaterial}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Water Resistance">
            <SearchableSelect
              options={enumToOptions(enums.WaterResistanceEnum || {})}
              value={waterRes}
              onChange={setWaterRes}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Finishing">
            <SearchableSelect
              options={enumToOptions(enums.CaseFinishingEnum || {})}
              value={caseFinishing}
              onChange={setCaseFinishing}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Bezel">
            <SearchableSelect
              options={enumToOptions(enums.BezelTypeEnum || {})}
              value={bezel}
              onChange={setBezel}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Crown">
            <SearchableSelect
              options={enumToOptions(enums.CrownWatchTypeEnum || {})}
              value={crownType}
              onChange={setCrownType}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Crystal">
            <SearchableSelect
              options={enumToOptions(enums.CrystalMaterialEnum || {})}
              value={crystal}
              onChange={setCrystal}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Caseback">
            <SearchableSelect
              options={enumToOptions(enums.CaseBackDetailsEnum || {})}
              value={caseback}
              onChange={setCaseback}
              className="max-w-sm"
            />
          </FieldRow>

          <SectionHeader title="Dial" />
          <FieldRow label="Color">
            <SearchableSelect
              options={enumToOptions(enums.ColorEnum || {})}
              value={dialColor}
              onChange={setDialColor}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Markers">
            <SearchableSelect
              options={enumToOptions(enums.DialMarketsEnum || {})}
              value={dialMarkers}
              onChange={setDialMarkers}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Finishing">
            <SearchableSelect
              options={enumToOptions(enums.FinishingDetailsEnum || {})}
              value={dialFinishing}
              onChange={setDialFinishing}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Luminescent">
            <MultiSelect
              options={enumToOptions(enums.LuminescentIndexesEnum || {})}
              values={luminescent}
              onChange={setLuminescent}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Calendar">
            <MultiSelect
              options={enumToOptions(enums.CalendarWatchTypeEnum || {})}
              values={calendar}
              onChange={setCalendar}
              className="max-w-sm"
            />
          </FieldRow>

          <SectionHeader title="Bracelet" />
          <FieldRow label="Material">
            <SearchableSelect
              options={enumToOptions(enums.BraceletMaterialEnum || {})}
              value={braceletMat}
              onChange={setBraceletMat}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Buckle">
            <SearchableSelect
              options={enumToOptions(enums.BuckleTypeEnum || {})}
              value={buckleType}
              onChange={setBuckleType}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Width">
            <SearchableSelect
              options={enumToOptions(enums.BraceletWidthEnum || {})}
              value={braceletWidth}
              onChange={setBraceletWidth}
              className="max-w-sm"
            />
          </FieldRow>
          <FieldRow label="Color">
            <SearchableSelect
              options={enumToOptions(enums.ColorEnum || {})}
              value={braceletColor}
              onChange={setBraceletColor}
              className="max-w-sm"
            />
          </FieldRow>

          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button onClick={() => setStep(4)}>Next</Button>
          </div>
        </div>
      )}

      {/* ───── Step 4: Movement ───── */}
      {step === 4 && (
        <div>
          <SectionHeader title="Movement" />
          {!showNewMovement ? (
            <>
              <FieldRow label="From Database">
                <SearchableSelect
                  options={movements.map((m) => ({ value: m, label: m }))}
                  value={movementRef}
                  onChange={setMovementRef}
                  placeholder="Search movements..."
                  className="max-w-md"
                />
              </FieldRow>
              <div className="mt-4">
                <Button variant="outline" size="sm" onClick={() => setShowNewMovement(true)}>
                  + Create New Movement
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="mb-4 text-sm text-muted-foreground">Create a new movement caliber:</p>
              <FieldRow label="Variable Name">
                <Input
                  value={mvVarName}
                  onChange={(e) => setMvVarName(e.target.value)}
                  placeholder="e.g. ETA_2824"
                  className="max-w-sm"
                />
              </FieldRow>
              <FieldRow label="Title">
                <Input
                  value={mvTitle}
                  onChange={(e) => setMvTitle(e.target.value)}
                  placeholder="e.g. ETA 2824"
                  className="max-w-sm"
                />
              </FieldRow>
              <FieldRow label="Manufacturer">
                <SearchableSelect
                  options={enumToOptions(enums.CaliberBrandsEnum || {})}
                  value={mvManufacturer}
                  onChange={setMvManufacturer}
                  className="max-w-sm"
                />
              </FieldRow>
              <FieldRow label="Model Ref">
                <Input
                  value={mvModelRef}
                  onChange={(e) => setMvModelRef(e.target.value)}
                  className="max-w-sm"
                />
              </FieldRow>
              <FieldRow label="Type">
                <SearchableSelect
                  options={enumToOptions(enums.MovementWatchTypeEnum || {})}
                  value={mvType}
                  onChange={setMvType}
                  className="max-w-sm"
                />
              </FieldRow>
              {!["QUARTZ", "SOLAR", "MECA_QUARTZ"].includes(mvType) && (
                <>
                  <FieldRow label="Frequency">
                    <SearchableSelect
                      options={enumToOptions(enums.FrequencyEnum || {})}
                      value={mvFreq}
                      onChange={setMvFreq}
                      className="max-w-sm"
                    />
                  </FieldRow>
                  <FieldRow label="Reserve">
                    <SearchableSelect
                      options={enumToOptions(enums.ReserveHoursEnum || {})}
                      value={mvReserve}
                      onChange={setMvReserve}
                      className="max-w-sm"
                    />
                  </FieldRow>
                </>
              )}
              {["QUARTZ", "SOLAR", "MECA_QUARTZ"].includes(mvType) && (
                <FieldRow label="Battery">
                  <Input
                    value={mvBattery}
                    onChange={(e) => setMvBattery(e.target.value)}
                    placeholder="e.g. 395 / SR927SW"
                    className="max-w-sm"
                  />
                </FieldRow>
              )}
              <FieldRow label="Jewels">
                <SearchableSelect
                  options={enumToOptions(enums.JewelsNumberEnum || {})}
                  value={mvJewels}
                  onChange={setMvJewels}
                  className="max-w-sm"
                />
              </FieldRow>
              <FieldRow label="Functions">
                <Input
                  value={mvFunctions}
                  onChange={(e) => setMvFunctions(e.target.value)}
                  placeholder="Hours, Minutes, Sweep Seconds"
                  className="max-w-md"
                />
              </FieldRow>
              <FieldRow label="Description">
                <Input
                  value={mvDesc}
                  onChange={(e) => setMvDesc(e.target.value)}
                  className="max-w-md"
                />
              </FieldRow>
              <div className="mt-3">
                <Button variant="outline" size="sm" onClick={() => setShowNewMovement(false)}>
                  Cancel — Use Existing
                </Button>
              </div>
            </>
          )}
          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={() => setStep(3)}>
              Back
            </Button>
            <Button onClick={() => setStep(5)} disabled={!movementRef && !mvVarName}>
              Next
            </Button>
          </div>
        </div>
      )}

      {/* ───── Step 5: Features ───── */}
      {step === 5 && (
        <div>
          <SectionHeader title="Features" />
          <MultiSelect
            options={enumToOptions(enums.featuresEnum || {})}
            values={features}
            onChange={setFeatures}
            className="max-w-md"
          />
          <div className="mt-4">
            <p className="mb-2 text-sm font-medium">Custom features (free text):</p>
            {customFeatures.map((f, i) => (
              <div key={i} className="mb-1 flex items-center gap-2">
                <span className="text-sm">{f}</span>
                <button
                  onClick={() => setCustomFeatures(customFeatures.filter((_, j) => j !== i))}
                  className="text-xs text-red-400 hover:text-red-300"
                >
                  remove
                </button>
              </div>
            ))}
            <div className="flex gap-2">
              <Input
                value={customFeatureText}
                onChange={(e) => setCustomFeatureText(e.target.value)}
                placeholder="Custom feature text..."
                className="max-w-sm"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && customFeatureText) {
                    setCustomFeatures([...customFeatures, customFeatureText]);
                    setCustomFeatureText("");
                  }
                }}
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (customFeatureText) {
                    setCustomFeatures([...customFeatures, customFeatureText]);
                    setCustomFeatureText("");
                  }
                }}
              >
                Add
              </Button>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={() => setStep(4)}>
              Back
            </Button>
            <Button onClick={() => setStep(6)}>Review</Button>
          </div>
        </div>
      )}

      {/* ───── Step 6: Review ───── */}
      {step === 6 && (
        <div>
          <SectionHeader title="Review & Create" />
          <div className="space-y-1 text-sm">
            <p>
              <strong>File:</strong>{" "}
              <code>
                src/app/data/watchModels/{brandFolder}/{fileName}
              </code>
            </p>
            <p>
              <strong>Title:</strong> {title}
            </p>
            <p>
              <strong>Brand:</strong> {enums.BrandsEnum?.[brandKey]} ({brandKey})
            </p>
            <p>
              <strong>Year:</strong> {prodYear}
            </p>
            <p>
              <strong>Style:</strong> {enums.WatchStyleEnum?.[style]}
            </p>
            <p>
              <strong>Movement:</strong> {showNewMovement ? `NEW: ${mvVarName}` : movementRef}
            </p>
            <p>
              <strong>Case:</strong> {enums.CaseDiameterEnum?.[diameter]},{" "}
              {enums.CaseMaterialEnum?.[caseMaterial]}
            </p>
            <p>
              <strong>Dial:</strong> {enums.ColorEnum?.[dialColor]},{" "}
              {enums.DialMarketsEnum?.[dialMarkers]}
            </p>
            <p>
              <strong>Bracelet:</strong> {enums.BraceletMaterialEnum?.[braceletMat]},{" "}
              {enums.ColorEnum?.[braceletColor]}
            </p>
            <p>
              <strong>Features:</strong>{" "}
              {features.map((f) => enums.featuresEnum?.[f] || f).join(", ")}
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={() => setStep(5)}>
              Back
            </Button>
            <Button onClick={handleSubmit} disabled={submitting}>
              {submitting ? "Creating..." : "Create Model"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
