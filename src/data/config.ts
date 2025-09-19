export interface AppConfig {
	dataSource: "test" | "csv" | "datastore";
	urls: {
		fauna_csv: string;
		flora_csv: string;
		communities_csv: string;
		wetlands_csv: string;
		ibra_geojson: string;
	};
	regionPdfs: Record<string, { url: string; fallback_file: string }>;
}

export const config: AppConfig = {
	dataSource: "csv",
	urls: {
		fauna_csv: "./original/data/fauna-master.csv",
		flora_csv: "./original/data/flora-master.csv",
		communities_csv: "./original/data/communities-master.csv",
		wetlands_csv: "./original/data/wetlands-master.csv",
		ibra_geojson: "./original/data/ibra7.geojson",
	},
	regionPdfs: {
		// Will be populated based on original config
	},
};
