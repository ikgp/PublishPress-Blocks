<?php
defined( 'ABSPATH' ) || die;
?>

<div class="publishpress-admin wrap">
    <header>
        <h1 class="wp-heading-inline">
            <?php esc_html_e( 'PublishPress Blocks', 'advanced-gutenberg' ) ?>
        </h1>
    </header>
    <div class="wrap">
        <div class="pp-columns-wrapper"
        >
            <div class="pp-column-left">
                <div>
                    <?php
                    $isPro = defined( 'ADVANCED_GUTENBERG_PRO_LOADED') ? true : false;
                    $features = [
                        [
                            'name' => 'enable_block_access',
                            'title' => __( 'Block Permissions', 'advanced-gutenberg' ),
                            'description' => __(
                                'You can control who can use each block, including default WordPress blocks.', 'advanced-gutenberg'
                            ),
                            'default' => 1,
                            'access' => true
                        ],
                        [
                            'name' => 'enable_advgb_blocks',
                            'title' => __( 'PublishPress Blocks', 'advanced-gutenberg' ),
                            'description' => __(
                                'Enable extra blocks including content displays, sliders, buttons, icons, tabs, accordions, and more.', 'advanced-gutenberg'
                            ),
                            'default' => 1,
                            'access' => true
                        ],
                        [
                            'name' => 'enable_custom_styles',
                            'title' => __( 'Block Styles', 'advanced-gutenberg' ),
                            'description' => __(
                                'You can add your own CSS styles for your blocks. Anyone editing posts can quickly add the styles to blocks.', 'advanced-gutenberg'
                            ),
                            'default' => 1,
                            'access' => true
                        ],
                        [
                            'name' => 'block_controls',
                            'title' => __( 'Block Controls', 'advanced-gutenberg' ),
                            'description' => __(
                                'This feature adds display controls for blocks. You can schedule when blocks are shown, and add user role restrictions.', 'advanced-gutenberg'
                            ),
                            'default' => 1,
                            'access' => true
                        ],
                        [
                            'name' => 'reusable_blocks',
                            'title' => __( 'Synced Patterns', 'advanced-gutenberg' ),
                            'description' => __(
                                'This feature enables a submenu to manage your Synced Patterns.', 'advanced-gutenberg'
                            ),
                            'default' => 1,
                            'access' => true
                        ],
                        [
                            'name' => 'block_extend',
                            'title' => sprintf(
                                __( 'Extend Supported Blocks %sBeta%s', 'advanced-gutenberg' ),
                                '<span class="advgb-label-beta">',
                                '</span>'
                            ),
                            'description' => __(
                                'If some blocks are not listed in Block Permissions, try enabling this feature.',
                                'advanced-gutenberg'
                            ),
                            'default' => 0,
                            'access' => true
                        ],
                        [
                            'name' => 'enable_core_blocks_features',
                            'title' => __( 'Core Blocks Features', 'advanced-gutenberg' ),
                            'description' => __(
                                'Add Google Fonts support to core blocks including paragraphs and headings.', 'advanced-gutenberg'
                            ),
                            'default' => 1,
                            'access' => $isPro // Feature available on pro only. In free we display a placeholder.
                        ]
                    ];

                    $this->featuresBoxes( $features );
                    ?>
                </div>
            </div><!-- .pp-column-left -->

        </div>
    </div>
</div>
