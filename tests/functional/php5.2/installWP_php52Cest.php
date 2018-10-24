<?php

/**
 * @group php5.2
 */
class installWP_php52Cest
{
    public function _before(FunctionalTester $I)
    {
    }

    public function _after(FunctionalTester $I)
    {
    }

    // tests
    public function InstallPlugin(FunctionalTester $I)
    {
      $I->wantTo('Plugin should not install under php 5.2 and fails with graceful error');
      $I->loginAsAdmin('admin', 'password');
      $I->amOnPage('/wp-admin/plugins.php');
      $I->see('Plugins');
      $I->see('Advanced Gutenberg', 'tr[data-slug="advanced-gutenberg"].inactive td.plugin-title');
      $I->click('tr[data-slug="advanced-gutenberg"] a.edit');
      $I->see('Advanced Gutenberg needs at least PHP 5.3 version, please update php before installing the plugin.');
    }
}
