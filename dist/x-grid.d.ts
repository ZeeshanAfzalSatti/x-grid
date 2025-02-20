export {LicenseInfo} from '@material-ui/x-license';
import * as React$1 from 'react';
import {InputBaseProps} from '@material-ui/core/InputBase';
import * as _material_ui_core_OverridableComponent from '@material-ui/core/OverridableComponent';
import * as _material_ui_core from '@material-ui/core';
import {PopperProps} from '@material-ui/core/Popper';
import {TextFieldProps} from '@material-ui/core/TextField';
import * as _material_ui_core_Button from '@material-ui/core/Button';
import {ButtonProps} from '@material-ui/core/Button';
import * as styles from '@material-ui/core/styles';
import * as reselect from 'reselect';
import {OutputSelector} from 'reselect';

/**
 * The mode of the cell.
 */
declare type GridCellMode = 'edit' | 'view';
/**
 * The cell value type.
 */
declare type GridCellValue = string | number | boolean | Date | null | undefined | object;

/**
 * The coordinates of cell represented by their row and column indexes.
 */
interface GridCellIndexCoordinates {
    colIndex: number;
    rowIndex: number;
}

/**
 * The coordinates of column header represented by their row and column indexes.
 */
interface GridColumnHeaderIndexCoordinates {
    colIndex: number;
}

declare type GridRowsProp = Readonly<GridRowData[]>;
declare type GridRowData = {
    [key: string]: any;
};
/**
 * The key value object representing the data of a row.
 */
declare type GridRowModel = GridRowData;
declare type GridUpdateAction = 'delete';

interface GridRowModelUpdate extends GridRowData {
    _action?: GridUpdateAction;
}

/**
 * The type of Id supported by the grid.
 */
declare type GridRowId = string | number;
/**
 * The function to retrieve the id of a [[GridRowData]].
 */
declare type GridRowIdGetter = (row: GridRowData) => GridRowId;

/**
 * An helper function to check if the id provided is valid.
 *
 * @param id Id as [[GridRowId]].
 * @param row Row as [[GridRowData]].
 * @returns a boolean
 */
declare function checkGridRowIdIsValid(id: GridRowId, row: GridRowModel | Partial<GridRowModel>, detailErrorMessage?: string): boolean;

/**
 * Object passed as parameter in the column [[GridColDef]] cell renderer.
 */
interface GridCellParams {
    /**
     * The grid row id.
     */
    id: GridRowId;
    /**
     * The column field of the cell that triggered the event
     */
    field: string;
    /**
     * The cell value, but if the column has valueGetter, use getValue.
     */
    value: GridCellValue;
    /**
     * The cell value formatted with the column valueFormatter.
     */
    formattedValue: GridCellValue;
    /**
     * The row model of the row that the current cell belongs to.
     */
    row: GridRowModel;
    /**
     * The column of the row that the current cell belongs to.
     */
    colDef: any;
    /**
     * GridApi that let you manipulate the grid.
     */
    api: any;
    /**
     * If true, the cell is editable.
     */
    isEditable?: boolean;
    /**
     * The mode of the cell.
     */
    cellMode: GridCellMode;
    /**
     * If true, the cell is the active element.
     */
    hasFocus: boolean;
    /**
     * the tabIndex value.
     */
    tabIndex: 0 | -1;
    /**
     * Get the cell value of a row and field.
     * @param id
     * @param field
     */
    getValue: (id: GridRowId, field: string) => GridCellValue;
}

/**
 * Alias of GridCellParams.
 */
declare type GridValueGetterParams = Omit<GridCellParams, 'formattedValue' | 'isEditable'>;
/**
 * Alias of GridCellParams.
 */
declare type GridValueFormatterParams = Omit<GridCellParams, 'formattedValue' | 'isEditable'>;

/**
 * A function used to process cellClassName params.
 */
declare type GridCellClassFn = (params: GridCellParams) => string;
/**
 * The union type representing the [[GridColDef]] cell class type.
 */
declare type GridCellClassNamePropType = string | GridCellClassFn;

/**
 * Object passed as parameter in the column [[GridColDef]] header renderer.
 */
interface GridColumnHeaderParams {
    /**
     * The column field of the column that triggered the event
     */
    field: string;
    /**
     * The column of the current header component.
     */
    colDef: any;
    /**
     * API ref that let you manipulate the grid.
     */
    api: any;
}

/**
 * A function used to process headerClassName params.
 */
declare type GridColumnHeaderClassFn = (params: GridColumnHeaderParams) => string;
/**
 * The union type representing the [[GridColDef]] column header class type.
 */
declare type GridColumnHeaderClassNamePropType = string | GridColumnHeaderClassFn;

interface GridFilterItem {
    id?: number;
    columnField?: string;
    value?: any;
    operatorValue?: string;
}

declare enum GridLinkOperator {
    And = "and",
    Or = "or"
}

interface GridFilterInputValueProps {
    item: GridFilterItem;
    applyValue: (value: GridFilterItem) => void;
    apiRef: any;
}

interface GridFilterOperator {
    label?: string;
    value: string;
    getApplyFilterFn: (filterItem: GridFilterItem, column: any) => null | ((params: GridCellParams) => boolean);
    InputComponent: React$1.JSXElementConstructor<GridFilterInputValueProps>;
    InputComponentProps?: Record<string, any>;
}

declare type GridSortDirection = 'asc' | 'desc' | null | undefined;
declare type GridFieldComparatorList = {
    field: string;
    comparator: GridComparatorFn;
}[];

interface GridSortCellParams {
    id: GridRowId;
    field: string;
    value: GridCellValue;
    api: any;
}

/**
 * The type of the sort comparison function.
 */
declare type GridComparatorFn = (v1: GridCellValue, v2: GridCellValue, cellParams1: GridSortCellParams, cellParams2: GridSortCellParams) => number;

/**
 * Object that represents the column sorted data, part of the [[GridSortModel]].
 */
interface GridSortItem {
    /**
     * The column field identifier.
     */
    field: string;
    /**
     * The direction of the column that the grid should sort.
     */
    sort: GridSortDirection;
}

/**
 * The model used for sorting the grid.
 */
declare type GridSortModel = GridSortItem[];

declare const GRID_STRING_COLUMN_TYPE = "string";
declare const GRID_NUMBER_COLUMN_TYPE = "number";
declare const GRID_DATE_COLUMN_TYPE = "date";
declare const GRID_DATETIME_COLUMN_TYPE = "dateTime";
declare const GRID_BOOLEAN_COLUMN_TYPE = "boolean";
declare type GridNativeColTypes = 'string' | 'number' | 'date' | 'dateTime' | 'boolean';
declare type GridColType = GridNativeColTypes | string;

/**
 * Alignment used in position elements in Cells.
 */
declare type GridAlignment = 'left' | 'right' | 'center';

/**
 * Column Definition interface.
 */
interface GridColDef {
    /**
     * The column identifier. It's used to map with [[GridRowData]] values.
     */
    field: string;
    /**
     * The title of the column rendered in the column header cell.
     */
    headerName?: string;
    /**
     * The description of the column rendered as tooltip if the column header name is not fully displayed.
     */
    description?: string;
    /**
     * Set the width of the column.
     * @default 100
     */
    width?: number;
    /**
     * If set, it indicates that a column has fluid width. Range [0, ∞).
     */
    flex?: number;
    /**
     * If `true`, hide the column.
     * @default false
     */
    hide?: boolean;
    /**
     * If `true`, the column is sortable.
     * @default true
     */
    sortable?: boolean;
    /**
     * If `true`, the column is resizable.
     * @default true
     */
    resizable?: boolean;
    /**
     * If `true`, the cells of the column are editable.
     * @default true
     */
    editable?: boolean;
    /**
     * A comparator function used to sort rows.
     */
    sortComparator?: GridComparatorFn;
    /**
     * Type allows to merge this object with a default definition [[GridColDef]].
     * @default 'string'
     */
    type?: GridColType;
    /**
     * Allows to align the column values in cells.
     */
    align?: GridAlignment;
    /**
     * Function that allows to get a specific data instead of field to render in the cell.
     * @param params
     */
    valueGetter?: (params: GridValueGetterParams) => GridCellValue;
    /**
     * Function that allows to apply a formatter before rendering its value.
     * @param {GridValueFormatterParams} params Object contaning parameters for the formatter.
     * @returns {GridCellValue} The formatted value.
     */
    valueFormatter?: (params: GridValueFormatterParams) => GridCellValue;
    /**
     * Function that takes the user-entered value and converts it to a value used internally.
     * @param {GridCellValue} value The user-entered value.
     * @param {GridCellParams} params The params when called before saving the value.
     * @returns {GridCellValue} The converted value to use internally.
     */
    valueParser?: (value: GridCellValue, params?: GridCellParams) => GridCellValue;
    /**
     * Class name that will be added in cells for that column.
     */
    cellClassName?: GridCellClassNamePropType;
    /**
     * Allows to override the component rendered as cell for this column.
     * @param params
     */
    renderCell?: (params: GridCellParams) => React$1.ReactNode;
    /**
     * Allows to override the component rendered in edit cell mode for this column.
     * @param params
     */
    renderEditCell?: (params: GridCellParams) => React$1.ReactNode;
    /**
     * Class name that will be added in the column header cell.
     */
    headerClassName?: GridColumnHeaderClassNamePropType;
    /**
     * Allows to render a component in the column header cell.
     * @param params
     */
    renderHeader?: (params: GridColumnHeaderParams) => React$1.ReactNode;
    /**
     * Header cell element alignment.
     */
    headerAlign?: GridAlignment;
    /**
     * Toggle the visibility of the sort icons.
     * @default false
     */
    hideSortIcons?: boolean;
    /**
     * Allows to disable the click event in cells.
     * @default false
     */
    disableClickEventBubbling?: boolean;
    /**
     * If `true`, the column menu is disabled for this column.
     * @default false
     */
    disableColumnMenu?: boolean;
    /**
     * If `true`, the column is filterable.
     * @default true
     */
    filterable?: boolean;
    /**
     * Allows setting the filter operators for this column.
     */
    filterOperators?: GridFilterOperator[];
}

interface GridColumnProp extends Omit<GridColDef, 'filterOperators'> {
    filterOperators?: GridFilterOperator[] | string;
}

declare type GridColumns = GridColDef[];
declare type GridColTypeDef = Omit<GridColDef, 'field'> & {
    extendType?: GridNativeColTypes;
};

/**
 * Meta Info about columns.
 */
interface GridColumnsMeta {
    totalWidth: number;
    positions: number[];
}

declare type GridColumnLookup = {
    [field: string]: GridColDef;
};

interface GridInternalColumns {
    all: string[];
    lookup: GridColumnLookup;
}

declare const getInitialGridColumnsState: () => GridInternalColumns;

declare const gridCheckboxSelectionColDef: GridColDef;

declare const getGridColDef: (columnTypes: any, type: GridColType | undefined) => any;

declare function gridDateFormatter({value}: {
    value: GridCellValue;
}): string | number | boolean | object | null | undefined;

declare function gridDateTimeFormatter({value}: {
    value: GridCellValue;
}): string | number | boolean | object | null | undefined;

declare const GRID_DATE_COL_DEF: GridColTypeDef;
declare const GRID_DATETIME_COL_DEF: GridColTypeDef;

declare const getGridDateOperators: (showTime?: boolean) => GridFilterOperator[];

declare const GRID_NUMERIC_COL_DEF: GridColTypeDef;

declare const getGridNumericColumnOperators: () => GridFilterOperator[];

declare const GRID_STRING_COL_DEF: GridColTypeDef;

declare type GridColumnTypesRecord = Record<GridColType, GridColTypeDef>;

declare const DEFAULT_GRID_COL_TYPE_KEY = "__default__";
declare const getGridDefaultColumnTypes: () => GridColumnTypesRecord;

declare const getGridStringOperators: () => GridFilterOperator[];

interface CursorCoordinates {
    x: number;
    y: number;
}

/**
 * The size of a container.
 */
interface ElementSize {
    /**
     * The height of a container or HTMLElement.
     */
    height: number;
    /**
     * The width of a container or HTMLElement.
     */
    width: number;
}

interface GridScrollBarState {
    /**
     * Indicates if a vertical scrollbar is visible.
     */
    hasScrollY: boolean;
    /**
     * Indicates if an horizontal scrollbar is visible.
     */
    hasScrollX: boolean;
    /**
     * The scrollbar size.
     */
    scrollBarSize: {
        x: number;
        y: number;
    };
}

/**
 * the size of the container holding the set of rows visible to the user.
 */
declare type GridViewportSizeState = ElementSize;

/**
 * The set of container properties calculated on resize of the grid.
 */
interface GridContainerProps {
    /**
     * If `true`, the grid is virtualizing the rendering of rows.
     */
    isVirtualized: boolean;
    /**
     * The number of rows that fit in the rendering zone.
     */
    renderingZonePageSize: number;
    /**
     * The number of rows that fit in the viewport.
     */
    viewportPageSize: number;
    /**
     * The total number of rows that are scrollable in the viewport. If pagination then it would be page size. If not, it would be the full set of rows.
     */
    virtualRowsCount: number;
    /**
     * The last page number.
     */
    lastPage: number;
    /**
     * The total element size required to render the set of rows, including scrollbars.
     */
    totalSizes: ElementSize;
    /**
     * The viewport size including scrollbars.
     */
    windowSizes: ElementSize;
    /**
     * The size of the container containing all the rendered rows.
     */
    renderingZone: ElementSize;
    /**
     * The size of the available scroll height in the rendering zone container.
     */
    renderingZoneScrollHeight: number;
    /**
     * The total element size required to render the full set of rows and columns, minus the scrollbars.
     */
    dataContainerSizes: ElementSize;
}

interface GridEditCellProps {
    value: GridCellValue;

    [prop: string]: any;
}

declare type GridEditRowProps = {
    [field: string]: GridEditCellProps;
};
declare type GridEditRowsModel = {
    [rowId: string]: GridEditRowProps;
};

declare const GridFeatureModeConstant: {
    client: "client";
    server: "server";
};
declare type GridFeatureMode = 'client' | 'server';

interface GridFilterModelState {
    items: GridFilterItem[];
    linkOperator?: GridLinkOperator;
}

declare type GridFilterModel = GridFilterModelState;
declare const getInitialGridFilterState: () => GridFilterModelState;

/**
 * Set the types of the texts in the grid.
 */
interface GridLocaleText {
    noRowsLabel: string;
    noResultsOverlayLabel: string;
    errorOverlayDefaultLabel: string;
    toolbarDensity: React.ReactNode;
    toolbarDensityLabel: string;
    toolbarDensityCompact: string;
    toolbarDensityStandard: string;
    toolbarDensityComfortable: string;
    toolbarColumns: React.ReactNode;
    toolbarColumnsLabel: string;
    toolbarFilters: React.ReactNode;
    toolbarFiltersLabel: string;
    toolbarFiltersTooltipHide: React.ReactNode;
    toolbarFiltersTooltipShow: React.ReactNode;
    toolbarFiltersTooltipActive: (count: number) => React.ReactNode;
    toolbarExport: React.ReactNode;
    toolbarExportLabel: string;
    toolbarExportCSV: React.ReactNode;
    columnsPanelTextFieldLabel: string;
    columnsPanelTextFieldPlaceholder: string;
    columnsPanelDragIconLabel: string;
    columnsPanelShowAllButton: React.ReactNode;
    columnsPanelHideAllButton: React.ReactNode;
    filterPanelAddFilter: React.ReactNode;
    filterPanelDeleteIconLabel: string;
    filterPanelOperators: React.ReactNode;
    filterPanelOperatorAnd: React.ReactNode;
    filterPanelOperatorOr: React.ReactNode;
    filterPanelColumns: React.ReactNode;
    filterPanelInputLabel: string;
    filterPanelInputPlaceholder: string;
    filterOperatorContains: string;
    filterOperatorEquals: string;
    filterOperatorStartsWith: string;
    filterOperatorEndsWith: string;
    filterOperatorIs: string;
    filterOperatorNot: string;
    filterOperatorAfter: string;
    filterOperatorOnOrAfter: string;
    filterOperatorBefore: string;
    filterOperatorOnOrBefore: string;
    filterValueAny: string;
    filterValueTrue: string;
    filterValueFalse: string;
    columnMenuLabel: string;
    columnMenuShowColumns: React.ReactNode;
    columnMenuFilter: React.ReactNode;
    columnMenuHideColumn: React.ReactNode;
    columnMenuUnsort: React.ReactNode;
    columnMenuSortAsc: React.ReactNode;
    columnMenuSortDesc: React.ReactNode;
    columnHeaderFiltersTooltipActive: (count: number) => React.ReactNode;
    columnHeaderFiltersLabel: string;
    columnHeaderSortIconLabel: string;
    footerRowSelected: (count: number) => React.ReactNode;
    footerTotalRows: React.ReactNode;
    footerTotalVisibleRows: (visibleCount: number, totalCount: number) => React.ReactNode;
    checkboxSelectionHeaderName: string;
    booleanCellTrueLabel: string;
    booleanCellFalseLabel: string;
}

declare type GridTranslationKeys = keyof GridLocaleText;

/**
 * The grid locale text API [[apiRef]].
 */
