<?php

class AdvancedButtonBlockCest
{
    public function _before(AcceptanceTester $I)
    {
        try {
            // Back to edit post
            $I->click('Edit Post');
            $I->waitForElement('#editor');
            $I->waitForElement('.wp-block-advgb-button_link');
            $I->clickWithLeftButton('//*[contains(@class, "wp-block-advgb-button_link")]');
        } catch(Exception $e) {
            // do stuff
        }
    }

    public function _after(AcceptanceTester $I)
    {
    }

    public function createButtonBlock(AcceptanceTester $I)
    {
        $I->loginAsAdmin('admin', 'password');

        $I->wantTo('Create a Adv Button block');

        $I->amOnPage('/wp-admin/post-new.php');

        // Hide the Tips popup
        $I->executeJS('wp.data.dispatch( \'core/nux\' ).disableTips()');

        $I->fillField('.editor-post-title__input', 'Advanced Button Block');

        // Insert block
        $I->insertBlock('Advanced Button');

        $I->waitForElement('//div[contains(@class, "wp-block-advgb-button_link")]');
        $I->pressKeys('Button Text');

        $I->click('Publish…');
        $I->waitForElementVisible('.editor-post-publish-button');

        $I->click('Publish');
        $I->waitForText('Post published.');

        $I->clickViewPost();

        // Check button rendered
        $I->seeElement('//a[contains(@class, "wp-block-advgb-button_link")][text()="Button Text"]');
    }

    public function changeButtonSizeAndColor(AcceptanceTester $I)
    {
        $I->wantTo('Change button size and color');
        $textColor = '#343434';
        $textColorRgb = 'rgb(52, 52, 52)';
        $bgColor = '#fafafa';
        $bgColorRgb = 'rgb(250, 250, 250)';

        // Change text size
        $I->fillField('//label[text()="Text size"]/following-sibling::node()/following-sibling::node()/following-sibling::node()', 22);

        // Change text color
        $I->click('//span[text()="Color Settings"]');
        $I->clickAndWait('//span[text()="Text Color"]/following-sibling::node()//div[last()]//*[1]');
        $I->clickAndWait('.components-color-picker__inputs-wrapper input');
        $I->selectCurrentElementText();
        $I->pressKeys($textColor);
        $I->pressKeys(WebDriverKeys::ENTER);
        $I->clickWithLeftButton('//div[contains(@class, "wp-block-advgb-button_link")]'); // click block to hide picker

        // Change background color
        $I->clickAndWait('//span[text()="Background Color"]/following-sibling::node()//div[last()]//*[1]');
        $I->clickAndWait('.components-color-picker__inputs-wrapper input');
        $I->selectCurrentElementText();
        $I->pressKeys($bgColor);
        $I->pressKeys(WebDriverKeys::ENTER);
        $I->clickWithLeftButton('//div[contains(@class, "wp-block-advgb-button_link")]'); // click block to hide picker

        // Update post
        $I->click('Update');
        $I->waitForText('Post updated.');

        $I->clickViewPost();
        $I->waitForElement('.wp-block-advgb-button');

        // Check size applied
        $fontSize = $I->executeJS('return jQuery(".wp-block-advgb-button_link").css("fontSize")');
        $I->assertEquals('22px', $fontSize);

        // Check text color applied
        $cTextColor = $I->executeJS('return jQuery(".wp-block-advgb-button_link").css("color")');
        $I->assertEquals($textColorRgb, $cTextColor);

        // Check background color applied
        $cBgColor = $I->executeJS('return jQuery(".wp-block-advgb-button_link").css("backgroundColor")');
        $I->assertEquals($bgColorRgb, $cBgColor);
    }
}