// import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
// import { getStates, getDistricts, getSchoolsByDistrict, StateItem, DistrictItem, SchoolItem } from "@/api/location";

// type Ctx = {
//   // lists
//   states: string[];
//   districts: string[];
//   schools: string[];
//   // selected
//   selectedState: string;
//   selectedDistrict: string;
//   selectedSchool: string;
//   // actions
//   selectState: (name: string) => void;
//   selectDistrict: (name: string) => void;
//   selectSchool: (name: string) => void;
//   // ids lookup (optional if you need later)
//   stateNameToId: Record<string, number>;
//   districtNameToId: Record<string, number>;
//   // loading flags (optional)
//   loadingStates: boolean;
//   loadingDistricts: boolean;
//   loadingSchools: boolean;
//   error?: string | null;
// };

// const LocationContext = createContext<Ctx | null>(null);

// export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   // ---- SOURCE DATA ----
//   const [states, setStates] = useState<string[]>([]);
//   const [stateNameToId, setStateNameToId] = useState<Record<string, number>>({});
//   const [districts, setDistricts] = useState<string[]>([]);
//   const [districtNameToId, setDistrictNameToId] = useState<Record<string, number>>({});
//   const [schools, setSchools] = useState<string[]>([]);

//   // ---- SELECTION ----
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedSchool, setSelectedSchool] = useState("");

//   // ---- UX flags ----
//   const [loadingStates, setLoadingStates] = useState(false);
//   const [loadingDistricts, setLoadingDistricts] = useState(false);
//   const [loadingSchools, setLoadingSchools] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Load states once
//   // ...same imports...

// // Load states once
// useEffect(() => {
//   setLoadingStates(true);
//   getStates()
//     .then((arr: StateItem[]) => {
//       const names = arr.map(s => s.name).filter(Boolean);
//       const map: Record<string, number> = {};
//       arr.forEach(s => (map[s.name] = s.id));
//       setStates(names);
//       setStateNameToId(map);
//     })
//     .catch((e: unknown) => setError(e instanceof Error ? e.message : "Failed to load states"))
//     .finally(() => setLoadingStates(false));
// }, []);

// // Handlers
// const selectState = useCallback((name: string) => {
//   setSelectedState(name);
//   // reset downstream
//   setSelectedDistrict("");
//   setDistricts([]);
//   setDistrictNameToId({});
//   setSelectedSchool("");
//   setSchools([]);

//   const id = stateNameToId[name];
//   if (id == null) return;

//   setLoadingDistricts(true);
//   getDistricts(id)
//     .then((arr: DistrictItem[]) => {
//       const names = arr.map(d => d.name).filter(Boolean);
//       const map: Record<string, number> = {};
//       arr.forEach(d => (map[d.name] = d.id));
//       setDistricts(names);
//       setDistrictNameToId(map);
//     })
//     .catch((e: unknown) => setError(e instanceof Error ? e.message : "Failed to load districts"))
//     .finally(() => setLoadingDistricts(false));
// }, [stateNameToId]);

// const selectDistrict = useCallback((name: string) => {
//   setSelectedDistrict(name);
//   // reset downstream
//   setSelectedSchool("");
//   setSchools([]);

//   const id = districtNameToId[name];
//   if (id == null) return;

//   setLoadingSchools(true);
//   getSchoolsByDistrict(id)
//     .then((arr: SchoolItem[]) => {
//       const names = arr.map(s => s.name).filter(Boolean);
//       setSchools(names);
//     })
//     .catch((e: unknown) => setError(e instanceof Error ? e.message : "Failed to load schools"))
//     .finally(() => setLoadingSchools(false));
// }, [districtNameToId]);

//   const value = useMemo<Ctx>(() => ({
//     states, districts, schools,
//     selectedState, selectedDistrict, selectedSchool,
//     selectState, selectDistrict, selectSchool,
//     stateNameToId, districtNameToId,
//     loadingStates, loadingDistricts, loadingSchools,
//     error,
//   }), [
//     states, districts, schools,
//     selectedState, selectedDistrict, selectedSchool,
//     selectState, selectDistrict, selectSchool,
//     stateNameToId, districtNameToId,
//     loadingStates, loadingDistricts, loadingSchools,
//     error,
//   ]);

//   return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
// };

// // neat hook
// export const useLocation = () => {
//   const ctx = useContext(LocationContext);
//   if (!ctx) throw new Error("useLocation must be used within <LocationProvider>");
//   return ctx;
// };
