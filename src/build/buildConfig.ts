/**
 * @id api-portal-config
 * @additionalProperties false
 */
export interface BuildConfig {
    $schema?: string
    /**
     * Prefix to use for the pages in the tool
     * @pattern ^/.*[^/]$
     */
    basePath?: string
    /**
     * PlantUML diagrams generation settings
     * @additionalProperties false
     */
    diagrams?: {
        /**
         * URI of the default PlantUML server
         * @pattern ^.*[^/]$
         */
        defaultServer?: string
        /**
         * Show or hide the option to modify the PlantUML server
         * @default true
         */
        allowServerChange?: boolean
    }
    /**
     * Home page settings
     * @additionalProperties false
     */
    home?: {
        /**
         * Links to show in the home page
         */
        links?: HomeLink[]
    }
    /**
     * Name of the application to use the navigation bar
     */
    name?: string
    /**
     * API spectral validation settings
     * @additionalProperties false
     */
    validation?: {
        /**
         * If the spectral validation needs to be enabled
         */
        enable: boolean
        /**
         * Path to the file containing the list of Spectral rules
         */
        spectralRulesFile?: string
    }
    /**
     * Browser settings
     * @additionalProperties false
     */
    browser?: {
        /**
         * Filters to show in the browser search section and their default value
         */
        filters?: BrowserFilters
    }
}

/**
 * @additionalProperties false
 */
export interface HomeLink {
    /**
     * Subtitle of the item in the home page
     */
    description?: string
    /**
     * Link of the item in the home page
     */
    link?: string
    /**
     * Title of the item in the home page
     */
    title: string
    /**
     * Subtitle of the item in the home page
     */
    subtitle?: string
    /**
     * Font-awesome icon of the item in the home page
     */
    icon?: string
}

export interface BrowserFilters {
    [sectionName: string]: {
        [categoryName: string]: {
            [propertyName: string]: boolean
        }
    }
}