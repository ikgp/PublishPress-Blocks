const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { registerBlockType, InspectorControls, BlockControls, RichText, ColorPalette, MediaUpload } = wp.blocks;
const { RangeControl, PanelBody, PanelColor, ToggleControl, SelectControl, TextControl, IconButton, Button } = wp.components;

class AdvImage extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            currentEdit: '',
        }
    }

    setCurrentEditArea( area ) {
        this.setState( { currentEdit: area } );
    }

    render() {
        const { currentEdit } = this.state;
        const { attributes, setAttributes, isSelected } = this.props;
        const {
            openOnClick,
            openUrl,
            imageUrl,
            imageID,
            title,
            titleColor,
            subtitle,
            subtitleColor,
            overlayColor,
            fullWidth,
            width,
            height,
            vAlign,
            hAlign,
        } = attributes;
        const blockClassName = [
            'advgb-image-block',
            fullWidth && 'full-width',
        ].filter( Boolean ).join( ' ' );

        return (
            <Fragment>
                {imageID && (
                    <BlockControls>
                        <MediaUpload
                            type={ 'image' }
                            value={ imageID }
                            onSelect={ (image) => setAttributes( { imageUrl: image.url, imageID: image.id } ) }
                            render={ ( { open } ) => (
                                <IconButton
                                    className="components-toolbar__control"
                                    label={ __( 'Change image' ) }
                                    icon={ 'edit' }
                                    onClick={ open }
                                />
                            ) }
                        />
                        <IconButton
                            className="components-toolbar__control"
                            label={ __( 'Remove image' ) }
                            icon={ 'no' }
                            onClick={ () => setAttributes( { imageUrl: undefined, imageID: undefined } ) }
                        />
                    </BlockControls>
                ) }
                <InspectorControls>
                    <PanelBody title={ __( 'Advanced Image' ) }>
                        <SelectControl
                            label={ __( 'Action on click' ) }
                            value={ openOnClick }
                            options={ [
                                { label: __( 'None' ), value: 'none' },
                                { label: __( 'Open image in lightbox' ), value: 'lightbox' },
                                { label: __( 'Open custom URL' ), value: 'url' },
                            ] }
                            onChange={ (value) => setAttributes( { openOnClick: value } ) }
                        />
                        {openOnClick === 'url' &&
                            <TextControl
                                label={ [
                                    __( 'Link URL' ),
                                    (openUrl && <a href={ openUrl || '#' } key="advgb_image_link_url" target="_blank" style={ { float: 'right' } }>
                                        { __( 'Preview' ) }
                                    </a>)
                                ] }
                                value={ openUrl }
                                placeholder={ __( 'Enter URL…' ) }
                                onChange={ ( text ) => setAttributes( { openUrl: text } ) }
                            />
                        }
                        <PanelBody title={ __( 'Image Size' ) }>
                            <ToggleControl
                                label={ __( 'Full width' ) }
                                checked={ fullWidth }
                                onChange={ () => setAttributes( { fullWidth: !fullWidth } ) }
                            />
                            <RangeControl
                                label={ __( 'Height' ) }
                                value={ height }
                                min={ 100 }
                                max={ 1000 }
                                onChange={ (value) => setAttributes( { height: value } ) }
                            />
                            {!fullWidth &&
                                <RangeControl
                                    label={ __( 'Width' ) }
                                    value={ width }
                                    min={ 200 }
                                    max={ 1300 }
                                    onChange={ (value) => setAttributes( { width: value } ) }
                                />
                            }
                        </PanelBody>
                        <PanelColor title={ __( 'Title Color' ) } colorValue={titleColor} initialOpen={false}>
                            <ColorPalette
                                value={titleColor}
                                onChange={ (value) => setAttributes( { titleColor: value } ) }
                            />
                        </PanelColor>
                        <PanelColor title={ __( 'Subtitle Color' ) } colorValue={subtitleColor} initialOpen={false}>
                            <ColorPalette
                                value={subtitleColor}
                                onChange={ (value) => setAttributes( { subtitleColor: value } ) }
                            />
                        </PanelColor>
                        <PanelColor title={ __( 'Overlay Color' ) } colorValue={overlayColor} initialOpen={false}>
                            <ColorPalette
                                value={overlayColor}
                                onChange={ (value) => setAttributes( { overlayColor: value } ) }
                            />
                        </PanelColor>
                        <PanelBody title={ __( 'Text Alignment' ) } initialOpen={false}>
                            <SelectControl
                                label={ __( 'Vertical Alignment' ) }
                                value={vAlign}
                                options={ [
                                    { label: __( 'Top' ), value: 'flex-start' },
                                    { label: __( 'Center' ), value: 'center' },
                                    { label: __( 'Bottom' ), value: 'flex-end' },
                                ] }
                                onChange={ (value) => setAttributes( { vAlign: value } ) }
                            />
                            <SelectControl
                                label={ __( 'Horizontal Alignment' ) }
                                value={hAlign}
                                options={ [
                                    { label: __( 'Left' ), value: 'flex-start' },
                                    { label: __( 'Center' ), value: 'center' },
                                    { label: __( 'Right' ), value: 'flex-end' },
                                ] }
                                onChange={ (value) => setAttributes( { hAlign: value } ) }
                            />
                        </PanelBody>
                    </PanelBody>
                </InspectorControls>
                <div className={ blockClassName }
                     style={ {
                         backgroundImage: `url( ${imageUrl})`,
                         height: height,
                         width: width,
                         justifyContent: vAlign,
                         alignItems: hAlign,
                     } }
                >
                    <span className={ 'advgb-image-overlay' }
                          style={ { backgroundColor: overlayColor } }
                    />
                    {!imageID &&
                        <MediaUpload
                            type={ 'image' }
                            value={ imageID }
                            onSelect={ (image) => setAttributes( { imageUrl: image.url, imageID: image.id } ) }
                            render={ ( { open } ) => (
                                <Button
                                    className="button button-large"
                                    onClick={ open }
                                >
                                    { __( 'Choose image' ) }
                                </Button>
                            ) }
                        />
                    }
                    <RichText
                        tagName={ 'h4' }
                        className={ 'advgb-image-title' }
                        value={ title }
                        onChange={ (value) => setAttributes( { title: value } ) }
                        style={ { color: titleColor } }
                        isSelected={ isSelected && currentEdit === 'title' }
                        onFocus={ () => this.setCurrentEditArea( 'title' ) }
                    />
                    <RichText
                        tagName={ 'p' }
                        className={ 'advgb-image-subtitle' }
                        value={ subtitle }
                        onChange={ (value) => setAttributes( { subtitle: value } ) }
                        style={ { color: subtitleColor } }
                        isSelected={ isSelected && currentEdit === 'subtitle' }
                        onFocus={ () => this.setCurrentEditArea( 'subtitle' ) }
                    />
                </div>
            </Fragment>
        );
    }
}

