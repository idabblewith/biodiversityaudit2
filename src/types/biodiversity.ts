export interface BiodiversityRecord {
	id: string;
	name?: string;
	region: string;
	threatStatus?: string;
	managementOptions?: string[];
	// Additional fields will be added based on CSV structure
}

export interface RegionData {
	code: string;
	name: string;
	properties: Record<string, any>;
	pdfUrl?: string;
}

export interface DataSource {
	fauna: BiodiversityRecord[];
	flora: BiodiversityRecord[];
	communities: BiodiversityRecord[];
	wetlands: BiodiversityRecord[];
}
