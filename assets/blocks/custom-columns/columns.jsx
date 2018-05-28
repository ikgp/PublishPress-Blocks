const { addFilter } = wp.hooks;
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, RangeControl } = wp.components;

// Register extra attributes
addFilter( 'blocks.registerBlockType', 'advgb/registerExtraColumnsAttrs', function ( settings ) {
    if (settings.name === 'core/text-columns' || settings.name === 'core/columns') {
        settings.attributes = Object.assign( settings.attributes, {
            colMargin: {
                type: 'number',
            },
            colPadding: {
                type: 'number',
            },
            blockID: {
                type: 'string',
            },
        } );
    }

    return settings;
} );

// Add options to edit in backend
addFilter( 'blocks.BlockEdit', 'advgb/editColumnsAttrs', function ( BlockEdit ) {
    return ( props ) => {
        if (props.name === "core/text-columns" || props.name === "core/columns") {
            const { isSelected, attributes, setAttributes, id } = props;
            const { colMargin, colPadding, blockID } = attributes;

            return ( [
                <BlockEdit key="block-edit-custom-columns" {...props}/>,
                isSelected &&
                <InspectorControls key="inspector-custom-columns">
                    <RangeControl
                        label={ __( 'Columns margin' ) }
                        value={ colMargin }
                        min={ 0 }
                        max={ 200 }
                        onChange={ (value) => {
                            if (!blockID) setAttributes( { blockID: 'columns-' + id } );
                            return setAttributes( { colMargin: value } );
                        } }
                    />
                    <RangeControl
                        label={ __( 'Columns padding' ) }
                        value={ colPadding }
                        min={ 0 }
                        max={ 100 }
                        onChange={ (value) => {
                            if (!blockID) setAttributes( { blockID: 'columns-' + id } );
                            return setAttributes( { colPadding: value } );
                        } }
                    />
                </InspectorControls>,
                props.name === 'core/columns' && (!!colMargin || !!colPadding) &&
                <style key="custom-columns-styles">
                    {`#block-${id} .wp-block-columns {grid-gap: ${colMargin}px;}`}
                    {`#block-${id} .wp-block-columns .editor-block-list__block-edit {padding: ${colPadding}px;}`}
                </style>,
                props.name === 'core/text-columns' && (!!colMargin || !!colPadding) &&
                <style key="custom-text-columns-styles">
                    {`#block-${id} .wp-block-column:not(:first-child) {margin-left: ${colMargin}px;}`}
                    {`#block-${id} .wp-block-column {padding: ${colPadding}px;}`}
                </style>
            ] )
        }

        return <BlockEdit {...props} />;
    }
} );

// Save options to show in frontend
addFilter( 'blocks.getSaveContent.extraProps', 'advgb/saveColumnsAttrs', function ( extraProps, blockType, attributes ) {
    const { colMargin, blockID } = attributes;

    if (blockType.name === 'core/text-columns') {
        extraProps = Object.assign( extraProps, {
            id: blockID,
        } )
    } else if (blockType.name === 'core/columns') {
        extraProps = Object.assign( extraProps, {
            id: blockID,
            style: { gridGap: !!colMargin ? colMargin + 'px' : undefined },
        } )
    }

    return extraProps;
} );

// Save option to show in frontend
addFilter( 'blocks.getSaveElement', 'advgb/saveTextColumnsElm', function ( SaveElm, blockType, attributes ) {
    if (blockType.name === 'core/text-columns') {
        const { colMargin, colPadding, blockID } = attributes;

        return (
            <Fragment>
                {SaveElm}
                {blockID && (!!colMargin || !!colPadding) &&
                <style>
                    {`#${blockID} .wp-block-column:not(:first-child) {
                        margin-left: ${colMargin}px;
                    }
                    #${blockID} .wp-block-column {
                        padding: ${colPadding}px;
                    }`}
                </style>}
            </Fragment>
        )
    } else if ( blockType.name === 'core/columns' ) {
        const { colPadding, blockID } = attributes;

        return (
            <Fragment>
                {SaveElm}
                {blockID && !!colPadding &&
                <style>
                    {`#${blockID} [class^='layout-column-'] {
                        padding: ${colPadding}px;
                    }`}
                </style>}
            </Fragment>
        )
    }

    return SaveElm;
} );