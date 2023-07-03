//=============================================================================
// VisuStella MZ - Items & Equips Core
// VisuMZ_1_ItemsEquipsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_ItemsEquipsCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemsEquipsCore = VisuMZ.ItemsEquipsCore || {};
VisuMZ.ItemsEquipsCore.version = 1.46;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.46] [ItemsEquipsCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Items_and_Equips_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Items & Equips Core makes improvements to the RPG Maker MZ item and
 * equipment dedicated scenes (including the shop) and how they're handled.
 * From more item categories, better parameter control, rulings, and more, game
 * devs are able to take control over key aspects of their game's items.
 *
 * Features include all (but not limited to) the following:
 *
 * * Modifying the appearances to the Item Scene, Equip Scene, and Shop Scene.
 * * Categorizing items in unique and multiple categories.
 * * Item Scene and Shop Scene will now display detailed information on items.
 * * NEW! marker can be displayed over recently acquired items in-game.
 * * Equipment notetags to adjust parameters past the editor limitations.
 * * Equipment Rulings to adjust what slot types can and can't be unequipped
 *   and/or optimized.
 * * Equipment Type Handling offers more control over equipment loadouts.
 * * Items sold in shops can be hidden/shown based on Switches.
 * * Items sold in shops can have varying prices adjusted by notetags.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Equipment Type Handling
 *
 * - Characters will no longer have one universal equipment slot setting.
 * Classes can have different equipment type loadouts, made possible through
 * the usage of notetags. Also, equipment types of matching names would be
 * treated as the same type, where previously, they would be different types.
 * This means if you have two "Accessory" slots, be it in the form of notetags
 * or through the Database > Types tab, they can both equip the same type of
 * accessories.
 *
 * - The Change Equip event command is now updated to reflect this new change.
 * When processing an equip change, the slot changed will go to the first
 * empty slot of matching type. If all of the actor's matching slot types are
 * equipped, then the equip will replace the last slot available.
 *
 * ---
 *
 * Shop Status Window
 *
 * - The Status Window found in the Shop Scene was originally barren and did
 * not display much information at all. This is changed through this plugin's
 * new features. While the contents of the Shop Status Window can be customized
 * through the Plugin Parameters, it is a change that cannot be reversed and
 * for the better since it gives players the much needed information revolving
 * around the game's items.
 *
 * ---
 *
 * Core Engine Compatibility: Modern Controls
 *
 * - If the VisuStella Core Engine is added to your game with Modern Controls
 * enabled, then the Item Menu Scene, Equip Menu Scene, and Shop Menu Scene's
 * controls will be changed a bit.
 *
 * - The Item Menu Scene will automatically have the Item List Window active,
 * with using the Left/Right (for single column) or Page Up/Page Down (for
 * multi-columns) to navigate between the Item Categories. Similar will occur
 * when trying to sell items in the Shop Menu Scene.
 *
 * - The Equip Menu Scene will automatically have the Equip Slots Window active
 * and only activate the command window upon moving up to it.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 * 
 * ---
 * 
 * VisuMZ_1_BattleCore
 * 
 * Changing the "Damage Multiplier" or "Healing Multiplier" vocabulary for the
 * Item and Equip Core's Shop Status Window is not done with the Item and Equip
 * Core's Plugin Parameters if you have the Battle Core installed.
 * 
 * Instead, go to Battle Core's Plugin Parameters, Damage Settings, Damage
 * Styles, and adjust the style's version of the "Damage Multiplier" or
 * "Healing Multiplier" text instead.
 * 
 * Why does this work this way? Because not all damage styles work off
 * "Multipliers" so in order for it to convey the proper message to the player,
 * each damage style has its own vocabulary to be more accurate.
 * 
 * In case you forget about that, when you visit the Item and Equip Core's
 * plugin parameters for these, it should also remind you in the parameter's
 * description on where to change it.
 * 
 * ---
 *
 * VisuMZ_2_WeaponSwapSystem
 *
 * The custom equip slots feature from the VisuStella MZ Items and Equips Core
 * allowed you to add in extra weapon slots. This is now curated up to a max
 * of one weapon slot per character. This needs to be done to make the Weapon
 * Swap System viable.
 *
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 * 
 * ---
 *
 * === General ===
 * 
 * These notetags affect the Items, Weapons, and Armors on a general scale.
 *
 * ---
 *
 * <Max: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the maximum quantity that can be held for this item.
 * - Replace 'x' with a number value to determine the maximum amount.
 *
 * ---
 *
 * <Color: x>
 * <Color: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor, Skill Notetags
 * - Determines the color of the object inside the in-game menus.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <Category: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace 'x' with a category name to mark this item as.
 *
 * ---
 *
 * <Categories>
 *  x
 *  x
 * </Categories>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace each 'x' with a category name to mark this item as.
 *
 * ---
 *
 * === Item Accessibility Notetags ===
 *
 * The following notetags allow you to choose when items can/cannot be used
 * based on switches.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, item will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, item will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Item Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if an item can be accessible by code.
 *
 * ---
 *
 * <JS Item Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Item Enable>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on JavaScript code.
 * - If the actor this is disabled for is the only party member, it will not be
 *   visible in the item list unless the VisuStella Battle Core is installed.
 *   - If the VisuStella Battle Core is installed, then all battle scope items
 *     will be visible even if they're disabled.
 * - Replace 'code' to determine the type enabled status of the item.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   item will be enabled or not.
 * - The 'user' variable refers to the user with the item.
 * - The 'item' variable refers to the item being checked.
 * - All other item conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === Equipment Notetags ===
 *
 * The following notetags provide equipment-related effects from deciding what
 * equip slots can be given to classes to the base parameter changes asigned
 * to weapons and armors.
 *
 * ---
 *
 * <Equip Slots>
 *  slotName
 *  slotName
 *  slotName
 * </Equip Slots>
 *
 * - Used for: Class Notetags
 * - Changes the equipment slot loadout for any actor who is that class.
 * - Replace 'slotName' with an Equipment Type name from Database > Types.
 *   This is case-sensitive.
 * - Insert or remove as many "slotName" equipment types as needed.
 *
 * ---
 *
 * <param: +x>
 * <param: -x>
 *
 * - Used for: Weapon, Armor Notetags
 * - Changes the base parameter value for the equip item.
 * - Replace 'param' with any of the following: 'MaxHP', 'MaxMP', 'ATK', 'DEF',
 *   'MAT', 'MDF', 'AGI', or 'LUK' to change that specific parameter's value.
 *   - These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * - Replace 'x' with a number value to set the parameter value to.
 * - This allows you to bypass the Database Editor's number limitations.
 *
 * ---
 * 
 * <Equip Copy Limit: x>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Sets a maximum number of copies that the actor can wear of this equipment.
 * - Replace 'x' with a number value to determine the copy limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: Actors can only equip one copy of the "One-of-a-Kind Ring"
 *   on at any time despite having empty accessory slots because the ring has a
 *   <Equip Copy Limit: 1> notetag.
 * 
 * ---
 * 
 * <Equip Weapon Type Limit: x>
 * 
 * - Used for: Weapon
 * - This weapon cannot be equipped with other weapons of the same type once
 *   the limited amount has been reached.
 * - Replace 'x' with a number value to determine the weapon type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: A dualwielding warrior who can only equip one sword and a
 *   dagger but never two swords or two daggers because the swords and daggers
 *   all have the <Equip Weapon Type Limit: 1> notetags on them.
 * 
 * ---
 * 
 * <Equip Armor Type Limit: x>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped with other armors of the same type once the
 *   limited amount has been reached.
 * - Replace 'x' with a number value to determine the armor type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: People cannot equip more than two glove accessories on at a
 *   time because the glove is a "Glove" armor-type and each glove item has the
 *   <Equip Armor Type Limit: 2> notetags on them.
 * 
 * ---
 * 
 * <Party Artifact>
 * <Troop Artifact>
 * 
 * <Stackable Party Artifact>
 * <Stackable Troop Artifact>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped at all. However, by simply being in the
 *   party's inventory, its parameter bonuses and traits will be applied
 *   globally throughout the whole party or troop (depending on the notetag).
 * - Add both notetags to affect both groups.
 * - The normal versions of the notetag is only applied once regardless of the
 *   number of copies are found in the party's inventory.
 * - The stackable versions of the notetag will have the bonuses and traits
 *   stacked multiple times relative to the number of copies found in the
 *   party's inventory.
 * - This item will NOT be added during the setup phase for Battle Tests.
 *   - If you want to add the item, do it manually.
 * 
 * ---
 * 
 * <Equip For Class Only: x>
 * <Equip For Classes Only: x, x, x>
 * <Equip For Class Only: name>
 * <Equip For Classes Only: name, name, name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - This piece of equipment can only be worn by members with 'x' as the main
 *   class. If there are multiple classes listed, at least one of them need to
 *   be the actor's main class.
 * - Replace 'x' with a number representing the ID of the class required.
 * - For the 'name' variant, replace 'name' with the name of the required class
 *   the actor needs to have in order to equip this object.
 * 
 * ---
 * 
 * <Equip Requirements>
 *  requirement
 *  requirement
 *  requirement
 * </Equip Requirements>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Defines a requirement(s) for the actor to meet in order for the equip item
 *   to be equippable.
 * - Failure to meet these requirements will cause the equipment to unequip
 *   automatically.
 *   - Keep in mind that in some cases, this will not happen immediately.
 *     Things like switches will require the actor to meet its cache clear
 *     in order to trigger the automatic unequip.
 *   - Some ways to trigger a cache clear would be to change the actor's HP/MP,
 *     or adding and then removing a state for the actor (preferrably an unused
 *     state that has no real effect).
 * - Replace 'requirement' with one of the settings bellow:
 * - Add multiple 'requirement' lines for more requirements.
 * 
 *   Requirements:
 *
 *   param > x
 *   param >= x
 *   param === x
 *   param <= x
 *   param < x
 *   - Replace 'param' with 'level', 'maxhp', 'maxmp', 'atk', 'def', 'mat',
 *     'mdf', 'agi', or 'luk'.
 *   - This will make the piece of equipment require the actor's base parameter
 *     to be greater than (>), greater than or equal to (>=), equal to (===),
 *     less than or equal to (<=), or less than (<).
 *   - This is NOT the value for the total parameter, only the base parameter.
 *   - The base parameter is calculated by the user's class parameter value and
 *     any bonuses received through permanent stat increases.
 *
 *   learned skill: x
 *   learned skill: name
 *   - This will make the piece of equipment require the actor to have learned
 *     skill 'x'. 
 *   - If 'name' is used, priority will be given to the skill with the highest
 *     ID in the database.
 *   - The actor needs to have LEARNED the skill. This means that if you have
 *     added a skill to the actor's kit through a trait, it will not count.
 *
 *   switch: x
 *   - This will require switch X to be on.
 *   - If it isn't, the piece of equipment cannot be worn.
 *   - Insert multiple of these to add more switches that are are required to
 *     be on.
 * 
 *   ***NOTE 1***
 *   There is no "class: x" for these equip requirements. Instead, use the
 *   <Equip For Class Only: x> notetags.
 * 
 *   ***NOTE 2***
 *   For those wondering where "unique only" is, that does not exist in this
 *   plugin. Instead, use the <Equip Copy Limit: x> notetag listed above.
 * 
 *   Example A:
 * 
 *     <Equip Requirements>
 *     level >= 20
 *     </Equip Requirements>
 * 
 *     - Requires the user to be at least level 20 in order to equip.
 * 
 *   Example B:
 * 
 *     <Equip Requirements>
 *     atk >= 50
 *     def <= 50
 *     </Equip Requirements>
 *     - Requires the user have at least 50 base ATK to equip.
 *     - Requires the user to be under 50 base DEF to equip.
 * 
 * ---
 *
 * === JavaScript Notetags: Equipment ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * adjust the parameter through code.
 *
 * ---
 *
 * <JS Parameters>
 *  MaxHP = code;
 *  MaxMP = code;
 *  ATK = code;
 *  DEF = code;
 *  MAT = code;
 *  MDF = code;
 *  AGI = code;
 *  LUK = code;
 * </JS Parameters>
 *
 * - Used for: Weapon, Armor Notetags
 * - Uses JavaScript to determine the values for the basic parameters based on
 *   the code used to calculate its value.
 * - The variables 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', and
 *   'LUK' are used to determine the finalized value of the parameter. This
 *   variable is case sensitive.
 * - If a parameter is not present, its value will be treated as +0.
 *
 * ---
 *
 * === Status Window Notetags ===
 *
 * The following notetags will affect the Shop Status Window info. If for any
 * reason the data that is displayed is not to your liking or insufficient,
 * you can change it up using the following notetags.
 *
 * ---
 *
 * <Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Status Info>
 *
 * - Used for: Skill, Item Notetags
 * - If you do not like the generated data that's displayed, you can change it
 *   using this notetag to display what you want.
 * - Replace 'key' with one of the following:
 *   - Consumable
 *   - Quantity
 *   - Occasion
 *   - Scope
 *   - Speed
 *   - Success Rate
 *   - Repeat
 *   - Hit Type
 *   - Element
 *   - Damage Multiplier
 *   - HP Recovery
 *   - MP Recovery
 *   - TP Recovery
 *   - HP Damage
 *   - MP Damage
 *   - TP Damage
 *   - User TP Gain
 *   - Added Effects
 *   - Removed Effects
 * - Replace 'data' with the text data you want to visually appear. You may use
 *   text codes for this.
 * - This only affects info entries that are already visible and won't make
 *   other categories suddenly appear.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 *
 * <Custom Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Custom Status Info>
 *
 * - Used for: Skill, Item
 * - If you want custom categories and data to be displayed for your items that
 *   aren't provided by the Shop Status Window Info to begin with, you can use
 *   this notetag to add in your own entries.
 * - Replace 'key' with text of the exact label you want. You may use text
 *   codes for this.
 * - Replace 'data' with text of the exact text data you want. You may use text
 *   codes for this.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 * 
 * <Shop Picture Name: filename>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Enables a shop picture for the status window. This image can be seen in
 *   the item scene, shop scene, and skill scene if enabled.
 * - If this notetag is not used, there will be no image.
 * - Replace 'filename' with the filename of the graphic to use from the game
 *   project's img/pictures/ folder. Filenames are case sensitive. Leave out
 *   the filename extension from the notetag.
 * - Use the supporting notetags to determine where the image appears. If not,
 *   they will default to the background, fit to the window dimensions,
 *   centered at the middle of the window.
 * 
 * ---
 * 
 * <Shop Picture Layer: Background>
 * <Shop Picture Layer: Foreground>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines which layer the graphic will be drawn on.
 * - If the background layer is selected, the picture will appear behind the
 *   data text.
 * - If the foreground layer is selected, the picture will appear in front of
 *   the data text.
 * - If this notetag is not used, it will default to the background layer.
 * 
 * ---
 * 
 * <Shop Picture Max Width: x>
 * <Shop Picture Max Height: y>
 * <Shop Picture Max Dimensions: x, y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines the maximum width and/or height for the image.
 * - This means the image will be automatically scaled proportionally to that
 *   width or height as long as everything else does not break boundaries.
 * - Replace 'x' and 'y' with number values representing the maximum dimensions
 *   the image can be in pixels.
 * - If these notetags are not used, the image will be automatically scaled to
 *   the dimensions of the shop status window.
 * 
 * ---
 * 
 * <Shop Picture Alignment: Left>
 * <Shop Picture Alignment: Center>
 * <Shop Picture Alignment: Right>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the horizontal alignment for the image.
 * - Left, center, right determines how it's aligned horizontally if the
 *   image does not horizontally fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'center' alignment.
 * 
 * ---
 * 
 * <Shop Picture Position: Top>
 * <Shop Picture Position: Middle>
 * <Shop Picture Position: Bottom>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the vertical position for the image.
 * - Top, middle, bottom determines how it's positioned vertically if the
 *   image does not vertically fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'middle' position.
 * 
 * ---
 * 
 * <Shop Picture Offset X: +x>
 * <Shop Picture Offset X: -x>
 * 
 * <Shop Picture Offset Y: +y>
 * <Shop Picture Offset Y: -y>
 * 
 * <Shop Picture Offset: +x, +y>
 * <Shop Picture Offset: -y, -y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Offsets the X and Y positions of the image in the shop status window.
 * - X offsets adjust the horizontal position by x pixels.
 *   - Positive goes right.
 *   - Negative goes left.
 * - Y offsets adjust the horizontal position by y pixels.
 *   - Positive goes down.
 *   - Negative goes up.
 * - Replace 'x' and 'y' with number values representing the pixels to offset
 *   the image by. The '+' and '-' signs are required.
 * - If none of these notetags are used, there will be no offsets.
 * 
 * ---
 * 
 * <Shop Picture Opacity: x>
 * <Shop Picture Opacity: x%>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the opacity of the image used.
 * - When using 'x' and not 'x%', use a number between 0 and 255.
 *   - The closer to 0, the more transparent the image is.
 *   - The closer to 255, the more opaque the image is.
 * - When using 'x%' and not 'x', use a number between 0% and 100%.
 *   - The closer to 0%, the more transparent the image is.
 *   - The closer to 100%, the more opaque the image is.
 * 
 * ---
 *
 * === Shop Menu Notetags ===
 *
 * These notetags adjust how prices and such are managed inside the Shop Menu
 * as well as whether or not some items are visible depending on switch states.
 *
 * ---
 *
 * <Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adjusts the buying price for this item.
 * - Replace 'x' with a number depicting the desired value for the buy price.
 * - This allows you to bypass the RPG Maker MZ editor's limitation of 999,999.
 *
 * ---
 *
 * <Can Sell>
 * <Cannot Sell>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Makes the item either always sellable or cannot be sold.
 * - This bypasses the game's internal hard-coding to prevent items with a
 *   price of 0 from being able to be sold.
 * - This bypasses the game's internal hard-coding to always allow items with
 *   a price value of being able to be sold.
 *
 * ---
 *
 * <Sell Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the sell price to be something different than the default amount.
 * - Replace 'x' with a number depicting the desired value for the sell price.
 *
 * ---
 *
 * <Show Shop Switch: x>
 *
 * <Show Shop All Switches: x,x,x>
 * <Show Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, item will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Shop Switch: x>
 *
 * <Hide Shop All Switches: x,x,x>
 * <Hide Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, item will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Cannot Sell Switch: x>
 *
 * <Cannot Sell All Switches: x,x,x>
 * <Cannot Sell Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the sellability of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's sellability.
 * - If 'All' notetag variant is used, item cannot be sold until all switches
 *   are ON. Otherwise, it can be sold.
 * - If 'Any' notetag variant is used, item cannot be sold if any of the
 *   switches are ON. Otherwise, it can be sold.
 *
 * ---
 *
 * === JavaScript Notetags: Shop Menu ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Buy and Sell prices.
 *
 * ---
 *
 * <JS Buy Price>
 *  code
 *  code
 *  price = code;
 * </JS Buy Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the buying 'price' of the item.
 * - Insert the final buy price into the 'price' variable.
 * - The 'item' variable refers to the item being bought.
 *
 * ---
 *
 * <JS Sell Price>
 *  code
 *  code
 *  price = code;
 * </JS Sell Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the selling 'price' of the item.
 * - Insert the final sell price into the 'price' variable.
 * - The 'item' variable refers to the item being sold.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Equip Slots
 * - Forcefully change the actor(s) equip slots.
 * - These will persist through class changes.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Equip Slots:
 *   - Insert the equip slots you want the actor(s) to have.
 *   - These entries are case-sensitive.
 *
 * ---
 *
 * Actor: Reset Equip Slots
 * - Reset any forced equip slots for the actor(s).
 * - Equip slots will then be based on class.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Shop Plugin Commands ===
 * 
 * ---
 *
 * Shop: Advanced
 * - Make it easier to put together inventories for a shop.
 * - WARNING: Does not allow for event-specific prices.
 *
 *   Step 1: Item ID's
 *   - Select which Item ID ranges to add.
 *
 *   Step 2: Weapon ID's
 *   - Select which Weapon ID ranges to add.
 *
 *   Step 3: Armor ID's
 *   - Select which Armor ID ranges to add.
 *
 *   Step 4: Purchase Only?
 *   - Make the shop purchase-only?
 * 
 *   Optional:
 * 
 *     Blacklist
 *     - A list of categories to blacklist from the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 * 
 *     Whitelist
 *     - A list of categories to whitelist for the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 *
 * This Plugin Command primarily functions as an alternative to the editor's
 * "Shop Processing" event command as that one requires you to add items one at
 * a time, making it extremely tedious to add large amounts of items. This
 * Plugin Command will mitigate that by allowing ID ranges to determine which
 * items to make available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Menu Settings
 * ============================================================================
 *
 * The Item Menu Settings allow you to adjust specifics on how key objects and
 * windows in the Item Menu Scene operate.
 *
 * ---
 *
 * General Window
 *
 *   Use Updated Layout:
 *   - Use the Updated Item Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *
 * ---
 *
 * Item Quantity
 *
 *   Item Max:
 *   Weapon Max:
 *   Armor Max:
 *   - The default maximum quantity for items, weapons, and/or armors.
 * 
 *   Quantity Format:
 *   - How to display an item's quantity.
 *   - %1 - Item Quantity
 *
 *   Font Size:
 *   - Default font size for item quantity.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Item Menu?:
 *   - Show the Shop Status Window in the Item Menu?
 *   - This is enabled if the Updated Layout is on.
 *
 *   Adjust List Window?:
 *   - Automatically adjust the Item List Window in the Item Menu if using the
 *     Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 *
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Status Window in the
 *     Item Menu.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Switch Category:
 *   - Button assist text used for switching categories.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Categories
 * ============================================================================
 *
 * Item Categories appear both in the Item Menu Scene and Shop Menu Scene (but
 * only under the Sell command). These Plugin Parameters give you the ability
 * to add in the specific categories you want displayed, remove the ones you
 * don't, and associate them with icons.
 *
 * ---
 *
 * List
 *
 *   Category List
 *   - A list of the item categories displayed in the Item/Shop menus.
 * 
 *     Type:
 *     - A list of the item categories displayed in the Item/Shop menus.
 *     - Replace x with ID numbers or text.
 *     - AllItems, RegularItems, KeyItems
 *     - HiddenItemA, HiddenItemB
 *     - Consumable, Nonconsumable
 *     - AlwaysUsable, BattleUsable, FieldUsable, NeverUsable
 *     - AllWeapons, WType:x
 *     - AllArmors, AType:x, EType:x
 *     - Category:x
 * 
 *     Icon:
 *     - Icon used for this category.
 *     - Use 0 for no icon.
 * 
 *     Visibility Switch:
 *     - This Switch must be turned ON in order for the category to show.
 *     - Use 0 for no Switch requirement.
 *
 *   Style:
 *   - How do you wish to draw categorie entries in the Category Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 *
 *   Text Alignment
 *   - Decide how you want the text to be aligned.
 *
 * ---
 *
 * Vocabulary
 *
 *   Hidden Item A
 *   Hidden Item B
 *   Consumable
 *   Nonconsumable
 *   Always Usable
 *   Battle Usable
 *   Field Usable
 *   Never Usable
 *   - How these categories are named in the Item Menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: NEW! Labels
 * ============================================================================
 *
 * Whenever the player receives a new item(s), a NEW! Label can be placed on
 * top of the item's icon when browsing a menu displaying the item(s). This is
 * a quality of life addition from more modern RPG's to help players figure out
 * what they've recently received. The following are Plugin Parameters made to
 * adjust how the NEW! Labels are handled in-game.
 *
 * ---
 *
 * NEW! Labels
 * 
 *   Use NEW! Labels?:
 *   - Use the NEW! Labels or not?
 * 
 *   Icon:
 *   - The icon index used to represent the NEW! text.
 *   - Use 0 to not draw any icons.
 * 
 *   Text:
 *   - The text written on the NEW! Label.
 * 
 *     Font Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Font Size:
 *     - The font size used for the NEW! text.
 * 
 *   Fade Limit:
 *   - What's the upper opaque limit before reversing?
 * 
 *   Fade Speed:
 *   - What's the fade speed of the NEW! Label?
 * 
 *   Offset X:
 *   - How much to offset the NEW! Label's X position by.
 * 
 *   Offset Y:
 *   - How much to offset the NEW! Label's Y position by.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Equip Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust the Equipment Menu Scene, ranging from using
 * a more updated and modern layout, changing the styles of other windows, and
 * other key visual aspects of the Equip Menu Scene. Other settings here allow
 * you to adjust how equipment operate under certain rulings, too.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Equip Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 * 
 *     Param Font Size:
 *     - The font size used for parameter values.
 * 
 *     Show Menu Portraits?:
 *     - If Main Menu Core is installed, display the Menu Portraits instead of
 *       the actor's face in the status window?
 * 
 *     JS: Portrait Upper:
 *     - If Menu Portraits are available, this is code used to draw the upper
 *       data like this in the Status Window.
 * 
 *     JS: Face Upper:
 *     - If faces used used, this is code used to draw the upper data like this
 *       in the Status Window.
 * 
 *     JS: Parameter Lower:
 *     - Code to determine how parameters are drawn in the Status Window.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 * 
 *   Status Window Width:
 *   - The usual width of the status window if using the non-Updated Equip
 *     Menu Layout.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Command Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Equip Icon:
 *   - The icon used for the Equip command.
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *   Add Optimize Command?:
 *   - Add the "Optimize" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Optimize Icon:
 *     - The icon used for the Optimize command.
 * 
 *   Add Clear Command?:
 *   - Add the "Clear" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Clear Icon:
 *     - The icon used for the Clear command.
 *
 * ---
 *
 * Remove Equip
 * 
 *   Icon:
 *   - Icon used for equipment removal.
 * 
 *   Text:
 *   - Text used for equipment removal.
 * 
 *   Use SHIFT Shortcut?:
 *   - Add the "Shift" button as a shortcut key to removing items?
 *
 * ---
 *
 * Rulings
 * 
 *   Equip-Adjust HP/MP:
 *   - Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * 
 *   Non-Removable Types:
 *   - Insert ID's of the Equipment Types that must always have an item
 *     equipped and cannot be empty.
 * 
 *   Non-Optimized Types:
 *   - Insert ID's of the Equipment Types that will be ignored when equipment
 *     is being optimized.
 *
 * ---
 *
 * Button Assist Window
 *
 *   SHIFT: Remove:
 *   - Button assist text used for the SHIFT Remove Shortcut.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you a number of options to adjust the Shop
 * Menu Scene. These options range from enabling an updated and modern layout,
 * adjust how various key visual aspects appear, and determine how prices can
 * be affected when it comes to selling them or buying them (for coders).
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Shop Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 * 
 * Switches:
 * 
 *   Switch: Buy:
 *   - Buying items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 *   Switch: Sell
 *   - Selling items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 * ---
 *
 * Command Window
 * 
 *   Hide Unavailable?:
 *   - Hide all unavailable commands like when a shop is set to Purchase Only?
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Buy Icon:
 *   - The icon used for the Buy command.
 * 
 *   Sell Icon:
 *   - The icon used for the Sell command.
 * 
 *   Cancel Icon:
 *   - The icon used for the Cancel command.
 * 
 *   Rename "Cancel":
 *   - Rename Cancel to something more logical for the Shop Menu Scene.
 *
 * ---
 *
 * Prices
 * 
 *   Sell Price Rate:
 *   - The default sell price rate.
 * 
 *   JS: Buy Price:
 *   - Modificatons made to the buy price before finalizing it.
 * 
 *   JS: Sell Price:
 *   - Modificatons made to the sell price before finalizing it.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Small Increment:
 *   Large Increment:
 *   - Text used for changing amount bought/sold.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Status Window
 * ============================================================================
 *
 * These Plugin Parameters focuses on the Shop Status Window and determines how
 * its data is displayed.
 *
 * ---
 *
 * General
 * 
 *   Window Width:
 *   - The usual width of the status window.
 * 
 *   Parameter Font Size:
 *   - Font size used for parameter changes.
 * 
 *   Translucent Opacity:
 *   - Opacity setting used for translucent window objects.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Equipment Data
 * 
 *   Already Equipped:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   Can't Equip:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   No Changes:
 *   - Marker used to show no changes have occurred.
 * 
 *   JS: Draw Equip Data:
 *   - Code used to draw the equipment data for the Shop Status Window.
 *
 * ---
 *
 * Item Data
 * 
 *   Max State/Buff Icons:
 *   - Maximum number of icons that can be displayed for Add/Remove
 *     States/Buffs.
 * 
 *   Multiplier Standard:
 *   - Constant standard to filter out random values when calculating the
 *     damage multiplier.
 * 
 *   JS: Draw Item Data:
 *   - Code used to draw the item data for the Shop Status Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Consumable:
 *   Occasions:
 *   Scope:
 *   Speed:
 *   Success Rate:
 *   Repeats:
 *   Hit Type:
 *   Element:
 *   Damage Type:
 *   Effects:
 *   - Vocabulary used for these data entries.
 *   - Some of these have Plugin Parameters have sub-entries.
 * 
 *   NOTE: Regarding Damage Labels
 * 
 *   If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * 
 *   Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.46: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help and input modes are not adequately
 *    adjusted when not used with the updated layout or without the Options
 *    Core custom UI placement. Fix made by Arisu.
 * 
 * Version 1.45: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause equip slots to not be recognized properly if
 *    the equip slot name ends in a space.
 * 
 * Version 1.44: April 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by Anon:
 * *** <Equip For Class Only: x>
 * *** <Equip For Classes Only: x, x, x>
 * *** <Equip For Class Only: name>
 * *** <Equip For Classes Only: name, name, name>
 * **** The piece of equipment can only be worn by the listed classes.
 * *** <Equip Requirements> notetag added.
 * **** Define multiple requirements that the actor needs to meet in order for
 *      this equip item to be equippable.
 * **** See help file for more information on the types of requirements that
 *      can be added.
 * 
 * Version 1.43: March 16, 2023
 * * Bug Fixes!
 * ** Artifact armors should now update and refresh the party members' cache
 *    upon acquisition. Fix made by Olivia.
 * 
 * Version 1.42: February 16, 2023
 * * Bug Fixes!
 * ** Proxy items should no longer cause infinite loops if they're made to
 *    reference other proxy items in a circular fashion. Instead, they just
 *    give the exact first found proxy instead of cycling through others.
 *    Fix made by Arisu.
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by Anon:
 * *** Equip Scene > Equip Command > Help Description
 * *** Equip Scene > Optimize Command > Help Description
 * *** Equip Scene > Clear Command > Help Description
 * **** Help description used when these commands are selected.
 * 
 * Version 1.40: October 20, 2022
 * * Feature Update!
 * ** For the shop status window, when comparing equipment of a type where
 *    there are multiple equipment slots (such as accessories), the plugin will
 *    now check for an empty equipment slot first and then make calculations
 *    there. Otherwise, it will use the first available equipment slot of that
 *    type regardless of the equipped item. Update made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.39: September 29, 2022:
 * * Feature Update!
 * ** Changed the default code for the equip scene's status window display to
 *    prevent the face graphic and basic actor stats from going above the
 *    window boundaries if there are too many parameters displayed in the
 *    status window at a time.
 * ** If you already have this plugin installed the changes will not be
 *    reflected unless you do the following:
 * **** BACKUP your game project.
 * **** REMOVE this plugin from the Plugin Manager list.
 * **** REINSTALL this plugin into the Plugin Manager list.
 * **** SAVE the game project.
 * 
 * Version 1.38: March 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New mechanics and notetags added by Olivia and sponsored by Anon:
 * *** <Party Artifact>
 * *** <Troop Artifact>
 * *** <Stackable Party Artifact>
 * *** <Stackable Troop Artifact>
 * **** Armors only! This armor cannot be equipped at all. However, by simply
 *      being in the party's inventory, its parameter bonuses and traits will
 *      be applied globally throughout the whole party or troop (depending on
 *      the notetag). Add both notetags to affect both groups.
 * **** The normal versions of the notetag is only applied once regardless of
 *      the number of copies are found in the party's inventory.
 * **** The stackable versions of the notetag will have the bonuses and traits
 *      stacked multiple times relative to the number of copies found in the
 *      party's inventory.
 * **** This item will NOT be added during the setup phase for Battle Tests.
 * ***** If you want to add the item, do it manually.
 * 
 * Version 1.37: December 23, 2021
 * * Compatibility Update
 * ** Created foundation for proxy items to be used in any applicable system
 *    and extension plugins. Update made by Arisu.
 * 
 * Version 1.36: December 2, 2021
 * * Feature Update!
 * ** For those using custom parameters from the Core Engine and do not have
 *    the parameters all-capitalized, the plugin will automatically do it for
 *    you to prevent errors. Update made by Olivia.
 * 
 * Version 1.35: November 18, 2021
 * * Compatibility Update!
 * ** If this plugin's updated scene is disabled, the Help Window locations for
 *    the Item, Equip, and Shop Scenes should now be at their designated
 *    locations as calculated by the VisuMZ Core Engine instead of the RMMZ
 *    default location. Update made by Irina.
 * 
 * Version 1.34: October 28, 2021
 * * Feature Update
 * ** Added fail safe checks for projects that are using old data for starting
 *    equipment that no longer exist, thus preventing the game from opening.
 *    Update made by Arisu.
 * 
 * Version 1.33: August 6, 2021
 * * Documentation Update!
 * ** Removed "Weapon" and "Armor" from "Used For" for <Status Info>. This was
 *    an unintended piece of documentation.
 * 
 * Version 1.32: July 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause armor duplication when changing to classes
 *    with unaligned equipment slot types. Fix made by Arisu.
 * 
 * Version 1.31: July 9, 2021
 * * Feature Update!
 * ** Added a failsafe for price manipulation JavaScript to never have prices
 *    drop below 0 if possible. Update made by Arisu.
 * 
 * Version 1.30: July 2, 2021
 * * Documentation Update!
 * ** Added an extra note to the help file for the following:
 *    Plugin Parameters > Item Menu Settings > List Window > Columns
 * *** If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *    
 * 
 * Version 1.29: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Feature Update!
 * ** Phantom data when changing equipment types in the database should no
 *    longer affect actors with cached equip ID's. Update made by Arisu.
 * 
 * Version 1.28: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.27: May 21, 2021
 * * Bug Fixes!
 * ** Using the mouse right click in the Equip Scene while inside of the item
 *    to slot window will no longer exit the Equip Scene. Fix made by Yanfly.
 * 
 * Version 1.26: April 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** "VisuStella MZ Compatibility" added VisuMZ_1_BattleCore section regarding
 *    Damage Multiplier and Healing Multiplier vocabulary settings to reduce
 *    commonly asked questions.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Archeia:
 * *** <Shop Picture Name: filename>
 * *** <Shop Picture Layer: x>
 * *** <Shop Picture Max Width: x>
 * *** <Shop Picture Max Height: y>
 * *** <Shop Picture Max Dimensions: x, y>
 * *** <Shop Picture Alignment: x>
 * *** <Shop Picture Position: y>
 * *** <Shop Picture Offset X: +x>
 * *** <Shop Picture Offset X: -x>
 * *** <Shop Picture Offset Y: +y>
 * *** <Shop Picture Offset Y: -y>
 * *** <Shop Picture Offset: +x, +y>
 * *** <Shop Picture Offset: -x, -y>
 * *** <Shop Picture Opacity: x>
 * *** <Shop Picture Opacity: x%>
 * **** Add images from the game project's img/pictures/ folder to display in
 *      the Shop Status Window.
 * 
 * Version 1.25: April 23, 2021
 * * Documentation Update!
 * ** Added clarity to the <param: +x> and <param: -x> notetags:
 * *** These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * 
 * Version 1.24: April 16, 2021
 * * Bug Fixes!
 * ** Changing an actor's equipment slots to past their original amount will no
 *    longer yield errors with duplicate slot types. Fix made by Arisu.
 * ** Completely selling an item should now refresh the help window to the new
 *    selected item's help description. Fix made by Arisu.
 * * Optimization Update!
 * ** Non-removable equipment restrictions for the equipment scene are now
 *    better optimized. Update made by Olivia.
 * 
 * Version 1.23: April 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.21: March 5, 2021
 * * Feature Update!
 * ** Custom equipment slots are disabled during Battle Testing for better
 *    accuracy and results.
 * 
 * Version 1.20: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Buy
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Sell
 * **** Buying/selling items in the Shop Scene turns this Switch to ON.
 * **** Switch reverts to OFF whenever the Shop Scene opens.
 * **** These switches can be used after a "Shop Processing" event command to
 *      determine if the player has bought an item, bought and sold an item,
 *      sold an item, or neither.
 * 
 * Version 1.19: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina.
 * *** <Equip Copy Limit: x>
 * **** Sets a maximum number of copies that the actor can wear of this
 *      equipment. Usage Example: Actors can only equip one copy of the
 *      "One-of-a-Kind Ring" on at any time despite having empty accessory
 *      slots because the ring has a <Equip Copy Limit: 1> notetag.
 * *** <Equip Weapon Type Limit: x>
 * **** This weapon cannot be equipped with other weapons of the same type once
 *      the limited amount has been reached. Usage Example: A dualwielding
 *      warrior who can only equip one sword and a dagger but never two swords
 *      or two daggers because the swords and daggers all have the
 *      <Equip Weapon Type Limit: 1> notetags on them.
 * *** <Equip Armor Type Limit: x>
 * **** This armor cannot be equipped with other armors of the same type once
 *      the limited amount has been reached. Usage Example: People cannot equip
 *      more than two glove accessories on at a time because the glove is a
 *      "Glove" armor-type and each glove item has the
 *      <Equip Armor Type Limit: 2> notetags on them.
 * 
 * Version 1.18: January 15, 2021
 * * Bug Fixes!
 * ** Pressing "Shift" to remove equipment will now refresh the status window
 *    unlike before. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Item Menu Settings > Background Type
 * 
 * Version 1.17: January 1, 2021
 * * Bug Fixes!
 * ** Equipping should be working properly again. Fix made by Yanfly.
 * 
 * Version 1.16: December 25, 2020
 * * Bug Fixes!
 * ** Equip-Adjust HP/MP should work properly now. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that if the VisuStella
 *    Battle Core is installed, then all battle scope items are visible, but
 *    not necessarily enabled if they are disabled otherwise.
 * 
 * Version 1.15: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that it removes the
 *    usable item from visibility as well if the actor unable to use it is the
 *    only person in the party.
 * 
 * Version 1.14: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.13: December 4, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Actor: Change Equip Slots
 * *** Actor: Reset Equip Slots
 * **** These plugin commands allow you to forcefully change the equip slots
 *      available to an actor regardless of the slots provided by its class as
 *      well as reset them.
 * 
 * Version 1.12: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 8, 2020
 * * Bug Fix!
 * ** Font size ratio for the shop status window now scales to a hard coded
 *    value to prevent smaller font sizes from expanding icon sizes. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Currency display in the shop menu is now reflected upon how the plugin
 *    parameters set them to display. Update made by Arisu.
 * 
 * Version 1.10: November 1, 2020
 * * Feature Update!
 * ** Modern Controls compatibility with Core Engine no longer enables the
 *    Item Categories window and child classes to utilize the Home/End keys.
 * 
 * Version 1.09: October 25, 2020
 * * Bug Fixes!
 * ** "All Items" category should now display the "Items" text. Fix by Irina.
 * ** WType, AType, and EType categories now work with text. Fix by Irina.
 *
 * Version 1.08: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: October 11, 2020
 * * Bug Fixes!
 * ** XParams and SParams in the Window_EquipStatus window will no longer show
 *    a non-percentile difference if the original value is not a whole value.
 *    Fix made by Yanfly.
 * 
 * Version 1.06: October 4, 2020
 * * Bug Fixes!
 * ** Select Item event command now displays the default amount of columns
 *    instead of whatever setting is made with the plugin parameters.
 * 
 * Version 1.05: September 27, 2020
 * * Bug Fixes!
 * ** When using the updated shop layout, leaving the sell option will no
 *    longer cause the dummy window to appear.
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Pressing Shift to quickly remove equipment should no longer crash the
 *    game. This will also clear the help window text. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** If both Optimize and Clear commands have been removed and using modern
 *    controls, pressing up at the top of the slot window list will not go to
 *    the window. Fix made by Yanfly.
 * ** If both Optimize and Clear commands have been removed, the window will no
 *    longer appear and the slot window will be moved upward to fill any empty
 *    spaces. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added in NEW! Label to let you adjust the font face.
 * ** New Plugin Parameters added in Equip Menu Scene Settings for disabling
 *    the back rectangles and/or changing their colors.
 * ** New Plugin Parameters added in Shop Status Window Settings for disabling
 *    the back rectangles and/or changing their colors.
 * 
 * Version 1.02: August 30, 2020
 * * Documentation Fix!
 * ** Added: NOTE: Regarding Damage Labels
 * *** If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * *** Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 * *** Documentation update added by Yanfly.
 * 
 * Version 1.01: August 23, 2020
 * * Added failsafe to prevent non-existent equipment (because the database
 *   entries have been deleted) from being equipped as initial equipment.
 *   Fix made by Olivia.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeEquipSlots
 * @text Actor: Change Equip Slots
 * @desc Forcefully change the actor(s) equip slots.
 * These will persist through class changes.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 * 
 * @arg Slots:arraystr
 * @text Equip Slots
 * @type string[]
 * @desc Insert the equip slots you want the actor(s) to have.
 * These entries are case-sensitive.
 * @default ["Weapon","Shield","Head","Body","Accessory"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorResetEquipSlots
 * @text Actor: Reset Equip Slots
 * @desc Reset any forced equip slots for the actor(s).
 * Equip slots will then be based on class.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Shop
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BatchShop
 * @text Shop: Advanced
 * @desc Make it easier to put together inventories for a shop.
 * WARNING: Does not allow for event-specific prices.
 *
 * @arg Step1
 * @text Step 1: Item ID's
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type item
 * @desc Select which Item ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type item
 * @desc Select which Item ID to end at.
 * @default 4
 *
 * @arg Step2
 * @text Step 2: Weapon ID's
 *
 * @arg Step2Start:num
 * @text Range Start
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to start from.
 * @default 1
 *
 * @arg Step2End:num
 * @text Range End
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to end at.
 * @default 4
 *
 * @arg Step3
 * @text Step 3: Armor ID's
 *
 * @arg Step3Start:num
 * @text Range Start
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to start from.
 * @default 1
 *
 * @arg Step3End:num
 * @text Range End
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to end at.
 * @default 4
 *
 * @arg PurchaseOnly:eval
 * @text Step 4: Purchase Only?
 * @type boolean
 * @on Purchase-Only
 * @off Sell Accessible
 * @desc Make the shop purchase-only?
 * @default false
 * 
 * @arg Optional
 * 
 * @arg Blacklist:arraystr
 * @text Blacklisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to blacklist from the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 * 
 * @arg Whitelist:arraystr
 * @text Whitelisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to whitelist for the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemsEquipsCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemScene:struct
 * @text Item Menu Settings
 * @type struct<ItemScene>
 * @desc Change the Item Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","ListWindow":"","ListWindowCols:num":"1","ItemQt":"","MaxItems:num":"99","MaxWeapons:num":"99","MaxArmors:num":"99","ItemQuantityFmt:str":"×%1","ItemQuantityFontSize:num":"22","ShopStatusWindow":"","ShowShopStatus:eval":"true","ItemSceneAdjustItemList:eval":"true","ItemMenuStatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._itemWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._itemWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","ButtonAssist":"","buttonAssistCategory:str":"Switch Category"}
 *
 * @param Categories:struct
 * @text Item Categories
 * @parent ItemScene:struct
 * @type struct<Categories>
 * @desc Change the categories displayed in the Item/Shop menus.
 * @default {"MainList":"","List:arraystruct":"[\"{\\\"Type:str\\\":\\\"FieldUsable\\\",\\\"Icon:num\\\":\\\"208\\\"}\",\"{\\\"Type:str\\\":\\\"BattleUsable\\\",\\\"Icon:num\\\":\\\"218\\\"}\",\"{\\\"Type:str\\\":\\\"NeverUsable\\\",\\\"Icon:num\\\":\\\"302\\\"}\",\"{\\\"Type:str\\\":\\\"AllWeapons\\\",\\\"Icon:num\\\":\\\"97\\\"}\",\"{\\\"Type:str\\\":\\\"EType:2\\\",\\\"Icon:num\\\":\\\"128\\\"}\",\"{\\\"Type:str\\\":\\\"EType:3\\\",\\\"Icon:num\\\":\\\"131\\\"}\",\"{\\\"Type:str\\\":\\\"EType:4\\\",\\\"Icon:num\\\":\\\"137\\\"}\",\"{\\\"Type:str\\\":\\\"EType:5\\\",\\\"Icon:num\\\":\\\"145\\\"}\",\"{\\\"Type:str\\\":\\\"KeyItems\\\",\\\"Icon:num\\\":\\\"195\\\"}\"]","Style:str":"icon","TextAlign:str":"center","Vocabulary":"","HiddenItemA:str":"Special Items","HiddenItemB:str":"Unique Items","Consumable:str":"Consumable","Nonconsumable:str":"Nonconsumable","AlwaysUsable:str":"Usable","BattleUsable:str":"Battle","FieldUsable:str":"Field","NeverUsable:str":"Materials"}
 *
 * @param New:struct
 * @text NEW! Labels
 * @parent ItemScene:struct
 * @type struct<NewLabel>
 * @desc Change how NEW! Labels apply to your game project.
 * @default {"Enable:eval":"true","Icon:num":"0","Text:str":"NEW!","FontColor:str":"17","FontFace:str":"Verdana","FontSize:str":"16","FadeLimit:num":"360","FadeSpeed:num":"4","OffsetX:num":"0","OffsetY:num":"4"}
 *
 * @param EquipScene:struct
 * @text Equip Menu Settings
 * @type struct<EquipScene>
 * @desc Adjust the settings regarding the Equip Menu Scene.
 * @default {"General":"","EnableLayout:eval":"true","ParamValueFontSize:num":"22","MenuPortraits:eval":"true","DrawPortraitJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst x1 = padding;\\nconst x2 = this.innerWidth - 128 - padding;\\n\\n// Draw Menu Image\\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\\n\\n// Draw Data\\nthis.drawActorName(this._actor, x1, lineHeight * 0);\\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);\"","DrawFaceJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst x = Math.floor(this.innerWidth / 2);\\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\\nlet dataHeight = lineHeight * 3;\\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\\n\\n// Draw Data\\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);\"","DrawParamJS:func":"\"// Declare variables\\nconst params = this.actorParams();\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst baseX = 0;\\nconst baseY = this.innerHeight - params.length * lineHeight;\\nconst baseWidth = this.innerWidth;\\nconst valueFontSize = this.paramValueFontSize();\\n\\n// Calculate Widths\\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\\nparamNameWidth += padding * 2;\\nif (this.isUseParamNamesWithIcons()) {\\n    paramNameWidth += ImageManager.iconWidth + 4;\\n}\\nlet arrowWidth = this.rightArrowWidth();\\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\\n\\n// Draw Parameters\\nlet x = baseX;\\nlet y = baseY;\\nlet value = 0;\\nlet diffValue = 0;\\nlet alter = 2;\\nfor (const paramId of params) {\\n    // Draw Param Name\\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\\n    this.resetFontSettings();\\n    x += paramNameWidth;\\n\\n    // Draw Param Before\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\\n    this.resetFontSettings();\\n    x += paramValueWidth;\\n\\n    // Draw Arrow\\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\\n    this.drawRightArrow(x, y);\\n    x += arrowWidth;\\n\\n    // Draw Param After\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\\n    x += paramValueWidth;\\n\\n    // Draw Param Change\\n    if (totalDivides > 2) {\\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\\n    }\\n\\n    // Prepare Next Parameter\\n    x = baseX;\\n    y += lineHeight;\\n    alter = alter === 2 ? 1 : 2;\\n}\"","LayoutStyle:str":"upper/right","StatusWindowWidth:num":"312","DrawBackRect:eval":"true","BackRectColor:str":"19","Command":"","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconEquip:num":"136","CommandAddOptimize:eval":"true","CmdIconOptimize:num":"137","CommandAddClear:eval":"true","CmdIconClear:num":"135","RemoveEquip":"","RemoveEquipIcon:num":"16","RemoveEquipText:str":"Remove","ShiftShortcutKey:eval":"true","Rulings":"","EquipAdjustHpMp:eval":"true","NonRemoveETypes:arraynum":"[]","NonOptimizeETypes:arraynum":"[]","ButtonAssist":"","buttonAssistRemove:str":"Unequip"}
 *
 * @param ShopScene:struct
 * @text Shop Menu Settings
 * @type struct<ShopScene>
 * @desc Change the Shop Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","Command":"","CmdHideDisabled:eval":"true","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconBuy:num":"208","CmdIconSell:num":"314","CmdIconCancel:num":"82","CmdCancelRename:str":"Exit","Prices":"","SellPriceRate:num":"0.50","BuyPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","SellPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","ButtonAssist":"","buttonAssistSmallIncrement:str":"-1/+1","buttonAssistLargeIncrement:str":"-10/+10"}
 *
 * @param StatusWindow:struct
 * @text Shop Status Window
 * @parent ShopScene:struct
 * @type struct<StatusWindow>
 * @desc Change the Item Status Window settings.
 * @default {"General":"","Width:num":"352","ParamChangeFontSize:num":"22","Translucent:num":"64","DrawBackRect:eval":"true","BackRectColor:str":"19","EquipData":"","AlreadyEquipMarker:str":"E","CannotEquipMarker:str":"-","NoChangeMarker:str":"-","DrawEquipData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nconst paramheight = this.gaugeLineHeight() + 8;\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Parameter Names\\nconst params = this.actorParams();\\nconst backY = y;\\ny = height - (params.length * paramheight) - 4;\\nlet paramX = x;\\nlet paramWidth = 0;\\nlet tableY = y;\\nfor (const paramId of params) {\\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\\n    y += paramheight;\\n}\\n\\n// Draw Actor Data\\nconst actorMax = $gameParty.maxBattleMembers();\\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\\nparamWidth = width - (actorWidth * actorMax);\\nfor (const actor of $gameParty.battleMembers()) {\\n    const index = $gameParty.battleMembers().indexOf(actor);\\n    const actorX = paramX + paramWidth + (index * actorWidth);\\n    this.changePaintOpacity(actor.canEquip(this._item));\\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\\n    let actorY = tableY;\\n\\n    // Draw Parameter Changes\\n    for (const paramId of params) {\\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\\n        actorY += paramheight;\\n    }\\n}\\n\\n// Draw Back Rectangles\\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\\nfor (let i = 0; i < actorMax; i++) {\\n    const actorX = paramX + paramWidth + (i * actorWidth);\\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\\n}\\nfor (const paramId of params) {\\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\\n    for (let i = 0; i < actorMax; i++) {\\n        const actorX = paramX + paramWidth + (i * actorWidth);\\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\\n    }\\n    tableY += paramheight;\\n}\"","ItemData":"","ItemGeneral":"","MaxIcons:num":"8","MultiplierStandard:num":"1000000","DrawItemData:func":"\"const lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\n\\n// Draw Main Item Properties\\nif (this.drawItemConsumable(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\nif (this._item.occasion < 3) {\\n    y = this.drawItemDamage(x, y, width);\\n    y = this.drawItemEffects(x, y, width);\\n}\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Draw Remaining Item Properties\\nif (this._item.occasion < 3) {\\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemHitType(x, y, hw)) y += 0;\\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\\n}\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","Vocabulary":"","LabelConsume:str":"Consumable","Consumable:str":"✔","NotConsumable:str":"✘","Occasions":"","Occasion0:str":"Anytime Use","Occasion1:str":"Battle-Only","Occasion2:str":"Field-Only","Occasion3:str":"-","Scope":"","Scope0:str":"No Target","Scope1:str":"1 Foe","Scope2:str":"All Foes","Scope3:str":"Random Foe","Scope4:str":"2 Random Foes","Scope5:str":"3 Random Foes","Scope6:str":"4 Random Foes","Scope7:str":"1 Ally","Scope8:str":"Alive Allies","Scope9:str":"Dead Ally","Scope10:str":"Dead Allies","Scope11:str":"User","Scope12:str":"Any Ally","Scope13:str":"All Allies","Scope14:str":"Everybody","BattleCore":"","ScopeRandomAny:str":"%1 Random Units","ScopeRandomEnemies:str":"%1 Random Foes","ScopeRandomAllies:str":"%1 Random Allies","ScopeAlliesButUser:str":"Other Allies","LabelSpeed:str":"Speed","Speed2000:str":"Fastest","Speed1000:str":"Faster","Speed1:str":"Fast","Speed0:str":"Normal","SpeedNeg999:str":"Slow","SpeedNeg1999:str":"Slower","SpeedNeg2000:str":"Slowest","LabelSuccessRate:str":"Accuracy","LabelRepeats:str":"Hits","LabelHitType:str":"Type","HitType0:str":"Neutral","HitType1:str":"Physical","HitType2:str":"Magical","LabelElement:str":"Element","ElementWeapon:str":"\\I[97]Weapon","ElementNone:str":"\\I[160]No Element","DamageType":"","DamageType1:str":"%1 Damage Multiplier","DamageType2:str":"%1 Damage Multiplier","DamageType3:str":"%1 Recovery Multiplier","DamageType4:str":"%1 Recovery Multiplier","DamageType5:str":"%1 Drain Multiplier","DamageType6:str":"%1 Drain Multiplier","Effects":"","LabelRecoverHP:str":"%1 Recovery","LabelRecoverMP:str":"%1 Recovery","LabelRecoverTP:str":"%1 Recovery","LabelSelfGainTP:str":"User %1","LabelDamageHP:str":"%1 Damage","LabelDamageMP:str":"%1 Damage","LabelDamageTP:str":"%1 Damage","LabelApply:str":"Applies","LabelRemove:str":"Removes"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Item Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ItemQt
 * @text Item Quantity
 *
 * @param MaxItems:num
 * @text Item Max
 * @parent ItemQt
 * @desc The default maximum quantity for items.
 * @default 99
 *
 * @param MaxWeapons:num
 * @text Weapon Max
 * @parent ItemQt
 * @desc The default maximum quantity for weapons.
 * @default 99
 *
 * @param MaxArmors:num
 * @text Armor Max
 * @parent ItemQt
 * @desc The default maximum quantity for armors.
 * @default 99
 *
 * @param ItemQuantityFmt:str
 * @text Quantity Format
 * @parent ItemQt
 * @desc How to display an item's quantity.
 * %1 - Item Quantity
 * @default ×%1
 *
 * @param ItemQuantityFontSize:num
 * @text Font Size
 * @parent ItemQt
 * @desc Default font size for item quantity.
 * @default 22
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Item Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Item Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param ItemSceneAdjustItemList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Item List Window in the Item Menu if using the Shop Status Window?
 * @default true
 *
 * @param ItemMenuStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Status Window in the Item Menu.
 * @default "const width = this.statusWidth();\nconst height = this._itemWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._itemWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistCategory:str
 * @text Switch Category
 * @parent ButtonAssist
 * @desc Button assist text used for switching categories.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Switch Category
 *
 */
/* ----------------------------------------------------------------------------
 * Item Categories
 * ----------------------------------------------------------------------------
 */
/*~struct~Categories:
 *
 * @param MainList
 * @text List
 * 
 * @param List:arraystruct
 * @text Category List
 * @parent MainList
 * @type struct<Category>[]
 * @desc A list of the item categories displayed in the Item/Shop menus.
 * @default ["{\"Type:str\":\"RegularItems\",\"Icon:num\":\"208\"}","{\"Type:str\":\"AllWeapons\",\"Icon:num\":\"97\"}","{\"Type:str\":\"AllArmors\",\"Icon:num\":\"137\"}","{\"Type:str\":\"KeyItems\",\"Icon:num\":\"195\"}"]
 *
 * @param Style:str
 * @text Category Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw categorie entries in the Category Window?
 * @default icon
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @parent MainList
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Vocabulary
 *
 * @param HiddenItemA:str
 * @text Hidden Item A
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Special Items
 *
 * @param HiddenItemB:str
 * @text Hidden Item B
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Unique Items
 *
 * @param Consumable:str
 * @text Consumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Consumable
 *
 * @param Nonconsumable:str
 * @text Nonconsumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Nonconsumable
 *
 * @param AlwaysUsable:str
 * @text Always Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Usable
 *
 * @param BattleUsable:str
 * @text Battle Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Battle
 *
 * @param FieldUsable:str
 * @text Field Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Field
 *
 * @param NeverUsable:str
 * @text Never Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Materials
 *
 */
/* ----------------------------------------------------------------------------
 * Category Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Type:str
 * @text Type
 * @type combo
 * @option AllItems
 * @option 
 * @option RegularItems
 * @option KeyItems
 * @option HiddenItemA
 * @option HiddenItemB
 * @option 
 * @option Consumable
 * @option Nonconsumable
 * @option 
 * @option AlwaysUsable
 * @option BattleUsable
 * @option FieldUsable
 * @option NeverUsable
 * @option 
 * @option AllWeapons
 * @option WType:x
 * @option 
 * @option AllArmors
 * @option AType:x
 * @option 
 * @option EType:x
 * @option 
 * @option Category:x
 * @option
 * @desc A list of the item categories displayed in the Item/Shop
 * menus. Replace x with ID numbers or text.
 * @default RegularItems
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param SwitchID:num
 * @text Visibility Switch
 * @type switch
 * @desc This Switch must be turned ON in order for the category to show.
 * Use 0 for no Switch requirement.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * New Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NewLabel:
 *
 * @param Enable:eval
 * @text Use NEW! Labels?
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the NEW! Labels or not?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @desc The icon index used to represent the NEW! text.
 * Use 0 to not draw any icons.
 * @default 0
 *
 * @param Text:str
 * @text Text
 * @desc The text written on the NEW! Label.
 * @default NEW!
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param FontFace:str
 * @text Font Face
 * @parent Text:str
 * @desc Font face used for the NEW! Label.
 * @default Verdana
 *
 * @param FontSize:str
 * @text Font Size
 * @parent Text:str
 * @desc The font size used for the NEW! text.
 * @default 16
 *
 * @param FadeLimit:num
 * @text Fade Limit
 * @desc What's the upper opaque limit before reversing?
 * @default 360
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @desc What's the fade speed of the NEW! Label?
 * @default 4
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the NEW! Label's X position by.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the NEW! Label's Y position by.
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Equip Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/right
 *
 * @param ParamValueFontSize:num
 * @text Param Font Size
 * @parent EnableLayout:eval
 * @desc The font size used for parameter values.
 * @default 22
 *
 * @param MenuPortraits:eval
 * @text Show Menu Portraits?
 * @parent EnableLayout:eval
 * @type boolean
 * @on Use Portraits
 * @off Use Faces
 * @desc If Main Menu Core is installed, display the Menu Portraits
 * instead of the actor's face in the status window?
 * @default true
 *
 * @param DrawPortraitJS:func
 * @text JS: Portrait Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If Menu Portraits are available, this is code used to draw
 * the upper data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst x1 = padding;\nconst x2 = this.innerWidth - 128 - padding;\n\n// Draw Menu Image\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\n\n// Draw Data\nthis.drawActorName(this._actor, x1, lineHeight * 0);\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);"
 *
 * @param DrawFaceJS:func
 * @text JS: Face Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If faces used used, this is code used to draw the upper
 * data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst x = Math.floor(this.innerWidth / 2);\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\nlet dataHeight = lineHeight * 3;\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\n\n// Draw Data\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);"
 *
 * @param DrawParamJS:func
 * @text JS: Parameter Lower
 * @parent EnableLayout:eval
 * @type note
 * @desc Code to determine how parameters are drawn in the
 * Status Window.
 * @default "// Declare variables\nconst params = this.actorParams();\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst baseX = 0;\nconst baseY = this.innerHeight - params.length * lineHeight;\nconst baseWidth = this.innerWidth;\nconst valueFontSize = this.paramValueFontSize();\n\n// Calculate Widths\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\nparamNameWidth += padding * 2;\nif (this.isUseParamNamesWithIcons()) {\n    paramNameWidth += ImageManager.iconWidth + 4;\n}\nlet arrowWidth = this.rightArrowWidth();\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\n\n// Draw Parameters\nlet x = baseX;\nlet y = baseY;\nlet value = 0;\nlet diffValue = 0;\nlet alter = 2;\nfor (const paramId of params) {\n    // Draw Param Name\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\n    this.resetFontSettings();\n    x += paramNameWidth;\n\n    // Draw Param Before\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\n    this.resetFontSettings();\n    x += paramValueWidth;\n\n    // Draw Arrow\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\n    this.drawRightArrow(x, y);\n    x += arrowWidth;\n\n    // Draw Param After\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\n    x += paramValueWidth;\n\n    // Draw Param Change\n    if (totalDivides > 2) {\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\n    }\n\n    // Prepare Next Parameter\n    x = baseX;\n    y += lineHeight;\n    alter = alter === 2 ? 1 : 2;\n}"
 *
 * @param StatusWindowWidth:num
 * @text Status Window Width
 * @parent General
 * @desc The usual width of the status window if using the 
 * non-Updated Equip Menu Layout.
 * @default 312
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconEquip:num
 * @text Equip Icon
 * @parent Command
 * @desc The icon used for the Equip command.
 * @default 136
 *
 * @param equipCmdDesc:json
 * @text Help Description
 * @parent CmdIconEquip:num
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Pick and choose equipment to change."
 *
 * @param CommandAddOptimize:eval
 * @text Add Optimize Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Optimize" command to the Command Window?
 * @default true
 *
 * @param optimizeCmdDesc:json
 * @text Help Description
 * @parent CommandAddOptimize:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Equip the strongest available equipment."
 *
 * @param CmdIconOptimize:num
 * @text Optimize Icon
 * @parent CommandAddOptimize:eval
 * @desc The icon used for the Optimize command.
 * @default 137
 *
 * @param CommandAddClear:eval
 * @text Add Clear Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Clear" command to the Command Window?
 * @default true
 *
 * @param clearCmdDesc:json
 * @text Help Description
 * @parent CommandAddClear:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Remove all available equipment."
 *
 * @param CmdIconClear:num
 * @text Clear Icon
 * @parent CommandAddClear:eval
 * @desc The icon used for the Clear command.
 * @default 135
 *
 * @param RemoveEquip
 * @text Remove Equip
 *
 * @param RemoveEquipIcon:num
 * @text Icon
 * @parent RemoveEquip
 * @desc Icon used for equipment removal.
 * @default 16
 *
 * @param RemoveEquipText:str
 * @text Text
 * @parent RemoveEquip
 * @desc Text used for equipment removal.
 * @default Remove
 *
 * @param ShiftShortcutKey:eval
 * @text Use SHIFT Shortcut?
 * @parent RemoveEquip
 * @type boolean
 * @on Use
 * @off Don't
 * @desc Add the "Shift" button as a shortcut key to removing items?
 * @default true

 * @param Rulings
 *
 * @param EquipAdjustHpMp:eval
 * @text Equip-Adjust HP/MP
 * @parent Rulings
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * @default true
 * 
 * @param NonRemoveETypes:arraynum
 * @text Non-Removable Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that must always have
 * an item equipped and cannot be empty.
 * @default []
 *
 * @param NonOptimizeETypes:arraynum
 * @text Non-Optimized Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that will be ignored
 * when equipment is being optimized.
 * @default []
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistRemove:str
 * @text SHIFT: Remove
 * @parent ButtonAssist
 * @desc Button assist text used for the SHIFT Remove Shortcut.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Unequip
 * 
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Shop Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param Switches
 *
 * @param SwitchBuy:num
 * @text Switch: Buy
 * @parent Switches
 * @type switch
 * @desc Buying items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param SwitchSell:num
 * @text Switch: Sell
 * @parent Switches
 * @type switch
 * @desc Selling items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdHideDisabled:eval
 * @text Hide Unavailable?
 * @parent Command
 * @type boolean
 * @on Hide
 * @off Default
 * @desc Hide all unavailable commands like when a shop is set to Purchase Only?
 * @default true
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconBuy:num
 * @text Buy Icon
 * @parent Command
 * @desc The icon used for the Buy command.
 * @default 208
 *
 * @param CmdIconSell:num
 * @text Sell Icon
 * @parent Command
 * @desc The icon used for the Sell command.
 * @default 314
 *
 * @param CmdIconCancel:num
 * @text Cancel Icon
 * @parent Command
 * @desc The icon used for the Cancel command.
 * @default 82
 *
 * @param CmdCancelRename:str
 * @text Rename "Cancel"
 * @parent Command
 * @desc Rename Cancel to something more logical for the Shop Menu Scene.
 * @default Exit
 *
 * @param Prices
 *
 * @param SellPriceRate:num
 * @text Sell Price Rate
 * @parent Prices
 * @desc The default sell price rate.
 * @default 0.50
 *
 * @param BuyPriceJS:func
 * @text JS: Buy Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the buy price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 *
 * @param SellPriceJS:func
 * @text JS: Sell Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the sell price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 * 
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistSmallIncrement:str
 * @text Small Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -1/+1
 *
 * @param buttonAssistLargeIncrement:str
 * @text Large Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -10/+10
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param General
 *
 * @param Width:num
 * @text Window Width
 * @parent General
 * @desc The usual width of the status window.
 * @default 352
 *
 * @param ParamChangeFontSize:num
 * @text Parameter Font Size
 * @parent General
 * @desc Font size used for parameter changes.
 * @default 22
 *
 * @param Translucent:num
 * @text Translucent Opacity
 * @parent General
 * @desc Opacity setting used for translucent window objects.
 * @default 64
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param EquipData
 * @text Equipment Data
 *
 * @param AlreadyEquipMarker:str
 * @text Already Equipped
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default E
 *
 * @param CannotEquipMarker:str
 * @text Can't Equip
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default -
 *
 * @param NoChangeMarker:str
 * @text No Changes
 * @parent EquipData
 * @desc Marker used to show no changes have occurred.
 * @default -
 *
 * @param DrawEquipData:func
 * @text JS: Draw Equip Data
 * @parent EquipData
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nconst paramheight = this.gaugeLineHeight() + 8;\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Parameter Names\nconst params = this.actorParams();\nconst backY = y;\ny = height - (params.length * paramheight) - 4;\nlet paramX = x;\nlet paramWidth = 0;\nlet tableY = y;\nfor (const paramId of params) {\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\n    y += paramheight;\n}\n\n// Draw Actor Data\nconst actorMax = $gameParty.maxBattleMembers();\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\nparamWidth = width - (actorWidth * actorMax);\nfor (const actor of $gameParty.battleMembers()) {\n    const index = $gameParty.battleMembers().indexOf(actor);\n    const actorX = paramX + paramWidth + (index * actorWidth);\n    this.changePaintOpacity(actor.canEquip(this._item));\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\n    let actorY = tableY;\n\n    // Draw Parameter Changes\n    for (const paramId of params) {\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\n        actorY += paramheight;\n    }\n}\n\n// Draw Back Rectangles\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\nfor (let i = 0; i < actorMax; i++) {\n    const actorX = paramX + paramWidth + (i * actorWidth);\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\n}\nfor (const paramId of params) {\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\n    for (let i = 0; i < actorMax; i++) {\n        const actorX = paramX + paramWidth + (i * actorWidth);\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\n    }\n    tableY += paramheight;\n}"
 *
 * @param ItemData
 * @text Item Data
 *
 * @param ItemGeneral
 * @parent ItemData
 *
 * @param MaxIcons:num
 * @text Max State/Buff Icons
 * @parent ItemGeneral
 * @desc Maximum number of icons that can be displayed for Add/Remove States/Buffs.
 * @default 8
 *
 * @param MultiplierStandard:num
 * @text Multiplier Standard
 * @parent ItemGeneral
 * @desc Constant standard to filter out random values when calculating the damage multiplier.
 * @default 1000000
 *
 * @param DrawItemData:func
 * @text JS: Draw Item Data
 * @parent ItemGeneral
 * @type note
 * @desc Code used to draw the item data for the Shop Status Window.
 * @default "const lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\n\n// Draw Main Item Properties\nif (this.drawItemConsumable(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\nif (this._item.occasion < 3) {\n    y = this.drawItemDamage(x, y, width);\n    y = this.drawItemEffects(x, y, width);\n}\ny = this.drawItemCustomEntries(x, y, width);\n\n// Draw Remaining Item Properties\nif (this._item.occasion < 3) {\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\n    if (this.drawItemHitType(x, y, hw)) y += 0;\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\n}\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param Vocabulary
 * @parent ItemData
 *
 * @param LabelConsume:str
 * @text Consumable
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Consumable
 *
 * @param Consumable:str
 * @text Yes
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✔
 *
 * @param NotConsumable:str
 * @text No
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✘
 *
 * @param Occasions
 * @parent Vocabulary
 *
 * @param Occasion0:str
 * @text Always
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Anytime Use
 *
 * @param Occasion1:str
 * @text Battle Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Battle-Only
 *
 * @param Occasion2:str
 * @text Menu Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Field-Only
 *
 * @param Occasion3:str
 * @text Never
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default -
 *
 * @param Scope
 * @parent Vocabulary
 *
 * @param Scope0:str
 * @text None
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default No Target
 *
 * @param Scope1:str
 * @text 1 Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Foe
 *
 * @param Scope2:str
 * @text All Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Foes
 *
 * @param Scope3:str
 * @text 1 Random Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Random Foe
 *
 * @param Scope4:str
 * @text 2 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 2 Random Foes
 *
 * @param Scope5:str
 * @text 3 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 3 Random Foes
 *
 * @param Scope6:str
 * @text 4 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 4 Random Foes
 *
 * @param Scope7:str
 * @text 1 Ally
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Ally
 *
 * @param Scope8:str
 * @text All Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Alive Allies
 *
 * @param Scope9:str
 * @text 1 Ally (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Ally
 *
 * @param Scope10:str
 * @text All Allies (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Allies
 *
 * @param Scope11:str
 * @text The User
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default User
 *
 * @param Scope12:str
 * @text 1 Ally (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Any Ally
 *
 * @param Scope13:str
 * @text All Allies (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Allies
 *
 * @param Scope14:str
 * @text Enemies & Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Everybody
 *
 * @param BattleCore
 * @text Battle Core Support
 * @parent Vocabulary
 *
 * @param ScopeRandomAny:str
 * @text x Random Any
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Any> notetag.
 * @default %1 Random Units
 *
 * @param ScopeRandomEnemies:str
 * @text x Random Enemies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Enemies> notetag.
 * @default %1 Random Foes
 *
 * @param ScopeRandomAllies:str
 * @text x Random Allies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Allies> notetag.
 * @default %1 Random Allies
 *
 * @param ScopeAlliesButUser:str
 * @text All Allies But User
 * @parent BattleCore
 * @desc Vocabulary used for <Target: All Allies But User> notetag.
 * @default Other Allies
 *
 * @param LabelSpeed:str
 * @text Speed
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Speed
 *
 * @param Speed2000:str
 * @text >= 2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fastest
 *
 * @param Speed1000:str
 * @text >= 1000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Faster
 *
 * @param Speed1:str
 * @text >= 1 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fast
 *
 * @param Speed0:str
 * @text == 0 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Normal
 *
 * @param SpeedNeg999:str
 * @text >= -999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slow
 *
 * @param SpeedNeg1999:str
 * @text >= -1999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slower
 *
 * @param SpeedNeg2000:str
 * @text <= -2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slowest
 *
 * @param LabelSuccessRate:str
 * @text Success Rate
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Accuracy
 *
 * @param LabelRepeats:str
 * @text Repeats
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Hits
 *
 * @param LabelHitType:str
 * @text Hit Type
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Type
 *
 * @param HitType0:str
 * @text Certain Hit
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Neutral
 *
 * @param HitType1:str
 * @text Physical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Physical
 *
 * @param HitType2:str
 * @text Magical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Magical
 *
 * @param LabelElement:str
 * @text Element
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Element
 *
 * @param ElementWeapon:str
 * @text Weapon-Based
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[97]Weapon
 *
 * @param ElementNone:str
 * @text Nonelement Element
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[160]No Element
 *
 * @param DamageType
 * @text Damage Type
 * @parent Vocabulary
 *
 * @param DamageType1:str
 * @text HP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType2:str
 * @text MP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType3:str
 * @text HP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType4:str
 * @text MP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType5:str
 * @text HP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param DamageType6:str
 * @text MP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param Effects
 * @parent Vocabulary
 *
 * @param LabelRecoverHP:str
 * @text Recover HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverMP:str
 * @text Recover MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverTP:str
 * @text Recover TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelSelfGainTP:str
 * @text Self Gain TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default User %1
 *
 * @param LabelDamageHP:str
 * @text Damage HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageMP:str
 * @text Damage MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageTP:str
 * @text Damage TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelApply:str
 * @text Add State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Applies
 *
 * @param LabelRemove:str
 * @text Remove State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Removes
 *
 */
//=============================================================================

const _0x311a7f=_0x31da;(function(_0x164197,_0x4a510e){const _0x1a6355=_0x31da,_0x4ed8a1=_0x164197();while(!![]){try{const _0x3f979b=parseInt(_0x1a6355(0x5e5))/0x1*(parseInt(_0x1a6355(0x68f))/0x2)+-parseInt(_0x1a6355(0x316))/0x3+parseInt(_0x1a6355(0x2c9))/0x4+parseInt(_0x1a6355(0x4d0))/0x5+parseInt(_0x1a6355(0x4d6))/0x6+-parseInt(_0x1a6355(0x50a))/0x7*(-parseInt(_0x1a6355(0x289))/0x8)+-parseInt(_0x1a6355(0x2c0))/0x9;if(_0x3f979b===_0x4a510e)break;else _0x4ed8a1['push'](_0x4ed8a1['shift']());}catch(_0x43e318){_0x4ed8a1['push'](_0x4ed8a1['shift']());}}}(_0x169b,0x3ef5a));var label=_0x311a7f(0x604),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x1b5720){const _0x3c5b62=_0x311a7f;return _0x1b5720[_0x3c5b62(0x57b)]&&_0x1b5720[_0x3c5b62(0x590)][_0x3c5b62(0x1f7)]('['+label+']');})[0x0];function _0x31da(_0x4382eb,_0x52ac78){const _0x169ba9=_0x169b();return _0x31da=function(_0x31dad5,_0x1886d5){_0x31dad5=_0x31dad5-0x1cf;let _0x3df225=_0x169ba9[_0x31dad5];return _0x3df225;},_0x31da(_0x4382eb,_0x52ac78);}VisuMZ[label][_0x311a7f(0x5cc)]=VisuMZ[label][_0x311a7f(0x5cc)]||{},VisuMZ[_0x311a7f(0x2a3)]=function(_0x1ae250,_0x5ebaea){const _0x3d53a9=_0x311a7f;for(const _0x433888 in _0x5ebaea){if(_0x3d53a9(0x587)!==_0x3d53a9(0x587)){const _0x33fb35=_0x2147d7[_0x3d53a9(0x1d8)];this[_0x3d53a9(0x2ff)](_0x33fb35,_0x39ed1a,_0x38f643,_0x476244,!![]);const _0x32979f=this[_0x3d53a9(0x5f8)]();this[_0x3d53a9(0x2ff)](_0x32979f,_0xc6cf68,_0x595527,_0x1de8e1,![],'right');}else{if(_0x433888[_0x3d53a9(0x260)](/(.*):(.*)/i)){if(_0x3d53a9(0x561)===_0x3d53a9(0x46f))this[_0x3d53a9(0x66a)]=!![],this['_shopStatusMenuAlly']=_0x1deabd;else{const _0x31f483=String(RegExp['$1']),_0x29b5c9=String(RegExp['$2'])[_0x3d53a9(0x5a1)]()['trim']();let _0x5b7036,_0x577efd,_0x13eccd;switch(_0x29b5c9){case _0x3d53a9(0x410):_0x5b7036=_0x5ebaea[_0x433888]!==''?Number(_0x5ebaea[_0x433888]):0x0;break;case _0x3d53a9(0x207):_0x577efd=_0x5ebaea[_0x433888]!==''?JSON[_0x3d53a9(0x5e8)](_0x5ebaea[_0x433888]):[],_0x5b7036=_0x577efd[_0x3d53a9(0x693)](_0x1f0405=>Number(_0x1f0405));break;case _0x3d53a9(0x4ed):_0x5b7036=_0x5ebaea[_0x433888]!==''?eval(_0x5ebaea[_0x433888]):null;break;case'ARRAYEVAL':_0x577efd=_0x5ebaea[_0x433888]!==''?JSON[_0x3d53a9(0x5e8)](_0x5ebaea[_0x433888]):[],_0x5b7036=_0x577efd['map'](_0x35e3fd=>eval(_0x35e3fd));break;case _0x3d53a9(0x45d):_0x5b7036=_0x5ebaea[_0x433888]!==''?JSON[_0x3d53a9(0x5e8)](_0x5ebaea[_0x433888]):'';break;case _0x3d53a9(0x213):_0x577efd=_0x5ebaea[_0x433888]!==''?JSON[_0x3d53a9(0x5e8)](_0x5ebaea[_0x433888]):[],_0x5b7036=_0x577efd['map'](_0x2547e7=>JSON['parse'](_0x2547e7));break;case _0x3d53a9(0x533):_0x5b7036=_0x5ebaea[_0x433888]!==''?new Function(JSON[_0x3d53a9(0x5e8)](_0x5ebaea[_0x433888])):new Function('return\x200');break;case _0x3d53a9(0x34d):_0x577efd=_0x5ebaea[_0x433888]!==''?JSON[_0x3d53a9(0x5e8)](_0x5ebaea[_0x433888]):[],_0x5b7036=_0x577efd[_0x3d53a9(0x693)](_0x59f7ae=>new Function(JSON[_0x3d53a9(0x5e8)](_0x59f7ae)));break;case _0x3d53a9(0x2f7):_0x5b7036=_0x5ebaea[_0x433888]!==''?String(_0x5ebaea[_0x433888]):'';break;case _0x3d53a9(0x4e2):_0x577efd=_0x5ebaea[_0x433888]!==''?JSON[_0x3d53a9(0x5e8)](_0x5ebaea[_0x433888]):[],_0x5b7036=_0x577efd['map'](_0x416e51=>String(_0x416e51));break;case _0x3d53a9(0x341):_0x13eccd=_0x5ebaea[_0x433888]!==''?JSON[_0x3d53a9(0x5e8)](_0x5ebaea[_0x433888]):{},_0x1ae250[_0x31f483]={},VisuMZ[_0x3d53a9(0x2a3)](_0x1ae250[_0x31f483],_0x13eccd);continue;case _0x3d53a9(0x601):_0x577efd=_0x5ebaea[_0x433888]!==''?JSON[_0x3d53a9(0x5e8)](_0x5ebaea[_0x433888]):[],_0x5b7036=_0x577efd[_0x3d53a9(0x693)](_0xfbb9d5=>VisuMZ[_0x3d53a9(0x2a3)]({},JSON[_0x3d53a9(0x5e8)](_0xfbb9d5)));break;default:continue;}_0x1ae250[_0x31f483]=_0x5b7036;}}}}return _0x1ae250;},(_0x28d387=>{const _0x357f5d=_0x311a7f,_0x4fd3c7=_0x28d387[_0x357f5d(0x5cf)];for(const _0x6c090b of dependencies){if(!Imported[_0x6c090b]){alert(_0x357f5d(0x3e6)[_0x357f5d(0x46e)](_0x4fd3c7,_0x6c090b)),SceneManager['exit']();break;}}const _0x3e361e=_0x28d387[_0x357f5d(0x590)];if(_0x3e361e[_0x357f5d(0x260)](/\[Version[ ](.*?)\]/i)){if(_0x357f5d(0x492)===_0x357f5d(0x492)){const _0x230414=Number(RegExp['$1']);_0x230414!==VisuMZ[label]['version']&&(alert(_0x357f5d(0x335)[_0x357f5d(0x46e)](_0x4fd3c7,_0x230414)),SceneManager['exit']());}else return _0x10ff93[_0x357f5d(0x604)]['Settings'][_0x357f5d(0x470)][_0x357f5d(0x2e7)];}if(_0x3e361e['match'](/\[Tier[ ](\d+)\]/i)){const _0x59ea8f=Number(RegExp['$1']);if(_0x59ea8f<tier){if(_0x357f5d(0x41e)===_0x357f5d(0x5f2)){if(this[_0x357f5d(0x60e)](_0x543b02))return![];if(this[_0x357f5d(0x5a8)](_0x2f2cf4))return![];if(this[_0x357f5d(0x3a2)](_0x3e74c7))return![];if(!this[_0x357f5d(0x476)][_0x357f5d(0x3ae)](_0x770d6))return![];}else alert(_0x357f5d(0x4ab)[_0x357f5d(0x46e)](_0x4fd3c7,_0x59ea8f,tier)),SceneManager[_0x357f5d(0x686)]();}else tier=Math[_0x357f5d(0x405)](_0x59ea8f,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x357f5d(0x5cc)],_0x28d387[_0x357f5d(0x417)]);})(pluginData),PluginManager[_0x311a7f(0x45b)](pluginData[_0x311a7f(0x5cf)],_0x311a7f(0x5f6),_0x57f575=>{const _0x21b749=_0x311a7f;VisuMZ['ConvertParams'](_0x57f575,_0x57f575);const _0x26b55d=_0x57f575[_0x21b749(0x2a8)][_0x21b749(0x693)](_0x2faf96=>$gameActors[_0x21b749(0x59a)](_0x2faf96)),_0x6af5cb=_0x57f575[_0x21b749(0x3d5)]['map'](_0x54d69c=>$dataSystem[_0x21b749(0x37c)]['indexOf'](_0x54d69c[_0x21b749(0x3df)]()));for(const _0x16e60c of _0x26b55d){if(_0x21b749(0x3b8)!=='oRCsc')delete this[_0x21b749(0x609)][_0x21b749(0x503)]['ok'],delete this[_0x21b749(0x609)]['_handlers']['cancel'];else{if(!_0x16e60c)continue;_0x16e60c['forceChangeEquipSlots'](_0x6af5cb);}}}),PluginManager[_0x311a7f(0x45b)](pluginData['name'],'ActorResetEquipSlots',_0x35220f=>{const _0x5af226=_0x311a7f;VisuMZ[_0x5af226(0x2a3)](_0x35220f,_0x35220f);const _0x28e001=_0x35220f[_0x5af226(0x2a8)][_0x5af226(0x693)](_0x7fa70f=>$gameActors[_0x5af226(0x59a)](_0x7fa70f));for(const _0x2de252 of _0x28e001){if(_0x5af226(0x323)===_0x5af226(0x323)){if(!_0x2de252)continue;_0x2de252[_0x5af226(0x5e0)]();}else{this[_0x5af226(0x37e)](_0x2101df,_0x5191b1,_0x5d0dc1,_0x58e1da);for(let _0x4db271=0x0;_0x4db271<_0x45ed8a;_0x4db271++){const _0x2e6f0e=_0x3ad7b7+_0x335100+_0x4db271*_0x2b493a;this[_0x5af226(0x37e)](_0x2e6f0e,_0xc7fbaa,_0x120c5b,_0x2c7e3e);}_0x133612+=_0x5c1cf2;}}}),PluginManager[_0x311a7f(0x45b)](pluginData[_0x311a7f(0x5cf)],_0x311a7f(0x55e),_0x3eb1a4=>{const _0x49a611=_0x311a7f;VisuMZ[_0x49a611(0x2a3)](_0x3eb1a4,_0x3eb1a4);const _0x21e760=[],_0x15321a=_0x3eb1a4['Blacklist'][_0x49a611(0x693)](_0x1842a4=>_0x1842a4[_0x49a611(0x5a1)]()[_0x49a611(0x3df)]()),_0x494ba1=_0x3eb1a4['Whitelist'][_0x49a611(0x693)](_0x500dff=>_0x500dff[_0x49a611(0x5a1)]()[_0x49a611(0x3df)]()),_0x474c12=_0x3eb1a4[_0x49a611(0x422)]>=_0x3eb1a4[_0x49a611(0x210)]?_0x3eb1a4[_0x49a611(0x210)]:_0x3eb1a4['Step1End'],_0x37c4c3=_0x3eb1a4['Step1End']>=_0x3eb1a4['Step1Start']?_0x3eb1a4[_0x49a611(0x422)]:_0x3eb1a4[_0x49a611(0x210)],_0x3af3ef=Array(_0x37c4c3-_0x474c12+0x1)[_0x49a611(0x4b7)]()[_0x49a611(0x693)]((_0x362905,_0xc54583)=>_0x474c12+_0xc54583);for(const _0x76fcd2 of _0x3af3ef){const _0x15a3ff=$dataItems[_0x76fcd2];if(!_0x15a3ff)continue;if(!VisuMZ[_0x49a611(0x604)][_0x49a611(0x3a6)](_0x15a3ff,_0x15321a,_0x494ba1))continue;_0x21e760['push']([0x0,_0x76fcd2,0x0,_0x15a3ff[_0x49a611(0x658)]]);}const _0x2ec0ea=_0x3eb1a4[_0x49a611(0x69d)]>=_0x3eb1a4[_0x49a611(0x321)]?_0x3eb1a4[_0x49a611(0x321)]:_0x3eb1a4[_0x49a611(0x69d)],_0x4650dd=_0x3eb1a4[_0x49a611(0x69d)]>=_0x3eb1a4[_0x49a611(0x321)]?_0x3eb1a4['Step2End']:_0x3eb1a4[_0x49a611(0x321)],_0x25486e=Array(_0x4650dd-_0x2ec0ea+0x1)[_0x49a611(0x4b7)]()[_0x49a611(0x693)]((_0x2f8c4b,_0x39a29d)=>_0x2ec0ea+_0x39a29d);for(const _0x3b9bd3 of _0x25486e){const _0x257063=$dataWeapons[_0x3b9bd3];if(!_0x257063)continue;if(!VisuMZ[_0x49a611(0x604)][_0x49a611(0x3a6)](_0x257063,_0x15321a,_0x494ba1))continue;_0x21e760[_0x49a611(0x300)]([0x1,_0x3b9bd3,0x0,_0x257063['price']]);}const _0x182f23=_0x3eb1a4[_0x49a611(0x2cc)]>=_0x3eb1a4[_0x49a611(0x535)]?_0x3eb1a4[_0x49a611(0x535)]:_0x3eb1a4[_0x49a611(0x2cc)],_0x47f16e=_0x3eb1a4[_0x49a611(0x2cc)]>=_0x3eb1a4[_0x49a611(0x535)]?_0x3eb1a4[_0x49a611(0x2cc)]:_0x3eb1a4[_0x49a611(0x535)],_0x4d871b=Array(_0x47f16e-_0x182f23+0x1)[_0x49a611(0x4b7)]()[_0x49a611(0x693)]((_0x546d05,_0x8b587b)=>_0x182f23+_0x8b587b);for(const _0x365fe4 of _0x4d871b){const _0x25adb9=$dataArmors[_0x365fe4];if(!_0x25adb9)continue;if(!VisuMZ[_0x49a611(0x604)][_0x49a611(0x3a6)](_0x25adb9,_0x15321a,_0x494ba1))continue;_0x21e760[_0x49a611(0x300)]([0x2,_0x365fe4,0x0,_0x25adb9['price']]);}SceneManager[_0x49a611(0x300)](Scene_Shop),SceneManager[_0x49a611(0x1ee)](_0x21e760,_0x3eb1a4['PurchaseOnly']);}),VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x3a6)]=function(_0x13947a,_0x5b4e41,_0x33e133){const _0x363902=_0x311a7f;if(_0x13947a[_0x363902(0x5cf)][_0x363902(0x3df)]()==='')return![];if(_0x13947a[_0x363902(0x5cf)][_0x363902(0x260)](/-----/i))return![];const _0x46b873=_0x13947a[_0x363902(0x5b7)];if(_0x5b4e41[_0x363902(0x28c)]>0x0)for(const _0x160a20 of _0x5b4e41){if(!_0x160a20)continue;if(_0x46b873['includes'](_0x160a20))return![];}if(_0x33e133[_0x363902(0x28c)]>0x0){for(const _0x299eee of _0x33e133){if(_0x363902(0x319)!==_0x363902(0x319))_0x4c77d7=_0x2e6883[_0x363902(0x427)](_0x437bea),_0x510a0b[_0x363902(0x604)][_0x363902(0x6a8)][_0x363902(0x49e)](this,_0x485da9);else{if(!_0x299eee)continue;if(_0x46b873[_0x363902(0x1f7)](_0x299eee))return!![];}}return![];}return!![];},VisuMZ['ItemsEquipsCore']['Scene_Boot_onDatabaseLoaded']=Scene_Boot['prototype'][_0x311a7f(0x30d)],Scene_Boot[_0x311a7f(0x3bb)][_0x311a7f(0x30d)]=function(){const _0x4aefdb=_0x311a7f;this[_0x4aefdb(0x654)](),VisuMZ[_0x4aefdb(0x604)]['Scene_Boot_onDatabaseLoaded'][_0x4aefdb(0x49e)](this),this['process_VisuMZ_ItemsEquipsCore_Notetags'](),VisuMZ[_0x4aefdb(0x604)][_0x4aefdb(0x64c)]();},Scene_Boot[_0x311a7f(0x3bb)][_0x311a7f(0x654)]=function(){const _0x1b6af5=_0x311a7f;VisuMZ['ItemsEquipsCore'][_0x1b6af5(0x29e)]={},VisuMZ[_0x1b6af5(0x604)]['RegExp'][_0x1b6af5(0x1da)]=[],VisuMZ[_0x1b6af5(0x604)][_0x1b6af5(0x29e)][_0x1b6af5(0x253)]=[];const _0x37fd70=[_0x1b6af5(0x390),_0x1b6af5(0x333),'ATK','DEF',_0x1b6af5(0x674),_0x1b6af5(0x40a),_0x1b6af5(0x357),_0x1b6af5(0x3be)];for(const _0x3e92a8 of _0x37fd70){const _0x2fb501=_0x1b6af5(0x231)[_0x1b6af5(0x46e)](_0x3e92a8);VisuMZ['ItemsEquipsCore'][_0x1b6af5(0x29e)]['EquipParams']['push'](new RegExp(_0x2fb501,'i'));const _0x4c7e8d=_0x1b6af5(0x28f)['format'](_0x3e92a8);VisuMZ[_0x1b6af5(0x604)][_0x1b6af5(0x29e)]['BorderRegExp']['push'](new RegExp(_0x4c7e8d,'g'));}},Scene_Boot[_0x311a7f(0x3bb)][_0x311a7f(0x55d)]=function(){const _0x887fea=_0x311a7f;if(VisuMZ[_0x887fea(0x38e)])return;this['process_VisuMZ_ItemsEquipsCore_EquipSlots']();const _0x5b3d58=[$dataItems,$dataWeapons,$dataArmors];for(const _0x4b1ca7 of _0x5b3d58){if('XIMyG'===_0x887fea(0x2f8)){const _0x23b5ea=this[_0x887fea(0x2dc)]['y'],_0x506438=this[_0x887fea(0x2dc)][_0x887fea(0x1f0)],_0x3b1f22=this[_0x887fea(0x57e)](0x1,!![]),_0x168533=this[_0x887fea(0x65c)]()?_0x42b468['boxWidth']-_0x506438:0x0;return new _0x2699b0(_0x168533,_0x23b5ea,_0x506438,_0x3b1f22);}else for(const _0x1d63d3 of _0x4b1ca7){if(!_0x1d63d3)continue;VisuMZ[_0x887fea(0x604)]['Parse_Notetags_Category'](_0x1d63d3,_0x4b1ca7),VisuMZ['ItemsEquipsCore']['Parse_Notetags_Prices'](_0x1d63d3,_0x4b1ca7),VisuMZ['ItemsEquipsCore'][_0x887fea(0x1e1)](_0x1d63d3,_0x4b1ca7),VisuMZ['ItemsEquipsCore'][_0x887fea(0x377)](_0x1d63d3,_0x4b1ca7),VisuMZ[_0x887fea(0x604)][_0x887fea(0x284)](_0x1d63d3,_0x4b1ca7);}}},Scene_Boot[_0x311a7f(0x3bb)]['process_VisuMZ_ItemsEquipsCore_EquipSlots']=function(){const _0x47f008=_0x311a7f;for(const _0x2dee83 of $dataClasses){if(_0x47f008(0x669)==='budAz'){const _0x483fff=_0x5653f8-(_0x3b7bf5-_0x25ef34)/0x2;this[_0x47f008(0x227)](_0x2c9914,_0x493dd0,_0x401026,_0x483fff,_0x1e41c2),_0x2f964c+=_0x4cc7da;}else{if(!_0x2dee83)continue;VisuMZ[_0x47f008(0x604)][_0x47f008(0x305)](_0x2dee83);}}},VisuMZ[_0x311a7f(0x604)]['ParseClassNotetags']=VisuMZ[_0x311a7f(0x60f)],VisuMZ[_0x311a7f(0x60f)]=function(_0x284c20){const _0x419e84=_0x311a7f;VisuMZ['ItemsEquipsCore'][_0x419e84(0x60f)][_0x419e84(0x49e)](this,_0x284c20),VisuMZ[_0x419e84(0x604)]['Parse_Notetags_EquipSlots'](_0x284c20);},VisuMZ[_0x311a7f(0x604)]['ParseItemNotetags']=VisuMZ['ParseItemNotetags'],VisuMZ[_0x311a7f(0x3e5)]=function(_0x58139d){const _0x21696f=_0x311a7f;VisuMZ[_0x21696f(0x604)]['ParseItemNotetags'][_0x21696f(0x49e)](this,_0x58139d),VisuMZ[_0x21696f(0x604)][_0x21696f(0x3ea)](_0x58139d,$dataItems);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x508)]=VisuMZ[_0x311a7f(0x508)],VisuMZ[_0x311a7f(0x508)]=function(_0x2d43a9){const _0x5b0d08=_0x311a7f;VisuMZ['ItemsEquipsCore']['ParseWeaponNotetags'][_0x5b0d08(0x49e)](this,_0x2d43a9),VisuMZ[_0x5b0d08(0x604)]['Parse_Notetags_Batch'](_0x2d43a9,$dataWeapons);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x38f)]=VisuMZ['ParseArmorNotetags'],VisuMZ[_0x311a7f(0x38f)]=function(_0x41c666){const _0xb460a8=_0x311a7f;VisuMZ[_0xb460a8(0x604)][_0xb460a8(0x38f)][_0xb460a8(0x49e)](this,_0x41c666),VisuMZ[_0xb460a8(0x604)][_0xb460a8(0x3ea)](_0x41c666,$dataArmors);},VisuMZ['ItemsEquipsCore']['Parse_Notetags_EquipSlots']=function(_0x3ef745){const _0x464015=_0x311a7f;_0x3ef745['equipSlots']=[];const _0x56b653=$dataSystem[_0x464015(0x37c)][_0x464015(0x693)](_0x2dca93=>_0x2dca93?_0x2dca93[_0x464015(0x3df)]():'');if(!BattleManager[_0x464015(0x488)]()&&_0x3ef745[_0x464015(0x5b3)][_0x464015(0x260)](/<EQUIP SLOTS>\s*([\s\S]*)\s*<\/EQUIP SLOTS>/i)){if(_0x464015(0x3fa)===_0x464015(0x436))this['addItemCategories'](),this[_0x464015(0x351)](this[_0x464015(0x5c8)]());else{const _0x443a87=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x14ff30 of _0x443a87){const _0x413825=_0x56b653[_0x464015(0x2df)](_0x14ff30[_0x464015(0x3df)]());if(_0x413825>0x0)_0x3ef745[_0x464015(0x565)][_0x464015(0x300)](_0x413825);}}}else for(const _0x3ce23f of _0x56b653){const _0x1aa464=_0x56b653['indexOf'](_0x3ce23f[_0x464015(0x3df)]());if(_0x1aa464>0x0)_0x3ef745[_0x464015(0x565)][_0x464015(0x300)](_0x1aa464);}},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x3ea)]=function(_0x4743d1,_0x463234){const _0x59a306=_0x311a7f;VisuMZ[_0x59a306(0x604)][_0x59a306(0x371)](_0x4743d1,_0x463234),VisuMZ[_0x59a306(0x604)][_0x59a306(0x505)](_0x4743d1,_0x463234),VisuMZ['ItemsEquipsCore'][_0x59a306(0x1e1)](_0x4743d1,_0x463234),VisuMZ['ItemsEquipsCore'][_0x59a306(0x377)](_0x4743d1,_0x463234),VisuMZ[_0x59a306(0x604)][_0x59a306(0x284)](_0x4743d1,_0x463234);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x371)]=function(_0x3ce6ae,_0x446e2a){const _0xff55d4=_0x311a7f;_0x3ce6ae[_0xff55d4(0x5b7)]=[];const _0x36203e=_0x3ce6ae[_0xff55d4(0x5b3)],_0x2b71aa=_0x36203e[_0xff55d4(0x260)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x2b71aa)for(const _0x541d7b of _0x2b71aa){if('siixL'!==_0xff55d4(0x6a0)){const _0x29dec0=_0x19a49f(_0x17cc65['$1'])[_0xff55d4(0x51a)](/[\r\n]+/);for(const _0x596797 of _0x29dec0){const _0xb2e58a=_0x17f4c4[_0xff55d4(0x2df)](_0x596797['trim']());if(_0xb2e58a>0x0)_0x32ddf0[_0xff55d4(0x565)][_0xff55d4(0x300)](_0xb2e58a);}}else{_0x541d7b[_0xff55d4(0x260)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x531443=String(RegExp['$1'])['toUpperCase']()[_0xff55d4(0x3df)]()['split'](',');for(const _0x362f1b of _0x531443){_0x3ce6ae['categories'][_0xff55d4(0x300)](_0x362f1b[_0xff55d4(0x3df)]());}}}if(_0x36203e[_0xff55d4(0x260)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){if(_0xff55d4(0x293)===_0xff55d4(0x293)){const _0x22fb04=RegExp['$1'][_0xff55d4(0x51a)](/[\r\n]+/);for(const _0x320081 of _0x22fb04){_0x3ce6ae['categories'][_0xff55d4(0x300)](_0x320081[_0xff55d4(0x5a1)]()[_0xff55d4(0x3df)]());}}else this['_categoryWindow'][_0xff55d4(0x373)](0x0),this[_0xff55d4(0x498)]();}},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x505)]=function(_0x4abfb1,_0x381f07){const _0x31a45d=_0x311a7f;_0x4abfb1['note'][_0x31a45d(0x260)](/<PRICE:[ ](\d+)>/i)&&(_0x4abfb1[_0x31a45d(0x658)]=Number(RegExp['$1']));},VisuMZ[_0x311a7f(0x604)]['Parse_Notetags_ParamValues']=function(_0x4c3b95,_0x4816be){const _0x556039=_0x311a7f;if(_0x4816be===$dataItems)return;for(let _0x3dc3aa=0x0;_0x3dc3aa<0x8;_0x3dc3aa++){const _0x54ae14=VisuMZ[_0x556039(0x604)]['RegExp'][_0x556039(0x1da)][_0x3dc3aa];_0x4c3b95[_0x556039(0x5b3)][_0x556039(0x260)](_0x54ae14)&&(_0x4c3b95[_0x556039(0x30f)][_0x3dc3aa]=parseInt(RegExp['$1']));}},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x5e9)]={},VisuMZ['ItemsEquipsCore']['Parse_Notetags_ParamJS']=function(_0x3e4c1f,_0x5084a5){const _0x18ab59=_0x311a7f;if(_0x5084a5===$dataItems)return;if(_0x3e4c1f[_0x18ab59(0x5b3)][_0x18ab59(0x260)](/<JS PARAMETERS>\s*([\s\S]*)\s*<\/JS PARAMETERS>/i)){if('zeXnq'===_0x18ab59(0x63a)){const _0x44bbf7=String(RegExp['$1']),_0x4fb2ea=(_0x5084a5===$dataWeapons?_0x18ab59(0x233):'A%1')[_0x18ab59(0x46e)](_0x3e4c1f['id']),_0x33964b='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MaxHP\x20=\x200;\x20let\x20MaxMP\x20=\x200;\x20let\x20ATK\x20=\x200;\x20let\x20DEF\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MAT\x20=\x200;\x20let\x20MDF\x20=\x200;\x20let\x20AGI\x20=\x200;\x20let\x20LUK\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20[MaxHP,\x20MaxMP,\x20ATK,\x20DEF,\x20MAT,\x20MDF,\x20AGI,\x20LUK][paramId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'[_0x18ab59(0x46e)](_0x44bbf7);for(let _0x1ab2d4=0x0;_0x1ab2d4<0x8;_0x1ab2d4++){if(_0x18ab59(0x3f8)===_0x18ab59(0x3f8)){if(_0x44bbf7[_0x18ab59(0x260)](VisuMZ[_0x18ab59(0x604)][_0x18ab59(0x29e)][_0x18ab59(0x253)][_0x1ab2d4])){const _0x4293e4=_0x18ab59(0x303)[_0x18ab59(0x46e)](_0x4fb2ea,_0x1ab2d4);VisuMZ[_0x18ab59(0x604)][_0x18ab59(0x5e9)][_0x4293e4]=new Function(_0x18ab59(0x486),'paramId',_0x33964b);}}else this[_0x18ab59(0x678)]();}}else{const _0x1e358b=this[_0x18ab59(0x4ba)]();return this[_0x18ab59(0x2ff)](_0x1e358b,_0x4833bd,_0x18e6a8,_0x13aeaf,![],_0x18ab59(0x61f)),this[_0x18ab59(0x37e)](_0x1fc427,_0xcfc79b,_0x3f45e6),this[_0x18ab59(0x560)](),!![];}}},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x4a6)]={},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x284)]=function(_0x2c340d,_0x2c63ed){const _0x37f9f4=_0x311a7f;if(_0x2c63ed!==$dataItems)return;if(_0x2c340d[_0x37f9f4(0x5b3)][_0x37f9f4(0x260)](/<JS ITEM ENABLE>\s*([\s\S]*)\s*<\/JS ITEM ENABLE>/i)){const _0x49fe10=String(RegExp['$1']),_0x2b86dc='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20'[_0x37f9f4(0x46e)](_0x49fe10);VisuMZ['ItemsEquipsCore']['itemEnableJS'][_0x2c340d['id']]=new Function('item',_0x2b86dc);}},DataManager[_0x311a7f(0x378)]=function(_0x30785c){const _0x1643a0=_0x311a7f;return this['isItem'](_0x30785c)&&_0x30785c[_0x1643a0(0x4ae)]===0x2;},DataManager[_0x311a7f(0x1d1)]=function(_0x2f8e52){const _0x220fd6=_0x311a7f;if(!_0x2f8e52)return 0x63;else{if(_0x2f8e52[_0x220fd6(0x5b3)]['match'](/<MAX:[ ](\d+)>/i)){if(_0x220fd6(0x340)==='mVIaw'){const _0x1de5c3=_0x5d62c0[_0x220fd6(0x1d5)];this[_0x220fd6(0x2ff)](_0x1de5c3,_0xa30341,_0xbec874,_0x153bc0,!![],_0x220fd6(0x61f));}else return parseInt(RegExp['$1']);}else{if(_0x220fd6(0x2bd)!==_0x220fd6(0x2bd))_0x4af108['ItemsEquipsCore'][_0x220fd6(0x371)](_0x29a4a1,_0x11e01e),_0x37a638[_0x220fd6(0x604)]['Parse_Notetags_Prices'](_0x428e75,_0x4d32af),_0x5b70e7[_0x220fd6(0x604)]['Parse_Notetags_ParamValues'](_0x32f58d,_0x369e1f),_0xed85de[_0x220fd6(0x604)][_0x220fd6(0x377)](_0x4de33b,_0x131152),_0x3019dc[_0x220fd6(0x604)][_0x220fd6(0x284)](_0x2cff44,_0x32470d);else return this[_0x220fd6(0x3f4)](_0x2f8e52);}}},DataManager[_0x311a7f(0x3f4)]=function(_0x4bc71b){const _0x5643af=_0x311a7f;if(this[_0x5643af(0x55a)](_0x4bc71b))return VisuMZ[_0x5643af(0x604)][_0x5643af(0x5cc)][_0x5643af(0x648)][_0x5643af(0x36b)];else{if(this[_0x5643af(0x512)](_0x4bc71b))return VisuMZ[_0x5643af(0x604)]['Settings'][_0x5643af(0x648)][_0x5643af(0x5a7)];else{if(this['isArmor'](_0x4bc71b))return VisuMZ[_0x5643af(0x604)][_0x5643af(0x5cc)][_0x5643af(0x648)]['MaxArmors'];}}},DataManager[_0x311a7f(0x39b)]=function(_0x5af43e){const _0x1cb7d5=_0x311a7f;_0x5af43e=_0x5af43e['toUpperCase']()[_0x1cb7d5(0x3df)](),this[_0x1cb7d5(0x5a9)]=this[_0x1cb7d5(0x5a9)]||{};if(this[_0x1cb7d5(0x5a9)][_0x5af43e])return this['_classIDs'][_0x5af43e];for(const _0xc0ff3c of $dataClasses){if(!_0xc0ff3c)continue;let _0x3ac4c1=_0xc0ff3c[_0x1cb7d5(0x5cf)];_0x3ac4c1=_0x3ac4c1[_0x1cb7d5(0x403)](/\x1I\[(\d+)\]/gi,''),_0x3ac4c1=_0x3ac4c1[_0x1cb7d5(0x403)](/\\I\[(\d+)\]/gi,''),this['_classIDs'][_0x3ac4c1['toUpperCase']()[_0x1cb7d5(0x3df)]()]=_0xc0ff3c['id'];}return this[_0x1cb7d5(0x5a9)][_0x5af43e]||0x0;},DataManager['getSkillIdWithName']=function(_0x397a56){const _0x235c05=_0x311a7f;_0x397a56=_0x397a56['toUpperCase']()[_0x235c05(0x3df)](),this['_skillIDs']=this[_0x235c05(0x24d)]||{};if(this[_0x235c05(0x24d)][_0x397a56])return this[_0x235c05(0x24d)][_0x397a56];for(const _0x5c732f of $dataSkills){if(!_0x5c732f)continue;this[_0x235c05(0x24d)][_0x5c732f['name'][_0x235c05(0x5a1)]()['trim']()]=_0x5c732f['id'];}return this[_0x235c05(0x24d)][_0x397a56]||0x0;},DataManager[_0x311a7f(0x22a)]=function(_0x2afdae){const _0x21cada=_0x311a7f;_0x2afdae=_0x2afdae[_0x21cada(0x5a1)]()['trim'](),this[_0x21cada(0x365)]=this[_0x21cada(0x365)]||{};if(this[_0x21cada(0x365)][_0x2afdae])return this['_itemIDs'][_0x2afdae];for(const _0x556d88 of $dataItems){if(_0x21cada(0x6a1)!==_0x21cada(0x6a1))_0x1e3b98=this[_0x21cada(0x4fc)]-_0x2053ba;else{if(!_0x556d88)continue;this[_0x21cada(0x365)][_0x556d88['name'][_0x21cada(0x5a1)]()[_0x21cada(0x3df)]()]=_0x556d88['id'];}}return this['_itemIDs'][_0x2afdae]||0x0;},DataManager['getWeaponIdWithName']=function(_0xed74d5){const _0x1f4137=_0x311a7f;_0xed74d5=_0xed74d5[_0x1f4137(0x5a1)]()[_0x1f4137(0x3df)](),this[_0x1f4137(0x6a9)]=this[_0x1f4137(0x6a9)]||{};if(this[_0x1f4137(0x6a9)][_0xed74d5])return this[_0x1f4137(0x6a9)][_0xed74d5];for(const _0x2737db of $dataWeapons){if(!_0x2737db)continue;this[_0x1f4137(0x6a9)][_0x2737db['name'][_0x1f4137(0x5a1)]()[_0x1f4137(0x3df)]()]=_0x2737db['id'];}return this['_weaponIDs'][_0xed74d5]||0x0;},DataManager['getArmorIdWithName']=function(_0x486abc){const _0x285bb3=_0x311a7f;_0x486abc=_0x486abc[_0x285bb3(0x5a1)]()['trim'](),this[_0x285bb3(0x264)]=this['_armorIDs']||{};if(this[_0x285bb3(0x264)][_0x486abc])return this[_0x285bb3(0x264)][_0x486abc];for(const _0x18be9b of $dataArmors){if(!_0x18be9b)continue;this[_0x285bb3(0x264)][_0x18be9b[_0x285bb3(0x5cf)][_0x285bb3(0x5a1)]()[_0x285bb3(0x3df)]()]=_0x18be9b['id'];}return this[_0x285bb3(0x264)][_0x486abc]||0x0;},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x64c)]=function(){const _0x4f695d=_0x311a7f;VisuMZ['ItemsEquipsCore'][_0x4f695d(0x572)]($dataItems),VisuMZ[_0x4f695d(0x604)][_0x4f695d(0x572)]($dataWeapons),VisuMZ[_0x4f695d(0x604)][_0x4f695d(0x572)]($dataArmors);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x572)]=function(_0x1b1adf){const _0x336e6e=_0x311a7f;for(const _0x5e4320 of _0x1b1adf){if(!_0x5e4320)continue;if(!DataManager[_0x336e6e(0x4de)](_0x5e4320))continue;const _0xaebade=DataManager[_0x336e6e(0x427)](_0x5e4320),_0x19b659=[_0x336e6e(0x5cf),_0x336e6e(0x204),_0x336e6e(0x590)];for(const _0x528dcb of _0x19b659){if(_0x336e6e(0x51c)===_0x336e6e(0x51c))_0x5e4320[_0x528dcb]=_0xaebade[_0x528dcb];else return _0x1b23a6['ItemsEquipsCore'][_0x336e6e(0x562)][_0x336e6e(0x49e)](this);}}},DataManager[_0x311a7f(0x4de)]=function(_0x2023ab){const _0x221d36=_0x311a7f;if(!_0x2023ab)return![];if(!_0x2023ab[_0x221d36(0x5b3)])return![];return _0x2023ab&&_0x2023ab[_0x221d36(0x5b3)][_0x221d36(0x260)](/<PROXY:[ ](.*)>/i);},DataManager[_0x311a7f(0x427)]=function(_0x47dc50){const _0x167d05=_0x311a7f;if(this['isProxyItem'](_0x47dc50)){if(_0x167d05(0x25e)===_0x167d05(0x391)){const _0x119b8b=_0x4a90eb[_0x114954],_0x1eaf9b=this['getMatchingInitEquip'](_0x21364f,_0x119b8b);if(this['canEquip'](_0x1eaf9b))this[_0x167d05(0x304)][_0x1ec5bb]['setObject'](_0x1eaf9b);}else return this['switchProxyItem'](_0x47dc50)||_0x47dc50;}else return _0x47dc50;},DataManager[_0x311a7f(0x5dd)]=function(_0x110f80){const _0x4412de=_0x311a7f;_0x110f80[_0x4412de(0x5b3)][_0x4412de(0x260)](/<PROXY:[ ](.*)>/i);const _0x26806d=RegExp['$1'][_0x4412de(0x3df)](),_0x2874df=/^\d+$/[_0x4412de(0x2e0)](_0x26806d);if(this[_0x4412de(0x55a)](_0x110f80)){if(_0x4412de(0x57c)!==_0x4412de(0x57c))this[_0x4412de(0x2ff)](_0x20ab33,_0x638768,_0x473ab0,_0xcdfe88,!![]),this[_0x4412de(0x2ff)](_0xe5b763,_0x2e9c58,_0x5d6830,_0x87bd25,![],_0x4412de(0x5e1)),this['drawItemDarkRect'](_0x168670,_0x36ccf3,_0x23bf01),this['resetFontSettings']();else{const _0x1e9c7b=_0x2874df?Number(RegExp['$1']):DataManager[_0x4412de(0x22a)](_0x26806d);return $dataItems[_0x1e9c7b]||_0x110f80;}}else{if(this[_0x4412de(0x512)](_0x110f80)){const _0x3df720=_0x2874df?Number(RegExp['$1']):DataManager[_0x4412de(0x544)](_0x26806d);return $dataWeapons[_0x3df720]||_0x110f80;}else{if(this['isArmor'](_0x110f80)){if('wVjIY'===_0x4412de(0x585)){const _0x3f99a9=_0x2874df?Number(RegExp['$1']):DataManager[_0x4412de(0x577)](_0x26806d);return $dataArmors[_0x3f99a9]||_0x110f80;}else _0x444de6[_0x4412de(0x3bb)]['processCursorMoveModernControls'][_0x4412de(0x49e)](this);}}}return _0x110f80;},VisuMZ['ItemsEquipsCore']['Window_ItemList_item']=Window_ItemList[_0x311a7f(0x3bb)][_0x311a7f(0x486)],Window_ItemList[_0x311a7f(0x3bb)][_0x311a7f(0x486)]=function(){const _0xfc19f0=_0x311a7f;if($gameTemp[_0xfc19f0(0x66e)])return VisuMZ['ItemsEquipsCore'][_0xfc19f0(0x463)][_0xfc19f0(0x49e)](this);return DataManager[_0xfc19f0(0x427)](VisuMZ[_0xfc19f0(0x604)][_0xfc19f0(0x463)][_0xfc19f0(0x49e)](this));},Window_ItemList[_0x311a7f(0x3bb)]['proxyItem']=function(){const _0xd04c9a=_0x311a7f;return VisuMZ[_0xd04c9a(0x604)][_0xd04c9a(0x463)]['call'](this);},VisuMZ[_0x311a7f(0x604)]['Window_ShopBuy_item']=Window_ShopBuy['prototype'][_0x311a7f(0x486)],Window_ShopBuy[_0x311a7f(0x3bb)][_0x311a7f(0x486)]=function(){const _0x496548=_0x311a7f;if($gameTemp[_0x496548(0x66e)])return VisuMZ[_0x496548(0x604)][_0x496548(0x39e)][_0x496548(0x49e)](this);return DataManager[_0x496548(0x427)](VisuMZ[_0x496548(0x604)]['Window_ShopBuy_item'][_0x496548(0x49e)](this));},Window_ShopBuy[_0x311a7f(0x3bb)][_0x311a7f(0x224)]=function(){const _0x27d34e=_0x311a7f;return VisuMZ[_0x27d34e(0x604)][_0x27d34e(0x39e)][_0x27d34e(0x49e)](this);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x6a8)]=Window_ShopStatus['prototype'][_0x311a7f(0x249)],Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x249)]=function(_0x52b5b3){const _0x58d315=_0x311a7f;_0x52b5b3=DataManager[_0x58d315(0x427)](_0x52b5b3),VisuMZ[_0x58d315(0x604)][_0x58d315(0x6a8)][_0x58d315(0x49e)](this,_0x52b5b3);},VisuMZ['ItemsEquipsCore'][_0x311a7f(0x630)]=Game_Item[_0x311a7f(0x3bb)][_0x311a7f(0x437)],Game_Item['prototype'][_0x311a7f(0x437)]=function(_0x390310){const _0x52686c=_0x311a7f;if(DataManager[_0x52686c(0x4de)](_0x390310))return;VisuMZ[_0x52686c(0x604)][_0x52686c(0x630)][_0x52686c(0x49e)](this,_0x390310);},DataManager['isArtifact']=function(_0x4766bf){const _0x126d24=_0x311a7f;if(!this[_0x126d24(0x665)](_0x4766bf))return![];const _0x2a3854=_0x4766bf[_0x126d24(0x5b3)];if(!_0x2a3854)return![];if(_0x2a3854[_0x126d24(0x260)](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x2a3854[_0x126d24(0x260)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x2a3854[_0x126d24(0x260)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x2a3854['match'](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x311a7f(0x64b)]=function(_0x25ca46){const _0x45de1b=_0x311a7f;if(!this[_0x45de1b(0x431)](_0x25ca46))return![];const _0x554446=_0x25ca46[_0x45de1b(0x5b3)];if(!_0x554446)return![];if(_0x554446['match'](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x554446['match'](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x311a7f(0x551)]=function(_0x4cbce0){const _0xc9bfec=_0x311a7f;if(!this[_0xc9bfec(0x431)](_0x4cbce0))return![];const _0x4da009=_0x4cbce0[_0xc9bfec(0x5b3)];if(!_0x4da009)return![];if(_0x4da009[_0xc9bfec(0x260)](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x4da009[_0xc9bfec(0x260)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x311a7f(0x268)]=function(_0x38dbea){const _0x58e9f1=_0x311a7f;if(!this[_0x58e9f1(0x431)](_0x38dbea))return![];const _0x5047ef=_0x38dbea['note'];if(!_0x5047ef)return![];if(_0x5047ef['match'](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x5047ef[_0x58e9f1(0x260)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},VisuMZ[_0x311a7f(0x604)]['Game_BattlerBase_canEquip_artifact']=Game_BattlerBase[_0x311a7f(0x3bb)][_0x311a7f(0x3ae)],Game_BattlerBase[_0x311a7f(0x3bb)][_0x311a7f(0x3ae)]=function(_0x42ccbd){const _0x4e5767=_0x311a7f;if(DataManager[_0x4e5767(0x431)](_0x42ccbd))return![];if(!DataManager[_0x4e5767(0x3e3)](this,_0x42ccbd))return![];if(!DataManager[_0x4e5767(0x510)](this,_0x42ccbd))return![];return VisuMZ['ItemsEquipsCore']['Game_BattlerBase_canEquip_artifact']['call'](this,_0x42ccbd);},VisuMZ['ItemsEquipsCore'][_0x311a7f(0x58a)]=Game_BattlerBase[_0x311a7f(0x3bb)][_0x311a7f(0x33c)],Game_BattlerBase[_0x311a7f(0x3bb)][_0x311a7f(0x33c)]=function(_0x1c5417){const _0x50345f=_0x311a7f;this['_allowArtifactParamBase']=!![];const _0x2e98d5=VisuMZ['ItemsEquipsCore']['Game_BattlerBase_param_artifact']['call'](this,_0x1c5417);return this[_0x50345f(0x41f)]=undefined,_0x2e98d5;},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x673)]=Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x271)],Game_Actor[_0x311a7f(0x3bb)]['traitObjects']=function(){const _0x424863=_0x311a7f;this[_0x424863(0x346)]=!![];const _0x5b3bf1=VisuMZ['ItemsEquipsCore'][_0x424863(0x673)][_0x424863(0x49e)](this);return this[_0x424863(0x346)]=undefined,_0x5b3bf1;},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x3a3)]=Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x662)],Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x662)]=function(){const _0x46f6e1=_0x311a7f,_0x278cfd=VisuMZ[_0x46f6e1(0x604)]['Game_Actor_equips_artifacts'][_0x46f6e1(0x49e)](this);if(this[_0x46f6e1(0x346)]||this[_0x46f6e1(0x41f)]){if('deGMV'==='deGMV'){const _0x479025=_0x278cfd[_0x46f6e1(0x2af)]($gameParty[_0x46f6e1(0x2d3)]());return _0x479025;}else _0x205625='armor-%1'[_0x46f6e1(0x46e)](_0x5697a1['id']);}else return _0x46f6e1(0x472)!=='vDtlG'?![]:_0x278cfd;},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x41b)]=Game_BattlerBase[_0x311a7f(0x3bb)][_0x311a7f(0x20d)],Game_BattlerBase['prototype'][_0x311a7f(0x20d)]=function(_0x5520a3){const _0x26c622=_0x311a7f;let _0x31aed0=VisuMZ[_0x26c622(0x604)][_0x26c622(0x41b)][_0x26c622(0x49e)](this,_0x5520a3);if(this[_0x26c622(0x552)]===Game_Enemy){if('VXhSK'===_0x26c622(0x4be))for(const _0x53bcb8 of $gameParty[_0x26c622(0x219)]()){if(_0x53bcb8)_0x31aed0+=_0x53bcb8[_0x26c622(0x30f)][_0x5520a3];}else this[_0x26c622(0x5d6)][_0x26c622(0x573)]();}return _0x31aed0;},VisuMZ[_0x311a7f(0x604)]['Game_Enemy_traitObjects_artifact']=Game_Enemy[_0x311a7f(0x3bb)]['traitObjects'],Game_Enemy[_0x311a7f(0x3bb)][_0x311a7f(0x271)]=function(){const _0x450e97=_0x311a7f;let _0x61796=VisuMZ[_0x450e97(0x604)][_0x450e97(0x44b)]['call'](this);return _0x61796['concat']($gameParty[_0x450e97(0x219)]());},VisuMZ['ItemsEquipsCore']['Game_Party_gainItem_artifact']=Game_Party[_0x311a7f(0x3bb)]['gainItem'],Game_Party[_0x311a7f(0x3bb)][_0x311a7f(0x5ce)]=function(_0x268236,_0x28c71f,_0x5c05fd){const _0x2c88dc=_0x311a7f;VisuMZ[_0x2c88dc(0x604)][_0x2c88dc(0x4a4)][_0x2c88dc(0x49e)](this,_0x268236,_0x28c71f,_0x5c05fd);if(DataManager[_0x2c88dc(0x431)](_0x268236)){let _0x50f2a3=$gameParty[_0x2c88dc(0x420)]();if($gameParty[_0x2c88dc(0x313)]())_0x50f2a3=_0x50f2a3[_0x2c88dc(0x2af)]($gameTroop[_0x2c88dc(0x624)]());for(const _0x1561d6 of _0x50f2a3){if(!_0x1561d6)continue;_0x1561d6[_0x2c88dc(0x3dc)]={};}}},Game_Party[_0x311a7f(0x3bb)][_0x311a7f(0x2d3)]=function(){const _0x54c533=_0x311a7f;let _0x2e8160=[];for(const _0x53f3c4 of this[_0x54c533(0x441)]()){if(!_0x53f3c4)continue;if(!DataManager[_0x54c533(0x431)](_0x53f3c4))continue;if(!DataManager['isPartyArtifact'](_0x53f3c4))continue;let _0x217a17=0x1;if(DataManager[_0x54c533(0x64b)](_0x53f3c4))_0x217a17=this[_0x54c533(0x5ed)](_0x53f3c4);while(_0x217a17--)_0x2e8160[_0x54c533(0x300)](_0x53f3c4);}return _0x2e8160;},Game_Party['prototype'][_0x311a7f(0x219)]=function(){const _0x32bf4d=_0x311a7f;let _0x3c800c=[];for(const _0xdf3d6f of this[_0x32bf4d(0x441)]()){if(!_0xdf3d6f)continue;if(!DataManager['isArtifact'](_0xdf3d6f))continue;if(!DataManager[_0x32bf4d(0x268)](_0xdf3d6f))continue;let _0x4d1d8f=0x1;if(DataManager[_0x32bf4d(0x64b)](_0xdf3d6f))_0x4d1d8f=this[_0x32bf4d(0x5ed)](_0xdf3d6f);while(_0x4d1d8f--)_0x3c800c[_0x32bf4d(0x300)](_0xdf3d6f);}return _0x3c800c;},Game_Party[_0x311a7f(0x3bb)][_0x311a7f(0x3f2)]=function(){const _0x1f8ac3=_0x311a7f;return this[_0x1f8ac3(0x2d3)]()[_0x1f8ac3(0x2af)](this[_0x1f8ac3(0x219)]());},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x5a5)]=Game_Party[_0x311a7f(0x3bb)][_0x311a7f(0x5f7)],Game_Party[_0x311a7f(0x3bb)]['setupBattleTestItems']=function(){const _0x39f1ea=_0x311a7f;VisuMZ[_0x39f1ea(0x604)]['Game_Party_setupBattleTestItems_artifact'][_0x39f1ea(0x49e)](this),this[_0x39f1ea(0x457)]();},Game_Party['prototype']['removeBattleTestArtifacts']=function(){const _0x6ec5d8=_0x311a7f,_0x262c54=$gameParty[_0x6ec5d8(0x441)]()[_0x6ec5d8(0x663)](_0x4fb20c=>DataManager[_0x6ec5d8(0x431)](_0x4fb20c));for(const _0xd9793d of _0x262c54){const _0x565d20=this[_0x6ec5d8(0x5ed)](_0xd9793d);if(_0x565d20)this[_0x6ec5d8(0x65d)](_0xd9793d,_0x565d20);}},DataManager['meetsClassRequirements']=function(_0x3a1638,_0xb1c0b8){const _0x5dd50a=_0x311a7f;if(this[_0x5dd50a(0x55a)](_0xb1c0b8))return![];if(!_0x3a1638)return![];if($gameTemp[_0x5dd50a(0x647)])return!![];if(BattleManager[_0x5dd50a(0x488)]())return!![];const _0xb6c757=this[_0x5dd50a(0x66d)](_0xb1c0b8);if(_0xb6c757[_0x5dd50a(0x28c)]<=0x0)return!![];return _0xb6c757[_0x5dd50a(0x1f7)](_0x3a1638[_0x5dd50a(0x342)]()['id']);},DataManager['getClassRequirements']=function(_0x4a6050){const _0xdfc847=_0x311a7f;if(!_0x4a6050)return[];this[_0xdfc847(0x529)]=this[_0xdfc847(0x529)]||{};const _0x20ea2b=_0xdfc847(0x303)[_0xdfc847(0x46e)](this[_0xdfc847(0x512)](_0x4a6050)?_0xdfc847(0x502):_0xdfc847(0x2db),_0x4a6050['id']);if(this[_0xdfc847(0x529)][_0x20ea2b]!==undefined)return this['_getClassRequirements'][_0x20ea2b];let _0x4ec382=[];const _0x9a6dd=_0x4a6050[_0xdfc847(0x5b3)]||'';if(_0x9a6dd['match'](/<EQUIP FOR CLASS(?:|ES) ONLY:[ ](.*)>/i)){const _0x30d044=String(RegExp['$1'])[_0xdfc847(0x51a)](',')[_0xdfc847(0x693)](_0x1b6df8=>_0x1b6df8[_0xdfc847(0x3df)]());for(const _0x305075 of _0x30d044){const _0x4f1adb=/^\d+$/[_0xdfc847(0x2e0)](_0x305075);if(_0x4f1adb){if(_0xdfc847(0x25b)!==_0xdfc847(0x41a))_0x4ec382['push'](Number(_0x305075));else return _0x359d0e[_0xdfc847(0x604)][_0xdfc847(0x5cc)][_0xdfc847(0x4bd)][_0xdfc847(0x60a)];}else _0xdfc847(0x3cf)===_0xdfc847(0x3cf)?_0x4ec382['push'](DataManager[_0xdfc847(0x39b)](_0x305075)):_0x429199=_0x4f4505[_0xdfc847(0x343)];}}return this[_0xdfc847(0x529)][_0x20ea2b]=_0x4ec382,this['_getClassRequirements'][_0x20ea2b];},DataManager[_0x311a7f(0x510)]=function(_0x4de57b,_0x1f635f){const _0x3ce494=_0x311a7f;if(this[_0x3ce494(0x55a)](_0x1f635f))return![];if(!_0x4de57b)return![];if($gameTemp[_0x3ce494(0x647)])return!![];if(BattleManager['isBattleTest']())return!![];const _0x53af3c=this['getEquipRequirements'](_0x1f635f);for(const _0x22682c of _0x53af3c){if(!this[_0x3ce494(0x3c9)](_0x4de57b,_0x22682c))return![];}return!![];},DataManager[_0x311a7f(0x2c7)]=function(_0x443b02){const _0x17159f=_0x311a7f;if(!_0x443b02)return[];this[_0x17159f(0x559)]=this[_0x17159f(0x559)]||{};const _0x3095aa=_0x17159f(0x303)['format'](this[_0x17159f(0x512)](_0x443b02)?_0x17159f(0x502):_0x17159f(0x2db),_0x443b02['id']);if(this['_getEquipRequirements'][_0x3095aa]!==undefined){if('uUFNs'===_0x17159f(0x203))return this[_0x17159f(0x559)][_0x3095aa];else{const _0x474c02=this[_0x17159f(0x537)];if(_0x474c02[_0x2e7aba])return _0x474c02[_0x1b3993];else{const _0x1737b7=new _0x5537eb();return _0x474c02[_0x599d50]=_0x1737b7,this[_0x17159f(0x546)](_0x1737b7),_0x1737b7;}}}let _0x313a65=[];const _0x45c053=_0x443b02[_0x17159f(0x5b3)]||'';if(_0x45c053[_0x17159f(0x260)](/<EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>\s*([\s\S]*)\s*<\/EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>/i)){if(_0x17159f(0x38b)===_0x17159f(0x287))return this[_0x17159f(0x641)]()?this[_0x17159f(0x324)]():_0x1e7455[_0x17159f(0x604)]['Scene_Equip_slotWindowRect'][_0x17159f(0x49e)](this);else _0x313a65=String(RegExp['$1'])['split'](/[\r\n]+/);}return this[_0x17159f(0x559)][_0x3095aa]=_0x313a65,this['_getEquipRequirements'][_0x3095aa];},DataManager['meetsEquipRequirement']=function(_0x223af4,_0x1829f){const _0x2683df=_0x311a7f;if(_0x1829f[_0x2683df(0x260)](/(?:LEVEL|LV|LVL)[ ](>|>=|===|<=|<)[ ](\d+)/i)){if(_0x2683df(0x37a)!==_0x2683df(0x532)){const _0x32a6b9=String(RegExp['$1'])[_0x2683df(0x3df)](),_0x5902fc=Number(RegExp['$2']);switch(_0x32a6b9){case'>':return _0x223af4[_0x2683df(0x4f2)]>_0x5902fc;case'>=':return _0x223af4[_0x2683df(0x4f2)]>=_0x5902fc;case _0x2683df(0x3f5):return _0x223af4[_0x2683df(0x4f2)]===_0x5902fc;case'<=':return _0x223af4[_0x2683df(0x4f2)]<=_0x5902fc;case'<':return _0x223af4[_0x2683df(0x4f2)]<_0x5902fc;}return![];}else _0x1f95b5(_0x5be3e6);}if(_0x1829f[_0x2683df(0x260)](/(MAXHP|MAXMP|MHP|MMP)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x101cd1=String(RegExp['$1'])['toLowerCase']()['trim'](),_0x56fad4=String(RegExp['$2'])[_0x2683df(0x3df)](),_0x5e0ef1=Number(RegExp['$3']);let _0x21aedf=0x0;if([_0x2683df(0x29b),_0x2683df(0x44e)][_0x2683df(0x1f7)](_0x101cd1))_0x21aedf=0x1;const _0x104442=_0x223af4[_0x2683df(0x64a)][_0x21aedf]||0x0;switch(_0x56fad4){case'>':return _0x223af4[_0x2683df(0x3f7)](_0x21aedf)+_0x104442>_0x5e0ef1;case'>=':return _0x223af4[_0x2683df(0x3f7)](_0x21aedf)+_0x104442>=_0x5e0ef1;case'===':return _0x223af4[_0x2683df(0x3f7)](_0x21aedf)+_0x104442===_0x5e0ef1;case'<=':return _0x223af4[_0x2683df(0x3f7)](_0x21aedf)+_0x104442<=_0x5e0ef1;case'<':return _0x223af4['paramBase'](_0x21aedf)+_0x104442<_0x5e0ef1;}return![];}if(_0x1829f[_0x2683df(0x260)](/(ATK|DEF|MAT|MDF|AGI|LUK)[ ](>|>=|===|<=|<)[ ](\d+)/i)){if('UJrqp'!==_0x2683df(0x668)){const _0x4757e8=String(RegExp['$1'])['toLowerCase']()[_0x2683df(0x3df)](),_0x40a1f0=String(RegExp['$2'])[_0x2683df(0x3df)](),_0x2b139b=Number(RegExp['$3']),_0x11bdb7=[_0x2683df(0x2fa),_0x2683df(0x4a8),'mat','mdf',_0x2683df(0x1ec),_0x2683df(0x3f9)];let _0x58c3e6=_0x11bdb7[_0x2683df(0x2df)](_0x4757e8)+0x2;if(_0x58c3e6<0x2)return![];const _0x4789d7=_0x223af4[_0x2683df(0x64a)][_0x58c3e6]||0x0;switch(_0x40a1f0){case'>':return _0x223af4[_0x2683df(0x3f7)](_0x58c3e6)+_0x4789d7>_0x2b139b;case'>=':return _0x223af4['paramBase'](_0x58c3e6)+_0x4789d7>=_0x2b139b;case _0x2683df(0x3f5):return _0x223af4[_0x2683df(0x3f7)](_0x58c3e6)+_0x4789d7===_0x2b139b;case'<=':return _0x223af4[_0x2683df(0x3f7)](_0x58c3e6)+_0x4789d7<=_0x2b139b;case'<':return _0x223af4[_0x2683df(0x3f7)](_0x58c3e6)+_0x4789d7<_0x2b139b;}return![];}else{const _0x25fc4f=_0x1cbdc9(_0x46cacb['$1']),_0x4534c8=this['getSkillIdWithName'](_0x25fc4f);return _0x4664c1[_0x2683df(0x514)](_0x4534c8);}}if(_0x1829f[_0x2683df(0x260)](/LEARNED SKILL:[ ](\d+)/i)){const _0x4aa4d4=Number(RegExp['$1']);return _0x223af4[_0x2683df(0x514)](_0x4aa4d4);}else{if(_0x1829f[_0x2683df(0x260)](/LEARNED SKILL:[ ](.*)/i)){const _0x5f326a=String(RegExp['$1']),_0x9a75d2=this['getSkillIdWithName'](_0x5f326a);return _0x223af4[_0x2683df(0x514)](_0x9a75d2);}}if(_0x1829f[_0x2683df(0x260)](/SWITCH:[ ](\d+)/i)){if('qHXkf'!==_0x2683df(0x63c))return _0x53990b[_0x2683df(0x604)][_0x2683df(0x5cc)][_0x2683df(0x4a2)][_0x2683df(0x440)];else{const _0x3df013=Number(RegExp['$1']);return $gameSwitches[_0x2683df(0x43a)](_0x3df013);}}return!![];},TextManager[_0x311a7f(0x685)]={'helpDesc':{'equip':VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x5cc)][_0x311a7f(0x4bd)]['equipCmdDesc']??_0x311a7f(0x4e5),'optimize':VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x5cc)]['EquipScene'][_0x311a7f(0x48d)]??_0x311a7f(0x569),'clear':VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x5cc)][_0x311a7f(0x4bd)][_0x311a7f(0x247)]??'Remove\x20all\x20available\x20equipment.'}},ColorManager[_0x311a7f(0x3bf)]=function(_0x43989f){const _0x22b623=_0x311a7f;if(!_0x43989f){if(_0x22b623(0x4db)!==_0x22b623(0x4db)){const _0x1bb97b=this[_0x22b623(0x5dc)](_0x59fa5a);if(_0x1bb97b===_0x22b623(0x381))this[_0x22b623(0x60b)](_0x43ceaf);else _0x1bb97b===_0x22b623(0x2fd)?this[_0x22b623(0x269)](_0x5d8c1e):_0x6be9bd[_0x22b623(0x3bb)]['drawItem'][_0x22b623(0x49e)](this,_0x3c1b28);}else return this['normalColor']();}else{if(_0x43989f[_0x22b623(0x5b3)][_0x22b623(0x260)](/<COLOR:[ ](\d+)>/i))return this[_0x22b623(0x61a)](Number(RegExp['$1'])[_0x22b623(0x517)](0x0,0x1f));else return _0x43989f['note'][_0x22b623(0x260)](/<COLOR:[ ]#(.*)>/i)?'#'+String(RegExp['$1']):this[_0x22b623(0x3c2)]();}},ColorManager['getColor']=function(_0x480dfa){const _0x3ccdc4=_0x311a7f;_0x480dfa=String(_0x480dfa);if(_0x480dfa['match'](/#(.*)/i))return _0x3ccdc4(0x3e2)['format'](String(RegExp['$1']));else{if(_0x3ccdc4(0x3c4)!==_0x3ccdc4(0x3d9))return this['textColor'](Number(_0x480dfa));else{if(_0xd943f1['id']===_0x2cab61['id'])_0x4343e9+=0x1;}}},SceneManager['isSceneShop']=function(){const _0x5e4769=_0x311a7f;return this[_0x5e4769(0x69c)]&&this['_scene'][_0x5e4769(0x552)]===Scene_Shop;},Game_Temp['prototype'][_0x311a7f(0x458)]=function(){const _0x403bb8=_0x311a7f;if(this[_0x403bb8(0x22e)])return![];return VisuMZ['ItemsEquipsCore'][_0x403bb8(0x5cc)][_0x403bb8(0x449)][_0x403bb8(0x2d0)];},VisuMZ[_0x311a7f(0x62e)]=VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x5cc)]['StatusWindow'][_0x311a7f(0x1fc)],VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x40f)]=Game_BattlerBase['prototype']['param'],Game_BattlerBase['prototype']['param']=function(_0x1bb4d9){const _0x46a76a=_0x311a7f;return this['_shopStatusMenuMode']?this[_0x46a76a(0x6aa)]?VisuMZ[_0x46a76a(0x62e)]:0x1:VisuMZ['ItemsEquipsCore'][_0x46a76a(0x40f)][_0x46a76a(0x49e)](this,_0x1bb4d9);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x2ba)]=Game_BattlerBase[_0x311a7f(0x3bb)][_0x311a7f(0x325)],Game_BattlerBase['prototype'][_0x311a7f(0x325)]=function(_0x22388e){const _0x5b9a23=_0x311a7f;if(!_0x22388e)return![];if(!VisuMZ[_0x5b9a23(0x604)]['Game_BattlerBase_meetsItemConditions']['call'](this,_0x22388e))return![];if(!this[_0x5b9a23(0x317)](_0x22388e))return![];if(!this[_0x5b9a23(0x602)](_0x22388e))return![];return!![];},Game_BattlerBase['prototype'][_0x311a7f(0x317)]=function(_0x5d160a){const _0x3d0f83=_0x311a7f;if(!this[_0x3d0f83(0x666)](_0x5d160a))return![];return!![];},Game_BattlerBase['prototype']['checkItemConditionsSwitchNotetags']=function(_0x3362c0){const _0x234fd6=_0x311a7f,_0x4b9371=_0x3362c0[_0x234fd6(0x5b3)];if(_0x4b9371[_0x234fd6(0x260)](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x148c08=JSON['parse']('['+RegExp['$1'][_0x234fd6(0x260)](/\d+/g)+']');for(const _0x1d0fcd of _0x148c08){if(!$gameSwitches[_0x234fd6(0x43a)](_0x1d0fcd))return![];}return!![];}if(_0x4b9371['match'](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5a86a4=JSON[_0x234fd6(0x5e8)]('['+RegExp['$1'][_0x234fd6(0x260)](/\d+/g)+']');for(const _0xdd90fe of _0x5a86a4){if(!$gameSwitches[_0x234fd6(0x43a)](_0xdd90fe))return![];}return!![];}if(_0x4b9371[_0x234fd6(0x260)](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x234fd6(0x471)!=='dKlGR'){const _0xff825=JSON[_0x234fd6(0x5e8)]('['+RegExp['$1'][_0x234fd6(0x260)](/\d+/g)+']');for(const _0x1c615d of _0xff825){if($gameSwitches['value'](_0x1c615d))return!![];}return![];}else this['changeTextColor'](_0x9671e0[_0x234fd6(0x385)]()),this[_0x234fd6(0x638)](_0x5be15b['param'](_0x5a8a18),_0x3ed70e,_0x2ca7fa,_0x1cc3f0);}if(_0x4b9371[_0x234fd6(0x260)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if('vENjt'!==_0x234fd6(0x34f)){const _0x592573=JSON[_0x234fd6(0x5e8)]('['+RegExp['$1'][_0x234fd6(0x260)](/\d+/g)+']');for(const _0x596075 of _0x592573){if(!$gameSwitches['value'](_0x596075))return!![];}return![];}else return!!_0xbd9bfd&&_0x5072e4['categories'][_0x234fd6(0x1f7)](_0x599494(_0x480c91['$1'])[_0x234fd6(0x5a1)]()[_0x234fd6(0x3df)]());}if(_0x4b9371['match'](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4655bf=JSON[_0x234fd6(0x5e8)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x5927c9 of _0x4655bf){if(!$gameSwitches[_0x234fd6(0x43a)](_0x5927c9))return!![];}return![];}if(_0x4b9371[_0x234fd6(0x260)](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1b6c30=JSON[_0x234fd6(0x5e8)]('['+RegExp['$1'][_0x234fd6(0x260)](/\d+/g)+']');for(const _0x34e163 of _0x1b6c30){if($gameSwitches['value'](_0x34e163))return![];}return!![];}return!![];},Game_BattlerBase[_0x311a7f(0x3bb)][_0x311a7f(0x602)]=function(_0x44d005){const _0x1567e0=_0x311a7f,_0x1f45ef=_0x44d005[_0x1567e0(0x5b3)],_0x1f68cc=VisuMZ[_0x1567e0(0x604)]['itemEnableJS'];return _0x1f68cc[_0x44d005['id']]?_0x1567e0(0x3c5)===_0x1567e0(0x3c5)?_0x1f68cc[_0x44d005['id']][_0x1567e0(0x49e)](this,_0x44d005):_0x520729['ItemsEquipsCore'][_0x1567e0(0x5cc)][_0x1567e0(0x470)][_0x1567e0(0x327)]:_0x1567e0(0x5f5)!==_0x1567e0(0x65b)?!![]:_0x98410b['ItemsEquipsCore'][_0x1567e0(0x5cc)]['ItemScene'][_0x1567e0(0x4ee)];},Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x24a)]=function(_0x2b5f0c){const _0x4fa62c=_0x311a7f;_0x2b5f0c=this[_0x4fa62c(0x695)](_0x2b5f0c);const _0xe69efd=this[_0x4fa62c(0x565)]();this['_equips']=[];for(let _0x356afe=0x0;_0x356afe<_0xe69efd['length'];_0x356afe++){'bJEdC'===_0x4fa62c(0x23b)?this[_0x4fa62c(0x304)][_0x356afe]=new Game_Item():_0x412ab5=_0x4fa62c(0x48f)['format'](_0x43a9cb['id']);}for(let _0x417045=0x0;_0x417045<_0xe69efd[_0x4fa62c(0x28c)];_0x417045++){const _0x567aab=_0xe69efd[_0x417045],_0x1120a6=this[_0x4fa62c(0x383)](_0x2b5f0c,_0x567aab);if(this[_0x4fa62c(0x3ae)](_0x1120a6))this[_0x4fa62c(0x304)][_0x417045][_0x4fa62c(0x437)](_0x1120a6);}this[_0x4fa62c(0x225)](!![]),this['refresh']();},Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x695)]=function(_0x4c5abf){const _0x573c26=_0x311a7f,_0x4e7f5c=[];for(let _0x43e808=0x0;_0x43e808<_0x4c5abf[_0x573c26(0x28c)];_0x43e808++){if(_0x573c26(0x52d)===_0x573c26(0x52d)){const _0x5f39b3=_0x4c5abf[_0x43e808];if(_0x5f39b3<=0x0)continue;const _0x5cd851=$dataSystem[_0x573c26(0x37c)][_0x43e808+0x1];if(_0x5cd851===$dataSystem['equipTypes'][0x1]||_0x43e808===0x1&&this['isDualWield']())_0x4e7f5c[_0x573c26(0x300)]($dataWeapons[_0x5f39b3]);else{if(BattleManager[_0x573c26(0x488)]()){if(_0x573c26(0x54e)!==_0x573c26(0x68b)){const _0x5029dc=$dataArmors[_0x5f39b3];_0x5029dc&&_0x5029dc[_0x573c26(0x2d5)]===_0x43e808+0x1&&_0x4e7f5c[_0x573c26(0x300)](_0x5029dc);}else{const _0x20e11a=_0x573c26(0x2fc);if(this[_0x573c26(0x3db)]['rateHP']<=0x0&&this[_0x573c26(0x3db)][_0x573c26(0x33d)]<=0x0&&!this['_customItemInfo'][_0x20e11a])return![];const _0x2eb3a7=this['getItemEffectsHpRecoveryLabel']();this[_0x573c26(0x2ff)](_0x2eb3a7,_0x3bb1b5,_0xafcf0c,_0x518abd,!![]);const _0x40663b=this[_0x573c26(0x347)]();return this[_0x573c26(0x636)](_0x50cf15['damageColor'](0x1)),this['drawItemKeyData'](_0x40663b,_0x327897,_0x18cfad,_0x280599,![],_0x573c26(0x5e1)),this[_0x573c26(0x37e)](_0x353623,_0x259d47,_0x457067),this[_0x573c26(0x560)](),!![];}}else{const _0x4446ca=$dataArmors[_0x5f39b3];_0x4446ca&&_0x4446ca[_0x573c26(0x2d5)]===_0x43e808+0x1&&_0x4e7f5c[_0x573c26(0x300)](_0x4446ca);}}}else for(const _0x2ac764 of _0xadd1f0){const _0x7a6f89=_0x49a9a4[_0x573c26(0x2df)](_0x2ac764[_0x573c26(0x3df)]());if(_0x7a6f89>0x0)_0x3b974e[_0x573c26(0x565)][_0x573c26(0x300)](_0x7a6f89);}}return _0x4e7f5c;},Game_Actor['prototype'][_0x311a7f(0x383)]=function(_0x115244,_0x4ee402){const _0x4b111e=_0x311a7f;for(const _0x4e0153 of _0x115244){if(!_0x4e0153)continue;if(_0x4e0153[_0x4b111e(0x2d5)]===_0x4ee402)return _0x115244[_0x4b111e(0x4cf)](_0x115244[_0x4b111e(0x2df)](_0x4e0153),0x1),_0x4e0153;}return null;},Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x565)]=function(){const _0x254e1b=_0x311a7f,_0x763051=JsonEx[_0x254e1b(0x445)](this[_0x254e1b(0x68c)]||this['currentClass']()[_0x254e1b(0x565)]);if(_0x763051[_0x254e1b(0x28c)]>=0x2&&this['isDualWield']())_0x763051[0x1]=0x1;return _0x763051;},Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x5ef)]=function(_0x4f3529){const _0x4222a4=_0x311a7f;_0x4f3529[_0x4222a4(0x375)](0x0),_0x4f3529['remove'](-0x1),this[_0x4222a4(0x68c)]=_0x4f3529,this['refresh'](),this[_0x4222a4(0x3cb)]();},Game_Actor['prototype']['forceResetEquipSlots']=function(){const _0x48146a=_0x311a7f;this['_forcedSlots']=undefined,this[_0x48146a(0x4d8)](),this['updateChangedSlots']();},Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x3cb)]=function(){const _0x2c6b30=_0x311a7f;let _0x268c7f=this['equipSlots']()[_0x2c6b30(0x28c)];while(this['_equips'][_0x2c6b30(0x28c)]>_0x268c7f){const _0x1277b1=this[_0x2c6b30(0x304)][this['_equips'][_0x2c6b30(0x28c)]-0x1];if(_0x1277b1&&_0x1277b1[_0x2c6b30(0x4da)]()){if(_0x2c6b30(0x655)!==_0x2c6b30(0x655))return _0x1c411f['ItemsEquipsCore'][_0x2c6b30(0x5cc)][_0x2c6b30(0x4a2)][_0x2c6b30(0x61c)];else $gameParty[_0x2c6b30(0x5ce)](_0x1277b1[_0x2c6b30(0x4da)](),0x1);}this[_0x2c6b30(0x304)][_0x2c6b30(0x1e7)]();}while(_0x268c7f>this['_equips'][_0x2c6b30(0x28c)]){if('wdYiZ'===_0x2c6b30(0x4d5))this[_0x2c6b30(0x304)]['push'](new Game_Item());else return _0x264505['ItemsEquipsCore'][_0x2c6b30(0x5cc)][_0x2c6b30(0x648)]['ItemMenuStatusRect'][_0x2c6b30(0x49e)](this);}},Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x676)]=function(){const _0x272f83=_0x311a7f,_0x3bf2e7=this[_0x272f83(0x565)]();for(let _0x44082f=0x0;_0x44082f<_0x3bf2e7[_0x272f83(0x28c)];_0x44082f++){if(!this['_equips'][_0x44082f])this[_0x272f83(0x304)][_0x44082f]=new Game_Item();}this[_0x272f83(0x225)](![]),this[_0x272f83(0x4d8)]();},VisuMZ['ItemsEquipsCore']['Game_Actor_changeEquip']=Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x48e)],Game_Actor['prototype']['changeEquip']=function(_0x3cd0c6,_0x46de72){const _0x6c6f0=_0x311a7f;if(!this[_0x6c6f0(0x4fa)]){if('EjuCK'===_0x6c6f0(0x272)){if(this[_0x6c6f0(0x5ee)]&&this[_0x6c6f0(0x5ee)][_0x6c6f0(0x2cb)])return _0x5496d1[_0x6c6f0(0x688)]('up','down');return _0xe15015[_0x6c6f0(0x3bb)][_0x6c6f0(0x4ec)]['call'](this);}else{const _0x262ac6=JsonEx[_0x6c6f0(0x445)](this);_0x262ac6[_0x6c6f0(0x4fa)]=!![],VisuMZ[_0x6c6f0(0x604)]['Game_Actor_changeEquip'][_0x6c6f0(0x49e)](this,_0x3cd0c6,_0x46de72),this[_0x6c6f0(0x25a)](_0x262ac6);}}else VisuMZ[_0x6c6f0(0x604)]['Game_Actor_changeEquip'][_0x6c6f0(0x49e)](this,_0x3cd0c6,_0x46de72);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x4f0)]=Game_Actor['prototype'][_0x311a7f(0x4ef)],Game_Actor['prototype']['forceChangeEquip']=function(_0x288c2e,_0x4d7b55){const _0x22dbf6=_0x311a7f;if(!this[_0x22dbf6(0x4fa)]){const _0x33b761=JsonEx[_0x22dbf6(0x445)](this);_0x33b761[_0x22dbf6(0x4fa)]=!![],VisuMZ['ItemsEquipsCore'][_0x22dbf6(0x4f0)][_0x22dbf6(0x49e)](this,_0x288c2e,_0x4d7b55),this[_0x22dbf6(0x25a)](_0x33b761);}else{if(_0x22dbf6(0x497)!=='JvHUC')return;else VisuMZ[_0x22dbf6(0x604)][_0x22dbf6(0x4f0)][_0x22dbf6(0x49e)](this,_0x288c2e,_0x4d7b55);}},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x295)]=Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x1ef)],Game_Actor['prototype']['discardEquip']=function(_0x3f58c1){const _0x2b2c4a=_0x311a7f;if(!this[_0x2b2c4a(0x4fa)]){if(_0x2b2c4a(0x2be)===_0x2b2c4a(0x2be)){const _0x44bfe3=JsonEx['makeDeepCopy'](this);_0x44bfe3[_0x2b2c4a(0x4fa)]=!![],VisuMZ[_0x2b2c4a(0x604)][_0x2b2c4a(0x295)]['call'](this,_0x3f58c1),this[_0x2b2c4a(0x25a)](_0x44bfe3);}else return _0x5bf6d2[_0x2b2c4a(0x604)][_0x2b2c4a(0x5cc)]['ItemScene']['EnableLayout'];}else{if(_0x2b2c4a(0x542)===_0x2b2c4a(0x542))VisuMZ[_0x2b2c4a(0x604)][_0x2b2c4a(0x295)][_0x2b2c4a(0x49e)](this,_0x3f58c1);else return _0x2b2c4a(0x381);}},Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x225)]=function(_0x4a7585){const _0x459769=_0x311a7f;if(this[_0x459769(0x36c)])return;for(;;){const _0x5f1cbd=this[_0x459769(0x565)](),_0x18314a=this[_0x459769(0x662)](),_0x55f214=_0x18314a[_0x459769(0x28c)];let _0x1b31f0=![];for(let _0x475ef5=0x0;_0x475ef5<_0x55f214;_0x475ef5++){if(_0x459769(0x682)!==_0x459769(0x682))_0x4d4d99[_0x459769(0x409)](_0x459769(0x21a))&&_0x322736[_0x459769(0x408)](_0x459769(0x54b))&&this[_0x459769(0x4a0)](),_0xd944d4[_0x459769(0x409)](_0x459769(0x538))&&_0x13b678['isPressed'](_0x459769(0x54b))&&this[_0x459769(0x63e)]();else{const _0x4798a2=_0x18314a[_0x475ef5];if(_0x4798a2&&(!this[_0x459769(0x3ae)](_0x4798a2)||_0x4798a2[_0x459769(0x2d5)]!==_0x5f1cbd[_0x475ef5])){!_0x4a7585&&this[_0x459769(0x57a)](null,_0x4798a2);if(!this[_0x459769(0x4fa)]){const _0x2a17f4=JsonEx[_0x459769(0x445)](this);_0x2a17f4['_tempActor']=!![],this[_0x459769(0x304)][_0x475ef5][_0x459769(0x437)](null),this[_0x459769(0x36c)]=!![],this[_0x459769(0x25a)](_0x2a17f4),this[_0x459769(0x36c)]=undefined;}else this['_equips'][_0x475ef5][_0x459769(0x437)](null);_0x1b31f0=!![];}}}if(!_0x1b31f0)break;}},Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x25a)]=function(_0x210f04){const _0x24bdc3=_0x311a7f;if(this[_0x24bdc3(0x4fa)])return;if(!VisuMZ['ItemsEquipsCore'][_0x24bdc3(0x5cc)][_0x24bdc3(0x4bd)][_0x24bdc3(0x273)])return;const _0x551899=Math[_0x24bdc3(0x3b7)](_0x210f04['hpRate']()*this[_0x24bdc3(0x31f)]),_0x1447a1=Math[_0x24bdc3(0x3b7)](_0x210f04[_0x24bdc3(0x4aa)]()*this[_0x24bdc3(0x44e)]);if(this['hp']>0x0)this[_0x24bdc3(0x657)](_0x551899);if(this['mp']>0x0)this[_0x24bdc3(0x23c)](_0x1447a1);},Game_Actor['prototype'][_0x311a7f(0x366)]=function(){const _0x36de39=_0x311a7f,_0x1366b8=this[_0x36de39(0x565)]()[_0x36de39(0x28c)];for(let _0x131b28=0x0;_0x131b28<_0x1366b8;_0x131b28++){if(this['isClearEquipOk'](_0x131b28))this[_0x36de39(0x48e)](_0x131b28,null);}},Game_Actor['prototype'][_0x311a7f(0x3dd)]=function(_0x414168){const _0x342b37=_0x311a7f;return this['nonRemovableEtypes']()[_0x342b37(0x1f7)](this[_0x342b37(0x565)]()[_0x414168])?![]:this['isEquipChangeOk'](_0x414168);},Game_Actor['prototype'][_0x311a7f(0x1f8)]=function(){const _0x23cd37=_0x311a7f;return VisuMZ['ItemsEquipsCore']['Settings'][_0x23cd37(0x4bd)][_0x23cd37(0x2b9)];},Game_Actor['prototype'][_0x311a7f(0x5f3)]=function(){const _0x3fdfe2=_0x311a7f,_0x3ad3aa=this[_0x3fdfe2(0x565)]()[_0x3fdfe2(0x28c)];for(let _0x22062d=0x0;_0x22062d<_0x3ad3aa;_0x22062d++){if(this[_0x3fdfe2(0x265)](_0x22062d))this['changeEquip'](_0x22062d,null);}for(let _0x15af18=0x0;_0x15af18<_0x3ad3aa;_0x15af18++){if('hHxlW'==='armXr')return _0x211b5a['uiInputPosition'];else{if(this['isOptimizeEquipOk'](_0x15af18))this[_0x3fdfe2(0x48e)](_0x15af18,this[_0x3fdfe2(0x24f)](_0x15af18));}}},Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x265)]=function(_0x497113){const _0x2b2dca=_0x311a7f;if(this[_0x2b2dca(0x5b4)]()[_0x2b2dca(0x1f7)](this[_0x2b2dca(0x565)]()[_0x497113])){if(_0x2b2dca(0x336)===_0x2b2dca(0x336))return![];else this[_0x2b2dca(0x216)](_0x343a70,_0x18f98e['x']+_0x2b180d[_0x2b2dca(0x1f0)]-_0x2d4857,_0x4059c3['y'],_0x23e4cb);}else return this[_0x2b2dca(0x35e)](_0x497113);},Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x5b4)]=function(){const _0x5c1905=_0x311a7f;return VisuMZ[_0x5c1905(0x604)][_0x5c1905(0x5cc)][_0x5c1905(0x4bd)]['NonOptimizeETypes'];},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x56f)]=Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x57a)],Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x57a)]=function(_0x2c771c,_0x56bbbb){const _0x3b4784=_0x311a7f;if(this[_0x3b4784(0x4fa)])return![];$gameTemp[_0x3b4784(0x22e)]=!![];const _0x5e6d0f=VisuMZ[_0x3b4784(0x604)][_0x3b4784(0x56f)]['call'](this,_0x2c771c,_0x56bbbb);return $gameTemp['_bypassNewLabel']=![],_0x5e6d0f;},Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x3b3)]=function(_0x4aa275,_0x41782b){const _0x4941f1=_0x311a7f,_0x207bcc=this[_0x4941f1(0x299)](_0x4aa275);if(_0x207bcc<0x0)return;const _0x5d7ef8=_0x4aa275===0x1?$dataWeapons[_0x41782b]:$dataArmors[_0x41782b];this['changeEquip'](_0x207bcc,_0x5d7ef8);},Game_Actor['prototype'][_0x311a7f(0x299)]=function(_0x2de0f1){const _0x69f1df=_0x311a7f;let _0x5df139=0x0;const _0x4d72b8=this[_0x69f1df(0x565)](),_0x39368f=this['equips']();for(let _0x55b35b=0x0;_0x55b35b<_0x4d72b8[_0x69f1df(0x28c)];_0x55b35b++){if(_0x4d72b8[_0x55b35b]===_0x2de0f1){_0x5df139=_0x55b35b;if(!_0x39368f[_0x55b35b])return _0x5df139;}}return _0x5df139;},VisuMZ[_0x311a7f(0x604)]['Game_Actor_paramPlus']=Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x20d)],Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x20d)]=function(_0x2e54ba){const _0x2d1a04=_0x311a7f;let _0x4522e3=VisuMZ[_0x2d1a04(0x604)][_0x2d1a04(0x364)][_0x2d1a04(0x49e)](this,_0x2e54ba);for(const _0x361a56 of this[_0x2d1a04(0x662)]()){if(_0x361a56)_0x4522e3+=this[_0x2d1a04(0x477)](_0x361a56,_0x2e54ba);}return _0x4522e3;},Game_Actor[_0x311a7f(0x3bb)][_0x311a7f(0x477)]=function(_0x1068b3,_0x3b137c){const _0x1d89bb=_0x311a7f;if(this[_0x1d89bb(0x612)])return 0x0;const _0x3bd69e=(DataManager['isWeapon'](_0x1068b3)?_0x1d89bb(0x233):'A%1')[_0x1d89bb(0x46e)](_0x1068b3['id']),_0x1f2454=_0x1d89bb(0x303)[_0x1d89bb(0x46e)](_0x3bd69e,_0x3b137c);if(VisuMZ['ItemsEquipsCore'][_0x1d89bb(0x5e9)][_0x1f2454]){this[_0x1d89bb(0x612)]=!![];const _0x40ed94=VisuMZ[_0x1d89bb(0x604)][_0x1d89bb(0x5e9)][_0x1f2454][_0x1d89bb(0x49e)](this,_0x1068b3,_0x3b137c);return this[_0x1d89bb(0x612)]=![],_0x40ed94;}else return 0x0;},Game_Actor[_0x311a7f(0x3bb)]['setShopStatusWindowMode']=function(_0x47ff05){const _0x58025e=_0x311a7f;this[_0x58025e(0x66a)]=!![],this[_0x58025e(0x6aa)]=_0x47ff05;},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x20b)]=Game_Party[_0x311a7f(0x3bb)][_0x311a7f(0x49a)],Game_Party[_0x311a7f(0x3bb)][_0x311a7f(0x49a)]=function(){const _0x2dc5e8=_0x311a7f;VisuMZ[_0x2dc5e8(0x604)][_0x2dc5e8(0x20b)]['call'](this),this['initNewItemsList']();},Game_Party[_0x311a7f(0x3bb)][_0x311a7f(0x1d3)]=function(){const _0x324512=_0x311a7f;this[_0x324512(0x279)]=[];},Game_Party[_0x311a7f(0x3bb)]['isNewItem']=function(_0x97e929){const _0x4a3dbd=_0x311a7f;if(!$gameTemp[_0x4a3dbd(0x458)]())return![];if(this[_0x4a3dbd(0x279)]===undefined)this[_0x4a3dbd(0x1d3)]();let _0x1619b6='';if(DataManager[_0x4a3dbd(0x55a)](_0x97e929))_0x1619b6=_0x4a3dbd(0x446)[_0x4a3dbd(0x46e)](_0x97e929['id']);else{if(DataManager[_0x4a3dbd(0x512)](_0x97e929)){if(_0x4a3dbd(0x30b)!=='YkIxV')_0x1619b6=_0x4a3dbd(0x48f)[_0x4a3dbd(0x46e)](_0x97e929['id']);else{const _0x2c94ac=_0x4a3dbd(0x311);if(this[_0x4a3dbd(0x38d)][_0x2c94ac])return this[_0x4a3dbd(0x38d)][_0x2c94ac];const _0x32e450=_0x4a3dbd(0x4fd);return _0x32e450[_0x4a3dbd(0x46e)](this[_0x4a3dbd(0x2d6)][_0x4a3dbd(0x2a7)]);}}else{if(DataManager['isArmor'](_0x97e929))_0x1619b6=_0x4a3dbd(0x4bf)[_0x4a3dbd(0x46e)](_0x97e929['id']);else return;}}return this[_0x4a3dbd(0x279)]['includes'](_0x1619b6);},Game_Party[_0x311a7f(0x3bb)]['setNewItem']=function(_0x3b94e9){const _0x172929=_0x311a7f;if(!$gameTemp[_0x172929(0x458)]())return;if(this[_0x172929(0x279)]===undefined)this[_0x172929(0x1d3)]();let _0x14d75c='';if(DataManager[_0x172929(0x55a)](_0x3b94e9))_0x14d75c=_0x172929(0x446)[_0x172929(0x46e)](_0x3b94e9['id']);else{if(DataManager[_0x172929(0x512)](_0x3b94e9))_0x14d75c=_0x172929(0x48f)[_0x172929(0x46e)](_0x3b94e9['id']);else{if(DataManager[_0x172929(0x665)](_0x3b94e9))_0x14d75c=_0x172929(0x4bf)['format'](_0x3b94e9['id']);else return;}}if(!this['_newItemsList'][_0x172929(0x1f7)](_0x14d75c))this['_newItemsList'][_0x172929(0x300)](_0x14d75c);},Game_Party[_0x311a7f(0x3bb)]['clearNewItem']=function(_0x193789){const _0x5c3e6d=_0x311a7f;if(!$gameTemp['newLabelEnabled']())return;if(this['_newItemsList']===undefined)this[_0x5c3e6d(0x1d3)]();let _0x788ff5='';if(DataManager[_0x5c3e6d(0x55a)](_0x193789))_0x788ff5=_0x5c3e6d(0x446)[_0x5c3e6d(0x46e)](_0x193789['id']);else{if(DataManager[_0x5c3e6d(0x512)](_0x193789))_0x788ff5=_0x5c3e6d(0x48f)[_0x5c3e6d(0x46e)](_0x193789['id']);else{if(DataManager[_0x5c3e6d(0x665)](_0x193789)){if('KzfsN'!==_0x5c3e6d(0x452))_0x788ff5='armor-%1'['format'](_0x193789['id']);else{const _0x20e07b=_0x325e61(_0x3695c1['$1'])[_0x5c3e6d(0x5a1)]()[_0x5c3e6d(0x3df)](),_0x255e1f=_0x1ca17a(_0x1ec283['$2'])['trim']();this['_customItemInfo'][_0x20e07b]=_0x255e1f;}}else return;}}this[_0x5c3e6d(0x279)][_0x5c3e6d(0x1f7)](_0x788ff5)&&this['_newItemsList']['splice'](this[_0x5c3e6d(0x279)][_0x5c3e6d(0x2df)](_0x788ff5),0x1);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x33a)]=Game_Party[_0x311a7f(0x3bb)][_0x311a7f(0x5ed)],Game_Party[_0x311a7f(0x3bb)][_0x311a7f(0x5ed)]=function(_0x56df66){const _0x433aa5=_0x311a7f;if(DataManager['isProxyItem'](_0x56df66))_0x56df66=DataManager[_0x433aa5(0x427)](_0x56df66);return VisuMZ[_0x433aa5(0x604)][_0x433aa5(0x33a)][_0x433aa5(0x49e)](this,_0x56df66);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x5bc)]=Game_Party[_0x311a7f(0x3bb)][_0x311a7f(0x5ce)],Game_Party['prototype']['gainItem']=function(_0x44c633,_0x7259e9,_0x2a8ce0){const _0x35a4fb=_0x311a7f;if(DataManager['isProxyItem'](_0x44c633))_0x44c633=null;const _0x553d4a=this['numItems'](_0x44c633);VisuMZ[_0x35a4fb(0x604)]['Game_Party_gainItem']['call'](this,_0x44c633,_0x7259e9,_0x2a8ce0);if(this[_0x35a4fb(0x5ed)](_0x44c633)>_0x553d4a)this[_0x35a4fb(0x594)](_0x44c633);},Game_Party[_0x311a7f(0x3bb)][_0x311a7f(0x3f3)]=function(_0x39c9c2){const _0x36a482=_0x311a7f;if(DataManager['isProxyItem'](_0x39c9c2))_0x39c9c2=DataManager['getProxyItem'](_0x39c9c2);return DataManager[_0x36a482(0x1d1)](_0x39c9c2);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x2ed)]=Scene_ItemBase['prototype'][_0x311a7f(0x33b)],Scene_ItemBase[_0x311a7f(0x3bb)][_0x311a7f(0x33b)]=function(){const _0x2fa5bb=_0x311a7f;VisuMZ['ItemsEquipsCore']['Scene_ItemBase_activateItemWindow'][_0x2fa5bb(0x49e)](this),this[_0x2fa5bb(0x423)][_0x2fa5bb(0x4a1)]();},Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x509)]=function(){const _0x326faf=_0x311a7f;if(ConfigManager[_0x326faf(0x40c)]&&ConfigManager[_0x326faf(0x26c)]!==undefined)return ConfigManager['uiHelpPosition'];else{if(this[_0x326faf(0x641)]())return this[_0x326faf(0x1e4)]()[_0x326faf(0x260)](/LOWER/i);else{if('sRvXi'!==_0x326faf(0x5d2)){if(this[_0x326faf(0x2d6)][_0x326faf(0x5b3)][_0x326faf(0x260)](/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)){const _0x56a3fd=_0x3ae0c6(_0x18d653['$1'])[_0x326faf(0x51a)](/[\r\n]+/);for(const _0x1609b5 of _0x56a3fd){if(_0x1609b5[_0x326faf(0x260)](/(.*):[ ](.*)/i)){const _0x44b20e=_0x19169e(_0x2df237['$1'])[_0x326faf(0x3df)](),_0x105367=_0x53b00d(_0x32841d['$2'])[_0x326faf(0x3df)]();this[_0x326faf(0x579)](_0x44b20e,_0x105367,_0x5c7564,_0x28d01a,_0x320a67),_0x38b1ed+=this[_0x326faf(0x640)]();}}}return this['resetFontSettings'](),_0x45046a;}else return Scene_ItemBase[_0x326faf(0x3bb)][_0x326faf(0x65c)][_0x326faf(0x49e)](this);}}},Scene_Item[_0x311a7f(0x3bb)]['isRightInputMode']=function(){const _0x41ccfb=_0x311a7f;if(ConfigManager[_0x41ccfb(0x40c)]&&ConfigManager[_0x41ccfb(0x5c3)]!==undefined)return ConfigManager[_0x41ccfb(0x5c3)];else{if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x41ccfb(0x55c)==='iZiwU')_0x541dcd=_0x11b967['ItemsEquipsCore'][_0x41ccfb(0x5cc)]['Categories'][_0x33b1e1];else return this['updatedLayoutStyle']()['match'](/RIGHT/i);}else return Scene_ItemBase['prototype'][_0x41ccfb(0x65c)][_0x41ccfb(0x49e)](this);}},Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x1e4)]=function(){const _0x41aff8=_0x311a7f;return VisuMZ[_0x41aff8(0x604)]['Settings'][_0x41aff8(0x648)][_0x41aff8(0x26a)];},Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x5e7)]=function(){const _0x1ef4d3=_0x311a7f;return this[_0x1ef4d3(0x609)]&&this['_categoryWindow'][_0x1ef4d3(0x5e7)]();},Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x641)]=function(){const _0x201de4=_0x311a7f;return VisuMZ[_0x201de4(0x604)]['Settings'][_0x201de4(0x648)][_0x201de4(0x35b)];},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x3e9)]=Scene_Item[_0x311a7f(0x3bb)]['create'],Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x237)]=function(){const _0x477bce=_0x311a7f;VisuMZ[_0x477bce(0x604)][_0x477bce(0x3e9)][_0x477bce(0x49e)](this),this['isUseModernControls']()&&this['onCategoryOk']();},VisuMZ['ItemsEquipsCore'][_0x311a7f(0x504)]=Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x438)],Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x438)]=function(){const _0x2102a8=_0x311a7f;if(this[_0x2102a8(0x641)]()){if(_0x2102a8(0x528)!==_0x2102a8(0x528))_0x2a5594[_0x377894]=_0x343ba8[_0xf2ff5];else return this['helpWindowRectItemsEquipsCore']();}else return'ItMvc'==='hmqGp'?this[_0x2102a8(0x30e)]():VisuMZ[_0x2102a8(0x604)]['Scene_Item_helpWindowRect'][_0x2102a8(0x49e)](this);},Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x309)]=function(){const _0x4eb574=_0x311a7f,_0x286b6c=0x0,_0x5c71dc=this['helpAreaTop'](),_0x5d5278=Graphics['boxWidth'],_0x2afd71=this[_0x4eb574(0x24e)]();return new Rectangle(_0x286b6c,_0x5c71dc,_0x5d5278,_0x2afd71);},VisuMZ[_0x311a7f(0x604)]['Scene_Item_createCategoryWindow']=Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x5cd)],Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x5cd)]=function(){const _0x13d3dc=_0x311a7f;VisuMZ[_0x13d3dc(0x604)][_0x13d3dc(0x55b)][_0x13d3dc(0x49e)](this);if(this[_0x13d3dc(0x5e7)]()){if(_0x13d3dc(0x3aa)===_0x13d3dc(0x3aa))this[_0x13d3dc(0x291)]();else return this[_0x13d3dc(0x2d6)][_0x13d3dc(0x658)]*this[_0x13d3dc(0x3d7)]();}},Scene_Item[_0x311a7f(0x3bb)]['postCreateCategoryWindowItemsEquipsCore']=function(){const _0x35956e=_0x311a7f;delete this[_0x35956e(0x609)][_0x35956e(0x503)]['ok'],delete this[_0x35956e(0x609)]['_handlers'][_0x35956e(0x1fa)];},VisuMZ[_0x311a7f(0x604)]['Scene_Item_categoryWindowRect']=Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x3d4)],Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x3d4)]=function(){const _0x27022b=_0x311a7f;return this[_0x27022b(0x641)]()?this['categoryWindowRectItemsEquipsCore']():VisuMZ[_0x27022b(0x604)]['Scene_Item_categoryWindowRect']['call'](this);},Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x62d)]=function(){const _0x51d467=_0x311a7f,_0x510bba=0x0,_0x2eaa02=this['mainAreaTop'](),_0x2f1efd=Graphics[_0x51d467(0x610)],_0x4342b2=this['calcWindowHeight'](0x1,!![]);return new Rectangle(_0x510bba,_0x2eaa02,_0x2f1efd,_0x4342b2);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x47d)]=Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x380)],Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x380)]=function(){const _0x48a346=_0x311a7f;VisuMZ[_0x48a346(0x604)][_0x48a346(0x47d)][_0x48a346(0x49e)](this);if(this[_0x48a346(0x5e7)]()){if(_0x48a346(0x3d3)===_0x48a346(0x31e)){const _0x4e2645=_0x48a346(0x360);if(this['_itemData']['rateMP']<=0x0&&this[_0x48a346(0x3db)][_0x48a346(0x47c)]<=0x0&&!this[_0x48a346(0x38d)][_0x4e2645])return![];const _0x20f301=this[_0x48a346(0x3d8)]();this['drawItemKeyData'](_0x20f301,_0x4ea37f,_0x56c8fa,_0x2dd0db,!![]);const _0x2ab5a6=this[_0x48a346(0x59f)]();return this[_0x48a346(0x636)](_0x2ac94b[_0x48a346(0x392)](0x3)),this[_0x48a346(0x2ff)](_0x2ab5a6,_0x58896b,_0x105eea,_0x55f4a8,![],'right'),this[_0x48a346(0x37e)](_0x416216,_0x276134,_0x38d362),this[_0x48a346(0x560)](),!![];}else this[_0x48a346(0x43f)]();}this['allowCreateStatusWindow']()&&(_0x48a346(0x582)===_0x48a346(0x582)?this[_0x48a346(0x678)]():this[_0x48a346(0x1e3)]());},VisuMZ['ItemsEquipsCore'][_0x311a7f(0x54c)]=Scene_Item['prototype'][_0x311a7f(0x251)],Scene_Item[_0x311a7f(0x3bb)]['itemWindowRect']=function(){const _0x1c89d1=_0x311a7f;if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x1c89d1(0x631)]();else{const _0x29ad4e=VisuMZ[_0x1c89d1(0x604)]['Scene_Item_itemWindowRect'][_0x1c89d1(0x49e)](this);return this[_0x1c89d1(0x56e)]()&&this[_0x1c89d1(0x263)]()&&(_0x29ad4e[_0x1c89d1(0x1f0)]-=this[_0x1c89d1(0x2ad)]()),_0x29ad4e;}},Scene_Item['prototype'][_0x311a7f(0x631)]=function(){const _0xa7e166=_0x311a7f,_0x3b0a38=this[_0xa7e166(0x65c)]()?this[_0xa7e166(0x2ad)]():0x0,_0x1bdf83=this[_0xa7e166(0x609)]['y']+this[_0xa7e166(0x609)][_0xa7e166(0x3f6)],_0x4ddbb0=Graphics[_0xa7e166(0x610)]-this['statusWidth'](),_0x2a3a4b=this[_0xa7e166(0x47e)]()-_0x1bdf83;return new Rectangle(_0x3b0a38,_0x1bdf83,_0x4ddbb0,_0x2a3a4b);},Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x43f)]=function(){const _0x1f9b03=_0x311a7f;this['_itemWindow'][_0x1f9b03(0x5b1)](_0x1f9b03(0x1fa),this[_0x1f9b03(0x1de)]['bind'](this));},Scene_Item[_0x311a7f(0x3bb)]['allowCreateStatusWindow']=function(){const _0x4e1392=_0x311a7f;return this[_0x4e1392(0x641)]()?!![]:VisuMZ[_0x4e1392(0x604)]['Settings'][_0x4e1392(0x648)][_0x4e1392(0x1dc)];},Scene_Item['prototype'][_0x311a7f(0x263)]=function(){const _0x2140f=_0x311a7f;return VisuMZ[_0x2140f(0x604)]['Settings'][_0x2140f(0x648)][_0x2140f(0x6a3)];},Scene_Item['prototype']['createStatusWindow']=function(){const _0x24704f=_0x311a7f,_0x5b017c=this[_0x24704f(0x659)]();this['_statusWindow']=new Window_ShopStatus(_0x5b017c),this['addWindow'](this['_statusWindow']),this[_0x24704f(0x423)][_0x24704f(0x5d3)](this['_statusWindow']);const _0x442dba=VisuMZ['ItemsEquipsCore']['Settings'][_0x24704f(0x648)][_0x24704f(0x3e8)];this['_statusWindow'][_0x24704f(0x2bb)](_0x442dba||0x0);},Scene_Item[_0x311a7f(0x3bb)]['statusWindowRect']=function(){const _0x1f6e77=_0x311a7f;if(this[_0x1f6e77(0x641)]()){if(_0x1f6e77(0x679)!==_0x1f6e77(0x4e8))return this[_0x1f6e77(0x256)]();else _0x1f34a5=this[_0x1f6e77(0x476)][_0x1f6e77(0x416)](_0x47b786,![]),_0x441faa=this['_tempActor'][_0x1f6e77(0x416)](_0x18f43d,![]),_0x46800f=_0x52a20b(this['_actor'][_0x1f6e77(0x416)](_0x595a79,!![]))[_0x1f6e77(0x260)](/([%％])/i);}else return _0x1f6e77(0x280)!==_0x1f6e77(0x2c6)?VisuMZ['ItemsEquipsCore'][_0x1f6e77(0x5cc)][_0x1f6e77(0x648)][_0x1f6e77(0x38a)][_0x1f6e77(0x49e)](this):_0x189e99[_0x1f6e77(0x604)][_0x1f6e77(0x5cc)][_0x1f6e77(0x4a2)][_0x1f6e77(0x5b2)];},Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x256)]=function(){const _0x44ebf3=_0x311a7f,_0x2c573d=this[_0x44ebf3(0x2ad)](),_0x336499=this['_itemWindow'][_0x44ebf3(0x3f6)],_0x34ab37=this[_0x44ebf3(0x65c)]()?0x0:Graphics[_0x44ebf3(0x610)]-this[_0x44ebf3(0x2ad)](),_0x56db88=this[_0x44ebf3(0x423)]['y'];return new Rectangle(_0x34ab37,_0x56db88,_0x2c573d,_0x336499);},Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x2ad)]=function(){const _0x5d719d=_0x311a7f;return Scene_Shop[_0x5d719d(0x3bb)][_0x5d719d(0x2ad)]();},Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x296)]=function(){const _0x2f02fb=_0x311a7f;if(!this[_0x2f02fb(0x1e4)]())return![];if(!this[_0x2f02fb(0x5e7)]())return![];if(!this['_itemWindow'])return![];if(!this['_itemWindow'][_0x2f02fb(0x2cb)])return![];return this[_0x2f02fb(0x1e4)]()&&this[_0x2f02fb(0x5e7)]();},Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x24c)]=function(){const _0x280adc=_0x311a7f;if(this[_0x280adc(0x296)]()){if(this[_0x280adc(0x423)][_0x280adc(0x376)]()===0x1)return TextManager[_0x280adc(0x688)](_0x280adc(0x6a5),_0x280adc(0x5e1));else{if(_0x280adc(0x644)===_0x280adc(0x644))return TextManager[_0x280adc(0x688)](_0x280adc(0x538),_0x280adc(0x21a));else _0xd6ee86[_0x280adc(0x604)]['Scene_Equip_onSlotOk'][_0x280adc(0x49e)](this),this[_0x280adc(0x43b)]();}}return Scene_ItemBase[_0x280adc(0x3bb)][_0x280adc(0x24c)][_0x280adc(0x49e)](this);},Scene_Item[_0x311a7f(0x3bb)][_0x311a7f(0x684)]=function(){const _0x6c4151=_0x311a7f;if(this[_0x6c4151(0x296)]())return VisuMZ[_0x6c4151(0x604)][_0x6c4151(0x5cc)][_0x6c4151(0x648)]['buttonAssistCategory'];return Scene_ItemBase[_0x6c4151(0x3bb)][_0x6c4151(0x684)]['call'](this);},Scene_Equip[_0x311a7f(0x3bb)]['isBottomHelpMode']=function(){const _0xc29eb4=_0x311a7f;if(ConfigManager[_0xc29eb4(0x40c)]&&ConfigManager[_0xc29eb4(0x26c)]!==undefined)return ConfigManager[_0xc29eb4(0x26c)];else{if(this[_0xc29eb4(0x641)]())return this['updatedLayoutStyle']()['match'](/LOWER/i);else{if('kdLNe'===_0xc29eb4(0x404)){const _0x1ca864=this[_0xc29eb4(0x658)](_0x4ccead);this[_0xc29eb4(0x47f)](_0x1ca864,_0x47481d['currencyUnit'],_0x3dfba8['x'],_0x1d71db['y'],_0x4a1d06[_0xc29eb4(0x1f0)]);}else Scene_MenuBase[_0xc29eb4(0x3bb)][_0xc29eb4(0x65c)]['call'](this);}}},Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x65c)]=function(){const _0x8fff2a=_0x311a7f;if(ConfigManager[_0x8fff2a(0x40c)]&&ConfigManager[_0x8fff2a(0x5c3)]!==undefined)return ConfigManager[_0x8fff2a(0x5c3)];else{if(this[_0x8fff2a(0x641)]()){if(_0x8fff2a(0x52c)!==_0x8fff2a(0x52c)){if(!this[_0x8fff2a(0x431)](_0x406ca0))return![];const _0x253140=_0x159b8d[_0x8fff2a(0x5b3)];if(!_0x253140)return![];if(_0x253140['match'](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x253140['match'](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];}else return this[_0x8fff2a(0x1e4)]()[_0x8fff2a(0x260)](/RIGHT/i);}else{if(_0x8fff2a(0x33e)===_0x8fff2a(0x3af))return![];else Scene_MenuBase['prototype'][_0x8fff2a(0x65c)][_0x8fff2a(0x49e)](this);}}},Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x1e4)]=function(){const _0xb0143c=_0x311a7f;return VisuMZ[_0xb0143c(0x604)][_0xb0143c(0x5cc)][_0xb0143c(0x4bd)][_0xb0143c(0x26a)];},Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x5e7)]=function(){const _0x263ee2=_0x311a7f;return this[_0x263ee2(0x2dc)]&&this[_0x263ee2(0x2dc)][_0x263ee2(0x5e7)]();},Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x641)]=function(){const _0x19685b=_0x311a7f;return VisuMZ['ItemsEquipsCore'][_0x19685b(0x5cc)][_0x19685b(0x4bd)][_0x19685b(0x35b)];},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x221)]=Scene_Equip[_0x311a7f(0x3bb)]['create'],Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x237)]=function(){const _0x37eb4b=_0x311a7f;VisuMZ['ItemsEquipsCore']['Scene_Equip_create'][_0x37eb4b(0x49e)](this),this[_0x37eb4b(0x5e7)]()&&(_0x37eb4b(0x348)===_0x37eb4b(0x348)?this[_0x37eb4b(0x628)]():this[_0x37eb4b(0x650)](_0x597a86));},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x4bb)]=Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x438)],Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x438)]=function(){const _0x38d48a=_0x311a7f;return this[_0x38d48a(0x641)]()?this[_0x38d48a(0x309)]():VisuMZ[_0x38d48a(0x604)][_0x38d48a(0x4bb)]['call'](this);},Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x309)]=function(){const _0x402b29=_0x311a7f,_0x21be31=0x0,_0x448e9e=this[_0x402b29(0x29c)](),_0xada5b1=Graphics[_0x402b29(0x610)],_0x48db3b=this[_0x402b29(0x24e)]();return new Rectangle(_0x21be31,_0x448e9e,_0xada5b1,_0x48db3b);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x670)]=Scene_Equip['prototype'][_0x311a7f(0x659)],Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x659)]=function(){const _0x5032c3=_0x311a7f;if(this[_0x5032c3(0x641)]()){if(_0x5032c3(0x3ef)===_0x5032c3(0x3ef))return this[_0x5032c3(0x256)]();else this[_0x5032c3(0x609)][_0x5032c3(0x4ff)]();}else return VisuMZ[_0x5032c3(0x604)][_0x5032c3(0x670)][_0x5032c3(0x49e)](this);},Scene_Equip['prototype'][_0x311a7f(0x256)]=function(){const _0x2f2fc8=_0x311a7f,_0x5d9fe1=this['isRightInputMode']()?0x0:Graphics[_0x2f2fc8(0x610)]-this[_0x2f2fc8(0x2ad)](),_0x26a0f0=this['mainAreaTop'](),_0x581789=this[_0x2f2fc8(0x2ad)](),_0x1566b8=this[_0x2f2fc8(0x4ac)]();return new Rectangle(_0x5d9fe1,_0x26a0f0,_0x581789,_0x1566b8);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x2fe)]=Scene_Equip[_0x311a7f(0x3bb)]['createCommandWindow'],Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x328)]=function(){const _0x3bf68a=_0x311a7f;VisuMZ[_0x3bf68a(0x604)][_0x3bf68a(0x2fe)][_0x3bf68a(0x49e)](this);if(this[_0x3bf68a(0x32e)])this[_0x3bf68a(0x2dc)][_0x3bf68a(0x455)](this[_0x3bf68a(0x32e)]);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x48b)]=Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x202)],Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x202)]=function(){const _0x31b357=_0x311a7f;if(this[_0x31b357(0x641)]()){if(_0x31b357(0x5cb)==='qDMTr')return this[_0x31b357(0x27f)]();else{if(_0x1342f6['isKeyItem'](_0x1f9375))return _0x57e0b3[_0x31b357(0x687)];return!![];}}else{if('zEamf'===_0x31b357(0x531))for(const _0x241fda of _0xdc6f1['values'](this['_newLabelSprites'])){_0x241fda[_0x31b357(0x573)]();}else return VisuMZ[_0x31b357(0x604)][_0x31b357(0x48b)]['call'](this);}},Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x5c2)]=function(){const _0x541587=_0x311a7f,_0x3cab30=VisuMZ[_0x541587(0x604)]['Settings'][_0x541587(0x4bd)];return _0x3cab30['CommandAddOptimize']||_0x3cab30[_0x541587(0x60a)];},Scene_Equip['prototype']['commandWindowRectItemsEquipsCore']=function(){const _0x578eea=_0x311a7f,_0x50cc0f=this[_0x578eea(0x5c2)](),_0x20be85=this['isRightInputMode']()?this[_0x578eea(0x2ad)]():0x0,_0x314efe=this[_0x578eea(0x660)](),_0x318aa7=Graphics['boxWidth']-this[_0x578eea(0x2ad)](),_0x533dc7=_0x50cc0f?this[_0x578eea(0x57e)](0x1,!![]):0x0;return new Rectangle(_0x20be85,_0x314efe,_0x318aa7,_0x533dc7);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x22c)]=Scene_Equip['prototype'][_0x311a7f(0x211)],Scene_Equip['prototype'][_0x311a7f(0x211)]=function(){const _0x2dd9e3=_0x311a7f;VisuMZ[_0x2dd9e3(0x604)][_0x2dd9e3(0x22c)]['call'](this),this[_0x2dd9e3(0x5e7)]()&&this[_0x2dd9e3(0x229)]();},VisuMZ[_0x311a7f(0x604)]['Scene_Equip_slotWindowRect']=Scene_Equip['prototype'][_0x311a7f(0x2fb)],Scene_Equip['prototype'][_0x311a7f(0x2fb)]=function(){const _0x423a9d=_0x311a7f;if(this['isUseItemsEquipsCoreUpdatedLayout']())return'hmUTA'!=='hmUTA'?_0x50382a(_0x2430c2['$1']):this[_0x423a9d(0x324)]();else{if('rbXPC'!==_0x423a9d(0x62c))this[_0x423a9d(0x57d)](0x0,0x0);else return VisuMZ[_0x423a9d(0x604)]['Scene_Equip_slotWindowRect'][_0x423a9d(0x49e)](this);}},Scene_Equip['prototype']['slotWindowRectItemsEquipsCore']=function(){const _0x1e87a0=_0x311a7f,_0x4a101b=this['commandWindowRect'](),_0x4a5f42=this[_0x1e87a0(0x65c)]()?this['statusWidth']():0x0,_0x3e3733=_0x4a101b['y']+_0x4a101b['height'],_0x11c060=Graphics['boxWidth']-this[_0x1e87a0(0x2ad)](),_0x523fe9=this['mainAreaHeight']()-_0x4a101b[_0x1e87a0(0x3f6)];return new Rectangle(_0x4a5f42,_0x3e3733,_0x11c060,_0x523fe9);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x4d4)]=Scene_Equip[_0x311a7f(0x3bb)]['itemWindowRect'],Scene_Equip[_0x311a7f(0x3bb)]['itemWindowRect']=function(){const _0x1b42a4=_0x311a7f;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x1b42a4(0x2fb)]():_0x1b42a4(0x519)==='JopUX'?VisuMZ[_0x1b42a4(0x604)][_0x1b42a4(0x4d4)]['call'](this):this[_0x1b42a4(0x35e)](_0x3faa27);},Scene_Equip['prototype']['statusWidth']=function(){const _0x1d75a4=_0x311a7f;if(this[_0x1d75a4(0x641)]())return this[_0x1d75a4(0x201)]();else{if('CvseF'===_0x1d75a4(0x26d))return VisuMZ[_0x1d75a4(0x604)]['Settings']['EquipScene'][_0x1d75a4(0x683)];else _0x52241e=_0x1d75a4(0x4bf)[_0x1d75a4(0x46e)](_0x4827fb['id']);}},Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x201)]=function(){const _0x159bb0=_0x311a7f;return Math['floor'](Graphics[_0x159bb0(0x610)]/0x2);},Scene_Equip[_0x311a7f(0x3bb)]['postCreateSlotWindowItemsEquipsCore']=function(){const _0x3bad18=_0x311a7f;this[_0x3bad18(0x564)][_0x3bad18(0x5b1)](_0x3bad18(0x1fa),this['popScene'][_0x3bad18(0x451)](this)),this['_slotWindow']['setHandler'](_0x3bad18(0x21a),this['nextActor'][_0x3bad18(0x451)](this)),this['_slotWindow'][_0x3bad18(0x5b1)](_0x3bad18(0x538),this[_0x3bad18(0x2b1)][_0x3bad18(0x451)](this));},VisuMZ[_0x311a7f(0x604)]['Scene_Equip_commandEquip']=Scene_Equip[_0x311a7f(0x3bb)]['commandEquip'],Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x628)]=function(){const _0x49cd9f=_0x311a7f;this[_0x49cd9f(0x5e7)]()&&(_0x49cd9f(0x5b9)!==_0x49cd9f(0x297)?(this[_0x49cd9f(0x2dc)][_0x49cd9f(0x4e1)](),this[_0x49cd9f(0x2dc)][_0x49cd9f(0x557)]()):this[_0x49cd9f(0x269)](_0x279559)),VisuMZ[_0x49cd9f(0x604)]['Scene_Equip_commandEquip'][_0x49cd9f(0x49e)](this);},VisuMZ['ItemsEquipsCore'][_0x311a7f(0x2e3)]=Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x215)],Scene_Equip[_0x311a7f(0x3bb)]['onSlotOk']=function(){const _0x1c7db7=_0x311a7f;if(this['_slotWindow'][_0x1c7db7(0x5c8)]()>=0x0)VisuMZ[_0x1c7db7(0x604)][_0x1c7db7(0x2e3)][_0x1c7db7(0x49e)](this),this['onSlotOkAutoSelect']();else{if('apQfk'==='jVzLN')return _0x25c18c[_0x1c7db7(0x688)](_0x1c7db7(0x6a5),'right');else this[_0x1c7db7(0x564)][_0x1c7db7(0x373)](0x0),this[_0x1c7db7(0x564)]['activate']();}},Scene_Equip['prototype']['onSlotOkAutoSelect']=function(){const _0x125e86=_0x311a7f;this[_0x125e86(0x423)][_0x125e86(0x4d8)]();const _0x4b4634=this[_0x125e86(0x564)]['item'](),_0x171699=this[_0x125e86(0x423)][_0x125e86(0x67f)][_0x125e86(0x2df)](_0x4b4634),_0x130139=Math[_0x125e86(0x58f)](this['_itemWindow'][_0x125e86(0x633)]()/0x2)-0x1;this[_0x125e86(0x423)]['smoothSelect'](_0x171699>=0x0?_0x171699:0x0),this[_0x125e86(0x423)][_0x125e86(0x4bc)]>0x1&&(this[_0x125e86(0x423)][_0x125e86(0x4bc)]=0x1,this[_0x125e86(0x423)][_0x125e86(0x3b9)]()),this[_0x125e86(0x423)]['setTopRow'](this['_itemWindow'][_0x125e86(0x5c8)]()-_0x130139);},VisuMZ['ItemsEquipsCore']['Scene_Equip_onSlotCancel']=Scene_Equip[_0x311a7f(0x3bb)]['onSlotCancel'],Scene_Equip[_0x311a7f(0x3bb)]['onSlotCancel']=function(){const _0x36bec3=_0x311a7f;VisuMZ[_0x36bec3(0x604)][_0x36bec3(0x5d9)][_0x36bec3(0x49e)](this),this[_0x36bec3(0x5e7)]()&&(_0x36bec3(0x3ad)===_0x36bec3(0x3ad)?(this[_0x36bec3(0x2dc)][_0x36bec3(0x373)](0x0),this[_0x36bec3(0x564)][_0x36bec3(0x557)]()):_0x266d87['push'](_0x15ad29));},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x51d)]=Scene_Equip[_0x311a7f(0x3bb)]['onActorChange'],Scene_Equip[_0x311a7f(0x3bb)]['onActorChange']=function(){const _0x2bfde1=_0x311a7f;VisuMZ['ItemsEquipsCore']['Scene_Equip_onActorChange']['call'](this),this[_0x2bfde1(0x5e7)]()&&(this[_0x2bfde1(0x2dc)]['deactivate'](),this[_0x2bfde1(0x2dc)][_0x2bfde1(0x4e1)](),this[_0x2bfde1(0x564)][_0x2bfde1(0x373)](0x0),this[_0x2bfde1(0x564)][_0x2bfde1(0x5d0)]());},Scene_Equip['prototype']['buttonAssistSlotWindowShift']=function(){const _0x5184db=_0x311a7f;if(!this[_0x5184db(0x564)])return![];if(!this['_slotWindow'][_0x5184db(0x2cb)])return![];return this['_slotWindow'][_0x5184db(0x545)]();},Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x681)]=function(){const _0x4be9f7=_0x311a7f;if(this['buttonAssistSlotWindowShift']())return TextManager[_0x4be9f7(0x23f)](_0x4be9f7(0x54b));return Scene_MenuBase[_0x4be9f7(0x3bb)][_0x4be9f7(0x681)][_0x4be9f7(0x49e)](this);},Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x697)]=function(){const _0x10bc3d=_0x311a7f;if(this[_0x10bc3d(0x312)]())return VisuMZ['ItemsEquipsCore'][_0x10bc3d(0x5cc)][_0x10bc3d(0x4bd)][_0x10bc3d(0x434)];return Scene_MenuBase[_0x10bc3d(0x3bb)][_0x10bc3d(0x697)][_0x10bc3d(0x49e)](this);},Scene_Equip[_0x311a7f(0x3bb)][_0x311a7f(0x643)]=function(){const _0x327615=_0x311a7f;if(this['buttonAssistSlotWindowShift']())return this[_0x327615(0x39d)][_0x327615(0x1f0)]/0x5/-0x3;return Scene_MenuBase[_0x327615(0x3bb)][_0x327615(0x643)]['call'](this);},Scene_Equip[_0x311a7f(0x3bb)]['popScene']=function(){SceneManager['pop']();},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x47a)]=Scene_Load['prototype'][_0x311a7f(0x3fc)],Scene_Load['prototype'][_0x311a7f(0x3fc)]=function(){const _0x35c3d5=_0x311a7f;VisuMZ[_0x35c3d5(0x604)][_0x35c3d5(0x47a)][_0x35c3d5(0x49e)](this),this[_0x35c3d5(0x4f7)]();},Scene_Load['prototype']['refreshActorEquipSlotsIfUpdated']=function(){const _0x31712e=_0x311a7f;if($gameSystem[_0x31712e(0x424)]()!==$dataSystem[_0x31712e(0x424)])for(const _0x59ff57 of $gameActors['_data']){if(_0x31712e(0x454)===_0x31712e(0x454)){if(_0x59ff57)_0x59ff57[_0x31712e(0x676)]();}else{_0x28897e=_0x51fc8c;if(!_0x212b12[_0x274d55])return _0x1c3a29;}}},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x509)]=function(){const _0x2be8a8=_0x311a7f;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x2be8a8(0x26c)]!==undefined)return ConfigManager[_0x2be8a8(0x26c)];else{if(this[_0x2be8a8(0x641)]())return this[_0x2be8a8(0x1e4)]()[_0x2be8a8(0x260)](/LOWER/i);else Scene_MenuBase['prototype'][_0x2be8a8(0x65c)][_0x2be8a8(0x49e)](this);}},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x65c)]=function(){const _0x4ec992=_0x311a7f;if(ConfigManager[_0x4ec992(0x40c)]&&ConfigManager[_0x4ec992(0x5c3)]!==undefined)return ConfigManager[_0x4ec992(0x5c3)];else{if(this[_0x4ec992(0x641)]())return this[_0x4ec992(0x1e4)]()['match'](/RIGHT/i);else Scene_MenuBase[_0x4ec992(0x3bb)][_0x4ec992(0x65c)]['call'](this);}},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x1e4)]=function(){const _0x2963cc=_0x311a7f;return VisuMZ['ItemsEquipsCore']['Settings']['ShopScene'][_0x2963cc(0x26a)];},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x5e7)]=function(){return this['_categoryWindow']&&this['_categoryWindow']['isUseModernControls']();},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x641)]=function(){const _0x8b7530=_0x311a7f;return VisuMZ[_0x8b7530(0x604)][_0x8b7530(0x5cc)][_0x8b7530(0x470)][_0x8b7530(0x35b)];},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x473)]=Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x435)],Scene_Shop[_0x311a7f(0x3bb)]['prepare']=function(_0x29af8c,_0x9e1b0){const _0x40c293=_0x311a7f;_0x29af8c=JsonEx['makeDeepCopy'](_0x29af8c),VisuMZ[_0x40c293(0x604)][_0x40c293(0x473)][_0x40c293(0x49e)](this,_0x29af8c,_0x9e1b0),this[_0x40c293(0x49f)]();},Scene_Shop[_0x311a7f(0x3bb)]['adjustHiddenShownGoods']=function(){const _0x5015a4=_0x311a7f;this[_0x5015a4(0x36a)]=0x0;const _0x5f56a8=[];for(const _0xdeffa8 of this[_0x5015a4(0x3bc)]){if(this['isGoodShown'](_0xdeffa8)){if('iWDRx'==='iWDRx')this[_0x5015a4(0x36a)]++;else{const _0x509f9f=this[_0x5015a4(0x243)];_0x509f9f[_0x5015a4(0x2ca)]['clear']();const _0x1b5c4f=this[_0x5015a4(0x5dc)](this[_0x5015a4(0x5c8)]());if(_0x1b5c4f===_0x5015a4(0x2fd)){const _0x4b38bc=this[_0x5015a4(0x574)](this[_0x5015a4(0x5c8)]());let _0x263941=this[_0x5015a4(0x235)](this[_0x5015a4(0x5c8)]());_0x263941=_0x263941['replace'](/\\I\[(\d+)\]/gi,''),_0x509f9f[_0x5015a4(0x560)](),this[_0x5015a4(0x372)](_0x263941,_0x4b38bc),this['commandNameWindowDrawText'](_0x263941,_0x4b38bc),this['commandNameWindowCenter'](_0x263941,_0x4b38bc);}}}else _0x5015a4(0x4e4)===_0x5015a4(0x4e4)?_0x5f56a8[_0x5015a4(0x300)](_0xdeffa8):(_0x4bc9de=_0x303e57[_0x5015a4(0x416)](_0x28f1ba),_0xcade93=_0x30fa10-_0x5972ec[_0x5015a4(0x416)](_0x21db03),this['changeTextColor'](_0x348252[_0x5015a4(0x4f3)](_0x4fb909)),_0x273fd1=(_0x3d632c>=0x0?'+':'')+_0x238e7f['ConvertNumberToString'](_0x457d1c,0x0,_0x4331b5));}for(const _0x5d1768 of _0x5f56a8){this['_goods'][_0x5015a4(0x375)](_0x5d1768);}},Scene_Shop['prototype']['isGoodShown']=function(_0x253851){const _0x203997=_0x311a7f;if(_0x253851[0x0]>0x2||_0x253851[0x0]<0x0)return![];const _0x5a9660=[$dataItems,$dataWeapons,$dataArmors][_0x253851[0x0]][_0x253851[0x1]];if(!_0x5a9660)return![];const _0x339367=_0x5a9660['note']||'';if(_0x339367[_0x203997(0x260)](/<SHOW SHOP[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x203997(0x244)!=='qdsor'){const _0x708ecc=JSON[_0x203997(0x5e8)]('['+RegExp['$1'][_0x203997(0x260)](/\d+/g)+']');for(const _0x2d5626 of _0x708ecc){if(!$gameSwitches[_0x203997(0x43a)](_0x2d5626))return![];}return!![];}else return this[_0x203997(0x62d)]();}if(_0x339367[_0x203997(0x260)](/<SHOW SHOP ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4e5e1d=JSON[_0x203997(0x5e8)]('['+RegExp['$1'][_0x203997(0x260)](/\d+/g)+']');for(const _0x2f3bf3 of _0x4e5e1d){if(!$gameSwitches['value'](_0x2f3bf3))return![];}return!![];}if(_0x339367[_0x203997(0x260)](/<SHOW SHOP ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x10bcd8=JSON[_0x203997(0x5e8)]('['+RegExp['$1'][_0x203997(0x260)](/\d+/g)+']');for(const _0x265069 of _0x10bcd8){if($gameSwitches[_0x203997(0x43a)](_0x265069))return!![];}return![];}if(_0x339367['match'](/<HIDE SHOP[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5480d8=JSON[_0x203997(0x5e8)]('['+RegExp['$1'][_0x203997(0x260)](/\d+/g)+']');for(const _0x24c281 of _0x5480d8){if(_0x203997(0x355)!==_0x203997(0x27b)){if(!$gameSwitches[_0x203997(0x43a)](_0x24c281))return!![];}else _0x4e3e99[_0x203997(0x3bb)][_0x203997(0x556)][_0x203997(0x49e)](this);}return![];}if(_0x339367['match'](/<HIDE SHOP ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xb29aee=JSON['parse']('['+RegExp['$1'][_0x203997(0x260)](/\d+/g)+']');for(const _0x197791 of _0xb29aee){if(!$gameSwitches[_0x203997(0x43a)](_0x197791))return!![];}return![];}if(_0x339367[_0x203997(0x260)](/<HIDE SHOP ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x46b346=JSON[_0x203997(0x5e8)]('['+RegExp['$1'][_0x203997(0x260)](/\d+/g)+']');for(const _0x9f5009 of _0x46b346){if(_0x203997(0x1f1)!==_0x203997(0x1f1))this['postCreateItemsEquipsCore']();else{if($gameSwitches[_0x203997(0x43a)](_0x9f5009))return![];}}return!![];}return!![];},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x5c5)]=Scene_Shop['prototype'][_0x311a7f(0x237)],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x237)]=function(){const _0x541ae4=_0x311a7f;VisuMZ[_0x541ae4(0x604)][_0x541ae4(0x5c5)]['call'](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this['postCreateItemsEquipsCore'](),this[_0x541ae4(0x3ce)]();},Scene_Shop[_0x311a7f(0x3bb)]['postCreateItemsEquipsCore']=function(){const _0x555056=_0x311a7f;this[_0x555056(0x5d6)]['hide'](),this['_buyWindow'][_0x555056(0x4ff)](),this['_buyWindow'][_0x555056(0x4e1)](),this[_0x555056(0x495)][_0x555056(0x4ff)]();},VisuMZ[_0x311a7f(0x604)]['Scene_Shop_helpWindowRect']=Scene_Shop['prototype']['helpWindowRect'],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x438)]=function(){const _0x25bb5a=_0x311a7f;if(this[_0x25bb5a(0x641)]()){if(_0x25bb5a(0x1fb)!=='ntPjx')_0xabb5e7=_0x25bb5a(0x446)['format'](_0x3fea55['id']);else return this['helpWindowRectItemsEquipsCore']();}else{if(_0x25bb5a(0x597)===_0x25bb5a(0x597))return VisuMZ[_0x25bb5a(0x604)][_0x25bb5a(0x28b)][_0x25bb5a(0x49e)](this);else{if(_0x4670e3[_0x25bb5a(0x40c)]&&_0x3a3332[_0x25bb5a(0x26c)]!==_0x5e9222)return _0x3e5745['uiHelpPosition'];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x25bb5a(0x1e4)]()[_0x25bb5a(0x260)](/LOWER/i);else _0x2dde34[_0x25bb5a(0x3bb)][_0x25bb5a(0x65c)]['call'](this);}}}},Scene_Shop['prototype'][_0x311a7f(0x309)]=function(){const _0x44b547=_0x311a7f,_0x16560f=0x0,_0xaaaf59=this[_0x44b547(0x29c)](),_0x1dbb4e=Graphics['boxWidth'],_0x9d8131=this[_0x44b547(0x24e)]();return new Rectangle(_0x16560f,_0xaaaf59,_0x1dbb4e,_0x9d8131);},VisuMZ['ItemsEquipsCore'][_0x311a7f(0x31a)]=Scene_Shop['prototype'][_0x311a7f(0x53e)],Scene_Shop['prototype'][_0x311a7f(0x53e)]=function(){const _0x19fe6d=_0x311a7f;return this[_0x19fe6d(0x641)]()?this['goldWindowRectItemsEquipsCore']():VisuMZ['ItemsEquipsCore']['Scene_Shop_goldWindowRect']['call'](this);},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x415)]=function(){const _0x585015=_0x311a7f,_0x2c2e56=this[_0x585015(0x67b)](),_0x4d4969=this['calcWindowHeight'](0x1,!![]),_0x42d611=this[_0x585015(0x65c)]()?0x0:Graphics['boxWidth']-_0x2c2e56,_0x36a1de=this[_0x585015(0x660)]();return new Rectangle(_0x42d611,_0x36a1de,_0x2c2e56,_0x4d4969);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x31b)]=Scene_Shop[_0x311a7f(0x3bb)]['commandWindowRect'],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x202)]=function(){const _0x167db0=_0x311a7f;return this[_0x167db0(0x641)]()?this[_0x167db0(0x27f)]():_0x167db0(0x350)===_0x167db0(0x2cd)?![]:VisuMZ[_0x167db0(0x604)]['Scene_Shop_commandWindowRect'][_0x167db0(0x49e)](this);},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x27f)]=function(){const _0x5b4651=_0x311a7f,_0x188714=this['isRightInputMode']()?this['mainCommandWidth']():0x0,_0x4b5d25=this['mainAreaTop'](),_0x50f7d5=Graphics[_0x5b4651(0x610)]-this[_0x5b4651(0x67b)](),_0x505270=this['calcWindowHeight'](0x1,!![]);return new Rectangle(_0x188714,_0x4b5d25,_0x50f7d5,_0x505270);},VisuMZ[_0x311a7f(0x604)]['Scene_Shop_numberWindowRect']=Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x26f)],Scene_Shop[_0x311a7f(0x3bb)]['numberWindowRect']=function(){const _0x4ffa8e=_0x311a7f;if(this[_0x4ffa8e(0x641)]()){if(_0x4ffa8e(0x330)!==_0x4ffa8e(0x330)){const _0x5b7e06=_0x2e0629['ItemsEquipsCore'][_0x4ffa8e(0x5cc)][_0x4ffa8e(0x4a2)],_0x4e4c80=_0x4ffa8e(0x521)[_0x4ffa8e(0x46e)](this[_0x4ffa8e(0x2d6)][_0x4ffa8e(0x411)][_0x4ffa8e(0x4b0)]),_0x3d46d4=[null,_0x33dd69['hp'],_0x29785b['mp'],_0x472f64['hp'],_0x5cdd1d['mp'],_0x57cc91['hp'],_0x7de2a6['mp']][this[_0x4ffa8e(0x2d6)][_0x4ffa8e(0x411)][_0x4ffa8e(0x4b0)]];return _0x5b7e06[_0x4e4c80][_0x4ffa8e(0x46e)](_0x3d46d4);}else return this[_0x4ffa8e(0x5d7)]();}else{if(_0x4ffa8e(0x1cf)===_0x4ffa8e(0x4b1)){const _0x1294cb=_0x49b4f3['ItemsEquipsCore'][_0x4ffa8e(0x5cc)][_0x4ffa8e(0x4a2)];let _0x550e9f=_0x1294cb[_0x4ffa8e(0x39f)]!==_0x86ddc?_0x1294cb[_0x4ffa8e(0x39f)]:0x13;return _0x399db0[_0x4ffa8e(0x3ed)](_0x550e9f);}else return VisuMZ['ItemsEquipsCore']['Scene_Shop_numberWindowRect'][_0x4ffa8e(0x49e)](this);}},Scene_Shop['prototype'][_0x311a7f(0x5d7)]=function(){const _0x3aad29=_0x311a7f,_0x33064a=this['_commandWindow']['y']+this[_0x3aad29(0x2dc)][_0x3aad29(0x3f6)],_0x1a6791=Graphics[_0x3aad29(0x610)]-this[_0x3aad29(0x2ad)](),_0xc85bd9=this[_0x3aad29(0x65c)]()?Graphics[_0x3aad29(0x610)]-_0x1a6791:0x0,_0xaf9235=this[_0x3aad29(0x4ac)]()-this[_0x3aad29(0x2dc)][_0x3aad29(0x3f6)];return new Rectangle(_0xc85bd9,_0x33064a,_0x1a6791,_0xaf9235);},VisuMZ[_0x311a7f(0x604)]['Scene_Shop_statusWindowRect']=Scene_Shop['prototype'][_0x311a7f(0x659)],Scene_Shop['prototype'][_0x311a7f(0x659)]=function(){const _0x2b27a4=_0x311a7f;if(this[_0x2b27a4(0x641)]())return this[_0x2b27a4(0x256)]();else{if(_0x2b27a4(0x448)===_0x2b27a4(0x671)){const _0x221d3f=_0x4749f7?_0x21d24f(_0x326690['$1']):_0x141054[_0x2b27a4(0x544)](_0x18ccc6);return _0x39a514[_0x221d3f]||_0xdfbd60;}else return VisuMZ[_0x2b27a4(0x604)][_0x2b27a4(0x32d)][_0x2b27a4(0x49e)](this);}},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x256)]=function(){const _0xea556c=_0x311a7f,_0x2d1c5d=this[_0xea556c(0x2ad)](),_0x9b701=this['mainAreaHeight']()-this[_0xea556c(0x2dc)]['height'],_0x7ef22=this[_0xea556c(0x65c)]()?0x0:Graphics[_0xea556c(0x610)]-_0x2d1c5d,_0x18cc74=this['_commandWindow']['y']+this[_0xea556c(0x2dc)]['height'];return new Rectangle(_0x7ef22,_0x18cc74,_0x2d1c5d,_0x9b701);},VisuMZ['ItemsEquipsCore']['Scene_Shop_buyWindowRect']=Scene_Shop['prototype'][_0x311a7f(0x698)],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x698)]=function(){const _0x269aae=_0x311a7f;return this[_0x269aae(0x641)]()?this[_0x269aae(0x64e)]():VisuMZ[_0x269aae(0x604)][_0x269aae(0x461)][_0x269aae(0x49e)](this);},Scene_Shop['prototype'][_0x311a7f(0x64e)]=function(){const _0x32f7ed=_0x311a7f,_0x2a1cb7=this['_commandWindow']['y']+this['_commandWindow'][_0x32f7ed(0x3f6)],_0x24864d=Graphics[_0x32f7ed(0x610)]-this[_0x32f7ed(0x2ad)](),_0x18744c=this['mainAreaHeight']()-this[_0x32f7ed(0x2dc)][_0x32f7ed(0x3f6)],_0x16724e=this['isRightInputMode']()?Graphics[_0x32f7ed(0x610)]-_0x24864d:0x0;return new Rectangle(_0x16724e,_0x2a1cb7,_0x24864d,_0x18744c);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x4e6)]=Scene_Shop['prototype']['createCategoryWindow'],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x5cd)]=function(){const _0x16aa2d=_0x311a7f;VisuMZ['ItemsEquipsCore'][_0x16aa2d(0x4e6)]['call'](this),this['isUseModernControls']()&&this[_0x16aa2d(0x291)]();},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x4b4)]=Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x3d4)],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x3d4)]=function(){const _0x25892b=_0x311a7f;if(this['isUseItemsEquipsCoreUpdatedLayout']())return _0x25892b(0x35f)===_0x25892b(0x558)?_0x34c394['ItemsEquipsCore'][_0x25892b(0x5cc)]['EquipScene']['NonRemoveETypes']:this['categoryWindowRectItemsEquipsCore']();else{if(_0x25892b(0x493)!=='zIkpS')_0x311177[_0x25892b(0x3bb)][_0x25892b(0x4ad)][_0x25892b(0x49e)](this,_0x229e90);else return VisuMZ[_0x25892b(0x604)][_0x25892b(0x4b4)]['call'](this);}},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x62d)]=function(){const _0xe3bfcd=_0x311a7f,_0xa1809f=this[_0xe3bfcd(0x2dc)]['y'],_0x2c17be=this[_0xe3bfcd(0x2dc)][_0xe3bfcd(0x1f0)],_0xe057ef=this[_0xe3bfcd(0x57e)](0x1,!![]),_0x84278=this[_0xe3bfcd(0x65c)]()?Graphics[_0xe3bfcd(0x610)]-_0x2c17be:0x0;return new Rectangle(_0x84278,_0xa1809f,_0x2c17be,_0xe057ef);},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x291)]=function(){const _0x1e8f77=_0x311a7f;delete this[_0x1e8f77(0x609)][_0x1e8f77(0x503)]['ok'],delete this[_0x1e8f77(0x609)][_0x1e8f77(0x503)][_0x1e8f77(0x1fa)];},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x226)]=Scene_Shop['prototype'][_0x311a7f(0x28e)],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x28e)]=function(){const _0x4cd1e6=_0x311a7f;VisuMZ[_0x4cd1e6(0x604)][_0x4cd1e6(0x226)]['call'](this),this[_0x4cd1e6(0x641)]()&&this[_0x4cd1e6(0x59d)]();},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x23a)]=Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x485)],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x485)]=function(){const _0x2dbbc8=_0x311a7f;if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x2dbbc8(0x5ff)]();else{if(_0x2dbbc8(0x259)!=='eaLRJ')return VisuMZ[_0x2dbbc8(0x604)]['Scene_Shop_sellWindowRect']['call'](this);else{if(this[_0x2dbbc8(0x55a)](_0x15b7e2))return![];if(!_0x1b793b)return![];if(_0x27b3d6[_0x2dbbc8(0x647)])return!![];if(_0x5f5b86[_0x2dbbc8(0x488)]())return!![];const _0x143ba5=this[_0x2dbbc8(0x2c7)](_0xc29cdd);for(const _0x5ac871 of _0x143ba5){if(!this[_0x2dbbc8(0x3c9)](_0x49f335,_0x5ac871))return![];}return!![];}}},Scene_Shop[_0x311a7f(0x3bb)]['sellWindowRectItemsEquipsCore']=function(){const _0x504beb=_0x311a7f,_0x1ad30d=this[_0x504beb(0x609)]['y']+this['_categoryWindow']['height'],_0x2f8093=Graphics[_0x504beb(0x610)]-this[_0x504beb(0x2ad)](),_0x22aba6=this[_0x504beb(0x4ac)]()-this[_0x504beb(0x609)][_0x504beb(0x3f6)],_0x10f7cf=this[_0x504beb(0x65c)]()?Graphics[_0x504beb(0x610)]-_0x2f8093:0x0;return new Rectangle(_0x10f7cf,_0x1ad30d,_0x2f8093,_0x22aba6);},Scene_Shop['prototype'][_0x311a7f(0x59d)]=function(){const _0x1c8d21=_0x311a7f;this['_sellWindow'][_0x1c8d21(0x5d3)](this[_0x1c8d21(0x495)]);},Scene_Shop['prototype'][_0x311a7f(0x2ad)]=function(){const _0x41ffb8=_0x311a7f;return VisuMZ[_0x41ffb8(0x604)][_0x41ffb8(0x5cc)][_0x41ffb8(0x4a2)][_0x41ffb8(0x40e)];},VisuMZ['ItemsEquipsCore'][_0x311a7f(0x3b6)]=Scene_Shop['prototype']['activateSellWindow'],Scene_Shop['prototype'][_0x311a7f(0x487)]=function(){const _0x5033d9=_0x311a7f;VisuMZ[_0x5033d9(0x604)]['Scene_Shop_activateSellWindow'][_0x5033d9(0x49e)](this),this[_0x5033d9(0x641)]()&&this[_0x5033d9(0x495)][_0x5033d9(0x4ff)](),this[_0x5033d9(0x57f)]['updateHelp']();},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x45a)]=Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x51e)],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x51e)]=function(){const _0x5c3020=_0x311a7f;VisuMZ['ItemsEquipsCore']['Scene_Shop_commandBuy'][_0x5c3020(0x49e)](this),this[_0x5c3020(0x641)]()&&this[_0x5c3020(0x32f)]();},Scene_Shop['prototype'][_0x311a7f(0x32f)]=function(){const _0x1484f0=_0x311a7f;this[_0x1484f0(0x586)]=this[_0x1484f0(0x586)]||0x0,this[_0x1484f0(0x691)]['smoothSelect'](this[_0x1484f0(0x586)]);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x1f4)]=Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x200)],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x200)]=function(){const _0x5c9b14=_0x311a7f;VisuMZ[_0x5c9b14(0x604)][_0x5c9b14(0x1f4)][_0x5c9b14(0x49e)](this);if(this[_0x5c9b14(0x641)]()){if('IgYMp'==='Sxbhd'){const _0xa67786=_0x2f9858(_0xca8267['$1'])['split'](/[\r\n]+/);for(const _0x2f7fc2 of _0xa67786){if(_0x2f7fc2['match'](/(.*):[ ](.*)/i)){const _0xfd4a29=_0x31e793(_0x88533b['$1'])[_0x5c9b14(0x5a1)]()['trim'](),_0x268cbc=_0x2b8472(_0x53d432['$2'])[_0x5c9b14(0x3df)]();this[_0x5c9b14(0x38d)][_0xfd4a29]=_0x268cbc;}}}else this[_0x5c9b14(0x2ee)]();}this[_0x5c9b14(0x5e7)]()&&(this['_categoryWindow'][_0x5c9b14(0x373)](0x0),this[_0x5c9b14(0x498)]());},Scene_Shop['prototype'][_0x311a7f(0x2ee)]=function(){const _0x98a26e=_0x311a7f;this[_0x98a26e(0x691)][_0x98a26e(0x573)](),this['_commandWindow'][_0x98a26e(0x573)]();},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x25c)]=Scene_Shop['prototype'][_0x311a7f(0x62b)],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x62b)]=function(){const _0x262e14=_0x311a7f;VisuMZ['ItemsEquipsCore'][_0x262e14(0x25c)][_0x262e14(0x49e)](this);if(this[_0x262e14(0x641)]()){if(_0x262e14(0x2a6)!==_0x262e14(0x2a6)){const _0x1f83c9=/^\d+$/['test'](_0x44fd06);_0x1f83c9?_0x297210[_0x262e14(0x300)](_0xa64c5f(_0x35720f)):_0x205df0['push'](_0x1aa71b[_0x262e14(0x39b)](_0x1b895b));}else this['onBuyCancelItemsEquipsCore']();}},Scene_Shop['prototype']['onBuyCancelItemsEquipsCore']=function(){const _0x237b9e=_0x311a7f;this[_0x237b9e(0x586)]=this[_0x237b9e(0x691)][_0x237b9e(0x5c8)](),this[_0x237b9e(0x691)][_0x237b9e(0x4ff)](),this[_0x237b9e(0x691)][_0x237b9e(0x4e1)](),this['_buyWindow']['smoothScrollTo'](0x0,0x0),this[_0x237b9e(0x495)][_0x237b9e(0x4ff)](),this[_0x237b9e(0x5d6)]['hide']();},VisuMZ['ItemsEquipsCore'][_0x311a7f(0x53f)]=Scene_Shop[_0x311a7f(0x3bb)]['onCategoryCancel'],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x286)]=function(){const _0x34835e=_0x311a7f;VisuMZ[_0x34835e(0x604)][_0x34835e(0x53f)][_0x34835e(0x49e)](this),this[_0x34835e(0x641)]()&&this[_0x34835e(0x506)]();},Scene_Shop[_0x311a7f(0x3bb)]['onCategoryCancelItemsEquipsCore']=function(){const _0x4e8188=_0x311a7f;this['_buyWindow'][_0x4e8188(0x4ff)](),this['_commandWindow'][_0x4e8188(0x4ff)]();},VisuMZ['ItemsEquipsCore'][_0x311a7f(0x496)]=Scene_Shop[_0x311a7f(0x3bb)]['onBuyOk'],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x3e7)]=function(){const _0x414aee=_0x311a7f;$gameTemp[_0x414aee(0x66e)]=!![],VisuMZ[_0x414aee(0x604)][_0x414aee(0x496)]['call'](this),$gameTemp[_0x414aee(0x66e)]=![],this[_0x414aee(0x2d6)]=this[_0x414aee(0x691)][_0x414aee(0x486)]();},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x442)]=Scene_Shop[_0x311a7f(0x3bb)]['buyingPrice'],Scene_Shop['prototype'][_0x311a7f(0x5a2)]=function(){const _0x5f317e=_0x311a7f;$gameTemp[_0x5f317e(0x66e)]=!![],this[_0x5f317e(0x2d6)]=this['_buyWindow'][_0x5f317e(0x486)]();const _0x1cf275=VisuMZ['ItemsEquipsCore'][_0x5f317e(0x442)][_0x5f317e(0x49e)](this);return $gameTemp[_0x5f317e(0x66e)]=![],this['_item']=this[_0x5f317e(0x691)]['item'](),_0x1cf275;},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x2b0)]=Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x606)],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x606)]=function(){const _0x13043f=_0x311a7f;VisuMZ[_0x13043f(0x604)][_0x13043f(0x2b0)][_0x13043f(0x49e)](this);if(this[_0x13043f(0x641)]()){if(_0x13043f(0x25f)===_0x13043f(0x25f))this['onSellOkItemsEquipsCore']();else{_0x4320c0[_0x13043f(0x409)]()&&this[_0x13043f(0x4d9)](!![]);if(_0x5c6ba9['isClicked']())this['onTouchOk']();else _0xb8841f[_0x13043f(0x38c)]()&&this[_0x13043f(0x34a)]();}}},Scene_Shop['prototype'][_0x311a7f(0x50e)]=function(){const _0x1534be=_0x311a7f;this[_0x1534be(0x609)][_0x1534be(0x4ff)]();},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x53a)]=Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x4eb)],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x4eb)]=function(){const _0x5d75e0=_0x311a7f;VisuMZ[_0x5d75e0(0x604)][_0x5d75e0(0x53a)][_0x5d75e0(0x49e)](this),this[_0x5d75e0(0x5e7)]()&&this[_0x5d75e0(0x286)](),this[_0x5d75e0(0x641)]()&&this['_dummyWindow']['hide']();},Scene_Shop[_0x311a7f(0x3bb)]['sellPriceOfItem']=function(_0x175899){const _0x8e2da3=_0x311a7f,_0x357608=this['_item'];this[_0x8e2da3(0x2d6)]=_0x175899;const _0x5925f7=this['sellingPrice']();return this[_0x8e2da3(0x2d6)]=_0x357608,_0x5925f7;},VisuMZ[_0x311a7f(0x604)]['Scene_Shop_sellingPrice']=Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x2a0)],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x2a0)]=function(){const _0x3debbd=_0x311a7f;let _0x3fcad9=this['determineBaseSellingPrice']();const _0x557d4b=this[_0x3debbd(0x2d6)];return _0x3fcad9=VisuMZ[_0x3debbd(0x604)][_0x3debbd(0x5cc)]['ShopScene'][_0x3debbd(0x513)][_0x3debbd(0x49e)](this,_0x557d4b,_0x3fcad9),_0x3fcad9;},Scene_Shop[_0x311a7f(0x3bb)]['determineBaseSellingPrice']=function(){const _0x5f1984=_0x311a7f;let _0xae1a2b=this[_0x5f1984(0x2d6)][_0x5f1984(0x658)];if(!this[_0x5f1984(0x2d6)])return 0x0;else{if(this[_0x5f1984(0x2d6)][_0x5f1984(0x5b3)][_0x5f1984(0x260)](/<JS SELL PRICE>\s*([\s\S]*)\s*<\/JS SELL PRICE>/i)){if(_0x5f1984(0x5a3)===_0x5f1984(0x5a3)){const _0x711aff=String(RegExp['$1']);let _0x454983=this['_item'],_0xc229c4=_0xae1a2b*this['sellPriceRate']();try{if('HtXRM'===_0x5f1984(0x2ea))return this[_0x5f1984(0x4de)](_0x156fbf)?this['switchProxyItem'](_0x34f8ee)||_0xef144d:_0x1b96c5;else eval(_0x711aff);}catch(_0x531d0e){if(_0x5f1984(0x329)!==_0x5f1984(0x326)){if($gameTemp[_0x5f1984(0x3c6)]())console[_0x5f1984(0x2f0)](_0x531d0e);}else return;}if(isNaN(_0xc229c4))_0xc229c4=0x0;return Math['floor'](_0xc229c4);}else{const _0x17f2dc=new _0x4440c3(0x0,0x0,_0x50dc3f[_0x5f1984(0x1f0)],_0x3ee175[_0x5f1984(0x3f6)]);this[_0x5f1984(0x243)]=new _0x55bac6(_0x17f2dc),this[_0x5f1984(0x243)][_0x5f1984(0x52f)]=0x0,this[_0x5f1984(0x3d0)](this['_commandNameWindow']),this[_0x5f1984(0x3c1)]();}}else return this[_0x5f1984(0x2d6)][_0x5f1984(0x5b3)][_0x5f1984(0x260)](/<SELL PRICE:[ ](\d+)>/i)?parseInt(RegExp['$1']):Math['floor'](this[_0x5f1984(0x511)]());}},Scene_Shop['prototype'][_0x311a7f(0x511)]=function(){const _0x59f39f=_0x311a7f;return this[_0x59f39f(0x2d6)][_0x59f39f(0x658)]*this[_0x59f39f(0x3d7)]();},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x3d7)]=function(){const _0x33d407=_0x311a7f;return VisuMZ['ItemsEquipsCore']['Settings'][_0x33d407(0x470)][_0x33d407(0x56d)];},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x296)]=function(){const _0x5c30e6=_0x311a7f;if(!this[_0x5c30e6(0x1e4)]())return![];if(!this[_0x5c30e6(0x5e7)]())return![];if(!this['_sellWindow'])return![];if(!this[_0x5c30e6(0x57f)]['active'])return![];return this[_0x5c30e6(0x1e4)]()&&this['isUseModernControls']();},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x24c)]=function(){const _0x15ee9f=_0x311a7f;if(this[_0x15ee9f(0x296)]()){if(this['_sellWindow'][_0x15ee9f(0x376)]()===0x1)return TextManager[_0x15ee9f(0x688)](_0x15ee9f(0x6a5),_0x15ee9f(0x5e1));else{if(_0x15ee9f(0x49d)!==_0x15ee9f(0x2e5))return TextManager[_0x15ee9f(0x688)](_0x15ee9f(0x538),_0x15ee9f(0x21a));else{if(this[_0x15ee9f(0x45e)](_0x3d5412)){this[_0x15ee9f(0x560)]();const _0x42b518=_0x19388e[_0x15ee9f(0x604)]['Settings'][_0x15ee9f(0x648)],_0x358b0f=_0x42b518[_0x15ee9f(0x464)],_0x4f05e1=_0x358b0f[_0x15ee9f(0x46e)](_0x13209c[_0x15ee9f(0x5ed)](_0xb80776));this[_0x15ee9f(0x2ca)][_0x15ee9f(0x46d)]=_0x42b518['ItemQuantityFontSize'],this[_0x15ee9f(0x638)](_0x4f05e1,_0x223f1d,_0x204550,_0x5b4c89,_0x15ee9f(0x5e1)),this[_0x15ee9f(0x560)]();}}}}else{if(this[_0x15ee9f(0x5ee)]&&this[_0x15ee9f(0x5ee)]['active'])return TextManager[_0x15ee9f(0x688)]('left',_0x15ee9f(0x5e1));}return Scene_MenuBase['prototype'][_0x15ee9f(0x24c)]['call'](this);},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x4ec)]=function(){const _0x3117db=_0x311a7f;if(this[_0x3117db(0x5ee)]&&this['_numberWindow'][_0x3117db(0x2cb)]){if(_0x3117db(0x588)!=='QVzMq')_0x423863='armor-%1'['format'](_0x456ab0['id']);else return TextManager[_0x3117db(0x688)]('up','down');}return Scene_MenuBase[_0x3117db(0x3bb)][_0x3117db(0x4ec)][_0x3117db(0x49e)](this);},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x684)]=function(){const _0x2bdc24=_0x311a7f;if(this[_0x2bdc24(0x296)]())return VisuMZ[_0x2bdc24(0x604)][_0x2bdc24(0x5cc)][_0x2bdc24(0x648)][_0x2bdc24(0x266)];else{if(this[_0x2bdc24(0x5ee)]&&this[_0x2bdc24(0x5ee)][_0x2bdc24(0x2cb)])return VisuMZ['ItemsEquipsCore'][_0x2bdc24(0x5cc)][_0x2bdc24(0x470)][_0x2bdc24(0x41c)];}return Scene_MenuBase[_0x2bdc24(0x3bb)][_0x2bdc24(0x684)]['call'](this);},Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x484)]=function(){const _0x5a3466=_0x311a7f;if(this[_0x5a3466(0x5ee)]&&this[_0x5a3466(0x5ee)][_0x5a3466(0x2cb)]){if(_0x5a3466(0x2b8)!==_0x5a3466(0x621))return VisuMZ[_0x5a3466(0x604)]['Settings']['ShopScene'][_0x5a3466(0x5f1)];else{if(!this[_0x5a3466(0x4df)]()&&!_0x5dfb8b[_0x5a3466(0x55a)](this[_0x5a3466(0x2d6)]))return;const _0xc1feee=this[_0x5a3466(0x4fc)]-this[_0x5a3466(0x652)]()-_0x14a622,_0x15394e=this[_0x5a3466(0x359)]('0000');this['changeTextColor'](_0x3651e6[_0x5a3466(0x385)]()),this[_0x5a3466(0x638)](_0x1d1504[_0x5a3466(0x1d8)],_0x3004c5+this[_0x5a3466(0x652)](),_0x5f0500,_0xc1feee-_0x15394e),this[_0x5a3466(0x2ec)](),this[_0x5a3466(0x338)](this[_0x5a3466(0x2d6)],_0x1a1aeb,_0x17aa78,_0xc1feee);}}return Scene_MenuBase[_0x5a3466(0x3bb)][_0x5a3466(0x484)][_0x5a3466(0x49e)](this);},Scene_Shop['prototype'][_0x311a7f(0x3ce)]=function(){const _0x29baa6=_0x311a7f;if(!SceneManager[_0x29baa6(0x353)]())return;const _0x298a7b=VisuMZ[_0x29baa6(0x604)]['Settings'][_0x29baa6(0x470)];if(_0x298a7b[_0x29baa6(0x36f)]){if(_0x29baa6(0x35c)!=='AXZYp')$gameSwitches[_0x29baa6(0x30c)](_0x298a7b['SwitchBuy'],![]);else{const _0x48d2a0=_0x198454[_0x29baa6(0x42b)](this['_actor'][_0x29baa6(0x4cd)]());_0x48d2a0[_0x29baa6(0x4cb)](this[_0x29baa6(0x3de)][_0x29baa6(0x451)](this));}}_0x298a7b['SwitchSell']&&$gameSwitches[_0x29baa6(0x30c)](_0x298a7b[_0x29baa6(0x2ae)],![]);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x677)]=Scene_Shop['prototype'][_0x311a7f(0x217)],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x217)]=function(_0xfeea95){const _0xa19d0e=_0x311a7f;VisuMZ[_0xa19d0e(0x604)]['Scene_Shop_doBuy'][_0xa19d0e(0x49e)](this,_0xfeea95);if(_0xfeea95<=0x0)return;const _0x46e48e=VisuMZ[_0xa19d0e(0x604)][_0xa19d0e(0x5cc)]['ShopScene'];_0x46e48e[_0xa19d0e(0x36f)]&&$gameSwitches[_0xa19d0e(0x30c)](_0x46e48e[_0xa19d0e(0x36f)],!![]);},VisuMZ['ItemsEquipsCore'][_0x311a7f(0x407)]=Scene_Shop['prototype'][_0x311a7f(0x252)],Scene_Shop[_0x311a7f(0x3bb)][_0x311a7f(0x252)]=function(_0x2194fb){const _0xa07b59=_0x311a7f;VisuMZ['ItemsEquipsCore']['Scene_Shop_doSell'][_0xa07b59(0x49e)](this,_0x2194fb);if(_0x2194fb<=0x0)return;const _0x3847d6=VisuMZ[_0xa07b59(0x604)][_0xa07b59(0x5cc)][_0xa07b59(0x470)];_0x3847d6[_0xa07b59(0x36f)]&&$gameSwitches[_0xa07b59(0x30c)](_0x3847d6['SwitchSell'],!![]);};function _0x169b(){const _0x13a1a9=['mmMnF','shouldCommandWindowExist','uiInputPosition','values','Scene_Shop_create','getItemEffectsTpRecoveryLabel','background','index','CoreEngine','cursorRight','qDMTr','Settings','createCategoryWindow','gainItem','name','activate','BattleUsable','sRvXi','setStatusWindow','categoryStyleCheck','addStateBuffChanges','_dummyWindow','numberWindowRectItemsEquipsCore','eiezd','Scene_Equip_onSlotCancel','setupItemDamageTempActors','code','commandStyleCheck','switchProxyItem','UhKHd','iBxlL','forceResetEquipSlots','right','fontSizeRatio','pnOVO','VisuMZ_1_BattleCore','6685IFaiAe','FadeSpeed','isUseModernControls','parse','paramJS','Window_ShopBuy_refresh','DnhMq','ACloO','numItems','_numberWindow','forceChangeEquipSlots','Window_Selectable_update','buttonAssistLargeIncrement','rqQlC','optimizeEquipments','processCursorSpecialCheckModernControls','UsGUD','ActorChangeEquipSlots','setupBattleTestItems','getItemQuantityText','getItemEffectsAddedStatesBuffsLabel','_tempActorA','isClearCommandAdded','EFFECT_REMOVE_DEBUFF','iconHeight','getItemEffects','sellWindowRectItemsEquipsCore','mkOAc','ARRAYSTRUCT','meetsItemConditionsJS','ListWindowCols','ItemsEquipsCore','CmdIconClear','onSellOk','cursorDown','removeBuff','_categoryWindow','CommandAddClear','drawItemStyleIconText','getItemSpeedLabel','isNewItem','itemHasEquipLimit','ParseClassNotetags','boxWidth','FRpau','_calculatingJSParameters','LeULX','categoryNameWindowDrawText','fRTDC','getItemEffectsHpDamageText','aNgTb','Window_ItemList_maxCols','Window_ShopCommand_initialize','textColor','ZTDUJ','Speed1000','getItemEffectsTpDamageLabel','FMEUa','center','LabelConsume','rdAOC','sdoOq','getItemOccasionText','members','isDualWield','drawUpdatedBeforeParamValue','getItemSuccessRateText','commandEquip','bmXbG','drawItemQuantity','onBuyCancel','rbXPC','categoryWindowRectItemsEquipsCore','ShopMenuStatusStandard','XKLeh','Game_Item_setObject','itemWindowRectItemsEquipsCore','atypeId','maxVisibleItems','getItemHitTypeText','update','changeTextColor','getItemEffectsMpDamageText','drawText','clear','zeXnq','HitType%1','qHXkf','getItemDamageAmountText','cursorPageup','categoryStyle','lineHeight','isUseItemsEquipsCoreUpdatedLayout','OzBGg','buttonAssistOffset3','ZnNtB','processCursorMove','vIJWG','_checkEquipRequirements','ItemScene','AllItems','_paramPlus','isStackableArtifact','SetupProxyItemGroups','cursorUp','buyWindowRectItemsEquipsCore','getItemDamageAmountLabelBattleCore','addItemCategory','ADDED\x20EFFECTS','itemPadding','CmdStyle','process_VisuMZ_ItemsEquipsCore_RegExp','SWGcn','cTQAv','setHp','price','statusWindowRect','VVOKI','CYLAC','isRightInputMode','loseItem','drawParamText','onTouchOk','mainAreaTop','getItemDamageAmountTextBattleCore','equips','filter','removeStateBuffChanges','isArmor','checkItemConditionsSwitchNotetags','createCommandNameWindow','weVDx','mElKR','_shopStatusMenuMode','aISnY','drawItemEffectsAddedStatesBuffs','getClassRequirements','_bypassProxy','ParamChangeFontSize','Scene_Equip_statusWindowRect','PqsrX','EhjIq','Game_Actor_artifact','MAT','getItemEffectsAddedStatesBuffsText','prepareNewEquipSlotsOnLoad','Scene_Shop_doBuy','createStatusWindow','dGJVd','rateHP','mainCommandWidth','EFFECT_RECOVER_HP','canUse','ElementNone','_data','Style','buttonAssistKey3','myvWK','StatusWindowWidth','buttonAssistText1','ITEMS_EQUIPS_CORE','exit','optKeyItemsNumber','getInputMultiButtonStrings','commandNameWindowDrawText','getItemDamageAmountLabel','eZqWz','_forcedSlots','drawUpdatedAfterParamValue','helpDesc','82RnFUAn','updateNewLabelOpacity','_buyWindow','itemTextAlign','map','selfTP','convertInitEquipsToItems','drawNewLabelText','buttonAssistText3','buyWindowRect','LabelRecoverTP','processDrawIcon','drawItemActorMenuImage','_scene','Step2End','tHuTd','LabelDamageHP','siixL','uoTqO','qnpeM','ItemSceneAdjustItemList','ELEMENT','left','modifiedBuyPriceItemsEquipsCore','drawItemEffectsHpRecovery','Window_ShopStatus_setItem','_weaponIDs','_shopStatusMenuAlly','isBuyCommandEnabled','PMARr','yyVje','maxItemAmount','pmuji','initNewItemsList','addClearCommand','keyItem','ErnXz','_category','possession','LabelDamageTP','EquipParams','drawActorCharacter','ShowShopStatus','drawCustomShopGraphicLoad','popScene','NaATO','getItemRepeatsText','Parse_Notetags_ParamValues','placeNewLabel','playCursorSound','updatedLayoutStyle','innerHeight','visible','pop','addEquipCommand','updateMoneyAmount','RegularItems','getItemDamageElementLabel','agi','ICCqz','prepareNextScene','discardEquip','width','QmIBe','Njqun','TYjPa','Scene_Shop_commandSell','successRate','setHelpWindowItem','includes','nonRemovableEtypes','fillRect','cancel','ntPjx','MultiplierStandard','MDcCj','playEquip','TVblh','commandSell','geUpdatedLayoutStatusWidth','commandWindowRect','uUFNs','iconIndex','_slotId','smallParamFontSize','ARRAYNUM','GOPgH','actorParams','TP\x20RECOVERY','Game_Party_initialize','mpRci','paramPlus','rZwbd','ExtDisplayedParams','Step1Start','createSlotWindow','REMOVED\x20EFFECTS','ARRAYJSON','VisuMZ_1_SkillsStatesCore','onSlotOk','drawTextEx','doBuy','isOpenAndActive','troopArtifacts','pagedown','LabelRepeats','drawParamsItemsEquipsCore','vmjPZ','getItemsEquipsCoreBackColor2','equip2','revertGlobalNamespaceVariables','Scene_Equip_create','addCommand','hlOXm','proxyItem','releaseUnequippableItems','Scene_Shop_createSellWindow','drawActorParamDifference','wtypeId','postCreateSlotWindowItemsEquipsCore','getItemIdWithName','powerUpColor','Scene_Equip_createSlotWindow','isClearCommandEnabled','_bypassNewLabel','makeCommandList','zkIBU','<%1:[\x20]([\x5c+\x5c-]\x5cd+)>','DrawBackRect','W%1','DrawFaceJS','commandName','rEsBX','create','wSYEr','loadCharacter','Scene_Shop_sellWindowRect','bJEdC','setMp','wfEKF','drawParamName','getInputButtonString','makeItemData','isHovered','clearNewLabelFromItem','_commandNameWindow','sqdLY','IconSet','isEquipped','clearCmdDesc','getItemDamageAmountTextOriginal','setItem','initEquips','getItemEffectsSelfTpGainLabel','buttonAssistKey1','_skillIDs','helpAreaHeight','bestEquipItem','Speed1','itemWindowRect','doSell','BorderRegExp','mCUbl','text','statusWindowRectItemsEquipsCore','Rxpih','colSpacing','VyuCh','equipAdjustHpMp','BblOO','Scene_Shop_onBuyCancel','drawItemConsumable','YqsQF','zweSx','match','addState','LabelSuccessRate','adjustItemWidthByStatus','_armorIDs','isOptimizeEquipOk','buttonAssistCategory','checkShiftRemoveShortcut','isTroopArtifact','drawItemStyleIcon','LayoutStyle','drawItemEffectsRemovedStatesBuffs','uiHelpPosition','CvseF','SCOPE','numberWindowRect','limitedPageUpDownSceneCheck','traitObjects','IkBkj','EquipAdjustHpMp','MpIZX','RemoveEquipIcon','Window_EquipItem_includes','isEquipCommandEnabled','HP\x20DAMAGE','_newItemsList','oPBGf','NIMsm','Miscj','AlwaysUsable','mainFontFace','commandWindowRectItemsEquipsCore','meHTV','_purchaseOnly','squND','getItemConsumableText','Parse_Notetags_EnableJS','kzWSS','onCategoryCancel','nOeyT','100%','96hibcgL','isHandled','Scene_Shop_helpWindowRect','length','RPEsd','createSellWindow','\x5cb%1\x5cb','DrawParamJS','postCreateCategoryWindowItemsEquipsCore','DAMAGE\x20MULTIPLIER','tNCBR','EFFECT_GAIN_TP','Game_Actor_discardEquip','buttonAssistItemListRequirement','saxBd','Window_ShopSell_isEnabled','getNextAvailableEtypeId','xyaNa','maxmp','helpAreaTop','LabelRecoverMP','RegExp','categoryList','sellingPrice','prepareRefreshItemsEquipsCoreLayout','noTEb','ConvertParams','isOptimizeCommandAdded','wmvYU','qEroL','repeats','Actors','isCommandEnabled','drawIcon','Window_ItemCategory_setItemWindow','drawEquipData','statusWidth','SwitchSell','concat','Scene_Shop_onSellOk','previousActor','aOLVS','tFfMI','ElementWeapon','EFFECT_ADD_BUFF','LabelHitType','CeaYt','CpVny','NonRemoveETypes','Game_BattlerBase_meetsItemConditions','setBackgroundType','hideDisabledCommands','eokcv','CrnNm','categoryNameWindowCenter','8392023DghQAl','isEnabled','getItemEffectsTpRecoveryText','wxepJ','XBXAU','\x5cI[%1]','ewRZM','getEquipRequirements','removeDebuff','710512pNDtFf','contents','active','Step3End','yGvbu','canShiftRemoveEquipment','mainFontSize','Enable','addSellCommand','SwitchID','partyArtifacts','scope','etypeId','_item','KLDBT','eGXBc','rbmwP','anyEmptyEquipSlotsOfSameEtype','ARMOR','_commandWindow','Speed0','ScopeRandomAny','indexOf','test','drawRemoveItem','RemoveEquipText','Scene_Equip_onSlotOk','isPageChangeRequested','GpACC','\x5cI[%1]%2','CmdTextAlign','MenuPortraits','getItemEffectsMpDamageLabel','ZSjxc','QUANTITY','resetTextColor','Scene_ItemBase_activateItemWindow','commandSellItemsEquipsCore','vVAmm','log','mdf','rTprt','uzXbK','fgLhq','isHoverEnabled','hZzga','STR','QcLDK','PBCvC','atk','slotWindowRect','HP\x20RECOVERY','icon','Scene_Equip_createCommandWindow','drawItemKeyData','push','(%1)','drawItemEffectsTpDamage','%1-%2','_equips','Parse_Notetags_EquipSlots','drawing','allowCommandWindowCursorUp','drawItemEffectsSelfTpGain','helpWindowRectItemsEquipsCore','TextAlign','igMOe','setValue','onDatabaseLoaded','getItemDamageAmountLabelOriginal','params','pDuPM','REPEAT','buttonAssistSlotWindowShift','inBattle','kGAFH','VisuMZ_1_MainMenuCore','992472QRLSwM','meetsItemConditionsNotetags','NgXnS','xtVzm','Scene_Shop_goldWindowRect','Scene_Shop_commandWindowRect','onTouchSelectModern','getItemEffectsHpRecoveryLabel','bTuvC','mhp','nhTie','Step2Start','xojzR','cJZBU','slotWindowRectItemsEquipsCore','meetsItemConditions','WnqMh','CmdHideDisabled','createCommandWindow','OojUO','drawUpdatedParamName','DrawItemData','money','Scene_Shop_statusWindowRect','_helpWindow','commandBuyItemsEquipsCore','GCEMb','rateMP','uhmjx','MaxMP','gainTP','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','ZYMpU','getItemConsumableLabel','drawItemNumber','_newLabelOpacityUpperLimit','Game_Party_numItems','activateItemWindow','param','flatHP','UmXcp','uzWDx','wnQbU','STRUCT','currentClass','armor','canConsumeItem','HiddenItemA','_allowArtifactTraitObjects','getItemEffectsHpRecoveryText','NtQYA','GLQtl','onTouchCancel','rqwJR','FieldUsable','ARRAYFUNC','cursorLeft','gPWwR','hUtTR','select','gLenz','isSceneShop','drawCustomShopGraphic','pZJHI','getItemEffectsTpDamageText','AGI','processShiftRemoveShortcut','textWidth','EFFECT_RECOVER_MP','EnableLayout','hhKrE','getItemDamageElementText','isEquipChangeOk','hcTVT','MP\x20RECOVERY','CmdIconCancel','getItemSuccessRateLabel','ParamValueFontSize','Game_Actor_paramPlus','_itemIDs','clearEquipments','smoothScrollTo','drawItemEffectsHpDamage','iconWidth','_goodsCount','MaxItems','_bypassReleaseUnequippableItemsItemsEquipsCore','dTQRQ','occasion','SwitchBuy','isSkill','Parse_Notetags_Category','commandNameWindowDrawBackground','smoothSelect','ygqIZ','remove','maxCols','Parse_Notetags_ParamJS','isKeyItem','Window_ItemList_updateHelp','BKEGT','plugQ','equipTypes','drawItemSuccessRate','drawItemDarkRect','fLnJQ','createItemWindow','iconText','%1%','getMatchingInitEquip','drawItemSpeed','systemColor','tYitT','MP\x20DAMAGE','isOpen','Window_ItemList_drawItem','ItemMenuStatusRect','eKhnS','isCancelled','_customItemInfo','ParseAllNotetags','ParseArmorNotetags','MaxHP','irJuW','damageColor','hitIndex','DrawIcons','addCancelCommand','initNewLabelSprites','avekF','Scene_Shop_numberWindowRect','paintOpacity','lhGBq','getClassIdWithName','_newLabelOpacityChange','_buttonAssistWindow','Window_ShopBuy_item','BackRectColor','MhMrP','contentsBack','isSoleArmorType','Game_Actor_equips_artifacts','drawItemEquipType','_money','IncludeShopItem','CmdCancelRename','powerDownColor','ConvertNumberToString','qwHkT','loadFaceImages','_list','dqETY','canEquip','DmHlg','drawItemScope','dataId','ceil','changeEquipById','currentSymbol','LUibd','Scene_Shop_activateSellWindow','round','oRCsc','updateSmoothScroll','TZTGx','prototype','_goods','+%1','LUK','getItemColor','value2','updateCommandNameWindow','normalColor','OffsetY','nQsKA','EHALB','isPlaytest','addOptimizeCommand','top','meetsEquipRequirement','onSlotCancel','updateChangedSlots','min','VisuMZ_0_CoreEngine','resetShopSwitches','sTCvT','addChild','categoryNameWindowDrawBackground','0000','ESgbG','categoryWindowRect','Slots','toLowerCase','sellPriceRate','getItemEffectsMpRecoveryLabel','hvLOH','KeyItems','_itemData','_cache','isClearEquipOk','onMenuImageLoad','trim','ScopeAlliesButUser','nextActor','#%1','meetsClassRequirements','GZawq','ParseItemNotetags','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','onBuyOk','ItemMenuStatusBgType','Scene_Item_create','Parse_Notetags_Batch','addItemCategories','Nonconsumable','getColor','gaugeBackColor','XkkIb','commandNameWindowCenter','playBuzzerSound','artifacts','maxItems','defaultItemMax','===','height','paramBase','mPmRU','luk','JhbbL','Icon','reloadMapIfUpdated','Window_Selectable_setHelpWindowItem','refreshCursor','SpeedNeg1999','drawItemData','_categoryNameWindow','updateHelp','replace','ffpZz','max','isShiftShortcutKeyForRemove','Scene_Shop_doSell','isPressed','isTriggered','MDF','onBuyCancelItemsEquipsCore','uiMenuStyle','categoryItemTypes','Width','Game_BattlerBase_param','NUM','damage','AoWvw','ytsrU','NoChangeMarker','goldWindowRectItemsEquipsCore','paramValueByName','parameters','helpDescriptionText','DrawEquipData','SUplE','Game_BattlerBase_paramPlus_artifact','buttonAssistSmallIncrement','getItemRepeatsLabel','vTJVs','_allowArtifactParamBase','allMembers','QGhHA','Step1End','_itemWindow','versionId','UkAOn','isClicked','getProxyItem','NBSvT','DIzEY','hideNewLabelSprites','loadPicture','gxcwo','isSellCommandEnabled','Window_EquipStatus_refresh','getDamageStyle','lbleF','isArtifact','isMainMenuCoreMenuImageOptionAvailable','VjMps','buttonAssistRemove','prepare','lBICG','setObject','helpWindowRect','xctJc','value','onSlotOkAutoSelect','(+%1)','MNyxR','CvXSS','postCreateItemWindowModernControls','Consumable','armors','Scene_Shop_buyingPrice','Param','Svwol','makeDeepCopy','item-%1','gWEjK','EGqEI','New','DrbLo','Game_Enemy_traitObjects_artifact','xsEaC','Window_Selectable_refresh','mmp','_doubleTouch','changeBuff','bind','fNLJQ','optimize','AhHZl','setHelpWindow','isRepeated','removeBattleTestArtifacts','newLabelEnabled','consumable','Scene_Shop_commandBuy','registerCommand','SpeedNeg999','JSON','isDrawItemNumber','?????','IYezn','Scene_Shop_buyWindowRect','EFFECT_ADD_STATE','Window_ItemList_item','ItemQuantityFmt','value1','getItemSpeedText','tLmst','drawItemEffectsMpDamage','drawUpdatedParamValueDiff','hideAdditionalSprites','equipSlotIndex','jecbd','fontSize','format','BwBUx','ShopScene','xSVln','vDtlG','Scene_Shop_prepare','getItemEffectsSelfTpGainText','TP\x20DAMAGE','_actor','paramPlusItemsEquipsCoreCustomJS','processTouchModernControls','QFADH','Scene_Load_reloadMapIfUpdated','isOptimizeCommandEnabled','flatMP','Scene_Item_createItemWindow','mainAreaBottom','drawCurrencyValue','+%1%','Damage\x20Formula\x20Error\x20for\x20%1','currentExt','user','buttonAssistText2','sellWindowRect','item','activateSellWindow','isBattleTest','kLZaM','GMWvN','Scene_Equip_commandWindowRect','createCategoryNameWindow','optimizeCmdDesc','changeEquip','weapon-%1','OCCASION','middle','aMTAF','zIkpS','isEquipCommandAdded','_statusWindow','Scene_Shop_onBuyOk','JvHUC','onCategoryOk','setTempActor','initialize','wBrHm','textSizeEx','cWYeQ','call','adjustHiddenShownGoods','cursorPagedown','callUpdateHelp','StatusWindow','Window_ShopBuy_price','Game_Party_gainItem_artifact','translucentOpacity','itemEnableJS','YUNbu','def','currencyUnit','mpRate','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','mainAreaHeight','drawItem','itypeId','MANUAL','type','BElXE','drawNewLabelIcon','Categories','Scene_Shop_categoryWindowRect','isShowNew','getItemEffectsRemovedStatesBuffsText','fill','onTouchSelectModernControls','setItemWindow','getItemScopeText','Scene_Equip_helpWindowRect','_scrollDuration','EquipScene','VXhSK','armor-%1','ZCFLc','placeItemNewLabel','gaugeLineHeight','LabelDamageMP','afqwI','WvkWw','MMeeI','tTQIi','LoSLn','kAYRf','cmxkd','addLoadListener','MaxIcons','getMenuImage','addBuyCommand','splice','2419645hPBxum','setShopStatusWindowMode','hitType','adDaV','Scene_Equip_itemWindowRect','wdYiZ','1665330yFAuRO','setCategory','refresh','onTouchSelect','object','gfbob','KTOWS','tZNFM','isProxyItem','isEquipItem','XpMde','deselect','ARRAYSTR','buffIconIndex','VMPDk','Pick\x20and\x20choose\x20equipment\x20to\x20change.','Scene_Shop_createCategoryWindow','ZjwLi','zYdXQ','yfMIC','fontFace','onSellCancel','buttonAssistKey2','EVAL','MaxArmors','forceChangeEquip','Game_Actor_forceChangeEquip','KFioK','level','paramchangeTextColor','SpeedNeg2000','LabelRemove','QiCpI','refreshActorEquipSlotsIfUpdated','drawItemDamage','drawItemEffectsTpRecovery','_tempActor','BCNEt','innerWidth','×%1','ShiftShortcutKey','show','commandStyle','MLUqW','WEAPON','_handlers','Scene_Item_helpWindowRect','Parse_Notetags_Prices','onCategoryCancelItemsEquipsCore','Speed2000','ParseWeaponNotetags','isBottomHelpMode','179641aihgga','equip','isCursorMovable','characterName','onSellOkItemsEquipsCore','OFNmS','meetsEquipRequirements','baseSellingPrice','isWeapon','SellPriceJS','isLearnedSkill','Ioyhv','iLRJn','clamp','battleMembers','JopUX','split','BuyPriceJS','WdBqj','Scene_Equip_onActorChange','commandBuy','getTextColor','aandb','DamageType%1','getItemHitTypeLabel','drawItemDamageElement','drawItemDamageAmount','iLQCx','alterSkillName','buy','BYiFp','_getClassRequirements','loadSystem','_resetFontColor','SnQKw','MmmdD','HHUwV','opacity','tpGain','asgfY','SvnDI','FUNC','DrawPortraitJS','Step3Start','mEhQB','_newLabelSprites','pageup','down','Scene_Shop_onSellCancel','USER\x20TP\x20GAIN','SUCCESS\x20RATE','elementId','goldWindowRect','Scene_Shop_onCategoryCancel','Window_ItemCategory_initialize','drawItemName','hFTRm','armorTypes','getWeaponIdWithName','isShiftRemoveShortcutEnabled','addInnerChild','pDNxT','ZfkuS','NLngZ','ItemQuantityFontSize','shift','Scene_Item_itemWindowRect','itemAt','qzbQM','AllArmors','NotConsumable','isPartyArtifact','constructor','playOkSound','KgqEA','drawItemEffectsMpRecovery','processCursorMoveModernControls','deactivate','KekRj','_getEquipRequirements','isItem','Scene_Item_createCategoryWindow','JMLXd','process_VisuMZ_ItemsEquipsCore_Notetags','BatchShop','refreshItemsEquipsCoreNoMenuImage','resetFontSettings','FAant','Window_ItemList_colSpacing','bdpGU','_slotWindow','equipSlots','MvoEl','jrebd','xBSRH','Equip\x20the\x20strongest\x20available\x20equipment.','CannotEquipMarker','VYsdL','gfPUe','SellPriceRate','allowCreateStatusWindow','Game_Actor_tradeItemWithParty','MYSgx','RxEdj','SetupProxyItemGroup','hide','itemLineRect','processCursorHomeEndTrigger','itemDataFontSize','getArmorIdWithName','speed','drawItemCustomEntryLine','tradeItemWithParty','status','AObTQ','scrollTo','calcWindowHeight','_sellWindow','schgN','_tempActorB','OCxDK','SPYfg','FontColor','wVjIY','_buyWindowLastIndex','bqGoQ','QVzMq','ZTeTR','Game_BattlerBase_param_artifact','_resetFontSize','LabelRecoverHP','yxIZa','NBfBQ','floor','description','maxBattleMembers','bitmap','CommandAddOptimize','setNewItem','removeState','EbXpj','CvLqv','HiddenItemB','_newLabelOpacity','actor','blt','List','postCreateSellWindowItemsEquipsCore','XvWqq','getItemEffectsMpRecoveryText','SPEED','toUpperCase','buyingPrice','wrCfW','createBitmap','Game_Party_setupBattleTestItems_artifact','osMLq','MaxWeapons','isSoleWeaponType','_classIDs','Text','windowPadding','Window_Selectable_initialize','number','sell','Window_EquipCommand_initialize','processHandling','setHandler','LabelElement','note','nonOptimizeEtypes','NeverUsable','changePaintOpacity','categories','AllWeapons','yflUu','ZPQNr','auto','Game_Party_gainItem','getEmptyEquipSlotOfSameEtype','updateCategoryNameWindow','KeyItemProtect','prepareItemCustomData'];_0x169b=function(){return _0x13a1a9;};return _0x169b();}function Sprite_NewLabel(){const _0x3ade66=_0x311a7f;this[_0x3ade66(0x49a)](...arguments);}Sprite_NewLabel[_0x311a7f(0x3bb)]=Object[_0x311a7f(0x237)](Sprite[_0x311a7f(0x3bb)]),Sprite_NewLabel[_0x311a7f(0x3bb)][_0x311a7f(0x552)]=Sprite_NewLabel,Sprite_NewLabel[_0x311a7f(0x3bb)][_0x311a7f(0x49a)]=function(){const _0x4e2053=_0x311a7f;Sprite[_0x4e2053(0x3bb)][_0x4e2053(0x49a)][_0x4e2053(0x49e)](this),this[_0x4e2053(0x5a4)]();},Sprite_NewLabel[_0x311a7f(0x3bb)][_0x311a7f(0x5a4)]=function(){const _0x71fda3=_0x311a7f,_0x3cab1d=ImageManager[_0x71fda3(0x369)],_0x2361d6=ImageManager['iconHeight'];this[_0x71fda3(0x592)]=new Bitmap(_0x3cab1d,_0x2361d6),this['drawNewLabelIcon'](),this[_0x71fda3(0x696)]();},Sprite_NewLabel[_0x311a7f(0x3bb)][_0x311a7f(0x4b2)]=function(){const _0x59a326=_0x311a7f,_0x35b404=VisuMZ['ItemsEquipsCore'][_0x59a326(0x5cc)][_0x59a326(0x449)]['Icon'];if(_0x35b404<=0x0)return;const _0x793d8=ImageManager[_0x59a326(0x52a)]('IconSet'),_0x39c997=ImageManager[_0x59a326(0x369)],_0x37cb86=ImageManager[_0x59a326(0x5fd)],_0xe60ce8=_0x35b404%0x10*_0x39c997,_0x36c056=Math[_0x59a326(0x58f)](_0x35b404/0x10)*_0x37cb86;this['bitmap']['blt'](_0x793d8,_0xe60ce8,_0x36c056,_0x39c997,_0x37cb86,0x0,0x0);},Sprite_NewLabel[_0x311a7f(0x3bb)][_0x311a7f(0x696)]=function(){const _0x35ac0f=_0x311a7f,_0x22de90=VisuMZ[_0x35ac0f(0x604)]['Settings']['New'],_0x5d4948=_0x22de90[_0x35ac0f(0x5aa)];if(_0x5d4948==='')return;const _0x1543a5=ImageManager[_0x35ac0f(0x369)],_0x21aa53=ImageManager[_0x35ac0f(0x5fd)];this[_0x35ac0f(0x592)][_0x35ac0f(0x4ea)]=_0x22de90['FontFace']||$gameSystem[_0x35ac0f(0x27e)](),this[_0x35ac0f(0x592)][_0x35ac0f(0x61a)]=this[_0x35ac0f(0x51f)](),this[_0x35ac0f(0x592)][_0x35ac0f(0x46d)]=_0x22de90['FontSize'],this[_0x35ac0f(0x592)][_0x35ac0f(0x638)](_0x5d4948,0x0,_0x21aa53/0x2,_0x1543a5,_0x21aa53/0x2,_0x35ac0f(0x61f));},Sprite_NewLabel['prototype'][_0x311a7f(0x51f)]=function(){const _0xd49f3c=_0x311a7f,_0x22e8d2=VisuMZ[_0xd49f3c(0x604)]['Settings'][_0xd49f3c(0x449)][_0xd49f3c(0x584)];return _0x22e8d2['match'](/#(.*)/i)?'#'+String(RegExp['$1']):ColorManager[_0xd49f3c(0x61a)](_0x22e8d2);},Window_Base[_0x311a7f(0x3bb)]['drawItemName']=function(_0xaad88b,_0x41ba94,_0x1d06aa,_0x1dafe9){const _0x56e140=_0x311a7f;if(_0xaad88b){if('KgqEA'!==_0x56e140(0x554))return _0x393ef9['ItemsEquipsCore'][_0x56e140(0x5cc)][_0x56e140(0x4a2)]['Speed0'];else{const _0x4db9c9=_0x1d06aa+(this[_0x56e140(0x640)]()-ImageManager['iconHeight'])/0x2,_0xe15aa4=ImageManager[_0x56e140(0x369)]+0x4,_0x2b1497=Math['max'](0x0,_0x1dafe9-_0xe15aa4);this[_0x56e140(0x636)](ColorManager[_0x56e140(0x3bf)](_0xaad88b)),this[_0x56e140(0x2aa)](_0xaad88b[_0x56e140(0x204)],_0x41ba94,_0x4db9c9),this[_0x56e140(0x638)](_0xaad88b['name'],_0x41ba94+_0xe15aa4,_0x1d06aa,_0x2b1497),this[_0x56e140(0x2ec)]();}}},Window_Base[_0x311a7f(0x3bb)]['drawItemNumber']=function(_0x42c5f7,_0x547478,_0x7a40b9,_0x387de2){const _0x237a3e=_0x311a7f;if(this[_0x237a3e(0x45e)](_0x42c5f7)){if(_0x237a3e(0x4c7)===_0x237a3e(0x44c))return this[_0x237a3e(0x1e4)]()[_0x237a3e(0x260)](/LOWER/i);else{this['resetFontSettings']();const _0x2c3f16=VisuMZ[_0x237a3e(0x604)][_0x237a3e(0x5cc)][_0x237a3e(0x648)],_0x7a25b3=_0x2c3f16['ItemQuantityFmt'],_0x3a69c1=_0x7a25b3[_0x237a3e(0x46e)]($gameParty[_0x237a3e(0x5ed)](_0x42c5f7));this[_0x237a3e(0x2ca)][_0x237a3e(0x46d)]=_0x2c3f16[_0x237a3e(0x54a)],this[_0x237a3e(0x638)](_0x3a69c1,_0x547478,_0x7a40b9,_0x387de2,_0x237a3e(0x5e1)),this[_0x237a3e(0x560)]();}}},Window_Base[_0x311a7f(0x3bb)][_0x311a7f(0x45e)]=function(_0x5ac984){const _0x48c474=_0x311a7f;if(DataManager[_0x48c474(0x378)](_0x5ac984))return $dataSystem['optKeyItemsNumber'];return!![];},Window_Base[_0x311a7f(0x3bb)][_0x311a7f(0x37e)]=function(_0x4bd3d6,_0x328034,_0x51ad75,_0x482a98,_0x501de8){const _0x230a34=_0x311a7f;_0x501de8=Math[_0x230a34(0x405)](_0x501de8||0x1,0x1);while(_0x501de8--){if(_0x230a34(0x2f6)!==_0x230a34(0x2f6)){if(this[_0x230a34(0x4fa)])return![];_0x609f88[_0x230a34(0x22e)]=!![];const _0x209dbe=_0x50f69a[_0x230a34(0x604)][_0x230a34(0x56f)][_0x230a34(0x49e)](this,_0xf8ef65,_0x4edbff);return _0x4c57eb[_0x230a34(0x22e)]=![],_0x209dbe;}else{_0x482a98=_0x482a98||this[_0x230a34(0x640)](),this[_0x230a34(0x3a1)][_0x230a34(0x399)]=0xa0;const _0x1b3caa=ColorManager[_0x230a34(0x3ee)]();this[_0x230a34(0x3a1)][_0x230a34(0x1f9)](_0x4bd3d6+0x1,_0x328034+0x1,_0x51ad75-0x2,_0x482a98-0x2,_0x1b3caa),this[_0x230a34(0x3a1)][_0x230a34(0x399)]=0xff;}}},VisuMZ['ItemsEquipsCore'][_0x311a7f(0x5ac)]=Window_Selectable['prototype'][_0x311a7f(0x49a)],Window_Selectable[_0x311a7f(0x3bb)][_0x311a7f(0x49a)]=function(_0x26162b){const _0x2e0236=_0x311a7f;this['initNewLabelSprites'](),VisuMZ[_0x2e0236(0x604)]['Window_Selectable_initialize'][_0x2e0236(0x49e)](this,_0x26162b);},Window_Selectable['prototype'][_0x311a7f(0x396)]=function(){const _0x3ffe9a=_0x311a7f;this[_0x3ffe9a(0x537)]={},this[_0x3ffe9a(0x599)]=0xff,this['_newLabelOpacityChange']=VisuMZ[_0x3ffe9a(0x604)]['Settings']['New'][_0x3ffe9a(0x5e6)],this['_newLabelOpacityUpperLimit']=VisuMZ[_0x3ffe9a(0x604)][_0x3ffe9a(0x5cc)][_0x3ffe9a(0x449)]['FadeLimit'];},Window_Selectable['prototype']['isShowNew']=function(){return![];},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x3fd)]=Window_Selectable[_0x311a7f(0x3bb)][_0x311a7f(0x1f6)],Window_Selectable['prototype'][_0x311a7f(0x1f6)]=function(_0x10927b){const _0x2a12ec=_0x311a7f;VisuMZ[_0x2a12ec(0x604)][_0x2a12ec(0x3fd)]['call'](this,_0x10927b);if(this[_0x2a12ec(0x4b5)]())this[_0x2a12ec(0x242)](_0x10927b);},Window_Selectable['prototype'][_0x311a7f(0x242)]=function(_0x4f7eb5){const _0x40378b=_0x311a7f;if(!_0x4f7eb5)return;$gameParty['clearNewItem'](_0x4f7eb5);let _0x30dd9f='';if(DataManager[_0x40378b(0x55a)](_0x4f7eb5))_0x30dd9f='item-%1'[_0x40378b(0x46e)](_0x4f7eb5['id']);else{if(DataManager[_0x40378b(0x512)](_0x4f7eb5)){if(_0x40378b(0x43d)!=='MNyxR')return _0x1657db['ItemsEquipsCore'][_0x40378b(0x398)][_0x40378b(0x49e)](this);else _0x30dd9f='weapon-%1'['format'](_0x4f7eb5['id']);}else{if(DataManager[_0x40378b(0x665)](_0x4f7eb5)){if(_0x40378b(0x2d7)===_0x40378b(0x2d7))_0x30dd9f=_0x40378b(0x4bf)[_0x40378b(0x46e)](_0x4f7eb5['id']);else{if(this['isItem'](_0x1ded79))return _0x3dd7da[_0x40378b(0x604)][_0x40378b(0x5cc)][_0x40378b(0x648)][_0x40378b(0x36b)];else{if(this[_0x40378b(0x512)](_0x2c6250))return _0x33a0d9[_0x40378b(0x604)]['Settings']['ItemScene'][_0x40378b(0x5a7)];else{if(this[_0x40378b(0x665)](_0x6b5bbc))return _0x514507[_0x40378b(0x604)][_0x40378b(0x5cc)][_0x40378b(0x648)][_0x40378b(0x4ee)];}}}}else{if(_0x40378b(0x489)===_0x40378b(0x489))return;else this[_0x40378b(0x586)]=this[_0x40378b(0x691)][_0x40378b(0x5c8)](),this[_0x40378b(0x691)][_0x40378b(0x4ff)](),this[_0x40378b(0x691)]['deselect'](),this['_buyWindow'][_0x40378b(0x367)](0x0,0x0),this[_0x40378b(0x495)][_0x40378b(0x4ff)](),this[_0x40378b(0x5d6)][_0x40378b(0x573)]();}}}const _0x489dfc=this[_0x40378b(0x537)][_0x30dd9f];if(_0x489dfc)_0x489dfc[_0x40378b(0x573)]();},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x44d)]=Window_Selectable[_0x311a7f(0x3bb)][_0x311a7f(0x4d8)],Window_Selectable['prototype'][_0x311a7f(0x4d8)]=function(){const _0x45a922=_0x311a7f;this[_0x45a922(0x42a)](),VisuMZ['ItemsEquipsCore'][_0x45a922(0x44d)][_0x45a922(0x49e)](this);},Window_Selectable['prototype']['hideNewLabelSprites']=function(){const _0x3f03e3=_0x311a7f;for(const _0xc5d63c of Object[_0x3f03e3(0x5c4)](this[_0x3f03e3(0x537)])){_0xc5d63c[_0x3f03e3(0x573)]();}},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x5f0)]=Window_Selectable[_0x311a7f(0x3bb)][_0x311a7f(0x635)],Window_Selectable[_0x311a7f(0x3bb)][_0x311a7f(0x635)]=function(){const _0x43cce3=_0x311a7f;this[_0x43cce3(0x690)](),VisuMZ[_0x43cce3(0x604)][_0x43cce3(0x5f0)][_0x43cce3(0x49e)](this);},Window_Selectable[_0x311a7f(0x3bb)][_0x311a7f(0x690)]=function(){const _0x3fe74d=_0x311a7f;if(!this[_0x3fe74d(0x4b5)]())return;const _0x22393c=this[_0x3fe74d(0x339)];this[_0x3fe74d(0x599)]+=this[_0x3fe74d(0x39c)];if(this[_0x3fe74d(0x599)]>=_0x22393c||this['_newLabelOpacity']<=0x0){if(_0x3fe74d(0x61b)===_0x3fe74d(0x61b))this['_newLabelOpacityChange']*=-0x1;else return _0x3d9782['ItemsEquipsCore'][_0x3fe74d(0x28b)]['call'](this);}this[_0x3fe74d(0x599)]=this['_newLabelOpacity']['clamp'](0x0,_0x22393c);for(const _0xfa3b0b of Object['values'](this[_0x3fe74d(0x537)])){_0xfa3b0b[_0x3fe74d(0x52f)]=this[_0x3fe74d(0x599)];}},Window_Selectable[_0x311a7f(0x3bb)]['createNewLabelSprite']=function(_0x1f7116){const _0x5c6524=_0x311a7f,_0x461b42=this[_0x5c6524(0x537)];if(_0x461b42[_0x1f7116]){if(_0x5c6524(0x386)!==_0x5c6524(0x617))return _0x461b42[_0x1f7116];else{const _0x4d6b28=0x0,_0x22f4b9=this['helpAreaTop'](),_0x39a37a=_0x45b2d0['boxWidth'],_0x1e3979=this['helpAreaHeight']();return new _0x399d56(_0x4d6b28,_0x22f4b9,_0x39a37a,_0x1e3979);}}else{const _0x124834=new Sprite_NewLabel();return _0x461b42[_0x1f7116]=_0x124834,this[_0x5c6524(0x546)](_0x124834),_0x124834;}},Window_Selectable[_0x311a7f(0x3bb)]['placeNewLabel']=function(_0x246b4d,_0x55b3c6,_0x30f8f5){const _0x586b0e=_0x311a7f;let _0x5ea502='';if(DataManager[_0x586b0e(0x55a)](_0x246b4d))_0x5ea502=_0x586b0e(0x446)['format'](_0x246b4d['id']);else{if(DataManager[_0x586b0e(0x512)](_0x246b4d))_0x5ea502=_0x586b0e(0x48f)[_0x586b0e(0x46e)](_0x246b4d['id']);else{if(DataManager[_0x586b0e(0x665)](_0x246b4d)){if(_0x586b0e(0x5ec)===_0x586b0e(0x2b7))return this['commandWindowRectItemsEquipsCore']();else _0x5ea502=_0x586b0e(0x4bf)['format'](_0x246b4d['id']);}else return;}}const _0x15757a=this['createNewLabelSprite'](_0x5ea502);_0x15757a['move'](_0x55b3c6,_0x30f8f5),_0x15757a['show'](),_0x15757a['opacity']=this[_0x586b0e(0x599)];},Window_ItemCategory[_0x311a7f(0x29f)]=VisuMZ['ItemsEquipsCore'][_0x311a7f(0x5cc)][_0x311a7f(0x4b3)][_0x311a7f(0x59c)],Window_ItemCategory[_0x311a7f(0x40d)]=[_0x311a7f(0x345),'HiddenItemB',_0x311a7f(0x3ec),_0x311a7f(0x440),_0x311a7f(0x27d),'BattleUsable',_0x311a7f(0x34c),'NeverUsable'],VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x540)]=Window_ItemCategory['prototype'][_0x311a7f(0x49a)],Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x49a)]=function(_0x429cb1){const _0x2061cd=_0x311a7f;VisuMZ['ItemsEquipsCore'][_0x2061cd(0x540)][_0x2061cd(0x49e)](this,_0x429cb1),this[_0x2061cd(0x48c)](_0x429cb1);},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x48c)]=function(_0x4dd6d4){const _0xbfe56e=_0x311a7f,_0x4a7172=new Rectangle(0x0,0x0,_0x4dd6d4[_0xbfe56e(0x1f0)],_0x4dd6d4[_0xbfe56e(0x3f6)]);this[_0xbfe56e(0x401)]=new Window_Base(_0x4a7172),this[_0xbfe56e(0x401)][_0xbfe56e(0x52f)]=0x0,this[_0xbfe56e(0x3d0)](this[_0xbfe56e(0x401)]),this[_0xbfe56e(0x5be)]();},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x5e7)]=function(){const _0x448b0d=_0x311a7f;return Imported[_0x448b0d(0x3cd)]&&Window_HorzCommand[_0x448b0d(0x3bb)]['isUseModernControls']['call'](this);},Window_ItemCategory[_0x311a7f(0x3bb)]['processCursorHomeEndTrigger']=function(){},Window_ItemCategory[_0x311a7f(0x3bb)]['playOkSound']=function(){const _0x59b198=_0x311a7f;if(!this[_0x59b198(0x5e7)]())Window_HorzCommand[_0x59b198(0x3bb)][_0x59b198(0x553)][_0x59b198(0x49e)](this);},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x376)]=function(){const _0x21af91=_0x311a7f;return this[_0x21af91(0x3ac)]?this[_0x21af91(0x3f3)]():0x4;},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x635)]=function(){const _0x3db18d=_0x311a7f;Window_HorzCommand['prototype'][_0x3db18d(0x635)][_0x3db18d(0x49e)](this),this[_0x3db18d(0x423)]&&this[_0x3db18d(0x423)]['setCategory'](this[_0x3db18d(0x482)]());},Window_ItemCategory[_0x311a7f(0x3bb)]['processCursorMoveModernControls']=function(){const _0x15592a=_0x311a7f;if(this[_0x15592a(0x50c)]()){const _0x33ebd2=this[_0x15592a(0x5c8)]();if(this[_0x15592a(0x423)]&&this[_0x15592a(0x423)][_0x15592a(0x376)]()<=0x1)Input['isRepeated']('right')&&this[_0x15592a(0x5ca)](Input[_0x15592a(0x409)](_0x15592a(0x5e1))),Input['isRepeated'](_0x15592a(0x6a5))&&this[_0x15592a(0x34e)](Input[_0x15592a(0x409)](_0x15592a(0x6a5)));else this[_0x15592a(0x423)]&&this['_itemWindow'][_0x15592a(0x376)]()>0x1&&(Input[_0x15592a(0x456)](_0x15592a(0x21a))&&!Input[_0x15592a(0x408)](_0x15592a(0x54b))&&this[_0x15592a(0x5ca)](Input['isTriggered'](_0x15592a(0x21a))),Input[_0x15592a(0x456)](_0x15592a(0x538))&&!Input['isPressed']('shift')&&('zkIBU'!==_0x15592a(0x230)?_0x4a9e97[_0x15592a(0x30c)](_0x350aae[_0x15592a(0x2ae)],!![]):this['cursorLeft'](Input[_0x15592a(0x409)](_0x15592a(0x538)))));this['index']()!==_0x33ebd2&&this[_0x15592a(0x1e3)]();}},Window_ItemCategory['prototype']['processHandling']=function(){const _0x4da6c7=_0x311a7f;if(this['isUseModernControls']())return;Window_HorzCommand[_0x4da6c7(0x3bb)][_0x4da6c7(0x5b0)][_0x4da6c7(0x49e)](this);},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x2f5)]=function(){const _0x304b9a=_0x311a7f;if(this[_0x304b9a(0x5e7)]()){if(_0x304b9a(0x3ba)===_0x304b9a(0x672))this[_0x304b9a(0x609)][_0x304b9a(0x557)]();else return![];}else return Window_HorzCommand['prototype'][_0x304b9a(0x2f5)][_0x304b9a(0x49e)](this);},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x478)]=function(){const _0x3ce9f4=_0x311a7f;if(this[_0x3ce9f4(0x218)]()){if('iduIR'==='EZrlI')_0x1e0d0a=_0x3ce9f4(0x446)['format'](_0x15e32d['id']);else{TouchInput[_0x3ce9f4(0x409)]()&&this[_0x3ce9f4(0x4d9)](!![]);if(TouchInput['isClicked']())this[_0x3ce9f4(0x65f)]();else TouchInput[_0x3ce9f4(0x38c)]()&&this[_0x3ce9f4(0x34a)]();}}},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x4d9)]=function(_0x4c45c9){const _0x5b9d06=_0x311a7f;this[_0x5b9d06(0x5e7)]()?this['onTouchSelectModern'](!![]):Window_HorzCommand[_0x5b9d06(0x3bb)][_0x5b9d06(0x4d9)][_0x5b9d06(0x49e)](this,_0x4c45c9);},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x31c)]=function(_0x44e084){const _0x371ade=_0x311a7f;this[_0x371ade(0x44f)]=![];if(this[_0x371ade(0x50c)]()){if(_0x371ade(0x4c4)===_0x371ade(0x48a))_0x45e1fe['isPressed'](_0x371ade(0x54b))&&this['allowShiftScrolling']()?this[_0x371ade(0x4a0)]():this[_0x371ade(0x607)](_0x4e3b5b[_0x371ade(0x409)](_0x371ade(0x539)));else{const _0x21e4b4=this['index'](),_0x335f58=this[_0x371ade(0x393)]();if(_0x335f58>=0x0&&_0x335f58!==this['index']()){if('XBXAU'===_0x371ade(0x2c4))this['select'](_0x335f58);else return;}_0x44e084&&this[_0x371ade(0x5c8)]()!==_0x21e4b4&&(_0x371ade(0x285)!==_0x371ade(0x285)?(_0x15ed6e[_0x371ade(0x604)][_0x371ade(0x25c)]['call'](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x371ade(0x40b)]()):this[_0x371ade(0x1e3)]());}}},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x22f)]=function(){const _0xd99ff8=_0x311a7f;this['addItemCategories'](),this[_0xd99ff8(0x351)](this[_0xd99ff8(0x5c8)]());},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x3eb)]=function(){const _0x50148e=_0x311a7f;for(const _0x14db98 of Window_ItemCategory[_0x50148e(0x29f)]){_0x50148e(0x460)!=='IYezn'?this[_0x50148e(0x39c)]*=-0x1:this['addItemCategory'](_0x14db98);}},Window_ItemCategory[_0x311a7f(0x3bb)]['addItemCategory']=function(_0x7480a5){const _0x5bf113=_0x311a7f,_0x2bac23=_0x7480a5['Type'],_0x44887c=_0x7480a5[_0x5bf113(0x3fb)],_0x11b1c9=_0x7480a5[_0x5bf113(0x2d2)]||0x0;if(_0x11b1c9>0x0&&!$gameSwitches[_0x5bf113(0x43a)](_0x11b1c9))return;let _0x4a33d4='',_0x3698e4='category',_0x9de6a3=_0x2bac23;if(_0x2bac23[_0x5bf113(0x260)](/Category:(.*)/i))_0x4a33d4=String(RegExp['$1'])[_0x5bf113(0x3df)]();else{if(Window_ItemCategory[_0x5bf113(0x40d)][_0x5bf113(0x1f7)](_0x2bac23)){if(_0x5bf113(0x238)==='sbnIO'){_0x4ba9ff+=0x1;if(_0x280280[_0x5bf113(0x5b3)]['match'](_0x37b086)){const _0x2428c5=_0x5613de(_0x477dbb['$1'])||0x1;if(_0x4aa36e>=_0x2428c5)return!![];}if(_0x4658bd[_0x5bf113(0x5b3)]['match'](_0x3e93d2)){const _0x36e21b=_0x379c14(_0x6cffb8['$1'])||0x1;if(_0x5a9080>=_0x36e21b)return!![];}}else _0x4a33d4=VisuMZ[_0x5bf113(0x604)][_0x5bf113(0x5cc)][_0x5bf113(0x4b3)][_0x2bac23];}else{if([_0x5bf113(0x649),'RegularItems'][_0x5bf113(0x1f7)](_0x2bac23))_0x4a33d4=TextManager[_0x5bf113(0x486)];else{if(_0x2bac23===_0x5bf113(0x3da))_0x4a33d4=TextManager[_0x5bf113(0x1d5)];else{if(_0x2bac23===_0x5bf113(0x5b8))'mpRci'!==_0x5bf113(0x20c)?(this[_0x5bf113(0x1e3)](),_0x5f3dd2[_0x5bf113(0x69c)]['commandEquip'](),_0x13b80f[_0x5bf113(0x69c)][_0x5bf113(0x564)][_0x5bf113(0x373)](-0x1)):_0x4a33d4=TextManager['weapon'];else{if(_0x2bac23===_0x5bf113(0x54f))_0x4a33d4=TextManager['armor'];else{if(_0x2bac23['match'](/WTYPE:(\d+)/i))_0x4a33d4=$dataSystem['weaponTypes'][Number(RegExp['$1'])]||'';else{if(_0x2bac23[_0x5bf113(0x260)](/ATYPE:(\d+)/i))_0x5bf113(0x61e)===_0x5bf113(0x61e)?_0x4a33d4=$dataSystem['armorTypes'][Number(RegExp['$1'])]||'':_0x4b051b=_0x5e6929[_0x5bf113(0x3b7)]((this[_0x5bf113(0x1e5)]-_0x2104e0)/0x2);else{if(_0x2bac23[_0x5bf113(0x260)](/ETYPE:(\d+)/i)){if(_0x5bf113(0x4c8)==='vetWB'){if(_0x28a675[_0x5bf113(0x43a)](_0x1e0966))return!![];}else _0x4a33d4=$dataSystem[_0x5bf113(0x37c)][Number(RegExp['$1'])]||'';}}}}}}}}}_0x44887c>0x0&&this[_0x5bf113(0x63f)]()!==_0x5bf113(0x255)&&(_0x4a33d4=_0x5bf113(0x2e6)[_0x5bf113(0x46e)](_0x44887c,_0x4a33d4)),this['addCommand'](_0x4a33d4,_0x3698e4,!![],_0x9de6a3);},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x692)]=function(){const _0xd418eb=_0x311a7f;return VisuMZ[_0xd418eb(0x604)][_0xd418eb(0x5cc)][_0xd418eb(0x4b3)][_0xd418eb(0x30a)];},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x4ad)]=function(_0x410cfb){const _0x2dd2a7=_0x311a7f,_0x3b3b94=this[_0x2dd2a7(0x5d4)](_0x410cfb);if(_0x3b3b94===_0x2dd2a7(0x381))this[_0x2dd2a7(0x60b)](_0x410cfb);else{if(_0x3b3b94===_0x2dd2a7(0x2fd)){if(_0x2dd2a7(0x2a5)!==_0x2dd2a7(0x2a5)){this[_0x2dd2a7(0x46a)](),this[_0x2dd2a7(0x560)]();if(this[_0x2dd2a7(0x476)])this['_actor'][_0x2dd2a7(0x4d8)]();this[_0x2dd2a7(0x641)]()?this[_0x2dd2a7(0x2a1)]():_0x550738[_0x2dd2a7(0x604)][_0x2dd2a7(0x42e)][_0x2dd2a7(0x49e)](this);}else this[_0x2dd2a7(0x269)](_0x410cfb);}else _0x2dd2a7(0x444)!==_0x2dd2a7(0x444)?(_0x9704cd[_0x2dd2a7(0x2f0)](_0x2dd2a7(0x481)[_0x2dd2a7(0x46e)](this['_item']['name'])),_0x2a2581[_0x2dd2a7(0x2f0)](_0x5a6a24)):Window_HorzCommand[_0x2dd2a7(0x3bb)][_0x2dd2a7(0x4ad)]['call'](this,_0x410cfb);}},Window_ItemCategory[_0x311a7f(0x3bb)]['categoryStyle']=function(){const _0x170fc7=_0x311a7f;return VisuMZ[_0x170fc7(0x604)][_0x170fc7(0x5cc)]['Categories'][_0x170fc7(0x680)];},Window_ItemCategory['prototype']['categoryStyleCheck']=function(_0x3a4a46){const _0x2ab0bd=_0x311a7f;if(_0x3a4a46<0x0)return _0x2ab0bd(0x255);const _0x93b361=this[_0x2ab0bd(0x63f)]();if(_0x93b361!==_0x2ab0bd(0x5bb))return _0x93b361;else{const _0x4b684a=this[_0x2ab0bd(0x235)](_0x3a4a46);if(_0x4b684a[_0x2ab0bd(0x260)](/\\I\[(\d+)\]/i)){if('xmgyx'!=='xmgyx')this[_0x2ab0bd(0x36a)]++;else{const _0xe75d84=this['itemLineRect'](_0x3a4a46),_0x2ec3a4=this['textSizeEx'](_0x4b684a)['width'];if(_0x2ec3a4<=_0xe75d84[_0x2ab0bd(0x1f0)]){if('UlOwV'===_0x2ab0bd(0x596))_0x5aa430[_0x2ab0bd(0x3bb)]['initialize'][_0x2ab0bd(0x49e)](this),this['createBitmap']();else return _0x2ab0bd(0x381);}else return _0x2ab0bd(0x2fd);}}else return _0x2ab0bd(0x255);}},Window_ItemCategory['prototype']['drawItemStyleIconText']=function(_0x24deed){const _0x1b9bfc=_0x311a7f,_0x2219f4=this[_0x1b9bfc(0x574)](_0x24deed),_0x35bd97=this[_0x1b9bfc(0x235)](_0x24deed),_0x311cdb=this[_0x1b9bfc(0x49c)](_0x35bd97)[_0x1b9bfc(0x1f0)];this[_0x1b9bfc(0x5b6)](this['isCommandEnabled'](_0x24deed));const _0x5c88de=this[_0x1b9bfc(0x692)]();if(_0x5c88de==='right'){if(_0x1b9bfc(0x1d0)==='RMhJo'){_0x11d6c3+=_0x1b9bfc(0x2c5)[_0x1b9bfc(0x46e)](_0x55e940['iconIndex']),_0x471e0f++;if(_0x566004>=_0x304f5d)return _0x2eb82e;}else this['drawTextEx'](_0x35bd97,_0x2219f4['x']+_0x2219f4[_0x1b9bfc(0x1f0)]-_0x311cdb,_0x2219f4['y'],_0x311cdb);}else{if(_0x5c88de===_0x1b9bfc(0x61f)){const _0x6ad436=_0x2219f4['x']+Math[_0x1b9bfc(0x58f)]((_0x2219f4[_0x1b9bfc(0x1f0)]-_0x311cdb)/0x2);this['drawTextEx'](_0x35bd97,_0x6ad436,_0x2219f4['y'],_0x311cdb);}else{if(_0x1b9bfc(0x257)!==_0x1b9bfc(0x3e4))this['drawTextEx'](_0x35bd97,_0x2219f4['x'],_0x2219f4['y'],_0x311cdb);else{const _0x639f90=_0x4c5995[_0x1b9bfc(0x604)][_0x1b9bfc(0x5cc)][_0x1b9bfc(0x4a2)]['LabelRecoverHP'];return _0x639f90[_0x1b9bfc(0x46e)](_0x2ac538['hp']);}}}},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x269)]=function(_0x21ea13){const _0x20a48f=_0x311a7f,_0x29f645=this[_0x20a48f(0x235)](_0x21ea13);if(_0x29f645[_0x20a48f(0x260)](/\\I\[(\d+)\]/i)){if('JBWuP'!==_0x20a48f(0x4e0)){const _0x534a16=Number(RegExp['$1'])||0x0,_0x163caf=this[_0x20a48f(0x574)](_0x21ea13),_0x3e59c1=_0x163caf['x']+Math[_0x20a48f(0x58f)]((_0x163caf[_0x20a48f(0x1f0)]-ImageManager[_0x20a48f(0x369)])/0x2),_0x288ebf=_0x163caf['y']+(_0x163caf[_0x20a48f(0x3f6)]-ImageManager[_0x20a48f(0x5fd)])/0x2;this[_0x20a48f(0x2aa)](_0x534a16,_0x3e59c1,_0x288ebf);}else _0x1cd1e7+=_0x4679bd(_0x91637f['$1']);}},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x2ab)]=Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x4b9)],Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x4b9)]=function(_0x461270){const _0x189eec=_0x311a7f;VisuMZ[_0x189eec(0x604)][_0x189eec(0x2ab)][_0x189eec(0x49e)](this,_0x461270),_0x461270['_categoryWindow']=this;},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x4a1)]=function(){const _0xe184fc=_0x311a7f;Window_HorzCommand[_0xe184fc(0x3bb)][_0xe184fc(0x4a1)][_0xe184fc(0x49e)](this);if(this[_0xe184fc(0x401)])this[_0xe184fc(0x5be)]();},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x5be)]=function(){const _0x30a5fe=_0x311a7f,_0xdd215e=this[_0x30a5fe(0x401)];_0xdd215e['contents'][_0x30a5fe(0x639)]();const _0x48c46e=this[_0x30a5fe(0x5d4)](this['index']());if(_0x48c46e==='icon'){const _0x2901da=this['itemLineRect'](this[_0x30a5fe(0x5c8)]());let _0x3babf7=this[_0x30a5fe(0x235)](this[_0x30a5fe(0x5c8)]());_0x3babf7=_0x3babf7[_0x30a5fe(0x403)](/\\I\[(\d+)\]/gi,''),_0xdd215e['resetFontSettings'](),this[_0x30a5fe(0x3d1)](_0x3babf7,_0x2901da),this[_0x30a5fe(0x614)](_0x3babf7,_0x2901da),this[_0x30a5fe(0x2bf)](_0x3babf7,_0x2901da);}},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x3d1)]=function(_0xf649a3,_0x1ef287){},Window_ItemCategory['prototype'][_0x311a7f(0x614)]=function(_0x9c35c7,_0x4c9abd){const _0x28eb14=_0x311a7f,_0x23ea2f=this[_0x28eb14(0x401)];_0x23ea2f['drawText'](_0x9c35c7,0x0,_0x4c9abd['y'],_0x23ea2f['innerWidth'],_0x28eb14(0x61f));},Window_ItemCategory[_0x311a7f(0x3bb)][_0x311a7f(0x2bf)]=function(_0x557c45,_0x495908){const _0x3e9b2e=_0x311a7f,_0x5abc64=this[_0x3e9b2e(0x401)],_0x5326d8=$gameSystem['windowPadding'](),_0x44d91d=_0x495908['x']+Math['floor'](_0x495908[_0x3e9b2e(0x1f0)]/0x2)+_0x5326d8;_0x5abc64['x']=_0x5abc64[_0x3e9b2e(0x1f0)]/-0x2+_0x44d91d,_0x5abc64['y']=Math['floor'](_0x495908[_0x3e9b2e(0x3f6)]/0x2);},Window_ItemList[_0x311a7f(0x3bb)][_0x311a7f(0x556)]=function(){const _0x37bc4c=_0x311a7f;if(this[_0x37bc4c(0x50c)]()){const _0x310dfa=this[_0x37bc4c(0x5c8)]();if(this['maxCols']()<=0x1)!this[_0x37bc4c(0x28a)]('pagedown')&&Input['isTriggered'](_0x37bc4c(0x21a))&&this['cursorPagedown'](),!this['isHandled'](_0x37bc4c(0x538))&&Input[_0x37bc4c(0x409)](_0x37bc4c(0x538))&&this[_0x37bc4c(0x63e)]();else{if(this['maxCols']()>0x1){if('avekF'===_0x37bc4c(0x397)){Input[_0x37bc4c(0x456)](_0x37bc4c(0x5e1))&&this[_0x37bc4c(0x5ca)](Input[_0x37bc4c(0x409)]('right'));Input[_0x37bc4c(0x456)]('left')&&this[_0x37bc4c(0x34e)](Input['isTriggered']('left'));if(this[_0x37bc4c(0x270)]())Input[_0x37bc4c(0x409)](_0x37bc4c(0x21a))&&Input[_0x37bc4c(0x408)](_0x37bc4c(0x54b))&&this[_0x37bc4c(0x4a0)](),Input[_0x37bc4c(0x409)]('pageup')&&Input[_0x37bc4c(0x408)](_0x37bc4c(0x54b))&&this[_0x37bc4c(0x63e)]();else{if(Input[_0x37bc4c(0x409)](_0x37bc4c(0x21a))){if('wxepJ'!==_0x37bc4c(0x2c3))return!this['isUseModernControls']();else this[_0x37bc4c(0x4a0)]();}if(Input[_0x37bc4c(0x409)](_0x37bc4c(0x538))){if(_0x37bc4c(0x2f9)!==_0x37bc4c(0x2f9))return this[_0x37bc4c(0x55a)](_0x3d393c)&&_0x53e74e['itypeId']===0x2;else this[_0x37bc4c(0x63e)]();}}}else this[_0x37bc4c(0x690)](),_0x4a2564[_0x37bc4c(0x604)][_0x37bc4c(0x5f0)][_0x37bc4c(0x49e)](this);}}if(Input[_0x37bc4c(0x456)](_0x37bc4c(0x539))){if(_0x37bc4c(0x622)===_0x37bc4c(0x622)){if(Input[_0x37bc4c(0x408)](_0x37bc4c(0x54b))&&this['allowShiftScrolling']()){if(_0x37bc4c(0x322)!=='xojzR'){const _0x17f1a8=_0x37528e[_0xe6cca7];if(_0x17f1a8&&_0x17f1a8[_0x37bc4c(0x204)]>0x0){_0x57ff3b+=_0x37bc4c(0x2c5)[_0x37bc4c(0x46e)](_0x17f1a8['iconIndex']),_0x2c7b5b++;if(_0x48bc87>=_0x438255)return _0x53442f;}}else this[_0x37bc4c(0x4a0)]();}else this['cursorDown'](Input['isTriggered'](_0x37bc4c(0x539)));}else return _0x259b1d[_0x37bc4c(0x604)]['Settings'][_0x37bc4c(0x4a2)][_0x37bc4c(0x67e)];}Input['isRepeated']('up')&&(Input[_0x37bc4c(0x408)](_0x37bc4c(0x54b))&&this['allowShiftScrolling']()?this[_0x37bc4c(0x63e)]():this[_0x37bc4c(0x64d)](Input[_0x37bc4c(0x409)]('up')));if(Imported['VisuMZ_0_CoreEngine']){if('VNZTz'!==_0x37bc4c(0x374))this[_0x37bc4c(0x575)]();else{if(!_0x1f727f['value'](_0x4465eb))return![];}}this[_0x37bc4c(0x5c8)]()!==_0x310dfa&&this[_0x37bc4c(0x1e3)]();}},Window_ItemList['prototype'][_0x311a7f(0x270)]=function(){const _0x48eb36=_0x311a7f,_0x4887b7=SceneManager[_0x48eb36(0x69c)],_0x40f639=[Scene_Item,Scene_Shop];return _0x40f639[_0x48eb36(0x1f7)](_0x4887b7[_0x48eb36(0x552)]);},Window_ItemList[_0x311a7f(0x3bb)]['activate']=function(){const _0x379dcb=_0x311a7f;Window_Selectable[_0x379dcb(0x3bb)][_0x379dcb(0x5d0)]['call'](this);if(this[_0x379dcb(0x609)]&&this[_0x379dcb(0x609)][_0x379dcb(0x5e7)]()){if(_0x379dcb(0x501)!=='RJsGR')this[_0x379dcb(0x609)][_0x379dcb(0x5d0)]();else{if(!this[_0x379dcb(0x240)]())return _0x2e0ad2;if(this['drawItemEffectsHpRecovery'](_0x33ce0d,_0x27c57c,_0x4b521f))_0x5fe411+=this[_0x379dcb(0x640)]();if(this[_0x379dcb(0x555)](_0x222d88,_0xf8003e,_0xc46005))_0x411183+=this[_0x379dcb(0x640)]();if(this['drawItemEffectsTpRecovery'](_0x2ea015,_0x8f073,_0x301064))_0x1c1ea4+=this['lineHeight']();if(this[_0x379dcb(0x368)](_0x4718e0,_0x170d9c,_0x44d696))_0x568c14+=this[_0x379dcb(0x640)]();if(this[_0x379dcb(0x468)](_0x295558,_0x51eb6f,_0x413470))_0x212566+=this[_0x379dcb(0x640)]();if(this[_0x379dcb(0x302)](_0x16b334,_0x559bbc,_0x1ec219))_0x217cd2+=this[_0x379dcb(0x640)]();if(this[_0x379dcb(0x308)](_0x215c47,_0x25c4ee,_0x2f63cd))_0x39035d+=this['lineHeight']();if(this[_0x379dcb(0x66c)](_0x37b6f3,_0x8fb0cf,_0xf998cb))_0x452603+=this['lineHeight']();if(this[_0x379dcb(0x26b)](_0xfb27e5,_0x42e094,_0x5883e5))_0x2fb9a1+=this[_0x379dcb(0x640)]();return this['resetFontSettings'](),_0x5d560a;}}},Window_ItemList['prototype']['deactivate']=function(){const _0x28e644=_0x311a7f;Window_Selectable[_0x28e644(0x3bb)]['deactivate'][_0x28e644(0x49e)](this),this['_categoryWindow']&&this[_0x28e644(0x609)][_0x28e644(0x5e7)]()&&this['_categoryWindow'][_0x28e644(0x557)]();},Window_ItemList['prototype'][_0x311a7f(0x4d7)]=function(_0x198a88){const _0xd10547=_0x311a7f;if(this[_0xd10547(0x1d7)]!==_0x198a88){this[_0xd10547(0x1d7)]=_0x198a88,this[_0xd10547(0x4d8)]();if(this[_0xd10547(0x609)]&&this[_0xd10547(0x609)][_0xd10547(0x5e7)]())this[_0xd10547(0x373)](0x0);else{if(_0xd10547(0x4d3)!=='zkeGB')this['scrollTo'](0x0,0x0);else{_0x44bdb0+=0x1;if(_0x3811f2[_0xd10547(0x5b3)][_0xd10547(0x260)](_0x4f0536)){const _0x3e81c9=_0x19ddcf(_0x5e64d1['$1'])||0x1;if(_0xf8da65>=_0x3e81c9)return!![];}if(_0x502d0e[_0xd10547(0x5b3)][_0xd10547(0x260)](_0x1fe134)){const _0x24c388=_0x3e73b7(_0x17b3dc['$1'])||0x1;if(_0x552154>=_0x24c388)return!![];}}}}},VisuMZ['ItemsEquipsCore'][_0x311a7f(0x618)]=Window_ItemList[_0x311a7f(0x3bb)][_0x311a7f(0x376)],Window_ItemList['prototype']['maxCols']=function(){const _0x4b940d=_0x311a7f;if(SceneManager[_0x4b940d(0x69c)]['constructor']===Scene_Battle)return VisuMZ['ItemsEquipsCore'][_0x4b940d(0x618)]['call'](this);else return SceneManager[_0x4b940d(0x69c)][_0x4b940d(0x552)]===Scene_Map?VisuMZ[_0x4b940d(0x604)]['Window_ItemList_maxCols']['call'](this):VisuMZ[_0x4b940d(0x604)]['Settings'][_0x4b940d(0x648)][_0x4b940d(0x603)];},VisuMZ['ItemsEquipsCore'][_0x311a7f(0x562)]=Window_ItemList[_0x311a7f(0x3bb)]['colSpacing'],Window_ItemList[_0x311a7f(0x3bb)][_0x311a7f(0x258)]=function(){const _0x520406=_0x311a7f;if(this['maxCols']()<=0x1){if(_0x520406(0x59e)!==_0x520406(0x59e)){let _0x1a037c=this[_0x520406(0x565)]()[_0x520406(0x28c)];while(this[_0x520406(0x304)]['length']>_0x1a037c){const _0x2c5a03=this[_0x520406(0x304)][this[_0x520406(0x304)][_0x520406(0x28c)]-0x1];_0x2c5a03&&_0x2c5a03[_0x520406(0x4da)]()&&_0x34f95f[_0x520406(0x5ce)](_0x2c5a03[_0x520406(0x4da)](),0x1),this[_0x520406(0x304)][_0x520406(0x1e7)]();}while(_0x1a037c>this['_equips'][_0x520406(0x28c)]){this[_0x520406(0x304)][_0x520406(0x300)](new _0x5aa05f());}}else return Window_Selectable[_0x520406(0x3bb)][_0x520406(0x258)][_0x520406(0x49e)](this);}else return VisuMZ[_0x520406(0x604)][_0x520406(0x562)][_0x520406(0x49e)](this);},Window_ItemList[_0x311a7f(0x3bb)][_0x311a7f(0x1f7)]=function(_0x316c40){const _0x59f270=_0x311a7f;switch(this['_category']){case'AllItems':return DataManager[_0x59f270(0x55a)](_0x316c40);case _0x59f270(0x1ea):return DataManager[_0x59f270(0x55a)](_0x316c40)&&_0x316c40[_0x59f270(0x4ae)]===0x1;case _0x59f270(0x3da):return DataManager['isItem'](_0x316c40)&&_0x316c40[_0x59f270(0x4ae)]===0x2;case _0x59f270(0x345):return DataManager[_0x59f270(0x55a)](_0x316c40)&&_0x316c40['itypeId']===0x3;case _0x59f270(0x598):return DataManager[_0x59f270(0x55a)](_0x316c40)&&_0x316c40[_0x59f270(0x4ae)]===0x4;case _0x59f270(0x440):return DataManager[_0x59f270(0x55a)](_0x316c40)&&_0x316c40[_0x59f270(0x459)];case _0x59f270(0x3ec):return DataManager[_0x59f270(0x55a)](_0x316c40)&&!_0x316c40[_0x59f270(0x459)];case'AlwaysUsable':return DataManager['isItem'](_0x316c40)&&[0x0]['includes'](_0x316c40[_0x59f270(0x36e)]);case _0x59f270(0x5d1):return DataManager['isItem'](_0x316c40)&&[0x0,0x1]['includes'](_0x316c40[_0x59f270(0x36e)]);case _0x59f270(0x34c):return DataManager['isItem'](_0x316c40)&&[0x0,0x2][_0x59f270(0x1f7)](_0x316c40['occasion']);case _0x59f270(0x5b5):return DataManager[_0x59f270(0x55a)](_0x316c40)&&[0x3][_0x59f270(0x1f7)](_0x316c40[_0x59f270(0x36e)]);case'AllWeapons':return DataManager[_0x59f270(0x512)](_0x316c40);case _0x59f270(0x54f):return DataManager[_0x59f270(0x665)](_0x316c40);default:if(this[_0x59f270(0x1d7)][_0x59f270(0x260)](/WTYPE:(\d+)/i))return DataManager[_0x59f270(0x512)](_0x316c40)&&_0x316c40[_0x59f270(0x228)]===Number(RegExp['$1']);else{if(this[_0x59f270(0x1d7)][_0x59f270(0x260)](/WTYPE:(.*)/i)){if('tZNFM'!==_0x59f270(0x4dd))return _0x143c07[_0x59f270(0x604)][_0x59f270(0x5cc)][_0x59f270(0x4a2)][_0x59f270(0x45c)];else{const _0xdadc71=$dataSystem['weaponTypes'][_0x59f270(0x2df)](String(RegExp['$1'])[_0x59f270(0x3df)]());return DataManager[_0x59f270(0x512)](_0x316c40)&&_0x316c40[_0x59f270(0x228)]===_0xdadc71;}}else{if(this[_0x59f270(0x1d7)]['match'](/ATYPE:(\d+)/i))return DataManager['isArmor'](_0x316c40)&&_0x316c40[_0x59f270(0x632)]===Number(RegExp['$1']);else{if(this['_category'][_0x59f270(0x260)](/ATYPE:(.*)/i)){if(_0x59f270(0x52e)!==_0x59f270(0x428)){const _0x3b9cad=$dataSystem[_0x59f270(0x543)][_0x59f270(0x2df)](String(RegExp['$1'])[_0x59f270(0x3df)]());return DataManager[_0x59f270(0x665)](_0x316c40)&&_0x316c40[_0x59f270(0x632)]===_0x3b9cad;}else _0x3b4af4[_0x59f270(0x4ef)](_0x194142,this['_item']);}else{if(this[_0x59f270(0x1d7)]['match'](/ETYPE:(\d+)/i)){if(_0x59f270(0x4f6)!==_0x59f270(0x37f))return!!_0x316c40&&_0x316c40['etypeId']===Number(RegExp['$1']);else{if(_0x5cd4a8[_0x28c62c]===_0x2fa310){_0x4b7e1f=_0x331139;if(!_0x1a3951[_0x454cae])return _0x53f489;}}}else{if(this[_0x59f270(0x1d7)][_0x59f270(0x260)](/ETYPE:(.*)/i)){const _0x4173c3=$dataSystem[_0x59f270(0x37c)][_0x59f270(0x2df)](String(RegExp['$1'])[_0x59f270(0x3df)]());return DataManager[_0x59f270(0x665)](_0x316c40)&&_0x316c40[_0x59f270(0x2d5)]===_0x4173c3;}else{if(this[_0x59f270(0x1d7)][_0x59f270(0x260)](/Category:(.*)/i))return!!_0x316c40&&_0x316c40[_0x59f270(0x5b7)]['includes'](String(RegExp['$1'])[_0x59f270(0x5a1)]()['trim']());}}}}}}}return![];},Window_ItemList[_0x311a7f(0x3bb)][_0x311a7f(0x4b5)]=function(){return!![];},VisuMZ[_0x311a7f(0x604)]['Window_ItemList_drawItem']=Window_ItemList[_0x311a7f(0x3bb)][_0x311a7f(0x4ad)],Window_ItemList[_0x311a7f(0x3bb)][_0x311a7f(0x4ad)]=function(_0x3faaa4){const _0x1985a9=_0x311a7f;VisuMZ[_0x1985a9(0x604)][_0x1985a9(0x389)][_0x1985a9(0x49e)](this,_0x3faaa4),this[_0x1985a9(0x4c1)](_0x3faaa4);},Window_ItemList['prototype'][_0x311a7f(0x338)]=function(_0x4185cd,_0x53e413,_0x1be5b7,_0x21ff2a){const _0x586c60=_0x311a7f;Window_Selectable[_0x586c60(0x3bb)][_0x586c60(0x338)][_0x586c60(0x49e)](this,_0x4185cd,_0x53e413,_0x1be5b7,_0x21ff2a);},Window_ItemList['prototype'][_0x311a7f(0x4c1)]=function(_0xa4e171){const _0x125a9b=_0x311a7f,_0x1eb0bc=this['itemAt'](_0xa4e171);if(!_0x1eb0bc||!this[_0x125a9b(0x4b5)]())return;if(!$gameParty[_0x125a9b(0x60d)](_0x1eb0bc))return;const _0x3516fc=this['itemLineRect'](_0xa4e171),_0x18625e=_0x3516fc['x'],_0x181c9e=_0x3516fc['y']+(this[_0x125a9b(0x640)]()-ImageManager[_0x125a9b(0x5fd)])/0x2,_0x4ab209=VisuMZ[_0x125a9b(0x604)][_0x125a9b(0x5cc)][_0x125a9b(0x449)]['OffsetX'],_0x107a44=VisuMZ[_0x125a9b(0x604)][_0x125a9b(0x5cc)][_0x125a9b(0x449)][_0x125a9b(0x3c3)];this[_0x125a9b(0x1e2)](_0x1eb0bc,_0x18625e+_0x4ab209,_0x181c9e+_0x107a44);},Window_ItemList[_0x311a7f(0x3bb)]['setStatusWindow']=function(_0x286e7f){const _0x2717d6=_0x311a7f;this[_0x2717d6(0x495)]=_0x286e7f,this['callUpdateHelp']();},VisuMZ[_0x311a7f(0x604)]['Window_ItemList_updateHelp']=Window_ItemList[_0x311a7f(0x3bb)][_0x311a7f(0x402)],Window_ItemList[_0x311a7f(0x3bb)][_0x311a7f(0x402)]=function(){const _0x3b0f08=_0x311a7f;VisuMZ[_0x3b0f08(0x604)][_0x3b0f08(0x379)]['call'](this),this[_0x3b0f08(0x495)]&&this[_0x3b0f08(0x495)][_0x3b0f08(0x552)]===Window_ShopStatus&&this[_0x3b0f08(0x495)][_0x3b0f08(0x249)](this[_0x3b0f08(0x486)]());},Window_BattleItem[_0x311a7f(0x3bb)][_0x311a7f(0x2c1)]=function(_0x344453){const _0x23ddf1=_0x311a7f;if(BattleManager[_0x23ddf1(0x59a)]())return BattleManager[_0x23ddf1(0x59a)]()['canUse'](_0x344453);else{if(_0x23ddf1(0x2ef)!==_0x23ddf1(0x2ef)){if(_0x41a1a1===null&&this[_0x23ddf1(0x1f8)]()['includes'](this[_0x23ddf1(0x2d5)]()))return![];else{_0xfccf10[_0x23ddf1(0x647)]=!![];let _0x1fb37e=_0x1a58d8[_0x23ddf1(0x604)][_0x23ddf1(0x276)][_0x23ddf1(0x49e)](this,_0x4ef9c5);return _0x1c6435[_0x23ddf1(0x647)]=_0x593248,_0x1fb37e;}}else return Window_ItemList[_0x23ddf1(0x3bb)][_0x23ddf1(0x2c1)][_0x23ddf1(0x49e)](this,_0x344453);}},Window_EventItem[_0x311a7f(0x3bb)]['isShowNew']=function(){return![];},Window_EquipStatus[_0x311a7f(0x3bb)][_0x311a7f(0x641)]=function(){const _0x285f50=_0x311a7f;return VisuMZ[_0x285f50(0x604)][_0x285f50(0x5cc)][_0x285f50(0x4bd)][_0x285f50(0x35b)];},VisuMZ['ItemsEquipsCore'][_0x311a7f(0x42e)]=Window_EquipStatus[_0x311a7f(0x3bb)][_0x311a7f(0x4d8)],Window_EquipStatus['prototype'][_0x311a7f(0x4d8)]=function(){const _0x150d21=_0x311a7f;this[_0x150d21(0x46a)](),this[_0x150d21(0x560)]();if(this[_0x150d21(0x476)])this[_0x150d21(0x476)][_0x150d21(0x4d8)]();this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x150d21(0x2a1)]():VisuMZ[_0x150d21(0x604)][_0x150d21(0x42e)][_0x150d21(0x49e)](this);},Window_EquipStatus[_0x311a7f(0x3bb)][_0x311a7f(0x2a1)]=function(){const _0xa811da=_0x311a7f;this['contents']['clear']();if(!this[_0xa811da(0x476)])return;if(this[_0xa811da(0x432)]()){if(_0xa811da(0x1d2)===_0xa811da(0x1d2)){const _0x52eacf=ImageManager['loadPicture'](this[_0xa811da(0x476)][_0xa811da(0x4cd)]());_0x52eacf['addLoadListener'](this[_0xa811da(0x3de)][_0xa811da(0x451)](this));}else{const _0x5501ac=0x0,_0x3538b1=this[_0xa811da(0x29c)](),_0xaaa0ba=_0x323b64[_0xa811da(0x610)],_0x58a3d9=this[_0xa811da(0x24e)]();return new _0x1c8500(_0x5501ac,_0x3538b1,_0xaaa0ba,_0x58a3d9);}}else this['refreshItemsEquipsCoreNoMenuImage']();},Window_EquipStatus[_0x311a7f(0x3bb)]['isMainMenuCoreMenuImageOptionAvailable']=function(){const _0x303975=_0x311a7f;return Imported[_0x303975(0x315)]&&this[_0x303975(0x476)][_0x303975(0x4cd)]()!==''&&VisuMZ['ItemsEquipsCore'][_0x303975(0x5cc)]['EquipScene'][_0x303975(0x2e8)];},Window_EquipStatus['prototype'][_0x311a7f(0x3de)]=function(){const _0x4c02fd=_0x311a7f;VisuMZ[_0x4c02fd(0x604)][_0x4c02fd(0x5cc)][_0x4c02fd(0x4bd)][_0x4c02fd(0x534)][_0x4c02fd(0x49e)](this),this[_0x4c02fd(0x21c)]();},Window_EquipStatus[_0x311a7f(0x3bb)][_0x311a7f(0x55f)]=function(){const _0x19db69=_0x311a7f;VisuMZ[_0x19db69(0x604)][_0x19db69(0x5cc)]['EquipScene'][_0x19db69(0x234)][_0x19db69(0x49e)](this),this[_0x19db69(0x21c)]();},Window_EquipStatus[_0x311a7f(0x3bb)][_0x311a7f(0x21c)]=function(){const _0x5301ad=_0x311a7f;this[_0x5301ad(0x560)](),VisuMZ[_0x5301ad(0x604)][_0x5301ad(0x5cc)][_0x5301ad(0x4bd)][_0x5301ad(0x290)][_0x5301ad(0x49e)](this);},Window_EquipStatus[_0x311a7f(0x3bb)][_0x311a7f(0x69b)]=function(_0x3dfdd1,_0x411cc9,_0x2b27d0,_0x5782a5,_0x5b3537){const _0x40617a=_0x311a7f,_0x4e1d9f=ImageManager[_0x40617a(0x42b)](_0x3dfdd1[_0x40617a(0x4cd)]()),_0xc7bf45=this[_0x40617a(0x4fc)]-_0x4e1d9f[_0x40617a(0x1f0)];_0x411cc9+=_0xc7bf45/0x2;if(_0xc7bf45<0x0)_0x5782a5-=_0xc7bf45;Window_StatusBase[_0x40617a(0x3bb)]['drawItemActorMenuImage'][_0x40617a(0x49e)](this,_0x3dfdd1,_0x411cc9,_0x2b27d0,_0x5782a5,_0x5b3537);},Window_EquipStatus[_0x311a7f(0x3bb)][_0x311a7f(0x209)]=function(){const _0x34bc57=_0x311a7f;return Imported['VisuMZ_0_CoreEngine']?VisuMZ[_0x34bc57(0x5c9)][_0x34bc57(0x5cc)][_0x34bc57(0x443)][_0x34bc57(0x20f)]:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_EquipStatus[_0x311a7f(0x3bb)]['paramValueFontSize']=function(){const _0x126850=_0x311a7f;return VisuMZ[_0x126850(0x604)][_0x126850(0x5cc)][_0x126850(0x4bd)][_0x126850(0x363)];},Window_EquipStatus[_0x311a7f(0x3bb)]['isUseParamNamesWithIcons']=function(){const _0x1c77d1=_0x311a7f;return Imported[_0x1c77d1(0x3cd)]&&VisuMZ[_0x1c77d1(0x5c9)][_0x1c77d1(0x5cc)][_0x1c77d1(0x443)][_0x1c77d1(0x394)];},Window_EquipStatus[_0x311a7f(0x3bb)][_0x311a7f(0x32a)]=function(_0x317b91,_0x1c16d6,_0x34d29b,_0x3563df){const _0x3c9baa=_0x311a7f,_0x3e46be=this['itemPadding']();if(Imported[_0x3c9baa(0x3cd)]){if('wBrHm'!==_0x3c9baa(0x49b)){const _0x5e26e1=_0x57cbea(_0x7207db['$1'])['trim'](),_0x56f799=_0x4f6540(_0x32b426['$2'])[_0x3c9baa(0x3df)]();this[_0x3c9baa(0x579)](_0x5e26e1,_0x56f799,_0x1e6638,_0x290488,_0x466a2f),_0x375e1e+=this[_0x3c9baa(0x640)]();}else this['drawParamText'](_0x1c16d6+_0x3e46be,_0x34d29b,_0x3563df,_0x317b91,![]);}else this[_0x3c9baa(0x638)](TextManager[_0x3c9baa(0x33c)](_0x317b91),_0x1c16d6+_0x3e46be,_0x34d29b,_0x3563df);},Window_EquipStatus[_0x311a7f(0x3bb)][_0x311a7f(0x626)]=function(_0x55af28,_0x10abf9,_0x227516,_0xdb1f47){const _0x37f738=_0x311a7f,_0x3f11de=this[_0x37f738(0x652)]();let _0x442570=0x0;Imported[_0x37f738(0x3cd)]?_0x442570=this['_actor']['paramValueByName'](_0x55af28,!![]):_0x442570=this['_actor']['param'](_0x55af28);const _0x343c24=_0x442570;this[_0x37f738(0x638)](_0x442570,_0x10abf9,_0x227516,_0xdb1f47-_0x3f11de,_0x37f738(0x5e1));},Window_EquipStatus['prototype'][_0x311a7f(0x68d)]=function(_0x46af8f,_0x5e6320,_0x3471ce,_0x172087){const _0x477984=_0x311a7f,_0x1cf387=this['itemPadding']();let _0x2f8ff9=0x0,_0x37addf=0x0,_0x37244f='';if(this['_tempActor']){if(Imported['VisuMZ_0_CoreEngine'])_0x2f8ff9=this[_0x477984(0x476)][_0x477984(0x416)](_0x46af8f,![]),_0x37addf=this['_tempActor'][_0x477984(0x416)](_0x46af8f,![]),_0x37244f=this[_0x477984(0x4fa)][_0x477984(0x416)](_0x46af8f,!![]);else{if(_0x477984(0x615)!==_0x477984(0x549))_0x2f8ff9=this['_actor'][_0x477984(0x33c)](_0x46af8f),_0x37addf=this['_tempActor'][_0x477984(0x33c)](_0x46af8f),_0x37244f=this[_0x477984(0x4fa)][_0x477984(0x33c)](_0x46af8f);else return _0x22ef6f[_0x477984(0x604)][_0x477984(0x5cc)][_0x477984(0x4a2)][_0x477984(0x620)];}const _0x3875ee=_0x2f8ff9,_0x27c147=_0x37addf;diffValue=_0x27c147-_0x3875ee,this[_0x477984(0x636)](ColorManager[_0x477984(0x4f3)](diffValue)),this[_0x477984(0x638)](_0x37244f,_0x5e6320,_0x3471ce,_0x172087-_0x1cf387,_0x477984(0x5e1));}},Window_EquipStatus[_0x311a7f(0x3bb)][_0x311a7f(0x469)]=function(_0x4bb077,_0x20613f,_0x1cfee4,_0x169b81){const _0x5cda85=_0x311a7f,_0x5b1be3=this[_0x5cda85(0x652)]();let _0x30f837=0x0,_0x23411e=0x0,_0x391de9=![];if(this['_tempActor']){if(Imported[_0x5cda85(0x3cd)]){if(_0x5cda85(0x516)!==_0x5cda85(0x516))return _0x1970e1[_0x5cda85(0x604)]['Scene_Equip_statusWindowRect'][_0x5cda85(0x49e)](this);else _0x30f837=this[_0x5cda85(0x476)][_0x5cda85(0x416)](_0x4bb077,![]),_0x23411e=this[_0x5cda85(0x4fa)][_0x5cda85(0x416)](_0x4bb077,![]),_0x391de9=String(this[_0x5cda85(0x476)]['paramValueByName'](_0x4bb077,!![]))[_0x5cda85(0x260)](/([%％])/i);}else{if(_0x5cda85(0x1ff)==='TVblh')_0x30f837=this[_0x5cda85(0x476)][_0x5cda85(0x33c)](_0x4bb077),_0x23411e=this[_0x5cda85(0x4fa)][_0x5cda85(0x33c)](_0x4bb077),_0x391de9=_0x30f837%0x1!==0x0||_0x23411e%0x1!==0x0;else return _0x437716['ItemsEquipsCore'][_0x5cda85(0x39e)][_0x5cda85(0x49e)](this);}const _0x2eac51=_0x30f837,_0x5ea611=_0x23411e,_0x112842=_0x5ea611-_0x2eac51;let _0x2251e8=_0x112842;if(_0x391de9)_0x2251e8=Math[_0x5cda85(0x3b7)](_0x112842*0x64)+'%';_0x112842!==0x0&&(this[_0x5cda85(0x636)](ColorManager[_0x5cda85(0x4f3)](_0x112842)),_0x2251e8=(_0x112842>0x0?_0x5cda85(0x43c):_0x5cda85(0x301))[_0x5cda85(0x46e)](_0x2251e8),this['drawText'](_0x2251e8,_0x20613f+_0x5b1be3,_0x1cfee4,_0x169b81,_0x5cda85(0x6a5)));}},Window_EquipStatus[_0x311a7f(0x3bb)]['drawItemDarkRect']=function(_0x650a05,_0x24cddc,_0x177bce,_0x51fa64,_0x4025de){const _0x1beaf3=_0x311a7f;if(VisuMZ[_0x1beaf3(0x604)][_0x1beaf3(0x5cc)][_0x1beaf3(0x4bd)][_0x1beaf3(0x232)]===![])return;_0x4025de=Math['max'](_0x4025de||0x1,0x1);while(_0x4025de--){_0x51fa64=_0x51fa64||this[_0x1beaf3(0x640)](),this[_0x1beaf3(0x2ca)][_0x1beaf3(0x399)]=0xa0;const _0x1cc795=ColorManager[_0x1beaf3(0x21e)]();this['contents'][_0x1beaf3(0x1f9)](_0x650a05+0x1,_0x24cddc+0x1,_0x177bce-0x2,_0x51fa64-0x2,_0x1cc795),this[_0x1beaf3(0x2ca)][_0x1beaf3(0x399)]=0xff;}},ColorManager[_0x311a7f(0x21e)]=function(){const _0x2781d6=_0x311a7f,_0xded09c=VisuMZ[_0x2781d6(0x604)][_0x2781d6(0x5cc)][_0x2781d6(0x4bd)];let _0xe60d9c=_0xded09c[_0x2781d6(0x39f)]!==undefined?_0xded09c[_0x2781d6(0x39f)]:0x13;return ColorManager['getColor'](_0xe60d9c);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x5af)]=Window_EquipCommand[_0x311a7f(0x3bb)]['initialize'],Window_EquipCommand['prototype'][_0x311a7f(0x49a)]=function(_0x23b799){const _0x314b21=_0x311a7f;VisuMZ[_0x314b21(0x604)]['Window_EquipCommand_initialize'][_0x314b21(0x49e)](this,_0x23b799),this[_0x314b21(0x667)](_0x23b799);},Window_EquipCommand[_0x311a7f(0x3bb)]['createCommandNameWindow']=function(_0x19fdc1){const _0x1a0170=_0x311a7f,_0x298170=new Rectangle(0x0,0x0,_0x19fdc1[_0x1a0170(0x1f0)],_0x19fdc1[_0x1a0170(0x3f6)]);this[_0x1a0170(0x243)]=new Window_Base(_0x298170),this['_commandNameWindow'][_0x1a0170(0x52f)]=0x0,this[_0x1a0170(0x3d0)](this[_0x1a0170(0x243)]),this[_0x1a0170(0x3c1)]();},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x4a1)]=function(){const _0x4d2135=_0x311a7f;Window_HorzCommand[_0x4d2135(0x3bb)]['callUpdateHelp'][_0x4d2135(0x49e)](this);if(this[_0x4d2135(0x243)])this[_0x4d2135(0x3c1)]();},Window_EquipCommand['prototype'][_0x311a7f(0x3c1)]=function(){const _0x263d2f=_0x311a7f,_0xd89591=this[_0x263d2f(0x243)];_0xd89591[_0x263d2f(0x2ca)][_0x263d2f(0x639)]();const _0x2bbafb=this[_0x263d2f(0x5dc)](this[_0x263d2f(0x5c8)]());if(_0x2bbafb===_0x263d2f(0x2fd)){const _0x260b62=this[_0x263d2f(0x574)](this[_0x263d2f(0x5c8)]());let _0x54821d=this[_0x263d2f(0x235)](this[_0x263d2f(0x5c8)]());_0x54821d=_0x54821d['replace'](/\\I\[(\d+)\]/gi,''),_0xd89591[_0x263d2f(0x560)](),this[_0x263d2f(0x372)](_0x54821d,_0x260b62),this[_0x263d2f(0x689)](_0x54821d,_0x260b62),this[_0x263d2f(0x3f0)](_0x54821d,_0x260b62);}},Window_EquipCommand[_0x311a7f(0x3bb)]['commandNameWindowDrawBackground']=function(_0x220b94,_0x13a6e7){},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x689)]=function(_0x15fb54,_0x19254c){const _0x4e2a6d=_0x311a7f,_0x184988=this[_0x4e2a6d(0x243)];_0x184988[_0x4e2a6d(0x638)](_0x15fb54,0x0,_0x19254c['y'],_0x184988[_0x4e2a6d(0x4fc)],_0x4e2a6d(0x61f));},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x3f0)]=function(_0x8a36dd,_0x4e417e){const _0x2321bf=_0x311a7f,_0x1b864f=this['_commandNameWindow'],_0x3c3664=$gameSystem[_0x2321bf(0x5ab)](),_0x15bac1=_0x4e417e['x']+Math['floor'](_0x4e417e[_0x2321bf(0x1f0)]/0x2)+_0x3c3664;_0x1b864f['x']=_0x1b864f[_0x2321bf(0x1f0)]/-0x2+_0x15bac1,_0x1b864f['y']=Math[_0x2321bf(0x58f)](_0x4e417e[_0x2321bf(0x3f6)]/0x2);},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x5e7)]=function(){const _0x2bddeb=_0x311a7f;return Imported['VisuMZ_0_CoreEngine']&&Window_HorzCommand[_0x2bddeb(0x3bb)][_0x2bddeb(0x5e7)]['call'](this);},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x553)]=function(){const _0x6d5a96=_0x311a7f;if(this['currentSymbol']()===_0x6d5a96(0x50b))Window_HorzCommand[_0x6d5a96(0x3bb)][_0x6d5a96(0x553)][_0x6d5a96(0x49e)](this);},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x556)]=function(){const _0xad3857=_0x311a7f;!this[_0xad3857(0x5f4)]()&&Window_HorzCommand[_0xad3857(0x3bb)][_0xad3857(0x556)]['call'](this);},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x5f4)]=function(){const _0x3ce8bf=_0x311a7f;if(!this['isCursorMovable']())return![];if(SceneManager[_0x3ce8bf(0x69c)][_0x3ce8bf(0x552)]!==Scene_Equip)return![];if(Input[_0x3ce8bf(0x409)]('down')){if('qVbUS'==='qVbUS')this[_0x3ce8bf(0x1e3)](),SceneManager[_0x3ce8bf(0x69c)][_0x3ce8bf(0x628)](),SceneManager[_0x3ce8bf(0x69c)][_0x3ce8bf(0x564)][_0x3ce8bf(0x373)](-0x1);else{const _0x16743b=_0x3ce8bf(0x490);if(this['_customItemInfo'][_0x16743b])return this[_0x3ce8bf(0x38d)][_0x16743b];const _0x579611=_0x5d2d4f[_0x3ce8bf(0x604)][_0x3ce8bf(0x5cc)][_0x3ce8bf(0x4a2)],_0x4bd24b='Occasion%1'[_0x3ce8bf(0x46e)](this[_0x3ce8bf(0x2d6)][_0x3ce8bf(0x36e)]);return _0x579611[_0x4bd24b];}}return![];},Window_EquipCommand[_0x311a7f(0x3bb)]['maxCols']=function(){const _0x10c5ea=_0x311a7f;return this[_0x10c5ea(0x3ac)]?this[_0x10c5ea(0x3ac)]['length']:0x3;},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x478)]=function(){const _0x2cec03=_0x311a7f;if(this[_0x2cec03(0x388)]()&&this[_0x2cec03(0x1e6)]&&SceneManager[_0x2cec03(0x69c)][_0x2cec03(0x552)]===Scene_Equip){if(this['isHoverEnabled']()&&TouchInput[_0x2cec03(0x241)]()){if(_0x2cec03(0x571)!==_0x2cec03(0x571))return this['statusWindowRectItemsEquipsCore']();else this['onTouchSelectModernControls'](![]);}else TouchInput[_0x2cec03(0x409)]()&&('AWMJo'!==_0x2cec03(0x34b)?this['onTouchSelectModernControls'](!![]):this[_0x2cec03(0x506)]());TouchInput[_0x2cec03(0x426)]()&&this[_0x2cec03(0x65f)]();}},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x4b8)]=function(_0x3bfec1){const _0x356ece=_0x311a7f;this['_doubleTouch']=![];const _0xae2941=this[_0x356ece(0x5c8)](),_0x160b2d=this[_0x356ece(0x393)](),_0x4faa6f=SceneManager[_0x356ece(0x69c)][_0x356ece(0x564)];if(_0x4faa6f[_0x356ece(0x388)]()&&_0x4faa6f[_0x356ece(0x1e6)]){if(_0x356ece(0x28d)!=='RPEsd')return this[_0x356ece(0x559)][_0x88249f];else{if(_0x160b2d>=0x0){if('jrebd'===_0x356ece(0x567))_0x160b2d===this['index']()&&(this[_0x356ece(0x44f)]=!![]),this[_0x356ece(0x5d0)](),this[_0x356ece(0x351)](_0x160b2d);else{const _0xb9ed54=this[_0x356ece(0x574)](_0x15583d),_0x10580a=this['commandName'](_0x4e8c76),_0x40f327=this[_0x356ece(0x49c)](_0x10580a)['width'];this['changePaintOpacity'](this[_0x356ece(0x2a9)](_0x3541d4));const _0x8e3d9b=this[_0x356ece(0x692)]();if(_0x8e3d9b===_0x356ece(0x5e1))this[_0x356ece(0x216)](_0x10580a,_0xb9ed54['x']+_0xb9ed54[_0x356ece(0x1f0)]-_0x40f327,_0xb9ed54['y'],_0x40f327);else{if(_0x8e3d9b===_0x356ece(0x61f)){const _0x261b3d=_0xb9ed54['x']+_0x566dad[_0x356ece(0x58f)]((_0xb9ed54['width']-_0x40f327)/0x2);this[_0x356ece(0x216)](_0x10580a,_0x261b3d,_0xb9ed54['y'],_0x40f327);}else this[_0x356ece(0x216)](_0x10580a,_0xb9ed54['x'],_0xb9ed54['y'],_0x40f327);}}}else{if(_0x4faa6f[_0x356ece(0x393)]()>=0x0){if(_0x356ece(0x580)!==_0x356ece(0x58d))this['deactivate'](),this[_0x356ece(0x4e1)]();else{const _0x274ef1=_0x45c724+(this['lineHeight']()-_0x364c3a[_0x356ece(0x5fd)])/0x2,_0x29540c=_0x43a816[_0x356ece(0x369)]+0x4,_0x586c47=_0x8c76ec['max'](0x0,_0x1d40d3-_0x29540c);this[_0x356ece(0x636)](_0xfbe4d7[_0x356ece(0x3bf)](_0x4adef1)),this['drawIcon'](_0x2c1789[_0x356ece(0x204)],_0x1aa396,_0x274ef1),this[_0x356ece(0x638)](_0x4405d0['name'],_0x2b8d73+_0x29540c,_0x23f797,_0x586c47),this[_0x356ece(0x2ec)]();}}}}}if(_0x3bfec1&&this[_0x356ece(0x5c8)]()!==_0xae2941){if('TYjPa'===_0x356ece(0x1f3))this[_0x356ece(0x1e3)]();else return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x356ece(0x64e)]():_0x58f47a[_0x356ece(0x604)]['Scene_Shop_buyWindowRect']['call'](this);}},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x22f)]=function(){const _0x4a3fe1=_0x311a7f;this[_0x4a3fe1(0x1e8)](),this['addOptimizeCommand'](),this[_0x4a3fe1(0x1d4)]();},Window_EquipCommand['prototype'][_0x311a7f(0x4d8)]=function(){const _0x422629=_0x311a7f;Window_HorzCommand[_0x422629(0x3bb)]['refresh']['call'](this),this['refreshCursor']();},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x1e8)]=function(){const _0x51e025=_0x311a7f;if(!this[_0x51e025(0x494)]())return;const _0x40b93d=this['commandStyle'](),_0x94fdaa=VisuMZ[_0x51e025(0x604)][_0x51e025(0x5cc)][_0x51e025(0x4bd)]['CmdIconEquip'],_0x28cfeb=_0x40b93d==='text'?TextManager[_0x51e025(0x21f)]:_0x51e025(0x2e6)[_0x51e025(0x46e)](_0x94fdaa,TextManager[_0x51e025(0x21f)]),_0x375ddd=this[_0x51e025(0x277)]();this['addCommand'](_0x28cfeb,'equip',_0x375ddd);},Window_EquipCommand['prototype'][_0x311a7f(0x494)]=function(){return!this['isUseModernControls']();},Window_EquipCommand['prototype'][_0x311a7f(0x277)]=function(){return!![];},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x3c7)]=function(){const _0x5015e7=_0x311a7f;if(!this['isOptimizeCommandAdded']())return;const _0x44ae27=this[_0x5015e7(0x500)](),_0x38acdb=VisuMZ['ItemsEquipsCore'][_0x5015e7(0x5cc)][_0x5015e7(0x4bd)]['CmdIconOptimize'],_0x591b62=_0x44ae27===_0x5015e7(0x255)?TextManager[_0x5015e7(0x453)]:'\x5cI[%1]%2'['format'](_0x38acdb,TextManager['optimize']),_0x422daa=this[_0x5015e7(0x47b)]();this[_0x5015e7(0x222)](_0x591b62,_0x5015e7(0x453),_0x422daa);},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x2a4)]=function(){const _0x1fe7e4=_0x311a7f;return VisuMZ[_0x1fe7e4(0x604)][_0x1fe7e4(0x5cc)][_0x1fe7e4(0x4bd)][_0x1fe7e4(0x593)];},Window_EquipCommand[_0x311a7f(0x3bb)]['isOptimizeCommandEnabled']=function(){return!![];},Window_EquipCommand['prototype'][_0x311a7f(0x1d4)]=function(){const _0x594b83=_0x311a7f;if(!this[_0x594b83(0x5fb)]())return;const _0x206d50=this[_0x594b83(0x500)](),_0x16959c=VisuMZ[_0x594b83(0x604)]['Settings']['EquipScene'][_0x594b83(0x605)],_0x374028=_0x206d50==='text'?TextManager[_0x594b83(0x639)]:_0x594b83(0x2e6)[_0x594b83(0x46e)](_0x16959c,TextManager['clear']),_0x5288d2=this[_0x594b83(0x22d)]();this[_0x594b83(0x222)](_0x374028,'clear',_0x5288d2);},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x5fb)]=function(){const _0x1f98da=_0x311a7f;return VisuMZ[_0x1f98da(0x604)][_0x1f98da(0x5cc)][_0x1f98da(0x4bd)][_0x1f98da(0x60a)];},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x22d)]=function(){return!![];},Window_EquipCommand['prototype'][_0x311a7f(0x692)]=function(){const _0x5929f0=_0x311a7f;return VisuMZ[_0x5929f0(0x604)][_0x5929f0(0x5cc)][_0x5929f0(0x4bd)][_0x5929f0(0x2e7)];},Window_EquipCommand[_0x311a7f(0x3bb)]['drawItem']=function(_0x283357){const _0x3350d8=_0x311a7f,_0x388da7=this[_0x3350d8(0x5dc)](_0x283357);if(_0x388da7===_0x3350d8(0x381))this[_0x3350d8(0x60b)](_0x283357);else{if(_0x388da7===_0x3350d8(0x2fd)){if(_0x3350d8(0x548)==='ZfkuS')this[_0x3350d8(0x269)](_0x283357);else for(const _0x5214da of _0x5315fc){_0x5214da[_0x3350d8(0x260)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x97dac3=_0x28a61a(_0x46fe74['$1'])[_0x3350d8(0x5a1)]()['trim']()[_0x3350d8(0x51a)](',');for(const _0x5363ea of _0x97dac3){_0x1bd3c7[_0x3350d8(0x5b7)][_0x3350d8(0x300)](_0x5363ea[_0x3350d8(0x3df)]());}}}else{if(_0x3350d8(0x349)!=='uDnif')Window_HorzCommand[_0x3350d8(0x3bb)]['drawItem']['call'](this,_0x283357);else return _0x91f347[_0x3350d8(0x604)]['Settings'][_0x3350d8(0x648)][_0x3350d8(0x26a)];}}},Window_EquipCommand['prototype'][_0x311a7f(0x500)]=function(){const _0x1a4a52=_0x311a7f;return VisuMZ['ItemsEquipsCore'][_0x1a4a52(0x5cc)][_0x1a4a52(0x4bd)][_0x1a4a52(0x653)];},Window_EquipCommand['prototype'][_0x311a7f(0x5dc)]=function(_0xe20320){const _0x32ac25=_0x311a7f;if(_0xe20320<0x0)return'text';const _0x45b7a6=this['commandStyle']();if(_0x45b7a6!=='auto')return _0x45b7a6;else{if(this[_0x32ac25(0x3f3)]()>0x0){if(_0x32ac25(0x4c5)==='WvkWw'){const _0x1fb378=this[_0x32ac25(0x235)](_0xe20320);if(_0x1fb378[_0x32ac25(0x260)](/\\I\[(\d+)\]/i)){if(_0x32ac25(0x421)===_0x32ac25(0x520)){const _0x4b897a=_0x2691d8[_0x32ac25(0x604)][_0x32ac25(0x5cc)][_0x32ac25(0x4a2)][_0x32ac25(0x699)];return _0x4b897a[_0x32ac25(0x46e)](_0x6f2a3['tp']);}else{const _0x324768=this['itemLineRect'](_0xe20320),_0x29ff3f=this[_0x32ac25(0x49c)](_0x1fb378)[_0x32ac25(0x1f0)];return _0x29ff3f<=_0x324768[_0x32ac25(0x1f0)]?_0x32ac25(0x381):_0x32ac25(0x2fd);}}}else _0x3ff58a[_0x32ac25(0x604)]['Window_ItemList_updateHelp'][_0x32ac25(0x49e)](this),this[_0x32ac25(0x495)]&&this['_statusWindow'][_0x32ac25(0x552)]===_0x56a040&&this[_0x32ac25(0x495)][_0x32ac25(0x249)](this[_0x32ac25(0x486)]());}}return _0x32ac25(0x255);},Window_EquipCommand[_0x311a7f(0x3bb)]['drawItemStyleIconText']=function(_0x32f085){const _0x3f86bd=_0x311a7f,_0x304a71=this['itemLineRect'](_0x32f085),_0x3a55e0=this[_0x3f86bd(0x235)](_0x32f085),_0x3ec578=this['textSizeEx'](_0x3a55e0)['width'];this['changePaintOpacity'](this[_0x3f86bd(0x2a9)](_0x32f085));const _0x142d3b=this[_0x3f86bd(0x692)]();if(_0x142d3b===_0x3f86bd(0x5e1))_0x3f86bd(0x65a)!==_0x3f86bd(0x65a)?this[_0x3f86bd(0x34e)](_0x2617de[_0x3f86bd(0x409)](_0x3f86bd(0x6a5))):this[_0x3f86bd(0x216)](_0x3a55e0,_0x304a71['x']+_0x304a71[_0x3f86bd(0x1f0)]-_0x3ec578,_0x304a71['y'],_0x3ec578);else{if(_0x142d3b===_0x3f86bd(0x61f)){const _0x3b8a5a=_0x304a71['x']+Math[_0x3f86bd(0x58f)]((_0x304a71[_0x3f86bd(0x1f0)]-_0x3ec578)/0x2);this[_0x3f86bd(0x216)](_0x3a55e0,_0x3b8a5a,_0x304a71['y'],_0x3ec578);}else this[_0x3f86bd(0x216)](_0x3a55e0,_0x304a71['x'],_0x304a71['y'],_0x3ec578);}},Window_EquipCommand['prototype'][_0x311a7f(0x269)]=function(_0x370400){const _0x4a8bf7=_0x311a7f;this['commandName'](_0x370400)['match'](/\\I\[(\d+)\]/i);const _0x1b66ca=Number(RegExp['$1'])||0x0,_0x25dcb7=this[_0x4a8bf7(0x574)](_0x370400),_0x48e17f=_0x25dcb7['x']+Math['floor']((_0x25dcb7['width']-ImageManager[_0x4a8bf7(0x369)])/0x2),_0x3140c4=_0x25dcb7['y']+(_0x25dcb7[_0x4a8bf7(0x3f6)]-ImageManager[_0x4a8bf7(0x5fd)])/0x2;this[_0x4a8bf7(0x2aa)](_0x1b66ca,_0x48e17f,_0x3140c4);},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x59a)]=function(){const _0x5361aa=_0x311a7f,_0x56f82d=SceneManager['_scene'];if(_0x56f82d&&_0x56f82d['user']){if(_0x5361aa(0x29a)===_0x5361aa(0x429)){const _0x440382=_0x11ee18[_0x5361aa(0x445)](this[_0x5361aa(0x68c)]||this[_0x5361aa(0x342)]()['equipSlots']);if(_0x440382[_0x5361aa(0x28c)]>=0x2&&this[_0x5361aa(0x625)]())_0x440382[0x1]=0x1;return _0x440382;}else return _0x56f82d[_0x5361aa(0x483)]();}return null;},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x402)]=function(){const _0x5d13e5=_0x311a7f;Window_Command[_0x5d13e5(0x3bb)][_0x5d13e5(0x402)][_0x5d13e5(0x49e)](this),this[_0x5d13e5(0x32e)]['setText'](this[_0x5d13e5(0x418)]());},Window_EquipCommand[_0x311a7f(0x3bb)][_0x311a7f(0x418)]=function(){const _0x50d971=_0x311a7f,_0x3571d2=this[_0x50d971(0x3b4)]();switch(_0x3571d2){case _0x50d971(0x50b):return TextManager[_0x50d971(0x685)][_0x50d971(0x68e)]['equip'];case'optimize':return TextManager['ITEMS_EQUIPS_CORE'][_0x50d971(0x68e)][_0x50d971(0x453)];case _0x50d971(0x639):return TextManager[_0x50d971(0x685)][_0x50d971(0x68e)][_0x50d971(0x639)];default:return'';}},Window_EquipSlot[_0x311a7f(0x3bb)][_0x311a7f(0x5e7)]=function(){const _0x326041=_0x311a7f;return Imported[_0x326041(0x3cd)]&&Window_HorzCommand['prototype'][_0x326041(0x5e7)][_0x326041(0x49e)](this);},Window_EquipSlot['prototype']['activate']=function(){const _0x356b20=_0x311a7f;Window_StatusBase[_0x356b20(0x3bb)][_0x356b20(0x5d0)][_0x356b20(0x49e)](this),this[_0x356b20(0x4a1)]();},Window_EquipSlot[_0x311a7f(0x3bb)]['processCursorMove']=function(){const _0x23f557=_0x311a7f;Window_StatusBase[_0x23f557(0x3bb)][_0x23f557(0x645)][_0x23f557(0x49e)](this),this['checkShiftRemoveShortcut']();},Window_EquipSlot['prototype'][_0x311a7f(0x267)]=function(){const _0x1f7c2f=_0x311a7f;if(!this['isShiftRemoveShortcutEnabled']())return;if(Input[_0x1f7c2f(0x409)]('shift')&&this['item']()){if(_0x1f7c2f(0x467)==='VRnzE'){const _0x3583e8=_0x1f7c2f(0x303)[_0x1f7c2f(0x46e)](_0x108769,_0x42c2d2);_0x3c44b0[_0x1f7c2f(0x604)][_0x1f7c2f(0x5e9)][_0x3583e8]=new _0xd33750(_0x1f7c2f(0x486),'paramId',_0x14c0cf);}else{const _0x207960=SceneManager[_0x1f7c2f(0x69c)][_0x1f7c2f(0x476)];_0x207960&&(this[_0x1f7c2f(0x2ce)](this[_0x1f7c2f(0x5c8)]())?(this[_0x1f7c2f(0x358)](),this[_0x1f7c2f(0x402)]()):_0x1f7c2f(0x479)===_0x1f7c2f(0x479)?this[_0x1f7c2f(0x3f1)]():_0x514f24=_0x2aaf00[_0x1f7c2f(0x414)]);}}},Window_EquipSlot[_0x311a7f(0x3bb)][_0x311a7f(0x2ce)]=function(_0x4e611b){const _0xd8e3e3=_0x311a7f,_0x596428=SceneManager[_0xd8e3e3(0x69c)][_0xd8e3e3(0x476)];if(!_0x596428)return;if(!_0x596428[_0xd8e3e3(0x35e)](this[_0xd8e3e3(0x5c8)]()))return![];const _0x338527=_0x596428[_0xd8e3e3(0x565)]()[this[_0xd8e3e3(0x5c8)]()];if(_0x596428[_0xd8e3e3(0x1f8)]()[_0xd8e3e3(0x1f7)](_0x338527)){if(_0xd8e3e3(0x56b)===_0xd8e3e3(0x570)){const _0xe96aa4=_0x380d54['x']+_0x350a52[_0xd8e3e3(0x58f)]((_0x18f69b[_0xd8e3e3(0x1f0)]-_0xb9a562)/0x2);this[_0xd8e3e3(0x216)](_0x1bdb95,_0xe96aa4,_0x167591['y'],_0x333ca4);}else return![];}return!![];;},Window_EquipSlot[_0x311a7f(0x3bb)][_0x311a7f(0x358)]=function(){const _0x5e8166=_0x311a7f;SoundManager[_0x5e8166(0x1fe)]();const _0x217d4f=SceneManager[_0x5e8166(0x69c)]['_actor'];_0x217d4f[_0x5e8166(0x48e)](this['index'](),null),this[_0x5e8166(0x4d8)](),this[_0x5e8166(0x423)][_0x5e8166(0x4d8)](),this[_0x5e8166(0x4a1)]();const _0x205051=SceneManager[_0x5e8166(0x69c)][_0x5e8166(0x495)];if(_0x205051)_0x205051[_0x5e8166(0x4d8)]();},Window_EquipSlot[_0x311a7f(0x3bb)]['isShiftRemoveShortcutEnabled']=function(){const _0x38a6dd=_0x311a7f;if(!this[_0x38a6dd(0x2cb)])return![];if(!VisuMZ[_0x38a6dd(0x604)][_0x38a6dd(0x5cc)]['EquipScene'][_0x38a6dd(0x4fe)])return![];return!![];},Window_EquipSlot[_0x311a7f(0x3bb)][_0x311a7f(0x556)]=function(){const _0x5b6e71=_0x311a7f;!this['processCursorSpecialCheckModernControls']()&&Window_StatusBase[_0x5b6e71(0x3bb)][_0x5b6e71(0x556)][_0x5b6e71(0x49e)](this);},Window_EquipSlot[_0x311a7f(0x3bb)][_0x311a7f(0x5f4)]=function(){const _0x34bf9c=_0x311a7f;if(!this[_0x34bf9c(0x50c)]())return![];if(SceneManager[_0x34bf9c(0x69c)][_0x34bf9c(0x552)]!==Scene_Equip)return![];if(this['allowCommandWindowCursorUp']()){if(_0x34bf9c(0x4ca)!==_0x34bf9c(0x4ca)){this[_0x34bf9c(0x235)](_0x2efe98)[_0x34bf9c(0x260)](/\\I\[(\d+)\]/i);const _0x2fac9d=_0x9a43e(_0xb3cbb8['$1'])||0x0,_0x268b27=this[_0x34bf9c(0x574)](_0x2ac18e),_0x5dc944=_0x268b27['x']+_0x32dbc2['floor']((_0x268b27[_0x34bf9c(0x1f0)]-_0x2a1370[_0x34bf9c(0x369)])/0x2),_0x5dd579=_0x268b27['y']+(_0x268b27[_0x34bf9c(0x3f6)]-_0x1614fc['iconHeight'])/0x2;this[_0x34bf9c(0x2aa)](_0x2fac9d,_0x5dc944,_0x5dd579);}else return this[_0x34bf9c(0x1e3)](),Input['clear'](),SceneManager[_0x34bf9c(0x69c)][_0x34bf9c(0x3ca)](),![];}else{if(Input[_0x34bf9c(0x456)]('down')){if(_0x34bf9c(0x23d)===_0x34bf9c(0x23d)){const _0x1d4422=this['index']();if(Input[_0x34bf9c(0x408)](_0x34bf9c(0x54b)))this[_0x34bf9c(0x4a0)]();else{if('fmgpC'===_0x34bf9c(0x318)){const _0x2c4f57=this['statusWidth'](),_0x2cedf5=this['mainAreaHeight']()-this[_0x34bf9c(0x2dc)][_0x34bf9c(0x3f6)],_0x1855f3=this[_0x34bf9c(0x65c)]()?0x0:_0x5a5a42[_0x34bf9c(0x610)]-_0x2c4f57,_0xe8f736=this[_0x34bf9c(0x2dc)]['y']+this['_commandWindow'][_0x34bf9c(0x3f6)];return new _0x26c52f(_0x1855f3,_0xe8f736,_0x2c4f57,_0x2cedf5);}else this['cursorDown'](Input[_0x34bf9c(0x409)](_0x34bf9c(0x539)));}return this[_0x34bf9c(0x5c8)]()!==_0x1d4422&&(_0x34bf9c(0x5a6)===_0x34bf9c(0x525)?this[_0x34bf9c(0x60b)](_0x534521):this[_0x34bf9c(0x1e3)]()),!![];}else{if(this[_0x34bf9c(0x2d6)][_0x34bf9c(0x411)][_0x34bf9c(0x4b0)]<=0x0)return _0x3361f4;if(this['drawItemDamageElement'](_0x2c59dd,_0x1b7463,_0x2bfa2c))_0xc4c4f3+=this[_0x34bf9c(0x640)]();if(this[_0x34bf9c(0x524)](_0xd98e11,_0x411ca2,_0x22feaa))_0x456ff9+=this[_0x34bf9c(0x640)]();return this[_0x34bf9c(0x560)](),_0x5a7329;}}else{if(this[_0x34bf9c(0x406)]()&&Input['isTriggered'](_0x34bf9c(0x54b)))return'plugQ'!==_0x34bf9c(0x37b)?_0x544a6d[_0x34bf9c(0x604)][_0x34bf9c(0x5cc)][_0x34bf9c(0x4a2)][_0x34bf9c(0x40e)]:!![];}}return![];},Window_EquipSlot[_0x311a7f(0x3bb)][_0x311a7f(0x307)]=function(){const _0x50300b=_0x311a7f;if(this['index']()!==0x0)return![];const _0x132e46=VisuMZ['ItemsEquipsCore'][_0x50300b(0x5cc)]['EquipScene'];if(!_0x132e46[_0x50300b(0x593)]&&!_0x132e46['CommandAddClear'])return![];return Input['isTriggered']('up');},Window_EquipSlot[_0x311a7f(0x3bb)][_0x311a7f(0x406)]=function(){const _0x1744f4=_0x311a7f;return VisuMZ['ItemsEquipsCore'][_0x1744f4(0x5cc)][_0x1744f4(0x4bd)][_0x1744f4(0x4fe)];},Window_EquipSlot[_0x311a7f(0x3bb)][_0x311a7f(0x478)]=function(){const _0x165e96=_0x311a7f;if(this[_0x165e96(0x388)]()&&this[_0x165e96(0x1e6)]&&SceneManager[_0x165e96(0x69c)][_0x165e96(0x552)]===Scene_Equip){if(_0x165e96(0x2f3)===_0x165e96(0x62f))_0x134b40[_0x165e96(0x604)]['Settings'][_0x165e96(0x4bd)][_0x165e96(0x234)][_0x165e96(0x49e)](this),this['drawParamsItemsEquipsCore']();else{if(this[_0x165e96(0x2f5)]()&&TouchInput[_0x165e96(0x241)]())this[_0x165e96(0x4b8)](![]);else TouchInput[_0x165e96(0x409)]()&&(_0x165e96(0x439)===_0x165e96(0x439)?this[_0x165e96(0x4b8)](!![]):(_0x2aee3f['ItemsEquipsCore'][_0x165e96(0x5a5)][_0x165e96(0x49e)](this),this[_0x165e96(0x457)]()));if(TouchInput['isClicked']())this[_0x165e96(0x65f)]();else TouchInput[_0x165e96(0x38c)]()&&this[_0x165e96(0x34a)]();}}},Window_EquipSlot[_0x311a7f(0x3bb)][_0x311a7f(0x4b8)]=function(_0x27741d){const _0x1a88fb=_0x311a7f;this[_0x1a88fb(0x44f)]=![];const _0x58c74d=this[_0x1a88fb(0x5c8)](),_0x501552=this[_0x1a88fb(0x393)](),_0x5b951c=SceneManager[_0x1a88fb(0x69c)]['_commandWindow'];if(_0x5b951c[_0x1a88fb(0x388)]()&&_0x5b951c[_0x1a88fb(0x1e6)]){if(_0x501552>=0x0){if(_0x1a88fb(0x646)===_0x1a88fb(0x646))_0x501552===this[_0x1a88fb(0x5c8)]()&&(this[_0x1a88fb(0x44f)]=!![]),this[_0x1a88fb(0x5d0)](),this['select'](_0x501552);else return this['getItemDamageAmountLabelBattleCore']();}else{if(_0x5b951c[_0x1a88fb(0x393)]()>=0x0){if('fCAHC'!==_0x1a88fb(0x314))this[_0x1a88fb(0x557)](),this[_0x1a88fb(0x4e1)]();else{if(_0x32a554[_0x1a88fb(0x40c)]&&_0x331078[_0x1a88fb(0x5c3)]!==_0x1f5efd)return _0x2b9afa[_0x1a88fb(0x5c3)];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x1a88fb(0x1e4)]()[_0x1a88fb(0x260)](/RIGHT/i);else _0x2cb1e7[_0x1a88fb(0x3bb)][_0x1a88fb(0x65c)][_0x1a88fb(0x49e)](this);}}}}}_0x27741d&&this['index']()!==_0x58c74d&&this[_0x1a88fb(0x1e3)]();},Window_EquipSlot[_0x311a7f(0x3bb)][_0x311a7f(0x46b)]=function(){const _0x3aadbe=_0x311a7f;return this[_0x3aadbe(0x5c8)]();},VisuMZ[_0x311a7f(0x604)]['Window_EquipItem_includes']=Window_EquipItem[_0x311a7f(0x3bb)][_0x311a7f(0x1f7)],Window_EquipItem[_0x311a7f(0x3bb)][_0x311a7f(0x1f7)]=function(_0xfee8a6){const _0x776687=_0x311a7f;if(_0xfee8a6===null&&this[_0x776687(0x1f8)]()[_0x776687(0x1f7)](this[_0x776687(0x2d5)]()))return![];else{$gameTemp['_checkEquipRequirements']=!![];let _0x28b553=VisuMZ[_0x776687(0x604)][_0x776687(0x276)][_0x776687(0x49e)](this,_0xfee8a6);return $gameTemp[_0x776687(0x647)]=undefined,_0x28b553;}},VisuMZ['ItemsEquipsCore']['Window_EquipItem_isEnabled']=Window_EquipItem[_0x311a7f(0x3bb)][_0x311a7f(0x2c1)],Window_EquipItem[_0x311a7f(0x3bb)]['isEnabled']=function(_0x4edfa5){const _0x30c6a8=_0x311a7f;if(_0x4edfa5&&this['_actor']){if(this[_0x30c6a8(0x60e)](_0x4edfa5))return![];if(this['isSoleWeaponType'](_0x4edfa5))return![];if(this[_0x30c6a8(0x3a2)](_0x4edfa5))return![];if(!this['_actor'][_0x30c6a8(0x3ae)](_0x4edfa5))return![];}if(!_0x4edfa5)return!this[_0x30c6a8(0x1f8)]()[_0x30c6a8(0x1f7)](this[_0x30c6a8(0x2d5)]());return VisuMZ[_0x30c6a8(0x604)]['Window_EquipItem_isEnabled'][_0x30c6a8(0x49e)](this,_0x4edfa5);},Window_EquipItem[_0x311a7f(0x3bb)][_0x311a7f(0x60e)]=function(_0x3399e9){const _0x117bc8=_0x311a7f,_0x205091=_0x3399e9[_0x117bc8(0x5b3)];if(_0x205091['match'](/<EQUIP COPY LIMIT:[ ](\d+)>/i)){const _0x44f37a=Number(RegExp['$1'])||0x1;let _0xb46596=0x0;const _0x14ad2e=this[_0x117bc8(0x476)]['equips'](),_0x19d5b2=SceneManager[_0x117bc8(0x69c)]['_slotWindow'][_0x117bc8(0x46b)]();_0x14ad2e[_0x19d5b2]=null;for(const _0x4177aa of _0x14ad2e){if(_0x117bc8(0x56c)===_0x117bc8(0x56c)){if(!_0x4177aa)continue;if(DataManager['isWeapon'](_0x3399e9)===DataManager[_0x117bc8(0x512)](_0x4177aa)){if(_0x3399e9['id']===_0x4177aa['id'])_0xb46596+=0x1;}}else{const _0x3b35fd=_0x117bc8(0x53b);if(this[_0x117bc8(0x3db)][_0x117bc8(0x694)]===0x0&&!this[_0x117bc8(0x38d)][_0x3b35fd])return![];const _0x18c1c6=this[_0x117bc8(0x24b)]();this[_0x117bc8(0x2ff)](_0x18c1c6,_0x4f34d7,_0x2f8b31,_0x2a704c,!![]);const _0x3e3e1a=this[_0x117bc8(0x474)]();return this[_0x117bc8(0x3db)][_0x117bc8(0x694)]>0x0?this['changeTextColor'](_0x43d085['powerUpColor']()):this['changeTextColor'](_0x585444[_0x117bc8(0x3a8)]()),this['drawItemKeyData'](_0x3e3e1a,_0x25a533,_0x5e00b1,_0x3e637a,![],_0x117bc8(0x5e1)),this['drawItemDarkRect'](_0x31ea23,_0x4f7431,_0x5b52a2),this['resetFontSettings'](),!![];}}return _0xb46596>=_0x44f37a;}else{if('dqStx'==='WWIoD'){const _0xd3119a=_0x19bcd9[_0x117bc8(0x5e8)]('['+_0x580f63['$1']['match'](/\d+/g)+']');for(const _0x3dcfcc of _0xd3119a){if(!_0xef0a27[_0x117bc8(0x43a)](_0x3dcfcc))return!![];}return![];}else return![];}},Window_EquipItem[_0x311a7f(0x3bb)][_0x311a7f(0x5a8)]=function(_0x6be5d8){const _0x10a365=_0x311a7f;if(!DataManager['isWeapon'](_0x6be5d8))return![];const _0x14fa89=/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i;let _0x23d0e0=0x0;const _0x1929b7=this[_0x10a365(0x476)][_0x10a365(0x662)](),_0x4ba2f2=SceneManager[_0x10a365(0x69c)][_0x10a365(0x564)][_0x10a365(0x46b)]();_0x1929b7[_0x4ba2f2]=null;for(const _0x43d862 of _0x1929b7){if(!_0x43d862)continue;if(!DataManager[_0x10a365(0x512)](_0x43d862))continue;if(_0x6be5d8[_0x10a365(0x228)]===_0x43d862['wtypeId']){if(_0x10a365(0x3a0)===_0x10a365(0x3a0)){_0x23d0e0+=0x1;if(_0x6be5d8[_0x10a365(0x5b3)][_0x10a365(0x260)](_0x14fa89)){if(_0x10a365(0x1fd)!==_0x10a365(0x310)){const _0x1545be=Number(RegExp['$1'])||0x1;if(_0x23d0e0>=_0x1545be)return!![];}else return _0x51ca39[_0x10a365(0x604)][_0x10a365(0x5cc)][_0x10a365(0x4bd)][_0x10a365(0x4fe)];}if(_0x43d862['note'][_0x10a365(0x260)](_0x14fa89)){const _0x47982e=Number(RegExp['$1'])||0x1;if(_0x23d0e0>=_0x47982e)return!![];}}else _0x2017d7+=_0x232116(_0x111ce4['$1']),_0x4baf10+=_0x50894b(_0x5a4cef['$2']);}}return![];},Window_EquipItem[_0x311a7f(0x3bb)][_0x311a7f(0x3a2)]=function(_0x4e1db6){const _0x14885a=_0x311a7f;if(!DataManager[_0x14885a(0x665)](_0x4e1db6))return![];const _0xa508b3=/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i;let _0x5344d3=0x0;const _0x39fb34=this[_0x14885a(0x476)][_0x14885a(0x662)](),_0x1dfaab=SceneManager[_0x14885a(0x69c)]['_slotWindow'][_0x14885a(0x46b)]();_0x39fb34[_0x1dfaab]=null;for(const _0xccc3fb of _0x39fb34){if(!_0xccc3fb)continue;if(!DataManager[_0x14885a(0x665)](_0xccc3fb))continue;if(_0x4e1db6['atypeId']===_0xccc3fb[_0x14885a(0x632)]){if(_0x14885a(0x4f1)!==_0x14885a(0x2d9)){_0x5344d3+=0x1;if(_0x4e1db6[_0x14885a(0x5b3)][_0x14885a(0x260)](_0xa508b3)){const _0x55fb66=Number(RegExp['$1'])||0x1;if(_0x5344d3>=_0x55fb66)return!![];}if(_0xccc3fb['note'][_0x14885a(0x260)](_0xa508b3)){const _0x51f13c=Number(RegExp['$1'])||0x1;if(_0x5344d3>=_0x51f13c)return!![];}}else _0x3c4e98[_0x14885a(0x604)][_0x14885a(0x51d)]['call'](this),this[_0x14885a(0x5e7)]()&&(this[_0x14885a(0x2dc)]['deactivate'](),this[_0x14885a(0x2dc)][_0x14885a(0x4e1)](),this['_slotWindow'][_0x14885a(0x373)](0x0),this['_slotWindow'][_0x14885a(0x5d0)]());}}return![];},Window_EquipItem[_0x311a7f(0x3bb)][_0x311a7f(0x1f8)]=function(){const _0x2c0c81=_0x311a7f;return VisuMZ['ItemsEquipsCore'][_0x2c0c81(0x5cc)][_0x2c0c81(0x4bd)][_0x2c0c81(0x2b9)];},Window_EquipItem[_0x311a7f(0x3bb)][_0x311a7f(0x4ad)]=function(_0x2de5d2){const _0x4f5f66=_0x311a7f,_0x32a992=this[_0x4f5f66(0x54d)](_0x2de5d2);if(_0x32a992)Window_ItemList[_0x4f5f66(0x3bb)][_0x4f5f66(0x4ad)]['call'](this,_0x2de5d2);else{if('iBxlL'===_0x4f5f66(0x5df))this[_0x4f5f66(0x2e1)](_0x2de5d2);else return![];}},Window_EquipItem[_0x311a7f(0x3bb)]['drawRemoveItem']=function(_0x24be15){const _0x2da42a=_0x311a7f;this[_0x2da42a(0x5b6)](this[_0x2da42a(0x2c1)](null));const _0x30ddee=VisuMZ[_0x2da42a(0x604)][_0x2da42a(0x5cc)][_0x2da42a(0x4bd)],_0x4e7339=this[_0x2da42a(0x574)](_0x24be15),_0x10b1b1=_0x4e7339['y']+(this[_0x2da42a(0x640)]()-ImageManager[_0x2da42a(0x5fd)])/0x2,_0x1d0f38=ImageManager[_0x2da42a(0x369)]+0x4,_0x2ba6c8=Math['max'](0x0,_0x4e7339[_0x2da42a(0x1f0)]-_0x1d0f38);this['resetTextColor'](),this['drawIcon'](_0x30ddee[_0x2da42a(0x275)],_0x4e7339['x'],_0x10b1b1),this[_0x2da42a(0x638)](_0x30ddee[_0x2da42a(0x2e2)],_0x4e7339['x']+_0x1d0f38,_0x4e7339['y'],_0x2ba6c8),this[_0x2da42a(0x5b6)](!![]);},Window_EquipItem[_0x311a7f(0x3bb)][_0x311a7f(0x402)]=function(){const _0x5345b3=_0x311a7f;Window_ItemList['prototype']['updateHelp']['call'](this);if(this[_0x5345b3(0x476)]&&this['_statusWindow']&&this[_0x5345b3(0x205)]>=0x0){if(_0x5345b3(0x21d)!==_0x5345b3(0x656)){const _0x2d0b4f=JsonEx[_0x5345b3(0x445)](this['_actor']);_0x2d0b4f[_0x5345b3(0x4fa)]=!![],_0x2d0b4f[_0x5345b3(0x4ef)](this['_slotId'],this[_0x5345b3(0x486)]()),this[_0x5345b3(0x495)][_0x5345b3(0x499)](_0x2d0b4f);}else this[_0x5345b3(0x564)][_0x5345b3(0x5b1)](_0x5345b3(0x1fa),this[_0x5345b3(0x1de)][_0x5345b3(0x451)](this)),this[_0x5345b3(0x564)]['setHandler']('pagedown',this[_0x5345b3(0x3e1)][_0x5345b3(0x451)](this)),this[_0x5345b3(0x564)]['setHandler'](_0x5345b3(0x538),this['previousActor'][_0x5345b3(0x451)](this));}},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x619)]=Window_ShopCommand[_0x311a7f(0x3bb)]['initialize'],Window_ShopCommand[_0x311a7f(0x3bb)]['initialize']=function(_0x470e88){const _0x4285aa=_0x311a7f;VisuMZ[_0x4285aa(0x604)]['Window_ShopCommand_initialize']['call'](this,_0x470e88),this['createCommandNameWindow'](_0x470e88);},Window_ShopCommand['prototype']['createCommandNameWindow']=function(_0x2e7ef6){const _0x41e4f5=_0x311a7f,_0x7b1d2a=new Rectangle(0x0,0x0,_0x2e7ef6[_0x41e4f5(0x1f0)],_0x2e7ef6[_0x41e4f5(0x3f6)]);this[_0x41e4f5(0x243)]=new Window_Base(_0x7b1d2a),this['_commandNameWindow'][_0x41e4f5(0x52f)]=0x0,this[_0x41e4f5(0x3d0)](this[_0x41e4f5(0x243)]),this[_0x41e4f5(0x3c1)]();},Window_ShopCommand['prototype'][_0x311a7f(0x4a1)]=function(){const _0x546ec7=_0x311a7f;Window_HorzCommand['prototype'][_0x546ec7(0x4a1)]['call'](this);if(this[_0x546ec7(0x243)])this['updateCommandNameWindow']();},Window_ShopCommand['prototype'][_0x311a7f(0x3c1)]=function(){const _0x3cd01f=_0x311a7f,_0x3b1540=this['_commandNameWindow'];_0x3b1540[_0x3cd01f(0x2ca)][_0x3cd01f(0x639)]();const _0x535542=this['commandStyleCheck'](this[_0x3cd01f(0x5c8)]());if(_0x535542===_0x3cd01f(0x2fd)){const _0x37281c=this[_0x3cd01f(0x574)](this[_0x3cd01f(0x5c8)]());let _0x561626=this[_0x3cd01f(0x235)](this['index']());_0x561626=_0x561626['replace'](/\\I\[(\d+)\]/gi,''),_0x3b1540[_0x3cd01f(0x560)](),this[_0x3cd01f(0x372)](_0x561626,_0x37281c),this['commandNameWindowDrawText'](_0x561626,_0x37281c),this[_0x3cd01f(0x3f0)](_0x561626,_0x37281c);}},Window_ShopCommand['prototype'][_0x311a7f(0x372)]=function(_0x486568,_0x41e1ef){},Window_ShopCommand['prototype'][_0x311a7f(0x689)]=function(_0x3c37ac,_0x323072){const _0x454b38=_0x311a7f,_0x209400=this[_0x454b38(0x243)];_0x209400[_0x454b38(0x638)](_0x3c37ac,0x0,_0x323072['y'],_0x209400['innerWidth'],_0x454b38(0x61f));},Window_ShopCommand[_0x311a7f(0x3bb)][_0x311a7f(0x3f0)]=function(_0x2dddd0,_0x120d4e){const _0x4764af=_0x311a7f,_0x5debe6=this['_commandNameWindow'],_0x49ab93=$gameSystem[_0x4764af(0x5ab)](),_0x2d8841=_0x120d4e['x']+Math[_0x4764af(0x58f)](_0x120d4e[_0x4764af(0x1f0)]/0x2)+_0x49ab93;_0x5debe6['x']=_0x5debe6['width']/-0x2+_0x2d8841,_0x5debe6['y']=Math[_0x4764af(0x58f)](_0x120d4e[_0x4764af(0x3f6)]/0x2);},Window_ShopCommand['prototype'][_0x311a7f(0x376)]=function(){const _0x58db2d=_0x311a7f;return this[_0x58db2d(0x3ac)]?this[_0x58db2d(0x3ac)][_0x58db2d(0x28c)]:0x3;},Window_ShopCommand[_0x311a7f(0x3bb)]['hideDisabledCommands']=function(){const _0x50d164=_0x311a7f;return VisuMZ[_0x50d164(0x604)][_0x50d164(0x5cc)][_0x50d164(0x470)][_0x50d164(0x327)];},Window_ShopCommand[_0x311a7f(0x3bb)][_0x311a7f(0x22f)]=function(){const _0x491448=_0x311a7f;this[_0x491448(0x4ce)](),this[_0x491448(0x2d1)](),this[_0x491448(0x395)]();},Window_ShopCommand[_0x311a7f(0x3bb)][_0x311a7f(0x4d8)]=function(){const _0x4eec4b=_0x311a7f;Window_HorzCommand['prototype'][_0x4eec4b(0x4d8)][_0x4eec4b(0x49e)](this),this[_0x4eec4b(0x3fe)]();},Window_ShopCommand['prototype']['addBuyCommand']=function(){const _0x34b169=_0x311a7f,_0x186b36=this['commandStyle'](),_0x51ee93=VisuMZ[_0x34b169(0x604)][_0x34b169(0x5cc)]['ShopScene']['CmdIconBuy'],_0x3d2c38=_0x186b36==='text'?TextManager[_0x34b169(0x527)]:'\x5cI[%1]%2'[_0x34b169(0x46e)](_0x51ee93,TextManager[_0x34b169(0x527)]),_0x4006d4=this[_0x34b169(0x6ab)]();if(this['hideDisabledCommands']()&&!_0x4006d4)return;this[_0x34b169(0x222)](_0x3d2c38,_0x34b169(0x527),_0x4006d4);},Window_ShopCommand[_0x311a7f(0x3bb)][_0x311a7f(0x6ab)]=function(){const _0x31179e=_0x311a7f;return SceneManager['_scene'][_0x31179e(0x552)]===Scene_Shop?SceneManager['_scene']['_goodsCount']>0x0:!![];},Window_ShopCommand[_0x311a7f(0x3bb)]['addSellCommand']=function(){const _0x231db3=_0x311a7f,_0x54e763=this[_0x231db3(0x500)](),_0x51e581=VisuMZ[_0x231db3(0x604)][_0x231db3(0x5cc)][_0x231db3(0x470)]['CmdIconSell'],_0x5e93cb=_0x54e763===_0x231db3(0x255)?TextManager[_0x231db3(0x5ae)]:_0x231db3(0x2e6)[_0x231db3(0x46e)](_0x51e581,TextManager[_0x231db3(0x5ae)]),_0x18183b=this[_0x231db3(0x42d)]();if(this[_0x231db3(0x2bc)]()&&!_0x18183b)return;this[_0x231db3(0x222)](_0x5e93cb,_0x231db3(0x5ae),_0x18183b);},Window_ShopCommand['prototype']['isSellCommandEnabled']=function(){const _0x426962=_0x311a7f;return!this[_0x426962(0x281)];},Window_ShopCommand[_0x311a7f(0x3bb)][_0x311a7f(0x395)]=function(){const _0x3b67ae=_0x311a7f,_0x2df66c=this[_0x3b67ae(0x500)](),_0x4a1ba0=VisuMZ['ItemsEquipsCore'][_0x3b67ae(0x5cc)][_0x3b67ae(0x470)][_0x3b67ae(0x361)],_0x4e268f=VisuMZ['ItemsEquipsCore'][_0x3b67ae(0x5cc)][_0x3b67ae(0x470)][_0x3b67ae(0x3a7)],_0x1466a=_0x2df66c===_0x3b67ae(0x255)?_0x4e268f:_0x3b67ae(0x2e6)['format'](_0x4a1ba0,_0x4e268f);this['addCommand'](_0x1466a,'cancel');},Window_ShopCommand['prototype'][_0x311a7f(0x692)]=function(){const _0x29cabf=_0x311a7f;return VisuMZ[_0x29cabf(0x604)][_0x29cabf(0x5cc)][_0x29cabf(0x470)][_0x29cabf(0x2e7)];},Window_ShopCommand[_0x311a7f(0x3bb)]['drawItem']=function(_0x15c82d){const _0x35d346=_0x311a7f,_0x43c2ab=this[_0x35d346(0x5dc)](_0x15c82d);if(_0x43c2ab==='iconText')this[_0x35d346(0x60b)](_0x15c82d);else _0x43c2ab===_0x35d346(0x2fd)?this['drawItemStyleIcon'](_0x15c82d):Window_HorzCommand['prototype'][_0x35d346(0x4ad)][_0x35d346(0x49e)](this,_0x15c82d);},Window_ShopCommand['prototype'][_0x311a7f(0x500)]=function(){const _0x3158d5=_0x311a7f;return VisuMZ['ItemsEquipsCore']['Settings'][_0x3158d5(0x470)][_0x3158d5(0x653)];},Window_ShopCommand[_0x311a7f(0x3bb)][_0x311a7f(0x5dc)]=function(_0x5f032c){const _0x4a81c4=_0x311a7f;if(_0x5f032c<0x0)return _0x4a81c4(0x255);const _0x3e28c6=this['commandStyle']();if(_0x3e28c6!=='auto')return _0x4a81c4(0x2d8)!=='eGXBc'?_0x16ceb1[_0x4a81c4(0x59a)]()[_0x4a81c4(0x67d)](_0x4bf15e):_0x3e28c6;else{if(this[_0x4a81c4(0x3f3)]()>0x0){if(_0x4a81c4(0x6a2)==='qnpeM'){const _0x27fa48=this[_0x4a81c4(0x235)](_0x5f032c);if(_0x27fa48['match'](/\\I\[(\d+)\]/i)){const _0x1402ef=this[_0x4a81c4(0x574)](_0x5f032c),_0x3fec71=this[_0x4a81c4(0x49c)](_0x27fa48)['width'];if(_0x3fec71<=_0x1402ef[_0x4a81c4(0x1f0)])return _0x4a81c4(0x381);else{if(_0x4a81c4(0x4c9)===_0x4a81c4(0x4c9))return _0x4a81c4(0x2fd);else{if(this[_0x4a81c4(0x312)]())return this['_buttonAssistWindow']['width']/0x5/-0x3;return _0x1fd125[_0x4a81c4(0x3bb)][_0x4a81c4(0x643)][_0x4a81c4(0x49e)](this);}}}}else this['_doubleTouch']=!![];}}return _0x4a81c4(0x255);},Window_ShopCommand[_0x311a7f(0x3bb)][_0x311a7f(0x60b)]=function(_0x2cb69f){const _0x3cb966=_0x311a7f,_0x45b9a6=this[_0x3cb966(0x574)](_0x2cb69f),_0x2bf9b3=this[_0x3cb966(0x235)](_0x2cb69f),_0x18d13b=this[_0x3cb966(0x49c)](_0x2bf9b3)[_0x3cb966(0x1f0)];this['changePaintOpacity'](this[_0x3cb966(0x2a9)](_0x2cb69f));const _0x1463ec=this[_0x3cb966(0x692)]();if(_0x1463ec==='right')'nhTie'===_0x3cb966(0x320)?this['drawTextEx'](_0x2bf9b3,_0x45b9a6['x']+_0x45b9a6[_0x3cb966(0x1f0)]-_0x18d13b,_0x45b9a6['y'],_0x18d13b):_0x4affbd[_0x3cb966(0x658)]=_0x26a170(_0x54f7cf['$1']);else{if(_0x1463ec==='center'){const _0x15fc49=_0x45b9a6['x']+Math['floor']((_0x45b9a6[_0x3cb966(0x1f0)]-_0x18d13b)/0x2);this[_0x3cb966(0x216)](_0x2bf9b3,_0x15fc49,_0x45b9a6['y'],_0x18d13b);}else this[_0x3cb966(0x216)](_0x2bf9b3,_0x45b9a6['x'],_0x45b9a6['y'],_0x18d13b);}},Window_ShopCommand['prototype'][_0x311a7f(0x269)]=function(_0xf7382c){const _0x1d3466=_0x311a7f;this['commandName'](_0xf7382c)[_0x1d3466(0x260)](/\\I\[(\d+)\]/i);const _0x4b67bd=Number(RegExp['$1'])||0x0,_0x577dc7=this[_0x1d3466(0x574)](_0xf7382c),_0x4b2811=_0x577dc7['x']+Math[_0x1d3466(0x58f)]((_0x577dc7[_0x1d3466(0x1f0)]-ImageManager[_0x1d3466(0x369)])/0x2),_0x3daebe=_0x577dc7['y']+(_0x577dc7[_0x1d3466(0x3f6)]-ImageManager['iconHeight'])/0x2;this[_0x1d3466(0x2aa)](_0x4b67bd,_0x4b2811,_0x3daebe);},VisuMZ[_0x311a7f(0x604)][_0x311a7f(0x5ea)]=Window_ShopBuy[_0x311a7f(0x3bb)][_0x311a7f(0x4d8)],Window_ShopBuy[_0x311a7f(0x3bb)][_0x311a7f(0x4d8)]=function(){const _0x1888f3=_0x311a7f;this['updateMoneyAmount'](),VisuMZ['ItemsEquipsCore'][_0x1888f3(0x5ea)]['call'](this);},Window_ShopBuy[_0x311a7f(0x3bb)][_0x311a7f(0x1e9)]=function(){const _0x372144=_0x311a7f;SceneManager[_0x372144(0x69c)][_0x372144(0x552)]===Scene_Shop&&(this[_0x372144(0x3a5)]=SceneManager[_0x372144(0x69c)][_0x372144(0x32c)]());},VisuMZ[_0x311a7f(0x604)]['Window_ShopBuy_price']=Window_ShopBuy[_0x311a7f(0x3bb)][_0x311a7f(0x658)],Window_ShopBuy[_0x311a7f(0x3bb)][_0x311a7f(0x658)]=function(_0x5c22a5){const _0x362aef=_0x311a7f;if(!_0x5c22a5)return 0x0;let _0x9b451f=VisuMZ[_0x362aef(0x604)][_0x362aef(0x4a3)][_0x362aef(0x49e)](this,_0x5c22a5);return Math['max'](0x0,this[_0x362aef(0x6a6)](_0x5c22a5,_0x9b451f));},Window_ShopBuy[_0x311a7f(0x3bb)][_0x311a7f(0x6a6)]=function(_0x336582,_0x1ea7cf){const _0x5ec1e1=_0x311a7f,_0x57db4d=_0x336582[_0x5ec1e1(0x5b3)];if(_0x57db4d[_0x5ec1e1(0x260)](/<JS BUY PRICE>\s*([\s\S]*)\s*<\/JS BUY PRICE>/i)){const _0xcb1eea=String(RegExp['$1']);try{_0x5ec1e1(0x4a7)!==_0x5ec1e1(0x4a7)?this[_0x5ec1e1(0x4a0)]():eval(_0xcb1eea);}catch(_0x4760e9){if($gameTemp[_0x5ec1e1(0x3c6)]())console[_0x5ec1e1(0x2f0)](_0x4760e9);}}_0x1ea7cf=VisuMZ['ItemsEquipsCore']['Settings']['ShopScene'][_0x5ec1e1(0x51b)]['call'](this,_0x336582,_0x1ea7cf);if(isNaN(_0x1ea7cf))_0x1ea7cf=0x0;return Math['floor'](_0x1ea7cf);},Window_ShopBuy['prototype'][_0x311a7f(0x4ad)]=function(_0x1241ff){const _0x23b8f0=_0x311a7f;this['resetFontSettings']();const _0x4da594=this[_0x23b8f0(0x54d)](_0x1241ff),_0x17a71c=this[_0x23b8f0(0x574)](_0x1241ff),_0xa66a8e=_0x17a71c[_0x23b8f0(0x1f0)];this[_0x23b8f0(0x5b6)](this['isEnabled'](_0x4da594)),this[_0x23b8f0(0x541)](_0x4da594,_0x17a71c['x'],_0x17a71c['y'],_0xa66a8e),this['drawItemCost'](_0x4da594,_0x17a71c),this['changePaintOpacity'](!![]);},Window_ShopBuy[_0x311a7f(0x3bb)]['drawItemCost']=function(_0x276c3b,_0x1de13e){const _0x1bb349=_0x311a7f,_0x3c597a=this[_0x1bb349(0x658)](_0x276c3b);this['drawCurrencyValue'](_0x3c597a,TextManager[_0x1bb349(0x4a9)],_0x1de13e['x'],_0x1de13e['y'],_0x1de13e['width']);},Window_ShopSell[_0x311a7f(0x3bb)][_0x311a7f(0x376)]=function(){const _0x142b0d=_0x311a7f;return SceneManager[_0x142b0d(0x69c)][_0x142b0d(0x641)]()?0x1:0x2;},VisuMZ['ItemsEquipsCore']['Window_ShopSell_isEnabled']=Window_ShopSell['prototype'][_0x311a7f(0x2c1)],Window_ShopSell[_0x311a7f(0x3bb)][_0x311a7f(0x2c1)]=function(_0x2e9f3c){const _0x79a7bf=_0x311a7f;if(!_0x2e9f3c)return![];const _0x25ae7c=_0x2e9f3c[_0x79a7bf(0x5b3)];if(_0x25ae7c[_0x79a7bf(0x260)](/<CANNOT SELL>/i))return![];if(_0x25ae7c[_0x79a7bf(0x260)](/<CAN SELL>/i))return!![];if(_0x25ae7c[_0x79a7bf(0x260)](/<CANNOT SELL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1f46df=JSON['parse']('['+RegExp['$1'][_0x79a7bf(0x260)](/\d+/g)+']');for(const _0x8e7029 of _0x1f46df){if(!$gameSwitches['value'](_0x8e7029))return![];}}if(_0x25ae7c['match'](/<CANNOT SELL ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xc1980=JSON[_0x79a7bf(0x5e8)]('['+RegExp['$1'][_0x79a7bf(0x260)](/\d+/g)+']');for(const _0x3b5de4 of _0xc1980){if(!$gameSwitches[_0x79a7bf(0x43a)](_0x3b5de4))return![];}}if(_0x25ae7c[_0x79a7bf(0x260)](/<CANNOT SELL ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if('BRIdT'!=='rrXMK'){const _0x2cf706=JSON[_0x79a7bf(0x5e8)]('['+RegExp['$1'][_0x79a7bf(0x260)](/\d+/g)+']');for(const _0x487d87 of _0x2cf706){if($gameSwitches['value'](_0x487d87))return![];}}else{if(!this[_0x79a7bf(0x3c9)](_0x1c696f,_0x4c5eac))return![];}}return VisuMZ['ItemsEquipsCore'][_0x79a7bf(0x298)][_0x79a7bf(0x49e)](this,_0x2e9f3c);},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x2e4)]=function(){return![];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x3ab)]=function(){const _0x21e519=_0x311a7f;Window_StatusBase[_0x21e519(0x3bb)][_0x21e519(0x3ab)]['call'](this);for(const _0x11848c of $gameParty[_0x21e519(0x624)]()){ImageManager[_0x21e519(0x239)](_0x11848c[_0x21e519(0x50d)]());}},Window_ShopStatus['prototype'][_0x311a7f(0x4a5)]=function(){const _0x44dbd9=_0x311a7f;return VisuMZ['ItemsEquipsCore'][_0x44dbd9(0x5cc)]['StatusWindow']['Translucent'];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x4d8)]=function(){const _0x15b2f4=_0x311a7f;this[_0x15b2f4(0x2ca)]['clear'](),this[_0x15b2f4(0x3a1)][_0x15b2f4(0x639)]();if(this[_0x15b2f4(0x2d6)]){this[_0x15b2f4(0x560)](),this[_0x15b2f4(0x5b6)](!![]),this[_0x15b2f4(0x5c0)]();if(this[_0x15b2f4(0x4df)]()){if(_0x15b2f4(0x5e3)!==_0x15b2f4(0x1d6))this[_0x15b2f4(0x2ac)]();else{if(!_0x16bc80)return[];this[_0x15b2f4(0x559)]=this[_0x15b2f4(0x559)]||{};const _0x38b88e=_0x15b2f4(0x303)['format'](this[_0x15b2f4(0x512)](_0x387a2f)?_0x15b2f4(0x502):_0x15b2f4(0x2db),_0x584ada['id']);if(this[_0x15b2f4(0x559)][_0x38b88e]!==_0x2a3d61)return this[_0x15b2f4(0x559)][_0x38b88e];let _0x494aa7=[];const _0x4784ad=_0x6b3f14[_0x15b2f4(0x5b3)]||'';return _0x4784ad[_0x15b2f4(0x260)](/<EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>\s*([\s\S]*)\s*<\/EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>/i)&&(_0x494aa7=_0x4512dc(_0x4b7ba4['$1'])[_0x15b2f4(0x51a)](/[\r\n]+/)),this[_0x15b2f4(0x559)][_0x38b88e]=_0x494aa7,this[_0x15b2f4(0x559)][_0x38b88e];}}else this[_0x15b2f4(0x400)]();this[_0x15b2f4(0x354)]();}},Window_ShopStatus[_0x311a7f(0x3bb)]['drawPossession']=function(_0x22911d,_0x214b97){const _0x50f187=_0x311a7f;if(!this[_0x50f187(0x4df)]()&&!DataManager[_0x50f187(0x55a)](this[_0x50f187(0x2d6)]))return;const _0x1cece6=this[_0x50f187(0x4fc)]-this['itemPadding']()-_0x22911d,_0x1b7676=this[_0x50f187(0x359)](_0x50f187(0x3d2));this[_0x50f187(0x636)](ColorManager[_0x50f187(0x385)]()),this[_0x50f187(0x638)](TextManager['possession'],_0x22911d+this[_0x50f187(0x652)](),_0x214b97,_0x1cece6-_0x1b7676),this[_0x50f187(0x2ec)](),this[_0x50f187(0x338)](this['_item'],_0x22911d,_0x214b97,_0x1cece6);},Window_ShopStatus['prototype'][_0x311a7f(0x37e)]=function(_0x5a795c,_0xf20b65,_0x3cc7e5,_0x41f916,_0x56789a){const _0x1df63f=_0x311a7f;if(VisuMZ['ItemsEquipsCore'][_0x1df63f(0x5cc)][_0x1df63f(0x4a2)]['DrawBackRect']===![])return;_0x56789a=Math[_0x1df63f(0x405)](_0x56789a||0x1,0x1);while(_0x56789a--){if(_0x1df63f(0x4e9)===_0x1df63f(0x4e9)){_0x41f916=_0x41f916||this[_0x1df63f(0x640)](),this['contentsBack'][_0x1df63f(0x399)]=0xa0;const _0x516243=ColorManager['getItemsEquipsCoreBackColor1']();this[_0x1df63f(0x3a1)][_0x1df63f(0x1f9)](_0x5a795c+0x1,_0xf20b65+0x1,_0x3cc7e5-0x2,_0x41f916-0x2,_0x516243),this[_0x1df63f(0x3a1)]['paintOpacity']=0xff;}else{const _0x2f1aeb=_0x102d1d[_0x1df63f(0x5e8)]('['+_0x4b1353['$1'][_0x1df63f(0x260)](/\d+/g)+']');for(const _0x549c60 of _0x2f1aeb){if(!_0x288542[_0x1df63f(0x43a)](_0x549c60))return![];}return!![];}}},ColorManager['getItemsEquipsCoreBackColor1']=function(){const _0x319e88=_0x311a7f,_0x5dbf30=VisuMZ[_0x319e88(0x604)]['Settings'][_0x319e88(0x4a2)];let _0xeaf52f=_0x5dbf30['BackRectColor']!==undefined?_0x5dbf30[_0x319e88(0x39f)]:0x13;return ColorManager[_0x319e88(0x3ed)](_0xeaf52f);},Window_ShopStatus['prototype']['drawEquipData']=function(){const _0x46bd28=_0x311a7f;if(VisuMZ[_0x46bd28(0x604)]['Settings'][_0x46bd28(0x4a2)]['DrawEquipData']){VisuMZ[_0x46bd28(0x604)]['Settings']['StatusWindow'][_0x46bd28(0x419)]['call'](this);return;}const _0xcdfe26=this[_0x46bd28(0x640)](),_0x5c5d0a=this[_0x46bd28(0x4c2)]()+0x8;let _0x1da8ac=0x0,_0x1db05a=0x0,_0x58c33a=this['innerWidth'],_0x252172=this[_0x46bd28(0x1e5)],_0x4d5a50=Math[_0x46bd28(0x58f)](_0x58c33a/0x2),_0x145f44=_0x1da8ac+_0x58c33a-_0x4d5a50;this['drawItemName'](this['_item'],_0x1da8ac+this[_0x46bd28(0x652)](),_0x1db05a,_0x58c33a-this[_0x46bd28(0x652)]()*0x2),this['drawItemDarkRect'](_0x1da8ac,_0x1db05a,_0x58c33a),_0x1db05a+=_0xcdfe26;if(this[_0x46bd28(0x3a4)](_0x1da8ac,_0x1db05a,_0x4d5a50))_0x1db05a+=0x0;if(this[_0x46bd28(0x62a)](_0x145f44,_0x1db05a,_0x4d5a50))_0x1db05a+=_0xcdfe26;const _0x5506ba=this[_0x46bd28(0x209)](),_0x4a72df=_0x1db05a;_0x1db05a=_0x252172-_0x5506ba['length']*_0x5c5d0a-0x4;let _0x318192=_0x1da8ac,_0x1124a4=0x0,_0x10b36f=_0x1db05a;for(const _0x76afe4 of _0x5506ba){_0x1124a4=Math[_0x46bd28(0x405)](this[_0x46bd28(0x23e)](_0x76afe4,_0x1da8ac+0x4,_0x1db05a+0x4,_0x58c33a),_0x1124a4),_0x1db05a+=_0x5c5d0a;}const _0x5d857c=$gameParty[_0x46bd28(0x591)](),_0x1c1fad=Math[_0x46bd28(0x58f)]((_0x58c33a-_0x1124a4)/_0x5d857c);_0x1124a4=_0x58c33a-_0x1c1fad*_0x5d857c;for(const _0x2b1a00 of $gameParty[_0x46bd28(0x518)]()){if('LeULX'===_0x46bd28(0x613)){const _0x2c4b13=$gameParty[_0x46bd28(0x518)]()[_0x46bd28(0x2df)](_0x2b1a00),_0xacde5b=_0x318192+_0x1124a4+_0x2c4b13*_0x1c1fad;this['changePaintOpacity'](_0x2b1a00['canEquip'](this[_0x46bd28(0x2d6)])),this[_0x46bd28(0x1db)](_0x2b1a00,_0xacde5b+_0x1c1fad/0x2,_0x10b36f);let _0x125ed1=_0x10b36f;for(const _0x56ea54 of _0x5506ba){const _0x585f18=_0x125ed1-(_0xcdfe26-_0x5c5d0a)/0x2;this[_0x46bd28(0x227)](_0x2b1a00,_0x56ea54,_0xacde5b,_0x585f18,_0x1c1fad),_0x125ed1+=_0x5c5d0a;}}else{const _0x202100=_0x1b7bb4(_0x2f85e9['$1'])[_0x46bd28(0x3d6)]()[_0x46bd28(0x3df)](),_0x151785=_0x371b43(_0x11070f['$2'])[_0x46bd28(0x3df)](),_0x33b75e=_0x5b099c(_0x35ded3['$3']),_0x451810=['atk',_0x46bd28(0x4a8),'mat',_0x46bd28(0x2f1),_0x46bd28(0x1ec),_0x46bd28(0x3f9)];let _0x2257ab=_0x451810[_0x46bd28(0x2df)](_0x202100)+0x2;if(_0x2257ab<0x2)return![];const _0x3a1a61=_0x4dfe5e[_0x46bd28(0x64a)][_0x2257ab]||0x0;switch(_0x151785){case'>':return _0x3afcc3[_0x46bd28(0x3f7)](_0x2257ab)+_0x3a1a61>_0x33b75e;case'>=':return _0xf95155[_0x46bd28(0x3f7)](_0x2257ab)+_0x3a1a61>=_0x33b75e;case _0x46bd28(0x3f5):return _0x50640a[_0x46bd28(0x3f7)](_0x2257ab)+_0x3a1a61===_0x33b75e;case'<=':return _0x592768[_0x46bd28(0x3f7)](_0x2257ab)+_0x3a1a61<=_0x33b75e;case'<':return _0x32465a[_0x46bd28(0x3f7)](_0x2257ab)+_0x3a1a61<_0x33b75e;}return![];}}this[_0x46bd28(0x37e)](_0x318192,_0x4a72df,_0x1124a4,_0x10b36f-_0x4a72df);for(let _0x178bf0=0x0;_0x178bf0<_0x5d857c;_0x178bf0++){if(_0x46bd28(0x20e)===_0x46bd28(0x20e)){const _0x570003=_0x318192+_0x1124a4+_0x178bf0*_0x1c1fad;this[_0x46bd28(0x37e)](_0x570003,_0x4a72df,_0x1c1fad,_0x10b36f-_0x4a72df);}else{if(!this[_0x46bd28(0x494)]())return;const _0x1dad67=this[_0x46bd28(0x500)](),_0xad6470=_0x120c84[_0x46bd28(0x604)][_0x46bd28(0x5cc)][_0x46bd28(0x4bd)]['CmdIconEquip'],_0x57847a=_0x1dad67===_0x46bd28(0x255)?_0x23d31c[_0x46bd28(0x21f)]:_0x46bd28(0x2e6)[_0x46bd28(0x46e)](_0xad6470,_0x15019f[_0x46bd28(0x21f)]),_0x5a163c=this[_0x46bd28(0x277)]();this[_0x46bd28(0x222)](_0x57847a,'equip',_0x5a163c);}}for(const _0x5bf110 of _0x5506ba){this[_0x46bd28(0x37e)](_0x318192,_0x10b36f,_0x1124a4,_0x5c5d0a);for(let _0x3c0096=0x0;_0x3c0096<_0x5d857c;_0x3c0096++){const _0x5cf46e=_0x318192+_0x1124a4+_0x3c0096*_0x1c1fad;this[_0x46bd28(0x37e)](_0x5cf46e,_0x10b36f,_0x1c1fad,_0x5c5d0a);}_0x10b36f+=_0x5c5d0a;}},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x3a4)]=function(_0xe37f27,_0x5a9734,_0x33469a){const _0x22cba9=_0x311a7f;if(!this[_0x22cba9(0x4df)]())return![];const _0x12caa9=$dataSystem[_0x22cba9(0x37c)][this[_0x22cba9(0x2d6)][_0x22cba9(0x2d5)]];return this[_0x22cba9(0x2ff)](_0x12caa9,_0xe37f27,_0x5a9734,_0x33469a,!![]),this[_0x22cba9(0x37e)](_0xe37f27,_0x5a9734,_0x33469a),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x5f8)]=function(){const _0x1e8761=_0x311a7f,_0x334680=VisuMZ[_0x1e8761(0x604)][_0x1e8761(0x5cc)][_0x1e8761(0x648)][_0x1e8761(0x464)];return _0x334680[_0x1e8761(0x46e)]($gameParty[_0x1e8761(0x5ed)](this[_0x1e8761(0x2d6)]));},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x209)]=function(){const _0x5748cd=_0x311a7f;let _0x36a431=[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];return Imported[_0x5748cd(0x3cd)]&&(_0x36a431=VisuMZ[_0x5748cd(0x5c9)][_0x5748cd(0x5cc)][_0x5748cd(0x443)]['ExtDisplayedParams']),_0x36a431=_0x36a431[_0x5748cd(0x693)](_0x5378f4=>typeof _0x5378f4===_0x5748cd(0x5ad)?_0x5378f4:_0x5378f4[_0x5748cd(0x5a1)]()[_0x5748cd(0x3df)]()),_0x36a431;},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x206)]=function(){const _0x87cf5c=_0x311a7f;return VisuMZ[_0x87cf5c(0x604)][_0x87cf5c(0x5cc)][_0x87cf5c(0x4a2)][_0x87cf5c(0x66f)];},Window_ShopStatus['prototype'][_0x311a7f(0x23e)]=function(_0x469d50,_0x1380f4,_0x1b9a84,_0x47a074){const _0x516a34=_0x311a7f;this[_0x516a34(0x560)](),this['contents']['fontSize']=this['smallParamFontSize']();let _0x5f44d2=this[_0x516a34(0x359)](TextManager[_0x516a34(0x33c)](_0x469d50))+0x4+_0x1380f4;return Imported[_0x516a34(0x3cd)]?(this[_0x516a34(0x65e)](_0x1380f4,_0x1b9a84,_0x47a074,_0x469d50,!![]),VisuMZ['CoreEngine'][_0x516a34(0x5cc)][_0x516a34(0x443)]['DrawIcons']&&(_0x5f44d2+=ImageManager[_0x516a34(0x369)]+0x4)):(this[_0x516a34(0x636)](ColorManager[_0x516a34(0x385)]()),this['drawText'](TextManager['param'](_0x469d50),_0x1380f4,_0x1b9a84,_0x47a074)),this[_0x516a34(0x560)](),_0x5f44d2;},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x227)]=function(_0x33bca5,_0x14e0bd,_0x2b31a7,_0x2b9b25,_0x23412a){const _0x23a25e=_0x311a7f;_0x2b31a7+=this[_0x23a25e(0x652)](),_0x23412a-=this[_0x23a25e(0x652)]()*0x2;const _0x1436af=VisuMZ[_0x23a25e(0x604)][_0x23a25e(0x5cc)][_0x23a25e(0x4a2)];this[_0x23a25e(0x2ca)][_0x23a25e(0x46d)]=_0x1436af['ParamChangeFontSize'],this['changePaintOpacity'](_0x33bca5[_0x23a25e(0x3ae)](this['_item']));if(_0x33bca5[_0x23a25e(0x246)](this[_0x23a25e(0x2d6)])&&!_0x33bca5[_0x23a25e(0x2da)](this[_0x23a25e(0x2d6)])){const _0x30acf0=_0x1436af['AlreadyEquipMarker'];this[_0x23a25e(0x638)](_0x30acf0,_0x2b31a7,_0x2b9b25,_0x23412a,'center');}else{if(_0x33bca5[_0x23a25e(0x3ae)](this['_item'])){const _0x2aab26=JsonEx[_0x23a25e(0x445)](_0x33bca5);_0x2aab26[_0x23a25e(0x4fa)]=!![];const _0x381327=_0x2aab26[_0x23a25e(0x5bd)](this[_0x23a25e(0x2d6)]);_0x381327>=0x0&&_0x2aab26['forceChangeEquip'](_0x381327,this[_0x23a25e(0x2d6)]);let _0xf6f811=0x0,_0x19f17a=0x0,_0xe8b162=0x0;if(Imported[_0x23a25e(0x3cd)]){if(_0x23a25e(0x515)===_0x23a25e(0x1df)){if(this[_0x23a25e(0x5ee)]&&this['_numberWindow'][_0x23a25e(0x2cb)])return _0x5ae075[_0x23a25e(0x604)][_0x23a25e(0x5cc)][_0x23a25e(0x470)][_0x23a25e(0x5f1)];return _0x375e02[_0x23a25e(0x3bb)]['buttonAssistText2'][_0x23a25e(0x49e)](this);}else _0xf6f811=_0x2aab26[_0x23a25e(0x416)](_0x14e0bd),_0x19f17a=_0xf6f811-_0x33bca5['paramValueByName'](_0x14e0bd),this[_0x23a25e(0x636)](ColorManager[_0x23a25e(0x4f3)](_0x19f17a)),_0xe8b162=(_0x19f17a>=0x0?'+':'')+VisuMZ[_0x23a25e(0x3a9)](_0x19f17a,0x0,_0x14e0bd);}else _0xf6f811=_0x2aab26[_0x23a25e(0x33c)](_0x14e0bd),_0x19f17a=_0xf6f811-_0x33bca5[_0x23a25e(0x33c)](_0x14e0bd),this[_0x23a25e(0x636)](ColorManager[_0x23a25e(0x4f3)](_0x19f17a)),_0xe8b162=(_0x19f17a>=0x0?'+':'')+_0x19f17a;_0xe8b162==='+0'&&(_0xe8b162=_0x1436af[_0x23a25e(0x414)]),this[_0x23a25e(0x638)](_0xe8b162,_0x2b31a7,_0x2b9b25,_0x23412a,_0x23a25e(0x61f));}else{const _0xf2ec1c=_0x1436af[_0x23a25e(0x56a)];this[_0x23a25e(0x638)](_0xf2ec1c,_0x2b31a7,_0x2b9b25,_0x23412a,_0x23a25e(0x61f));}}this['resetFontSettings'](),this['changePaintOpacity'](!![]);},Game_Actor[_0x311a7f(0x3bb)]['anyEmptyEquipSlotsOfSameEtype']=function(_0x4580e7){const _0x4f283a=_0x311a7f;if(!_0x4580e7)return![];const _0x10d6a4=_0x4580e7[_0x4f283a(0x2d5)],_0x5b3a5f=this[_0x4f283a(0x565)]();for(let _0x470477=0x0;_0x470477<_0x5b3a5f[_0x4f283a(0x28c)];_0x470477++){if(_0x4f283a(0x1ed)!=='ICCqz'){const _0xc3a278=this[_0x4f283a(0x65c)]()?0x0:_0x16c84d['boxWidth']-this[_0x4f283a(0x2ad)](),_0x5def26=this[_0x4f283a(0x660)](),_0x2c9ac6=this['statusWidth'](),_0x10ac11=this[_0x4f283a(0x4ac)]();return new _0xfa407e(_0xc3a278,_0x5def26,_0x2c9ac6,_0x10ac11);}else{const _0x34a94c=_0x5b3a5f[_0x470477];if(_0x34a94c!==_0x10d6a4)continue;if(!this['equips']()[_0x470477])return!![];}}return![];},Game_Actor[_0x311a7f(0x3bb)]['getEmptyEquipSlotOfSameEtype']=function(_0x45366a){const _0x10b3d6=_0x311a7f;if(!_0x45366a)return-0x1;const _0x1bb8ea=_0x45366a['etypeId'],_0x5b3aa0=this[_0x10b3d6(0x565)]();let _0x29def6=-0x1;for(let _0x1d5f0f=0x0;_0x1d5f0f<_0x5b3aa0[_0x10b3d6(0x28c)];_0x1d5f0f++){if(_0x10b3d6(0x566)===_0x10b3d6(0x4e7)){const _0x4548bb=this[_0x10b3d6(0x574)](_0x28b339),_0x498ec6=this[_0x10b3d6(0x235)](_0x3347a5),_0x42534c=this[_0x10b3d6(0x49c)](_0x498ec6)[_0x10b3d6(0x1f0)];this['changePaintOpacity'](this[_0x10b3d6(0x2a9)](_0x5b3ade));const _0x4a99=this[_0x10b3d6(0x692)]();if(_0x4a99===_0x10b3d6(0x5e1))this[_0x10b3d6(0x216)](_0x498ec6,_0x4548bb['x']+_0x4548bb[_0x10b3d6(0x1f0)]-_0x42534c,_0x4548bb['y'],_0x42534c);else{if(_0x4a99==='center'){const _0x946e7=_0x4548bb['x']+_0x33b279[_0x10b3d6(0x58f)]((_0x4548bb[_0x10b3d6(0x1f0)]-_0x42534c)/0x2);this[_0x10b3d6(0x216)](_0x498ec6,_0x946e7,_0x4548bb['y'],_0x42534c);}else this[_0x10b3d6(0x216)](_0x498ec6,_0x4548bb['x'],_0x4548bb['y'],_0x42534c);}}else{const _0x3661f6=_0x5b3aa0[_0x1d5f0f];if(_0x3661f6!==_0x1bb8ea)continue;if(!this[_0x10b3d6(0x662)]()[_0x1d5f0f])return _0x1d5f0f;if(_0x29def6<0x0)_0x29def6=_0x1d5f0f;}}return _0x29def6;},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x400)]=function(){const _0x1ee59e=_0x311a7f;VisuMZ[_0x1ee59e(0x604)][_0x1ee59e(0x5cc)]['StatusWindow'][_0x1ee59e(0x32b)][_0x1ee59e(0x49e)](this);},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x541)]=function(_0x3471d3,_0x2b6ec5,_0x4f4d7a,_0x5beb0f){const _0x57b3eb=_0x311a7f,_0x4b4949=DataManager[_0x57b3eb(0x370)](_0x3471d3,_0x2b6ec5,_0x4f4d7a,_0x5beb0f)&&Imported[_0x57b3eb(0x214)],_0x5e5215=_0x3471d3?_0x3471d3[_0x57b3eb(0x5cf)]:'';if(_0x4b4949)Window_SkillList[_0x57b3eb(0x3bb)][_0x57b3eb(0x526)]['call'](this,_0x3471d3);Window_Base['prototype'][_0x57b3eb(0x541)][_0x57b3eb(0x49e)](this,_0x3471d3,_0x2b6ec5,_0x4f4d7a,_0x5beb0f);if(_0x4b4949)_0x3471d3[_0x57b3eb(0x5cf)]=_0x5e5215;},Window_ShopStatus['prototype']['prepareItemCustomData']=function(){const _0x43a259=_0x311a7f;this[_0x43a259(0x38d)]={};if(!this[_0x43a259(0x2d6)])return;const _0x4062ea=this[_0x43a259(0x2d6)][_0x43a259(0x5b3)];if(_0x4062ea[_0x43a259(0x260)](/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)){if(_0x43a259(0x430)==='WqUET')this[_0x43a259(0x68c)]=_0x11f077,this[_0x43a259(0x4d8)](),this['updateChangedSlots']();else{const _0xc45581=String(RegExp['$1'])[_0x43a259(0x51a)](/[\r\n]+/);for(const _0x4c0452 of _0xc45581){if(_0x4c0452[_0x43a259(0x260)](/(.*):[ ](.*)/i)){const _0x5663a3=String(RegExp['$1'])['toUpperCase']()['trim'](),_0x39fe1c=String(RegExp['$2'])[_0x43a259(0x3df)]();this[_0x43a259(0x38d)][_0x5663a3]=_0x39fe1c;}}}}},Window_ShopStatus['prototype']['itemDataFontSize']=function(){const _0x4857bb=_0x311a7f;return Math[_0x4857bb(0x405)](0x1,$gameSystem[_0x4857bb(0x2cf)]()-0x4);},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x560)]=function(){const _0x32ed51=_0x311a7f;Window_StatusBase[_0x32ed51(0x3bb)][_0x32ed51(0x560)][_0x32ed51(0x49e)](this),this['contents'][_0x32ed51(0x46d)]=this['_resetFontSize']||this[_0x32ed51(0x2ca)]['fontSize'],this[_0x32ed51(0x2ca)][_0x32ed51(0x61a)]=this[_0x32ed51(0x52b)]||this[_0x32ed51(0x2ca)]['textColor'];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x5e2)]=function(){const _0x6ecff3=_0x311a7f;return this[_0x6ecff3(0x2ca)][_0x6ecff3(0x46d)]/$gameSystem[_0x6ecff3(0x2cf)]();},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x2aa)]=function(_0x5a3915,_0x247c53,_0x50ebcb){const _0x2c7a7d=_0x311a7f,_0x4d2a2f=ImageManager[_0x2c7a7d(0x52a)](_0x2c7a7d(0x245)),_0x5f0daf=ImageManager[_0x2c7a7d(0x369)],_0x2e474d=ImageManager[_0x2c7a7d(0x5fd)],_0x20faf6=_0x5a3915%0x10*_0x5f0daf,_0x13455f=Math['floor'](_0x5a3915/0x10)*_0x2e474d,_0x3b7bb4=Math['ceil'](_0x5f0daf*this[_0x2c7a7d(0x5e2)]()),_0x497ea6=Math[_0x2c7a7d(0x3b2)](_0x2e474d*this[_0x2c7a7d(0x5e2)]());this['contents'][_0x2c7a7d(0x59b)](_0x4d2a2f,_0x20faf6,_0x13455f,_0x5f0daf,_0x2e474d,_0x247c53,_0x50ebcb,_0x3b7bb4,_0x497ea6);},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x69a)]=function(_0x58bd2b,_0x215f4d){const _0x28c18b=_0x311a7f;_0x215f4d[_0x28c18b(0x306)]&&this[_0x28c18b(0x2aa)](_0x58bd2b,_0x215f4d['x'],_0x215f4d['y']+0x2);_0x215f4d['x']+=Math[_0x28c18b(0x3b2)](ImageManager[_0x28c18b(0x369)]*this['fontSizeRatio']());if(this['fontSizeRatio']()===0x1)_0x215f4d['x']+=0x4;},Window_ShopStatus['prototype'][_0x311a7f(0x2ff)]=function(_0x344fe0,_0x22bb03,_0xbce49a,_0x2d1e96,_0x14313b,_0x321f56){const _0x3d2fb2=_0x311a7f;_0x344fe0=_0x344fe0||'',_0x321f56=_0x321f56||_0x3d2fb2(0x6a5),this[_0x3d2fb2(0x58b)]=this[_0x3d2fb2(0x576)](),this[_0x3d2fb2(0x52b)]=_0x14313b?ColorManager[_0x3d2fb2(0x385)]():this[_0x3d2fb2(0x2ca)][_0x3d2fb2(0x61a)],_0x22bb03+=this[_0x3d2fb2(0x652)](),_0x2d1e96-=this[_0x3d2fb2(0x652)]()*0x2;const _0x8e391b=this['textSizeEx'](_0x344fe0);if(_0x321f56===_0x3d2fb2(0x61f))_0x22bb03=_0x22bb03+Math[_0x3d2fb2(0x58f)]((_0x2d1e96-_0x8e391b[_0x3d2fb2(0x1f0)])/0x2);else _0x321f56===_0x3d2fb2(0x5e1)&&(_0x22bb03=_0x22bb03+_0x2d1e96-_0x8e391b[_0x3d2fb2(0x1f0)]);_0xbce49a+=(this[_0x3d2fb2(0x640)]()-_0x8e391b[_0x3d2fb2(0x3f6)])/0x2,this[_0x3d2fb2(0x216)](_0x344fe0,_0x22bb03,_0xbce49a,_0x2d1e96),this[_0x3d2fb2(0x58b)]=undefined,this[_0x3d2fb2(0x52b)]=undefined,this[_0x3d2fb2(0x560)]();},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x25d)]=function(_0xb87382,_0xc48a6a,_0x33477a){const _0x2908db=_0x311a7f;if(!DataManager[_0x2908db(0x55a)](this[_0x2908db(0x2d6)]))return![];const _0x377932=this['getItemConsumableLabel']();this['drawItemKeyData'](_0x377932,_0xb87382,_0xc48a6a,_0x33477a,!![]);const _0x1914f0=this['getItemConsumableText']();return this[_0x2908db(0x2ff)](_0x1914f0,_0xb87382,_0xc48a6a,_0x33477a,![],_0x2908db(0x5e1)),this[_0x2908db(0x37e)](_0xb87382,_0xc48a6a,_0x33477a),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x337)]=function(){const _0x3d9bff=_0x311a7f;return VisuMZ[_0x3d9bff(0x604)][_0x3d9bff(0x5cc)][_0x3d9bff(0x4a2)]['LabelConsume'];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x283)]=function(){const _0x3ff473=_0x311a7f,_0x32244c='CONSUMABLE';if(this[_0x3ff473(0x38d)][_0x32244c])return this['_customItemInfo'][_0x32244c];return this[_0x3ff473(0x344)]()?_0x3ff473(0x547)!==_0x3ff473(0x50f)?VisuMZ[_0x3ff473(0x604)][_0x3ff473(0x5cc)]['StatusWindow'][_0x3ff473(0x440)]:_0x5b4d10[_0x3ff473(0x604)][_0x3ff473(0x5cc)][_0x3ff473(0x4a2)]['SpeedNeg1999']:VisuMZ[_0x3ff473(0x604)]['Settings'][_0x3ff473(0x4a2)][_0x3ff473(0x550)];},Window_ShopStatus['prototype'][_0x311a7f(0x344)]=function(){const _0x1b49f9=_0x311a7f;if(VisuMZ[_0x1b49f9(0x5c9)]&&VisuMZ[_0x1b49f9(0x5c9)][_0x1b49f9(0x5cc)]['QoL'][_0x1b49f9(0x5bf)]&&DataManager[_0x1b49f9(0x378)](this[_0x1b49f9(0x2d6)]))return _0x1b49f9(0x282)==='yVPdH'?'#'+_0x34dc48(_0x35f37b['$1']):![];else{if(_0x1b49f9(0x208)===_0x1b49f9(0x208))return this[_0x1b49f9(0x2d6)][_0x1b49f9(0x459)];else{if(_0x44c753>=0x0)_0x1bcaf7===this['index']()&&(this[_0x1b49f9(0x44f)]=!![]),this[_0x1b49f9(0x5d0)](),this[_0x1b49f9(0x351)](_0x21ad95);else _0x341228[_0x1b49f9(0x393)]()>=0x0&&(this[_0x1b49f9(0x557)](),this[_0x1b49f9(0x4e1)]());}}},Window_ShopStatus['prototype'][_0x311a7f(0x62a)]=function(_0x1fd203,_0x4cc730,_0x1790e2){const _0x73b56b=_0x311a7f;if(!this[_0x73b56b(0x4df)]()&&!DataManager[_0x73b56b(0x55a)](this[_0x73b56b(0x2d6)]))return![];if(DataManager[_0x73b56b(0x378)](this['_item'])&&!$dataSystem[_0x73b56b(0x687)]){if(_0x73b56b(0x5c1)===_0x73b56b(0x58e))this[_0x73b56b(0x34e)](_0x38298a[_0x73b56b(0x409)](_0x73b56b(0x6a5)));else{const _0x321d08=TextManager[_0x73b56b(0x1d5)];this[_0x73b56b(0x2ff)](_0x321d08,_0x1fd203,_0x4cc730,_0x1790e2,!![],_0x73b56b(0x61f));}}else{if(_0x73b56b(0x46c)==='jecbd'){const _0x1315b1=TextManager[_0x73b56b(0x1d8)];this[_0x73b56b(0x2ff)](_0x1315b1,_0x1fd203,_0x4cc730,_0x1790e2,!![]);const _0x4a5761=this[_0x73b56b(0x5f8)]();this['drawItemKeyData'](_0x4a5761,_0x1fd203,_0x4cc730,_0x1790e2,![],_0x73b56b(0x5e1));}else return _0x101269[_0x73b56b(0x604)]['Settings']['StatusWindow'][_0x73b56b(0x4f4)];}return this[_0x73b56b(0x37e)](_0x1fd203,_0x4cc730,_0x1790e2),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x5f8)]=function(){const _0x4d296e=_0x311a7f,_0x2b95cf=_0x4d296e(0x2eb);if(this[_0x4d296e(0x38d)][_0x2b95cf])return this['_customItemInfo'][_0x2b95cf];const _0x39369c=VisuMZ[_0x4d296e(0x604)][_0x4d296e(0x5cc)]['ItemScene'][_0x4d296e(0x464)];return _0x39369c['format']($gameParty[_0x4d296e(0x5ed)](this['_item']));},Window_ShopStatus[_0x311a7f(0x3bb)]['drawItemOccasion']=function(_0x2dd2a5,_0x2a9d1b,_0x55d0b0){const _0x37a04c=_0x311a7f,_0x5d38f5=this[_0x37a04c(0x623)]();return this['drawItemKeyData'](_0x5d38f5,_0x2dd2a5,_0x2a9d1b,_0x55d0b0,![],_0x37a04c(0x61f)),this[_0x37a04c(0x37e)](_0x2dd2a5,_0x2a9d1b,_0x55d0b0),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype']['getItemOccasionText']=function(){const _0x211376=_0x311a7f,_0x50f42a=_0x211376(0x490);if(this['_customItemInfo'][_0x50f42a])return this['_customItemInfo'][_0x50f42a];const _0x4a13d0=VisuMZ['ItemsEquipsCore'][_0x211376(0x5cc)][_0x211376(0x4a2)],_0x5b3a4e='Occasion%1'[_0x211376(0x46e)](this['_item'][_0x211376(0x36e)]);return _0x4a13d0[_0x5b3a4e];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x3b0)]=function(_0x9ab5d7,_0x3dc18b,_0x298eec){const _0x8b699=_0x311a7f,_0x47dd5b=this[_0x8b699(0x4ba)]();return this[_0x8b699(0x2ff)](_0x47dd5b,_0x9ab5d7,_0x3dc18b,_0x298eec,![],_0x8b699(0x61f)),this[_0x8b699(0x37e)](_0x9ab5d7,_0x3dc18b,_0x298eec),this[_0x8b699(0x560)](),!![];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x4ba)]=function(){const _0x55cf09=_0x311a7f,_0x2ae80b=_0x55cf09(0x26e);if(this[_0x55cf09(0x38d)][_0x2ae80b])return this[_0x55cf09(0x38d)][_0x2ae80b];const _0x119bf6=VisuMZ[_0x55cf09(0x604)][_0x55cf09(0x5cc)][_0x55cf09(0x4a2)];if(Imported[_0x55cf09(0x5e4)]){if('noTEb'===_0x55cf09(0x2a2)){const _0x2dc5fa=this[_0x55cf09(0x2d6)][_0x55cf09(0x5b3)];if(_0x2dc5fa[_0x55cf09(0x260)](/<TARGET:[ ](.*)>/i)){const _0x15a38f=String(RegExp['$1']);if(_0x15a38f[_0x55cf09(0x260)](/(\d+) RANDOM ANY/i))return _0x119bf6[_0x55cf09(0x2de)]['format'](Number(RegExp['$1']));else{if(_0x15a38f[_0x55cf09(0x260)](/(\d+) RANDOM (?:ENEMY|ENEMIES|FOE|FOES)/i)){if(_0x55cf09(0x69e)!=='tHuTd')_0x593745+=_0x55cf09(0x3bd)[_0x55cf09(0x46e)](this['_itemData'][_0x55cf09(0x694)]);else return _0x119bf6['ScopeRandomEnemies'][_0x55cf09(0x46e)](Number(RegExp['$1']));}else{if(_0x15a38f['match'](/(\d+) RANDOM (?:ALLY|ALLIES|FRIEND|FRIENDS)/i)){if(_0x55cf09(0x600)!=='dzutm')return _0x119bf6['ScopeRandomAllies'][_0x55cf09(0x46e)](Number(RegExp['$1']));else this[_0x55cf09(0x2dc)][_0x55cf09(0x373)](0x0),this['_slotWindow'][_0x55cf09(0x557)]();}else{if(_0x15a38f[_0x55cf09(0x260)](/ALL (?:ALLY|ALLIES|FRIEND|FRIENDS) (?:BUT|EXCEPT) (?:USER|SELF)/i)){if(_0x55cf09(0x5ba)!==_0x55cf09(0x5ba)){let _0x121a7e=_0x5735fb['ItemsEquipsCore'][_0x55cf09(0x44b)]['call'](this);return _0x121a7e['concat'](_0x57cc68[_0x55cf09(0x219)]());}else return _0x119bf6[_0x55cf09(0x3e0)];}}}}}}else return!!_0x5e87f5&&_0x530953['etypeId']===_0x181604(_0x19a581['$1']);}const _0x3f0b85='Scope%1'[_0x55cf09(0x46e)](this['_item'][_0x55cf09(0x2d4)]);return _0x119bf6[_0x3f0b85];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x384)]=function(_0x4f2dc2,_0x1f5736,_0x322f8c){const _0x4e3e60=_0x311a7f,_0x16f1fe=this[_0x4e3e60(0x60c)]();this[_0x4e3e60(0x2ff)](_0x16f1fe,_0x4f2dc2,_0x1f5736,_0x322f8c,!![]);const _0x5dc782=this['getItemSpeedText']();return this[_0x4e3e60(0x2ff)](_0x5dc782,_0x4f2dc2,_0x1f5736,_0x322f8c,![],'right'),this['drawItemDarkRect'](_0x4f2dc2,_0x1f5736,_0x322f8c),this[_0x4e3e60(0x560)](),!![];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x60c)]=function(){const _0x1d537e=_0x311a7f;return VisuMZ['ItemsEquipsCore'][_0x1d537e(0x5cc)][_0x1d537e(0x4a2)]['LabelSpeed'];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x466)]=function(){const _0x1c1383=_0x311a7f,_0x175305=_0x1c1383(0x5a0);if(this[_0x1c1383(0x38d)][_0x175305])return this[_0x1c1383(0x38d)][_0x175305];const _0x3628a7=this[_0x1c1383(0x2d6)][_0x1c1383(0x578)];if(_0x3628a7>=0x7d0)return _0x1c1383(0x589)===_0x1c1383(0x568)?_0x45ab56[_0x1c1383(0x69c)][_0x1c1383(0x641)]()?0x1:0x2:VisuMZ[_0x1c1383(0x604)][_0x1c1383(0x5cc)][_0x1c1383(0x4a2)][_0x1c1383(0x507)];else{if(_0x3628a7>=0x3e8)return VisuMZ['ItemsEquipsCore'][_0x1c1383(0x5cc)][_0x1c1383(0x4a2)]['Speed1000'];else{if(_0x3628a7>0x0)return'isHdC'==='dowVv'?_0x1c1383(0x381):VisuMZ[_0x1c1383(0x604)]['Settings'][_0x1c1383(0x4a2)][_0x1c1383(0x250)];else{if(_0x3628a7===0x0)return VisuMZ[_0x1c1383(0x604)][_0x1c1383(0x5cc)][_0x1c1383(0x4a2)][_0x1c1383(0x2dd)];else{if(_0x3628a7>-0x3e8)return VisuMZ[_0x1c1383(0x604)][_0x1c1383(0x5cc)][_0x1c1383(0x4a2)][_0x1c1383(0x45c)];else{if(_0x3628a7>-0x7d0)return VisuMZ['ItemsEquipsCore'][_0x1c1383(0x5cc)][_0x1c1383(0x4a2)][_0x1c1383(0x3ff)];else{if(_0x3628a7<=-0x7d0){if(_0x1c1383(0x5d8)===_0x1c1383(0x5d8))return VisuMZ[_0x1c1383(0x604)][_0x1c1383(0x5cc)][_0x1c1383(0x4a2)][_0x1c1383(0x4f4)];else{const _0x18fdbd=_0x351a09[_0x1c1383(0x5e8)]('['+_0x2d75f3['$1'][_0x1c1383(0x260)](/\d+/g)+']');for(const _0x4d198d of _0x18fdbd){if(!_0x3766da['value'](_0x4d198d))return!![];}return![];}}else return _0x1c1383(0x45f);}}}}}}},Window_ShopStatus['prototype'][_0x311a7f(0x37d)]=function(_0x3bfb37,_0x4a5af0,_0x1b404d){const _0x31c97b=_0x311a7f,_0x9fa424=this[_0x31c97b(0x362)]();this[_0x31c97b(0x2ff)](_0x9fa424,_0x3bfb37,_0x4a5af0,_0x1b404d,!![]);const _0x11d45d=this[_0x31c97b(0x627)]();return this['drawItemKeyData'](_0x11d45d,_0x3bfb37,_0x4a5af0,_0x1b404d,![],_0x31c97b(0x5e1)),this[_0x31c97b(0x37e)](_0x3bfb37,_0x4a5af0,_0x1b404d),this[_0x31c97b(0x560)](),!![];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x362)]=function(){const _0x379ea9=_0x311a7f;return VisuMZ['ItemsEquipsCore'][_0x379ea9(0x5cc)]['StatusWindow'][_0x379ea9(0x262)];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x627)]=function(){const _0x50eeb8=_0x311a7f,_0x23e8a6=_0x50eeb8(0x53c);if(this[_0x50eeb8(0x38d)][_0x23e8a6])return this[_0x50eeb8(0x38d)][_0x23e8a6];if(Imported[_0x50eeb8(0x5e4)]){const _0x1c65f7=this[_0x50eeb8(0x2d6)][_0x50eeb8(0x5b3)];if(_0x1c65f7[_0x50eeb8(0x260)](/<ALWAYS HIT>/i))return _0x50eeb8(0x288);else{if(_0x1c65f7[_0x50eeb8(0x260)](/<ALWAYS HIT RATE: (\d+)([%％])>/i))return _0x50eeb8(0x382)[_0x50eeb8(0x46e)](Number(RegExp['$1']));}}return'%1%'[_0x50eeb8(0x46e)](this[_0x50eeb8(0x2d6)][_0x50eeb8(0x1f5)]);},Window_ShopStatus[_0x311a7f(0x3bb)]['drawItemRepeats']=function(_0x829b11,_0x4c1fe8,_0x198808){const _0x689ad7=_0x311a7f,_0x10bea0=this[_0x689ad7(0x41d)]();this['drawItemKeyData'](_0x10bea0,_0x829b11,_0x4c1fe8,_0x198808,!![]);const _0x4972d6=this[_0x689ad7(0x1e0)]();return this[_0x689ad7(0x2ff)](_0x4972d6,_0x829b11,_0x4c1fe8,_0x198808,![],'right'),this['drawItemDarkRect'](_0x829b11,_0x4c1fe8,_0x198808),this[_0x689ad7(0x560)](),!![];},Window_ShopStatus['prototype']['getItemRepeatsLabel']=function(){const _0x4540d9=_0x311a7f;return VisuMZ[_0x4540d9(0x604)]['Settings'][_0x4540d9(0x4a2)][_0x4540d9(0x21b)];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x1e0)]=function(){const _0x3cc495=_0x311a7f,_0x1c650d=_0x3cc495(0x311);if(this[_0x3cc495(0x38d)][_0x1c650d])return this[_0x3cc495(0x38d)][_0x1c650d];const _0x1ef3c0=_0x3cc495(0x4fd);return _0x1ef3c0['format'](this[_0x3cc495(0x2d6)][_0x3cc495(0x2a7)]);},Window_ShopStatus[_0x311a7f(0x3bb)]['drawItemHitType']=function(_0x4678ae,_0x585fb0,_0x35eff7){const _0x35c119=_0x311a7f,_0x74071b=this[_0x35c119(0x522)]();this['drawItemKeyData'](_0x74071b,_0x4678ae,_0x585fb0,_0x35eff7,!![]);const _0x5b88db=this['getItemHitTypeText']();return this[_0x35c119(0x2ff)](_0x5b88db,_0x4678ae,_0x585fb0,_0x35eff7,![],_0x35c119(0x5e1)),this[_0x35c119(0x37e)](_0x4678ae,_0x585fb0,_0x35eff7),this[_0x35c119(0x560)](),!![];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x522)]=function(){const _0x50b899=_0x311a7f;return VisuMZ['ItemsEquipsCore'][_0x50b899(0x5cc)][_0x50b899(0x4a2)][_0x50b899(0x2b6)];},Window_ShopStatus['prototype'][_0x311a7f(0x634)]=function(){const _0x5f1aac=_0x311a7f,_0x4384ce='HIT\x20TYPE';if(this['_customItemInfo'][_0x4384ce])return this[_0x5f1aac(0x38d)][_0x4384ce];const _0x4a55b6=VisuMZ['ItemsEquipsCore']['Settings'][_0x5f1aac(0x4a2)],_0x49d637=_0x5f1aac(0x63b)[_0x5f1aac(0x46e)](this[_0x5f1aac(0x2d6)][_0x5f1aac(0x4d2)]);return _0x4a55b6[_0x49d637];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x4f8)]=function(_0x35da46,_0x309d08,_0x228003){const _0x5be4ff=_0x311a7f;if(this[_0x5be4ff(0x2d6)]['damage'][_0x5be4ff(0x4b0)]<=0x0)return _0x309d08;if(this[_0x5be4ff(0x523)](_0x35da46,_0x309d08,_0x228003))_0x309d08+=this[_0x5be4ff(0x640)]();if(this[_0x5be4ff(0x524)](_0x35da46,_0x309d08,_0x228003))_0x309d08+=this[_0x5be4ff(0x640)]();return this[_0x5be4ff(0x560)](),_0x309d08;},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x523)]=function(_0x4d77a2,_0x1244bd,_0x47106c){const _0x18186f=_0x311a7f,_0x5c3e4a=this[_0x18186f(0x1eb)]();this[_0x18186f(0x2ff)](_0x5c3e4a,_0x4d77a2,_0x1244bd,_0x47106c,!![]);const _0xdfcab6=this['getItemDamageElementText']();return this['drawItemKeyData'](_0xdfcab6,_0x4d77a2,_0x1244bd,_0x47106c,![],_0x18186f(0x5e1)),this[_0x18186f(0x37e)](_0x4d77a2,_0x1244bd,_0x47106c),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x1eb)]=function(){const _0x37474b=_0x311a7f;return VisuMZ['ItemsEquipsCore']['Settings'][_0x37474b(0x4a2)][_0x37474b(0x5b2)];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x35d)]=function(){const _0x5a27aa=_0x311a7f,_0x4799c6=_0x5a27aa(0x6a4);if(this[_0x5a27aa(0x38d)][_0x4799c6])return this['_customItemInfo'][_0x4799c6];if(this[_0x5a27aa(0x2d6)][_0x5a27aa(0x411)]['elementId']<=-0x1)return'XXgVB'!==_0x5a27aa(0x2b2)?VisuMZ['ItemsEquipsCore'][_0x5a27aa(0x5cc)][_0x5a27aa(0x4a2)][_0x5a27aa(0x2b4)]:_0x1243a3['ItemsEquipsCore'][_0x5a27aa(0x5cc)][_0x5a27aa(0x4bd)][_0x5a27aa(0x363)];else{if(this['_item'][_0x5a27aa(0x411)][_0x5a27aa(0x53d)]===0x0)return _0x5a27aa(0x44a)!==_0x5a27aa(0x611)?VisuMZ[_0x5a27aa(0x604)]['Settings'][_0x5a27aa(0x4a2)]['ElementNone']:_0x497337['prototype'][_0x5a27aa(0x2c1)][_0x5a27aa(0x49e)](this,_0xb9bdc5);else{if(_0x5a27aa(0x3b5)==='LUibd')return $dataSystem['elements'][this[_0x5a27aa(0x2d6)][_0x5a27aa(0x411)][_0x5a27aa(0x53d)]];else _0x352901['prototype'][_0x5a27aa(0x338)][_0x5a27aa(0x49e)](this,_0x51cb74,_0x1ef382,_0xb3db09,_0x351b03);}}},Window_ShopStatus['prototype'][_0x311a7f(0x524)]=function(_0x2f213c,_0x5d5a07,_0x138490){const _0x3a3603=_0x311a7f,_0x3bf60f=this[_0x3a3603(0x68a)]();this['drawItemKeyData'](_0x3bf60f,_0x2f213c,_0x5d5a07,_0x138490,!![]),this[_0x3a3603(0x5da)]();const _0x5119a6=this[_0x3a3603(0x63d)](),_0x268965=ColorManager['damageColor']([0x0,0x0,0x2,0x1,0x3,0x1,0x3][this[_0x3a3603(0x2d6)]['damage'][_0x3a3603(0x4b0)]]);return this['changeTextColor'](_0x268965),this['drawItemKeyData'](_0x5119a6,_0x2f213c,_0x5d5a07,_0x138490,![],_0x3a3603(0x5e1)),this[_0x3a3603(0x37e)](_0x2f213c,_0x5d5a07,_0x138490),this[_0x3a3603(0x560)](),!![];},Window_ShopStatus['prototype'][_0x311a7f(0x68a)]=function(){const _0x944af8=_0x311a7f;return Imported[_0x944af8(0x5e4)]&&DataManager['getDamageStyle'](this['_item'])!==_0x944af8(0x4af)?this[_0x944af8(0x64f)]():'KAzsL'!==_0x944af8(0x236)?this[_0x944af8(0x30e)]():this[_0x944af8(0x35e)](_0x1518bb);},Window_ShopStatus[_0x311a7f(0x3bb)]['getItemDamageAmountLabelOriginal']=function(){const _0x42f3c3=_0x311a7f,_0x4d1c17=VisuMZ[_0x42f3c3(0x604)][_0x42f3c3(0x5cc)][_0x42f3c3(0x4a2)],_0x49d97=_0x42f3c3(0x521)[_0x42f3c3(0x46e)](this[_0x42f3c3(0x2d6)]['damage'][_0x42f3c3(0x4b0)]),_0x146eec=[null,TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp']][this[_0x42f3c3(0x2d6)][_0x42f3c3(0x411)][_0x42f3c3(0x4b0)]];return _0x4d1c17[_0x49d97][_0x42f3c3(0x46e)](_0x146eec);},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x5da)]=function(){const _0x2abd49=_0x311a7f,_0x2e27f7=$gameActors[_0x2abd49(0x59a)](0x1);this['_tempActorA']=JsonEx[_0x2abd49(0x445)](_0x2e27f7),this[_0x2abd49(0x581)]=JsonEx[_0x2abd49(0x445)](_0x2e27f7);},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x63d)]=function(){const _0x1e8337=_0x311a7f,_0x3f0959=_0x1e8337(0x292);if(this['_customItemInfo'][_0x3f0959])return this[_0x1e8337(0x38d)][_0x3f0959];if(Imported[_0x1e8337(0x5e4)]&&DataManager[_0x1e8337(0x42f)](this[_0x1e8337(0x2d6)])!=='MANUAL')return this[_0x1e8337(0x661)]();else{if(_0x1e8337(0x433)!==_0x1e8337(0x39a))return this[_0x1e8337(0x248)]();else{const _0x337d34=_0x311eb4[_0x1e8337(0x42b)](_0x412604[_0x1e8337(0x4cd)]()),_0x416cd7=this[_0x1e8337(0x4fc)]-_0x337d34[_0x1e8337(0x1f0)];_0x4a2500+=_0x416cd7/0x2;if(_0x416cd7<0x0)_0x3a32a9-=_0x416cd7;_0x41a2dd['prototype'][_0x1e8337(0x69b)]['call'](this,_0x181100,_0x22c1ac,_0x21a7e0,_0x1740c5,_0x42c0bd);}}},Window_ShopStatus[_0x311a7f(0x3bb)]['getItemDamageAmountTextOriginal']=function(){const _0xeb6cb5=_0x311a7f;window['a']=this[_0xeb6cb5(0x5fa)],window['b']=this[_0xeb6cb5(0x581)],this[_0xeb6cb5(0x5fa)]['setShopStatusWindowMode'](!![]),this['_tempActorB'][_0xeb6cb5(0x4d1)]([0x3,0x4][_0xeb6cb5(0x1f7)](this[_0xeb6cb5(0x2d6)][_0xeb6cb5(0x411)][_0xeb6cb5(0x4b0)]));let _0x50787b=this[_0xeb6cb5(0x2d6)][_0xeb6cb5(0x411)]['formula'];try{const _0x2df2d8=Math[_0xeb6cb5(0x405)](eval(_0x50787b),0x0)/window['a'][_0xeb6cb5(0x2fa)];return this['revertGlobalNamespaceVariables'](),isNaN(_0x2df2d8)?'?????':_0xeb6cb5(0x382)['format'](Math[_0xeb6cb5(0x3b7)](_0x2df2d8*0x64));}catch(_0x3429e9){if(_0xeb6cb5(0x583)===_0xeb6cb5(0x629)){const _0x389e92=_0x391f91['ItemsEquipsCore'][_0xeb6cb5(0x5cc)][_0xeb6cb5(0x4bd)];return _0x389e92['CommandAddOptimize']||_0x389e92['CommandAddClear'];}else{if($gameTemp[_0xeb6cb5(0x3c6)]()){if(_0xeb6cb5(0x2f2)!=='kVArh')console['log'](_0xeb6cb5(0x481)[_0xeb6cb5(0x46e)](this[_0xeb6cb5(0x2d6)][_0xeb6cb5(0x5cf)])),console[_0xeb6cb5(0x2f0)](_0x3429e9);else return _0xd60bb2[_0xeb6cb5(0x604)][_0xeb6cb5(0x5cc)][_0xeb6cb5(0x470)][_0xeb6cb5(0x41c)];}return this['revertGlobalNamespaceVariables'](),_0xeb6cb5(0x45f);}}},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x220)]=function(){window['a']=undefined,window['b']=undefined;},Window_ShopStatus['prototype']['drawItemEffects']=function(_0x367590,_0x55db59,_0x9db97c){const _0xba373e=_0x311a7f;if(!this[_0xba373e(0x240)]())return _0x55db59;if(this['drawItemEffectsHpRecovery'](_0x367590,_0x55db59,_0x9db97c))_0x55db59+=this[_0xba373e(0x640)]();if(this['drawItemEffectsMpRecovery'](_0x367590,_0x55db59,_0x9db97c))_0x55db59+=this[_0xba373e(0x640)]();if(this[_0xba373e(0x4f9)](_0x367590,_0x55db59,_0x9db97c))_0x55db59+=this[_0xba373e(0x640)]();if(this[_0xba373e(0x368)](_0x367590,_0x55db59,_0x9db97c))_0x55db59+=this[_0xba373e(0x640)]();if(this[_0xba373e(0x468)](_0x367590,_0x55db59,_0x9db97c))_0x55db59+=this[_0xba373e(0x640)]();if(this['drawItemEffectsTpDamage'](_0x367590,_0x55db59,_0x9db97c))_0x55db59+=this[_0xba373e(0x640)]();if(this[_0xba373e(0x308)](_0x367590,_0x55db59,_0x9db97c))_0x55db59+=this[_0xba373e(0x640)]();if(this[_0xba373e(0x66c)](_0x367590,_0x55db59,_0x9db97c))_0x55db59+=this['lineHeight']();if(this['drawItemEffectsRemovedStatesBuffs'](_0x367590,_0x55db59,_0x9db97c))_0x55db59+=this[_0xba373e(0x640)]();return this[_0xba373e(0x560)](),_0x55db59;},Window_ShopStatus['prototype'][_0x311a7f(0x5fe)]=function(){const _0x3230fa=_0x311a7f;return this[_0x3230fa(0x2d6)]['effects'];},Window_ShopStatus['prototype'][_0x311a7f(0x240)]=function(){const _0x4c0201=_0x311a7f;let _0x498786=![];this[_0x4c0201(0x3db)]={'rateHP':0x0,'flatHP':0x0,'rateMP':0x0,'flatMP':0x0,'gainTP':0x0,'selfTP':0x0,'addState':[],'removeState':[],'changeBuff':[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],'removeBuff':[],'removeDebuff':[],'addStateBuffChanges':![],'removeStateBuffChanges':![]};const _0xe4d942=this[_0x4c0201(0x5fe)]();for(const _0x5d7c04 of _0xe4d942){switch(_0x5d7c04[_0x4c0201(0x5db)]){case Game_Action[_0x4c0201(0x67c)]:this[_0x4c0201(0x3db)][_0x4c0201(0x67a)]+=_0x5d7c04[_0x4c0201(0x465)],this[_0x4c0201(0x3db)][_0x4c0201(0x33d)]+=_0x5d7c04[_0x4c0201(0x3c0)],_0x498786=!![];break;case Game_Action[_0x4c0201(0x35a)]:this[_0x4c0201(0x3db)][_0x4c0201(0x331)]+=_0x5d7c04['value1'],this[_0x4c0201(0x3db)]['flatMP']+=_0x5d7c04[_0x4c0201(0x3c0)],_0x498786=!![];break;case Game_Action[_0x4c0201(0x294)]:this[_0x4c0201(0x3db)]['gainTP']+=_0x5d7c04[_0x4c0201(0x465)],_0x498786=!![];break;case Game_Action[_0x4c0201(0x462)]:this[_0x4c0201(0x3db)][_0x4c0201(0x261)][_0x4c0201(0x300)](_0x5d7c04[_0x4c0201(0x3b1)]),_0x498786=!![];break;case Game_Action['EFFECT_REMOVE_STATE']:this[_0x4c0201(0x3db)]['removeState'][_0x4c0201(0x300)](_0x5d7c04[_0x4c0201(0x3b1)]),this[_0x4c0201(0x3db)][_0x4c0201(0x664)]=!![],_0x498786=!![];break;case Game_Action[_0x4c0201(0x2b5)]:this['_itemData'][_0x4c0201(0x450)][_0x5d7c04[_0x4c0201(0x3b1)]]+=0x1,_0x498786=!![];break;case Game_Action['EFFECT_ADD_DEBUFF']:this[_0x4c0201(0x3db)][_0x4c0201(0x450)][_0x5d7c04[_0x4c0201(0x3b1)]]-=0x1,_0x498786=!![];break;case Game_Action['EFFECT_REMOVE_BUFF']:this['_itemData'][_0x4c0201(0x608)][_0x4c0201(0x300)](_0x5d7c04[_0x4c0201(0x3b1)]),this[_0x4c0201(0x3db)]['removeStateBuffChanges']=!![],_0x498786=!![];break;case Game_Action[_0x4c0201(0x5fc)]:this[_0x4c0201(0x3db)][_0x4c0201(0x2c8)]['push'](_0x5d7c04['dataId']),this['_itemData'][_0x4c0201(0x664)]=!![],_0x498786=!![];break;}}if(this[_0x4c0201(0x3db)][_0x4c0201(0x261)][_0x4c0201(0x28c)]>0x0)this['_itemData'][_0x4c0201(0x5d5)]=!![];for(let _0x3114d3=0x0;_0x3114d3<this[_0x4c0201(0x3db)][_0x4c0201(0x450)][_0x4c0201(0x28c)];_0x3114d3++){if('MMeeI'===_0x4c0201(0x4c6)){if(this[_0x4c0201(0x3db)][_0x4c0201(0x450)][_0x3114d3]!==0x0)this[_0x4c0201(0x3db)][_0x4c0201(0x5d5)]=!![];}else{const _0x3c8060=_0x3f37a8['ItemsEquipsCore'][_0x4c0201(0x5cc)][_0x4c0201(0x4a2)][_0x4c0201(0x4c3)];return _0x3c8060['format'](_0x32f4c7['mp']);}}this['_item'][_0x4c0201(0x530)]!==0x0&&(this['_itemData'][_0x4c0201(0x694)]=this[_0x4c0201(0x2d6)][_0x4c0201(0x530)],_0x498786=!![]);const _0x3ef4f7=['HP\x20RECOVERY',_0x4c0201(0x360),_0x4c0201(0x20a),'HP\x20DAMAGE',_0x4c0201(0x387),_0x4c0201(0x475),_0x4c0201(0x53b),'ADDED\x20EFFECTS',_0x4c0201(0x212)];for(const _0x3c250c of _0x3ef4f7){if(_0x4c0201(0x563)===_0x4c0201(0x563)){if(this[_0x4c0201(0x38d)][_0x3c250c]){if(_0x4c0201(0x1f2)!==_0x4c0201(0x1f2))return _0x20bc5d;else{_0x498786=!![];break;}}}else return this[_0x4c0201(0x529)][_0x4d5bd8];}return _0x498786;},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x6a7)]=function(_0x2f2272,_0x340ec2,_0x570adc){const _0x10c418=_0x311a7f,_0x2802cd=_0x10c418(0x2fc);if(this[_0x10c418(0x3db)][_0x10c418(0x67a)]<=0x0&&this[_0x10c418(0x3db)][_0x10c418(0x33d)]<=0x0&&!this[_0x10c418(0x38d)][_0x2802cd])return![];const _0x1dbf00=this[_0x10c418(0x31d)]();this[_0x10c418(0x2ff)](_0x1dbf00,_0x2f2272,_0x340ec2,_0x570adc,!![]);const _0x5f20cc=this[_0x10c418(0x347)]();return this[_0x10c418(0x636)](ColorManager[_0x10c418(0x392)](0x1)),this[_0x10c418(0x2ff)](_0x5f20cc,_0x2f2272,_0x340ec2,_0x570adc,![],_0x10c418(0x5e1)),this['drawItemDarkRect'](_0x2f2272,_0x340ec2,_0x570adc),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x31d)]=function(){const _0x580d11=_0x311a7f,_0x2d5a1b=VisuMZ[_0x580d11(0x604)]['Settings'][_0x580d11(0x4a2)][_0x580d11(0x58c)];return _0x2d5a1b['format'](TextManager['hp']);},Window_ShopStatus['prototype'][_0x311a7f(0x347)]=function(){const _0x5b925d=_0x311a7f,_0x197358=_0x5b925d(0x2fc);if(this[_0x5b925d(0x38d)][_0x197358])return this['_customItemInfo'][_0x197358];let _0x403a56='';if(this[_0x5b925d(0x3db)][_0x5b925d(0x67a)]>0x0)_0x403a56+=_0x5b925d(0x480)['format'](Math[_0x5b925d(0x58f)](this['_itemData']['rateHP']*0x64));if(this[_0x5b925d(0x3db)]['rateHP']>0x0&&this['_itemData'][_0x5b925d(0x33d)]>0x0)_0x403a56+='\x20';if(this[_0x5b925d(0x3db)][_0x5b925d(0x33d)]>0x0)_0x403a56+=_0x5b925d(0x3bd)[_0x5b925d(0x46e)](this[_0x5b925d(0x3db)]['flatHP']);return _0x403a56;},Window_ShopStatus[_0x311a7f(0x3bb)]['drawItemEffectsMpRecovery']=function(_0x4f5225,_0x4581e9,_0x5ef55a){const _0x511e68=_0x311a7f,_0x516ca0=_0x511e68(0x360);if(this['_itemData'][_0x511e68(0x331)]<=0x0&&this[_0x511e68(0x3db)]['flatMP']<=0x0&&!this[_0x511e68(0x38d)][_0x516ca0])return![];const _0x4493ae=this[_0x511e68(0x3d8)]();this[_0x511e68(0x2ff)](_0x4493ae,_0x4f5225,_0x4581e9,_0x5ef55a,!![]);const _0x54a34=this[_0x511e68(0x59f)]();return this[_0x511e68(0x636)](ColorManager[_0x511e68(0x392)](0x3)),this['drawItemKeyData'](_0x54a34,_0x4f5225,_0x4581e9,_0x5ef55a,![],_0x511e68(0x5e1)),this[_0x511e68(0x37e)](_0x4f5225,_0x4581e9,_0x5ef55a),this[_0x511e68(0x560)](),!![];},Window_ShopStatus['prototype']['getItemEffectsMpRecoveryLabel']=function(){const _0x2518d4=_0x311a7f,_0x362607=VisuMZ['ItemsEquipsCore'][_0x2518d4(0x5cc)][_0x2518d4(0x4a2)][_0x2518d4(0x29d)];return _0x362607[_0x2518d4(0x46e)](TextManager['mp']);},Window_ShopStatus['prototype'][_0x311a7f(0x59f)]=function(){const _0xeaf9c1=_0x311a7f,_0x2c164d=_0xeaf9c1(0x360);if(this[_0xeaf9c1(0x38d)][_0x2c164d])return this[_0xeaf9c1(0x38d)][_0x2c164d];let _0x6abe85='';if(this[_0xeaf9c1(0x3db)][_0xeaf9c1(0x331)]>0x0)_0x6abe85+=_0xeaf9c1(0x480)[_0xeaf9c1(0x46e)](Math[_0xeaf9c1(0x58f)](this[_0xeaf9c1(0x3db)]['rateMP']*0x64));if(this[_0xeaf9c1(0x3db)][_0xeaf9c1(0x331)]>0x0&&this[_0xeaf9c1(0x3db)]['flatMP']>0x0)_0x6abe85+='\x20';if(this[_0xeaf9c1(0x3db)][_0xeaf9c1(0x47c)]>0x0)_0x6abe85+='+%1'[_0xeaf9c1(0x46e)](this['_itemData'][_0xeaf9c1(0x47c)]);return _0x6abe85;},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x4f9)]=function(_0x5be605,_0x186325,_0x3b8d7f){const _0x196563=_0x311a7f,_0x48057c=_0x196563(0x20a);if(this[_0x196563(0x3db)]['gainTP']<=0x0&&!this[_0x196563(0x38d)][_0x48057c])return![];const _0x4e774f=this[_0x196563(0x5c6)]();this[_0x196563(0x2ff)](_0x4e774f,_0x5be605,_0x186325,_0x3b8d7f,!![]);const _0x332f56=this[_0x196563(0x2c2)]();return this[_0x196563(0x636)](ColorManager[_0x196563(0x22b)]()),this[_0x196563(0x2ff)](_0x332f56,_0x5be605,_0x186325,_0x3b8d7f,![],_0x196563(0x5e1)),this['drawItemDarkRect'](_0x5be605,_0x186325,_0x3b8d7f),this[_0x196563(0x560)](),!![];},Window_ShopStatus[_0x311a7f(0x3bb)]['getItemEffectsTpRecoveryLabel']=function(){const _0x335122=_0x311a7f,_0x29e36a=VisuMZ[_0x335122(0x604)][_0x335122(0x5cc)][_0x335122(0x4a2)][_0x335122(0x699)];return _0x29e36a[_0x335122(0x46e)](TextManager['tp']);},Window_ShopStatus['prototype']['getItemEffectsTpRecoveryText']=function(){const _0x4375b1=_0x311a7f,_0x23c792='TP\x20RECOVERY';if(this['_customItemInfo'][_0x23c792])return this[_0x4375b1(0x38d)][_0x23c792];let _0x34efce='';return _0x34efce+=_0x4375b1(0x3bd)[_0x4375b1(0x46e)](this['_itemData'][_0x4375b1(0x334)]),_0x34efce;},Window_ShopStatus[_0x311a7f(0x3bb)]['drawItemEffectsSelfTpGain']=function(_0x14b86c,_0x1f17ff,_0x4cfff0){const _0x393d1c=_0x311a7f,_0x1d814e='USER\x20TP\x20GAIN';if(this[_0x393d1c(0x3db)][_0x393d1c(0x694)]===0x0&&!this[_0x393d1c(0x38d)][_0x1d814e])return![];const _0x571edd=this[_0x393d1c(0x24b)]();this[_0x393d1c(0x2ff)](_0x571edd,_0x14b86c,_0x1f17ff,_0x4cfff0,!![]);const _0x27ba98=this[_0x393d1c(0x474)]();return this[_0x393d1c(0x3db)][_0x393d1c(0x694)]>0x0?this[_0x393d1c(0x636)](ColorManager['powerUpColor']()):this['changeTextColor'](ColorManager[_0x393d1c(0x3a8)]()),this[_0x393d1c(0x2ff)](_0x27ba98,_0x14b86c,_0x1f17ff,_0x4cfff0,![],_0x393d1c(0x5e1)),this[_0x393d1c(0x37e)](_0x14b86c,_0x1f17ff,_0x4cfff0),this[_0x393d1c(0x560)](),!![];},Window_ShopStatus[_0x311a7f(0x3bb)]['getItemEffectsSelfTpGainLabel']=function(){const _0x2089b8=_0x311a7f,_0x47403f=VisuMZ['ItemsEquipsCore'][_0x2089b8(0x5cc)][_0x2089b8(0x4a2)]['LabelSelfGainTP'];return _0x47403f[_0x2089b8(0x46e)](TextManager['tp']);},Window_ShopStatus[_0x311a7f(0x3bb)]['getItemEffectsSelfTpGainText']=function(){const _0x3ea82c=_0x311a7f,_0x383946=_0x3ea82c(0x53b);if(this[_0x3ea82c(0x38d)][_0x383946])return this[_0x3ea82c(0x38d)][_0x383946];let _0x439257='';if(this[_0x3ea82c(0x3db)][_0x3ea82c(0x694)]>0x0){if('KTOWS'===_0x3ea82c(0x4dc))_0x439257+=_0x3ea82c(0x3bd)[_0x3ea82c(0x46e)](this[_0x3ea82c(0x3db)]['selfTP']);else{const _0xccb0bc=_0x2924ec?_0x46077d(_0x37772e['$1']):_0x41d26b[_0x3ea82c(0x577)](_0xe343f9);return _0x4fad84[_0xccb0bc]||_0x1f5792;}}else _0x439257+='%1'[_0x3ea82c(0x46e)](this[_0x3ea82c(0x3db)][_0x3ea82c(0x694)]);return _0x439257;},Window_ShopStatus[_0x311a7f(0x3bb)]['drawItemEffectsHpDamage']=function(_0x4b800c,_0x3476ea,_0x3dde9a){const _0x581f9d=_0x311a7f,_0x129317=_0x581f9d(0x278);if(this[_0x581f9d(0x3db)]['rateHP']>=0x0&&this['_itemData'][_0x581f9d(0x33d)]>=0x0&&!this['_customItemInfo'][_0x129317])return![];const _0x17f11c=this['getItemEffectsHpDamageLabel']();this[_0x581f9d(0x2ff)](_0x17f11c,_0x4b800c,_0x3476ea,_0x3dde9a,!![]);const _0x36544d=this[_0x581f9d(0x616)]();return this['changeTextColor'](ColorManager[_0x581f9d(0x392)](0x0)),this[_0x581f9d(0x2ff)](_0x36544d,_0x4b800c,_0x3476ea,_0x3dde9a,![],'right'),this[_0x581f9d(0x37e)](_0x4b800c,_0x3476ea,_0x3dde9a),this[_0x581f9d(0x560)](),!![];},Window_ShopStatus[_0x311a7f(0x3bb)]['getItemEffectsHpDamageLabel']=function(){const _0x1e6724=_0x311a7f,_0x4fa37e=VisuMZ[_0x1e6724(0x604)]['Settings']['StatusWindow'][_0x1e6724(0x69f)];return _0x4fa37e[_0x1e6724(0x46e)](TextManager['hp']);},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x616)]=function(){const _0x189ab8=_0x311a7f,_0x2624c7=_0x189ab8(0x278);if(this[_0x189ab8(0x38d)][_0x2624c7])return this[_0x189ab8(0x38d)][_0x2624c7];let _0xb23778='';if(this[_0x189ab8(0x3db)][_0x189ab8(0x67a)]<0x0)_0xb23778+=_0x189ab8(0x382)[_0x189ab8(0x46e)](Math[_0x189ab8(0x58f)](this[_0x189ab8(0x3db)]['rateHP']*0x64));if(this[_0x189ab8(0x3db)][_0x189ab8(0x67a)]<0x0&&this['_itemData'][_0x189ab8(0x33d)]<0x0)_0xb23778+='\x20';if(this[_0x189ab8(0x3db)][_0x189ab8(0x33d)]<0x0)_0xb23778+='%1'[_0x189ab8(0x46e)](this['_itemData'][_0x189ab8(0x33d)]);return _0xb23778;},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x468)]=function(_0x99480b,_0x3fc3ed,_0x554718){const _0x245896=_0x311a7f,_0x35483f=_0x245896(0x387);if(this[_0x245896(0x3db)][_0x245896(0x331)]>=0x0&&this[_0x245896(0x3db)][_0x245896(0x47c)]>=0x0&&!this['_customItemInfo'][_0x35483f])return![];const _0x410fbe=this[_0x245896(0x2e9)]();this[_0x245896(0x2ff)](_0x410fbe,_0x99480b,_0x3fc3ed,_0x554718,!![]);const _0x32f102=this[_0x245896(0x637)]();return this[_0x245896(0x636)](ColorManager[_0x245896(0x392)](0x2)),this['drawItemKeyData'](_0x32f102,_0x99480b,_0x3fc3ed,_0x554718,![],_0x245896(0x5e1)),this[_0x245896(0x37e)](_0x99480b,_0x3fc3ed,_0x554718),this[_0x245896(0x560)](),!![];},Window_ShopStatus['prototype'][_0x311a7f(0x2e9)]=function(){const _0x5ce3ec=_0x311a7f,_0x447d1b=VisuMZ[_0x5ce3ec(0x604)]['Settings']['StatusWindow'][_0x5ce3ec(0x4c3)];return _0x447d1b[_0x5ce3ec(0x46e)](TextManager['mp']);},Window_ShopStatus[_0x311a7f(0x3bb)]['getItemEffectsMpDamageText']=function(){const _0x17623f=_0x311a7f,_0x24dd9e=_0x17623f(0x387);if(this[_0x17623f(0x38d)][_0x24dd9e])return this[_0x17623f(0x38d)][_0x24dd9e];let _0x6c5829='';if(this[_0x17623f(0x3db)][_0x17623f(0x331)]<0x0)_0x6c5829+='%1%'[_0x17623f(0x46e)](Math[_0x17623f(0x58f)](this[_0x17623f(0x3db)]['rateMP']*0x64));if(this[_0x17623f(0x3db)]['rateMP']<0x0&&this['_itemData'][_0x17623f(0x47c)]<0x0)_0x6c5829+='\x20';if(this[_0x17623f(0x3db)]['flatMP']<0x0)_0x6c5829+='%1'[_0x17623f(0x46e)](this[_0x17623f(0x3db)][_0x17623f(0x47c)]);return _0x6c5829;},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x302)]=function(_0x3adfb9,_0x563b70,_0x20579d){const _0x5c066d=_0x311a7f,_0xfab41e='TP\x20DAMAGE';if(this[_0x5c066d(0x3db)]['gainTP']>=0x0&&!this[_0x5c066d(0x38d)][_0xfab41e])return![];const _0x4c608e=this[_0x5c066d(0x61d)]();this[_0x5c066d(0x2ff)](_0x4c608e,_0x3adfb9,_0x563b70,_0x20579d,!![]);const _0x244240=this[_0x5c066d(0x356)]();return this[_0x5c066d(0x636)](ColorManager[_0x5c066d(0x3a8)]()),this[_0x5c066d(0x2ff)](_0x244240,_0x3adfb9,_0x563b70,_0x20579d,![],_0x5c066d(0x5e1)),this[_0x5c066d(0x37e)](_0x3adfb9,_0x563b70,_0x20579d),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x61d)]=function(){const _0x5d3b50=_0x311a7f,_0x7948d6=VisuMZ[_0x5d3b50(0x604)]['Settings'][_0x5d3b50(0x4a2)][_0x5d3b50(0x1d9)];return _0x7948d6[_0x5d3b50(0x46e)](TextManager['tp']);},Window_ShopStatus['prototype'][_0x311a7f(0x356)]=function(){const _0x5c9b8e=_0x311a7f,_0x584b74=_0x5c9b8e(0x475);if(this[_0x5c9b8e(0x38d)][_0x584b74])return this['_customItemInfo'][_0x584b74];let _0x4f9e5e='';return _0x4f9e5e+='%1'['format'](this[_0x5c9b8e(0x3db)]['gainTP']),_0x4f9e5e;},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x66c)]=function(_0x4389f0,_0x5cdd6b,_0x4ec0bf){const _0x3e9fe5=_0x311a7f,_0x53385e=_0x3e9fe5(0x651);if(!this[_0x3e9fe5(0x3db)][_0x3e9fe5(0x5d5)]&&!this[_0x3e9fe5(0x38d)][_0x53385e])return![];const _0x37d5e0=this[_0x3e9fe5(0x5f9)]();this[_0x3e9fe5(0x2ff)](_0x37d5e0,_0x4389f0,_0x5cdd6b,_0x4ec0bf,!![]);const _0x44cf03=this[_0x3e9fe5(0x675)]();return this[_0x3e9fe5(0x2ff)](_0x44cf03,_0x4389f0,_0x5cdd6b,_0x4ec0bf,![],_0x3e9fe5(0x5e1)),this['drawItemDarkRect'](_0x4389f0,_0x5cdd6b,_0x4ec0bf),this[_0x3e9fe5(0x560)](),!![];},Window_ShopStatus['prototype'][_0x311a7f(0x5f9)]=function(){const _0x495c4c=_0x311a7f;return VisuMZ['ItemsEquipsCore'][_0x495c4c(0x5cc)]['StatusWindow']['LabelApply'];},Window_ShopStatus[_0x311a7f(0x3bb)]['getItemEffectsAddedStatesBuffsText']=function(){const _0x26e45f=_0x311a7f,_0x572cf0='ADDED\x20EFFECTS';if(this['_customItemInfo'][_0x572cf0])return this['_customItemInfo'][_0x572cf0];let _0x44a0a7='',_0x5f0fa4=0x0;const _0x1886bb=0x8;for(const _0xa4b935 of this['_itemData']['addState']){const _0x10aff4=$dataStates[_0xa4b935];if(_0x10aff4&&_0x10aff4[_0x26e45f(0x204)]>0x0){if(_0x26e45f(0x2f4)===_0x26e45f(0x2b3))return _0x3399b2[_0x26e45f(0x405)](0x1,_0x4a8905[_0x26e45f(0x2cf)]()-0x4);else{_0x44a0a7+='\x5cI[%1]'[_0x26e45f(0x46e)](_0x10aff4[_0x26e45f(0x204)]),_0x5f0fa4++;if(_0x5f0fa4>=_0x1886bb)return _0x44a0a7;}}}for(let _0x38ab3e=0x0;_0x38ab3e<this[_0x26e45f(0x3db)][_0x26e45f(0x450)][_0x26e45f(0x28c)];_0x38ab3e++){if(_0x26e45f(0x42c)===_0x26e45f(0x43e))return _0x328dbd[_0x26e45f(0x604)][_0x26e45f(0x5cc)]['EquipScene']['LayoutStyle'];else{const _0x51c0e2=this['_itemData'][_0x26e45f(0x450)][_0x38ab3e],_0x2aea94=Game_BattlerBase[_0x26e45f(0x3bb)][_0x26e45f(0x4e3)](_0x51c0e2,_0x38ab3e);if(_0x2aea94>0x0){_0x44a0a7+=_0x26e45f(0x2c5)[_0x26e45f(0x46e)](_0x2aea94),_0x5f0fa4++;if(_0x5f0fa4>=_0x1886bb)return _0x44a0a7;}}}return _0x44a0a7;},Window_ShopStatus[_0x311a7f(0x3bb)]['drawItemEffectsRemovedStatesBuffs']=function(_0x1a313b,_0x20f657,_0x3f18ba){const _0x11fd65=_0x311a7f,_0x42e875=_0x11fd65(0x212);if(!this[_0x11fd65(0x3db)][_0x11fd65(0x664)]&&!this['_customItemInfo'][_0x42e875])return![];const _0x40f861=this['getItemEffectsRemovedStatesBuffsLabel']();this[_0x11fd65(0x2ff)](_0x40f861,_0x1a313b,_0x20f657,_0x3f18ba,!![]);const _0x1433b9=this[_0x11fd65(0x4b6)]();return this[_0x11fd65(0x2ff)](_0x1433b9,_0x1a313b,_0x20f657,_0x3f18ba,![],'right'),this[_0x11fd65(0x37e)](_0x1a313b,_0x20f657,_0x3f18ba),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x311a7f(0x3bb)]['getItemEffectsRemovedStatesBuffsLabel']=function(){const _0x2162cc=_0x311a7f;return VisuMZ[_0x2162cc(0x604)]['Settings'][_0x2162cc(0x4a2)][_0x2162cc(0x4f5)];},Window_ShopStatus['prototype'][_0x311a7f(0x4b6)]=function(){const _0x47128e=_0x311a7f,_0x366073='REMOVED\x20EFFECTS';if(this[_0x47128e(0x38d)][_0x366073])return this[_0x47128e(0x38d)][_0x366073];let _0x5cfb9e='',_0x29e338=0x0;const _0x11c372=VisuMZ['ItemsEquipsCore']['Settings']['StatusWindow'][_0x47128e(0x4cc)];for(const _0x4f2c75 of this[_0x47128e(0x3db)][_0x47128e(0x595)]){if(_0x47128e(0x352)!==_0x47128e(0x352))return _0x3e49d0[_0x47128e(0x604)][_0x47128e(0x463)][_0x47128e(0x49e)](this);else{const _0x419e94=$dataStates[_0x4f2c75];if(_0x419e94&&_0x419e94[_0x47128e(0x204)]>0x0){_0x5cfb9e+=_0x47128e(0x2c5)[_0x47128e(0x46e)](_0x419e94[_0x47128e(0x204)]),_0x29e338++;if(_0x29e338>=_0x11c372)return _0x5cfb9e;}}}for(let _0x20a668=0x0;_0x20a668<this['_itemData'][_0x47128e(0x608)]['length'];_0x20a668++){if(_0x47128e(0x36d)==='dTQRQ'){const _0x2895cb=Game_BattlerBase[_0x47128e(0x3bb)][_0x47128e(0x4e3)](0x1,_0x20a668);if(_0x2895cb>0x0){_0x5cfb9e+=_0x47128e(0x2c5)[_0x47128e(0x46e)](_0x2895cb),_0x29e338++;if(_0x29e338>=_0x11c372)return _0x5cfb9e;}}else return this[_0x47128e(0x415)]();}for(let _0x2d8a43=0x0;_0x2d8a43<this[_0x47128e(0x3db)][_0x47128e(0x2c8)][_0x47128e(0x28c)];_0x2d8a43++){if(_0x47128e(0x66b)===_0x47128e(0x413))return _0x48edd1[_0x47128e(0x604)][_0x47128e(0x23a)][_0x47128e(0x49e)](this);else{const _0x20f7f0=Game_BattlerBase[_0x47128e(0x3bb)]['buffIconIndex'](-0x1,_0x2d8a43);if(_0x20f7f0>0x0){if(_0x47128e(0x332)!==_0x47128e(0x332)){_0x40328c=_0x110934['max'](_0x28bc97||0x1,0x1);while(_0x2b42a6--){_0x4bdd92=_0x458f1c||this['lineHeight'](),this[_0x47128e(0x3a1)][_0x47128e(0x399)]=0xa0;const _0xcad673=_0x513d6[_0x47128e(0x3ee)]();this[_0x47128e(0x3a1)]['fillRect'](_0x48bf4d+0x1,_0x55b296+0x1,_0x2fed0d-0x2,_0x5b87de-0x2,_0xcad673),this['contentsBack'][_0x47128e(0x399)]=0xff;}}else{_0x5cfb9e+=_0x47128e(0x2c5)[_0x47128e(0x46e)](_0x20f7f0),_0x29e338++;if(_0x29e338>=_0x11c372)return _0x5cfb9e;}}}}return _0x5cfb9e;},Window_ShopStatus[_0x311a7f(0x3bb)]['drawItemCustomEntries']=function(_0x491e00,_0x4e2843,_0x4dd555){const _0xd0a03d=_0x311a7f;if(this['_item'][_0xd0a03d(0x5b3)][_0xd0a03d(0x260)](/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)){const _0x589440=String(RegExp['$1'])[_0xd0a03d(0x51a)](/[\r\n]+/);for(const _0x2c9e16 of _0x589440){if(_0x2c9e16['match'](/(.*):[ ](.*)/i)){const _0x4df9df=String(RegExp['$1'])[_0xd0a03d(0x3df)](),_0x5db25e=String(RegExp['$2'])[_0xd0a03d(0x3df)]();this[_0xd0a03d(0x579)](_0x4df9df,_0x5db25e,_0x491e00,_0x4e2843,_0x4dd555),_0x4e2843+=this[_0xd0a03d(0x640)]();}}}return this['resetFontSettings'](),_0x4e2843;},Window_ShopStatus['prototype'][_0x311a7f(0x579)]=function(_0x3e6e95,_0x344411,_0x49b637,_0x2086df,_0x45146f){const _0x4da710=_0x311a7f;this['drawItemKeyData'](_0x3e6e95,_0x49b637,_0x2086df,_0x45146f,!![]),this[_0x4da710(0x2ff)](_0x344411,_0x49b637,_0x2086df,_0x45146f,![],'right'),this[_0x4da710(0x37e)](_0x49b637,_0x2086df,_0x45146f),this[_0x4da710(0x560)]();},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x354)]=function(){const _0x922be7=_0x311a7f;if(!this[_0x922be7(0x2d6)])return;const _0x10fa3a=this[_0x922be7(0x2d6)][_0x922be7(0x5b3)],_0x24aa0c=/<SHOP (?:PICTURE|IMAGE|PICTURE NAME|PICTURE FILENAME|IMAGE NAME|IMAGE FILENAME):[ ](.*)>/gi,_0x4315f1=_0x10fa3a[_0x922be7(0x260)](_0x24aa0c);if(_0x4315f1)for(const _0x27d624 of _0x4315f1){if(_0x922be7(0x536)!==_0x922be7(0x254)){_0x27d624['match'](_0x24aa0c);const _0x3828c8=String(RegExp['$1'])[_0x922be7(0x3df)]()||'';if(_0x3828c8==='')continue;const _0x7ac421=ImageManager[_0x922be7(0x42b)](_0x3828c8);_0x7ac421[_0x922be7(0x4cb)](this['drawCustomShopGraphicLoad'][_0x922be7(0x451)](this,_0x7ac421,this['_item']));}else{if(_0x4b20d0[_0x922be7(0x43a)](_0x47f50d))return!![];}}},Window_ShopStatus[_0x311a7f(0x3bb)][_0x311a7f(0x1dd)]=function(_0x5775ab,_0x2ddf02){const _0xe6d12b=_0x311a7f;if(this['_item']!==_0x2ddf02)return;if(!_0x5775ab)return;if(_0x5775ab[_0xe6d12b(0x1f0)]<=0x0||_0x5775ab[_0xe6d12b(0x3f6)]<=0x0)return;const _0xbe7989=_0x2ddf02[_0xe6d12b(0x5b3)];let _0x516b8e=_0xe6d12b(0x5c7);if(_0xbe7989[_0xe6d12b(0x260)](/<SHOP (?:PICTURE|IMAGE) LAYER:[ ]FOREGROUND>/i)){if(_0xe6d12b(0x274)===_0xe6d12b(0x642))return _0x3c3fcf['ItemsEquipsCore'][_0xe6d12b(0x5cc)][_0xe6d12b(0x648)]['ListWindowCols'];else _0x516b8e='foreground';}const _0x3d061a=_0x516b8e===_0xe6d12b(0x5c7)?this[_0xe6d12b(0x3a1)]:this['contents'];let _0x21fe8c=this[_0xe6d12b(0x4fc)],_0x46b771=this[_0xe6d12b(0x1e5)];_0xbe7989['match'](/<SHOP (?:PICTURE|IMAGE) MAX WIDTH:[ ](\d+)>/i)&&(_0x21fe8c=Number(RegExp['$1']));_0xbe7989[_0xe6d12b(0x260)](/<SHOP (?:PICTURE|IMAGE) MAX HEIGHT:[ ](\d+)>/i)&&(_0x46b771=Number(RegExp['$1']));if(_0xbe7989[_0xe6d12b(0x260)](/<SHOP (?:PICTURE|IMAGE) MAX DIMENSIONS:[ ](\d+),[ ]*(\d+)>/i)){if(_0xe6d12b(0x27a)!==_0xe6d12b(0x4fb))_0x21fe8c=Number(RegExp['$1']),_0x46b771=Number(RegExp['$2']);else{const _0x3aee5f=this[_0xe6d12b(0x362)]();this[_0xe6d12b(0x2ff)](_0x3aee5f,_0x44f457,_0x22c72c,_0x540ae9,!![]);const _0xaec8f1=this[_0xe6d12b(0x627)]();return this[_0xe6d12b(0x2ff)](_0xaec8f1,_0x305866,_0xdb0d87,_0x45e731,![],_0xe6d12b(0x5e1)),this['drawItemDarkRect'](_0x490a8d,_0x2c2088,_0x29df41),this[_0xe6d12b(0x560)](),!![];}}const _0xac277b=Math[_0xe6d12b(0x3cc)](0x1,_0x21fe8c/_0x5775ab[_0xe6d12b(0x1f0)],_0x46b771/_0x5775ab['height']);let _0x27b79b=0x0,_0x18b525=0x0,_0x766a83=Math[_0xe6d12b(0x58f)](_0x5775ab[_0xe6d12b(0x1f0)]*_0xac277b),_0x297b97=Math[_0xe6d12b(0x58f)](_0x5775ab['height']*_0xac277b),_0x13ee00=_0xe6d12b(0x61f);_0xbe7989[_0xe6d12b(0x260)](/<SHOP (?:PICTURE|IMAGE) (?:ALIGN|ALIGNMENT):[ ](LEFT|CENTER|RIGHT)>/i)&&(_0x13ee00=String(RegExp['$1'])[_0xe6d12b(0x3d6)]()[_0xe6d12b(0x3df)]());if(_0x13ee00===_0xe6d12b(0x6a5))_0x27b79b=0x0;else{if(_0x13ee00===_0xe6d12b(0x61f))_0x27b79b=Math['round']((this[_0xe6d12b(0x4fc)]-_0x766a83)/0x2);else{if(_0xe6d12b(0x27c)===_0xe6d12b(0x223)){if(this[_0xe6d12b(0x3db)][_0xe6d12b(0x450)][_0x4da604]!==0x0)this[_0xe6d12b(0x3db)][_0xe6d12b(0x5d5)]=!![];}else _0x27b79b=this[_0xe6d12b(0x4fc)]-_0x766a83;}}let _0x700fa2=_0xe6d12b(0x491);if(_0xbe7989[_0xe6d12b(0x260)](/<SHOP (?:PICTURE|IMAGE) POSITION:[ ](TOP|MIDDLE|BOTTOM)>/i)){if('AoWvw'!==_0xe6d12b(0x412))return _0x579a50['ItemsEquipsCore'][_0xe6d12b(0x5cc)]['ItemScene'][_0xe6d12b(0x266)];else _0x700fa2=String(RegExp['$1'])[_0xe6d12b(0x3d6)]()[_0xe6d12b(0x3df)]();}if(_0x700fa2===_0xe6d12b(0x3c8))_0x18b525=0x0;else _0x700fa2==='middle'?_0x18b525=Math[_0xe6d12b(0x3b7)]((this[_0xe6d12b(0x1e5)]-_0x297b97)/0x2):_0x18b525=this[_0xe6d12b(0x1e5)]-_0x297b97;_0xbe7989[_0xe6d12b(0x260)](/<SHOP (?:PICTURE|IMAGE) OFFSET X:[ ]([\+\-]\d+)>/i)&&('ZLgVW'===_0xe6d12b(0x4c0)?this[_0xe6d12b(0x304)][_0x12bfbf]=new _0x558a71():_0x27b79b+=Number(RegExp['$1']));_0xbe7989[_0xe6d12b(0x260)](/<SHOP (?:PICTURE|IMAGE) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(_0x18b525+=Number(RegExp['$1']));_0xbe7989[_0xe6d12b(0x260)](/<SHOP (?:PICTURE|IMAGE) OFFSET:[ ]([\+\-]\d+),[ ]*([\+\-]\d+)>/i)&&(_0xe6d12b(0x5de)!==_0xe6d12b(0x5eb)?(_0x27b79b+=Number(RegExp['$1']),_0x18b525+=Number(RegExp['$2'])):_0x3fbbb8=_0x417e02(_0x58bc21['$1']));let _0x13f745=0xff;if(_0xbe7989[_0xe6d12b(0x260)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)>/i))_0xe6d12b(0x447)!==_0xe6d12b(0x447)?_0x429b8e=0x0:_0x13f745=Number(RegExp['$1']);else{if(_0xbe7989[_0xe6d12b(0x260)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)([%％])>/i)){if(_0xe6d12b(0x33f)===_0xe6d12b(0x425)){if(_0x15b76c){const _0x3430f5=_0x49dc54+(this[_0xe6d12b(0x640)]()-_0x5ee286[_0xe6d12b(0x5fd)])/0x2,_0x50e956=_0x504de9['iconWidth']+0x4,_0x17366b=_0x470b8d['max'](0x0,_0x5b8a7d-_0x50e956);this[_0xe6d12b(0x636)](_0x4c8bb9[_0xe6d12b(0x3bf)](_0x425af0)),this[_0xe6d12b(0x2aa)](_0x57e2a7[_0xe6d12b(0x204)],_0x55001d,_0x3430f5),this[_0xe6d12b(0x638)](_0x1edffb[_0xe6d12b(0x5cf)],_0x3959a4+_0x50e956,_0x3e8e0b,_0x17366b),this[_0xe6d12b(0x2ec)]();}}else _0x13f745=Math['round'](Number(RegExp['$1'])*0.01*0xff)[_0xe6d12b(0x517)](0x0,0xff);}}_0x3d061a['paintOpacity']=_0x13f745,_0x3d061a[_0xe6d12b(0x59b)](_0x5775ab,0x0,0x0,_0x5775ab[_0xe6d12b(0x1f0)],_0x5775ab[_0xe6d12b(0x3f6)],_0x27b79b,_0x18b525,_0x766a83,_0x297b97),_0x3d061a[_0xe6d12b(0x399)]=0xff;};