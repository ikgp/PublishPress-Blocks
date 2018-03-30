'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    BlockControls = _wp$blocks.BlockControls,
    createBlock = _wp$blocks.createBlock,
    InspectorControls = _wp$blocks.InspectorControls,
    getBlockContent = _wp$blocks.getBlockContent;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Placeholder = _wp$components.Placeholder,
    Button = _wp$components.Button,
    Toolbar = _wp$components.Toolbar;
var _wp$data = wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch;
var addFilter = wp.hooks.addFilter;


var blockIcon = 'list-view';
var blockTitle = __('Summary');

// Add button to insert summary inside table of contents component
(function () {
    jQuery(document).ready(function ($) {
        var _dispatch = dispatch('core/editor'),
            insertBlock = _dispatch.insertBlock;

        var summaryBlock = createBlock('advgb/summary');

        $('.gutenberg #editor').find('.table-of-contents').click(function () {
            var allBlocks = select('core/editor').getBlocks();
            var summaryBlockExist = !!allBlocks.filter(function (block) {
                return block.name === 'advgb/summary';
            }).length;
            setTimeout(function () {
                var summaryButton = $('<button class="button" style="position: absolute; bottom: 10px; right: 15px">' + __('Insert Summary') + '</button>');

                $('.gutenberg #editor').find('.table-of-contents__popover').find('.document-outline').append(summaryButton);
                summaryButton.unbind('click').click(function () {
                    insertBlock(summaryBlock, 0);
                    $('.table-of-contents__popover').hide();
                });

                if (summaryBlockExist) {
                    summaryButton.prop('disabled', true);
                }
            }, 100);
        });
    });
})();

// Add notice for user to refresh summary if manually change heading anchor
addFilter('blocks.BlockEdit', 'advgb/addHeadingNotice', function (BlockEdit) {
    return function (props) {
        var isSelected = props.isSelected,
            blockType = props.name,
            attributes = props.attributes;


        return [React.createElement(BlockEdit, _extends({ key: 'block-edit-summary' }, props)), isSelected && blockType === 'core/heading' && attributes.nodeName !== 'H1' && React.createElement(
            InspectorControls,
            { key: 'advgb-summary-controls-hint' },
            React.createElement(
                'p',
                { style: { color: 'red', fontStyle: 'italic' } },
                __('After manually changing the anchor, remember to refresh summary block to make the links work!')
            )
        )];
    };
});

var SummaryBlock = function (_Component) {
    _inherits(SummaryBlock, _Component);

    function SummaryBlock() {
        _classCallCheck(this, SummaryBlock);

        var _this = _possibleConstructorReturn(this, (SummaryBlock.__proto__ || Object.getPrototypeOf(SummaryBlock)).apply(this, arguments));

        _this.updateSummary = _this.updateSummary.bind(_this);
        return _this;
    }

    _createClass(SummaryBlock, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.updateSummary();
        }
    }, {
        key: 'updateSummary',
        value: function updateSummary() {
            var headingDatas = [];
            var allBlocks = select('core/editor').getBlocks();
            var headingBlocks = allBlocks.filter(function (block) {
                return block.name === 'core/heading';
            });
            headingBlocks.map(function (heading) {
                var thisHead = {};
                thisHead['level'] = parseInt(heading.attributes.nodeName.replace(/h/gi, ''));

                // We only get heading from h2
                if (thisHead['level'] > 1) {
                    thisHead['level'] -= 1;
                    thisHead['content'] = heading.attributes.content.length ? getBlockContent(heading).replace(/<(?:.|\n)*?>/gm, '') : '';
                    thisHead['uid'] = heading.uid;
                    if (heading.attributes.anchor) {
                        thisHead['anchor'] = heading.attributes.anchor;
                    } else {
                        // Generate a random anchor for headings without it
                        thisHead['anchor'] = 'advgb-toc-' + heading.uid;
                        heading.attributes.anchor = thisHead['anchor'];
                    }

                    headingDatas.push(thisHead);
                }

                return heading;
            });

            this.props.setAttributes({
                headings: headingDatas
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                attributes = _props.attributes,
                isSelected = _props.isSelected;
            var headings = attributes.headings;

            // No heading blocks

            var summaryContent = React.createElement(
                Placeholder,
                {
                    key: 'summary-placeholder',
                    icon: blockIcon,
                    label: blockTitle,
                    instructions: __('Your current post/page has no headings. Try add some headings and update this block later')
                },
                React.createElement(
                    Button,
                    { onClick: this.updateSummary,
                        className: 'button'
                    },
                    __('Update')
                )
            );

            // Having heading blocks
            if (headings.length > 0) {
                var _dispatch2 = dispatch('core/editor'),
                    selectBlock = _dispatch2.selectBlock;

                summaryContent = React.createElement(
                    'ul',
                    { className: 'advgb-toc', key: 'summary-toc' },
                    headings.map(function (heading) {
                        return React.createElement(
                            'li',
                            { className: 'toc-level-' + heading.level,
                                style: { marginLeft: heading.level * 20 },
                                key: heading.anchor
                            },
                            React.createElement(
                                'a',
                                { href: '#' + heading.anchor,
                                    onClick: function onClick() {
                                        return selectBlock(heading.uid);
                                    }
                                },
                                heading.content
                            )
                        );
                    })
                );
            }

            return [isSelected && !!headings.length && React.createElement(
                BlockControls,
                { key: 'summary-controls' },
                React.createElement(
                    Toolbar,
                    null,
                    React.createElement(IconButton, { className: 'components-icon-button components-toolbar__control',
                        icon: 'update',
                        label: __('Update Summary'),
                        onClick: this.updateSummary
                    })
                )
            ), summaryContent];
        }
    }]);

    return SummaryBlock;
}(Component);

registerBlockType('advgb/summary', {
    title: blockTitle,
    description: __('Show the table of content of current post/page.'),
    icon: blockIcon,
    category: 'formatting',
    keywords: [__('summary'), __('table of content'), __('list')],
    attributes: {
        headings: {
            type: 'array',
            default: []
        }
    },
    useOnce: true,
    edit: SummaryBlock,
    save: function save(_ref) {
        var attributes = _ref.attributes;
        var headings = attributes.headings;
        // No heading blocks

        if (headings.length < 1) {
            return null;
        }

        return React.createElement(
            'ul',
            { className: 'advgb-toc' },
            headings.map(function (heading) {
                return React.createElement(
                    'li',
                    { className: 'toc-level-' + heading.level,
                        key: 'summary-save',
                        style: { marginLeft: heading.level * 20 }
                    },
                    React.createElement(
                        'a',
                        { href: '#' + heading.anchor },
                        heading.content
                    )
                );
            })
        );
    }
});