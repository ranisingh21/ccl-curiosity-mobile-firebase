import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

// ---- TYPES ----
export type StateItem = { id: number; name: string };
export type DistrictItem = { id: number; name: string; stateId: number };
export type SchoolItem = { id: number; name: string; blockId: number };

// ---- CONTEXT VALUE TYPE ----
type LocationContextType = {
  states: StateItem[];
  districts: DistrictItem[];
  schools: SchoolItem[];

  selectedState?: StateItem;
  selectedDistrict?: DistrictItem;
  selectedSchool?: SchoolItem;

  fetchStates: () => Promise<void>;
  fetchDistricts: (stateId: number) => Promise<void>;
  fetchSchools: (districtId: number) => Promise<void>;

  selectState: (state: StateItem) => void;
  selectDistrict: (district: DistrictItem) => void;
  selectSchool: (school: SchoolItem) => void;
};

// ---- CONTEXT CREATION ----
export const LocationDataContext = createContext<LocationContextType | undefined>(undefined);

const BASE_URL = "https://cclplayground.justuju.in";

// ---- PROVIDER COMPONENT ----
export const LocationDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [states, setStates] = useState<StateItem[]>([]);
  const [districts, setDistricts] = useState<DistrictItem[]>([]);
  const [schools, setSchools] = useState<SchoolItem[]>([]);
  const [selectedState, setSelectedState] = useState<StateItem>();
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictItem>();
  const [selectedSchool, setSelectedSchool] = useState<SchoolItem>();

  // ---- API CALLS ----
  const fetchStates = async () => {
    try {
      const res = await axios.get<StateItem[]>(`${BASE_URL}/states`);
      setStates(res.data);
    } catch (err) {
      console.error("Error fetching states:", err);
    }
  };

  const fetchDistricts = async (stateId: number) => {
    try {
      const res = await axios.get<DistrictItem[]>(`${BASE_URL}/states/${stateId}/districts`);
      setDistricts(res.data);
    } catch (err) {
      console.error("Error fetching districts:", err);
    }
  };

  const fetchSchools = async (districtId: number) => {
    try {
      const res = await axios.get<SchoolItem[]>(`${BASE_URL}/districts/${districtId}/schools`);
      setSchools(res.data);
    } catch (err) {
      console.error("Error fetching schools:", err);
    }
  };

  // ---- SELECTORS ----
  const selectState = (state: StateItem) => {
    setSelectedState(state);
    setSelectedDistrict(undefined);
    setSelectedSchool(undefined);
    setDistricts([]);
    setSchools([]);
    fetchDistricts(state.id);
  };

  const selectDistrict = (district: DistrictItem) => {
    setSelectedDistrict(district);
    setSelectedSchool(undefined);
    setSchools([]);
    fetchSchools(district.id);
  };

  const selectSchool = (school: SchoolItem) => {
    setSelectedSchool(school);
  };

  // ---- AUTO FETCH STATES ----
  useEffect(() => {
    fetchStates();
  }, []);

  // ✅ RETURN JSX
  return (
    <LocationDataContext.Provider
      value={{
        states,
        districts,
        schools,
        selectedState,
        selectedDistrict,
        selectedSchool,
        fetchStates,
        fetchDistricts,
        fetchSchools,
        selectState,
        selectDistrict,
        selectSchool,
      }}
    >
      {children}
    </LocationDataContext.Provider>
  );
};