interface GridLocaleTextApi {
    /**
     * Returns the translation for the `key`.
     * @param {T} key One of the keys in [[GridLocaleText]].
     * @returns {GridLocaleText[T]} The translated value.
     */
    getLocaleText: <T extends GridTranslationKeys>(key: T) => GridLocaleText[T];
}

/**
 * Available densities.
 */
declare type GridDensity = 'compact' | 'standard' | 'comfortable';

/**
 * Density enum.
 */
declare enum GridDensityTypes {
    Compact = "compact",
    Standard = "standard",
    Comfortable = "comfortable"
}

interface Logger {
    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
}

/**
 * Object passed as parameter of the filter changed event.
 */
interface GridFilterModelParams {
    /**
     * The filter model.
     */
    filterModel: GridFilterModel;
    /**
     * The full set of columns.
     */
    columns: GridColumns;
    /**
     * The full set of rows.
     */
    rows: Map<GridRowId, GridRowModel>;
    /**
     * The set of currently visible rows.
     */
    visibleRows: Map<GridRowId, GridRowModel>;
    /**
     * Api that let you manipulate the grid.
     */
    api: any;
}

/**
 * Object passed as parameter of the page change event handler.
 */
interface GridPageChangeParams {
    /**
     * The new page.
     */
    page: number;
    /**
     * The total number of pages.
     */
    pageCount: number;
    /**
     * The number of rows in a page.
     */
    pageSize: number;
    /**
     * The total number of rows.
     */
    rowCount: number;
    /**
     * The pagination mode set in options.
     * 'client' means that the pagination is handled on the client-side.
     * 'server' means that the pagination is handled on the server-side.
     */
    paginationMode: GridFeatureMode;
}

/**
 * Object passed as parameter in the column [[GridColDef]] cell renderer.
 */
interface GridRowParams {
    /**
     * The grid row id.
     */
    id: GridRowId;
    /**
     * The row model of the row that the current cell belongs to.
     */
    row: GridRowModel;
    /**
     * All grid columns.
     */
    columns: any;
    /**
     * GridApiRef that let you manipulate the grid.
     */
    api: any;
    /**
     * Get the cell value of a row and field.
     * @param id
     * @param field
     */
    getValue: (id: GridRowId, field: string) => GridCellValue;
}

/**
 * Object passed as parameter as the row selected event handler.
 */
interface GridRowSelectedParams {
    /**
     * The row data of the row that triggers the event.
     */
    data: GridRowModel;
    /**
     * The selected state of the row that triggers the event.
     */
    isSelected: boolean;
    /**
     * GridApiRef that let you manipulate the grid.
     */
    api: any;
}

/**
 * Object passed as parameter as the selection change event handler.
 */
interface GridSelectionModelChangeParams {
    /**
     * The set of rows that had their selection state change.
     */
    selectionModel: GridRowId[];
}

/**
 * Object passed as parameter of the column sorted event.
 */
interface GridSortModelParams {
    /**
     * The sort model used to sort the grid.
     */
    sortModel: GridSortModel;
    /**
     * The full set of columns.
     */
    columns: GridColumns;
    /**
     * Api that let you manipulate the grid.
     */
    api: any;
}

declare type GridSelectionModel = GridRowId[];

interface GridEditCellPropsParams {
    id: GridRowId;
    field: string;
    props: GridEditCellProps;
}

interface GridEditCellValueParams {
    id: GridRowId;
    field: string;
    value: GridCellValue;
}

interface GridCellModeChangeParams {
    id: GridRowId;
    field: string;
    api: any;
    mode: GridCellMode;
}

interface GridEditRowModelParams {
    model: GridEditRowsModel;
    api: any;
}

/**
 * Object passed as parameter in the onRowsScrollEnd callback.
 */
interface GridRowScrollEndParams {
    /**
     * The number of rows that fit in the viewport.
     */
    viewportPageSize: number;
    /**
     * The number of rows allocated for the rendered zone.
     */
    virtualRowsCount: number;
    /**
     * The grid visible columns.
     */
    visibleColumns: GridColumns;
    /**
     * API ref that let you manipulate the grid.
     */
    api: any;
}

/**
 * Object passed as parameter of the column order change event.
 */
interface GridColumnOrderChangeParams {
    /**
     * The HTMLElement column header element.
     */
    element?: HTMLElement | null;
    /**
     * The column field of the column that triggered the event.
     */
    field: string;
    /**
     * The column of the current header component.
     */
    colDef: any;
    /**
     * The target column index.
     */
    targetIndex: number;
    /**
     * The old column index.
     */
    oldIndex: number;
    /**
     * API ref that let you manipulate the grid.
     */
    api: any;
}

/**
 * Object passed as parameter onto the resize event handler.
 */
interface GridResizeParams {
    /**
     * The container size.
     */
    containerSize: ElementSize;
}

/**
 * Object passed as parameter of the column resize event.
 */
interface GridColumnResizeParams {
    /**
     * The HTMLElement column header element.
     */
    element?: HTMLElement | null;
    /**
     * The column of the current header component.
     */
    colDef: any;
    /**
     * API ref that let you manipulate the grid.
     */
    api: any;
    /**
     * The width of the column.
     */
    width: number;
}

/**
 * Object passed as parameter of the column visibility change event.
 */
interface GridColumnVisibilityChangeParams {
    /**
     * The field of the column which visibility changed.
     */
    field: string;
    /**
     * The column of the current header component.
     */
    colDef: any;
    /**
     * API ref that let you manipulate the grid.
     */
    api: any;
    /**
     * The visibility state of the column.
     */
    isVisible: boolean;
}

interface GridClasses {
    /**
     * Styles applied to the root element.
     */
    root?: string;
    /**
     * Styles applied to the columnHeader element.
     */
    columnHeader?: string;
    /**
     * Styles applied to the row element.
     */
    row?: string;
    /**
     * Styles applied to the cell element.
     */
    cell?: string;
}

/**
 * Grid options react prop, containing all the setting for the grid.
 */
