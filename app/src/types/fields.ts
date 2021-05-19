import { TranslateResult } from 'vue-i18n';

type Translations = {
	language: string;
	translation: string;
};

export type Width = 'half' | 'half-left' | 'half-right' | 'full' | 'fill';

export const geometryTypes = [
	'Point',
	'LineString',
	'Polygon',
	'MultiPoint',
	'MultiLineString',
	'MultiPolygon',
] as const;
export type GeometryType = typeof geometryTypes[number] | undefined;

export const types = [
	'alias',
	'bigInteger',
	'boolean',
	'date',
	'dateTime',
	'decimal',
	'float',
	'integer',
	'json',
	'string',
	'text',
	'time',
	'timestamp',
	'binary',
	'uuid',
	'hash',
	'csv',
	'geometry',
	'unknown',
] as const;
export type DataType = typeof types[number];

export const localTypes = [
	'standard',
	'file',
	'files',
	'm2o',
	'o2m',
	'm2m',
	'm2a',
	'presentation',
	'translations',
] as const;
export type LocalType = typeof localTypes[number];

export type FieldSchema = {
	/** @todo import this from @directus/schema when that's launched */
	name: string;
	table: string;
	type: string;
	default_value: any | null;
	max_length: number | null;
	is_nullable: boolean;
	is_primary_key: boolean;
	has_auto_increment: boolean;
	foreign_key_column: string | null;
	foreign_key_table: string | null;
	comment: string | null;
	geometry_type?: GeometryType;

	// Postgres Only
	schema?: string;
	foreign_key_schema?: string | null;
};

export type FieldMeta = {
	id: number;
	collection: string;
	field: string;
	group: number | null;
	hidden: boolean;
	interface: string | null;
	display: string | null;
	options: null | Record<string, any>;
	display_options: null | Record<string, any>;
	readonly: boolean;
	sort: number | null;
	special: string[] | null;
	translations: null | Translations[];
	width: Width | null;
	note: string | TranslateResult | null;
	system?: true;
};

export interface FieldRaw {
	collection: string;
	field: string;
	type: typeof types[number];
	schema: FieldSchema | null;
	meta: FieldMeta | null;
}

export interface Field extends FieldRaw {
	name: string | TranslateResult;
}