const advImageBlockIcon = (
    <svg fill="#000000" height="20" viewBox="2 2 22 22" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z"/>
    </svg>
);

registerBlockType( 'advgb/image', {
    title: __( 'Advanced Image' ),
    description: __( 'Advanced image/photo block with more options and styles.' ),
    icon: advImageBlockIcon,
    category: 'common',
    keywords: [ __( 'image' ), __( 'photo' ), __( 'box' ) ],
    attributes: {
        openOnClick: {
            type: 'string',
            default: 'none',
        },
        openUrl: {
            type: 'string',
        },
        imageUrl: {
            type: 'string',
        },
        imageID: {
            type: 'string',
        },
        title: {
            type: 'string',
            default: __( 'Image title' ),
        },
        titleColor: {
            type: 'string',
            default: '#fff',
        },
        subtitle: {
            type: 'string',
            default: __( 'Your subtitle here' ),
        },
        subtitleColor: {
            type: 'string',
            default: '#fff'
        },
        overlayColor: {
            type: 'string',
            default: '#2196f3'
        },
        fullWidth: {
            type: 'boolean',
            default: false,
        },
        width: {
            type: 'number',
            default: 500,
        },
        height: {
            type: 'number',
            default: 500,
        },
        vAlign: {
            type: 'string',
            default: 'center',
        },
        hAlign: {
            type: 'string',
            default: 'center',
        },
    },
    edit: AdvImage,
    save: ( { attributes } ) => {
        const {
            openOnClick,
            openUrl,
            imageUrl,
            title,
            titleColor,
            subtitle,
            subtitleColor,
            overlayColor,
            fullWidth,
            width,
            height,
            vAlign,
            hAlign,
        } = attributes;
        const linkURL = ( openOnClick === 'url' && !!openUrl ) ? openUrl : undefined;
        const blockClassName = [
            'advgb-image-block',
            fullWidth && 'full-width',
            openOnClick === 'lightbox' && !!imageUrl && 'advgb-lightbox',
        ].filter( Boolean ).join( ' ' );

        return (
            <div className={ blockClassName }
                 style={ {
                     backgroundImage: `url( ${imageUrl})`,
                     height: height,
                     width: width,
                     justifyContent: vAlign,
                     alignItems: hAlign,
                 } }
                 data-image={ imageUrl }
            >
                <a className={ 'advgb-image-overlay' }
                   style={ { backgroundColor: overlayColor } }
                   target={ '_blank' }
                   href={ linkURL }
                />
                <h4 className={ 'advgb-image-title' } style={ { color: titleColor } }>
                    {title}
                </h4>
                <p className={ 'advgb-image-subtitle' } style={ { color: subtitleColor } }>
                    {subtitle}
                </p>
            </div>
        );
    },
} );