interface GridOptions {
    /**
     * If `true`, the grid height is dynamic and follow the number of rows in the grid.
     * @default false
     */
    autoHeight?: boolean;
    /**
     * If `true`, the pageSize is calculated according to the container size and the max number of rows to avoid rendering a vertical scroll bar.
     * @default false
     */
    autoPageSize?: boolean;
    /**
     * If `true`, the grid get a first column with a checkbox that allows to select rows.
     * @default false
     */
    checkboxSelection?: boolean;
    /**
     * Number of columns rendered outside the grid viewport.
     * @default 2
     */
    columnBuffer: number;
    /**
     * Extend native column types with your new column types.
     */
    columnTypes: GridColumnTypesRecord;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: GridClasses;
    /**
     * Set the density of the grid.
     */
    density: GridDensity;
    /**
     * If `true`, rows will not be extended to fill the full width of the grid container.
     * @default false
     */
    disableExtendRowFullWidth?: boolean;
    /**
     * If `true`, column filters are disabled.
     * @default false
     */
    disableColumnFilter?: boolean;
    /**
     * If `true`, the column menu is disabled.
     * @default false
     */
    disableColumnMenu?: boolean;
    /**
     * If `true`, reordering columns is disabled.
     * @default false
     */
    disableColumnReorder?: boolean;
    /**
     * If `true`, resizing columns is disabled.
     * @default false
     */
    disableColumnResize?: boolean;
    /**
     * If `true`, hiding/showing columns is disabled.
     * @default false
     */
    disableColumnSelector?: boolean;
    /**
     * If `true`, density selector is disabled.
     * @default false
     */
    disableDensitySelector?: boolean;
    /**
     * If `true`, filtering with multiple columns is disabled.
     * @default false
     */
    disableMultipleColumnsFiltering?: boolean;
    /**
     * If `true`, multiple selection using the CTRL or CMD key is disabled.
     * @default false
     */
    disableMultipleSelection?: boolean;
    /**
     * If `true`, sorting with multiple columns is disabled.
     * @default false
     */
    disableMultipleColumnsSorting?: boolean;
    /**
     * If `true`, the selection on click on a row or cell is disabled.
     * @default false
     */
    disableSelectionOnClick?: boolean;
    /**
     * Edit cell or rows can be processed on the server or client-side.
     * Set it to 'client' if you would like to handle editing on the client-side.
     * Set it to 'server' if you would like to handle editing on the server-side.
     */
    editMode?: GridFeatureMode;
    /**
     * Set the edit rows model of the grid.
     */
    editRowsModel?: GridEditRowsModel;
    /**
     * Filtering can be processed on the server or client-side.
     * Set it to 'client' if you would like to handle filtering on the client-side.
     * Set it to 'server' if you would like to handle filtering on the server-side.
     */
    filterMode?: GridFeatureMode;
    /**
     * Set the filter model of the grid.
     */
    filterModel?: GridFilterModel;
    /**
     * Function that applies CSS classes dynamically on cells.
     */
    getCellClassName?: (params: GridCellParams) => string;
    /**
     * Function that applies CSS classes dynamically on rows.
     */
    getRowClassName?: (params: GridRowParams) => string;
    /**
     * Set the height in pixel of the column headers in the grid.
     * @default 56
     */
    headerHeight: number;
    /**
     * If `true`, the footer component is hidden.
     * @default false
     */
    hideFooter?: boolean;
    /**
     * If `true`, the pagination component in the footer is hidden.
     * @default false
     */
    hideFooterPagination?: boolean;
    /**
     * If `true`, the row count in the footer is hidden.
     * @default false
     */
    hideFooterRowCount?: boolean;
    /**
     * If `true`, the selected row count in the footer is hidden.
     * @default false
     */
    hideFooterSelectedRowCount?: boolean;
    /**
     * Callback fired when a cell is rendered, returns true if the cell is editable.
     */
    isCellEditable?: (params: GridCellParams) => boolean;
    /**
     * Determines if a row can be selected.
     */
    isRowSelectable?: (params: GridRowParams) => boolean;
    /**
     * Set the locale text of the grid.
     * You can find all the translation keys supported in [the source](https://github.com/mui-org/material-ui-x/blob/HEAD/packages/grid/_modules_/grid/constants/localeTextConstants.ts) in the GitHub repository.
     */
    localeText: Partial<GridLocaleText>;
    /**
     * Pass a custom logger in the components that implements the [[Logger]] interface.
     * @default null
     */
    logger: Logger;
    /**
     * Allows to pass the logging level or false to turn off logging.
     * @default debug
     */
    logLevel?: string | false;
    /**
     * Callback fired when the edit cell value changed.
     * @param handler
     */
    onEditCellChange?: (params: GridEditCellPropsParams, event?: React$1.SyntheticEvent) => void;
    /**
     * Callback fired when the cell changes are committed.
     * @param handler
     */
    onEditCellChangeCommitted?: (params: GridEditCellPropsParams, event?: React$1.SyntheticEvent) => void;
    /**
     * Callback fired when the EditRowModel changed.
     * @param handler
     */
    onEditRowModelChange?: (params: GridEditRowModelParams) => void;
    /**
     * Callback fired when an exception is thrown in the grid, or when the `showError` API method is called.
     */
    onError?: (args: any) => void;
    /**
     * Callback fired when the active element leaves a cell.
     * @param param With all properties from [[GridCellParams]].
     * @param event [[React.MouseEvent]].
     */
    onCellBlur?: (params: GridCellParams, event: React$1.SyntheticEvent) => void;
    /**
     * Callback fired when a click event comes from a cell element.
     * @param param With all properties from [[GridCellParams]].
     * @param event [[React.MouseEvent]].
     */
    onCellClick?: (params: GridCellParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a double click event comes from a cell element.
     * @param param With all properties from [[CellParams]].
     * @param event [[React.MouseEvent]].
     */
    onCellDoubleClick?: (params: GridCellParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a keydown event comes from a cell element.
     * @param param With all properties from [[GridCellParams]].
     * @param event [[React.KeyboardEvent]].
     */
    onCellKeyDown?: (params: GridCellParams, event: React$1.KeyboardEvent) => void;
    /**
     * Callback fired when a mouseover event comes from a cell element.
     * @param param With all properties from [[GridCellParams]].
     * @param event [[React.MouseEvent]].
     */
    onCellOver?: (params: GridCellParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a mouseout event comes from a cell element.
     * @param param With all properties from [[GridCellParams]].
     * @param event [[React.MouseEvent]].
     */
    onCellOut?: (params: GridCellParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a mouse enter event comes from a cell element.
     * @param param With all properties from [[GridCellParams]].
     * @param event [[React.MouseEvent]].
     */
    onCellEnter?: (params: GridCellParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a mouse leave event comes from a cell element.
     * @param param With all properties from [[GridCellParams]].
     * @param event [[React.MouseEvent]].
     */
    onCellLeave?: (params: GridCellParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when the cell mode changed.
     * @param handler
     */
    onCellModeChange?: (params: GridCellModeChangeParams) => void;
    /**
     * Callback fired when the cell value changed.
     * @param handler
     */
    onCellValueChange?: (params: GridEditCellValueParams) => void;
    /**
     * Callback fired when a click event comes from a column header element.
     * @param param With all properties from [[GridColumnHeaderParams]].
     * @param event [[React.MouseEvent]].
     */
    onColumnHeaderClick?: (param: GridColumnHeaderParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a double click event comes from a column header element.
     * @param param With all properties from [[GridColumnHeaderParams]].
     * @param event [[React.MouseEvent]].
     */
    onColumnHeaderDoubleClick?: (param: GridColumnHeaderParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a mouseover event comes from a column header element.
     * @param param With all properties from [[GridColumnHeaderParams]].
     * @param event [[React.MouseEvent]].
     */
    onColumnHeaderOver?: (param: GridColumnHeaderParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a mouseout event comes from a column header element.
     * @param param With all properties from [[GridColumnHeaderParams]].
     * @param event [[React.MouseEvent]].
     */
    onColumnHeaderOut?: (param: GridColumnHeaderParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a mouse enter event comes from a column header element.
     * @param param With all properties from [[GridColumnHeaderParams]].
     * @param event [[React.MouseEvent]].
     */
    onColumnHeaderEnter?: (param: GridColumnHeaderParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a mouse leave event comes from a column header element.
     * @param param With all properties from [[GridColumnHeaderParams]].
     * @param event [[React.MouseEvent]].
     */
    onColumnHeaderLeave?: (param: GridColumnHeaderParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a column is reordered.
     * @param param With all properties from [[GridColumnHeaderParams]].
     */
    onColumnOrderChange?: (param: GridColumnOrderChangeParams) => void;
    /**
     * Callback fired when a column is resizing.
     * @param param With all properties from [[GridColumnResizeParams]].
     */
    onColumnResize?: (param: GridColumnResizeParams) => void;
    /**
     * Callback fired when a column is resized.
     * @param param With all properties from [[GridColumnResizeParams]].
     */
    onColumnResizeCommitted?: (param: GridColumnResizeParams) => void;
    /**
     * Callback fired when a column visibility changes.
     * @param param With all properties from [[GridColumnVisibilityChangeParams]].
     */
    onColumnVisibilityChange?: (param: GridColumnVisibilityChangeParams) => void;
    /**
     * Callback fired when the Filter model changes before the filters are applied.
     * @param param With all properties from [[GridFilterModelParams]].
     */
    onFilterModelChange?: (params: GridFilterModelParams) => void;
    /**
     * Callback fired when the current page has changed.
     * @param param With all properties from [[GridPageChangeParams]].
     */
    onPageChange?: (param: GridPageChangeParams) => void;
    /**
     * Callback fired when the page size has changed.
     * @param param With all properties from [[GridPageChangeParams]].
     */
    onPageSizeChange?: (param: GridPageChangeParams) => void;
    /**
     * Callback fired when a click event comes from a row container element.
     * @param param With all properties from [[GridRowParams]].
     * @param event [[React.MouseEvent]].
     */
    onRowClick?: (param: GridRowParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when scrolling to the bottom of the grid viewport.
     * @param param
     */
    onRowsScrollEnd?: (params: GridRowScrollEndParams) => void;
    /**
     * Callback fired when a double click event comes from a row container element.
     * @param param With all properties from [[RowParams]].
     * @param event [[React.MouseEvent]].
     */
    onRowDoubleClick?: (param: GridRowParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a mouseover event comes from a row container element.
     * @param param With all properties from [[GridRowParams]].
     * @param event [[React.MouseEvent]].
     */
    onRowOver?: (param: GridRowParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a mouseout event comes from a row container element.
     * @param param With all properties from [[GridRowParams]].
     * @param event [[React.MouseEvent]].
     */
    onRowOut?: (param: GridRowParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a mouse enter event comes from a row container element.
     * @param param With all properties from [[GridRowParams]].
     * @param event [[React.MouseEvent]].
     */
    onRowEnter?: (param: GridRowParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when a mouse leave event comes from a row container element.
     * @param param With all properties from [[GridRowParams]].
     * @param event [[React.MouseEvent]].
     */
    onRowLeave?: (param: GridRowParams, event: React$1.MouseEvent) => void;
    /**
     * Callback fired when one row is selected.
     * @param param With all properties from [[GridRowSelectedParams]].
     */
    onRowSelected?: (param: GridRowSelectedParams) => void;
    /**
     * Callback fired when the grid is resized.
     * @param param With all properties from [[GridResizeParams]].
     */
    onResize?: (param: GridResizeParams) => void;
    /**
     * Callback fired when the selection state of one or multiple rows changes.
     * @param param With all properties from [[SelectionChangeParams]].
     */
    onSelectionModelChange?: (param: GridSelectionModelChangeParams) => void;
    /**
     * Callback fired when the sort model changes before a column is sorted.
     * @param param With all properties from [[GridSortModelParams]].
     */
    onSortModelChange?: (params: GridSortModelParams) => void;
    /**
     * Callback fired when the state of the grid is updated.
     */
    onStateChange?: (params: any) => void;
    /**
     * Set the current page.
     * @default 1
     */
    page?: number;
    /**
     * Set the number of rows in one page.
     * @default 100
     */
    pageSize?: number;
    /**
     * If `true`, pagination is enabled.
     * @default false
     */
    pagination?: boolean;
    /**
     * Pagination can be processed on the server or client-side.
     * Set it to 'client' if you would like to handle the pagination on the client-side.
     * Set it to 'server' if you would like to handle the pagination on the server-side.
     */
    paginationMode?: GridFeatureMode;
    /**
     * Set the height in pixel of a row in the grid.
     * @default 52
     */
    rowHeight: number;
    /**
     * Select the pageSize dynamically using the component UI.
     * @default [25, 50, 100]
     */
    rowsPerPageOptions?: number[];
    /**
     * Set the total number of rows, if it is different than the length of the value `rows` prop.
     */
    rowCount?: number;
    /**
     * Override the height/width of the grid inner scrollbar.
     */
    scrollbarSize?: number;
    /**
     * Set the area at the bottom of the grid viewport where onRowsScrollEnd is called.
     */
    scrollEndThreshold: number;
    /**
     * Set the selection model of the grid.
     */
    selectionModel?: GridSelectionModel;
    /**
     * If `true`, the right border of the cells are displayed.
     * @default false
     */
    showCellRightBorder?: boolean;
    /**
     * If `true`, the right border of the column headers are displayed.
     * @default false
     */
    showColumnRightBorder?: boolean;
    /**
     * The order of the sorting sequence.
     * @default ['asc', 'desc', null]
     */
    sortingOrder: GridSortDirection[];
    /**
     * Sorting can be processed on the server or client-side.
     * Set it to 'client' if you would like to handle sorting on the client-side.
     * Set it to 'server' if you would like to handle sorting on the server-side.
     */
    sortingMode?: GridFeatureMode;
    /**
     * Set the sort model of the grid.
     */
    sortModel?: GridSortModel;
}

/**
 * The default [[GridOptions]] object that will be used to merge with the 'options' passed in the react component prop.
 */
declare const DEFAULT_GRID_OPTIONS: GridOptions;

/**
 * The ref type of the inner grid root container.
 */
declare type GridRootContainerRef = React$1.RefObject<HTMLDivElement>;

/**
 * The object containing the column properties of the rendering state.
 */
interface GridRenderColumnsProps {
    /**
     * The index of the first rendered column.
     */
    firstColIdx: number;
    /**
     * The index of the last rendered column.
     */
    lastColIdx: number;
    /**
     * The left offset required to position the viewport at the beginning of the first rendered column.
     */
    leftEmptyWidth: number;
    /**
     * The right offset required to position the viewport to the end of the last rendered column.
     */
    rightEmptyWidth: number;
}

/**
 * The object containing the row properties of the rendering state.
 */
interface GridRenderRowProps {
    /**
     * The rendering zone page calculated from the scroll position.
     */
    page: number;
    /**
     * The index of the first rendered row.
     */
    firstRowIdx: number;
    /**
     * The index of the last rendered row.
     */
    lastRowIdx: number;
}

/**
 * The object containing the pagination properties of the rendering state.
 */
interface GridRenderPaginationProps {
    /**
     * The current page if pagination is enabled.
     */
    paginationCurrentPage?: number;
    /**
     * The page size if pagination is enabled.
     */
    pageSize?: number;
}

/**
 * The full rendering state.
 */
declare type GridRenderContextProps = GridRenderColumnsProps & GridRenderRowProps & GridRenderPaginationProps;

interface GridColumnMenuState {
    open: boolean;
    field?: string;
}

interface GridColumnReorderState {
    dragCol: string;
}

declare function getInitialGridColumnReorderState(): GridColumnReorderState;

interface GridColumnResizeState {
    resizingColumnField: string;
}

declare function getInitialGridColumnResizeState(): GridColumnResizeState;

interface GridGridDensity {
    value: GridDensity;
    rowHeight: number;
    headerHeight: number;
}

interface VisibleGridRowsState {
    visibleRowsLookup: Record<GridRowId, boolean>;
    visibleRows?: GridRowId[];
}

declare const getInitialVisibleGridRowsState: () => VisibleGridRowsState;

declare type GridCellIdentifier = {
    id: GridRowId;
    field: string;
};
declare type GridColumnIdentifier = {
    field: string;
};

interface GridFocusState {
    cell: GridCellIdentifier | null;
    columnHeader: GridColumnIdentifier | null;
}

interface GridTabIndexState {
    cell: GridCellIdentifier | null;
    columnHeader: GridColumnIdentifier | null;
}

interface GridPaginationState {
    page: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    paginationMode: GridFeatureMode;
}

declare enum GridPreferencePanelsValue {
    filters = "filters",
    columns = "columns"
}

interface GridPreferencePanelState {
    open: boolean;
    openedPanelValue?: GridPreferencePanelsValue;
}

interface InternalGridRowsState {
    idRowsLookup: Record<GridRowId, GridRowModel>;
    allRows: GridRowId[];
    totalRowCount: number;
}

declare const getInitialGridRowState: () => InternalGridRowsState;

declare type GridSelectionState = Record<string, GridRowId>;

interface GridSortingState {
    sortedRows: GridRowId[];
    sortModel: GridSortModel;
}

declare function getInitialGridSortingState(): GridSortingState;

interface GridScrollParams {
    left: number;
    top: number;
}

declare type GridScrollFn = (v: GridScrollParams) => void;

interface InternalRenderingState {
    virtualPage: number;
    virtualRowsCount: number;
    renderContext: Partial<GridRenderContextProps> | null;
    realScroll: GridScrollParams;
    renderingZoneScroll: GridScrollParams;
    renderedSizes: GridContainerProps | null;
}

declare const getInitialGridRenderingState: () => InternalRenderingState;

interface GridState {
    rows: InternalGridRowsState;
    editRows: GridEditRowsModel;
    pagination: GridPaginationState;
    options: GridOptions;
    isScrolling: boolean;
    columns: GridInternalColumns;
    columnReorder: GridColumnReorderState;
    columnResize: GridColumnResizeState;
    columnMenu: GridColumnMenuState;
    rendering: InternalRenderingState;
    containerSizes: GridContainerProps | null;
    viewportSizes: GridViewportSizeState;
    scrollBar: GridScrollBarState;
    sorting: GridSortingState;
    focus: GridFocusState;
    tabIndex: GridTabIndexState;
    selection: GridSelectionState;
    filter: GridFilterModelState;
    visibleRows: VisibleGridRowsState;
    preferencePanel: GridPreferencePanelState;
    density: GridGridDensity;
    error?: any;
}

declare const getInitialGridState: () => GridState;

/**
 * The column menu API interface that is available in the grid [[apiRef]].
 */
interface GridColumnMenuApi {
    /**
     * Display the column menu under the `field` column.
     * @param {string} field The column to display the menu.
     */
    showColumnMenu: (field: string) => void;
    /**
     * Hides the column menu that is open.
     */
    hideColumnMenu: () => void;
    /**
     * Toggles the column menu under the `field` column.
     * @param {string} field The field name to toggle the column menu.
     */
    toggleColumnMenu: (field: string) => void;
}

interface GridFocusApi {
    /**
     * Sets the focus to the cell at the given `id` and `field`.
     * @param {GridRowId} id The row id.
     * @param {string} field The column field.
     */
    setCellFocus: (id: GridRowId, field: string) => void;
    /**
     * Sets the focus to the column header at the given `field`.
     * @param {string} field The column field.
     */
    setColumnHeaderFocus: (field: string) => void;
}

interface GridParamsApi {
    /**
     * Gets the value of a cell at the given `id` and `field`.
     * @param {GridRowId} id The id of the row.
     * @param {string} field The column field.
     * @returns {GridCellValue} The cell value.
     */
    getCellValue: (id: GridRowId, field: string) => GridCellValue;
    /**
     * Gets the underlying DOM element for a cell at the given `id` and `field`.
     * @param {GridRowId} id The id of the row.
     * @param {string} field The column field.
     * @returns {HTMLDivElement | null} The DOM element or `null`.
     */
    getCellElement: (id: GridRowId, field: string) => HTMLDivElement | null;
    /**
     * Gets the [[GridCellParams]] object that is passed as argument in events.
     * @param {GridRowId} id The id of the row.
     * @param {string} field The column field.
     * @returns {GridCellParams} The cell params.
     */
    getCellParams: (id: GridRowId, field: string) => GridCellParams;
    /**
     * Gets the [[GridRowParams]] object that is passed as argument in events.
     * @param {GridRowId} id The id of the row.
     * @param {string} field The column field.
     * @returns {GridRowParams} The row params.
     */
    getRowParams: (id: GridRowId) => GridRowParams;
    /**
     * Gets the underlying DOM element for a row at the given `id`.
     * @param {GridRowId} id The id of the row.
     * @returns {HTMLDivElement | null} The DOM element or `null`.
     */
    getRowElement: (id: GridRowId) => HTMLDivElement | null;
    /**
     * Gets the underlying DOM element for the column header with the given `field`.
     * @param {string} field The column field.
     * @returns {HTMLDivElement | null} The DOM element or `null`.
     */
    getColumnHeaderElement: (field: string) => HTMLDivElement | null;
    /**
     * Gets the [[GridColumnHeaderParams]] object that is passed as argument in events.
     * @param {string} field The column field.
     * @returns {GridColumnHeaderParams} The cell params.
     */
    getColumnHeaderParams: (field: string) => GridColumnHeaderParams;
}

/**
 * Set of icons used in the grid component UI.
 */
interface GridIconSlotsComponent {
    /**
     * Icon displayed on the boolean cell to represent the true value.
     */
    BooleanCellTrueIcon?: React$1.JSXElementConstructor<any>;
    /**
     * Icon displayed on the boolean cell to represent the false value.
     */
    BooleanCellFalseIcon?: React$1.JSXElementConstructor<any>;
    /**
     * Icon displayed on the side of the column header title to display the filter input component.
     */
    ColumnMenuIcon?: React$1.JSXElementConstructor<any>;
    /**
     * Icon displayed on the open filter button present in the toolbar by default
     */
    OpenFilterButtonIcon?: React$1.JSXElementConstructor<any>;
    /**
     * Icon displayed on the column header menu to show that a filer has been applied to the column.
     */
    ColumnFilteredIcon?: React$1.JSXElementConstructor<any>;
    /**
     * Icon displayed on the column menu selector tab.
     */
    ColumnSelectorIcon?: React$1.JSXElementConstructor<any>;
    /**
     * Icon displayed on the side of the column header title when unsorted.
     */
    ColumnUnsortedIcon?: React$1.ElementType | null;
    /**
     * Icon displayed on the side of the column header title when sorted in Ascending order.
     */
    ColumnSortedAscendingIcon?: React$1.JSXElementConstructor<any>;
    /**
     * Icon displayed on the side of the column header title when sorted in Descending order.
     */
    ColumnSortedDescendingIcon?: React$1.JSXElementConstructor<any>;
    /**
     * Icon displayed in between two column headers that allows to resize the column header.
     */
    ColumnResizeIcon?: React$1.JSXElementConstructor<any>;
    /**
     * Icon displayed on the compact density option in the toolbar.
     */
    DensityCompactIcon?: React$1.JSXElementConstructor<any>;
    /**
     * Icon displayed on the standard density option in the toolbar.
     */
    DensityStandardIcon?: React$1.JSXElementConstructor<any>;
    /**
     * Icon displayed on the comfortable density option in the toolbar.
     */
    DensityComfortableIcon?: React$1.JSXElementConstructor<any>;
    /**
     * Icon displayed on the open export button present in the toolbar by default.
     */
    ExportIcon?: React$1.JSXElementConstructor<any>;
}

/**
 * Overrideable components props dynamically passed to the component at rendering.
 */
interface GridSlotsComponentsProps {
    checkbox?: any;
    columnMenu?: any;
    errorOverlay?: any;
    footer?: any;
    header?: any;
    toolbar?: any;
    preferencesPanel?: any;
    loadingOverlay?: any;
    noResultsOverlay?: any;
    noRowsOverlay?: any;
    pagination?: any;
    filterPanel?: any;
    panel?: any;
    columnsPanel?: any;
}

interface GridApiRefComponentsProperty extends GridIconSlotsComponent {
    /**
     * The custom Checkbox component used in the grid.
     */
    Checkbox: React$1.ElementType;
    /**
     * Column menu component rendered by clicking on the 3 dots "kebab" icon in column headers.
     */
    ColumnMenu: React$1.JSXElementConstructor<any>;
    /**
     * Error overlay component rendered above the grid when an error is caught.
     */
    ErrorOverlay: React$1.JSXElementConstructor<any>;
    /**
     * Footer component rendered at the bottom of the grid viewport.
     */
    Footer: React$1.JSXElementConstructor<any>;
    /**
     * Header component rendered above the grid column header bar.
     * Prefer using the `Toolbar` slot. You should never need to use this slot. TODO remove.
     */
    Header: React$1.JSXElementConstructor<any>;
    /**
     * Toolbar component rendered inside the Header component.
     */
    Toolbar?: React$1.JSXElementConstructor<any>;
    /**
     * PreferencesPanel component rendered inside the Header component.
     */
    PreferencesPanel: React$1.JSXElementConstructor<any>;
    /**
     * Loading overlay component rendered when the grid is in a loading state.
     */
    LoadingOverlay: React$1.JSXElementConstructor<any>;
    /**
     * No rows overlay component rendered when the grid has no rows.
     */
    NoRowsOverlay: React$1.JSXElementConstructor<any>;
    /**
     * No results overlay component rendered when the grid has no results after filtering.
     */
    NoResultsOverlay: React$1.JSXElementConstructor<any>;
    /**
     * Pagination component rendered in the grid footer by default.
     */
    Pagination: React$1.JSXElementConstructor<any>;
    /**
     * Filter panel component rendered when clicking the filter button.
     */
    FilterPanel: React$1.JSXElementConstructor<any>;
    /**
     * GridColumns panel component rendered when clicking the columns button.
     */
    ColumnsPanel: React$1.JSXElementConstructor<any>;
    /**
     * Panel component wrapping the filters and columns panels.
     */
    Panel: React$1.JSXElementConstructor<any>;
}

interface GridComponentsApi {
    /**
     * The set of overridable components used in the grid.
     */
    components: GridApiRefComponentsProperty;
    /**
     * Overrideable components props dynamically passed to the component at rendering.
     */
    componentsProps?: GridSlotsComponentsProps;
}

/**
 * The filter API interface that is available in the grid [[apiRef]].
 */
interface GridFilterApi {
    /**
     * Shows the filter panel. If `targetColumnField` is given, a filter for this field is also added.
     * @param {string} targetColumnField The column field to add a filter.
     */
    showFilterPanel: (targetColumnField?: string) => void;
    /**
     * Hides the filter panel.
     */
    hideFilterPanel: () => void;
    /**
     * Updates or inserts a [[GridFilterItem]].
     * @param {GridFilterItem} item The filter to update.
     */
    upsertFilter: (item: GridFilterItem) => void;
    /**
     * Applies a [[GridFilterItem]] on alls rows. If no `linkOperator` is given, the "and" operator is used.
     * @param {GridFilterItem} item The filter to be applied.
     * @param {GridLinkOperator} linkOperator The link operator to use.
     */
    applyFilter: (item: GridFilterItem, linkOperator?: GridLinkOperator) => void;
    /**
     * Applies all filters on all rows.
     */
    applyFilters: () => void;
    /**
     * Deletes a [[GridFilterItem]].
     * @param {GridFilterItem} item The filter to delete.
     */
    deleteFilter: (item: GridFilterItem) => void;
    /**
     * Changes the [[GridLinkOperator]] used to connect the filters.
     * @param {GridLinkOperator} operator The new link operator. It can be: `"and"` or `"or`".
     */
    applyFilterLinkOperator: (operator: GridLinkOperator) => void;
    /**
     * Sets the filter model to the one given by `model`.
     * @param {GridFilterModel} model The new filter model.
     */
    setFilterModel: (model: GridFilterModel) => void;
    /**
     * Returns a sorted `Map` containing only the visible rows.
     * @returns {Map<GridRowId, GridRowModel>} The sorted `Map`.
     */
    getVisibleRowModels: () => Map<GridRowId, GridRowModel>;
}

/**
 * The editing API interface that is available in the grid `apiRef`.
 */
interface GridEditRowApi {
    /**
     * Set sthe edit rows model of the grid.
     * @param {GridEditRowsModel} model The new edit rows model.
     */
    setEditRowsModel: (model: GridEditRowsModel) => void;
    /**
     * Gets the edit rows model of the grid.
     * @returns {GridEditRowsModel} The edit rows model.
     */
    getEditRowsModel: () => GridEditRowsModel;
    /**
     * Sets the mode of a cell.
     * @param {GridRowId} id The id of the row.
     * @param {string} field The field to change the mode.
     * @param {GridCellMode} mode Can be: `"edit"`, `"view"`.
     */
    setCellMode: (id: GridRowId, field: string, mode: GridCellMode) => void;
    /**
     * Gets the mode of a cell.
     * @param {GridRowId} id The id of the row.
     * @param {string} field The field to get the mode.
     * @returns Returns `"edit"` or `"view"`.
     */
    getCellMode: (id: GridRowId, field: string) => GridCellMode;
    /**
     * Controls if a cell is editable.
     * @param {GridCellParams} params The cell params.
     * @returns {boolean} A boolean value determining if the cell is editable.
     */
    isCellEditable: (params: GridCellParams) => boolean;
    /**
     * Sets the input props of the edit cell.
     * @param {GridEditCellPropsParams} params The params to set.
     */
    setEditCellProps: (params: GridEditCellPropsParams) => void;
    /**
     * Gets the input props for the edit cell of a given `rowId` and `field`.
     * @param {GridRowId} rowId The id of the row.
     * @param {string} field The column field.
     * @returns {GridEditCellProps} The props for the edit cell.
     */
    getEditCellProps: (rowId: GridRowId, field: string) => GridEditCellProps;
    /**
     * Gets the params to be passed when calling `setEditCellProps`.
     * @param {GridRowId} rowId The id of the row.
     * @param {string} field The column field.
     * @returns {GridEditCellPropsParams} The params.
     */
    getEditCellPropsParams: (rowId: GridRowId, field: string) => GridEditCellPropsParams;
    /**
     * Commits a cell change. Used to update the value when editing a cell.
     * @param {GridEditCellPropsParams} params The new params.
     */
    commitCellChange: (params: GridEditCellPropsParams) => void;
    /**
     * Sets the cell value.
     * @param {GridEditCellValueParams} params An object with the row id, the field and the new value.
     * @ignore - do not document.
     */
    setCellValue: (params: GridEditCellValueParams) => void;
}

/**
 * The preferences panel API interface that is available in the grid [[apiRef]].
 */
interface GridPreferencesPanelApi {
    /**
     * Displays the preferences panel. The `newValue` argument controls the content of the panel.
     * @param {GridPreferencePanelsValue} newValue The panel to open. Use `"filters"` or `"columns"`.
     */
    showPreferences: (newValue: GridPreferencePanelsValue) => void;
    /**
     * Hides the preferences panel.
     */
    hidePreferences: () => void;
}

/**
 * The Row API interface that is available in the grid `apiRef`.
 */
interface GridRowApi {
    /**
     * Gets the full set of rows as [[Map<GridRowId, GridRowModel>]].
     * @returns {Map<GridRowId, GridRowModel>}
     */
    getRowModels: () => Map<GridRowId, GridRowModel>;
    /**
     * Gets the total number of rows in the grid.
     * @returns {number}
     */
    getRowsCount: () => number;
    /**
     * Gets the list of row ids.
     * @returns {GridRowId[]} A list of ids.
     */
    getAllRowIds: () => GridRowId[];
    /**
     * Sets a new set of rows.
     * @param {GridRowModel[]} rows The new rows.
     */
    setRows: (rows: GridRowModel[]) => void;
    /**
     * Allows to updates, insert and delete rows in a single call.
     * @param {GridRowModelUpdate[]} updates An array of rows with an `action` specifying what to do.
     */
    updateRows: (updates: GridRowModelUpdate[]) => void;
    /**
     * Gets the `GridRowId` of a row at a specific index.
     * @param {number} index The index of the row
     * @returns {GridRowId} The `GridRowId` of the row.
     */
    getRowIdFromRowIndex: (index: number) => GridRowId;
    /**
     * Gets the row index of a row with a given id.
     * @param {GridRowId} id The `GridRowId` of the row.
     * @returns {number} The index of the row.
     */
    getRowIndex: (id: GridRowId) => number;
    /**
     * Gets the row data with a given id.
     * @param {GridRowId} id The id of the row.
     * @returns {GridRowModel} The row data.
     */
    getRow: (id: GridRowId) => GridRowModel;
}

/**
 * The column API interface that is available in the grid [[apiRef]].
 */
interface GridColumnApi {
    /**
     * Returns the [[GridColDef]] for the given `field`.
     * @param {string} field The column field.
     * @returns {{GridColDef}} The [[GridColDef]].
     */
    getColumn: (field: string) => GridColDef;
    /**
     * Returns an array of [[GridColDef]] containing all the column definitions.
     * @returns {GridColumns[]} An array of [[GridColDef]].
     */
    getAllColumns: () => GridColumns;
    /**
     * Returns the currently visible columns.
     * @returns {GridColDef[]} An array of [[GridColDef]].
     */
    getVisibleColumns: () => GridColumns;
    /**
     * Returns the [[GridColumnsMeta]] for each column.
     * @returns {GridColumnsMeta[]} All [[GridColumnsMeta]] objects.
     */
    getColumnsMeta: () => GridColumnsMeta;
    /**
     * Returns the index position of a column. By default, only the visible columns are considered.
     * Pass `false` to `useVisibleColumns` to consider all columns.
     * @param {string} field The column field.
     * @param {boolean} useVisibleColumns Determines if all columns or the visible ones should be considered.
     * @returns {number} The index position.
     */
    getColumnIndex: (field: string, useVisibleColumns?: boolean) => number;
    /**
     * Returns the left-position of a column relative to the inner border of the grid.
     * @param {string} field The column field.
     * @returns {number} The position in pixels.
     */
    getColumnPosition: (field: string) => number;
    /**
     * Updates the definition of a column.
     * @param {GridColDef} col The new [[GridColDef]] object.
     */
    updateColumn: (col: GridColDef) => void;
    /**
     * Updates the definition of multiple columns at the same time.
     * @param {GridColDef[]} cols The new column [[GridColDef]] objects.
     */
    updateColumns: (cols: GridColDef[]) => void;
    /**
     * Changes the visibility of the column referred by `field`.
     * @param {string} field The column to change visibility.
     * @param {boolean} isVisible Pass `true` to show the column, or `false` to hide it.
     */
    setColumnVisibility: (field: string, isVisible: boolean) => void;
    /**
     * Moves a column from its original position to the position given by `targetIndexPosition`.
     * @param {string} field The field name
     * @param {number} targetIndexPosition The new position (0-based).
     */
    setColumnIndex: (field: string, targetIndexPosition: number) => void;
    /**
     * Updates the width of a column.
     * @param {string} field The column field.
     * @param {number} width The new width.
     */
    setColumnWidth: (field: string, width: number) => void;
}

/**
 * The selection API interface that is available in the grid [[apiRef]].
 */
interface GridSelectionApi {
    /**
     * Change the selection state of a row.
     * @param {GridRowId} id The id of the row
     * @param {boolean} isSelected Pass `false` to unselect a row. Default is `true`.
     * @param {boolean} allowMultiple Whether to keep the already selected rows or not. Default is `false`.
     */
    selectRow: (id: GridRowId, isSelected?: boolean, allowMultiple?: boolean) => void;
    /**
     * Change the selection state of multiple rows.
     * @param {GridRowId[]} ids The row ids.
     * @param {boolean} isSelected The new selection state. Default is `true`.
     * @param {boolean} deselectOtherRows Whether to keep the already selected rows or not. Default is `false`.
     */
    selectRows: (ids: GridRowId[], isSelected?: boolean, deselectOtherRows?: boolean) => void;
    /**
     * Returns an array of the selected rows.
     * @returns {Map<GridRowId, GridRowModel>} A `Map` with the selected rows.
     */
    getSelectedRows: () => Map<GridRowId, GridRowModel>;
    /**
     * Updates the selected rows to be those passed to the `rowIds` argument.
     * Any row already selected will be unselected.
     * @param {GridRowId[]} rowIds The row ids to select.
     */
    setSelectionModel: (rowIds: GridRowId[]) => void;
}

/**
 * The sort API interface that is available in the grid [[apiRef]].
 */
interface GridSortApi {
    /**
     * Returns the sort model currently applied to the grid.
     * @returns {GridSortModel} The `GridSortModel`.
     */
    getSortModel: () => GridSortModel;
    /**
     * Applies the current sort model to the rows.
     */
    applySorting: () => void;
    /**
     * Updates the sort model and triggers the sorting of rows.
     * @param {GridSortModel} model The `GridSortModel` to be applied.
     */
    setSortModel: (model: GridSortModel) => void;
    /**
     * Sorts a column.
     * @param {GridColDef} column The [[GridColDef]] of the column to be sorted.
     * @param {GridSortDirection} direction The direction to be sorted. By default, the next in the `sortingOrder` prop.
     * @param {boolean} allowMultipleSorting Whether to keep the existing [[GridSortItem]]. Default is `false`.
     */
    sortColumn: (column: GridColDef, direction?: GridSortDirection, allowMultipleSorting?: boolean) => void;
    /**
     * Returns all rows sorted according to the active sort model.
     * @returns {GridRowModel[]} The sorted [[GridRowModel]] objects.
     */
    getSortedRows: () => GridRowModel[];
    /**
     * Returns all row ids sorted according to the active sort model.
     * @returns {GridRowId[]} The sorted [[GridRowId]] values.
     */
    getSortedRowIds: () => GridRowId[];
}

/**
 * The pagination API interface that is available in the grid [[apiRef]].
 */
interface GridPaginationApi {
    /**
     * Sets the displayed page to the value given by `page`.
     * @param {number} page The new page number
     */
    setPage: (page: number) => void;
    /**
     * Sets the number of displayed rows to the value given by `pageSize`.
     * @param {number} pageSize The new number of displayed rows.
     */
    setPageSize: (pageSize: number) => void;
}

interface GridStateApi {
    /**
     * Property that contains the whole state of the grid.
     */
    state: GridState;
    /**
     * Returns the whole state of the grid. If `stateId` is present, only the referred part is returned.
     * @param {string} stateId The part of the state to be returned.
     * @returns {any} The whole state or part of it.
     */
    getState: <T = GridState>(stateId?: string) => T;
    /**
     * Sets the whole state of the grid.
     * @param {function} state The new state or a function to return the new state.
     */
    setState: (state: GridState | ((previousState: GridState) => GridState)) => void;
    /**
     * Forces the grid to rerender. It's often used after a state update.
     */
    forceUpdate: React$1.Dispatch<any>;
}

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
declare function isDeepEqual(value: any, other: any): boolean;

declare function isDate(value: any): value is Date;

declare function isDateValid(value: Date): boolean;

declare function parseDate(value: string): Date;

declare function parseDateTime(value: string): Date;

declare function formatDateToLocalInputDate({value, withTime,}: {
    value: GridCellValue;
    withTime: boolean;
}): GridCellValue;

declare function isNumber(value: any): value is number;

declare function isFunction(value: any): value is Function;

declare function isObject(value: any): value is Record<string, any>;

declare function getThemePaletteMode(palette: any): string;

declare function isMuiV5(): boolean;

declare function muiStyleAlpha(color: string, value: number): string;

declare function createTheme(): styles.Theme;

declare function localStorageAvailable(): boolean;

declare function mapColDefTypeToInputType(type: string): "number" | "date" | "text" | "datetime-local";

declare type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

declare function getDataGridUtilityClass(slot: any): string;

/**
 * The virtualization API interface that is available in the grid [[apiRef]].
 */
interface GridVirtualizationApi {
    /**
     * Triggers the viewport to scroll to the given positions (in pixels).
     * @param {GridScrollParams} params An object contaning the `left` or `top` position to scroll.
     */
    scroll: (params: Partial<GridScrollParams>) => void;
    /**
     * Triggers the viewport to scroll to the cell at indexes given by `params`.
     * Returns `true` if the grid had to scroll to reach the target.
     * @param {GridCellIndexCoordinates} params The indexes where the cell is.
     * @returns {boolean} Returns `true` if the index was outside of the viewport and the grid had to scroll to reach the target.
     */
    scrollToIndexes: (params: Optional<GridCellIndexCoordinates, 'rowIndex'>) => boolean;
    /**
     * Checks if a column at the index given by `colIndex` is currently visible in the viewport.
     * @param {number} colIndex To column index to check.
     * @returns {boolean} Returns `true` when the column is visible and `false` when it is not.
     */
    isColumnVisibleInWindow: (colIndex: number) => boolean;
    /**
     * Get the current containerProps.
     * @ignore - do not document.
     */
    getContainerPropsState: () => GridContainerProps | null;
    /**
     * Get the current renderContext.
     * @ignore - do not document.
     */
    getRenderContextState: () => Partial<GridRenderContextProps> | undefined;
    /**
     * Returns the current scroll position.
     * @returns {GridScrollParams} The scroll positions.
     */
    getScrollPosition: () => GridScrollParams;
    /**
     * Refreshes the viewport cells according to the scroll positions
     * @param {boolean} forceRender If `true`, forces a rerender. By default, it is `false`.
     */
    updateViewport: (forceRender?: boolean) => void;
}

declare type Listener = (...args: any[]) => void;

declare class EventEmitter {
    /**
     * @ignore - do not document.
     */
    maxListeners: number;
    /**
     * @ignore - do not document.
     */
    warnOnce: boolean;
    /**
     * @ignore - do not document.
     */
    events: {
        [key: string]: Listener[];
    };

    on(eventName: string, listener: Listener): void;

    removeListener(eventName: string, listener: Listener): void;

    removeAllListeners(eventName?: string): void;

    emit(eventName: string, ...args: any[]): void;

    once(eventName: string, listener: Listener): void;
}

declare type GridListener = (params: any, event?: React$1.SyntheticEvent) => void;
declare type GridSubscribeEventOptions = {
    isFirst?: boolean;
};

declare class GridEventEmitter extends EventEmitter {
    on(eventName: string, listener: GridListener, options?: GridSubscribeEventOptions): void;
}

/**
 * The core API interface that is available in the grid `apiRef`.
 */
interface GridCoreApi extends GridEventEmitter {
    /**
     * The react ref of the grid root container div element.
     * @ignore - do not document.
     */
    rootElementRef?: React$1.RefObject<HTMLDivElement>;
    /**
     * The react ref of the grid column container virtualized div element.
     * @ignore - do not document.
     */
    columnHeadersContainerElementRef?: React$1.RefObject<HTMLDivElement>;
    /**
     * The react ref of the grid column headers container element.
     * @ignore - do not document.
     */
    columnHeadersElementRef?: React$1.RefObject<HTMLDivElement>;
    /**
     * The react ref of the grid window container element.
     * @ignore - do not document.
     */
    windowRef?: React$1.RefObject<HTMLDivElement>;
    /**
     * The react ref of the grid data rendering zone.
     * @ignore - do not document.
     */
    renderingZoneRef?: React$1.RefObject<HTMLDivElement>;
    /**
     * The react ref of the grid header element.
     * @ignore - do not document.
     */
    headerRef?: React$1.RefObject<HTMLDivElement>;
    /**
     * The react ref of the grid footer element.
     * @ignore - do not document.
     */
    footerRef?: React$1.RefObject<HTMLDivElement>;
    /**
     * Registers a handler for an event.
     * @param {string} event The name of the event.
     * @param {function} handler The handler to be called.
     * @param {object} options Additional options for this listener.
     * @returns {function} A function to unsubscribe from this event.
     */
    subscribeEvent: (event: string, handler: (params: any, event?: React$1.SyntheticEvent) => void, options?: GridSubscribeEventOptions) => () => void;
    /**
     * Emits an event.
     * @param {string} name The name of the event.
     * @param {...*} args Arguments to be passed to the handlers.
     */
    publishEvent: (name: string, ...args: any[]) => void;
    /**
     * Displays the error overlay component.
     * @param {any} props Props to be passed to the `ErrorOverlay` component.
     */
    showError: (props: any) => void;
}

/**
 * The events API interface that is available in the grid `apiRef`.
 */
interface GridEventsApi {
    /**
     * Triggers a resize of the component and recalculation of width and height.
     */
    resize: () => void;
}

interface GridDensityOption {
    icon: React$1.ReactElement;
    label: string;
    value: GridDensityTypes;
}

/**
 * The density API interface that is available in the grid `apiRef`.
 */
interface GridDensityApi {
    /**
     * Sets the density of the grid.
     * @param {string} density Can be: `"compact"`, `"standard"`, `"comfortable"`.
     * @param {number} headerHeight The new header height.
     * @param {number} rowHeight The new row height.
     */
    setDensity: (size: GridDensity, headerHeight?: number, rowHeight?: number) => void;
}

/**
 * The options to apply on the CSV export.
 */
interface GridExportCsvOptions {
    fileName?: string;
    utf8WithBom?: boolean;
}

/**
 * Available export formats.
 */
declare type GridExportFormat = 'csv';

/**
 * The CSV export API interface that is available in the grid [[apiRef]].
 */
interface GridCsvExportApi {
    /**
     * Returns the grid data as a CSV string.
     * This method is used internally by `exportDataAsCsv`.
     * @param {GridExportCsvOptions} options The options to apply on the export.
     * @returns string
     */
    getDataAsCsv: (options?: GridExportCsvOptions) => string;
    /**
     * Downloads and exports a CSV of the grid's data.
     * @param {GridExportCsvOptions} options The options to apply on the export.
     */
    exportDataAsCsv: (options?: GridExportCsvOptions) => void;
}

/**
 * The full grid API.
 */
interface GridApi extends GridCoreApi, GridComponentsApi, GridStateApi, GridDensityApi, GridEventsApi, GridRowApi, GridEditRowApi, GridParamsApi, GridColumnApi, GridSelectionApi, GridSortApi, GridVirtualizationApi, GridPaginationApi, GridCsvExportApi, GridFocusApi, GridFilterApi, GridColumnMenuApi, GridPreferencesPanelApi, GridLocaleTextApi {
}

/**
 * The apiRef component prop type.
 */
declare type GridApiRef = React$1.MutableRefObject<GridApi>;

/**
 * Object passed as React prop in the component override.
 */
interface GridSlotComponentProps {
    /**
     * The GridState object containing the current grid state.
     */
    state: GridState;
    /**
     * The full set of rows.
     */
    rows: GridRowModel[];
    /**
     * The full set of columns.
     */
    columns: GridColumns;
    /**
     * The full set of options.
     */
    options: GridOptions;
    /**
     * GridApiRef that let you manipulate the grid.
     */
    apiRef: GridApiRef;
    /**
     * The ref of the inner div Element of the grid.
     */
    rootElement: GridRootContainerRef;
}

interface GridStateChangeParams {
    state: GridState;
    api: any;
}

/**
 * Grid components React prop interface containing all the overridable components.
 *
 */
interface GridSlotsComponent extends GridIconSlotsComponent {
    /**
     * The custom Checkbox component used in the grid for both header and cells.
     */
    Checkbox?: React$1.JSXElementConstructor<any>;
    /**
     * Column menu component rendered by clicking on the 3 dots "kebab" icon in column headers.
     */
    ColumnMenu?: React$1.JSXElementConstructor<any>;
    /**
     * Error overlay component rendered above the grid when an error is caught.
     */
    ErrorOverlay?: React$1.JSXElementConstructor<any>;
    /**
     * Footer component rendered at the bottom of the grid viewport.
     */
    Footer?: React$1.JSXElementConstructor<any>;
    /**
     * Header component rendered above the grid column header bar.
     * Prefer using the `Toolbar` slot. You should never need to use this slot. TODO remove.
     */
    Header?: React$1.JSXElementConstructor<any>;
    /**
     * Toolbar component rendered inside the Header component.
     */
    Toolbar?: React$1.JSXElementConstructor<any>;
    /**
     * PreferencesPanel component rendered inside the Header component.
     */
    PreferencesPanel?: React$1.JSXElementConstructor<any>;
    /**
     * Loading overlay component rendered when the grid is in a loading state.
     */
    LoadingOverlay?: React$1.JSXElementConstructor<any>;
    /**
     * No results overlay component rendered when the grid has no results after filtering.
     */
    NoResultsOverlay?: React$1.JSXElementConstructor<any>;
    /**
     * No rows overlay component rendered when the grid has no rows.
     */
    NoRowsOverlay?: React$1.JSXElementConstructor<any>;
    /**
     * Pagination component rendered in the grid footer by default.
     */
    Pagination?: React$1.JSXElementConstructor<any>;
    /**
     * Filter panel component rendered when clicking the filter button.
     */
    FilterPanel?: React$1.JSXElementConstructor<any>;
    /**
     * GridColumns panel component rendered when clicking the columns button.
     */
    ColumnsPanel?: React$1.JSXElementConstructor<any>;
    /**
     * Panel component wrapping the filters and columns panels.
     */
    Panel?: React$1.JSXElementConstructor<any>;
}

declare const DEFAULT_GRID_SLOTS_ICONS: GridIconSlotsComponent;
declare const DEFAULT_GRID_SLOTS_COMPONENTS: GridApiRefComponentsProperty;

interface GridCellProps {
    align: GridAlignment;
    className?: string;
    colIndex: number;
    field: string;
    rowId: GridRowId;
    formattedValue?: GridCellValue;
    hasFocus?: boolean;
    height: number;
    isEditable?: boolean;
    isSelected?: boolean;
    rowIndex: number;
    showRightBorder?: boolean;
    value?: GridCellValue;
    width: number;
    cellMode?: GridCellMode;
    children: React$1.ReactNode;
    tabIndex: 0 | -1;
}

declare const GridCell: React$1.MemoExoticComponent<(props: GridCellProps) => JSX.Element>;

declare function GridEditInputCell(props: GridCellParams & InputBaseProps): JSX.Element;

declare const renderEditInputCell: (params: any) => JSX.Element;

interface GridEmptyCellProps {
    width?: number;
    height?: number;
}

declare const GridEmptyCell: React$1.NamedExoticComponent<GridEmptyCellProps>;

interface RowCellsProps {
    cellClassName?: string;
    columns: GridColumns;
    extendRowFullWidth: boolean;
    firstColIdx: number;
    id: GridRowId;
    hasScrollX: boolean;
    hasScrollY: boolean;
    height: number;
    getCellClassName?: (params: GridCellParams) => string;
    lastColIdx: number;
    row: GridRowModel;
    rowIndex: number;
    showCellRightBorder: boolean;
    cellFocus: GridCellIdentifier | null;
    cellTabIndex: GridCellIdentifier | null;
    isSelected: boolean;
    editRowState?: GridEditRowProps;
}

declare const GridRowCells: React$1.MemoExoticComponent<(props: RowCellsProps) => JSX.Element>;

declare type GridRootProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const GridRoot: React$1.ForwardRefExoticComponent<GridRootProps & React$1.RefAttributes<HTMLDivElement>>;

declare type GridColumnsContainerProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const GridColumnsContainer: React$1.ForwardRefExoticComponent<GridColumnsContainerProps & React$1.RefAttributes<HTMLDivElement>>;

declare type GridDataContainerProps = React$1.HTMLAttributes<HTMLDivElement>;

declare function GridDataContainer(props: GridDataContainerProps): JSX.Element;

declare type GridFooterContainerProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const GridFooterContainer: React$1.ForwardRefExoticComponent<GridFooterContainerProps & React$1.RefAttributes<HTMLDivElement>>;

declare type GridOverlayProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const GridOverlay: React$1.ForwardRefExoticComponent<GridOverlayProps & React$1.RefAttributes<HTMLDivElement>>;

interface GridWindowProps extends React$1.HTMLAttributes<HTMLDivElement> {
    size: {
        width: number;
        height: number;
    };
}

declare const GridWindow: React$1.ForwardRefExoticComponent<GridWindowProps & React$1.RefAttributes<HTMLDivElement>>;

declare type GridToolbarContainerProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const GridToolbarContainer: React$1.ForwardRefExoticComponent<GridToolbarContainerProps & React$1.RefAttributes<HTMLDivElement>>;

interface GridColumnHeaderItemProps {
    colIndex: number;
    column: GridColDef;
    columnMenuOpen: boolean;
    headerHeight: number;
    isDragging: boolean;
    isResizing: boolean;
    sortDirection: GridSortDirection;
    sortIndex?: number;
    options: GridOptions;
    filterItemsCounter?: number;
    hasFocus?: boolean;
    tabIndex: 0 | -1;
}

declare const GridColumnHeaderItem: React$1.MemoExoticComponent<({column, columnMenuOpen, colIndex, headerHeight, isDragging, isResizing, sortDirection, sortIndex, options, filterItemsCounter, hasFocus, tabIndex,}: GridColumnHeaderItemProps) => JSX.Element>;

interface GridColumnHeaderSeparatorProps extends React$1.HTMLAttributes<HTMLDivElement> {
    resizable: boolean;
    resizing: boolean;
    height: number;
}

declare const GridColumnHeaderSeparator: React$1.NamedExoticComponent<GridColumnHeaderSeparatorProps>;

interface GridColumnHeaderSortIconProps {
    direction: GridSortDirection;
    index: number | undefined;
}

declare const GridColumnHeaderSortIcon: React$1.NamedExoticComponent<GridColumnHeaderSortIconProps>;

interface GridColumnHeaderTitleProps {
    label: string;
    columnWidth: number;
    description?: string;
}

declare function GridColumnHeaderTitle(props: GridColumnHeaderTitleProps): JSX.Element;

declare const gridScrollbarStateSelector: (state: GridState) => GridScrollBarState;
declare const GridColumnsHeader: React$1.ForwardRefExoticComponent<React$1.RefAttributes<HTMLDivElement>>;

interface GridColumnHeadersItemCollectionProps {
    columns: GridColumns;
}

declare function GridColumnHeadersItemCollection(props: GridColumnHeadersItemCollectionProps): JSX.Element;

declare const GridCellCheckboxForwardRef: React$1.ForwardRefExoticComponent<GridCellParams & React$1.RefAttributes<HTMLInputElement>>;
declare const GridCellCheckboxRenderer: React$1.MemoExoticComponent<React$1.ForwardRefExoticComponent<GridCellParams & React$1.RefAttributes<HTMLInputElement>>>;

declare const GridHeaderCheckbox: React$1.ForwardRefExoticComponent<GridColumnHeaderParams & React$1.RefAttributes<HTMLInputElement>>;

declare const GridArrowUpwardIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridArrowDownwardIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridFilterListIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridFilterAltIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridSearchIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridMenuIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridCheckCircleIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridColumnIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridSeparatorIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridViewHeadlineIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridTableRowsIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridViewStreamIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridTripleDotsVerticalIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridCloseIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridAddIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridLoadIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridDragIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridSaveAltIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;
declare const GridCheckIcon: _material_ui_core_OverridableComponent.OverridableComponent<_material_ui_core.SvgIconTypeMap<{}, "svg">>;

interface GridFilterItemProps {
    column: GridColDef;
    onClick: (event: React$1.MouseEvent<any>) => void;
}

declare const GridColumnsMenuItem: (props: GridFilterItemProps) => JSX.Element | null;

declare const GridFilterMenuItem: (props: GridFilterItemProps) => JSX.Element | null;

interface GridColumnHeaderMenuProps {
    columnMenuId: string;
    columnMenuButtonId: string;
    ContentComponent: React$1.JSXElementConstructor<any>;
    contentComponentProps?: any;
    field: string;
    open: boolean;
    target: Element | null;
}

declare function GridColumnHeaderMenu({columnMenuId, columnMenuButtonId, ContentComponent, contentComponentProps, field, open, target,}: GridColumnHeaderMenuProps): JSX.Element | null;

interface GridColumnMenuProps extends React$1.HTMLAttributes<HTMLUListElement> {
    hideMenu: () => void;
    currentColumn: GridColDef;
    open: boolean;
    id?: string;
    labelledby?: string;
}

declare const GridColumnMenu: React$1.ForwardRefExoticComponent<GridColumnMenuProps & React$1.RefAttributes<HTMLUListElement>>;

declare const HideGridColMenuItem: (props: GridFilterItemProps) => JSX.Element | null;

declare const SortGridMenuItems: (props: GridFilterItemProps) => JSX.Element | null;

declare const GridColumnMenuContainer: React$1.ForwardRefExoticComponent<GridColumnMenuProps & React$1.RefAttributes<HTMLUListElement>>;

declare type MenuPosition =
    'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
    | undefined;

interface GridMenuProps extends Omit<PopperProps, 'onKeyDown'> {
    open: boolean;
    target: React$1.ReactNode;
    onClickAway: (event?: React$1.MouseEvent<Document, MouseEvent>) => void;
    position?: MenuPosition;
}

declare const GridMenu: (props: GridMenuProps) => JSX.Element;

declare function GridColumnsPanel(): JSX.Element;

interface GridPanelProps extends React$1.HTMLAttributes<HTMLDivElement> {
    children?: React$1.ReactNode;
    open: boolean;
}

declare const GridPanel: React$1.ForwardRefExoticComponent<GridPanelProps & React$1.RefAttributes<HTMLDivElement>>;

declare function GridPanelContent(props: React$1.PropsWithChildren<React$1.HTMLAttributes<HTMLDivElement>>): JSX.Element;

declare function GridPanelFooter(props: React$1.PropsWithChildren<React$1.HTMLAttributes<HTMLDivElement>>): JSX.Element;

declare function GridPanelHeader(props: React$1.PropsWithChildren<React$1.HTMLAttributes<HTMLDivElement>>): JSX.Element;

declare function GridPanelWrapper(props: React$1.PropsWithChildren<React$1.HTMLAttributes<HTMLDivElement>>): JSX.Element;

declare const GridPreferencesPanel: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

interface GridFilterFormProps {
    item: GridFilterItem;
    hasMultipleFilters: boolean;
    showMultiFilterOperators?: boolean;
    multiFilterOperator?: GridLinkOperator;
    disableMultiFilterOperator?: boolean;
    applyFilterChanges: (item: GridFilterItem) => void;
    applyMultiFilterOperatorChanges: (operator: GridLinkOperator) => void;
    deleteFilter: (item: GridFilterItem) => void;
}

declare function GridFilterForm(props: GridFilterFormProps): JSX.Element;

declare const SUBMIT_FILTER_STROKE_TIME = 500;

interface GridTypeFilterInputValueProps extends GridFilterInputValueProps {
    type?: 'text' | 'number' | 'date' | 'datetime-local';
}

declare function GridFilterInputValue(props: GridTypeFilterInputValueProps & TextFieldProps): JSX.Element;

declare function GridFilterPanel(): JSX.Element;

declare const GridToolbar: React$1.ForwardRefExoticComponent<GridToolbarContainerProps & React$1.RefAttributes<HTMLDivElement>>;

declare const GridToolbarColumnsButton: React$1.ForwardRefExoticComponent<Pick<ButtonProps<"button", {}>, "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "form" | "key" | "autoFocus" | "disabled" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "type" | "value" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple" | "href" | "size" | "variant" | "action" | "buttonRef" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "onFocusVisible" | "TouchRippleProps" | keyof _material_ui_core_OverridableComponent.CommonProps<_material_ui_core_Button.ButtonTypeMap<{}, "button">>> & React$1.RefAttributes<HTMLButtonElement>>;

declare const GridToolbarDensitySelector: React$1.ForwardRefExoticComponent<Pick<ButtonProps<"button", {}>, "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "form" | "key" | "autoFocus" | "disabled" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "type" | "value" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple" | "href" | "size" | "variant" | "action" | "buttonRef" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "onFocusVisible" | "TouchRippleProps" | keyof _material_ui_core_OverridableComponent.CommonProps<_material_ui_core_Button.ButtonTypeMap<{}, "button">>> & React$1.RefAttributes<HTMLButtonElement>>;

interface GridToolbarExportProps extends ButtonProps {
    csvOptions?: GridExportCsvOptions;
}

declare const GridToolbarExport: React$1.ForwardRefExoticComponent<Pick<GridToolbarExportProps, "className" | "style" | "classes" | "innerRef" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "form" | "key" | "autoFocus" | "disabled" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "type" | "value" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "csvOptions" | "disableFocusRipple" | "href" | "size" | "variant" | "action" | "buttonRef" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "onFocusVisible" | "TouchRippleProps"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const GridToolbarFilterButton: React$1.ForwardRefExoticComponent<Pick<ButtonProps<"button", {}>, "color" | "translate" | "hidden" | "size" | "disabled" | "name" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "tabIndex" | "title" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "form" | "key" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "type" | "value" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple" | "href" | "variant" | "action" | "buttonRef" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "onFocusVisible" | "TouchRippleProps" | keyof _material_ui_core_OverridableComponent.CommonProps<_material_ui_core_Button.ButtonTypeMap<{}, "button">>> & React$1.RefAttributes<HTMLButtonElement>>;

declare const GridApiContext: React$1.Context<GridApiRef | undefined>;

interface AutoSizerSize {
    height: number;
    width: number;
}

interface AutoSizerProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, 'children'> {
    /**
     * Function responsible for rendering children.
     */
    children: (size: AutoSizerSize) => React$1.ReactNode;
    /**
     * Default height to use for initial render; useful for SSR.
     * @default null
     */
    defaultHeight?: number;
    /**
     * Default width to use for initial render; useful for SSR.
     * @default null
     */
    defaultWidth?: number;
    /**
     * If `true`, disable dynamic :height property.
     * @default false
     */
    disableHeight?: boolean;
    /**
     * If `true`, disable dynamic :width property.
     * @default false
     */
    disableWidth?: boolean;
    /**
     * Nonce of the inlined stylesheet for Content Security Policy.
     */
    nonce?: string;
    /**
     * Callback to be invoked on-resize.
     */
    onResize?: (size: AutoSizerSize) => void;
}

declare const GridAutoSizer: React$1.ForwardRefExoticComponent<AutoSizerProps & React$1.RefAttributes<HTMLDivElement>>;

declare const GridFooter: React$1.ForwardRefExoticComponent<GridFooterContainerProps & React$1.RefAttributes<HTMLDivElement>>;

declare const GridHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const GridLoadingOverlay: React$1.ForwardRefExoticComponent<GridOverlayProps & React$1.RefAttributes<HTMLDivElement>>;

declare const GridNoRowsOverlay: React$1.ForwardRefExoticComponent<GridOverlayProps & React$1.RefAttributes<HTMLDivElement>>;

declare const GridPagination: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare type WithChildren = {
    children?: React$1.ReactNode;
};
declare const GridRenderingZone: React$1.ForwardRefExoticComponent<ElementSize & WithChildren & React$1.RefAttributes<HTMLDivElement>>;

interface RowCountProps {
    rowCount: number;
    visibleRowCount: number;
}

declare const GridRowCount: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & RowCountProps & React$1.RefAttributes<HTMLDivElement>>;

interface GridRowProps {
    id: GridRowId;
    selected: boolean;
    className: string;
    rowIndex: number;
    children: React$1.ReactNode;
}

declare const GridRow: {
    (props: GridRowProps): JSX.Element;
    displayName: string;
};

interface SelectedRowCountProps {
    selectedRowCount: number;
}

declare const GridSelectedRowCount: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & SelectedRowCountProps & React$1.RefAttributes<HTMLDivElement>>;

interface GridStickyContainerProps extends ElementSize {
    children: React$1.ReactNode;
}

declare const GridStickyContainer: (props: GridStickyContainerProps) => JSX.Element;

declare type ViewportType = React$1.ForwardRefExoticComponent<React$1.RefAttributes<HTMLDivElement>>;
declare const GridViewport: ViewportType;

interface WatermarkProps {
    licenseStatus: string;
}

declare const Watermark: (props: WatermarkProps) => JSX.Element | null;

interface ScrollAreaProps {
    scrollDirection: 'left' | 'right';
}

declare const GridScrollArea: React$1.NamedExoticComponent<ScrollAreaProps>;

declare const GRID_EXPERIMENTAL_ENABLED: boolean;

/**
 * Fired when the grid is resized. Called with a [[GridResizeParams]] object.
 * @event
 */
declare const GRID_RESIZE = "resize";
/**
 * Fired when the grid is resized with a debounced time of 60ms. Called with a [[GridResizeParams]] object.
 * @event
 */
declare const GRID_DEBOUNCED_RESIZE = "debouncedResize";
/**
 * Fired when a `focusout` event happens in the grid.
 * @ignore - do not document.
 * @event
 */
declare const GRID_FOCUS_OUT = "focusout";
/**
 * Fired when a `keydown` event happens in the grid.
 * @ignore - do not document.
 * @event
 */
declare const GRID_KEYDOWN = "keydown";
/**
 * Fired when a `keyup` event happens in the grid.
 * @ignore - do not document.
 * @event
 */
declare const GRID_KEYUP = "keyup";
/**
 * @ignore - do not document.
 */
declare const GRID_NATIVE_SCROLL = "scroll";
/**
 * Fired when an exception is thrown in the grid.
 * @event
 */
declare const GRID_COMPONENT_ERROR = "componentError";
/**
 * Fired when the grid is unmounted.
 * @event
 */
declare const GRID_UNMOUNT = "unmount";
/**
 * @ignore - do not document.
 * TODO remove
 */
declare const GRID_ELEMENT_FOCUS_OUT = "gridFocusOut";
/**
 * Fired when the mode of a cell changes. Called with a [[GridCellModeChangeParams]] object.
 * @event
 */
declare const GRID_CELL_MODE_CHANGE = "cellModeChange";
/**
 * Fired when a cell is clicked. Called with a [[GridCellParams]] object.
 * @event
 */
declare const GRID_CELL_CLICK = "cellClick";
/**
 * Fired when a cell is double-clicked. Called with a [[GridCellParams]] object.
 * @event
 */
declare const GRID_CELL_DOUBLE_CLICK = "cellDoubleClick";
/**
 * Fired when a `mousedown` event happens in a cell. Called with a [[GridCellParams]] object.
 * @event
 */
declare const GRID_CELL_MOUSE_DOWN = "cellMouseDown";
/**
 * Fired when a `mouseover` event happens in a cell. Called with a [[GridCellParams]] object.
 * @event
 */
declare const GRID_CELL_OVER = "cellOver";
/**
 * Fired when a `mouseout` event happens in a cell. Called with a [[GridCellParams]] object.
 * @event
 */
declare const GRID_CELL_OUT = "cellOut";
/**
 * Fired when a `mouseenter` event happens in a cell. Called with a [[GridCellParams]] object.
 * @event
 */
declare const GRID_CELL_ENTER = "cellEnter";
/**
 * Fired when a `mouseleave` event happens in a cell. Called with a [[GridCellParams]] object.
 * @event
 */
declare const GRID_CELL_LEAVE = "cellLeave";
/**
 * Fired when a `keydown` event happens in a cell. Called with a [[GridCellParams]] object.
 * @event
 */
declare const GRID_CELL_KEYDOWN = "cellKeydown";
/**
 * Fired when a cell loses focus. Called with a [[GridCellParams]] object.
 * @event
 */
declare const GRID_CELL_BLUR = "cellBlur";
/**
 * Fired when a cell gains focus. Called with a [[GridCellParams]] object.
 * @event
 */
declare const GRID_CELL_FOCUS = "cellFocus";
/**
 * Fired when the user starts dragging a cell. It's mapped to the `dragstart` DOM event.
 * Called with a [[GridCellParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_CELL_DRAG_START = "cellDragStart";
/**
 * Fired when the dragged cell enters a valid drop target. It's mapped to the `dragend` DOM event.
 * Called with a [[GridCellParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_CELL_DRAG_ENTER = "cellDragEnter";
/**
 * Fired while an element or text selection is dragged over the cell.
 * It's mapped to the `dragover` DOM event.
 * Called with a [[GridCellParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_CELL_DRAG_OVER = "cellDragOver";
/**
 * Fired when the dragging of a cell ends. Called with a [[GridCellParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_CELL_DRAG_END = "cellDragEnd";
/**
 * Fired when the props of the edit input changes. Called with a [[GridEditCellPropsParams]] object.
 * @event
 */
declare const GRID_CELL_EDIT_PROPS_CHANGE = "cellEditPropsChange";
/**
 * Fired when the props of the edit input are committed. Called with a [[GridEditCellPropsParams]] object.
 * @event
 */
declare const GRID_CELL_EDIT_PROPS_CHANGE_COMMITTED = "cellEditPropsChangeCommitted";
/**
 * Fired when the value of a cell changes. Called with a [[GridEditCellValueParams]] object.
 * @event
 */
declare const GRID_CELL_VALUE_CHANGE = "cellValueChange";
/**
 * Fired when the cell turns to edit mode. Called with a [[GridCellParams]] object.
 * @event
 */
declare const GRID_CELL_EDIT_ENTER = "cellEditEnter";
/**
 * Fired when the cell turns back to view mode. Called with a [[GridCellParams]] object.
 * @event
 */
declare const GRID_CELL_EDIT_EXIT = "cellEditExit";
/**
 * Fired when a [navigation key](/components/data-grid/accessibility#keyboard-navigation) is pressed in a cell.
 * Called with a [[GridCellParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_CELL_NAVIGATION_KEYDOWN = "cellNavigationKeyDown";
/**
 * Fired when a row is clicked. Called with a [[GridRowParams]] object.
 * @event
 */
declare const GRID_ROW_CLICK = "rowClick";
/**
 * Fired when a row is double-clicked. Called with a [[GridRowParams]] object.
 * @event
 */
declare const GRID_ROW_DOUBLE_CLICK = "rowDoubleClick";
/**
 * Fired when a `mouseover` event happens in a row.  Called with a [[GridRowParams]] object.
 * @event
 */
declare const GRID_ROW_OVER = "rowOver";
/**
 * Fired when a `mouseout` event happens in a row.  Called with a [[GridRowParams]] object.
 * @event
 */
declare const GRID_ROW_OUT = "rowOut";
/**
 * Fired when a `mouseenter` event happens in a row.  Called with a [[GridRowParams]] object.
 * @event
 */
declare const GRID_ROW_ENTER = "rowEnter";
/**
 * Fired when a `mouseleave` event happens in a row.  Called with a [[GridRowParams]] object.
 * @event
 */
declare const GRID_ROW_LEAVE = "rowLeave";
/**
 * Fired when the row editing model changes. Called with a [[GridEditRowModelParams]] object.
 * @event
 */
declare const GRID_ROW_EDIT_MODEL_CHANGE = "editRowModelChange";
/**
 * Fired when a row is selected or unselected. Called with a [[GridRowSelectedParams]] object.
 * @event
 */
declare const GRID_ROW_SELECTED = "rowSelected";
/**
 * Fired when a column header loses focus. Called with a [[GridColumnHeaderParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_COLUMN_HEADER_BLUR = "columnHeaderBlur";
/**
 * Fired when a column header gains focus. Called with a [[GridColumnHeaderParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_COLUMN_HEADER_FOCUS = "columnHeaderFocus";
/**
 * Fired when a [navigation key](/components/data-grid/accessibility#keyboard-navigation) is pressed in a column header.
 * Called with a [[GridColumnHeaderParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_COLUMN_HEADER_NAVIGATION_KEYDOWN = "columnHeaderNavigationKeydown";
/**
 * Fired when a key is pressed in a column header. It's mapped do the `keydown` DOM event.
 * Called with a [[GridColumnHeaderParams]] object.
 * @event
 */
declare const GRID_COLUMN_HEADER_KEYDOWN = "columnHeaderKeydown";
/**
 * Fired when a column header is clicked. Called with a [[GridColumnHeaderParams]] object.
 * @event
 */
declare const GRID_COLUMN_HEADER_CLICK = "columnHeaderClick";
/**
 * Fired when a column header is double-clicked. Called with a [[GridColumnHeaderParams]] object.
 * @event
 */
declare const GRID_COLUMN_HEADER_DOUBLE_CLICK = "columnHeaderDoubleClick";
/**
 * Fired when a `mouseover` event happens in a column header. Called with a [[GridColumnHeaderParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_COLUMN_HEADER_OVER = "columnHeaderOver";
/**
 * Fired when a `mouseout` event happens in a column header. Called with a [[GridColumnHeaderParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_COLUMN_HEADER_OUT = "columnHeaderOut";
/**
 * Fired when a `mouseenter` event happens in a column header. Called with a [[GridColumnHeaderParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_COLUMN_HEADER_ENTER = "columnHeaderEnter";
/**
 * Fired when a `mouseleave` event happens in a column header. Called with a [[GridColumnHeaderParams]] object.
 * @ignore - do not document.*
 * @event
 */
declare const GRID_COLUMN_HEADER_LEAVE = "columnHeaderLeave";
/**
 * Fired when the user starts dragging a column header. It's mapped to the `dragstart` DOM event.
 * Called with a [[GridColumnHeaderParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_COLUMN_HEADER_DRAG_START = "columnHeaderDragStart";
/**
 * Fired while an element or text selection is dragged over the column header.
 * It's mapped to the `dragover` DOM event.
 * Called with a [[GridColumnHeaderParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_COLUMN_HEADER_DRAG_OVER = "columnHeaderDragOver";
/**
 * Fired when the dragged column header enters a valid drop target.
 * It's mapped to the `dragend` DOM event.
 * Called with a [[GridColumnHeaderParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_COLUMN_HEADER_DRAG_ENTER = "columnHeaderDragEnter";
/**
 * Fired when the dragging of a column header ends. Called with a [[GridColumnHeaderParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_COLUMN_HEADER_DRAG_END = "columnHeaderDragEnd";
/**
 * Fired when the selection state of one or multiple rows changes.
 * Called with a [[GridSelectionModelChangeParams]] object.
 * @event
 */
declare const GRID_SELECTION_CHANGED = "selectionChange";
/**
 * Fired when the current page change. Called with a [[GridPageChangeParams]] object.
 * @event
 */
declare const GRID_PAGE_CHANGE = "pageChange";
/**
 * Fired when the page size change. Called with a [[GridPageChangeParams]] object.
 * @event
 */
declare const GRID_PAGESIZE_CHANGE = "pageSizeChange";
/**
 * Fired during the scroll of the grid viewport. Called with a [[GridScrollParams]] object.
 * @event
 */
declare const GRID_ROWS_SCROLL = "rowsScroll";
/**
 * Fired when scrolling to the bottom of the grid viewport. Called with a [[GridRowScrollEndParams]] object.
 * @event
 */
declare const GRID_ROWS_SCROLL_END = "rowsScrollEnd";
/**
 * Fired when a `mousedown` DOM event happens in the column header separator.
 * Called with a [[GridColumnHeaderParams]] object.
 * @ignore - do not document.
 * @event
 */
declare const GRID_COLUMN_SEPARATOR_MOUSE_DOWN = "columnSeparatorMouseDown";
/**
 * Fired during the resizing of a column. Called with a [[GridColumnResizeParams]] object.
 * @event
 */
declare const GRID_COLUMN_RESIZE = "columnResize";
/**
 * Fired when a column is resized. Called with a [[GridColumnResizeParams]] object.
 * @event
 */
declare const GRID_COLUMN_RESIZE_COMMITTED = "columnResizeCommitted";
/**
 * Fired when the user starts resizing a column. Called with an object `{ field: string }`.
 * @event
 */
declare const GRID_COLUMN_RESIZE_START = "columnResizeStart";
/**
 * Fired when the user stops resizing a column. Called with an object `{ field: string }`.
 * @event
 */
declare const GRID_COLUMN_RESIZE_STOP = "columnResizeStop";
/**
 * Fired when the user ends resizing a column.
 * @event
 */
declare const GRID_COLUMN_ORDER_CHANGE = "columnOrderChange";
/**
 * Fired when the rows are updated.
 * @ignore - do not document.
 * @event
 */
declare const GRID_ROWS_UPDATED = "rowsUpdated";
/**
 * Fired when the rows are updated.
 * @ignore - do not document.
 * @event
 */
declare const GRID_ROWS_SET = "rowsSet";
/**
 * Fired when the grid is emptied.
 * @event
 */
declare const GRID_ROWS_CLEARED = "rowsCleared";
/**
 * Fired when the columns state is changed.
 * Called with an array of strings correspoding to the field names.
 * @event
 */
declare const GRID_COLUMNS_UPDATED = "columnsUpdated";
/**
 * Fired when the sort model changes.
 * Called with a [[GridSortModelParams]] object.
 * @event
 */
declare const GRID_SORT_MODEL_CHANGE = "sortModelChange";
/**
 * Fired when the filter model changes.
 * Called with a [[GridFilterModelParams]] object.
 * @event
 */
declare const GRID_FILTER_MODEL_CHANGE = "filterModelChange";
/**
 * Fired when the state of the grid is updated. Called with a [[GridStateChangeParams]] object.
 * @event
 */
declare const GRID_STATE_CHANGE = "stateChange";
/**
 * Fired when a column visibility changes. Called with a [[GridColumnVisibilityChangeParams]] object.
 * @event
 */
declare const GRID_COLUMN_VISIBILITY_CHANGE = "columnVisibilityChange";

declare const GRID_CSS_CLASS_PREFIX = "MuiDataGrid";
declare const GRID_ROOT_CSS_CLASS_SUFFIX = "root";
declare const GRID_COLUMN_HEADER_CSS_CLASS_SUFFIX = "columnHeader";
declare const GRID_ROW_CSS_CLASS_SUFFIX = "row";
declare const GRID_CELL_CSS_CLASS_SUFFIX = "cell";
declare const GRID_COLUMN_HEADER_CSS_CLASS: string;
declare const GRID_ROW_CSS_CLASS: string;
declare const GRID_CELL_CSS_CLASS: string;
declare const GRID_COLUMN_HEADER_SEPARATOR_RESIZABLE_CSS_CLASS: string;
declare const GRID_COLUMN_HEADER_TITLE_CSS_CLASS: string;
declare const GRID_DATA_CONTAINER_CSS_CLASS = "data-container";
declare const GRID_COLUMN_HEADER_DROP_ZONE_CSS_CLASS: string;
declare const GRID_COLUMN_HEADER_DRAGGING_CSS_CLASS: string;

declare const GRID_DEFAULT_LOCALE_TEXT: GridLocaleText;

declare const useGridColumnMenu: (apiRef: GridApiRef) => void;

declare const gridColumnMenuStateSelector: (state: GridState) => GridColumnMenuState;

declare const gridColumnReorderSelector: (state: GridState) => GridColumnReorderState;
declare const gridColumnReorderDragColSelector: reselect.OutputSelector<GridState, string, (res: GridColumnReorderState) => string>;

declare const useGridColumnReorder: (apiRef: GridApiRef) => void;

declare const gridColumnsSelector: (state: GridState) => GridInternalColumns;
declare const allGridColumnsFieldsSelector: (state: GridState) => string[];
declare const gridColumnLookupSelector: (state: GridState) => GridColumnLookup;
declare const allGridColumnsSelector: reselect.OutputSelector<GridState, GridColumns, (res1: string[], res2: GridColumnLookup) => GridColumns>;
declare const visibleGridColumnsSelector: reselect.OutputSelector<GridState, GridColumns, (res: GridColumns) => GridColumns>;
declare const gridColumnsMetaSelector: reselect.OutputSelector<GridState, GridColumnsMeta, (res: GridColumns) => GridColumnsMeta>;
declare const filterableGridColumnsSelector: reselect.OutputSelector<GridState, GridColumns, (res: GridColumns) => GridColumns>;
declare const filterableGridColumnsIdsSelector: reselect.OutputSelector<GridState, string[], (res: GridColumns) => string[]>;
declare const visibleGridColumnsLengthSelector: reselect.OutputSelector<GridState, number, (res: GridColumns) => number>;
declare const gridColumnsTotalWidthSelector: reselect.OutputSelector<GridState, number, (res: GridColumnsMeta) => number>;

declare function useGridColumns(apiRef: GridApiRef, {columns}: {
    columns: GridColumns;
}): void;

declare const useGridApi: (apiRef: GridApiRef) => GridApi;

declare const useGridReducer: <State, Action>(apiRef: GridApiRef, stateId: any, reducer: React$1.Reducer<State, Action>, initialState: State) => {
    gridState: GridState;
    dispatch: (args: any) => void;
    gridApi: GridApi;
};

declare const useGridSelector: <State>(apiRef: GridApiRef | undefined, selector: (state: any) => State) => State;

declare const useGridState: (apiRef: GridApiRef) => [GridState, (stateUpdaterFn: (oldState: GridState) => GridState) => boolean, () => void];

declare const visibleGridRowsStateSelector: (state: GridState) => VisibleGridRowsState;
declare const visibleSortedGridRowsSelector: reselect.OutputSelector<GridState, Map<GridRowId, GridRowData>, (res1: VisibleGridRowsState, res2: Map<GridRowId, GridRowData>) => Map<GridRowId, GridRowData>>;
declare const visibleSortedGridRowsAsArraySelector: reselect.OutputSelector<GridState, [GridRowId, GridRowData][], (res: Map<GridRowId, GridRowData>) => [GridRowId, GridRowData][]>;
declare const visibleSortedGridRowIdsSelector: reselect.OutputSelector<GridState, GridRowId[], (res: Map<GridRowId, GridRowData>) => GridRowId[]>;
declare const visibleGridRowCountSelector: reselect.OutputSelector<GridState, number, (res1: VisibleGridRowsState, res2: number) => number>;
declare const filterGridStateSelector: (state: GridState) => GridFilterModelState;
declare const activeGridFilterItemsSelector: reselect.OutputSelector<GridState, GridFilterItem[], (res: GridFilterModelState) => GridFilterItem[]>;
declare const filterGridItemsCounterSelector: reselect.OutputSelector<GridState, number, (res: GridFilterItem[]) => number>;
declare type FilterColumnLookup = Record<string, GridFilterItem[]>;
declare const filterGridColumnLookupSelector: reselect.OutputSelector<GridState, FilterColumnLookup, (res: GridFilterItem[]) => FilterColumnLookup>;

/**
 * Partial set of [[GridOptions]].
 */
declare type GridOptionsProp = Partial<GridOptions>;

/**
 * The grid component react props interface.
 */
interface GridComponentProps extends GridOptionsProp {
    /**
     * The ref object that allows grid manipulation. Can be instantiated with [[useGridApiRef()]].
     */
    apiRef?: GridApiRef;
    /**
     * The label of the grid.
     */
    'aria-label'?: string;
    /**
     * The id of the element containing a label for the grid.
     */
    'aria-labelledby'?: string;
    /**
     * @ignore
     */
    className?: string;
    /**
     * Set of columns of type [[GridColumns]].
     */
    columns: GridColumns;
    /**
     * Overrideable components.
     */
    components?: GridSlotsComponent;
    /**
     * Overrideable components props dynamically passed to the component at rendering.
     */
    componentsProps?: GridSlotsComponentsProps;
    /**
     * An error that will turn the grid into its error state and display the error component.
     */
    error?: any;
    /**
     * Return the id of a given [[GridRowData]].
     */
    getRowId?: GridRowIdGetter;
    /**
     * @internal enum
     */
    licenseStatus: string;
    /**
     * If `true`, a  loading overlay is displayed.
     */
    loading?: boolean;
    /**
     * Nonce of the inline styles for [Content Security Policy](https://www.w3.org/TR/2016/REC-CSP2-20161215/#script-src-the-nonce-attribute).
     */
    nonce?: string;
    /**
     * Set a callback fired when the state of the grid is updated.
     */
    onStateChange?: (params: GridStateChangeParams) => void;
    /**
     * Set of rows of type [[GridRowsProp]].
     */
    rows: GridRowsProp;
    /**
     * Set the whole state of the grid.
     */
    state?: Partial<GridState>;
}

declare const useGridFilter: (apiRef: GridApiRef, props: Pick<GridComponentProps, 'rows' | 'filterModel' | 'onFilterModelChange'>) => void;

declare const useGridFocus: (apiRef: GridApiRef) => void;

declare const gridFocusStateSelector: (state: GridState) => GridFocusState;
declare const gridFocusCellSelector: reselect.OutputSelector<GridState, GridCellIdentifier | null, (res: GridFocusState) => GridCellIdentifier | null>;
declare const gridFocusColumnHeaderSelector: reselect.OutputSelector<GridState, GridColumnIdentifier | null, (res: GridFocusState) => GridColumnIdentifier | null>;
declare const gridTabIndexStateSelector: (state: GridState) => GridTabIndexState;
declare const gridTabIndexCellSelector: reselect.OutputSelector<GridState, GridCellIdentifier | null, (res: GridTabIndexState) => GridCellIdentifier | null>;
declare const gridTabIndexColumnHeaderSelector: reselect.OutputSelector<GridState, GridColumnIdentifier | null, (res: GridTabIndexState) => GridColumnIdentifier | null>;

declare const useGridKeyboard: (apiRef: GridApiRef) => void;

declare const useGridKeyboardNavigation: (apiRef: GridApiRef) => void;

declare const gridPaginationSelector: (state: any) => GridPaginationState;

declare const useGridPagination: (apiRef: GridApiRef) => void;

declare const gridPreferencePanelStateSelector: (state: GridState) => GridPreferencePanelState;
declare const gridViewportSizeStateSelector: (state: GridState) => ElementSize;

declare const useGridPreferencesPanel: (apiRef: GridApiRef) => void;

declare type GridRowsLookup = Record<GridRowId, GridRowModel>;
declare const gridRowsStateSelector: (state: GridState) => InternalGridRowsState;
declare const gridRowCountSelector: reselect.OutputSelector<GridState, number, (res: InternalGridRowsState) => number>;
declare const gridRowsLookupSelector: reselect.OutputSelector<GridState, GridRowsLookup, (res: InternalGridRowsState) => GridRowsLookup>;
declare const unorderedGridRowIdsSelector: reselect.OutputSelector<GridState, GridRowId[], (res: InternalGridRowsState) => GridRowId[]>;
declare const unorderedGridRowModelsSelector: reselect.OutputSelector<GridState, GridRowData[], (res: InternalGridRowsState) => GridRowData[]>;

declare function useGridParamsApi(apiRef: GridApiRef): void;

declare function convertGridRowsPropToState(rows: GridRowsProp, totalRowCount?: number, rowIdGetter?: GridRowIdGetter): InternalGridRowsState;

declare const useGridRows: (apiRef: GridApiRef, {rows, getRowId}: Pick<GridComponentProps, 'rows' | 'getRowId'>) => void;

declare const gridEditRowsStateSelector: (state: GridState) => GridEditRowsModel;

declare function useGridEditRows(apiRef: GridApiRef): void;

declare const gridSelectionStateSelector: (state: GridState) => GridSelectionState;
declare const selectedGridRowsCountSelector: OutputSelector<GridState, number, (res: GridSelectionState) => number>;
declare const selectedGridRowsSelector: OutputSelector<GridState, Map<GridRowId, GridRowData>, (res1: GridSelectionState, res2: GridRowsLookup) => Map<GridRowId, GridRowData>>;

declare const useGridSelection: (apiRef: GridApiRef) => void;

declare const sortedGridRowIdsSelector: reselect.OutputSelector<GridState, GridRowId[], (res1: GridSortingState, res2: GridRowId[]) => GridRowId[]>;
declare const sortedGridRowsSelector: reselect.OutputSelector<GridState, Map<GridRowId, GridRowData>, (res1: GridRowId[], res2: GridRowsLookup) => Map<GridRowId, GridRowData>>;
declare const gridSortModelSelector: reselect.OutputSelector<GridState, GridSortModel, (res: GridSortingState) => GridSortModel>;
declare type GridSortColumnLookup = Record<string, {
    sortDirection: GridSortDirection;
    sortIndex?: number;
}>;
declare const gridSortColumnLookupSelector: reselect.OutputSelector<GridState, GridSortColumnLookup, (res: GridSortModel) => GridSortColumnLookup>;

declare const useGridSorting: (apiRef: GridApiRef, {rows}: {
    rows: readonly GridRowData[];
}) => void;

declare type UpdateRenderedColsFnType = (containerProps: GridContainerProps | null, scrollLeft: number) => boolean;
declare type UseVirtualColumnsReturnType = [
    React$1.MutableRefObject<GridRenderColumnsProps | null>,
    UpdateRenderedColsFnType
];
declare const useGridVirtualColumns: (options: GridOptions, apiRef: GridApiRef) => UseVirtualColumnsReturnType;

declare const useGridVirtualRows: (apiRef: GridApiRef) => void;

declare function useGridApiRef(): GridApiRef;
declare function useGridApiRef(apiRefProp: GridApiRef | undefined): GridApiRef;

declare const gridColumnResizeSelector: (state: GridState) => GridColumnResizeState;
declare const gridResizingColumnFieldSelector: reselect.OutputSelector<GridState, string, (res: GridColumnResizeState) => string>;

declare const useGridColumnResize: (apiRef: GridApiRef) => void;

declare const useGridComponents: (apiRef: GridApiRef, {components, componentsProps,}: {
    components?: GridSlotsComponent | undefined;
    componentsProps?: GridSlotsComponentsProps | undefined;
}) => void;

declare const useGridSlotComponentProps: () => GridSlotComponentProps;

declare function useApi(apiRef: GridApiRef): void;

declare function useGridApiEventHandler(apiRef: GridApiRef, eventName: string, handler?: (...args: any) => void, options?: {
    isFirst?: boolean;
}): void;

declare function useGridApiOptionHandler(apiRef: GridApiRef, eventName: string, handler?: (...args: any) => void): void;

declare function useGridApiMethod<T extends Partial<GridApi>>(apiRef: GridApiRef, apiMethods: T, apiName: string): void;

declare const useGridContainerProps: (apiRef: GridApiRef) => void;

declare const useNativeEventListener: (apiRef: GridApiRef, ref: React$1.MutableRefObject<HTMLDivElement | null> | (() => Element | undefined | null), eventName: string, handler?: ((event: Event) => any) | undefined, options?: AddEventListenerOptions | undefined) => void;

declare function useLoggerFactory(apiRef: any, {logger, logLevel}: {
    logger?: Logger;
    logLevel?: string | false;
}): void;

declare function useLogger(name: string): Logger;

declare function useGridScrollFn(renderingZoneElementRef: React$1.RefObject<HTMLDivElement>, columnHeadersElementRef: React$1.RefObject<HTMLDivElement>): [GridScrollFn];

declare const nextGridSortDirection: (sortingOrder: GridSortDirection[], current?: GridSortDirection) => GridSortDirection;
declare const isDesc: (direction: GridSortDirection) => boolean;
declare const gridNillComparer: (v1: GridCellValue, v2: GridCellValue) => number | null;
declare const gridStringNumberComparer: GridComparatorFn;
declare const gridNumberComparer: GridComparatorFn;
declare const gridDateComparer: (value1: GridCellValue, value2: GridCellValue) => number;

declare function isOverflown(element: Element): boolean;

declare function findParentElementFromClassName(elem: Element, className: string): Element | null;

declare function getRowEl(cell?: Element | null): HTMLElement | null;

declare function isGridCellRoot(elem: Element | null): boolean;

declare function isGridHeaderCellRoot(elem: Element | null): boolean;

declare function getIdFromRowElem(rowEl: Element): string;

declare function getFieldFromHeaderElem(colCellEl: Element): string;

declare function findHeaderElementFromField(elem: Element, field: string): Element | null;

declare function findGridCellElementsFromCol(col: HTMLElement): NodeListOf<Element> | null;

declare function getGridColumnHeaderElement(root: Element, field: string): HTMLDivElement;

declare function getGridRowElement(root: Element, id: GridRowId): HTMLDivElement;

declare function getGridCellElement(root: Element, {id, field}: {
    id: GridRowId;
    field: string;
}): HTMLDivElement | null;

declare const isEscapeKey: (key: string) => boolean;
declare const isEnterKey: (key: string) => boolean;
declare const isTabKey: (key: string) => boolean;
declare const isSpaceKey: (key: string) => boolean;
declare const isArrowKeys: (key: string) => boolean;
declare const isHomeOrEndKeys: (key: string) => boolean;
declare const isPageKeys: (key: string) => boolean;
declare const isDeleteKeys: (key: string) => boolean;
declare const isPrintableKey: (key: string) => boolean;
declare const GRID_MULTIPLE_SELECTION_KEYS: string[];
declare const GRID_CELL_EXIT_EDIT_MODE_KEYS: string[];
declare const GRID_CELL_EDIT_COMMIT_KEYS: string[];
declare const isMultipleKey: (key: string) => boolean;
declare const isCellEnterEditModeKeys: (key: string) => boolean;
declare const isCellExitEditModeKeys: (key: string) => boolean;
declare const isCellEditCommitKeys: (key: string) => boolean;
declare const isNavigationKey: (key: string) => boolean;
declare const isKeyboardEvent: (event: any) => event is React$1.KeyboardEvent<Element>;
declare const isHideMenuKey: (key: any) => boolean;

declare function mergeGridColTypes(defaultColumnTypes: GridColumnTypesRecord, optionsColTypes: GridColumnTypesRecord): GridColumnTypesRecord;

declare function removeUndefinedProps(options: Object): {
    constructor: Function;
    toString(): string;
    toLocaleString(): string;
    valueOf(): Object;
    hasOwnProperty(v: PropertyKey): boolean;
    isPrototypeOf(v: Object): boolean;
    propertyIsEnumerable(v: PropertyKey): boolean;
};

declare function mergeGridOptions(defaultOptions: any, options?: any): any;

interface LocalizationV4 {
    props: {
        MuiDataGrid: Pick<GridOptions, 'localeText'>;
    };
}

interface LocalizationV5 {
    components: {
        MuiDataGrid: {
            defaultProps: Pick<GridOptions, 'localeText'>;
        };
    };
}

declare type Localization = LocalizationV4 | LocalizationV5;
declare const getGridLocalization: (gridTranslations: Partial<GridLocaleText>, coreTranslations?: any) => Localization;

declare function useEventCallback<T extends (...args: any[]) => any>(func: T): T;

declare const useEnhancedEffect: typeof React$1.useLayoutEffect;

declare function useThemeProps({props: inputProps, name}: {
    props: any;
    name: any;
}): any;

declare function composeClasses<ClassKey extends string>(slots: Record<ClassKey, ReadonlyArray<string | false | undefined | null>>, getUtilityClass: (slot: string) => string, classes: Record<string, string> | undefined): Record<ClassKey, string>;

declare function generateUtilityClass(componentName: string, slot: string): string;

/**
 * I have hesitate to use https://github.com/eligrey/FileSaver.js.
 * If we get bug reports that this project solves, we should consider using it.
 *
 * Related resources.
 * https://blog.logrocket.com/programmatic-file-downloads-in-the-browser-9a5186298d5c/
 * https://github.com/mbrn/filefy/blob/ec4ed0b7415d93be7158c23029f2ea1fa0b8e2d9/src/core/BaseBuilder.ts
 * https://unpkg.com/browse/@progress/kendo-file-saver@1.0.7/dist/es/save-as.js
 * https://github.com/ag-grid/ag-grid/blob/9565c219b6210aa85fa833c929d0728f9d163a91/community-modules/csv-export/src/csvExport/downloader.ts
 */
declare function exportAs(blob: Blob, extension?: GridExportFormat, filename?: string): void;

declare const bgBG: Localization;

declare const csCZ: Localization;

declare const deDE: Localization;

declare const elGR: Localization;

declare const enUS: Localization;

declare const esES: Localization;

declare const frFR: Localization;

declare const itIT: Localization;

declare const jaJP: Localization;

declare const nlNL: Localization;

declare const plPLGrid: Partial<GridLocaleText>;
declare const plPL: Localization;

declare const ptBR: Localization;

declare const ruRUGrid: Partial<GridLocaleText>;
declare const ruRU: Localization;

declare const skSKGrid: Partial<GridLocaleText>;
declare const skSK: Localization;

declare const trTR: Localization;

declare const ukUAGrid: Partial<GridLocaleText>;
declare const ukUA: Localization;

/**
 * Data Grid component implementing [[GridComponentProps]].
 * @returns JSX.Element
 */

declare const GridComponent: React$1.ForwardRefExoticComponent<GridComponentProps & React$1.RefAttributes<HTMLDivElement>>;

declare const useGridComponent: (apiRef: GridApiRef, props: GridComponentProps) => void;

declare function GridHeaderPlaceholder(): JSX.Element;

declare function GridFooterPlaceholder(): JSX.Element | null;

declare type XGridProps = Omit<GridComponentProps, 'licenseStatus'>;
declare const XGrid: React$1.MemoExoticComponent<React$1.ForwardRefExoticComponent<XGridProps & React$1.RefAttributes<HTMLDivElement>>>;

export {
    AutoSizerProps,
    AutoSizerSize,
    CursorCoordinates,
    DEFAULT_GRID_COL_TYPE_KEY,
    DEFAULT_GRID_OPTIONS,
    DEFAULT_GRID_SLOTS_COMPONENTS,
    DEFAULT_GRID_SLOTS_ICONS,
    ElementSize,
    FilterColumnLookup,
    GRID_BOOLEAN_COLUMN_TYPE,
    GRID_CELL_BLUR,
    GRID_CELL_CLICK,
    GRID_CELL_CSS_CLASS,
    GRID_CELL_CSS_CLASS_SUFFIX,
    GRID_CELL_DOUBLE_CLICK,
    GRID_CELL_DRAG_END,
    GRID_CELL_DRAG_ENTER,
    GRID_CELL_DRAG_OVER,
    GRID_CELL_DRAG_START,
    GRID_CELL_EDIT_COMMIT_KEYS,
    GRID_CELL_EDIT_ENTER,
    GRID_CELL_EDIT_EXIT,
    GRID_CELL_EDIT_PROPS_CHANGE,
    GRID_CELL_EDIT_PROPS_CHANGE_COMMITTED,
    GRID_CELL_ENTER,
    GRID_CELL_EXIT_EDIT_MODE_KEYS,
    GRID_CELL_FOCUS,
    GRID_CELL_KEYDOWN,
    GRID_CELL_LEAVE,
    GRID_CELL_MODE_CHANGE,
    GRID_CELL_MOUSE_DOWN,
    GRID_CELL_NAVIGATION_KEYDOWN,
    GRID_CELL_OUT,
    GRID_CELL_OVER,
    GRID_CELL_VALUE_CHANGE,
    GRID_COLUMNS_UPDATED,
    GRID_COLUMN_HEADER_BLUR,
    GRID_COLUMN_HEADER_CLICK,
    GRID_COLUMN_HEADER_CSS_CLASS,
    GRID_COLUMN_HEADER_CSS_CLASS_SUFFIX,
    GRID_COLUMN_HEADER_DOUBLE_CLICK,
    GRID_COLUMN_HEADER_DRAGGING_CSS_CLASS,
    GRID_COLUMN_HEADER_DRAG_END,
    GRID_COLUMN_HEADER_DRAG_ENTER,
    GRID_COLUMN_HEADER_DRAG_OVER,
    GRID_COLUMN_HEADER_DRAG_START,
    GRID_COLUMN_HEADER_DROP_ZONE_CSS_CLASS,
    GRID_COLUMN_HEADER_ENTER,
    GRID_COLUMN_HEADER_FOCUS,
    GRID_COLUMN_HEADER_KEYDOWN,
    GRID_COLUMN_HEADER_LEAVE,
    GRID_COLUMN_HEADER_NAVIGATION_KEYDOWN,
    GRID_COLUMN_HEADER_OUT,
    GRID_COLUMN_HEADER_OVER,
    GRID_COLUMN_HEADER_SEPARATOR_RESIZABLE_CSS_CLASS,
    GRID_COLUMN_HEADER_TITLE_CSS_CLASS,
    GRID_COLUMN_ORDER_CHANGE,
    GRID_COLUMN_RESIZE,
    GRID_COLUMN_RESIZE_COMMITTED,
    GRID_COLUMN_RESIZE_START,
    GRID_COLUMN_RESIZE_STOP,
    GRID_COLUMN_SEPARATOR_MOUSE_DOWN,
    GRID_COLUMN_VISIBILITY_CHANGE,
    GRID_COMPONENT_ERROR,
    GRID_CSS_CLASS_PREFIX,
    GRID_DATA_CONTAINER_CSS_CLASS,
    GRID_DATETIME_COLUMN_TYPE,
    GRID_DATETIME_COL_DEF,
    GRID_DATE_COLUMN_TYPE,
    GRID_DATE_COL_DEF,
    GRID_DEBOUNCED_RESIZE,
    GRID_DEFAULT_LOCALE_TEXT,
    GRID_ELEMENT_FOCUS_OUT,
    GRID_EXPERIMENTAL_ENABLED,
    GRID_FILTER_MODEL_CHANGE,
    GRID_FOCUS_OUT,
    GRID_KEYDOWN,
    GRID_KEYUP,
    GRID_MULTIPLE_SELECTION_KEYS,
    GRID_NATIVE_SCROLL,
    GRID_NUMBER_COLUMN_TYPE,
    GRID_NUMERIC_COL_DEF,
    GRID_PAGESIZE_CHANGE,
    GRID_PAGE_CHANGE,
    GRID_RESIZE,
    GRID_ROOT_CSS_CLASS_SUFFIX,
    GRID_ROWS_CLEARED,
    GRID_ROWS_SCROLL,
    GRID_ROWS_SCROLL_END,
    GRID_ROWS_SET,
    GRID_ROWS_UPDATED,
    GRID_ROW_CLICK,
    GRID_ROW_CSS_CLASS,
    GRID_ROW_CSS_CLASS_SUFFIX,
    GRID_ROW_DOUBLE_CLICK,
    GRID_ROW_EDIT_MODEL_CHANGE,
    GRID_ROW_ENTER,
    GRID_ROW_LEAVE,
    GRID_ROW_OUT,
    GRID_ROW_OVER,
    GRID_ROW_SELECTED,
    GRID_SELECTION_CHANGED,
    GRID_SORT_MODEL_CHANGE,
    GRID_STATE_CHANGE,
    GRID_STRING_COLUMN_TYPE,
    GRID_STRING_COL_DEF,
    GRID_UNMOUNT,
    GridAddIcon,
    GridAlignment,
    GridApi,
    GridApiContext,
    GridApiRef,
    GridApiRefComponentsProperty,
    GridArrowDownwardIcon,
    GridArrowUpwardIcon,
    GridAutoSizer,
    GridCell,
    GridCellCheckboxForwardRef,
    GridCellCheckboxRenderer,
    GridCellClassFn,
    GridCellClassNamePropType,
    GridCellIdentifier,
    GridCellIndexCoordinates,
    GridCellMode,
    GridCellModeChangeParams,
    GridCellParams,
    GridCellProps,
    GridCellValue,
    GridCheckCircleIcon,
    GridCheckIcon,
    GridClasses,
    GridCloseIcon,
    GridColDef,
    GridColType,
    GridColTypeDef,
    GridColumnApi,
    GridColumnHeaderClassFn,
    GridColumnHeaderClassNamePropType,
    GridColumnHeaderIndexCoordinates,
    GridColumnHeaderItem,
    GridColumnHeaderMenu,
    GridColumnHeaderMenuProps,
    GridColumnHeaderParams,
    GridColumnHeaderSeparator,
    GridColumnHeaderSeparatorProps,
    GridColumnHeaderSortIcon,
    GridColumnHeaderSortIconProps,
    GridColumnHeaderTitle,
    GridColumnHeaderTitleProps,
    GridColumnHeadersItemCollection,
    GridColumnHeadersItemCollectionProps,
    GridColumnIcon,
    GridColumnIdentifier,
    GridColumnLookup,
    GridColumnMenu,
    GridColumnMenuApi,
    GridColumnMenuContainer,
    GridColumnMenuProps,
    GridColumnMenuState,
    GridColumnOrderChangeParams,
    GridColumnProp,
    GridColumnReorderState,
    GridColumnResizeParams,
    GridColumnResizeState,
    GridColumnTypesRecord,
    GridColumns,
    GridColumnsContainer,
    GridColumnsHeader,
    GridColumnsMenuItem,
    GridColumnsMeta,
    GridColumnsPanel,
    GridComparatorFn,
    GridComponent,
    GridComponentProps,
    GridComponentsApi,
    GridContainerProps,
    GridCoreApi,
    GridCsvExportApi,
    GridDataContainer,
    GridDensity,
    GridDensityApi,
    GridDensityOption,
    GridDensityTypes,
    GridDragIcon,
    GridEditCellProps,
    GridEditCellPropsParams,
    GridEditCellValueParams,
    GridEditInputCell,
    GridEditRowApi,
    GridEditRowModelParams,
    GridEditRowProps,
    GridEditRowsModel,
    GridEmptyCell,
    GridEmptyCellProps,
    GridEventsApi,
    GridExportCsvOptions,
    GridExportFormat,
    GridFeatureMode,
    GridFeatureModeConstant,
    GridFieldComparatorList,
    GridFilterAltIcon,
    GridFilterApi,
    GridFilterForm,
    GridFilterFormProps,
    GridFilterInputValue,
    GridFilterInputValueProps,
    GridFilterItem,
    GridFilterItemProps,
    GridFilterListIcon,
    GridFilterMenuItem,
    GridFilterModel,
    GridFilterModelParams,
    GridFilterModelState,
    GridFilterOperator,
    GridFilterPanel,
    GridFocusApi,
    GridFocusState,
    GridFooter,
    GridFooterContainer,
    GridFooterContainerProps,
    GridFooterPlaceholder,
    GridHeader,
    GridHeaderCheckbox,
    GridHeaderPlaceholder,
    GridIconSlotsComponent,
    GridInternalColumns,
    GridLinkOperator,
    GridLoadIcon,
    GridLoadingOverlay,
    GridLocaleText,
    GridLocaleTextApi,
    GridMenu,
    GridMenuIcon,
    GridMenuProps,
    GridNativeColTypes,
    GridNoRowsOverlay,
    GridOptions,
    GridOptionsProp,
    GridOverlay,
    GridOverlayProps,
    GridPageChangeParams,
    GridPagination,
    GridPaginationApi,
    GridPaginationState,
    GridPanel,
    GridPanelContent,
    GridPanelFooter,
    GridPanelHeader,
    GridPanelProps,
    GridPanelWrapper,
    GridParamsApi,
    GridPreferencePanelState,
    GridPreferencePanelsValue,
    GridPreferencesPanel,
    GridPreferencesPanelApi,
    GridRenderColumnsProps,
    GridRenderContextProps,
    GridRenderPaginationProps,
    GridRenderRowProps,
    GridRenderingZone,
    GridResizeParams,
    GridRoot,
    GridRootContainerRef,
    GridRootProps,
    GridRow,
    GridRowApi,
    GridRowCells,
    GridRowCount,
    GridRowData,
    GridRowId,
    GridRowIdGetter,
    GridRowModel,
    GridRowModelUpdate,
    GridRowParams,
    GridRowProps,
    GridRowScrollEndParams,
    GridRowSelectedParams,
    GridRowsLookup,
    GridRowsProp,
    GridSaveAltIcon,
    GridScrollArea,
    GridScrollBarState,
    GridScrollFn,
    GridScrollParams,
    GridSearchIcon,
    GridSelectedRowCount,
    GridSelectionApi,
    GridSelectionModelChangeParams,
    GridSelectionState,
    GridSeparatorIcon,
    GridSlotComponentProps,
    GridSlotsComponent,
    GridSlotsComponentsProps,
    GridSortApi,
    GridSortCellParams,
    GridSortColumnLookup,
    GridSortDirection,
    GridSortItem,
    GridSortModel,
    GridSortModelParams,
    GridSortingState,
    GridState,
    GridStateApi,
    GridStateChangeParams,
    GridStickyContainer,
    GridTabIndexState,
    GridTableRowsIcon,
    GridToolbar,
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarContainerProps,
    GridToolbarDensitySelector,
    GridToolbarExport,
    GridToolbarExportProps,
    GridToolbarFilterButton,
    GridTranslationKeys,
    GridTripleDotsVerticalIcon,
    GridTypeFilterInputValueProps,
    GridUpdateAction,
    GridValueFormatterParams,
    GridValueGetterParams,
    GridViewHeadlineIcon,
    GridViewStreamIcon,
    GridViewport,
    GridViewportSizeState,
    GridVirtualizationApi,
    GridWindow,
    GridWindowProps,
    HideGridColMenuItem,
    InternalGridRowsState,
    InternalRenderingState,
    Localization,
    LocalizationV4,
    LocalizationV5,
    Logger,
    Optional,
    SUBMIT_FILTER_STROKE_TIME,
    SortGridMenuItems,
    VisibleGridRowsState,
    Watermark,
    WatermarkProps,
    XGrid,
    XGridProps,
    activeGridFilterItemsSelector,
    allGridColumnsFieldsSelector,
    allGridColumnsSelector,
    bgBG,
    checkGridRowIdIsValid,
    composeClasses,
    convertGridRowsPropToState,
    createTheme,
    csCZ,
    deDE,
    elGR,
    enUS,
    esES,
    exportAs,
    filterGridColumnLookupSelector,
    filterGridItemsCounterSelector,
    filterGridStateSelector,
    filterableGridColumnsIdsSelector,
    filterableGridColumnsSelector,
    findGridCellElementsFromCol,
    findHeaderElementFromField,
    findParentElementFromClassName,
    formatDateToLocalInputDate,
    frFR,
    generateUtilityClass,
    getDataGridUtilityClass,
    getFieldFromHeaderElem,
    getGridCellElement,
    getGridColDef,
    getGridColumnHeaderElement,
    getGridDateOperators,
    getGridDefaultColumnTypes,
    getGridLocalization,
    getGridNumericColumnOperators,
    getGridRowElement,
    getGridStringOperators,
    getIdFromRowElem,
    getInitialGridColumnReorderState,
    getInitialGridColumnResizeState,
    getInitialGridColumnsState,
    getInitialGridFilterState,
    getInitialGridRenderingState,
    getInitialGridRowState,
    getInitialGridSortingState,
    getInitialGridState,
    getInitialVisibleGridRowsState,
    getRowEl,
    getThemePaletteMode,
    gridCheckboxSelectionColDef,
    gridColumnLookupSelector,
    gridColumnMenuStateSelector,
    gridColumnReorderDragColSelector,
    gridColumnReorderSelector,
    gridColumnResizeSelector,
    gridColumnsMetaSelector,
    gridColumnsSelector,
    gridColumnsTotalWidthSelector,
    gridDateComparer,
    gridDateFormatter,
    gridDateTimeFormatter,
    gridEditRowsStateSelector,
    gridFocusCellSelector,
    gridFocusColumnHeaderSelector,
    gridFocusStateSelector,
    gridNillComparer,
    gridNumberComparer,
    gridPaginationSelector,
    gridPreferencePanelStateSelector,
    gridResizingColumnFieldSelector,
    gridRowCountSelector,
    gridRowsLookupSelector,
    gridRowsStateSelector,
    gridScrollbarStateSelector,
    gridSelectionStateSelector,
    gridSortColumnLookupSelector,
    gridSortModelSelector,
    gridStringNumberComparer,
    gridTabIndexCellSelector,
    gridTabIndexColumnHeaderSelector,
    gridTabIndexStateSelector,
    gridViewportSizeStateSelector,
    isArrowKeys,
    isCellEditCommitKeys,
    isCellEnterEditModeKeys,
    isCellExitEditModeKeys,
    isDate,
    isDateValid,
    isDeepEqual,
    isDeleteKeys,
    isDesc,
    isEnterKey,
    isEscapeKey,
    isFunction,
    isGridCellRoot,
    isGridHeaderCellRoot,
    isHideMenuKey,
    isHomeOrEndKeys,
    isKeyboardEvent,
    isMuiV5,
    isMultipleKey,
    isNavigationKey,
    isNumber,
    isObject,
    isOverflown,
    isPageKeys,
    isPrintableKey,
    isSpaceKey,
    isTabKey,
    itIT,
    jaJP,
    localStorageAvailable,
    mapColDefTypeToInputType,
    mergeGridColTypes,
    mergeGridOptions,
    muiStyleAlpha,
    nextGridSortDirection,
    nlNL,
    parseDate,
    parseDateTime,
    plPL,
    plPLGrid,
    ptBR,
    removeUndefinedProps,
    renderEditInputCell,
    ruRU,
    ruRUGrid,
    selectedGridRowsCountSelector,
    selectedGridRowsSelector,
    skSK,
    skSKGrid,
    sortedGridRowIdsSelector,
    sortedGridRowsSelector,
    trTR,
    ukUA,
    ukUAGrid,
    unorderedGridRowIdsSelector,
    unorderedGridRowModelsSelector,
    useApi,
    useEnhancedEffect,
    useEventCallback,
    useGridApi,
    useGridApiEventHandler,
    useGridApiMethod,
    useGridApiOptionHandler,
    useGridApiRef,
    useGridColumnMenu,
    useGridColumnReorder,
    useGridColumnResize,
    useGridColumns,
    useGridComponent,
    useGridComponents,
    useGridContainerProps,
    useGridEditRows,
    useGridFilter,
    useGridFocus,
    useGridKeyboard,
    useGridKeyboardNavigation,
    useGridPagination,
    useGridParamsApi,
    useGridPreferencesPanel,
    useGridReducer,
    useGridRows,
    useGridScrollFn,
    useGridSelection,
    useGridSelector,
    useGridSlotComponentProps,
    useGridSorting,
    useGridState,
    useGridVirtualColumns,
    useGridVirtualRows,
    useLogger,
    useLoggerFactory,
    useNativeEventListener,
    useThemeProps,
    visibleGridColumnsLengthSelector,
    visibleGridColumnsSelector,
    visibleGridRowCountSelector,
    visibleGridRowsStateSelector,
    visibleSortedGridRowIdsSelector,
    visibleSortedGridRowsAsArraySelector,
    visibleSortedGridRowsSelector
};
