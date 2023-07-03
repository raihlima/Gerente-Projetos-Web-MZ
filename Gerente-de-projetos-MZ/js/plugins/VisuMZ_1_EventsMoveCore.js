//=============================================================================
// VisuStella MZ - Events & Movement Core
// VisuMZ_1_EventsMoveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_EventsMoveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventsMoveCore = VisuMZ.EventsMoveCore || {};
VisuMZ.EventsMoveCore.version = 1.51;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.51] [EventsMoveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Events_and_Movement_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Events & Movement Core plugin adds a lot of new functionality in terms
 * of event flexibility and movement options to RPG Maker MZ. These range from
 * adding in old capabilities from previous iterations of RPG Maker to more
 * mainstream techniques found in other game engines. Movement options are also
 * expanded to support 8-directional movement as well as sprite sheets provided
 * that the VisuStella 8 format is used.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Event commands expanded upon to include old and new functions.
 * * Event templates for Copying Events, Morphing Events, and Spawning Events.
 * * 8-directional movement option available and sprite sheet support.
 * * Aesthetics for tilting the sprite when dashing and having shadows below.
 * * Pathfinding support for event movement through custom Move Route commands.
 * * Advanced switches and variable support to run code automatically.
 * * Turn regular Switches and Variables into Self Switches and Self Variables.
 * * Put labels and icons over events.
 * * Allow numerous ways to trigger events, through clicking, proximity, or by
 *   usage of Regions.
 * * Change the hitbox sizes of events to larger in any direction.
 * * Synchronize event movement options to move when player/other events move.
 * * The ability for the player to turn in place.
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
 * Features: Advanced Switches and Variables
 * ============================================================================
 *
 * Switches and variables can now run JavaScript code and return values
 * instantly. While at first glance, this may seem no different from using
 * the Control Variables event command's Script option, this can be used to
 * instantly set up Switch and/or Variable conditions for Parallel Common
 * Events, Event Page Conditions, Enemy Skill Conditions, and Troop Page
 * Conditions instantly without needing to make an event command to do so.
 *
 * ---
 *
 * <JS> code </JS>
 * - Used for: Switch and Variable names
 * - Replace 'code' with JavaScript code on what value to return.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: Self Switches and Variables
 * ============================================================================
 *
 * RPG Maker MZ by default has 4 Self Switches: A, B, C, D. For some types of
 * games, this isn't enough. This plugin gives you the ability convert regular
 * Switches into Self Switches so you could have more.
 *
 * Self Variables also do not exist in RPG Maker MZ by default. Just like with
 * Switches, you can turn regular Variables into Self Variables.
 *
 * ---
 *
 * <Self>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Self Switch/Variable.
 *
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Self> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that event.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Self Switch or Self Variable's
 * value, you can use the following script calls.
 * 
 *   ---
 * 
 *   Get Self Switch Values:
 * 
 *   getSelfSwitchValue(mapID, eventID, switchID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - This will return the true/false value of the Self Switch.
 *   - Example: getSelfSwitchValue(12, 34, 56)
 *   - Example: getSelfSwitchValue(12, 34, 'B')
 * 
 *   ---
 * 
 *   Get Self Variable Values:
 * 
 *   getSelfVariableValue(mapID, eventID, variableID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - This will return whatever stored value is found in the Self Variable.
 *   - Example: getSelfVariableValue(12, 34, 56)
 * 
 *   ---
 * 
 *   Set Self Switch Values:
 * 
 *   setSelfSwitchValue(mapID, eventID, switchID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - This will change the Self Switch's value to true/false.
 *     - Example: setSelfSwitchValue(12, 34, 56, false)
 *     - Example: setSelfSwitchValue(12, 34, 'B', true)
 * 
 *   ---
 * 
 *   Set Self Variable Values:
 * 
 *   setSelfVariableValue(mapID, eventID, variableID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - Replace 'value' with the value you want to set the Self Variable to.
 *   - Example: setSelfVariableValue(12, 34, 56, 88888)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Map Switches and Variables
 * ============================================================================
 * 
 * Similar to Self Switches and Self Variables, Map Switches and Map Variables
 * are switches and variables that retain data based on the map the player is
 * currently located in. In other words, they're self switches and variables
 * but for maps instead!
 * 
 * These features do not exist in RPG Maker MZ by default. Just like with the
 * Self Switches and Self Variables, you can turn regular Switches or Variables
 * into Map Switches and Map Variables using the following name tag:
 * 
 * ---
 * 
 * <Map>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Map Switch/Variable.
 * 
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Map> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that map.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Map Switch or Map Variable's
 * value, you can use the following script calls:
 * 
 *   ---
 * 
 *   Get Map Switch Values:
 * 
 *   getMapSwitchValue(mapID, switchID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Example: getMapSwitchValue(4, 20)
 * 
 *   ---
 * 
 *   Get Variable Switch Values:
 * 
 *   getMapVariableValue(mapID, variableID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Example: getMapVariableValue(6, 9)
 * 
 *   ---
 * 
 *   Set Map Switch Values:
 * 
 *   setMapSwitchValue(mapID, switchID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - Example: setMapSwitchValue(4, 20, true)
 *   - Example: setMapSwitchValue(6, 9, false)
 * 
 *   ---
 * 
 *   Set Map Variable Values:
 * 
 *   setMapVariableValue(mapID, variableID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Replace 'value' with the value you want to set the Map Variable to.
 *   - Example: setMapVariableValue(6, 9, 420)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: VisuStella-Style 8-Directional Sprite Sheets
 * ============================================================================
 *
 * This plugin provides support for the VisuStella-Style 8-Directional Sprite
 * Sheets, also know as VS8. VS8 sprite sheets offer support for walking
 * frames, dashing frames, carrying frames, and emotes.
 *
 * ---
 *
 * To designate a sprite sheet as VS8, simply add [VS8] to the filename.
 * Something like Actor1.png would become Actor1_[VS8].png.
 *
 * ---
 *
 * VS8 sprites are formatted as such. Each block below is a set of 3 frames.
 *
 * Walk Down    Walk DL     Dash Down   Dash DL
 * Walk Left    Walk DR     Dash Left   Dash DR
 * Walk Right   Walk UL     Dash Right  Dash UL
 * Walk Up      Walk UR     Dash Up     Dash UR
 *
 * Carry Down   Carry DL    Ladder      Emotes 3
 * Carry Left   Carry DR    Rope        Emotes 4
 * Carry Right  Carry UL    Emotes 1    Emotes 5
 * Carry Up     Carry UR    Emotes 2    Emotes 6
 *
 * ---
 *
 * Here are how each of the emote sets are grouped from left to right.
 *
 * Emotes 1: Item, Hmph, Victory
 * Emotes 2: Hurt, Kneel, Collapse
 * Emotes 3: !, ?, Music Note
 * Emotes 4: Heart, Anger, Sweat
 * Emotes 5: Cobweb, ..., Light Bulb
 * Emotes 6: Sleep0, Sleep1, Sleep2
 *
 * ---
 *
 * ============================================================================
 * Features: Weighted Random Movement
 * ============================================================================
 * 
 * When creating events to place on the map, you can determine what type of
 * autonomous movement the event will have. When selecting "Random", the event
 * will move randomly across the map.
 * 
 * However, with the way "Random" movement works with the RPG Maker MZ default
 * code, the event is more likely to hit a wall and then hug the said wall as
 * it maps laps around the map's outer borders making it feel very unnatural
 * for any player who's been on the map long enough.
 * 
 * This is where "Weighted Random Movement" comes in. It changes up the random
 * movement behavior to function where the farther the event is, the more
 * likely the event is to step back towards its "home" position (aka where it
 * spawned upon loading the map). This is so that a housewife NPC doesn't
 * suddenly wander off into the middle of an army's training grounds on the
 * same town map.
 * 
 * The event will stay closer to its home value depending on how high the
 * weight's value is. There are a number of ways to adjust the weighted value.
 * 
 * ---
 * 
 * Plugin Parameters > Movement > Event Movement > Random Move Weight
 * 
 * This Plugin Parameter setting allows you to set the default weight for all
 * events with "Random" autonomous movement. It is set at a default value of
 * 0.10 to give the event an understandable degree of freedom.
 * 
 * Lower numbers give events more freedom to move. Larger numbers will make the
 * events stick closer to home.
 * 
 * Change this value to 0 to disable it.
 * 
 * ---
 * 
 * You can customize this individually per event by using Notetags and/or
 * Comment Tags for the events.
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * ============================================================================
 * Notetags and Comment Tags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * Some of these are comment tags. Comment tags are used for events to mark and
 * affect individual event pages rather than the whole event.
 *
 * === Map Notetags ===
 *
 * The following notetags are used for maps only. While some of these options
 * are also available in the Plugin Parameters, some of these notetags extend
 * usage to specific maps marked by these notetags as well.
 *
 * ---
 *
 * <Diagonal Movement: On>
 * <Diagonal Movement: Off>
 *
 * - Used for: Map Notetags
 * - Turns on/off diagonal movement for those maps.
 * - If notetag isn't present, use Plugin Parameter setting.
 *
 * ---
 *
 * <type Allow Region: x>
 * <type Allow Region: x, x, x>
 *
 * <type Forbid Region: x>
 * <type Forbid Region: x, x, x>
 *
 * <type Dock Region: x>
 * <type Dock Region: x, x, x>
 *
 * - Used for: Map Notetags
 * - Replace 'type' with 'All', 'Walk', 'Player', 'Event', 'Vehicle', 'Boat',
 *   'Ship', or 'Airship'.
 * - 'Allow' notetag variants allow that type to pass through them no matter
 *   what other passability settings are in place.
 * - 'Forbid' notetag variants forbid that type from passing through at all.
 * - 'Dock' notetag variants allow vehicles to dock there. Boats and ships must
 *   face the region direction while airships must land directly on top.
 *
 * ---
 *
 * <Save Event Locations>
 *
 * - Used for: Maps Notetags
 * - Saves the locations of all events on the map so that when you return to
 *   that map at a later point, the events will be in the position they were
 *   last in.
 *
 * ---
 * 
 * <Hide Player>
 * <Show Player>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player sprite. This is so you don't need to
 *   manually turn the setting on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - If the player sprite is hidden, so are the player's followers.
 * - If the player sprite is visible, the player's followers will still depend
 *   on their settings.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * <Hide Followers>
 * <Show Followers>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player's followers. This is so you don't
 *   need to manually turn them on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * === Page Comment Tags ===
 * 
 * The following comment tags are to be put inside of the pages of events,
 * troops, and common events for them to work!
 * 
 * ---
 * 
 * <Page Conditions>
 *   conditions
 *   conditions
 *   conditions
 * </Page Conditions>
 * 
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - This allows you to create custom page conditions that utilize the
 *   Conditional Branch event command to see if the additional page conditions
 *   are met.
 * 
 * ---
 * 
 * <Conditions Met>
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - If used between the <Page Conditions> and </Page Conditions> comment tag,
 *   upon reaching this part of event command list, the custom page conditions
 *   will be considered met.
 * 
 * ---
 * 
 * Example:
 * 
 * ◆Comment：<Page Conditions>
 * ◆If：Reid has equipped Potion Sword
 *   ◆Comment：If Reid has equipped the Potion Sword
 * ：       ：<Condition Met>
 *   ◆
 * ：End
 * ◆Comment：</Page Conditions>
 * 
 * If Reid has the "Potion Sword" weapon equipped, then the additional custom
 * page conditions are met and the event page will be present/active.
 * 
 * If this is a troop condition, the troop page event will activate.
 * 
 * If this is a common event, there will be a parallel common event active.
 * 
 * ---
 *
 * === Event and Event Page Notetags ===
 *
 * The following notetags have comment tag variants (with a few exceptions).
 * If a notetag is used for an event, it will affect the event constantly.
 * If a comment tag is used, it will only affect the page the comment tag is
 * on and only that page.
 *
 * ---
 *
 * <Activation Region: x>
 * <Activation Regions: x,x,x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   standing within a tile marked by a designated region.
 * - Replace 'x' with the regions you wish to remotely activate this event in.
 *   - Action Button: Player must press OK while being in the region.
 *   - Player/Event Touch: Player must step onto the region.
 *   - Autorun/Parallel: Player be in the region.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Activation Square: x>
 * <Activation Radius: x>
 * <Activation Row: x>
 * <Activation Column: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   within range of its activation type.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Radius: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Always Update Movement>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Events normally have to be within screen range for them to update their
 *   self movement. If this tag is present, the event is always updating.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Click Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to activate upon being clicked on with the mouse.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Copy Event: Map x, Event y>
 * <Copy Event: x, y>
 *
 * <Copy Event: template>
 *
 * - Used for: Event Notetags ONLY
 * - Makes this event copy all of the event settings from a different event
 *   that can be found on a different map (as long as that map is registered
 *   inside of Plugin Parameters => Event Template Settings => Preloaded Maps).
 * - Replace 'x' with a number representing the copied event's Map ID.
 *   - If '0' is used for the Map ID, reference the current map.
 * - Replace 'y' with a number representing the copied event's Event ID.
 * - For the 'template' variant, replace 'template' with the name of the
 *   template made in Plugin Parameters => Event Template Settings =>
 *   Event Template List.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 *
 * ---
 * 
 * <Custom Z: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number value to determine the event sprite's Z value
 *   relative to the tilemap.
 * - For reference from rmmz_core.js:
 *   - 0 : Lower tiles
 *   - 1 : Lower characters
 *   - 3 : Normal characters
 *   - 4 : Upper tiles
 *   - 5 : Upper characters
 *   - 6 : Airship shadow
 *   - 7 : Balloon
 *   - 8 : Animation
 *   - 9 : Destination
 * - You can use numbers below 0 and above 9.
 *   - Values under 0 go below the tilemap.
 *   - Values above 9 go above everything else on the tilemap.
 *   - These values do NOT go below or above other screen objects that are
 *     NOT attached to the tilemap layer such as parallaxes or weather or
 *     windows because that's simply not how z-axis work with sprite layers.
 * 
 * ---
 * 
 * <Exit Reset Self Data>
 * 
 * - Used for: Event Notetags ONLY
 * - When the player leaves the current map, all Self Switches and Self
 *   Variables related to this event will be reset.
 * 
 * ---
 *
 * <Hitbox Left: x>
 * <Hitbox Right: x>
 * <Hitbox Up: x>
 * <Hitbox Down: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number to extend the hitbox of the event by that many
 *   tiles towards the listed direction.
 * - Use multiples of this notetag to extend them to different directions.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with the Icon ID you wish to put above this event.
 * - This will not override any Icons designated to the ID through a
 *   Plugin Command.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon Buffer X: +x>
 * <Icon Buffer X: -x>
 *
 * <Icon Buffer Y: +x>
 * <Icon Buffer Y: -x>
 *
 * <Icon Buffer: +x, +y>
 * <Icon Buffer: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the icon on the envent by buffers.
 * - Replace 'x' and 'y' with the values to adjust the position buffers by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label: text>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - Text codes can be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label>
 * text
 * text
 * </Label>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - This can display multiple lines.
 * - Text codes can be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range requirement for the player to be in order for the event's
 *   label to appear.
 * - Replace 'x' with a number value depicting the range in tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Offset X: +x>
 * <Label Offset X: -x>
 *
 * <Label Offset Y: +x>
 * <Label Offset Y: -x>
 *
 * <Label Offset: +x, +y>
 * <Label Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the label on the envent by offsets.
 * - Replace 'x' and 'y' with the values to adjust the position offsets by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Mirror Sprite>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event sprite's visual appearance is mirrored.
 * 
 * ---
 * 
 * <Move Only Region: x>
 * <Move Only Regions: x,x,x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the move range of this event to only the region(s) marked by the
 *   notetag(s) or comment tag(s).
 * - This will bypass terrain passability.
 * - This will not bypass event collision.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Move Synch Target: Player>
 *
 * <Move Synch Target: Event x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Synchronizes the movement of this event with a target (either the player
 *   or another event). This event will only move whenever the synchronized
 *   target moves.
 * - For 'Event x' variant, replace 'x' with the ID of the event to synch to.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Type: Random>
 * <Move Synch Type: Approach>
 * <Move Synch Type: Away>
 * <Move Synch Type: Custom>
 *
 * <Move Synch Type: Mimic>
 * <Move Synch Type: Reverse Mimic>
 *
 * <Move Synch Type: Mirror Horizontal>
 * <Move Synch Type: Mirror Vertical>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Choose the type of movement the event will have if it is synchronized to
 *   a target.
 *   - Random: Move to a random position.
 *   - Approach: Approaches target.
 *   - Away: Flees from target.
 *   - Custom: Follows a custom move route.
 *   - Mimic: Imitates the target's movement style.
 *   - Reverse Mimic: Does the opposite of the target's movement.
 *   - Mirror Horizontal: Moves as if a mirror is placed horizontally.
 *   - Mirror Vertical: Moves as if a mirror is placed vertically.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is present, the event will wait a bit after each move before
 *   moving again.
 * - Replace 'x' with the number of movement instances in between.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Move Synch Distance Opacity: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the opacity of the event based on the distance between it and its
 *   move synched target. Closer means more opaque. Further away means more
 *   transparent.
 * - Replace 'x' with a number representing the opacity change per pixel
 *   distance away. 'x' can use decimal values like 1.05 and 1.5.
 * 
 * ---
 * 
 * <Picture Filename: filename>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Applies a picture graphic from the /img/pictures/ folder of your project.
 * - This graphic will be on top of the character sprite but below the event
 *   icon sprite.
 *   - The picture priority will be the same as the event's priority.
 *   - If it is "below characters", the player can walk on top of it.
 *   - If it is "above characters", the player will behind it.
 *   - If it is "same as characters", the priority will be based on the
 *     current relative Y position. This also means, if the picture is big
 *     enough, it can clip into the top of tree tiles and such.
 * - Replace 'filename' with a filename from the game project's /img/pictures/
 *   folder. This is case sensitive. Do NOT include the file extension.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Max Size: x>
 * <Picture Scale: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - If the "Max Size" or "Scale" supplementary notetags are used, the picture
 *   graphic will be scaled proportionally to fit either the exact pixel size
 *   for "Max Size" or the "Scale" ratio.
 *   - Both the "Max Size" and "Scale" notetags require the "Filename" notetag.
 * - Replace 'x' with a number value representing the exact pixel size for the
 *   "Max Size" notetag.
 * - Replace 'y' with a number value representing the scale on which to shrink
 *   or enlarge the picture. 100% is normal size. 50% is half size. 200% is
 *   double size.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Picture Offset X: +x>
 * <Picture Offset X: -x>
 *
 * <Picture Offset Y: +x>
 * <Picture Offset Y: -x>
 *
 * <Picture Offset: +x, +y>
 * <Picture Offset: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Offsets the X and Y position of the event picture relative to the event
 *   sprite's own position.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Wait Frames: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Requires VisuMZ_4_AnimatedPictures!
 * - "Wait Frames" is used with VisuMZ's Animated Pictures plugin. This
 *   determines the delay inbetween frame changes.
 * - Replace 'x' with a number representing the amount of frames to wait
 *   inbetween frame changes.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Playtest>
 * 
 * - Used for: Event Notetags.
 * - This does NOT work when it's in the Event Page Comment Tags.
 * - If this notetag is found in the event's notebox (NOT comments), then the
 *   event will only appear during a playtest session. It will not appear in a
 *   deployed game where the playtest flag is not on.
 * 
 * ---
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * ---
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * <Save Event Location>
 *
 * - Used for: Event Notetags ONLY
 * - Saves the locations of the event on the map so that when you return to
 *   that map at a later point, the event will be in the position it was
 *   last in.
 *
 * ---
 *
 * <Hide Shadow>
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Hides the shadow for the event.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Scale: x%>
 * 
 * <Scale X: x%>
 * <Scale Y: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the scale of the sprite to the designated size.
 * - For <Scale: x%> variant: replace 'x' with a number representing the
 *   scaling overall percentage to be used.
 * - For <Scale X: x%> variant, replace 'x' with a number representing the x
 *   factor for the horizontal scaling percentage to be used.
 * - For <Scale Y: y%> variant, replace 'y' with a number representing the y
 *   factor for the vertical scaling percentage to be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Shadow Filename: filename>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replaces the shadow graphic used with 'filename' found in the
 *   img/system/ project folder.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sprite Offset X: +x>
 * <Sprite Offset X: -x>
 *
 * <Sprite Offset Y: +x>
 * <Sprite Offset Y: -x>
 *
 * <Sprite Offset: +x, +y>
 * <Sprite Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes how much the event's sprite is visibly offset by.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Step Pattern: Left to Right>
 * <Step Pattern: Right to Left>
 *
 * <Step Pattern: Spin Clockwise>
 * <Step Pattern: Spin CW>
 *
 * <Step Pattern: Spin CounterClockwise>
 * <Step Pattern: Spin CCW>
 * <Step Pattern: Spin AntiClockwise>
 * <Step Pattern: Spin ACW>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the way the event animates if a tag is present.
 *   - Left to Right: Makes the event sprite's step behavior go from frame 0 to
 *     1 to 2, then back to 0 instead of looping backward.
 *   - Right to Left: Makes the event sprite's step behavior go from frame 2 to
 *     1 to 0, then back to 2 instead of looping forward.
 *   - Spin Clockwise: Makes the event sprite's step behavior spin CW.
 *   - Spin CounterClockwise: Makes the event sprite's step behavior spin CCW.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
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
 * === Auto Movement Plugin Commands ===
 * 
 * ---
 *
 * Auto Movement: Events
 * - Allow/stop events from auto movement.
 *
 *   Value:
 *   - Allow events to move automatically?
 *
 * ---
 * 
 * === Call Event Plugin Commands ===
 * 
 * ---
 *
 * Call Event: Remote Activation
 * - Runs the page of a different event remotely.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Page ID:
 *   - The page of the remote event to run.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Dash Plugin Commands ===
 * 
 * ---
 *
 * Dash Enable: Toggle
 * - Enable/Disable Dashing on maps.
 *
 *   Value:
 *   - What do you wish to change dashing to?
 *
 * ---
 * 
 * === Event Icon Plugin Commands ===
 * 
 * ---
 *
 * Event Icon: Change
 * - Change the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Delete
 * - Delete the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Event Label Plugin Commands ===
 * 
 * ---
 *
 * Event Label: Refresh
 * - Refresh all Event Labels on screen.
 * - This is used to refresh page conditions for map changes that don't
 *   force a refresh.
 *
 * ---
 *
 * Event Label: Visible
 * - Change the visibility of Event Labels.
 *
 *   Visibility:
 *   - What do you wish to change visibility to?
 *
 * ---
 * 
 * === Event Location Plugin Commands ===
 * 
 * ---
 *
 * Event Location: Save
 * - Memorize an event's map location so it reappears there the next time the
 *   map is loaded.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Delete
 * - Deletes an event's saved map location.
 * - The event will reappear at its default location.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *   
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Create
 * - Creates a custom spawn location for a specific map's event so it appears
 *   there the next time the map is loaded.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   X Coordinate:
 *   - The X coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - The Y coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Direction:
 *   - The direction the event will be facing.
 *
 *   Optional:
 *
 *     Page ID:
 *     - The page of the event to set the move route to.
 *     - You may use JavaScript code.
 *
 *     Move Route Index:
 *     - The point in the move route for this event to be at if the page ID
 *       matches the rest of the page conditions.
 *
 * ---
 * 
 * === Event Timer Plugin Commands ===
 * 
 * ---
 *
 * Event Timer: Change Speed
 * - Changes the timer frame decrease (or increase) speed.
 *
 *   Speed:
 *   - How many 1/60ths of a second does each frame increase or decrease by?
 *   - Negative decreases.
 *   - Positive increases.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Expire Event Assign
 * - Sets a Common Event to run upon expiration.
 * - Bypasses the default code if one is set.
 *
 *   Common Event ID:
 *   - Select the Common Event to run upon the timer's expiration.
 *
 * ---
 *
 * Event Timer: Expire Event Clear
 * - Clears any set to expire Common Event and instead, run the default
 *   Game_Timer expiration code.
 *
 * ---
 *
 * Event Timer: Frames Gain
 * - Chooses how many frames, seconds, minutes, or hours are gained or lost for
 *   the event timer.
 *
 *   Frames:
 *   - How many 1/60ths of a second are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - How many seconds are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - How many minutes are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - How many hours are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Frames Set
 * - Chooses how many frames, seconds, minutes, or hours are set for the event
 *   timer.
 *
 *   Frames:
 *   - Set frame count to this value.
 *   - Each frame is 1/60th of a second.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - Set seconds to this value.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - Set minutes to this value.
 *   - Each minute is 60 seconds.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - Set hours to this value.
 *   - Each hour is 60 minutes.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Pause
 * - Pauses the current event timer, but does not stop it.
 *
 * ---
 *
 * Event Timer: Resume
 * - Resumes the current event timer from the paused state.
 *
 * ---
 * 
 * === Follower Control Plugin Commands ===
 * 
 * ---
 *
 * Follower: Set Global Chase
 * - Disables all followers from chasing the player or reenables it.
 *
 *   Chase:
 *   - Sets all followers to chase the player or not.
 *
 * ---
 *
 * Follower: Set Target Chase
 * - Disables target follower from chasing the player or reenables it.
 *
 *   Follower ID:
 *   - Select which follower ID to disable/reenable chasing for.
 *
 *   Chase:
 *   - Sets target follower to chase its target or not.
 *
 * ---
 *
 * Follower: Set Control
 * - Sets the event commands to target a follower when "Player" is selected as
 *   the target.
 *
 *   Follower ID:
 *   - Select which follower ID to control.
 *   - 0 is the player.
 *
 * ---
 *
 * Follower: Reset
 * - Resets all follower controls. Event Commands that target the "Player"
 *   return to normal and followers chase again.
 *
 * ---
 * 
 * === Global Switch Plugin Commands ===
 * 
 * ---
 * 
 * Global Switch: Get Self Switch A B C D
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Letter:
 *   - Letter of the target event's Self Switch to obtain data from.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * Global Switch: Get Self Switch ID
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Switch ID:
 *   - The ID of the source switch.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * === Global Variable Plugin Commands ===
 * 
 * ---
 * 
 * Global Variable: Get Self Variable ID
 * - Gets the current stored value from a Self Variable and stores it onto a
 *   Global Variable.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Variable ID:
 *   - The ID of the source variable.
 * 
 *   -
 * 
 *   Target Variable ID:
 *   - The ID of the target variable.
 * 
 * ---
 * 
 * === Morph Event Plugin Commands ===
 * 
 * ---
 *
 * Morph Event: Change
 * - Runs the page of a different event remotely.
 *
 *   Step 1:
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Template Name:
 *     - Name of the target event template to morph into.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *     Preserve Morph:
 *     - Is the morph effect preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Morph Event: Remove
 * - Remove the morph status of an event.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Remove Preservation:
 *   - Also remove the preservation effect?
 *
 * ---
 * 
 * === Player Icon Plugin Commands ===
 * 
 * ---
 *
 * Player Icon: Change
 * - Change the icon that appears on on the player.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Player Icon: Delete
 * - Delete the icon that appears on the player.
 *
 * ---
 * 
 * === Player Movement Plugin Commands ===
 * 
 * ---
 * 
 * Player Movement: Control
 * - Enable or disable player control over the player character's movement.
 * 
 *   Enable?:
 *   - Let the player control where the player character moves?
 * 
 * ---
 * 
 * Player Movement: Diagonal
 * - Override settings to for player diagonal movement.
 * 
 *   Setting:
 *   - How do you want to change diagonal movement?
 *   - Default: Whatever the Map Uses
 *   - Forcefully Disable Diagonal Movement
 *   - Forcefully Enable Diagonal Movement
 * 
 * ---
 * 
 * === Self Data Plugin Commands ===
 * 
 * ---
 * 
 * Self Data: Reset All
 * - Reset the Self Switch and Self Variable data of all events within the
 *   specified map.
 * 
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Self Switch Plugin Commands ===
 * 
 * ---
 *
 * Self Switch: A B C D
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Letter:
 *   - Letter of the target event's Self Switch to change.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Switch: Switch ID
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Switch ID:
 *   - The ID of the target switch.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Self Variable Plugin Commands ===
 * 
 * ---
 *
 * Self Variable: Variable ID
 * - Change the Self Variable of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Variable ID:
 *   - The ID of the target variable.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Spawn Event Plugin Commands ===
 * 
 * ---
 *
 * Spawn Event: Spawn At X, Y
 * - Spawns desired event at X, Y location on the current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     X Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Y Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Region
 * - Spawns desired event at a random region-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Region ID(s):
 *     - Pick region(s) to spawn this event at.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Terrain Tag
 * - Spawns desired event at a random terrain tag-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Terrain Tag(s):
 *     - Pick terrain tag(s) to spawn this event at.
 *     - Insert numbers between 0 and 7.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Despawn Event ID
 * - Despawns the selected Event ID on the current map.
 *
 *   Event ID
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn At X, Y
 * - Despawns any spawned event(s) at X, Y location on the current map.
 *
 *   X Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn Region(s)
 * - Despawns the selected Region(s) on the current map.
 *
 *   Region ID(s):
 *   - Pick region(s) and despawn everything inside it.
 *
 * ---
 *
 * Spawn Event: Despawn Terrain Tag(s)
 * - Despawns the selected Terrain Tags(s) on the current map.
 *
 *   Terrain Tag(s):
 *   - Pick terrain tag(s) and despawn everything inside it.
 *   - Insert numbers between 0 and 7.
 *
 * ---
 *
 * Spawn Event: Despawn Everything
 * - Despawns all spawned events on the current map.
 *
 * ---
 *
 * ============================================================================
 * Move Route Custom Commands
 * ============================================================================
 *
 * Some custom commands have been added to the "Set Movement Route" event
 * command. These can be accessed by pressing the "Script..." command and
 * typing in the following, which don't need to be in code form.
 *
 * Keep in mind that since these are custom additions and RPG Maker MZ does not
 * allow plugins to modify the editor, the "Preview" button will not factor in
 * the effects of these commands.
 * 
 * If you wish to use a value from a variable, insert $gameVariables.value(x)
 * or \V[x] in place of the x in any of the below.
 * 
 * If you wish to use a value from a self variable, insert \SelfVar[x] in place
 * of the x in any of the below. This will only draw from the current event. If
 * you wish to draw data from outside event self variables, we recommend you
 * use the \V[x] variant after using the Plugin Commands to draw data from them
 * for the best accuracy.
 *
 * ---
 * 
 * Animation: x
 * - Replace 'x' with the ID of the animation to play on moving unit.
 *
 * ---
 * 
 * Balloon: name
 * - Replace 'name' with any of the following to play a balloon on that the
 *   target moving unit.
 * - '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep', 'User-Defined 1', 'User-Defined 2',
 *   'User-Defined 3', 'User-Defined 4', 'User-Defined 5'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: !
 *   - Balloon: Sleep
 *   - Balloon: Heart
 *
 * ---
 * 
 * Fade In: x
 * Fade Out: x
 * - Fades in/out the sprite's opacity.
 * - Fade In will continuously raise the opacity level until it reaches 255.
 * - Fade Out will continuously lower the opacity level until it reaches 0.
 * - Replace 'x' with the speed to fade in/out the sprite.
 * 
 * ---
 * 
 * Force Carry: On
 * Force Carry: Off
 * - For usage with the VS8 sprite sheet.
 * - Use ON to turn force carrying on.
 * - Use OFF to turn force carrying off.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Carry frames.
 * 
 * ---
 * 
 * Force Dash: On
 * Force Dash: Off
 * - Use ON to turn force dashing on.
 * - Use OFF to turn force dashing off.
 * - Forces dashing will prompt the player or event to be in the dashing state.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Dashing frames.
 * 
 * ---
 * 
 * Hug: Left
 * Hug: Right
 * - Causes the moving unit to hug the left/right side of the wall.
 *
 * ---
 * 
 * Index: x
 * - Replace 'x' with a number depicting the character index to change the
 *   moving unit's sprite to.
 *
 * ---
 * 
 * Index: +x
 * Index: -x
 * - Replace 'x' with the value to change the character index of the moving
 *   unit's sprite by.
 *
 * ---
 * 
 * Jump Forward: x
 * - Replace 'x' with the number of tiles for the unit to jump forward by.
 *
 * ---
 * 
 * Jump To: x, y
 * - Replace 'x' and 'y' with the coordinates for the unit to jump to.
 *
 * ---
 * 
 * Jump to Event: x
 * - Replace 'x' with the ID of the event for the unit to jump to.
 *
 * ---
 * 
 * Jump to Player
 * - Causes the moving unit to jump to the player.
 *
 * ---
 * 
 * Jump To Home
 * - Causes the event to jump to its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Move Lower Left Until Stop
 * Move Down Until Stop
 * Move Lower Right Until Stop
 * Move Left Until Stop
 * Move Right Until Stop
 * Move Upper Left Until Stop
 * Move Up Until Stop
 * Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events will stop moving before they make contact with the player.
 *
 * ---
 * 
 * Crash Move Lower Left Until Stop
 * Crash Move Down Until Stop
 * Crash Move Lower Right Until Stop
 * Crash Move Left Until Stop
 * Crash Move Right Until Stop
 * Crash Move Upper Left Until Stop
 * Crash Move Up Until Stop
 * Crash Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Player
 * - Moves the unit to the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Crash Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 * 
 * ---
 * 
 * Move Lower Left: x
 * Move Down: x
 * Move Lower Right: x
 * Move Left: x
 * Move Right: x
 * Move Upper Left: x
 * Move Up: x
 * Move Upper Right: x
 * - Replace 'x' with the number of times to move the unit by in the designated
 *   direction on the map.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Opacity: x%
 * - Replace 'x' with the percentage to change the unit's sprite opacity to.
 *
 * ---
 * 
 * Opacity: +x
 * Opacity: -x
 * - Replace 'x' with the increment to change the unit's sprite opacity by.
 *
 * ---
 *
 * Pattern Lock: x
 * - Replace 'x' with the step pattern to lock the unit's sprite to.
 *
 * ---
 *
 * Pattern Unlock
 * - Removes pattern lock effect.
 *
 * ---
 * 
 * Pose: name
 * - If using a VS8 sprite, this will cause the unit to strike a pose.
 * - Replace 'name' with any the following:
 * - 'Item', 'Hmph', 'Victory', 'Hurt', 'Kneel', 'Collapse',
 *   '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: Item
 *   - Balloon: Victory
 *   - Balloon: ?
 *
 * ---
 * 
 * Step Toward: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step towards.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Player
 * - Causes event to take one step towards the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Home
 * - Causes the event to take one step towards its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Step Away From: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step away from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Player
 * - Causes event to take one step away from the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Home
 * - Causes the event to take one step away from its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Turn To: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Event: x
 * - Replace 'x' with the ID of the event to turn the unit towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Player
 * - Causes the unit to turn towards the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Home
 * - Causes the event to turn towards its home position.
 * - This refers to the original position's X/Y on the map.
 * - The event will turn and face the tile that is its original X/Y location.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Away From: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Event: x
 * - Replace 'x' with the ID of the event to turn the unit away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Player
 * - Causes the unit to turn away from the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Home
 * - Causes the event to turn away from its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Lower Left
 * Turn Lower Right
 * Turn Upper Left
 * Turn Upper Right
 * - Causes the unit to turn to one of the diagonal directions.
 *
 * ---
 * 
 * Self Switch x: On
 * Self Switch x: Off
 * Self Switch x: Toggle
 * - Replace 'x' with 'A', 'B', 'C', 'D', or a <Self> Switch ID to adjust the
 *   unit's Self Switch.
 *
 * ---
 * 
 * Self Variable x: y
 * - Replace 'x' with a <Self> Variable ID to adjust the unit's Self Variable.
 * - Replace 'y' with a number value to set the Self Variable to.
 *
 * ---
 * 
 * Teleport To: x, y
 * - Replace 'x' and 'y' with the coordinates to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Event: x
 * - Replace 'x' with the ID of the event to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Player
 * - Instantly moves the unit to the player's location.
 *
 * ---
 * 
 * Teleport to Home
 * - Instantly teleports an event to its home position on the map.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * If none of the commands are detected above, then a script call will be ran.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Label Settings
 * ============================================================================
 *
 * Event Labels are small windows created to display text over an event's head.
 * They're set up using the <Label> notetags and/or comment tags. Event Labels
 * are a great way to instantly relay information about the event's role to
 * the player.
 *
 * ---
 *
 * Event Labels
 * 
 *   Sprite Based?:
 *   - Use sprite-based labels instead of legacy-window version.
 *   - Legacy-window version will not be supported in future.
 *   - Sprite-based labels are more memory efficient and work better
 *     compatibility-wise.
 * 
 *   Mobile-Enabled?:
 *   - Enable event labels for mobile devices?
 * 
 *   Font Size:
 *   - The font size used for the Event Labels.
 * 
 *   Icon Size:
 *   - The size of the icons used in the Event Labels.
 * 
 *   Line Height:
 *   - The line height used for the Event Labels.
 * 
 *   Offset X:
 *   - Globally offset all labels horizontally by this amount.
 * 
 *   Offset Y:
 *   - Globally offset all labels vertically by this amount.
 * 
 *   Fade Speed:
 *   - Fade speed for labels.
 * 
 *   Visible Range:
 *   - Range the player has to be within the event to make its label visible.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Icon Settings
 * ============================================================================
 *
 * Icons can be displayed over an event's head through the <Icon> notetags
 * and/or comment tags. These can be used for a variety of things such as
 * making them look like they're carrying an item or to indicate they have a
 * specific role.
 *
 * ---
 *
 * Event Icon
 * 
 *   Buffer X:
 *   - Default X position buffer for event icons.
 * 
 *   Buffer Y:
 *   - Default Y position buffer for event icons.
 * 
 *   Blend Mode:
 *   - Default blend mode for even icons.
 *     - 0 - Normal
 *     - 1 - Additive
 *     - 2 - Multiply
 *     - 3 - Screen
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Template Settings
 * ============================================================================
 *
 * Event Templates allow you to store specific maps and/or event data to bring
 * out on need while having a premade set base. They're similar to prefabs but
 * aren't things that can be altered individually as one setting for an event
 * template will serve as a blueprint for all of them that use them.
 *
 * Event Templates are used for the <Copy Event> notetags, the Morph Event and
 * Spawn Event Plugin Commands.
 *
 * ---
 *
 * Settings
 * 
 *   Preloaded Maps:
 *   - A list of all the ID's of the maps that will be preloaded to serve as
 *     template maps for this plugin.
 *
 * ---
 *
 * Templates
 * - A list of all the Event Templates used by this project. Used for notetags
 *   and Plugin Commands.
 * 
 *     Name:
 *     - Name of the template. It'll be used as anchor points for notetags and
 *       Plugin Commands.
 * 
 *     Map ID:
 *     - ID of the map the template event is stored on.
 *     - This will automatically add this ID to preloaded list.
 * 
 *     Event ID:
 *     - ID of the event the template event is based on.
 * 
 *     JavaScript:
 *       JS: Pre-Copy:
 *       JS: Post-Copy:
 *       JS: Pre-Morph:
 *       JS: Post-Morph:
 *       JS: Pre-Spawn:
 *       JS: Post-Spawn:
 *       - Code that's ran during certain circumstances.
 *       - The code will occur at the same time as the ones listed in the main
 *         Event Template Settings Plugin Parameters. However, the ones listed
 *         in these individual entries will only occur for these specific
 *         templates and only if the templates are used.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Pre-Copy:
 *   JS: Post-Copy:
 *   JS: Pre-Morph:
 *   JS: Post-Morph:
 *   JS: Pre-Spawn:
 *   JS: Post-Spawn:
 *   - Code that's ran during certain circumstances.
 *   - These are global and are ran for all copies, morphs, and/or spawns.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Movement Settings
 * ============================================================================
 *
 * These plugin parameters allow you to control how movement works in your
 * game, toggling it from 4-directional to 8-directional, setting up rules to
 * stop self-movement from events while an event or message is present, and
 * other aesthetics such as tilting the sprite while dashing, setting shadows
 * beneath the sprites, and allow for turning in place.
 *
 * ---
 *
 * 8 Directional Movement
 * 
 *   Enable:
 *   - Allow 8-directional movement by default? Players can move diagonally.
 * 
 *   Strict Collision:
 *   - Enforce strict collission rules where the player must be able to pass
 *     both cardinal directions?
 * 
 *   Favor Horizontal:
 *   - Favor horizontal if cannot pass diagonally but can pass both
 *     horizontally and vertically?
 * 
 *   Slower Diagonals?
 *   - Enforce a slower movement speed when moving diagonally?
 * 
 *     Speed Multiplier
 *     - What's the multiplier to adjust movement speed when moving diagonally?
 *
 * ---
 *
 * Automatic Movement
 * 
 *   Stop During Events:
 *   - Stop automatic event movement while events are running.
 * 
 *   Stop During Messages:
 *   - Stop automatic event movement while a message is running.
 *
 * ---
 * 
 * Bitmap
 * 
 *   Smoothing:
 *   - Do you want to smooth or pixelate the map sprites?
 *   - Pixelating them is better for zooming and tilting.
 * 
 * ---
 *
 * Dash
 * 
 *   Dash Modifier:
 *   - Alters the dash speed modifier.
 * 
 *   Dash on Ladder?
 *   - Allow dashing while on a ladder or rope?
 * 
 *   Enable Dash Tilt?:
 *   - Tilt any sprites that are currently dashing?
 * 
 *     Tilt Left Amount:
 *     - Amount in radians when moving left (upper left, left, lower left).
 * 
 *     Tilt Right Amount:
 *     - Amount in radians when moving right (upper right, right, lower right).
 * 
 *     Tilt Vertical Amount:
 *     - Amount in radians when moving vertical (up, down).
 *
 * ---
 * 
 * Event Movement
 * 
 *   Random Move Weight:
 *   - Use numbers between 0 and 1.
 *   - Numbers closer to 1 stay closer to their home position.
 *   - 0 to disable it.
 * 
 *   Shift Y:
 *   - How many pixels should non-tile characters be shifted by?
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Path Finding
 * 
 *   Mobile-Enabled?:
 *   - Enable diagonal pathfinding for mobile devices?
 * 
 * ---
 *
 * Shadows
 * 
 *   Show:
 *   - Show shadows on all events and player-related sprites.
 * 
 *   Default Filename:
 *   - Default filename used for shadows found in img/system/ folder.
 *
 * ---
 *
 * Turn in Place
 * 
 *   Enable:
 *   - When not dashing, player will turn in place before moving.
 *   - This only applies with keyboard inputs.
 * 
 *   Delay in Frames:
 *   - The number of frames to wait before moving.
 *
 * ---
 * 
 * Vehicle Speeds
 * 
 *   Boat Speed:
 *   - Allows you to adjust the base speed of the boat vehicle.
 * 
 *   Ship Speed:
 *   - Allows you to adjust the base speed of the ship vehicle.
 * 
 *   Airship Speed:
 *   - Allows you to adjust the base speed of the airship vehicle.
 * 
 * ---
 * 
 * Wall Bump
 * 
 *   Enable?:
 *   - Enable the sound effect to be played when bumping into a wall?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: VisuStella 8-Dir Settings
 * ============================================================================
 *
 * These are settings for sprite sheets using the VS8 format.
 * For more information on the VS8 format, look in the help section above.
 *
 * ---
 *
 * Balloon Icon Settings
 * 
 *   Auto-Balloon Poses:
 *   - Automatically pose VS8 sprites when using balloon icons.
 * 
 *   Balloon Offset X:
 *   - Offset balloon icons on VS8 sprites by x pixels.
 * 
 *   Balloon Offset Y:
 *   - Offset balloon icons on VS8 sprites by y pixels.
 *
 * ---
 *
 * Icons
 * 
 *   Auto Buffer:
 *   - Automatically buffer the X and Y coordinates of VS8 sprites?
 * 
 *   Use Carry Pose:
 *   - Use the carry pose when moving with an icon overhead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Region Rulings
 * ============================================================================
 *
 * These settings allow you to decide the passability of the player, events,
 * and various vehicles through the usage of Regions.
 *
 * ---
 *
 * Allow Regions
 * 
 *   All Allow:
 *   Walk Allow:
 *   Player Allow:
 *   Event Allow:
 *   Vehicle Allow:
 *   Boat Allow:
 *   Ship Allow:
 *   Airship Allow:
 *   - Insert Region ID's where the affected unit type can enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Forbid Regions
 * 
 *   All Forbid:
 *   Walk Forbid:
 *   Player Forbid:
 *   Event Forbid:
 *   Vehicle Forbid:
 *   Boat Forbid:
 *   Ship Forbid:
 *   Airship Forbid:
 *   - Insert Region ID's where the affected unit type cannot enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Dock Regions
 * 
 *   Vehicle Dock:
 *   Boat Dock:
 *   Ship Dock:
 *   Airship Dock:
 *   - Insert Region ID's where the affected vehicle can dock
 *   - Region ID's range from 0 to 255.
 * 
 *   Only Region Dockable:
 *   - Vehicles are only able to dock at designated regions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on OK Button
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that activate using
 * Regions when pressing the OK button while standing on top of them or in
 * front of them. These let you create near universally interactable objects
 * using Regions, such as rivers to start up fishing events or locations to
 * places items on.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * Target Tile
 * 
 *   Target Tile:
 *   - Which tile should be checked for Common Event on OK Button?
 *     - Tile in front of player.
 *     - Tile player is standing on top of.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on Touch
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that trigger when
 * stepping onto Region-marked tiles. These let you create custom effects that
 * will occur such as customized damage floors, traps, and/or events.
 * 
 * Areas marked with these regions will not allow random encounters to occur.
 * This is how RPG Maker works. Assuming you are not using plugins at all, by
 * putting on touch events all over the map, tiles with those on touch events
 * will not let random encounters trigger.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Terrain Tag Settings
 * ============================================================================
 *
 * Terrain Tags are used in Database => Tilesets to mark certain tiles and
 * give them unique properties through terrain tags.
 *
 * ---
 *
 * Terrain Tag ID's
 * 
 *   Rope:
 *   - Which terrain tag number to use for ropes?
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
 * Version 1.51: June 15, 2023
 * * Bug Fixes!
 * ** Provided a fail safe for plugins using the scaling options from this
 *    plugin but do not have scaling parameters identified. The scaling ratio
 *    should now default to 1.0. Fix made by Olivia.
 * * Feature Update!
 * ** Diagonal pathfinding is now improved as to not get stuck on tight corners
 *    on the map. Feature update made by Arisu.
 * 
 * Version 1.50: April 13, 2023
 * * Bug Fixes!
 * ** <Icon: x> should now update correctly when changing pages through self
 *    switches or other event conditions. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Event Labels > Mobile-Enabled?
 * *** Plugin Parameters > Movement > Pathfinding > Mobile-Enabled?
 * **** These settings allow you to enable or disable certain features when
 *      played on mobile devices for better performance.
 * 
 * Version 1.49: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Event Notetag and Comment Tags added by Arisu:
 * *** <Scale: x%>
 * *** <Scale X: x%>
 * *** <Scale Y: y%>
 * **** Changes the scale of the sprite to the designated size.
 * 
 * Version 1.48: January 20, 2023
 * * Feature Update!
 * ** <Move Synch> for certain types will also copy facing directions even if
 *    there are no tile movements (ie changing directions when pressed up
 *    against and obstacle). Update made by Arisu.
 * 
 * Version 1.47: November 10, 2022
 * * Feature Update!
 * ** If "Follower: Set Global Chase" is set to false, followers will no longer
 *    jump towards the player location when the player jumps. This does NOT
 *    apply to gather or location changing players. Followers will still have
 *    to synchronize their positions there regardless in order to maintain
 *    consistency. Update made by Olivia.
 * 
 * Version 1.46: September 29, 2022
 * * Bug Fixes!
 * ** Altered the self switch auto-reset timing to reduce errors. Fix by Arisu.
 * * Feature Update!
 * ** Added self-movement prevention whenever scenes are deactivated. Update
 *    made by Arisu.
 * 
 * Version 1.45: August 18, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused event labels with variables from refreshing
 *    properly. Fix made by Arisu.
 * 
 * Version 1.44: July 21, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused <Exit Reset Self Data> notetag to not work.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Diagonal pathfinding is now disabled when there are too many events on a
 *    map, causing extra collission checks. This value is set to 100 for the
 *    time being until we can figure out a better way to calculate diagonal
 *    pathfinding. Update made by Irina.
 * 
 * Version 1.43: July 14, 2022
 * * Bug Fixes!
 * ** Move to Player for events should no longer cause hang ups. Fix by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added caching function for pathfinding when using touch movement for a
 *    smoother experience. When touch movement is held down, pathfinding will
 *    utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Update made by Arisu.
 * * New Features!
 * ** New notetag added by Arisu:
 * *** <Playtest>
 * **** If this notetag is found in the event's notebox (NOT comments), then
 *      the event will only appear during a playtest session. It will not
 *      appear in a deployed game where the playtest flag is not on.
 * 
 * Version 1.42: June 23, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added to <Copy Event: x, y> notetag help:
 * *** - If '0' is used for the Map ID, reference the current map.
 * * Feature Update!
 * ** Default MZ behavior would have "below characters" trigger events with
 *    only comments lock out facing "same as characters" trigger events. This
 *    is now bypassed. Update made by Arisu.
 * ** The <Copy Event: mapID, eventID> notetags now allow usage of '0' for the
 *    mapID to reference the current map. Update made by Arisu.
 * ** <Save Event Location> should now work more efficiently. Update by Arisu.
 * ** Dashing animations for followers will no longer look weird after having
 *    gathered up and then proceeding to dash. Update made by Irina.
 * * New Features!
 * ** New event notetag added by Arisu:
 * *** <Exit Reset Self Data>
 * **** When the player leaves the current map, all Self Switches and Self
 *      Variables related to this event will be reset.
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Self Data: Reset All
 * **** Reset the Self Switch and Self Variable data of all events within the
 *      specified map.
 * ** New Plugin Parameter added by Arisu and sponsored by Anon:
 * *** Plugin Params > Movement Settings > Dash > Dash on Ladder?
 * **** Allow dashing while on a ladder or rope?
 * 
 * Version 1.41: June 1, 2022
 * * Bug Fixes!
 * ** Parallel Process Common Events above 1000 should no longer crash the
 *    game. Bug fixed by Irina.
 * 
 * Version 1.40: May 19, 2022
 * * Bug Fixes!
 * ** Sprite Event Labels with distance properties will now work properly
 *    when changing from a non-met page condition to a met page condition.
 *    Fix made by Arisu.
 * 
 * Version 1.39: May 5, 2022
 * * Bug Fixes!
 * ** Save event location should now work properly with Set Event Location
 *    command. Fix made by Arisu.
 * ** Sprite Event Labels with distance properties will no longer be visible
 *    when constantly entering/exiting the Main Menu. Fix made by Arisu.
 * 
 * Version 1.38: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu and sponsored by Archeia:
 * *** Plugin Parameters > Movement Settings > Event Movement > Shift Y
 * **** How many pixels should non-tile characters be shifted by?
 * ** New Notetags added by Arisu and sponsored by Archeia:
 * *** <Picture Filename: filename>
 * **** applies a picture graphic from the /img/pictures/ folder of your
 *      game project.
 * **** This graphic will be on top of the character sprite but below the event
 *      icon sprite.
 * **** The picture priority will be the same as the event's priority. If it is
 *      "below characters", the player can walk on top of it. If it is "above
 *      characters", the player will behind it. If it is "same as characters",
 *      the priority will be based on the current relative Y position.
 * *** <Picture Max Size: x>
 * *** <Picture Scale: y%>
 * **** If the "Max Size" or "Scale" supplementary notetags are used, the
 *      picture graphic will be scaled proportionally to fit either the exact
 *      pixel size for "Max Size" or the "Scale" ratio.
 * *** <Picture Offset: +x, +y>
 * *** <Picture Offset: -x, -y>
 * **** Offsets the X and Y position of the event picture relative to the event
 *      sprite's own position.
 * *** <Picture Wait Frames: x>
 * **** Requires VisuMZ_4_AnimatedPictures! "Wait Frames" is used with VisuMZ's
 *      Animated Pictures plugin. This determines the delay inbetween
 *      frame changes.
 * 
 * Version 1.37: March 24, 2022
 * * Documentation Update!
 * ** Added extra clarity to "Turn to Home" Movement Command.
 * *** This refers to the original position's X/Y on the map.
 * *** The event will turn and face the tile that is its original X/Y location.
 * 
 * Version 1.36: March 17, 2022
 * * Bug Fixes!
 * ** "Turn To Home" movement command now properly faces the home position.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.35: March 3, 2022
 * * IMPORTANT! Compatibility Update!
 * ** Compatibility Update with RPG Maker MZ 1.4.4.
 * *** For some reason this update broke any saves made before 1.4.4 was
 *     updated and they cannot be loaded. The only way saves would load is if
 *     you made a safe after 1.4.4 was done. This should be fixed and saves
 *     made with 1.4.3 and before should now be working. Update made by Irina.
 * 
 * Version 1.34: February 17, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** Arisu has created new event notetag/comment tags:
 * *** <Custom Z: x>
 * **** Replace 'x' with a number value to determine the event sprite's Z value
 *      relative to the tilemap.
 * **** View the helpfile for more information.
 * *** <Mirror Sprite>
 * **** The event sprite's visual appearance is mirrored.
 * *** <Move Synch Distance Opacity: x>
 * **** Changes the opacity of the event based on the distance between it and
 *      its move synched target. Closer means more opaque. Further away means
 *      more transparent.
 * ** Irina has created a more memory efficient version of Event Labels.
 * *** Plugin Parameters > Event Label Settings > Sprite Based?
 * **** Use sprite-based labels instead of legacy-window version.
 * **** Legacy-window version will not be supported in future.
 * 
 * Version 1.33: February 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu!
 * *** <Hide Player>
 * *** <Show Player>
 * **** Map Notetag. Forcefully hides or shows the player sprite. This is so
 *      you don't need to manually turn the setting on/off each time you enter
 *      a specific map.
 * *** <Hide Followers>
 * *** <Show Followers>
 * **** Map Notetag. Forcefully hides or shows the player's followers. This is
 *      so you don't need to manually turn them on/off each time you enter a
 *      specific map.
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Self Variable changes from custom move routes should no longer cause
 *    crashes. Fix made by Arisu.
 * ** Self Switch custom move route toggles should now work properly. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Better shadow tracking algorithm to remove any shadow twitching.
 *    Update made by Yanfly.
 * 
 * Version 1.31: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.30: November 25, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Map Switches and Map Variables added by Arisu:
 * *** Map Switches are self-switches for maps. Instead of using <Self>, use
 *     <Map> in the Switch name to designate it as a Map Switch. The ON/OFF
 *     data for that Switch will vary depending on the map the player is
 *     currently on.
 * *** Map Variables are self-variables for maps. Instead of using <Self>, use
 *     <Map> in the Variable name to designate it as a Map Switch. The number
 *     data for that Variable will vary depending on the map the player is
 *     currently on.
 * *** Script Calls have been added for these features as well.
 * **** See help file for them.
 * 
 * Version 1.29: October 7, 2021
 * * Bug Fixes!
 * ** Same map event spawning should now work properly without the need to add
 *    the current map ID to the preloaded map array. Update made by Arisu.
 * 
 * Version 1.28: September 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New move route commands added by Arisu:
 * *** Jump to Home
 * *** Move to Home
 * *** Crash Move to Home
 * *** Step Toward Home
 * *** Step Away From Home
 * *** Turn to Home
 * *** Turn Away From Home
 * *** Teleport to Home
 * **** These only work on events. Their actions should be reflective of what
 *      their command names suggest.
 * 
 * Version 1.27: September 17, 2021
 * * Bug Fixes!
 * ** Fixed event spawn templates so that they can work properly with Common
 *    Events. Fix made by Arisu.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** "Step Towards Player" custom command should now work properly. Fix made
 *    by Arisu.
 * ** Having multiple region restriction notetags for a map will no longer
 *    cause others to lock out. Fix made by Arisu.
 * 
 * Version 1.25: July 30, 2021
 * * Bug Fixes!
 * ** Fixed a problem that caused the 'setSelfSwitchValue' and
 *    'setSelfVariableValue' functions to not work properly. Fix made by Irina.
 * 
 * Version 1.24: June 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added extra clarification on which commands will go around the player
 *    character and which ones won't.
 * * New Move Route Custom Commands added by Arisu:
 * ** Crash Move (direction) Until Stop
 * ** Crash Move To: x, y
 * ** Crash Move To Event: x
 * *** These allow events to collide with the player character and trigger
 *     Event Touch events.
 * 
 * Version 1.23: May 21, 2021
 * * Bug Fixes!
 * ** Morphing by templates should no longer cause a crash. Fix made by Arisu.
 * 
 * Version 1.22: May 7, 2021
 * * Bug Fixes!
 * ** Plugin Commands for Event Label Visibility should now update without
 *    needing to take steps as per distance detection. Fix made by Arisu.
 * * Documentation Update!
 * ** Added clarity to "Common Event on Touch" Plugin Parameters.
 * *** Areas marked with these regions will not allow random encounters to
 *     occur. This is how RPG Maker works. Assuming you are not using plugins
 *     at all, by putting on touch events all over the map, tiles with those on
 *     touch events will not let random encounters trigger.
 * 
 * Version 1.21: March 12, 2021
 * * Bug Fixes!
 * ** Move until stop custom move routes should no longer cause crashes.
 *    Fix made by Arisu.
 * 
 * Version 1.20: February 26, 2021
 * * Bug Fixes!
 * ** Region Restrictions regarding Player Allow will no longer affect vehicle
 *    passability. Update made by Arisu.
 * 
 * Version 1.19: February 12, 2021
 * * Bug Fixes!
 * ** "Self Variable: Variable ID" plugin command's Map ID should now be able
 *    to use "0" to self reference the current map. Fix made by Olivia.
 * 
 * Version 1.18: February 5, 2021
 * * Bug Fixes!
 * ** Event icon plugin commands should now work properly. Fix made by Arisu.
 * * Documentation Update!
 * ** Added new "Features: Weighted Random Movement" section.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Random Move Weight: x>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then the event will stick closer to their home location (where they are
 *      located upon spawning on the map). How close they stick to their home
 *      location will depend on the weighted 'x' value.
 * *** <True Random Move>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then that event will ignore the effects of weighted randomized
 *      movement.
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Event Timer: Change Speed
 * *** Event Timer: Expire Event Assign
 * *** Event Timer: Expire Event Clear
 * *** Event Timer: Frames Gain
 * *** Event Timer: Frames Set
 * *** Event Timer: Pause
 * *** Event Timer: Resume
 * **** The above Plugin Commands allow you to control the game timer better.
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Movement > Event Movement > Random Move Weight
 * **** Use numbers between 0 and 1. Numbers closer to 1 stay closer to their
 *      home position.
 * 
 * Version 1.17: January 29, 2021
 * * Documentation Update!
 * ** Added "Do NOT insert quotes" to "Balloon: name" and "Pose: name".
 * ** Added Examples for extra clarification.
 * * Optimization Update!
 * ** When touch clicking an event on a map with multiple events, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.16: January 22, 2021
 * * Optimization Update!
 * ** When touch clicking multiple times on an impassable tile, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.15: January 1, 2021
 * * Bug Fixes!
 * ** Spawned events should now resume their automated self movement after
 *    being interacted with. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for updated features.
 * * Feature Updates!
 * ** Collission checks for the Spawn Event Plugin Commands now account for
 *    the spawning event's Hitbox, too. Update made by Yanfly.
 * ** Spawn Event Plugin Commands adds a new parameter "Success Switch ID" to
 *    check if the spawning has been successful or not.
 * * New Features!
 * ** New Plugin Commands added by Yanfly!
 * *** Spawn Event: Spawn At Terrain Tag
 * *** Spawn Event: Despawn Terrain Tag(s)
 * **** These function similar to their region counterparts except they target
 *      terrain tags instead.
 * 
 * Version 1.14: December 18, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for page index.
 *    Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the new features!
 * * New Features!
 * ** New Plugin Commands added by Irina.
 * *** Follower: Set Global Chase
 * *** Follower: Set Target Chase
 * *** Follower: Set Control
 * *** Follower: Reset
 * **** These plugin commands allow you to change whether or not the followers
 *      will chase their intended targets and/or shift control over their
 *      movement route from the "Player" to the target follower.
 * 
 * Version 1.13: December 4, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for one-screen maps.
 *    Fix made by Arisu.
 * 
 * Version 1.12: November 29, 2020
 * * Bug Fixes!
 * ** Click Triggers no longer work on erased events. Fix made by Arisu.
 * ** Erased events no longer have icons appear above their heads.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Initialization of the plugin's effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 15, 2020
 * * Bug Fixes!
 * ** Morph plugin command should no longer cause crashes. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the updated features!
 * * Feature Updates!
 * ** Updates to these Plugin Commands made by Yanfly:
 * *** Call Event: Remote Activation
 * *** Event Icon: Change
 * *** Event Icon: Delete
 * *** Event Location: Create
 * *** Event Location: Delete
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * *** Morph Event: Change
 * *** Morph Event: Remove
 * *** Self Switch: A B C D
 * *** Self Switch: Switch ID
 * *** Self Variable: Variable ID
 * **** All of the above Plugin Commands can now use 0 for their Event ID's in
 *      order to refer to the running event's ID value.
 * 
 * Version 1.10: November 1, 2020
 * * Bug Fixes!
 * ** Spawned Event preserve function now works properly. Fix made by Arisu.
 * 
 * Version 1.09: October 25, 2020
 * * Documentation Update
 * ** Added clarity on the notetags and comment tags on when their effects
 *    are present.
 * * Feature Update!
 * ** Event icons now have an unsmoothing property to them to make them
 *    look better. Update made by Irina.
 * 
 * Version 1.08: October 11, 2020
 * * Compatibility Update
 * ** Added failsafes for better compatibility.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** Updated for the new features!
 * * Feature Update!
 * ** Data from deleted events will now be cleared and removed from maps if the
 *    events do not exist to prevent conflict with plugins from the VisuStella
 *    MZ library and other plugins. Feature added by Irina.
 * ** Move Route Custom Commands now support self variable values! If you wish
 *    to use a value from a self variable, insert \SelfVar[x] in place of the x
 *    in any of the below. This will only draw from the current event. If you 
 *    wish to draw data from outside event self variables, we recommend you
 *    use the \V[x] variant after using the Plugin Commands to draw data from
 *    them for the best accuracy.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly!
 * *** Movement > Bitmap > Smoothing
 * **** Do you want to smooth or pixelate the map sprites? Pixelating them is
 *      better for zooming and tilting.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Events & Movement Core no longer disables the Core Engine's Smart Event
 *    Collision plugin parameter. Fix made by Yanfly.
 * * Documentation Update!
 * ** Move Route Custom Commands updated with the new feature for inserting
 *    variable values.
 * * Feature Update!
 * ** Move Route Custom Commands now support $gameVariable.value(x) values.
 *    You can also just use \V[x] for variable values, too. Added by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** If player movement is disabled, mouse movement is disabled, too.
 *    Fix made by Arisu.
 * ** The region restriction notetags should be fixed and work again.
 *    Fix made by Arisu.
 * 
 * Version 1.04: September 13, 2020
 * * Feature Update!
 * * Some Move Route Custom Commands are updated to ignore spaces:
 * ** Jump To: x, y
 * ** Move To: x, y
 * ** Step Toward: x, y
 * ** Step Away From: x, y
 * ** Turn To: x, y
 * ** Turn Away From: x, y
 * ** Teleport To: x, y
 * *** These can now be written as x,y. There still needs to be a space between
 *     the : and x for parsing clarity, however.
 * *** Feature updated by Arisu with help from BlueMoon and Zeriab.
 * * New Features!
 * ** New 'Move Route Custom Commands' added by Arisu.
 * *** Fade In: x
 * *** Fade Out: x
 * *** Force Carry: On
 * *** Force Carry: Off
 * *** Force Dash: On
 * *** Force Dash: Off
 * ** New Plugin Commands added by Arisu.
 * *** Player Movement: Control
 * **** Enable or disable player control over the player character's movement.
 * *** Player Movement: Diagonal
 * **** Override settings to for player diagonal movement.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Sleeping pose is now fixed and working! Fix made by Yanfly.
 * * Documentation Update!
 * ** Extended "Features: Self Switches and Variables" to explain how to use
 *    script calls to grab self switch information.
 * * New Features!
 * ** New Plugin Commands added by Yanfly:
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * **** These plugin commands allow you to transfer data stored in a self
 *      switch or Self Variable into a global switch or global variable.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** <Diagonal Movement: Off> notetag now works properly. Fix made by Yanfly.
 * ** Plugin Command "Event Label: Visible" now works properly. Fix made by
 *    Shaz.
 * ** Custom Move Route commands should now be working properly. Fix made by
 *    Shaz.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Event Cache issues fixed upon loading a saved game. Fix made by Yanfly.
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
 * @command Separator_AutoMove
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutoMoveEvents
 * @text Auto Movement: Events
 * @desc Allow/stop events from auto movement.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Allow
 * @value Allow
 * @option Stop
 * @value Stop
 * @option Toggle
 * @value Toggle
 * @desc Allow events to move automatically?
 * @default Allow
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_CallEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEvent
 * @text Call Event: Remote Activation
 * @desc Runs the page of a different event remotely.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to remotely run. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the remote event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_DashEnable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DashEnableToggle
 * @text Dash Enable: Toggle
 * @desc Enable/Disable Dashing on maps.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Enable
 * @value Enable
 * @option Disable
 * @value Disable
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change dashing to?
 * @default Enable
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChange
 * @text Event Icon: Change
 * @desc Change the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconDelete
 * @text Event Icon: Delete
 * @desc Delete the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLabel
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelRefresh
 * @text Event Label: Refresh
 * @desc Refresh all Event Labels on screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelVisible
 * @text Event Label: Visible
 * @desc Change the visibility of Event Labels.
 *
 * @arg Visibility:str
 * @text Visibility
 * @type select
 * @option Visible
 * @value Visible
 * @option Hidden
 * @value Hidden
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change visibility to?
 * @default Visible
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLocation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationSave
 * @text Event Location: Save
 * @desc Memorize an event's map location so it reappears there
 * the next time the map is loaded.
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationCreate
 * @text Event Location: Create
 * @desc Creates a custom spawn location for a specific map's event
 * so it appears there the next time the map is loaded.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent MapId:eval
 * @desc The X coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent MapId:eval
 * @desc The Y coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Direction:num
 * @text Direction
 * @parent MapId:eval
 * @type select
 * @option 1 - Lower Left
 * @value 1
 * @option 2 - Down
 * @value 2
 * @option 3 - Lower Right
 * @value 3
 * @option 4 - Left
 * @value 4
 * @option 6 - Right
 * @value 6
 * @option 7 - Upper Left
 * @value 7
 * @option 8 - Up
 * @value 8
 * @option 9 - Upper Right
 * @value 9
 * @desc The direction the event will be facing.
 * @default 2
 *
 * @arg Optional
 *
 * @arg PageId:eval
 * @text Page ID
 * @parent Optional
 * @desc The page of the event to set the move route to.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg MoveRouteIndex:eval
 * @text Move Route Index
 * @parent Optional
 * @desc The point in the move route for this event to be at
 * if the page ID matches the rest of the page conditions.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationDelete
 * @text Event Location: Delete
 * @desc Deletes an event's saved map location.
 * The event will reappear at its default location.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventTimer
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireEvent
 * @text Event Timer: Expire Event Assign
 * @desc Sets a Common Event to run upon expiration.
 * Bypasses the default code if one is set.
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Select the Common Event to run upon the timer's expiration.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerSpeed
 * @text Event Timer: Change Speed
 * @desc Changes the timer frame decrease (or increase) speed.
 *
 * @arg Speed:eval
 * @text Speed
 * @desc How many 1/60ths of a second does each frame increase or
 * decrease by? Negative decreases. Positive increases.
 * @default -1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireClear
 * @text Event Timer: Expire Event Clear
 * @desc Clears any set to expire Common Event and instead,
 * run the default Game_Timer expiration code.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesGain
 * @text Event Timer: Frames Gain
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are gained or lost for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc How many 1/60ths of a second are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc How many seconds are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc How many minutes are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc How many hours are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesSet
 * @text Event Timer: Frames Set
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are set for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc Set frame count to this value.
 * Each frame is 1/60th of a second. JavaScript allowed.
 * @default 0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc Set seconds to this value.
 * JavaScript allowed.
 * @default 0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc Set minutes to this value.
 * Each minute is 60 seconds. JavaScript allowed.
 * @default 0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc Set hours to this value.
 * Each hour is 60 minutes. JavaScript allowed.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerPause
 * @text Event Timer: Pause
 * @desc Pauses the current event timer, but does not stop it.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerResume
 * @text Event Timer: Resume
 * @desc Resumes the current event timer from the paused state.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Follower
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetGlobalChase
 * @text Follower: Set Global Chase
 * @desc Disables all followers from chasing the player
 * or reenables it.
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets all followers to chase the player or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetTargetChase
 * @text Follower: Set Target Chase
 * @desc Disables target follower from chasing the player
 * or reenables it.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to disable/reenable chasing for.
 * @default 1
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets target follower to chase its target or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetControl
 * @text Follower: Set Control
 * @desc Sets the event commands to target a follower when "Player"
 * is selected as the target.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to control.
 * 0 is the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerReset
 * @text Follower: Reset
 * @desc Resets all follower controls. Event Commands that target
 * the "Player" return to normal and followers chase again.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchABCD
 * @text Global Switch: Get Self Switch A B C D
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to obtain data from.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchID
 * @text Global Switch: Get Self Switch ID
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the source switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableGetSelfVariableID
 * @text Global Variable: Get Self Variable ID
 * @desc Gets the current stored value from a Self Variable and
 * stores it onto a Global Variable.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the source variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetVariableId:num
 * @text Target Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MorphEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventTo
 * @text Morph Event: Change
 * @desc Runs the page of a different event remotely.
 *
 * @arg Step1
 * @text Step 1: To Be Changed
 *
 * @arg Step1MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step1EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2
 * @text Step 2: Change Into
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step2
 * @desc Name of the target event template to morph into.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg Step2MapId:eval
 * @text Map ID
 * @parent Step2
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2EventId:eval
 * @text Event ID
 * @parent Step2
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2Preserve:eval
 * @text Preserve Morph
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the morph effect preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventRemove
 * @text Morph Event: Remove
 * @desc Remove the morph status of an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the event to remove morph from. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg RemovePreserve:eval
 * @text Remove Preservation
 * @parent Step2
 * @type boolean
 * @on Remove
 * @off Contain
 * @desc Also remove the preservation effect?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconChange
 * @text Player Icon: Change
 * @desc Change the icon that appears on on the player.
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconDelete
 * @text Player Icon: Delete
 * @desc Delete the icon that appears on the player.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerMovement
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementChange
 * @text Player Movement: Control
 * @desc Enable or disable player control over the player character's movement.
 *
 * @arg Enable:eval
 * @text Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Let the player control where the player character moves?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementDiagonal
 * @text Player Movement: Diagonal
 * @desc Override settings to for player diagonal movement.
 *
 * @arg Setting:str
 * @text Setting
 * @type select
 * @option Default: Whatever the Map Uses
 * @value default
 * @option Forcefully Disable Diagonal Movement
 * @value disable
 * @option Forcefully Enable Diagonal Movement
 * @value enable
 * @desc How do you want to change diagonal movement?
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfData
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfDataResetAll
 * @text Self Data: Reset All
 * @desc Reset the Self Switch and Self Variable data of all events
 * within the specified map.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchABCD
 * @text Self Switch: A B C D
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to change.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchID
 * @text Self Switch: Switch ID
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfVariableID
 * @text Self Variable: Variable ID
 * @desc Change the Self Variable of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Operation:str
 * @text Operation
 * @type select
 * @option = Set
 * @value =
 * @option + Add
 * @value +
 * @option - Subtract
 * @value -
 * @option * Multiply
 * @value *
 * @option / Divide
 * @value /
 * @option % Modulus
 * @value %
 * @desc Set the operation used.
 * @default =
 *
 * @arg Break2
 * @text -
 *
 * @arg Value:eval
 * @text Value
 * @desc Insert the value to modify the Self Variable by.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SpawnEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtXY
 * @text Spawn Event: Spawn At X, Y
 * @desc Spawns desired event at X, Y location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtRegion
 * @text Spawn Event: Spawn At Region
 * @desc Spawns desired event at a random region-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) to spawn this event at.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtTerrainTag
 * @text Spawn Event: Spawn At Terrain Tag
 * @desc Spawns desired event at a random terrain tag-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) to spawn this event at.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEventID
 * @text Spawn Event: Despawn Event ID
 * @desc Despawns the selected Event ID on the current map.
 *
 * @arg EventID:eval
 * @text Event ID
 * @type combo
 * @option $gameMap.firstSpawnedEventID()
 * @option $gameMap.lastSpawnedEventID()
 * @option 1001
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default $gameMap.lastSpawnedEventID()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnAtXY
 * @text Spawn Event: Despawn At X, Y
 * @desc Despawns any spawned event(s) at X, Y location on the current map.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnRegions
 * @text Spawn Event: Despawn Region(s)
 * @desc Despawns the selected Region(s) on the current map.
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) and despawn everything inside it.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnTerrainTags
 * @text Spawn Event: Despawn Terrain Tag(s)
 * @desc Despawns the selected Terrain Tags(s) on the current map.
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) and despawn everything inside it.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEverything
 * @text Spawn Event: Despawn Everything
 * @desc Despawns all spawned events on the current map.
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
 * @param EventsMoveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Label:struct
 * @text Event Label Settings
 * @type struct<Label>
 * @desc Choose settings regarding the Event Labels.
 * @default {"FontSize:num":"22","IconSize:num":"26","LineHeight:num":"30","OffsetX:num":"0","OffsetY:num":"12","OpacitySpeed:num":"16","VisibleRange:num":"30"}
 *
 * @param Icon:struct
 * @text Event Icon Settings
 * @type struct<Icon>
 * @desc Choose settings regarding the Event Icons.
 * @default {"BufferX:num":"0","BufferY:num":"12","BlendMode:num":"0"}
 *
 * @param Template:struct
 * @text Event Template Settings
 * @type struct<Template>
 * @desc Choose settings regarding Event Templates.
 * @default {"Settings":"","PreloadMaps:arraynum":"[\"1\"]","Prefabs":"","List:arraystruct":"[]","JavaScript":"","PreCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\""}
 *
 * @param EventBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Movement:struct
 * @text Movement Settings
 * @type struct<Movement>
 * @desc Change the rules regarding movement in the game.
 * @default {"Dir8":"","EnableDir8:eval":"true","StrictCollision:eval":"true","FavorHorz:eval":"true","SlowerSpeed:eval":"false","DiagonalSpeedMultiplier:num":"0.85","AutoMove":"","StopAutoMoveEvents:eval":"true","StopAutoMoveMessages:eval":"true","Bitmap":"","BitmapSmoothing:eval":"false","Dash":"","DashModifier:num":"+1.0","EnableDashTilt:eval":"true","TiltLeft:num":"-0.15","TiltRight:num":"0.15","TiltVert:num":"0.05","EventMove":"","RandomMoveWeight:num":"0.10","Shadows":"","ShowShadows:eval":"true","DefaultShadow:str":"Shadow1","TurnInPlace":"","EnableTurnInPlace:eval":"false","TurnInPlaceDelay:num":"10","Vehicle":"","BoatSpeed:num":"4.0","ShipSpeed:num":"5.0","AirshipSpeed:num":"6.0"}
 *
 * @param VS8:struct
 * @text VisuStella 8-Dir Settings
 * @type struct<VS8>
 * @desc Choose settings regarding VisuStella 8-Directional Sprites.
 * @default {"Balloons":"","AutoBalloon:eval":"true","BalloonOffsetX:num":"0","BalloonOffsetY:num":"12","Icons":"","AutoBuffer:eval":"true","CarryPose:eval":"true"}
 *
 * @param MovementBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Region:struct
 * @text Region Rulings
 * @type struct<Region>
 * @desc Choose settings regarding regions.
 * @default {"Allow":"","AllAllow:arraynum":"[]","WalkAllow:arraynum":"[]","PlayerAllow:arraynum":"[]","EventAllow:arraynum":"[]","VehicleAllow:arraynum":"[]","BoatAllow:arraynum":"[]","ShipAllow:arraynum":"[]","AirshipAllow:arraynum":"[]","Forbid":"","AllForbid:arraynum":"[]","WalkForbid:arraynum":"[]","PlayerForbid:arraynum":"[]","EventForbid:arraynum":"[]","VehicleForbid:arraynum":"[]","BoatForbid:arraynum":"[]","ShipForbid:arraynum":"[]","AirshipForbid:arraynum":"[]","Dock":"","VehicleDock:arraynum":"[]","BoatDock:arraynum":"[]","BoatDockRegionOnly:eval":"false","ShipDock:arraynum":"[]","ShipDockRegionOnly:eval":"false","AirshipDock:arraynum":"[]","AirshipDockRegionOnly:eval":"false"}
 *
 * @param RegionOk:struct
 * @text Common Event on OK Button
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon pressing the
 * OK button while standing on top of designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param RegionOkTarget:str
 * @text Target Tile
 * @parent RegionOk:struct
 * @type select
 * @option Tile in front of player.
 * @value front
 * @option Tile player is standing on top of.
 * @value standing
 * @desc Which tile should be checked for
 * Common Event on OK Button?
 * @default front
 *
 * @param RegionTouch:struct
 * @text Common Event on Touch
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon stepping the tiles
 * marked by the designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param TerrainTag:struct
 * @text Terrain Tag Settings
 * @type struct<TerrainTag>
 * @desc Choose settings regarding terrain tags.
 * @default {"TerrainTag":"","Rope:num":"1"}
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
 * Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Label:
 *
 * @param SpriteBased:eval
 * @text Sprite Based?
 * @type boolean
 * @on Sprite-Based
 * @off Legacy-Window
 * @desc Use sprite-based labels instead of legacy-window version.
 * Legacy-window version will not be supported in future.
 * @default true
 *
 * @param MobileEnabled:eval
 * @text Mobile-Enabled?
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable event labels for mobile devices?
 * @default true
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc The font size used for the Event Labels.
 * @default 22
 *
 * @param IconSize:num
 * @text Icon Size
 * @type number
 * @min 1
 * @desc The size of the icons used in the Event Labels.
 * @default 26
 *
 * @param LineHeight:num
 * @text Line Height
 * @type number
 * @min 1
 * @desc The line height used for the Event Labels.
 * @default 26
 *
 * @param OffsetX:num
 * @text Offset X
 * @type number
 * @min 0
 * @desc Globally offset all labels horizontally by this amount.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @type number
 * @min 0
 * @desc Globally offset all labels vertically by this amount.
 * @default 12
 *
 * @param OpacitySpeed:num
 * @text Fade Speed
 * @type number
 * @min 1
 * @desc Fade speed for labels.
 * @default 16
 *
 * @param VisibleRange:num
 * @text Visible Range
 * @type number
 * @min 1
 * @desc Range the player has to be within the event to make its label visible.
 * @default 30
 *
 */
/* ----------------------------------------------------------------------------
 * Icon Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Icon:
 *
 * @param BufferX:num
 * @text Buffer X
 * @desc Default X position buffer for event icons.
 * @default 0
 *
 * @param BufferY:num
 * @text Buffer Y
 * @desc Default Y position buffer for event icons.
 * @default 12
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc Default blend mode for even icons.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Template Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Template:
 *
 * @param Settings
 *
 * @param PreloadMaps:arraynum
 * @text Preloaded Maps
 * @parent Settings
 * @type number[]
 * @desc A list of all the ID's of the maps that will be preloaded
 * to serve as template maps for this plugin.
 * @default ["1"]
 *
 * @param Templates
 *
 * @param List:arraystruct
 * @text Event Template List
 * @parent Templates
 * @type struct<EventTemplate>[]
 * @desc A list of all the Event Templates used by this project.
 * Used for notetags and Plugin Commands.
 * @default []
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Event Template
 * ----------------------------------------------------------------------------
 */
/*~struct~EventTemplate:
 *
 * @param Name:str
 * @text Name
 * @desc Name of the template. It'll be used as anchor points for
 * notetags and Plugin Commands.
 * @default Untitled
 *
 * @param MapID:num
 * @text Map ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the map the template event is stored on.
 * This will automatically add this ID to preloaded list.
 * @default 1
 *
 * @param EventID:num
 * @text Event ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the event the template event is based on.
 * @default 1
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Movement Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Movement:
 *
 * @param Dir8
 * @text 8 Directional Movement
 *
 * @param EnableDir8:eval
 * @text Enable
 * @parent Dir8
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Allow 8-directional movement by default? Players can move diagonally.
 * @default true
 *
 * @param StrictCollision:eval
 * @text Strict Collision
 * @parent Dir8
 * @type boolean
 * @on Strict
 * @off Flexible
 * @desc Enforce strict collission rules where the player must be able to pass both cardinal directions?
 * @default true
 *
 * @param FavorHorz:eval
 * @text Favor Horizontal
 * @parent StrictCollision:eval
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Favor horizontal if cannot pass diagonally but can pass both horizontally and vertically?
 * @default true
 *
 * @param SlowerSpeed:eval
 * @text Slower Diagonals?
 * @parent Dir8
 * @type boolean
 * @on Slower
 * @off Normal
 * @desc Enforce a slower movement speed when moving diagonally?
 * @default false
 *
 * @param DiagonalSpeedMultiplier:num
 * @text Speed Multiplier
 * @parent SlowerSpeed:eval
 * @desc What's the multiplier to adjust movement speed when moving diagonally?
 * @default 0.85
 *
 * @param AutoMove
 * @text Automatic Movement
 *
 * @param StopAutoMoveEvents:eval
 * @text Stop During Events
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while events are running.
 * @default true
 *
 * @param StopAutoMoveMessages:eval
 * @text Stop During Messages
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while a message is running.
 * @default true
 *
 * @param Bitmap
 *
 * @param BitmapSmoothing:eval
 * @text Smoothing
 * @parent Bitmap
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Do you want to smooth or pixelate the map sprites?
 * Pixelating them is better for zooming and tilting.
 * @default false
 *
 * @param Dash
 * @text Dash
 *
 * @param DashModifier:num
 * @text Dash Modifier
 * @parent Dash
 * @desc Alters the dash speed modifier.
 * @default +1.0
 *
 * @param DashOnLadder:eval
 * @text Dash On Ladder?
 * @parent Dash
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow dashing while on a ladder or rope?
 * @default false
 *
 * @param EnableDashTilt:eval
 * @text Enable Dash Tilt?
 * @parent Dash
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Tilt any sprites that are currently dashing?
 * @default true
 *
 * @param TiltLeft:num
 * @text Tilt Left Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving left (upper left, left, lower left).
 * @default -0.15
 *
 * @param TiltRight:num
 * @text Tilt Right Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving right (upper right, right, lower right).
 * @default 0.15
 *
 * @param TiltVert:num
 * @text Tilt Vertical Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving vertical (up, down).
 * @default 0.05
 * 
 * @param EventMove
 * @text Event Movement
 *
 * @param RandomMoveWeight:num
 * @text Random Move Weight
 * @parent EventMove
 * @desc Use numbers between 0 and 1. Numbers closer to 1 stay
 * closer to their home position. 0 to disable it.
 * @default 0.10
 *
 * @param ShiftY:num
 * @text Shift Y
 * @parent EventMove
 * @desc How many pixels should non-tile characters be shifted by?
 * Negative: up. Positive: down.
 * @default -6
 *
 * @param PathFind
 * @text Path Finding
 *
 * @param PathfindMobileEnabled:eval
 * @text Mobile-Enabled?
 * @parent PathFind
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable diagonal pathfinding for mobile devices?
 * @default false
 *
 * @param Shadows
 *
 * @param ShowShadows:eval
 * @text Show
 * @parent Shadows
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show shadows on all events and player-related sprites.
 * @default true
 *
 * @param DefaultShadow:str
 * @text Default Filename
 * @parent Shadows
 * @type file
 * @dir img/system/
 * @desc Default filename used for shadows found in img/system/ folder.
 * @default Shadow1
 *
 * @param TurnInPlace
 * @text Turn in Place
 *
 * @param EnableTurnInPlace:eval
 * @text Enable
 * @parent TurnInPlace
 * @type boolean
 * @on Turn in Place
 * @off Skip
 * @desc When not dashing, player will turn in place before moving.
 * This only applies with keyboard inputs.
 * @default false
 *
 * @param TurnInPlaceDelay:num
 * @text Delay in Frames
 * @parent TurnInPlace
 * @type number
 * @min 0
 * @desc The number of frames to wait before moving.
 * @default 10
 *
 * @param Vehicle
 * @text Vehicle Speeds
 *
 * @param BoatSpeed:num
 * @text Boat Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the boat vehicle.
 * @default 4.0
 *
 * @param ShipSpeed:num
 * @text Ship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the ship vehicle.
 * @default 5.0
 *
 * @param AirshipSpeed:num
 * @text Airship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the airship vehicle.
 * @default 6.0
 *
 */
/* ----------------------------------------------------------------------------
 * Region Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~Region:
 *
 * @param Allow
 * @text Allow Regions
 *
 * @param AllAllow:arraynum
 * @text All Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkAllow:arraynum
 * @text Walk Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerAllow:arraynum
 * @text Player Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventAllow:arraynum
 * @text Event Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleAllow:arraynum
 * @text Vehicle Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatAllow:arraynum
 * @text Boat Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipAllow:arraynum
 * @text Ship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipAllow:arraynum
 * @text Airship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Forbid
 * @text Forbid Regions
 *
 * @param AllForbid:arraynum
 * @text All Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkForbid:arraynum
 * @text Walk Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerForbid:arraynum
 * @text Player Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventForbid:arraynum
 * @text Event Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleForbid:arraynum
 * @text Vehicle Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where vehicles cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatForbid:arraynum
 * @text Boat Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipForbid:arraynum
 * @text Ship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipForbid:arraynum
 * @text Airship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Dock
 * @text Dock Regions
 *
 * @param VehicleDock:arraynum
 * @text Vehicle Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDock:arraynum
 * @text Boat Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent BoatDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Boats can only dock at designated regions.
 * @default false
 *
 * @param ShipDock:arraynum
 * @text Ship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent ShipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Ships can only dock at designated regions.
 * @default false
 *
 * @param AirshipDock:arraynum
 * @text Airship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent AirshipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Airships can only dock at designated regions.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Region Common Events
 * ----------------------------------------------------------------------------
 */
/*~struct~RegionCommonEvent:
 *
 * @param Region1:num
 * @text Region 1
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region2:num
 * @text Region 2
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region3:num
 * @text Region 3
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region4:num
 * @text Region 4
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region5:num
 * @text Region 5
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region6:num
 * @text Region 6
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region7:num
 * @text Region 7
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region8:num
 * @text Region 8
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region9:num
 * @text Region 9
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region10:num
 * @text Region 10
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region11:num
 * @text Region 11
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region12:num
 * @text Region 12
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region13:num
 * @text Region 13
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region14:num
 * @text Region 14
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region15:num
 * @text Region 15
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region16:num
 * @text Region 16
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region17:num
 * @text Region 17
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region18:num
 * @text Region 18
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region19:num
 * @text Region 19
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region20:num
 * @text Region 20
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region21:num
 * @text Region 21
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region22:num
 * @text Region 22
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region23:num
 * @text Region 23
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region24:num
 * @text Region 24
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region25:num
 * @text Region 25
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region26:num
 * @text Region 26
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region27:num
 * @text Region 27
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region28:num
 * @text Region 28
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region29:num
 * @text Region 29
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region30:num
 * @text Region 30
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region31:num
 * @text Region 31
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region32:num
 * @text Region 32
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region33:num
 * @text Region 33
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region34:num
 * @text Region 34
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region35:num
 * @text Region 35
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region36:num
 * @text Region 36
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region37:num
 * @text Region 37
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region38:num
 * @text Region 38
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region39:num
 * @text Region 39
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region40:num
 * @text Region 40
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region41:num
 * @text Region 41
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region42:num
 * @text Region 42
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region43:num
 * @text Region 43
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region44:num
 * @text Region 44
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region45:num
 * @text Region 45
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region46:num
 * @text Region 46
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region47:num
 * @text Region 47
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region48:num
 * @text Region 48
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region49:num
 * @text Region 49
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region50:num
 * @text Region 50
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region51:num
 * @text Region 51
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region52:num
 * @text Region 52
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region53:num
 * @text Region 53
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region54:num
 * @text Region 54
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region55:num
 * @text Region 55
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region56:num
 * @text Region 56
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region57:num
 * @text Region 57
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region58:num
 * @text Region 58
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region59:num
 * @text Region 59
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region60:num
 * @text Region 60
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region61:num
 * @text Region 61
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region62:num
 * @text Region 62
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region63:num
 * @text Region 63
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region64:num
 * @text Region 64
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region65:num
 * @text Region 65
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region66:num
 * @text Region 66
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region67:num
 * @text Region 67
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region68:num
 * @text Region 68
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region69:num
 * @text Region 69
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region70:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region71:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region72:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region73:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region74:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region75:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region76:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region77:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region78:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region79:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 90
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 91
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 92
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 93
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 94
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 95
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 96
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 97
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 98
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 99
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region100:num
 * @text Region 100
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region101:num
 * @text Region 101
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region102:num
 * @text Region 102
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region103:num
 * @text Region 103
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region104:num
 * @text Region 104
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region105:num
 * @text Region 105
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region106:num
 * @text Region 106
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region107:num
 * @text Region 107
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region108:num
 * @text Region 108
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region109:num
 * @text Region 109
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region110:num
 * @text Region 110
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region111:num
 * @text Region 111
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region112:num
 * @text Region 112
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region113:num
 * @text Region 113
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region114:num
 * @text Region 114
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region115:num
 * @text Region 115
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region116:num
 * @text Region 116
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region117:num
 * @text Region 117
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region118:num
 * @text Region 118
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region119:num
 * @text Region 119
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region120:num
 * @text Region 120
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region121:num
 * @text Region 121
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region122:num
 * @text Region 122
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region123:num
 * @text Region 123
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region124:num
 * @text Region 124
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region125:num
 * @text Region 125
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region126:num
 * @text Region 126
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region127:num
 * @text Region 127
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region128:num
 * @text Region 128
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region129:num
 * @text Region 129
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region130:num
 * @text Region 130
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region131:num
 * @text Region 131
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region132:num
 * @text Region 132
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region133:num
 * @text Region 133
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region134:num
 * @text Region 134
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region135:num
 * @text Region 135
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region136:num
 * @text Region 136
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region137:num
 * @text Region 137
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region138:num
 * @text Region 138
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region139:num
 * @text Region 139
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region140:num
 * @text Region 140
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region141:num
 * @text Region 141
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region142:num
 * @text Region 142
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region143:num
 * @text Region 143
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region144:num
 * @text Region 144
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region145:num
 * @text Region 145
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region146:num
 * @text Region 146
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region147:num
 * @text Region 147
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region148:num
 * @text Region 148
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region149:num
 * @text Region 149
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region150:num
 * @text Region 150
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region151:num
 * @text Region 151
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region152:num
 * @text Region 152
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region153:num
 * @text Region 153
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region154:num
 * @text Region 154
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region155:num
 * @text Region 155
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region156:num
 * @text Region 156
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region157:num
 * @text Region 157
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region158:num
 * @text Region 158
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region159:num
 * @text Region 159
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region160:num
 * @text Region 160
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region161:num
 * @text Region 161
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region162:num
 * @text Region 162
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region163:num
 * @text Region 163
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region164:num
 * @text Region 164
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region165:num
 * @text Region 165
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region166:num
 * @text Region 166
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region167:num
 * @text Region 167
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region168:num
 * @text Region 168
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region169:num
 * @text Region 169
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region170:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region171:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region172:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region173:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region174:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region175:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region176:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region177:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region178:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region179:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 190
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 191
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 192
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 193
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 194
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 195
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 196
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 197
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 198
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 199
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region200:num
 * @text Region 200
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region201:num
 * @text Region 201
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region202:num
 * @text Region 202
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region203:num
 * @text Region 203
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region204:num
 * @text Region 204
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region205:num
 * @text Region 205
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region206:num
 * @text Region 206
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region207:num
 * @text Region 207
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region208:num
 * @text Region 208
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region209:num
 * @text Region 209
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region210:num
 * @text Region 210
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region211:num
 * @text Region 211
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region212:num
 * @text Region 212
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region213:num
 * @text Region 213
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region214:num
 * @text Region 214
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region215:num
 * @text Region 215
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region216:num
 * @text Region 216
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region217:num
 * @text Region 217
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region218:num
 * @text Region 218
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region219:num
 * @text Region 219
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region220:num
 * @text Region 220
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region221:num
 * @text Region 221
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region222:num
 * @text Region 222
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region223:num
 * @text Region 223
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region224:num
 * @text Region 224
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region225:num
 * @text Region 225
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region226:num
 * @text Region 226
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region227:num
 * @text Region 227
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region228:num
 * @text Region 228
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region229:num
 * @text Region 229
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region230:num
 * @text Region 230
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region231:num
 * @text Region 231
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region232:num
 * @text Region 232
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region233:num
 * @text Region 233
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region234:num
 * @text Region 234
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region235:num
 * @text Region 235
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region236:num
 * @text Region 236
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region237:num
 * @text Region 237
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region238:num
 * @text Region 238
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region239:num
 * @text Region 239
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region240:num
 * @text Region 240
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region241:num
 * @text Region 241
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region242:num
 * @text Region 242
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region243:num
 * @text Region 243
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region244:num
 * @text Region 244
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region245:num
 * @text Region 245
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region246:num
 * @text Region 246
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region247:num
 * @text Region 247
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region248:num
 * @text Region 248
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region249:num
 * @text Region 249
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region250:num
 * @text Region 250
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region251:num
 * @text Region 251
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region252:num
 * @text Region 252
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region253:num
 * @text Region 253
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region254:num
 * @text Region 254
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region255:num
 * @text Region 255
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Terrain Tag Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TerrainTag:
 *
 * @param TerrainTag
 * @text Terrain Tag ID's
 *
 * @param Rope:num
 * @text Rope
 * @parent TerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Which terrain tag number to use for ropes?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * VisuStella 8-Dir Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VS8:
 *
 * @param Balloons
 * @text Balloon Icon Settings
 *
 * @param AutoBalloon:eval
 * @text Auto-Balloon Poses
 * @parent Balloons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically pose VS8 sprites when using balloon icons.
 * @default true
 *
 * @param BalloonOffsetX:num
 * @text Balloon Offset X
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by x pixels.
 * @default 0
 *
 * @param BalloonOffsetY:num
 * @text Balloon Offset Y
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by y pixels.
 * @default 10
 *
 * @param Icons
 * 
 * @param AutoBuffer:eval
 * @text Auto Buffer
 * @parent Icons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically buffer the X and Y coordinates of
 * VS8 sprites?
 * @default true
 * 
 * @param CarryPose:eval
 * @text Use Carry Pose
 * @parent Icons
 * @type boolean
 * @on Carry Pose
 * @off Normal
 * @desc Use the carry pose when moving with an icon overhead.
 * @default true
 *
 */
//=============================================================================

const _0x55137b=_0x22f9;(function(_0x539cdd,_0x4622f6){const _0x4815ef=_0x22f9,_0x3acec9=_0x539cdd();while(!![]){try{const _0x38f019=parseInt(_0x4815ef(0x4bc))/0x1*(parseInt(_0x4815ef(0x5df))/0x2)+-parseInt(_0x4815ef(0x499))/0x3*(-parseInt(_0x4815ef(0x6c8))/0x4)+-parseInt(_0x4815ef(0x5dd))/0x5+-parseInt(_0x4815ef(0x424))/0x6+parseInt(_0x4815ef(0x724))/0x7+parseInt(_0x4815ef(0x51f))/0x8*(parseInt(_0x4815ef(0x4e8))/0x9)+parseInt(_0x4815ef(0x3b1))/0xa;if(_0x38f019===_0x4622f6)break;else _0x3acec9['push'](_0x3acec9['shift']());}catch(_0x183aeb){_0x3acec9['push'](_0x3acec9['shift']());}}}(_0x3c92,0x38963));function _0x22f9(_0x23b4f2,_0x3bf690){const _0x3c923b=_0x3c92();return _0x22f9=function(_0x22f936,_0xe879c7){_0x22f936=_0x22f936-0x1f4;let _0x2da79b=_0x3c923b[_0x22f936];return _0x2da79b;},_0x22f9(_0x23b4f2,_0x3bf690);}var label='EventsMoveCore',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x55137b(0x3c7)](function(_0x296d71){const _0x240008=_0x55137b;return _0x296d71[_0x240008(0x25c)]&&_0x296d71['description'][_0x240008(0x23b)]('['+label+']');})[0x0];VisuMZ[label][_0x55137b(0x6ea)]=VisuMZ[label][_0x55137b(0x6ea)]||{},VisuMZ['ConvertParams']=function(_0x4a5e67,_0x4280c0){const _0x204882=_0x55137b;for(const _0xaabe37 in _0x4280c0){if(_0xaabe37['match'](/(.*):(.*)/i)){const _0x3c7083=String(RegExp['$1']),_0x45b3d2=String(RegExp['$2'])[_0x204882(0x557)]()[_0x204882(0x5d3)]();let _0x46eee4,_0x383713,_0xf0c09e;switch(_0x45b3d2){case _0x204882(0x485):_0x46eee4=_0x4280c0[_0xaabe37]!==''?Number(_0x4280c0[_0xaabe37]):0x0;break;case _0x204882(0x287):_0x383713=_0x4280c0[_0xaabe37]!==''?JSON['parse'](_0x4280c0[_0xaabe37]):[],_0x46eee4=_0x383713['map'](_0x56dcc3=>Number(_0x56dcc3));break;case _0x204882(0x2bf):_0x46eee4=_0x4280c0[_0xaabe37]!==''?eval(_0x4280c0[_0xaabe37]):null;break;case _0x204882(0x64b):_0x383713=_0x4280c0[_0xaabe37]!==''?JSON[_0x204882(0x685)](_0x4280c0[_0xaabe37]):[],_0x46eee4=_0x383713[_0x204882(0x276)](_0x407620=>eval(_0x407620));break;case _0x204882(0x471):_0x46eee4=_0x4280c0[_0xaabe37]!==''?JSON[_0x204882(0x685)](_0x4280c0[_0xaabe37]):'';break;case _0x204882(0x4da):_0x383713=_0x4280c0[_0xaabe37]!==''?JSON[_0x204882(0x685)](_0x4280c0[_0xaabe37]):[],_0x46eee4=_0x383713[_0x204882(0x276)](_0x17d739=>JSON['parse'](_0x17d739));break;case _0x204882(0x31d):_0x46eee4=_0x4280c0[_0xaabe37]!==''?new Function(JSON[_0x204882(0x685)](_0x4280c0[_0xaabe37])):new Function(_0x204882(0x631));break;case'ARRAYFUNC':_0x383713=_0x4280c0[_0xaabe37]!==''?JSON[_0x204882(0x685)](_0x4280c0[_0xaabe37]):[],_0x46eee4=_0x383713[_0x204882(0x276)](_0x5d7d0a=>new Function(JSON[_0x204882(0x685)](_0x5d7d0a)));break;case _0x204882(0x6a3):_0x46eee4=_0x4280c0[_0xaabe37]!==''?String(_0x4280c0[_0xaabe37]):'';break;case'ARRAYSTR':_0x383713=_0x4280c0[_0xaabe37]!==''?JSON[_0x204882(0x685)](_0x4280c0[_0xaabe37]):[],_0x46eee4=_0x383713[_0x204882(0x276)](_0x2263eb=>String(_0x2263eb));break;case'STRUCT':_0xf0c09e=_0x4280c0[_0xaabe37]!==''?JSON[_0x204882(0x685)](_0x4280c0[_0xaabe37]):{},_0x4a5e67[_0x3c7083]={},VisuMZ[_0x204882(0x53d)](_0x4a5e67[_0x3c7083],_0xf0c09e);continue;case _0x204882(0x60a):_0x383713=_0x4280c0[_0xaabe37]!==''?JSON[_0x204882(0x685)](_0x4280c0[_0xaabe37]):[],_0x46eee4=_0x383713[_0x204882(0x276)](_0x7b3581=>VisuMZ[_0x204882(0x53d)]({},JSON[_0x204882(0x685)](_0x7b3581)));break;default:continue;}_0x4a5e67[_0x3c7083]=_0x46eee4;}}return _0x4a5e67;},(_0x3239d0=>{const _0x2f9460=_0x55137b,_0x2dc8fe=_0x3239d0[_0x2f9460(0x347)];for(const _0x35e887 of dependencies){if(_0x2f9460(0x3f9)!=='QaOVV'){var _0x2fdb19=_0x48b6a4['EventsMoveCore']['Game_Troop_meetsConditionsCPC']['call'](this,_0x2ae0f1);return _0x2fdb19&&this['CPCsMet'](_0x568992);}else{if(!Imported[_0x35e887]){alert(_0x2f9460(0x5a2)[_0x2f9460(0x69f)](_0x2dc8fe,_0x35e887)),SceneManager[_0x2f9460(0x5c8)]();break;}}}const _0xa83f81=_0x3239d0[_0x2f9460(0x375)];if(_0xa83f81['match'](/\[Version[ ](.*?)\]/i)){const _0x529478=Number(RegExp['$1']);if(_0x529478!==VisuMZ[label]['version']){if(_0x2f9460(0x626)===_0x2f9460(0x6bb)){if(!this[_0x2f9460(0x4c9)]())return;this[_0x2f9460(0x340)]();}else alert(_0x2f9460(0x6e0)[_0x2f9460(0x69f)](_0x2dc8fe,_0x529478)),SceneManager[_0x2f9460(0x5c8)]();}}if(_0xa83f81['match'](/\[Tier[ ](\d+)\]/i)){const _0x37101b=Number(RegExp['$1']);_0x37101b<tier?(alert(_0x2f9460(0x6d6)[_0x2f9460(0x69f)](_0x2dc8fe,_0x37101b,tier)),SceneManager[_0x2f9460(0x5c8)]()):_0x2f9460(0x454)==='gTziH'?this[_0x2f9460(0x366)]():tier=Math[_0x2f9460(0x69d)](_0x37101b,tier);}VisuMZ[_0x2f9460(0x53d)](VisuMZ[label][_0x2f9460(0x6ea)],_0x3239d0['parameters']);})(pluginData),VisuMZ[_0x55137b(0x4e7)]=function(_0x17333d,_0x338091,_0x4c0613){switch(_0x4c0613){case'=':return _0x338091;break;case'+':return _0x17333d+_0x338091;break;case'-':return _0x17333d-_0x338091;break;case'*':return _0x17333d*_0x338091;break;case'/':return _0x17333d/_0x338091;break;case'%':return _0x17333d%_0x338091;break;}return _0x17333d;},PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x329),_0x5b0d4c=>{const _0x2e5ee2=_0x55137b;VisuMZ[_0x2e5ee2(0x53d)](_0x5b0d4c,_0x5b0d4c);switch(_0x5b0d4c[_0x2e5ee2(0x4e9)]){case _0x2e5ee2(0x52d):$gameSystem[_0x2e5ee2(0x37d)](!![]);break;case _0x2e5ee2(0x6ef):$gameSystem['setAllowEventAutoMovement'](![]);break;case _0x2e5ee2(0x4fc):$gameSystem[_0x2e5ee2(0x37d)](!$gameSystem[_0x2e5ee2(0x3d3)]());break;}}),PluginManager[_0x55137b(0x3e5)](pluginData['name'],_0x55137b(0x333),_0x311366=>{const _0x4524f8=_0x55137b;VisuMZ[_0x4524f8(0x53d)](_0x311366,_0x311366);const _0x216046=$gameTemp[_0x4524f8(0x2e1)](),_0x5416d3={'mapId':_0x311366[_0x4524f8(0x4fa)],'eventId':_0x311366[_0x4524f8(0x6b8)]||_0x216046[_0x4524f8(0x506)](),'pageId':_0x311366[_0x4524f8(0x721)]};if(_0x5416d3[_0x4524f8(0x517)]<=0x0)_0x5416d3[_0x4524f8(0x517)]=$gameMap?$gameMap[_0x4524f8(0x517)]():0x1;$gameTemp[_0x4524f8(0x2e1)]()[_0x4524f8(0x726)](_0x5416d3);}),PluginManager[_0x55137b(0x3e5)](pluginData['name'],_0x55137b(0x6a1),_0x14b316=>{const _0x51fee1=_0x55137b;VisuMZ[_0x51fee1(0x53d)](_0x14b316,_0x14b316);switch(_0x14b316[_0x51fee1(0x4e9)]){case _0x51fee1(0x2d2):$gameSystem[_0x51fee1(0x5ae)](!![]);break;case _0x51fee1(0x708):$gameSystem['setDashingEnabled'](![]);break;case _0x51fee1(0x4fc):$gameSystem[_0x51fee1(0x5ae)](!$gameSystem[_0x51fee1(0x3fe)]());break;}}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x397),_0x50d1bc=>{const _0x3aa293=_0x55137b;VisuMZ[_0x3aa293(0x53d)](_0x50d1bc,_0x50d1bc);const _0x47958a=$gameTemp[_0x3aa293(0x2e1)]();_0x50d1bc[_0x3aa293(0x4fa)]=_0x50d1bc[_0x3aa293(0x4fa)]||$gameMap[_0x3aa293(0x517)](),$gameSystem[_0x3aa293(0x481)](_0x50d1bc[_0x3aa293(0x4fa)],_0x50d1bc['EventId']||_0x47958a[_0x3aa293(0x506)](),_0x50d1bc[_0x3aa293(0x6c0)],_0x50d1bc[_0x3aa293(0x6f2)],_0x50d1bc[_0x3aa293(0x4be)],_0x50d1bc['IconBlendMode']);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],'EventIconDelete',_0x3797f2=>{const _0x23b65f=_0x55137b;VisuMZ['ConvertParams'](_0x3797f2,_0x3797f2);const _0x197f36=$gameTemp[_0x23b65f(0x2e1)]();_0x3797f2[_0x23b65f(0x4fa)]=_0x3797f2['MapId']||$gameMap[_0x23b65f(0x517)](),$gameSystem[_0x23b65f(0x5a7)](_0x3797f2['MapId'],_0x3797f2[_0x23b65f(0x6b8)]||_0x197f36['eventId']());}),PluginManager[_0x55137b(0x3e5)](pluginData['name'],_0x55137b(0x449),_0x561018=>{const _0x1fa396=_0x55137b;if($gameMap){if(_0x1fa396(0x410)!==_0x1fa396(0x649))for(const _0x2c45d3 of $gameMap[_0x1fa396(0x5db)]()){_0x2c45d3[_0x1fa396(0x28e)](),_0x2c45d3[_0x1fa396(0x2f5)]();}else this['_event']=_0x1efbd6,_0x5368ab[_0x1fa396(0x65a)][_0x1fa396(0x483)][_0x1fa396(0x24a)](this),this[_0x1fa396(0x1f8)](),this[_0x1fa396(0x54e)]();}if(SceneManager[_0x1fa396(0x69c)]()){const _0x1ca5d5=SceneManager[_0x1fa396(0x316)]['_spriteset'];if(_0x1ca5d5)_0x1ca5d5['refreshEventLabels']();}}),PluginManager['registerCommand'](pluginData[_0x55137b(0x347)],_0x55137b(0x552),_0x1c558a=>{const _0x25f452=_0x55137b;VisuMZ['ConvertParams'](_0x1c558a,_0x1c558a);switch(_0x1c558a['Visibility']){case'Visible':$gameSystem[_0x25f452(0x6d5)](!![]);break;case _0x25f452(0x705):$gameSystem[_0x25f452(0x6d5)](![]);break;case _0x25f452(0x4fc):$gameSystem[_0x25f452(0x6d5)](!$gameSystem[_0x25f452(0x5ec)]());break;}}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x525),_0x172fbc=>{const _0x507ebf=_0x55137b;VisuMZ[_0x507ebf(0x53d)](_0x172fbc,_0x172fbc);const _0x574379=$gameTemp['getLastPluginCommandInterpreter']();if(!$gameMap)return;const _0x50f4ce=$gameMap[_0x507ebf(0x52c)](_0x172fbc[_0x507ebf(0x6b8)]||_0x574379[_0x507ebf(0x506)]());if(_0x50f4ce)_0x50f4ce['saveEventLocation']();}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x5f3),_0x5ac731=>{const _0x4713d7=_0x55137b;VisuMZ['ConvertParams'](_0x5ac731,_0x5ac731);const _0x885a5d=$gameTemp[_0x4713d7(0x2e1)](),_0x6f7f3f=_0x5ac731[_0x4713d7(0x4fa)]||$gameMap[_0x4713d7(0x517)](),_0x5c7462=_0x5ac731['EventId']||_0x885a5d[_0x4713d7(0x506)](),_0x1bf1d9=_0x5ac731[_0x4713d7(0x401)]||0x0,_0x384db1=_0x5ac731[_0x4713d7(0x2b0)]||0x0,_0x5f316e=_0x5ac731[_0x4713d7(0x21d)]||0x2,_0x5710ce=((_0x5ac731[_0x4713d7(0x721)]||0x1)-0x1)[_0x4713d7(0x313)](0x0,0x13),_0x7b4ed1=_0x5ac731[_0x4713d7(0x4c5)]||0x0;$gameSystem[_0x4713d7(0x469)](_0x6f7f3f,_0x5c7462,_0x1bf1d9,_0x384db1,_0x5f316e,_0x5710ce,_0x7b4ed1);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x22f),_0x5e08a3=>{const _0x48ffca=_0x55137b;VisuMZ[_0x48ffca(0x53d)](_0x5e08a3,_0x5e08a3);const _0x400c1c=$gameTemp[_0x48ffca(0x2e1)](),_0xc1cf02=_0x5e08a3[_0x48ffca(0x4fa)]||$gameMap['mapId'](),_0x29b8a2=_0x5e08a3[_0x48ffca(0x6b8)]||_0x400c1c[_0x48ffca(0x506)]();$gameSystem[_0x48ffca(0x6ca)](_0xc1cf02,_0x29b8a2);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x222),_0x44e596=>{const _0x54bd66=_0x55137b;VisuMZ[_0x54bd66(0x53d)](_0x44e596,_0x44e596);const _0x5beb0d=_0x44e596[_0x54bd66(0x384)];$gameTimer[_0x54bd66(0x6ad)](_0x5beb0d);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x40a),_0x444b11=>{const _0x5655ad=_0x55137b;$gameTimer[_0x5655ad(0x6ad)](0x0);}),PluginManager['registerCommand'](pluginData['name'],'EventTimerFramesGain',_0x18597d=>{const _0x3a2e93=_0x55137b;if(!$gameTimer['isWorking']())return;VisuMZ['ConvertParams'](_0x18597d,_0x18597d);let _0x1e58fb=0x0;_0x1e58fb+=_0x18597d[_0x3a2e93(0x2f7)],_0x1e58fb+=_0x18597d[_0x3a2e93(0x265)]*0x3c,_0x1e58fb+=_0x18597d[_0x3a2e93(0x576)]*0x3c*0x3c,_0x1e58fb+=_0x18597d[_0x3a2e93(0x3c0)]*0x3c*0x3c*0x3c,$gameTimer[_0x3a2e93(0x308)](_0x1e58fb);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x32c),_0x420de5=>{const _0x599ddc=_0x55137b;if(!$gameTimer[_0x599ddc(0x295)]())return;VisuMZ[_0x599ddc(0x53d)](_0x420de5,_0x420de5);let _0x5a37d0=0x0;_0x5a37d0+=_0x420de5[_0x599ddc(0x2f7)],_0x5a37d0+=_0x420de5[_0x599ddc(0x265)]*0x3c,_0x5a37d0+=_0x420de5['Minutes']*0x3c*0x3c,_0x5a37d0+=_0x420de5[_0x599ddc(0x3c0)]*0x3c*0x3c*0x3c,$gameTimer[_0x599ddc(0x6f8)](_0x5a37d0);}),PluginManager['registerCommand'](pluginData[_0x55137b(0x347)],'EventTimerPause',_0x579293=>{const _0x65411d=_0x55137b;if(!$gameTimer[_0x65411d(0x295)]())return;$gameTimer['pause']();}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],'EventTimerResume',_0x51a028=>{const _0x250d40=_0x55137b;if(!$gameTimer[_0x250d40(0x295)]())return;$gameTimer[_0x250d40(0x6b9)]();}),PluginManager[_0x55137b(0x3e5)](pluginData['name'],_0x55137b(0x4ec),_0x328cd6=>{const _0x14a7df=_0x55137b;VisuMZ['ConvertParams'](_0x328cd6,_0x328cd6);const _0x5d83ea=_0x328cd6[_0x14a7df(0x2e2)]||0x0;$gameTimer[_0x14a7df(0x1fb)](_0x5d83ea);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x528),_0x64f91=>{const _0x40a0e6=_0x55137b;VisuMZ[_0x40a0e6(0x53d)](_0x64f91,_0x64f91);const _0x2be39e=!_0x64f91[_0x40a0e6(0x446)];$gameSystem['setStopFollowerChasing'](_0x2be39e);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x3ce),_0xc2fd1=>{const _0x2464aa=_0x55137b;VisuMZ['ConvertParams'](_0xc2fd1,_0xc2fd1);const _0x5ba2fa=(_0xc2fd1[_0x2464aa(0x62c)]||0x0)-0x1,_0x208551=!_0xc2fd1[_0x2464aa(0x446)],_0x5cce6f=$gamePlayer[_0x2464aa(0x60c)]()[_0x2464aa(0x26b)](_0x5ba2fa);if(_0x5cce6f)_0x5cce6f[_0x2464aa(0x26f)](_0x208551);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x57f),_0x2140ca=>{const _0x36eb70=_0x55137b;VisuMZ[_0x36eb70(0x53d)](_0x2140ca,_0x2140ca);const _0x4e8b6f=_0x2140ca['FollowerID'];$gameSystem[_0x36eb70(0x257)](_0x4e8b6f);}),PluginManager['registerCommand'](pluginData[_0x55137b(0x347)],_0x55137b(0x6fa),_0x56eecb=>{const _0x4c9588=_0x55137b;VisuMZ[_0x4c9588(0x53d)](_0x56eecb,_0x56eecb),$gameSystem[_0x4c9588(0x257)](0x0),$gameSystem[_0x4c9588(0x34d)](![]);for(const _0x416ae5 of $gamePlayer[_0x4c9588(0x60c)]()[_0x4c9588(0x4f4)]){if(_0x4c9588(0x670)===_0x4c9588(0x670)){if(_0x416ae5)_0x416ae5['setChaseOff'](![]);}else return this[_0x4c9588(0x641)]();}}),PluginManager['registerCommand'](pluginData[_0x55137b(0x347)],_0x55137b(0x674),_0x5e3f92=>{const _0x5d4875=_0x55137b;VisuMZ[_0x5d4875(0x53d)](_0x5e3f92,_0x5e3f92);const _0x3d89c2=$gameTemp[_0x5d4875(0x2e1)]();_0x5e3f92['MapId']=_0x5e3f92[_0x5d4875(0x4fa)]||$gameMap[_0x5d4875(0x517)]();const _0x190d8e=[_0x5e3f92[_0x5d4875(0x4fa)],_0x5e3f92[_0x5d4875(0x6b8)]||_0x3d89c2[_0x5d4875(0x506)](),_0x5e3f92[_0x5d4875(0x29b)]],_0x1a3989=_0x5e3f92[_0x5d4875(0x6ec)],_0x6fc953=$gameSelfSwitches['value'](_0x190d8e)||![];$gameSwitches[_0x5d4875(0x464)](_0x1a3989,_0x6fc953);}),PluginManager['registerCommand'](pluginData[_0x55137b(0x347)],'SwitchGetSelfSwitchID',_0x823bb9=>{const _0x141b81=_0x55137b;VisuMZ['ConvertParams'](_0x823bb9,_0x823bb9);const _0x5e8097=$gameTemp[_0x141b81(0x2e1)]();_0x823bb9[_0x141b81(0x4fa)]=_0x823bb9[_0x141b81(0x4fa)]||$gameMap[_0x141b81(0x517)]();const _0x588d1a=[_0x823bb9[_0x141b81(0x4fa)],_0x823bb9[_0x141b81(0x6b8)]||_0x5e8097[_0x141b81(0x506)](),'Self\x20Switch\x20%1'[_0x141b81(0x69f)](_0x823bb9['SwitchId'])],_0xd65b24=_0x823bb9['TargetSwitchId'],_0x1358af=$gameSelfSwitches[_0x141b81(0x67e)](_0x588d1a)||![];$gameSwitches[_0x141b81(0x464)](_0xd65b24,_0x1358af);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x3ff),_0x5f5300=>{const _0x2cb36f=_0x55137b;VisuMZ[_0x2cb36f(0x53d)](_0x5f5300,_0x5f5300);const _0x1280db=$gameTemp[_0x2cb36f(0x2e1)]();_0x5f5300[_0x2cb36f(0x4fa)]=_0x5f5300['MapId']||$gameMap[_0x2cb36f(0x517)]();const _0x593478=[_0x5f5300[_0x2cb36f(0x4fa)],_0x5f5300[_0x2cb36f(0x6b8)]||_0x1280db[_0x2cb36f(0x506)](),_0x2cb36f(0x60f)[_0x2cb36f(0x69f)](_0x5f5300[_0x2cb36f(0x658)])],_0x329ebb=_0x5f5300['TargetVariableId'],_0x5d473c=$gameSelfSwitches['value'](_0x593478)||![];$gameVariables[_0x2cb36f(0x464)](_0x329ebb,_0x5d473c);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x38b),_0x436884=>{const _0x3af481=_0x55137b;VisuMZ['ConvertParams'](_0x436884,_0x436884);if(!$gameMap)return;const _0x1b1660=$gameTemp[_0x3af481(0x2e1)](),_0x41e530=_0x436884[_0x3af481(0x656)];_0x436884['Step1MapId']=_0x436884['Step1MapId']||$gameMap['mapId'](),_0x436884[_0x3af481(0x5b0)]=_0x436884['Step2MapId']||$gameMap[_0x3af481(0x517)](),_0x436884[_0x3af481(0x716)]=_0x436884[_0x3af481(0x716)][_0x3af481(0x557)]()[_0x3af481(0x5d3)]();if(!_0x41e530&&_0x436884[_0x3af481(0x345)]!==$gameMap[_0x3af481(0x517)]())return;if($gameMap[_0x3af481(0x517)]()===_0x436884[_0x3af481(0x345)]){const _0x3bed49=$gameMap[_0x3af481(0x52c)](_0x436884[_0x3af481(0x578)]||_0x1b1660['eventId']());if(!_0x3bed49)return;if(_0x436884[_0x3af481(0x716)]!==_0x3af481(0x3cd)){if('tKVqj'!==_0x3af481(0x55d))_0x3bed49[_0x3af481(0x6fb)](_0x436884[_0x3af481(0x716)]);else{const _0x37ccf2=this[_0x3af481(0x4f3)](this[_0x3af481(0x69a)]());return _0x30fac3[_0x3af481(0x47d)](this['y'],_0x37ccf2);}}else _0x3bed49['morphInto'](_0x436884[_0x3af481(0x5b0)],_0x436884[_0x3af481(0x652)]||_0x1b1660[_0x3af481(0x506)]());}if(_0x41e530){if(_0x3af481(0x4b2)!==_0x3af481(0x4b2))return _0xdf1e4f[_0x3af481(0x2a6)][_0x3af481(0x6b0)][_0x3af481(0x24a)](this);else $gameSystem[_0x3af481(0x441)](_0x436884['Step1MapId'],_0x436884[_0x3af481(0x578)],_0x436884['TemplateName'],_0x436884[_0x3af481(0x5b0)],_0x436884[_0x3af481(0x652)]);}}),PluginManager['registerCommand'](pluginData[_0x55137b(0x347)],_0x55137b(0x54a),_0x180371=>{const _0x3d33a0=_0x55137b;VisuMZ[_0x3d33a0(0x53d)](_0x180371,_0x180371);if(!$gameMap)return;const _0x15ad92=$gameTemp[_0x3d33a0(0x2e1)]();_0x180371[_0x3d33a0(0x4fa)]=_0x180371[_0x3d33a0(0x4fa)]||$gameMap['mapId']();if($gameMap[_0x3d33a0(0x517)]()===_0x180371['MapId']){const _0x4e89da=$gameMap[_0x3d33a0(0x52c)](_0x180371['EventId']||_0x15ad92[_0x3d33a0(0x506)]());_0x4e89da['removeMorph']();}_0x180371['RemovePreserve']&&$gameSystem[_0x3d33a0(0x349)](_0x180371[_0x3d33a0(0x4fa)],_0x180371[_0x3d33a0(0x6b8)]||_0x15ad92[_0x3d33a0(0x506)]());}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x40f),_0x390476=>{const _0x421a81=_0x55137b;VisuMZ[_0x421a81(0x53d)](_0x390476,_0x390476),$gameSystem[_0x421a81(0x6c1)]($gamePlayer,_0x390476[_0x421a81(0x6c0)],_0x390476[_0x421a81(0x6f2)],_0x390476[_0x421a81(0x4be)],_0x390476[_0x421a81(0x2d0)]);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x406),_0x52b459=>{const _0x5e8da8=_0x55137b;VisuMZ['ConvertParams'](_0x52b459,_0x52b459),$gameSystem[_0x5e8da8(0x718)]($gamePlayer);}),PluginManager[_0x55137b(0x3e5)](pluginData['name'],'PlayerMovementChange',_0x452a1f=>{const _0x560551=_0x55137b;VisuMZ['ConvertParams'](_0x452a1f,_0x452a1f),$gameSystem[_0x560551(0x219)](!_0x452a1f[_0x560551(0x2d2)]);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],'PlayerMovementDiagonal',_0xbccea7=>{const _0x101c29=_0x55137b;VisuMZ[_0x101c29(0x53d)](_0xbccea7,_0xbccea7),$gameSystem[_0x101c29(0x427)](_0xbccea7[_0x101c29(0x41b)]);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x6d8),_0x4f82c5=>{const _0x43e401=_0x55137b;VisuMZ[_0x43e401(0x53d)](_0x4f82c5,_0x4f82c5);const _0x30c60f=_0x4f82c5[_0x43e401(0x4fa)]||$gameMap['mapId']();$gameSelfSwitches[_0x43e401(0x4d1)](_0x30c60f);}),PluginManager['registerCommand'](pluginData[_0x55137b(0x347)],_0x55137b(0x284),_0x2f263e=>{const _0x15929b=_0x55137b;VisuMZ[_0x15929b(0x53d)](_0x2f263e,_0x2f263e);const _0x1a898b=$gameTemp[_0x15929b(0x2e1)]();_0x2f263e['MapId']=_0x2f263e[_0x15929b(0x4fa)]||$gameMap[_0x15929b(0x517)]();const _0x20cbcd=[_0x2f263e['MapId'],_0x2f263e[_0x15929b(0x6b8)]||_0x1a898b[_0x15929b(0x506)](),_0x2f263e[_0x15929b(0x29b)]];switch(_0x2f263e[_0x15929b(0x4e9)]){case'ON':$gameSelfSwitches[_0x15929b(0x464)](_0x20cbcd,!![]);break;case _0x15929b(0x385):$gameSelfSwitches[_0x15929b(0x464)](_0x20cbcd,![]);break;case _0x15929b(0x4fc):$gameSelfSwitches[_0x15929b(0x464)](_0x20cbcd,!$gameSelfSwitches[_0x15929b(0x67e)](_0x20cbcd));break;}}),PluginManager['registerCommand'](pluginData['name'],'SelfSwitchID',_0x4c9da4=>{const _0x332a1d=_0x55137b;VisuMZ['ConvertParams'](_0x4c9da4,_0x4c9da4);const _0x29dfe5=$gameTemp[_0x332a1d(0x2e1)]();_0x4c9da4[_0x332a1d(0x4fa)]=_0x4c9da4[_0x332a1d(0x4fa)]||$gameMap['mapId']();const _0x458aa5=[_0x4c9da4['MapId'],_0x4c9da4[_0x332a1d(0x6b8)]||_0x29dfe5[_0x332a1d(0x506)](),_0x332a1d(0x44f)[_0x332a1d(0x69f)](_0x4c9da4['SwitchId'])];switch(_0x4c9da4['Value']){case'ON':$gameSelfSwitches[_0x332a1d(0x464)](_0x458aa5,!![]);break;case _0x332a1d(0x385):$gameSelfSwitches[_0x332a1d(0x464)](_0x458aa5,![]);break;case _0x332a1d(0x4fc):$gameSelfSwitches[_0x332a1d(0x464)](_0x458aa5,!$gameSelfSwitches[_0x332a1d(0x67e)](_0x458aa5));break;}}),PluginManager[_0x55137b(0x3e5)](pluginData['name'],_0x55137b(0x2c4),_0x498ab8=>{const _0x44058e=_0x55137b;VisuMZ[_0x44058e(0x53d)](_0x498ab8,_0x498ab8);const _0x1e8af5=$gameTemp[_0x44058e(0x2e1)]();_0x498ab8[_0x44058e(0x4fa)]=_0x498ab8[_0x44058e(0x4fa)]||$gameMap[_0x44058e(0x517)]();const _0x29fea8=[_0x498ab8['MapId'],_0x498ab8[_0x44058e(0x6b8)]||_0x1e8af5[_0x44058e(0x506)](),_0x44058e(0x60f)[_0x44058e(0x69f)](_0x498ab8['VariableId'])],_0x4910b9=VisuMZ[_0x44058e(0x4e7)]($gameSelfSwitches[_0x44058e(0x67e)](_0x29fea8),_0x498ab8['Value'],_0x498ab8[_0x44058e(0x6ba)]);$gameSelfSwitches['setValue'](_0x29fea8,_0x4910b9);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x562),_0x5afbbd=>{const _0x72b72f=_0x55137b;VisuMZ['ConvertParams'](_0x5afbbd,_0x5afbbd);const _0x532be8=$gameTemp[_0x72b72f(0x2e1)](),_0x5b1654={'template':_0x5afbbd[_0x72b72f(0x716)],'mapId':_0x5afbbd[_0x72b72f(0x4fa)]||$gameMap[_0x72b72f(0x517)](),'eventId':_0x5afbbd[_0x72b72f(0x6b8)]||_0x532be8[_0x72b72f(0x506)](),'x':_0x5afbbd[_0x72b72f(0x401)],'y':_0x5afbbd[_0x72b72f(0x2b0)],'spawnPreserved':_0x5afbbd['Preserve'],'spawnEventId':$gameMap[_0x72b72f(0x728)]['length']+0x3e8},_0x16437d=_0x5afbbd[_0x72b72f(0x218)]||0x0;if(!VisuMZ[_0x72b72f(0x1fd)][_0x5b1654[_0x72b72f(0x517)]]&&_0x5b1654['mapId']!==$gameMap[_0x72b72f(0x517)]()){if('iClxi'!==_0x72b72f(0x258))return this[_0x72b72f(0x29c)](_0x297225(_0x54845d['$1']),_0xeaecda(_0x2e3c22['$2']));else{let _0x25bf83=_0x72b72f(0x371)['format'](_0x5b1654['mapId']);_0x25bf83+='of\x20Preloaded\x20Maps.\x0a\x0a',_0x25bf83+='Set\x20this\x20up\x20in\x20Events\x20&\x20Movement\x20Core\x27s\x0a',_0x25bf83+=_0x72b72f(0x5e4),_0x25bf83+=_0x72b72f(0x5d9)[_0x72b72f(0x69f)](_0x5b1654[_0x72b72f(0x517)]),alert(_0x25bf83);return;}}const _0x64a892=$gameMap[_0x72b72f(0x269)](_0x5b1654,_0x5afbbd[_0x72b72f(0x51e)],_0x5afbbd[_0x72b72f(0x2be)]);_0x16437d&&$gameSwitches['setValue'](_0x16437d,!!_0x64a892);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x283),_0x11010a=>{const _0x1dae1c=_0x55137b;VisuMZ['ConvertParams'](_0x11010a,_0x11010a);const _0x4bbc6b=$gameTemp[_0x1dae1c(0x2e1)](),_0x59c99c={'template':_0x11010a[_0x1dae1c(0x716)],'mapId':_0x11010a['MapId']||$gameMap[_0x1dae1c(0x517)](),'eventId':_0x11010a[_0x1dae1c(0x6b8)]||_0x4bbc6b[_0x1dae1c(0x506)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x11010a[_0x1dae1c(0x67b)],'spawnEventId':$gameMap[_0x1dae1c(0x728)][_0x1dae1c(0x730)]+0x3e8},_0x35f021=_0x11010a[_0x1dae1c(0x218)]||0x0;if(!VisuMZ['PreloadedMaps'][_0x59c99c[_0x1dae1c(0x517)]]&&_0x59c99c[_0x1dae1c(0x517)]!==$gameMap['mapId']()){if(_0x1dae1c(0x55a)===_0x1dae1c(0x55a)){let _0xd19583=_0x1dae1c(0x371)['format'](_0x59c99c['mapId']);_0xd19583+=_0x1dae1c(0x63a),_0xd19583+='Set\x20this\x20up\x20in\x20Events\x20&\x20Movement\x20Core\x27s\x0a',_0xd19583+=_0x1dae1c(0x5e4),_0xd19583+=_0x1dae1c(0x5d9)[_0x1dae1c(0x69f)](_0x59c99c[_0x1dae1c(0x517)]),alert(_0xd19583);return;}else return this[_0x1dae1c(0x28f)]()?(this[_0x1dae1c(0x6cc)]||'')[_0x1dae1c(0x557)]()[_0x1dae1c(0x5d3)]():''[_0x1dae1c(0x557)]()['trim']();}const _0x7a07c8=$gameMap[_0x1dae1c(0x4ab)](_0x59c99c,_0x11010a[_0x1dae1c(0x6eb)],_0x11010a[_0x1dae1c(0x51e)],_0x11010a[_0x1dae1c(0x2be)]);_0x35f021&&('Bfppm'==='Bfppm'?$gameSwitches['setValue'](_0x35f021,!!_0x7a07c8):_0x2ab47e[_0x1dae1c(0x36a)][_0x1dae1c(0x696)](_0x57b35d));}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x435),_0x5b2f3a=>{const _0x4cb5f1=_0x55137b;VisuMZ[_0x4cb5f1(0x53d)](_0x5b2f3a,_0x5b2f3a);const _0x877e3f=$gameTemp[_0x4cb5f1(0x2e1)](),_0x4ae8b0={'template':_0x5b2f3a[_0x4cb5f1(0x716)],'mapId':_0x5b2f3a['MapId']||$gameMap[_0x4cb5f1(0x517)](),'eventId':_0x5b2f3a[_0x4cb5f1(0x6b8)]||_0x877e3f['eventId'](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x5b2f3a[_0x4cb5f1(0x67b)],'spawnEventId':$gameMap[_0x4cb5f1(0x728)][_0x4cb5f1(0x730)]+0x3e8},_0x30d758=_0x5b2f3a['SuccessSwitchId']||0x0;if(!VisuMZ[_0x4cb5f1(0x1fd)][_0x4ae8b0[_0x4cb5f1(0x517)]]&&_0x4ae8b0[_0x4cb5f1(0x517)]!==$gameMap[_0x4cb5f1(0x517)]()){let _0x43fce2=_0x4cb5f1(0x371)[_0x4cb5f1(0x69f)](_0x4ae8b0[_0x4cb5f1(0x517)]);_0x43fce2+=_0x4cb5f1(0x63a),_0x43fce2+=_0x4cb5f1(0x5ca),_0x43fce2+=_0x4cb5f1(0x5e4),_0x43fce2+=_0x4cb5f1(0x5d9)[_0x4cb5f1(0x69f)](_0x4ae8b0[_0x4cb5f1(0x517)]),alert(_0x43fce2);return;}const _0x2ec1d1=$gameMap[_0x4cb5f1(0x699)](_0x4ae8b0,_0x5b2f3a['TerrainTags'],_0x5b2f3a[_0x4cb5f1(0x51e)],_0x5b2f3a[_0x4cb5f1(0x2be)]);_0x30d758&&$gameSwitches['setValue'](_0x30d758,!!_0x2ec1d1);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],'SpawnEventDespawnEventID',_0x498ffc=>{const _0x1e8cff=_0x55137b;VisuMZ['ConvertParams'](_0x498ffc,_0x498ffc);const _0x590ebb=$gameTemp[_0x1e8cff(0x2e1)]();$gameMap[_0x1e8cff(0x335)](_0x498ffc['EventID']||_0x590ebb['eventId']());}),PluginManager[_0x55137b(0x3e5)](pluginData['name'],_0x55137b(0x29d),_0x52a9a6=>{const _0x20ef21=_0x55137b;VisuMZ[_0x20ef21(0x53d)](_0x52a9a6,_0x52a9a6);const _0x5062b5=_0x52a9a6['PosX'],_0x2ea44b=_0x52a9a6[_0x20ef21(0x2b0)];$gameMap[_0x20ef21(0x2bd)](_0x5062b5,_0x2ea44b);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],'SpawnEventDespawnRegions',_0x443d12=>{const _0x4d507b=_0x55137b;VisuMZ[_0x4d507b(0x53d)](_0x443d12,_0x443d12),$gameMap[_0x4d507b(0x2f0)](_0x443d12[_0x4d507b(0x6eb)]);}),PluginManager[_0x55137b(0x3e5)](pluginData['name'],'SpawnEventDespawnTerrainTags',_0x189b96=>{const _0x1294aa=_0x55137b;VisuMZ['ConvertParams'](_0x189b96,_0x189b96),$gameMap[_0x1294aa(0x2b9)](_0x189b96['TerrainTags']);}),PluginManager[_0x55137b(0x3e5)](pluginData[_0x55137b(0x347)],_0x55137b(0x667),_0x2f9142=>{const _0x488ace=_0x55137b;VisuMZ[_0x488ace(0x53d)](_0x2f9142,_0x2f9142),$gameMap[_0x488ace(0x6b4)]();}),VisuMZ['EventsMoveCore'][_0x55137b(0x707)]=Scene_Boot[_0x55137b(0x65a)][_0x55137b(0x503)],Scene_Boot['prototype'][_0x55137b(0x503)]=function(){const _0x164fe9=_0x55137b;VisuMZ[_0x164fe9(0x2a6)]['Scene_Boot_onDatabaseLoaded']['call'](this),this[_0x164fe9(0x608)](),this[_0x164fe9(0x66a)]();if(VisuMZ['EventsMoveCore'][_0x164fe9(0x3f0)])VisuMZ[_0x164fe9(0x2a6)]['CustomPageConditions']['initialize']();},VisuMZ[_0x55137b(0x1fd)]=[],VisuMZ['EventTemplates']={},Scene_Boot['prototype']['process_VisuMZ_EventsMoveCore_LoadTemplateMaps']=function(){const _0x1f1439=_0x55137b;if(DataManager[_0x1f1439(0x63f)]()||DataManager[_0x1f1439(0x3b8)]())return;const _0x3567e7=VisuMZ['EventsMoveCore'][_0x1f1439(0x6ea)][_0x1f1439(0x332)],_0x351dc9=_0x3567e7[_0x1f1439(0x2a0)][_0x1f1439(0x4fe)](0x0);for(const _0x52d343 of _0x3567e7[_0x1f1439(0x60e)]){_0x52d343[_0x1f1439(0x423)]=_0x52d343['Name'][_0x1f1439(0x557)]()[_0x1f1439(0x5d3)](),VisuMZ[_0x1f1439(0x495)][_0x52d343[_0x1f1439(0x423)]]=_0x52d343;if(!_0x351dc9[_0x1f1439(0x23b)](_0x52d343[_0x1f1439(0x359)]))_0x351dc9[_0x1f1439(0x696)](_0x52d343[_0x1f1439(0x359)]);}for(const _0x721e75 of _0x351dc9){if(_0x1f1439(0x47a)===_0x1f1439(0x56f))while(this[_0x1f1439(0x250)]()){this[_0x1f1439(0x453)](_0x50b4d6);}else{if(VisuMZ['PreloadedMaps'][_0x721e75])continue;const _0x14116e=_0x1f1439(0x455)[_0x1f1439(0x69f)](_0x721e75[_0x1f1439(0x2fb)](0x3)),_0x3e895f='$preloadedMap_%1'[_0x1f1439(0x69f)](_0x721e75);DataManager[_0x1f1439(0x2db)](_0x3e895f,_0x14116e),setTimeout(this['VisuMZ_Setup_Preload_Map'][_0x1f1439(0x65e)](this,_0x721e75,_0x3e895f),0x64);}}},Scene_Boot[_0x55137b(0x65a)][_0x55137b(0x42d)]=function(_0x30ef1e,_0x1d2673){const _0x462765=_0x55137b;window[_0x1d2673]?(VisuMZ[_0x462765(0x1fd)][_0x30ef1e]=window[_0x1d2673],window[_0x1d2673]=undefined):'JXjyM'!==_0x462765(0x620)?_0x358f08=0x6:setTimeout(this['VisuMZ_Setup_Preload_Map'][_0x462765(0x65e)](this,_0x30ef1e,_0x1d2673),0x64);},VisuMZ[_0x55137b(0x4de)]=[],VisuMZ[_0x55137b(0x35e)]=[],VisuMZ[_0x55137b(0x24f)]=[],VisuMZ[_0x55137b(0x613)]=[],VisuMZ[_0x55137b(0x4a5)]=[],VisuMZ['MapVariables']=[],Scene_Boot[_0x55137b(0x65a)]['process_VisuMZ_EventsMoveCore_Switches_Variables']=function(){const _0x5c2a2d=_0x55137b;for(let _0x38c89d=0x1;_0x38c89d<$dataSystem[_0x5c2a2d(0x467)][_0x5c2a2d(0x730)];_0x38c89d++){if($dataSystem[_0x5c2a2d(0x467)][_0x38c89d][_0x5c2a2d(0x614)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x5c2a2d(0x4de)]['push'](_0x38c89d);if($dataSystem[_0x5c2a2d(0x467)][_0x38c89d][_0x5c2a2d(0x614)](/<SELF>/i))VisuMZ[_0x5c2a2d(0x35e)][_0x5c2a2d(0x696)](_0x38c89d);if($dataSystem[_0x5c2a2d(0x467)][_0x38c89d][_0x5c2a2d(0x614)](/<MAP>/i))VisuMZ[_0x5c2a2d(0x24f)][_0x5c2a2d(0x696)](_0x38c89d);}for(let _0x466e03=0x1;_0x466e03<$dataSystem[_0x5c2a2d(0x209)][_0x5c2a2d(0x730)];_0x466e03++){if($dataSystem['variables'][_0x466e03]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x5c2a2d(0x613)][_0x5c2a2d(0x696)](_0x466e03);if($dataSystem[_0x5c2a2d(0x209)][_0x466e03][_0x5c2a2d(0x614)](/<SELF>/i))VisuMZ['SelfVariables'][_0x5c2a2d(0x696)](_0x466e03);if($dataSystem['variables'][_0x466e03][_0x5c2a2d(0x614)](/<MAP>/i))VisuMZ['MapVariables'][_0x5c2a2d(0x696)](_0x466e03);}},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x3f0)]={},VisuMZ['EventsMoveCore']['CustomPageConditions']['initialize']=function(){const _0xbecfb7=_0x55137b;this[_0xbecfb7(0x38a)]=new Game_CPCInterpreter(),this['determineCommonEventsWithCPC']();},VisuMZ[_0x55137b(0x2a6)]['CustomPageConditions'][_0x55137b(0x49a)]=function(){const _0x1602c9=_0x55137b;this[_0x1602c9(0x3ab)]=[];for(const _0x373819 of $dataCommonEvents){if(!_0x373819)continue;VisuMZ[_0x1602c9(0x2a6)][_0x1602c9(0x3f0)][_0x1602c9(0x328)](_0x373819);if(_0x373819[_0x1602c9(0x36a)][_0x1602c9(0x730)]>0x0)this[_0x1602c9(0x3ab)][_0x1602c9(0x696)](_0x373819['id']);}},VisuMZ[_0x55137b(0x2a6)]['CustomPageConditions'][_0x55137b(0x388)]=function(_0x3975d6,_0x2a5747,_0x13e2a5){const _0x594cf0=_0x55137b;return this[_0x594cf0(0x38a)][_0x594cf0(0x56c)](_0x3975d6,_0x2a5747),_0x13e2a5?this[_0x594cf0(0x38a)][_0x594cf0(0x386)](_0x13e2a5):this['_interpreter'][_0x594cf0(0x4df)](),this[_0x594cf0(0x38a)][_0x594cf0(0x357)];},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x3f0)][_0x55137b(0x328)]=function(_0x5ee084){const _0x4d755c=_0x55137b;let _0x521f2e=![];_0x5ee084[_0x4d755c(0x36a)]=[];for(const _0xa78018 of _0x5ee084[_0x4d755c(0x6fe)]){if([0x6c,0x198][_0x4d755c(0x23b)](_0xa78018[_0x4d755c(0x5ac)])){if(_0x4d755c(0x6d0)!==_0x4d755c(0x5aa)){const _0x5609ca=_0xa78018[_0x4d755c(0x62d)][0x0];if(_0x5609ca[_0x4d755c(0x614)](/<PAGE (?:CONDITION|CONDITIONS)>/i))'WBHzG'!==_0x4d755c(0x59c)?_0x38d9e9&&(_0x5502dd[_0x4d755c(0x43e)]=_0x564ce7,_0x490db4[_0x4d755c(0x28e)]()):_0x521f2e=!![];else _0x5609ca['match'](/<\/PAGE (?:CONDITION|CONDITIONS)>/i)&&(_0x521f2e=![]);}else this['x']+=_0x4d1baa[_0x4d755c(0x2a6)][_0x4d755c(0x6ea)][_0x4d755c(0x4a3)]['BalloonOffsetX'],this['y']+=_0x4c85d1[_0x4d755c(0x2a6)][_0x4d755c(0x6ea)][_0x4d755c(0x4a3)][_0x4d755c(0x45c)];}_0x521f2e&&_0x5ee084[_0x4d755c(0x36a)][_0x4d755c(0x696)](_0xa78018);}},getSelfSwitchValue=function(_0x1fe0e2,_0x24d3f6,_0xd962db){const _0x5090a3=_0x55137b;let _0x53af13=[_0x1fe0e2,_0x24d3f6,_0x5090a3(0x44f)[_0x5090a3(0x69f)](_0xd962db)];return typeof _0xd962db===_0x5090a3(0x48c)&&(_0x53af13=[_0x1fe0e2,_0x24d3f6,_0xd962db[_0x5090a3(0x557)]()['trim']()]),$gameSelfSwitches['value'](_0x53af13);},getMapSwitchValue=function(_0x16845f,_0x463333){const _0x3969b0=_0x55137b;let _0x10a934=[0x0,0x0,_0x3969b0(0x5f5)[_0x3969b0(0x69f)](_0x16845f,_0x463333)];return $gameSelfSwitches['value'](_0x10a934);},getMapVariableValue=function(_0x129593,_0x1d0b99){const _0x324868=_0x55137b;let _0x30655e=[0x0,0x0,_0x324868(0x3ec)[_0x324868(0x69f)](_0x129593,_0x1d0b99)];return $gameSelfSwitches[_0x324868(0x67e)](_0x30655e);},getSelfVariableValue=function(_0x33b3cb,_0x316f23,_0x25b317){const _0x580e12=_0x55137b,_0x18a979=[_0x33b3cb,_0x316f23,_0x580e12(0x60f)[_0x580e12(0x69f)](_0x25b317)];return $gameSelfSwitches['value'](_0x18a979);},setSelfSwitchValue=function(_0x3f6156,_0x1b797f,_0x47ff84,_0x568914){const _0x522b94=_0x55137b;let _0x5eb1fc=[_0x3f6156,_0x1b797f,'Self\x20Switch\x20%1'[_0x522b94(0x69f)](_0x47ff84)];typeof _0x47ff84==='string'&&(_0x5eb1fc=[_0x3f6156,_0x1b797f,_0x47ff84[_0x522b94(0x557)]()[_0x522b94(0x5d3)]()]),$gameSelfSwitches[_0x522b94(0x464)](_0x5eb1fc,_0x568914);},setSelfVariableValue=function(_0x5a012a,_0x155a8b,_0x3b5aee,_0x2bfc69){const _0x2fa7df=_0x55137b,_0x24425a=[_0x5a012a,_0x155a8b,_0x2fa7df(0x60f)[_0x2fa7df(0x69f)](_0x3b5aee)];$gameSelfSwitches[_0x2fa7df(0x464)](_0x24425a,_0x2bfc69);},setMapSwitchValue=function(_0x29c4f5,_0x51dd7d,_0x2c344f){const _0x1db3d3=_0x55137b;let _0x472b64=[0x0,0x0,'Map\x20%1\x20Switch\x20%2'[_0x1db3d3(0x69f)](_0x29c4f5,_0x51dd7d)];$gameSelfSwitches[_0x1db3d3(0x464)](_0x472b64,_0x2c344f);},setMapVariableValue=function(_0x2b03c4,_0x25bb9a,_0x1f4052){const _0x5c0728=_0x55137b;let _0x361df2=[0x0,0x0,_0x5c0728(0x3ec)['format'](_0x2b03c4,_0x25bb9a)];$gameSelfSwitches[_0x5c0728(0x464)](_0x361df2,_0x1f4052);},DataManager[_0x55137b(0x31b)]=function(_0x435149){const _0x244456=_0x55137b;if(SceneManager[_0x244456(0x316)]['constructor']===Scene_Debug)return![];return VisuMZ['AdvancedSwitches'][_0x244456(0x23b)](_0x435149);},DataManager[_0x55137b(0x2dc)]=function(_0x1f0511){const _0x21d3d4=_0x55137b;if(SceneManager[_0x21d3d4(0x316)][_0x21d3d4(0x514)]===Scene_Debug)return![];return VisuMZ[_0x21d3d4(0x613)]['includes'](_0x1f0511);},DataManager[_0x55137b(0x220)]=function(_0xdb02d9){const _0xb97a81=_0x55137b;if(SceneManager[_0xb97a81(0x316)][_0xb97a81(0x514)]===Scene_Debug)return![];return VisuMZ[_0xb97a81(0x35e)][_0xb97a81(0x23b)](_0xdb02d9);},DataManager[_0x55137b(0x398)]=function(_0x51c03e){const _0x2fd743=_0x55137b;if(SceneManager[_0x2fd743(0x316)][_0x2fd743(0x514)]===Scene_Debug)return![];return VisuMZ[_0x2fd743(0x4a5)][_0x2fd743(0x23b)](_0x51c03e);},DataManager['isMapSwitch']=function(_0x4ebc49){const _0x1d0335=_0x55137b;if(BattleManager['isBattleTest']())return![];return VisuMZ['MapSwitches'][_0x1d0335(0x23b)](_0x4ebc49);},DataManager[_0x55137b(0x22b)]=function(_0x385615){const _0x5a7ec7=_0x55137b;if(BattleManager[_0x5a7ec7(0x63f)]())return![];return VisuMZ[_0x5a7ec7(0x37b)][_0x5a7ec7(0x23b)](_0x385615);},SceneManager[_0x55137b(0x69c)]=function(){const _0x108643=_0x55137b;return this['_scene']&&this['_scene'][_0x108643(0x514)]===Scene_Map;},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x234)]=Game_Temp['prototype'][_0x55137b(0x2d6)],Game_Temp[_0x55137b(0x65a)][_0x55137b(0x2d6)]=function(_0x5166ee,_0x1d0223){const _0x57d333=_0x55137b;if(this[_0x57d333(0x286)](_0x5166ee,_0x1d0223))return;VisuMZ[_0x57d333(0x2a6)][_0x57d333(0x234)][_0x57d333(0x24a)](this,_0x5166ee,_0x1d0223);},Game_Temp[_0x55137b(0x65a)][_0x55137b(0x286)]=function(_0x5118d4,_0x5bf493){const _0x3f9c7b=_0x55137b,_0x997fc=$gameMap[_0x3f9c7b(0x473)](_0x5118d4,_0x5bf493);for(const _0x419a64 of _0x997fc){if(_0x419a64&&_0x419a64[_0x3f9c7b(0x3a6)]()){if(_0x3f9c7b(0x4a8)!==_0x3f9c7b(0x494))return _0x419a64['onClickTrigger'](),!![];else this[_0x3f9c7b(0x341)][_0x3f9c7b(0x278)]=_0x2eb44d(_0x431823['$1']);}}return TouchInput[_0x3f9c7b(0x45f)]()&&_0x997fc[_0x3f9c7b(0x730)]>0x0&&TouchInput[_0x3f9c7b(0x2e6)](),![];},Game_Temp[_0x55137b(0x65a)][_0x55137b(0x438)]=function(_0x4e411f){const _0x4cad23=_0x55137b;this[_0x4cad23(0x3c5)]=_0x4e411f;},Game_Temp['prototype'][_0x55137b(0x2e1)]=function(){const _0x404314=_0x55137b;return this[_0x404314(0x3c5)];},Game_Temp[_0x55137b(0x65a)][_0x55137b(0x2f9)]=function(_0x9d105){const _0x46d31e=_0x55137b;this[_0x46d31e(0x520)]=_0x9d105;},Game_Temp['prototype'][_0x55137b(0x319)]=function(){const _0x1001c8=_0x55137b;this[_0x1001c8(0x520)]=undefined;},Game_Temp[_0x55137b(0x65a)][_0x55137b(0x39b)]=function(){const _0x2154d7=_0x55137b;return this[_0x2154d7(0x520)];},VisuMZ[_0x55137b(0x2a6)]['Game_System_initialize']=Game_System['prototype'][_0x55137b(0x483)],Game_System[_0x55137b(0x65a)][_0x55137b(0x483)]=function(){const _0x5b53f9=_0x55137b;VisuMZ['EventsMoveCore'][_0x5b53f9(0x370)][_0x5b53f9(0x24a)](this),this['initEventsMoveCore'](),this['initFollowerController']();},Game_System[_0x55137b(0x65a)][_0x55137b(0x5c4)]=function(){const _0x347253=_0x55137b;this['_EventsMoveCoreSettings']={'DashingEnable':!![],'EventAutoMovement':!![],'VisibleEventLabels':!![]},this[_0x347253(0x538)]={},this['_MapSpawnedEventData']=[],this[_0x347253(0x416)]={},this[_0x347253(0x46d)]={},this['_DisablePlayerControl']=![],this['_PlayerDiagonalSetting']=_0x347253(0x3c3);},Game_System[_0x55137b(0x65a)]['isDashingEnabled']=function(){const _0x46ac17=_0x55137b;if(this[_0x46ac17(0x52b)]===undefined)this['initEventsMoveCore']();if(this[_0x46ac17(0x52b)][_0x46ac17(0x3e2)]===undefined)this[_0x46ac17(0x5c4)]();return this[_0x46ac17(0x52b)]['DashingEnable'];},Game_System[_0x55137b(0x65a)][_0x55137b(0x5ae)]=function(_0x53ab57){const _0x41bd55=_0x55137b;if(this[_0x41bd55(0x52b)]===undefined)this['initEventsMoveCore']();if(this[_0x41bd55(0x52b)][_0x41bd55(0x3e2)]===undefined)this['initEventsMoveCore']();this[_0x41bd55(0x52b)][_0x41bd55(0x3e2)]=_0x53ab57;},Game_System[_0x55137b(0x65a)]['isAllowEventAutoMovement']=function(){const _0x3c0303=_0x55137b;if(this[_0x3c0303(0x52b)]===undefined)this[_0x3c0303(0x5c4)]();if(this[_0x3c0303(0x52b)][_0x3c0303(0x307)]===undefined)this[_0x3c0303(0x5c4)]();return this[_0x3c0303(0x52b)][_0x3c0303(0x307)];},Game_System[_0x55137b(0x65a)][_0x55137b(0x37d)]=function(_0x23dc9a){const _0x24d4ca=_0x55137b;if(this['_EventsMoveCoreSettings']===undefined)this['initEventsMoveCore']();if(this['_EventsMoveCoreSettings']['EventAutoMovement']===undefined)this[_0x24d4ca(0x5c4)]();this[_0x24d4ca(0x52b)][_0x24d4ca(0x307)]=_0x23dc9a;},Game_System['prototype'][_0x55137b(0x5ec)]=function(){const _0x36298e=_0x55137b;if(this[_0x36298e(0x52b)]===undefined)this[_0x36298e(0x5c4)]();if(this[_0x36298e(0x52b)][_0x36298e(0x4fb)]===undefined)this['initEventsMoveCore']();return this[_0x36298e(0x52b)][_0x36298e(0x4fb)];},Game_System[_0x55137b(0x65a)]['setEventLabelsVisible']=function(_0x334378){const _0x1bc907=_0x55137b;if(this[_0x1bc907(0x52b)]===undefined)this[_0x1bc907(0x5c4)]();if(this[_0x1bc907(0x52b)][_0x1bc907(0x4fb)]===undefined)this['initEventsMoveCore']();this[_0x1bc907(0x52b)][_0x1bc907(0x4fb)]=_0x334378;},Game_System[_0x55137b(0x65a)][_0x55137b(0x3a3)]=function(){const _0x4d2668=_0x55137b;return this['_DisablePlayerControl']===undefined&&(this[_0x4d2668(0x71a)]=![]),this[_0x4d2668(0x71a)];},Game_System[_0x55137b(0x65a)][_0x55137b(0x219)]=function(_0x22b695){const _0x23efd1=_0x55137b;this[_0x23efd1(0x71a)]=_0x22b695;},Game_System[_0x55137b(0x65a)][_0x55137b(0x601)]=function(){return this['_PlayerDiagonalSetting'];},Game_System[_0x55137b(0x65a)][_0x55137b(0x427)]=function(_0x2e0212){const _0x15130a=_0x55137b;this['_PlayerDiagonalSetting']=String(_0x2e0212)['toLowerCase']()[_0x15130a(0x5d3)]();},Game_System['prototype'][_0x55137b(0x28d)]=function(_0x4207cd){const _0x373047=_0x55137b;if(this[_0x373047(0x538)]===undefined)this['initEventsMoveCore']();if(!_0x4207cd)return null;if(_0x4207cd===$gamePlayer)return this[_0x373047(0x538)][_0x373047(0x3e4)];else{if(_0x373047(0x678)==='VCTRL')this[_0x373047(0x6b7)](_0x1818af);else{const _0x5cd348=VisuMZ['EventsMoveCore'][_0x373047(0x6ea)],_0x2426b3=_0x373047(0x331)[_0x373047(0x69f)](_0x4207cd['_mapId'],_0x4207cd[_0x373047(0x627)]);return this[_0x373047(0x538)][_0x2426b3]=this[_0x373047(0x538)][_0x2426b3]||{'iconIndex':0x0,'bufferX':_0x5cd348['Icon'][_0x373047(0x6d2)],'bufferY':_0x5cd348[_0x373047(0x4e5)]['BufferY'],'blendMode':_0x5cd348[_0x373047(0x4e5)][_0x373047(0x72e)]},this[_0x373047(0x538)][_0x2426b3];}}},Game_System['prototype'][_0x55137b(0x6c1)]=function(_0x5b9997,_0x4ddd03,_0xd65961,_0x239ec5,_0x3ff9ec){const _0x55cd8c=_0x55137b;if(this[_0x55cd8c(0x538)]===undefined)this['initEventsMoveCore']();const _0x53a53b=_0x5b9997===$gamePlayer?'Player':_0x55cd8c(0x331)[_0x55cd8c(0x69f)](_0x5b9997['_mapId'],_0x5b9997[_0x55cd8c(0x627)]);this['_EventIcons'][_0x53a53b]={'iconIndex':_0x4ddd03,'bufferX':_0xd65961,'bufferY':_0x239ec5,'blendMode':_0x3ff9ec};},Game_System[_0x55137b(0x65a)][_0x55137b(0x481)]=function(_0x425e16,_0x380d52,_0x106c77,_0x9d7bdc,_0xc9f78d,_0x549edc){const _0x2c4cce=_0x55137b;if(this['_EventIcons']===undefined)this['initEventsMoveCore']();const _0x516750=_0x2c4cce(0x331)[_0x2c4cce(0x69f)](_0x425e16,_0x380d52);this[_0x2c4cce(0x538)][_0x516750]={'iconIndex':_0x106c77,'bufferX':_0x9d7bdc,'bufferY':_0xc9f78d,'blendMode':_0x549edc};},Game_System[_0x55137b(0x65a)]['deleteIconsOnEventsData']=function(_0x234b84){const _0x3d1b84=_0x55137b;if(this[_0x3d1b84(0x538)]===undefined)this[_0x3d1b84(0x5c4)]();if(!_0x234b84)return null;_0x234b84===$gamePlayer?delete this[_0x3d1b84(0x538)][_0x3d1b84(0x3e4)]:this[_0x3d1b84(0x5a7)](_0x234b84[_0x3d1b84(0x378)],_0x234b84[_0x3d1b84(0x627)]);},Game_System[_0x55137b(0x65a)][_0x55137b(0x5a7)]=function(_0x8e0bf0,_0x364415){const _0x3ca12f=_0x55137b;if(this['_EventIcons']===undefined)this[_0x3ca12f(0x5c4)]();const _0x318362=_0x3ca12f(0x331)[_0x3ca12f(0x69f)](_0x8e0bf0,_0x364415);delete this[_0x3ca12f(0x538)][_0x318362];},Game_System['prototype']['getSavedEventLocation']=function(_0x528c37){const _0x5b0010=_0x55137b;if(this[_0x5b0010(0x46d)]===undefined)this[_0x5b0010(0x5c4)]();if(!_0x528c37)return null;const _0x336c63=_0x5b0010(0x331)[_0x5b0010(0x69f)](_0x528c37[_0x5b0010(0x378)],_0x528c37[_0x5b0010(0x627)]);return this[_0x5b0010(0x46d)][_0x336c63];},Game_System['prototype'][_0x55137b(0x340)]=function(_0x898849){const _0x10eea3=_0x55137b;if(this[_0x10eea3(0x46d)]===undefined)this[_0x10eea3(0x5c4)]();if(!_0x898849)return;const _0x583f88='Map%1-Event%2'[_0x10eea3(0x69f)](_0x898849[_0x10eea3(0x378)],_0x898849[_0x10eea3(0x627)]);this[_0x10eea3(0x46d)][_0x583f88]={'direction':_0x898849['direction'](),'x':Math[_0x10eea3(0x30b)](_0x898849['x']),'y':Math[_0x10eea3(0x30b)](_0x898849['y']),'pageIndex':_0x898849[_0x10eea3(0x3e3)],'moveRouteIndex':_0x898849[_0x10eea3(0x267)]};},Game_System['prototype'][_0x55137b(0x605)]=function(_0x4938e1){const _0xa835a6=_0x55137b;if(this[_0xa835a6(0x46d)]===undefined)this[_0xa835a6(0x5c4)]();if(!_0x4938e1)return;this[_0xa835a6(0x6ca)](_0x4938e1[_0xa835a6(0x378)],_0x4938e1['_eventId']);},Game_System[_0x55137b(0x65a)][_0x55137b(0x6ca)]=function(_0x3dc88b,_0x555f10){const _0x2b3f0a=_0x55137b;if(this[_0x2b3f0a(0x46d)]===undefined)this[_0x2b3f0a(0x5c4)]();const _0x1cdbd4=_0x2b3f0a(0x331)['format'](_0x3dc88b,_0x555f10);delete this[_0x2b3f0a(0x46d)][_0x1cdbd4];},Game_System['prototype'][_0x55137b(0x469)]=function(_0xd9d76a,_0x2dabbf,_0x534522,_0x4418a7,_0x2394aa,_0x3b8a9e,_0x1181ca){const _0x14caff=_0x55137b;if(this[_0x14caff(0x46d)]===undefined)this[_0x14caff(0x5c4)]();const _0x3295d1='Map%1-Event%2'[_0x14caff(0x69f)](_0xd9d76a,_0x2dabbf);this[_0x14caff(0x46d)][_0x3295d1]={'direction':_0x2394aa,'x':Math[_0x14caff(0x30b)](_0x534522),'y':Math[_0x14caff(0x30b)](_0x4418a7),'pageIndex':_0x3b8a9e,'moveRouteIndex':_0x1181ca};},Game_System['prototype']['getPreservedMorphEventData']=function(_0x40f4b7){const _0x555f78=_0x55137b;if(this[_0x555f78(0x416)]===undefined)this[_0x555f78(0x5c4)]();if(!_0x40f4b7)return;const _0x5bee15=_0x555f78(0x331)[_0x555f78(0x69f)](_0x40f4b7[_0x555f78(0x378)],_0x40f4b7[_0x555f78(0x627)]);return this[_0x555f78(0x416)][_0x5bee15];},Game_System[_0x55137b(0x65a)][_0x55137b(0x441)]=function(_0x210e5f,_0x30735a,_0x591a6f,_0x323079,_0x5e3811){const _0x3949f4=_0x55137b;if(this[_0x3949f4(0x416)]===undefined)this[_0x3949f4(0x5c4)]();const _0x3082a5=_0x3949f4(0x331)[_0x3949f4(0x69f)](_0x210e5f,_0x30735a);this[_0x3949f4(0x416)][_0x3082a5]={'template':_0x591a6f,'mapId':_0x323079,'eventId':_0x5e3811};},Game_System['prototype'][_0x55137b(0x349)]=function(_0x5bb61b,_0x15271d){const _0x268971=_0x55137b;if(this[_0x268971(0x416)]===undefined)this[_0x268971(0x5c4)]();const _0x530528=_0x268971(0x331)[_0x268971(0x69f)](_0x5bb61b,_0x15271d);delete this[_0x268971(0x416)][_0x530528];},Game_System[_0x55137b(0x65a)][_0x55137b(0x2a9)]=function(_0x55c81a){const _0x453cf6=_0x55137b;if(this[_0x453cf6(0x350)]===undefined)this[_0x453cf6(0x5c4)]();return this[_0x453cf6(0x350)][_0x55c81a]=this[_0x453cf6(0x350)][_0x55c81a]||[],this[_0x453cf6(0x350)][_0x55c81a];},Game_System[_0x55137b(0x65a)][_0x55137b(0x566)]=function(_0x5dce56){const _0x11d222=_0x55137b,_0x2ad639=this[_0x11d222(0x2a9)](_0x5dce56);for(const _0x1311b1 of _0x2ad639){if('XLLPQ'===_0x11d222(0x32d)){if(!_0x1311b1)continue;if(_0x1311b1['_spawnPreserved'])continue;const _0xa96ef=_0x2ad639[_0x11d222(0x5da)](_0x1311b1);_0x2ad639[_0xa96ef]=null;}else{if(_0x1f1123>this['x']&&this['canPass'](this['x'],this['y'],0x6))_0xfc7ed=0x9;if(_0x1f5be7<this['x']&&this['canPass'](this['x'],this['y'],0x4))_0x533c94=0x7;}}},Game_System[_0x55137b(0x65a)]['initFollowerController']=function(){this['_followerControlID']=0x0,this['_followerChaseOff']=![];},Game_System['prototype'][_0x55137b(0x654)]=function(){const _0x5e85c8=_0x55137b;if(this[_0x5e85c8(0x2b4)]===undefined)this['initFollowerController']();return this['_followerControlID'];},Game_System[_0x55137b(0x65a)][_0x55137b(0x257)]=function(_0xbb6aa4){const _0x86dab6=_0x55137b;if(this[_0x86dab6(0x2b4)]===undefined)this[_0x86dab6(0x539)]();this[_0x86dab6(0x2b4)]=_0xbb6aa4;;},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x4af)]=Game_Interpreter[_0x55137b(0x65a)][_0x55137b(0x487)],Game_Interpreter[_0x55137b(0x65a)][_0x55137b(0x487)]=function(_0x405e92){const _0x407f96=_0x55137b;if(!$gameParty['inBattle']()&&_0x405e92<0x0){if('lJJJS'===_0x407f96(0x3b2))return this[_0x407f96(0x5a5)]();else{let _0x43e676=$gameSystem[_0x407f96(0x654)]();if(_0x43e676>0x0)return $gamePlayer[_0x407f96(0x60c)]()[_0x407f96(0x26b)](_0x43e676-0x1);}}return VisuMZ[_0x407f96(0x2a6)][_0x407f96(0x4af)][_0x407f96(0x24a)](this,_0x405e92);},Game_System[_0x55137b(0x65a)][_0x55137b(0x570)]=function(){const _0xf55b7c=_0x55137b;if(this[_0xf55b7c(0x492)]===undefined)this['initFollowerController']();return this[_0xf55b7c(0x492)];},Game_System[_0x55137b(0x65a)][_0x55137b(0x34d)]=function(_0x4ffa62){const _0x125772=_0x55137b;if(this[_0x125772(0x492)]===undefined)this['initFollowerController']();this[_0x125772(0x492)]=_0x4ffa62;;},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x5f4)]=Game_Followers[_0x55137b(0x65a)][_0x55137b(0x1ff)],Game_Followers[_0x55137b(0x65a)][_0x55137b(0x1ff)]=function(){const _0x34854a=_0x55137b;if($gameSystem[_0x34854a(0x570)]())return;VisuMZ['EventsMoveCore'][_0x34854a(0x5f4)][_0x34854a(0x24a)](this);},VisuMZ[_0x55137b(0x2a6)]['Game_Timer_initialize']=Game_Timer[_0x55137b(0x65a)]['initialize'],Game_Timer[_0x55137b(0x65a)][_0x55137b(0x483)]=function(){const _0x3cb6ce=_0x55137b;VisuMZ['EventsMoveCore'][_0x3cb6ce(0x40e)][_0x3cb6ce(0x24a)](this),this[_0x3cb6ce(0x5c4)]();},Game_Timer[_0x55137b(0x65a)][_0x55137b(0x5c4)]=function(){const _0x2bb227=_0x55137b;this['_paused']=![],this[_0x2bb227(0x38d)]=-0x1,this[_0x2bb227(0x644)]=0x0;},Game_Timer[_0x55137b(0x65a)][_0x55137b(0x44c)]=function(_0x3918b0){const _0x1a72fe=_0x55137b;if(!_0x3918b0)return;if(!this[_0x1a72fe(0x31c)])return;if(this[_0x1a72fe(0x629)])return;if(this[_0x1a72fe(0x6dd)]<=0x0)return;if(this[_0x1a72fe(0x38d)]===undefined)this[_0x1a72fe(0x5c4)]();this['_frames']+=this[_0x1a72fe(0x38d)],this[_0x1a72fe(0x6dd)]<=0x0&&this['onExpire']();},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x4f5)]=Game_Timer['prototype'][_0x55137b(0x3f6)],Game_Timer['prototype'][_0x55137b(0x3f6)]=function(_0x5bc87f){const _0x1b7fee=_0x55137b;VisuMZ['EventsMoveCore']['Game_Timer_start'][_0x1b7fee(0x24a)](this,_0x5bc87f);if(this['_paused']===undefined)this[_0x1b7fee(0x5c4)]();this[_0x1b7fee(0x629)]=![];},VisuMZ['EventsMoveCore'][_0x55137b(0x723)]=Game_Timer[_0x55137b(0x65a)][_0x55137b(0x34a)],Game_Timer['prototype']['stop']=function(){const _0x2cff7e=_0x55137b;VisuMZ[_0x2cff7e(0x2a6)]['Game_Timer_stop'][_0x2cff7e(0x24a)](this);if(this[_0x2cff7e(0x629)]===undefined)this[_0x2cff7e(0x5c4)]();this[_0x2cff7e(0x629)]=![];},Game_Timer[_0x55137b(0x65a)][_0x55137b(0x5e7)]=function(){const _0x21eb15=_0x55137b;if(this[_0x21eb15(0x6dd)]<=0x0)return;this['_paused']=!![],this['_working']=!![];},Game_Timer['prototype'][_0x55137b(0x6b9)]=function(){const _0x4031b3=_0x55137b;if(this[_0x4031b3(0x6dd)]<=0x0)return;this[_0x4031b3(0x629)]=![],this[_0x4031b3(0x31c)]=!![];},Game_Timer[_0x55137b(0x65a)][_0x55137b(0x308)]=function(_0x2d3e84){const _0x5d6a72=_0x55137b;this[_0x5d6a72(0x6dd)]=this[_0x5d6a72(0x6dd)]||0x0,this[_0x5d6a72(0x6dd)]+=_0x2d3e84,this[_0x5d6a72(0x31c)]=!![],this[_0x5d6a72(0x6dd)]=Math[_0x5d6a72(0x69d)](0x1,this[_0x5d6a72(0x6dd)]);},Game_Timer[_0x55137b(0x65a)][_0x55137b(0x6f8)]=function(_0x5ca8f1){const _0x4d3024=_0x55137b;this[_0x4d3024(0x6dd)]=this[_0x4d3024(0x6dd)]||0x0,this['_frames']=_0x5ca8f1,this['_working']=!![],this['_frames']=Math['max'](0x1,this[_0x4d3024(0x6dd)]);},Game_Timer[_0x55137b(0x65a)][_0x55137b(0x1fb)]=function(_0x356560){const _0x3d5546=_0x55137b;this['_speed']=_0x356560,this['_working']=!![];if(_0x356560>0x0){if('kIdFT'===_0x3d5546(0x6f9))this[_0x3d5546(0x6dd)]=Math[_0x3d5546(0x69d)](this[_0x3d5546(0x6dd)],0x1);else{this[_0x3d5546(0x523)]=!![];return;}}},Game_Timer[_0x55137b(0x65a)]['setCommonEvent']=function(_0x5575d6){const _0x133a7c=_0x55137b;if(this['_expireCommonEvent']===undefined)this['initEventsMoveCore']();this[_0x133a7c(0x644)]=_0x5575d6;},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x5e6)]=Game_Timer['prototype']['onExpire'],Game_Timer[_0x55137b(0x65a)][_0x55137b(0x2f8)]=function(){const _0x435196=_0x55137b;if(this[_0x435196(0x644)]===undefined)this['initEventsMoveCore']();if(this[_0x435196(0x644)]){if('rkVdd'!==_0x435196(0x53e))return _0x4ce81d[_0x435196(0x2a6)][_0x435196(0x463)][_0x435196(0x24a)](this,_0x595f50);else $gameTemp['reserveCommonEvent'](this[_0x435196(0x644)]);}else{if(_0x435196(0x271)!=='zOobc')VisuMZ['EventsMoveCore']['Game_Timer_onExpire'][_0x435196(0x24a)](this);else return!!this[_0x435196(0x445)];}},VisuMZ[_0x55137b(0x2a6)]['Game_Message_add']=Game_Message[_0x55137b(0x65a)][_0x55137b(0x71e)],Game_Message[_0x55137b(0x65a)][_0x55137b(0x71e)]=function(_0x4a454a){const _0x5e9fe3=_0x55137b;VisuMZ[_0x5e9fe3(0x2a6)][_0x5e9fe3(0x5c2)]['call'](this,_0x4a454a),this[_0x5e9fe3(0x2bc)]=$gameTemp['getSelfTarget']();},Game_Message[_0x55137b(0x65a)]['registerSelfEvent']=function(){const _0x419b63=_0x55137b;$gameTemp[_0x419b63(0x2f9)](this[_0x419b63(0x2bc)]);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x66d)]=Game_Switches[_0x55137b(0x65a)]['value'],Game_Switches[_0x55137b(0x65a)][_0x55137b(0x67e)]=function(_0x1b3cbf){const _0x1c6193=_0x55137b;if(DataManager[_0x1c6193(0x31b)](_0x1b3cbf)){if(_0x1c6193(0x6ff)!=='Biori')return!!this[_0x1c6193(0x55f)](_0x1b3cbf);else _0x427358['x']=_0x56a8e4?_0x5a09b2[_0x1c6193(0x497)]:0x0,_0x47818e['y']=_0x595ac8?-this[_0x1c6193(0x700)]+_0x494f84[_0x1c6193(0x4c7)]:0x0;}else{if(DataManager[_0x1c6193(0x220)](_0x1b3cbf)){if(_0x1c6193(0x546)!==_0x1c6193(0x546))_0x164484+=this[_0x1c6193(0x40c)]();else return!!this[_0x1c6193(0x569)](_0x1b3cbf);}else return DataManager[_0x1c6193(0x511)](_0x1b3cbf)?!!this['mapValue'](_0x1b3cbf):VisuMZ[_0x1c6193(0x2a6)][_0x1c6193(0x66d)][_0x1c6193(0x24a)](this,_0x1b3cbf);}},Game_Switches[_0x55137b(0x6db)]={},Game_Switches['prototype']['advancedValue']=function(_0x49f9a7){const _0x3f3eda=_0x55137b;if(!Game_Switches[_0x3f3eda(0x6db)][_0x49f9a7]){$dataSystem[_0x3f3eda(0x467)][_0x49f9a7]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x395e5c=_0x3f3eda(0x22a)[_0x3f3eda(0x69f)](String(RegExp['$1']));Game_Switches[_0x3f3eda(0x6db)][_0x49f9a7]=new Function(_0x3f3eda(0x20e),_0x395e5c);}const _0x4197c6=$gameTemp['getSelfTarget']()||this;return Game_Switches['advancedFunc'][_0x49f9a7][_0x3f3eda(0x24a)](_0x4197c6,_0x49f9a7);},Game_Switches['prototype'][_0x55137b(0x569)]=function(_0x3e785e){const _0x2ec34f=_0x55137b,_0x3d33d7=$gameTemp['getSelfTarget']()||this;if(_0x3d33d7[_0x2ec34f(0x514)]!==Game_Event){if(_0x2ec34f(0x5fd)!==_0x2ec34f(0x5fd))this[_0x2ec34f(0x5c3)]=_0xd1ba6f(_0x1cf036['$1'])||0x0;else return VisuMZ[_0x2ec34f(0x2a6)][_0x2ec34f(0x66d)]['call'](this,_0x3e785e);}else{if(_0x2ec34f(0x48b)!==_0x2ec34f(0x285)){const _0x29c0d7=[_0x3d33d7[_0x2ec34f(0x378)],_0x3d33d7[_0x2ec34f(0x627)],_0x2ec34f(0x44f)[_0x2ec34f(0x69f)](_0x3e785e)];return $gameSelfSwitches[_0x2ec34f(0x67e)](_0x29c0d7);}else{if(this[_0x2ec34f(0x52b)]===_0x2cef50)this[_0x2ec34f(0x5c4)]();if(this[_0x2ec34f(0x52b)]['DashingEnable']===_0x94492a)this[_0x2ec34f(0x5c4)]();this['_EventsMoveCoreSettings']['DashingEnable']=_0x481745;}}},Game_Switches['prototype'][_0x55137b(0x3dc)]=function(_0x244415){const _0x3c3b23=_0x55137b,_0x4e4dd9=$gameMap?$gameMap[_0x3c3b23(0x517)]():0x0,_0x1c0225=[0x0,0x0,_0x3c3b23(0x5f5)[_0x3c3b23(0x69f)](_0x4e4dd9,_0x244415)];return $gameSelfSwitches[_0x3c3b23(0x67e)](_0x1c0225);},VisuMZ['EventsMoveCore']['Game_Switches_setValue']=Game_Switches['prototype'][_0x55137b(0x464)],Game_Switches['prototype'][_0x55137b(0x464)]=function(_0x52ef5a,_0x22364d){const _0x45434=_0x55137b;if(DataManager['isSelfSwitch'](_0x52ef5a))this[_0x45434(0x334)](_0x52ef5a,_0x22364d);else DataManager['isMapSwitch'](_0x52ef5a)?this['setMapValue'](_0x52ef5a,_0x22364d):VisuMZ[_0x45434(0x2a6)][_0x45434(0x2cd)]['call'](this,_0x52ef5a,_0x22364d);},Game_Switches[_0x55137b(0x65a)][_0x55137b(0x334)]=function(_0x2f9473,_0x3851a8){const _0xaf28a7=_0x55137b,_0x341a18=$gameTemp[_0xaf28a7(0x39b)]()||this;if(_0x341a18[_0xaf28a7(0x514)]!==Game_Event)VisuMZ[_0xaf28a7(0x2a6)][_0xaf28a7(0x2cd)]['call'](this,_0x2f9473,_0x3851a8);else{if('NJPxz'===_0xaf28a7(0x237)){const _0x218816=[_0x341a18[_0xaf28a7(0x378)],_0x341a18[_0xaf28a7(0x627)],'Self\x20Switch\x20%1'[_0xaf28a7(0x69f)](_0x2f9473)];$gameSelfSwitches[_0xaf28a7(0x464)](_0x218816,_0x3851a8);}else{if(this[_0xaf28a7(0x1f6)](_0x48fe1a,_0x22bdc5))return![];if(!this['isSpawnHitboxCollisionOk'](_0x14b43b,_0xce1135,_0x180f59))return![];}}},Game_Switches[_0x55137b(0x65a)][_0x55137b(0x4eb)]=function(_0x503731,_0x5c9a5e){const _0x3350a9=_0x55137b,_0x1d14e4=$gameMap?$gameMap['mapId']():0x0,_0x12c33a=[0x0,0x0,'Map\x20%1\x20Switch\x20%2'[_0x3350a9(0x69f)](_0x1d14e4,_0x503731)];return $gameSelfSwitches['setValue'](_0x12c33a,_0x5c9a5e);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x463)]=Game_Variables['prototype'][_0x55137b(0x67e)],Game_Variables[_0x55137b(0x65a)][_0x55137b(0x67e)]=function(_0x2cd034){const _0x1cc2d9=_0x55137b;if(DataManager['isAdvancedVariable'](_0x2cd034))return this[_0x1cc2d9(0x55f)](_0x2cd034);else{if(DataManager['isSelfVariable'](_0x2cd034))return this[_0x1cc2d9(0x569)](_0x2cd034);else return DataManager[_0x1cc2d9(0x22b)](_0x2cd034)?this[_0x1cc2d9(0x3dc)](_0x2cd034):VisuMZ['EventsMoveCore'][_0x1cc2d9(0x463)]['call'](this,_0x2cd034);}},Game_Variables[_0x55137b(0x6db)]={},Game_Variables[_0x55137b(0x65a)][_0x55137b(0x55f)]=function(_0x548453){const _0xbd7315=_0x55137b;if(!Game_Variables[_0xbd7315(0x6db)][_0x548453]){if('csuNY'!==_0xbd7315(0x710)){if(_0x5d0264)_0x2e5ec2[_0xbd7315(0x26f)](![]);}else{$dataSystem[_0xbd7315(0x209)][_0x548453][_0xbd7315(0x614)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x1d46bf=_0xbd7315(0x22a)[_0xbd7315(0x69f)](String(RegExp['$1']));Game_Variables[_0xbd7315(0x6db)][_0x548453]=new Function(_0xbd7315(0x3b0),_0x1d46bf);}}const _0x53c934=$gameTemp['getSelfTarget']()||this;return Game_Variables['advancedFunc'][_0x548453][_0xbd7315(0x24a)](_0x53c934,_0x548453);},Game_Variables[_0x55137b(0x65a)][_0x55137b(0x569)]=function(_0x5cc399){const _0x3f206e=_0x55137b,_0x252525=$gameTemp[_0x3f206e(0x39b)]()||this;if(_0x252525[_0x3f206e(0x514)]!==Game_Event)return _0x3f206e(0x682)!==_0x3f206e(0x682)?_0x223f7e[_0x3f206e(0x2a6)][_0x3f206e(0x6ea)][_0x3f206e(0x344)][_0x3f206e(0x201)]:VisuMZ[_0x3f206e(0x2a6)][_0x3f206e(0x463)]['call'](this,_0x5cc399);else{const _0x45548d=[_0x252525[_0x3f206e(0x378)],_0x252525[_0x3f206e(0x627)],_0x3f206e(0x60f)['format'](_0x5cc399)];return $gameSelfSwitches['value'](_0x45548d);}},Game_Variables['prototype'][_0x55137b(0x3dc)]=function(_0x494806){const _0x356cc3=_0x55137b,_0x404dea=$gameMap?$gameMap[_0x356cc3(0x517)]():0x0,_0x42ae82=[0x0,0x0,_0x356cc3(0x3ec)[_0x356cc3(0x69f)](_0x404dea,_0x494806)];return $gameSelfSwitches['value'](_0x42ae82)||0x0;},VisuMZ[_0x55137b(0x2a6)]['Game_Variables_setValue']=Game_Variables[_0x55137b(0x65a)][_0x55137b(0x464)],Game_Variables['prototype']['setValue']=function(_0x48a393,_0x476da8){const _0x31daf3=_0x55137b;if(DataManager[_0x31daf3(0x398)](_0x48a393))'mYsGg'!==_0x31daf3(0x6c9)?this[_0x31daf3(0x334)](_0x48a393,_0x476da8):_0x12c9ba[_0x31daf3(0x2a6)][_0x31daf3(0x221)][_0x31daf3(0x24a)](this,_0x1a0c69,_0x4566f9);else DataManager[_0x31daf3(0x22b)](_0x48a393)?this[_0x31daf3(0x4eb)](_0x48a393,_0x476da8):VisuMZ['EventsMoveCore'][_0x31daf3(0x56b)][_0x31daf3(0x24a)](this,_0x48a393,_0x476da8);},Game_Variables[_0x55137b(0x65a)][_0x55137b(0x334)]=function(_0x5e3363,_0x4ac780){const _0xe06ff2=_0x55137b,_0x2e94d2=$gameTemp[_0xe06ff2(0x39b)]()||this;if(_0x2e94d2[_0xe06ff2(0x514)]!==Game_Event)VisuMZ[_0xe06ff2(0x2a6)][_0xe06ff2(0x56b)][_0xe06ff2(0x24a)](this,_0x5e3363,_0x4ac780);else{const _0x305bb8=[_0x2e94d2['_mapId'],_0x2e94d2['_eventId'],_0xe06ff2(0x60f)['format'](_0x5e3363)];$gameSelfSwitches[_0xe06ff2(0x464)](_0x305bb8,_0x4ac780);}},Game_Variables[_0x55137b(0x65a)][_0x55137b(0x4eb)]=function(_0x38713b,_0x1d5064){const _0xc99152=_0x55137b,_0xb5a6ae=$gameMap?$gameMap[_0xc99152(0x517)]():0x0,_0x20c805=[0x0,0x0,_0xc99152(0x3ec)[_0xc99152(0x69f)](_0xb5a6ae,_0x38713b)];$gameSelfSwitches[_0xc99152(0x464)](_0x20c805,_0x1d5064);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x2ea)]=Game_SelfSwitches['prototype']['value'],Game_SelfSwitches['prototype'][_0x55137b(0x67e)]=function(_0x497f20){const _0x145836=_0x55137b;if(_0x497f20[0x2][_0x145836(0x614)](/(?:SELF|MAP)/i))return this[_0x145836(0x569)](_0x497f20);else{return VisuMZ[_0x145836(0x2a6)][_0x145836(0x2ea)]['call'](this,_0x497f20);;}},Game_SelfSwitches[_0x55137b(0x65a)][_0x55137b(0x569)]=function(_0x5cbe8c){const _0x585f00=_0x55137b;return _0x5cbe8c[0x2][_0x585f00(0x614)](/VAR/i)?this[_0x585f00(0x4f4)][_0x5cbe8c]||0x0:!!this['_data'][_0x5cbe8c];},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x221)]=Game_SelfSwitches['prototype'][_0x55137b(0x464)],Game_SelfSwitches[_0x55137b(0x65a)][_0x55137b(0x464)]=function(_0x2d8a86,_0x56a865){const _0x1e1b09=_0x55137b;_0x2d8a86[0x2][_0x1e1b09(0x614)](/(?:SELF|MAP)/i)?this[_0x1e1b09(0x334)](_0x2d8a86,_0x56a865):VisuMZ[_0x1e1b09(0x2a6)][_0x1e1b09(0x221)][_0x1e1b09(0x24a)](this,_0x2d8a86,_0x56a865);},Game_SelfSwitches['prototype'][_0x55137b(0x334)]=function(_0x105962,_0x3eb420){const _0x4d98ef=_0x55137b;this[_0x4d98ef(0x4f4)][_0x105962]=_0x105962[0x2]['match'](/VAR/i)?_0x3eb420:!!_0x3eb420,this[_0x4d98ef(0x436)]();},VisuMZ['EventsMoveCore'][_0x55137b(0x48d)]=Scene_Map[_0x55137b(0x65a)][_0x55137b(0x52a)],Scene_Map[_0x55137b(0x65a)]['createDisplayObjects']=function(){const _0x5549ae=_0x55137b;$gameMap[_0x5549ae(0x44b)](),VisuMZ[_0x5549ae(0x2a6)][_0x5549ae(0x48d)][_0x5549ae(0x24a)](this);},Game_Map[_0x55137b(0x65a)][_0x55137b(0x44b)]=function(){const _0x140a47=_0x55137b;this[_0x140a47(0x583)]=this[_0x140a47(0x517)](),this[_0x140a47(0x610)]=undefined;const _0xe0b28=this[_0x140a47(0x5db)]();for(const _0x1812ea of _0xe0b28){if(_0x1812ea)$gameSelfSwitches[_0x140a47(0x439)](_0x1812ea);}},Game_SelfSwitches[_0x55137b(0x65a)][_0x55137b(0x439)]=function(_0x484d1d){const _0x57e913=_0x55137b;if(!_0x484d1d)return;if(!_0x484d1d[_0x57e913(0x52c)]())return;const _0x24280d=_0x484d1d[_0x57e913(0x52c)]()[_0x57e913(0x501)]||'';if(_0x24280d[_0x57e913(0x614)](/<(?:EXIT RESET|EXIT|TEMP|TEMPORARY) (?:SELF|SELF SWITCH|SELF SWITCHES|SELF DATA)>/i)){const _0x16289f='%1,%2,'[_0x57e913(0x69f)]($gameMap[_0x57e913(0x378)],_0x484d1d[_0x57e913(0x627)]),_0x96fa0d=Object[_0x57e913(0x45b)](this[_0x57e913(0x4f4)])[_0x57e913(0x3c7)](_0x258393=>_0x258393[_0x57e913(0x291)](_0x16289f));while(_0x96fa0d[_0x57e913(0x730)]>0x0){const _0x4bdf1a=_0x96fa0d['shift']();delete this[_0x57e913(0x4f4)][_0x4bdf1a];}}},Game_SelfSwitches['prototype'][_0x55137b(0x4d1)]=function(_0x3b97b7){const _0xd069b2=_0x55137b,_0xcf64c0=_0xd069b2(0x3da)[_0xd069b2(0x69f)]($gameMap['_mapId']),_0x254788=Object['keys'](this['_data'])[_0xd069b2(0x3c7)](_0x18a666=>_0x18a666[_0xd069b2(0x291)](_0xcf64c0));while(_0x254788['length']>0x0){const _0x376e5f=_0x254788['shift']();delete this[_0xd069b2(0x4f4)][_0x376e5f];}_0x3b97b7===$gameMap[_0xd069b2(0x517)]()&&$gameMap[_0xd069b2(0x2cc)]();},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x600)]=Game_Enemy[_0x55137b(0x65a)][_0x55137b(0x2c1)],Game_Enemy[_0x55137b(0x65a)][_0x55137b(0x2c1)]=function(_0x354124){const _0x44a35e=_0x55137b;$gameTemp[_0x44a35e(0x2f9)](this);const _0x349fa5=VisuMZ[_0x44a35e(0x2a6)]['Game_Enemy_meetsSwitchCondition']['call'](this,_0x354124);return $gameTemp[_0x44a35e(0x319)](),_0x349fa5;},VisuMZ['EventsMoveCore']['Game_Troop_meetsConditions']=Game_Troop[_0x55137b(0x65a)]['meetsConditions'],Game_Troop[_0x55137b(0x65a)]['meetsConditions']=function(_0x559a01){const _0x118ceb=_0x55137b;$gameTemp['registerSelfTarget'](this);const _0x26af8d=VisuMZ[_0x118ceb(0x2a6)][_0x118ceb(0x289)][_0x118ceb(0x24a)](this,_0x559a01);return $gameTemp[_0x118ceb(0x319)](),_0x26af8d;},VisuMZ[_0x55137b(0x2a6)]['Game_Map_setup']=Game_Map[_0x55137b(0x65a)][_0x55137b(0x56c)],Game_Map[_0x55137b(0x65a)][_0x55137b(0x56c)]=function(_0xb719f7){const _0x2fc75f=_0x55137b;this[_0x2fc75f(0x566)](_0xb719f7),this['clearEventCache'](),VisuMZ[_0x2fc75f(0x2a6)][_0x2fc75f(0x2f1)][_0x2fc75f(0x24a)](this,_0xb719f7),this[_0x2fc75f(0x59f)](),this['setupDiagonalSupport'](),this[_0x2fc75f(0x30a)](),this['setupSaveEventLocations'](),this['setupSpawnedEvents'](),this['setupPlayerVisibilityOverrides'](),this[_0x2fc75f(0x323)](),this[_0x2fc75f(0x59f)]();},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x450)]=Game_Map[_0x55137b(0x65a)]['setupEvents'],Game_Map[_0x55137b(0x65a)][_0x55137b(0x719)]=function(){const _0x3400cb=_0x55137b;VisuMZ[_0x3400cb(0x2a6)][_0x3400cb(0x450)]['call'](this),this[_0x3400cb(0x368)]();},Game_Map[_0x55137b(0x2a4)]=0xc8,Game_Map['prototype'][_0x55137b(0x37c)]=function(){const _0x13bd8c=_0x55137b,_0x10d019=Game_Map[_0x13bd8c(0x2a4)];this[_0x13bd8c(0x64e)]=this[_0x13bd8c(0x5db)]()[_0x13bd8c(0x730)]>_0x10d019;if(this[_0x13bd8c(0x64e)]&&$gameTemp[_0x13bd8c(0x5bc)]()){}},Game_Map[_0x55137b(0x65a)][_0x55137b(0x343)]=function(){const _0x35cd33=_0x55137b;return this[_0x35cd33(0x64e)];},Game_Map[_0x55137b(0x65a)][_0x55137b(0x59f)]=function(){const _0x449683=_0x55137b;this[_0x449683(0x610)]=undefined;},Game_Map[_0x55137b(0x65a)][_0x55137b(0x68f)]=function(){const _0x547da2=_0x55137b;this['_diagonalSupport']=VisuMZ[_0x547da2(0x2a6)][_0x547da2(0x6ea)][_0x547da2(0x344)][_0x547da2(0x61d)];const _0x3495fe=$dataMap['note']||'';if(_0x3495fe[_0x547da2(0x614)](/<DIAGONAL MOVEMENT: ON>/i)){if(_0x547da2(0x26a)!==_0x547da2(0x26a)){let _0x472e59=[_0x33ecc9,_0x2866eb,_0x547da2(0x44f)['format'](_0x2a6e29)];return typeof _0x45eae9===_0x547da2(0x48c)&&(_0x472e59=[_0x444d07,_0x477dd5,_0x40752b[_0x547da2(0x557)]()[_0x547da2(0x5d3)]()]),_0x3afb0f[_0x547da2(0x67e)](_0x472e59);}else this[_0x547da2(0x1f7)]=!![];}else{if(_0x3495fe[_0x547da2(0x614)](/<DIAGONAL MOVEMENT: OFF>/i)){if(_0x547da2(0x364)!==_0x547da2(0x364))return this[_0x547da2(0x520)];else this[_0x547da2(0x1f7)]=![];}}},Game_Map['MOBILE_DIAGONAL_PATHFINDING']=VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x6ea)][_0x55137b(0x344)][_0x55137b(0x392)]??![],Game_Map[_0x55137b(0x65a)]['isSupportDiagonalMovement']=function(){const _0x4756f0=_0x55137b;if(Utils['isMobileDevice']()){if(_0x4756f0(0x5a0)===_0x4756f0(0x315))_0x299d5d(this['VisuMZ_Setup_Preload_Map'][_0x4756f0(0x65e)](this,_0x46ea36,_0x27462f),0x64);else{if(!Game_Map[_0x4756f0(0x49e)])return![];}}const _0x59563e=$gameSystem[_0x4756f0(0x601)]();if(_0x59563e==='enable')return!![];if(_0x59563e==='disable')return![];if(this[_0x4756f0(0x1f7)]===undefined)this[_0x4756f0(0x68f)]();return this[_0x4756f0(0x1f7)];},Game_Map[_0x55137b(0x65a)][_0x55137b(0x28b)]=function(_0x3d7786,_0x716222){const _0x51ae2b=_0x55137b;if([0x1,0x4,0x7]['includes'](_0x716222))_0x3d7786-=0x1;if([0x3,0x6,0x9][_0x51ae2b(0x23b)](_0x716222))_0x3d7786+=0x1;return this[_0x51ae2b(0x3c4)](_0x3d7786);},Game_Map[_0x55137b(0x65a)][_0x55137b(0x47d)]=function(_0x1e2d6c,_0xa61bf7){const _0x34f8ba=_0x55137b;if([0x1,0x2,0x3]['includes'](_0xa61bf7))_0x1e2d6c+=0x1;if([0x7,0x8,0x9][_0x34f8ba(0x23b)](_0xa61bf7))_0x1e2d6c-=0x1;return this['roundY'](_0x1e2d6c);},Game_Map[_0x55137b(0x65a)][_0x55137b(0x3ac)]=function(_0x2ae105,_0x52134d,_0x16870b,_0x1794a9){const _0x5e614e=_0x55137b;return Math[_0x5e614e(0x69d)](Math[_0x5e614e(0x4f2)](this[_0x5e614e(0x6af)](_0x2ae105,_0x16870b)),Math['abs'](this['deltaY'](_0x52134d,_0x1794a9)));},Game_Map[_0x55137b(0x65a)][_0x55137b(0x30a)]=function(){const _0x1961fa=_0x55137b,_0x32acfa=VisuMZ[_0x1961fa(0x2a6)][_0x1961fa(0x6ea)][_0x1961fa(0x6eb)],_0x229171={},_0x37c940=[_0x1961fa(0x52d),_0x1961fa(0x3db),_0x1961fa(0x6a2)],_0x6dae19=[_0x1961fa(0x489),_0x1961fa(0x248),_0x1961fa(0x3e4),_0x1961fa(0x325),'Vehicle','Boat',_0x1961fa(0x204),_0x1961fa(0x4b3)];for(const _0x47413e of _0x37c940){for(const _0x2ea65b of _0x6dae19){const _0x37a7e4=_0x1961fa(0x6c7)['format'](_0x2ea65b,_0x47413e);if(_0x32acfa[_0x37a7e4]){if(_0x1961fa(0x24c)===_0x1961fa(0x24c))_0x229171[_0x37a7e4]=_0x32acfa[_0x37a7e4][_0x1961fa(0x4fe)](0x0);else{_0x55f25a[_0x1961fa(0x65a)][_0x1961fa(0x5a1)][_0x1961fa(0x24a)](this);if([_0x1961fa(0x230),_0x1961fa(0x47c)]['includes'](this[_0x1961fa(0x298)]()))return;_0x2f3e2c[_0x1961fa(0x2cf)]([0x2]);}}}}const _0x4fc658=$dataMap[_0x1961fa(0x501)]||'',_0x5a52c1=_0x4fc658['match'](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/gi);if(_0x5a52c1)for(const _0x409ac5 of _0x5a52c1){if('VTSee'===_0x1961fa(0x63d))delete this['_EventIcons'][_0x1961fa(0x3e4)];else{_0x409ac5[_0x1961fa(0x614)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);let _0x2d63e5=String(RegExp['$1'])[_0x1961fa(0x571)]()[_0x1961fa(0x5d3)](),_0x1fbc2a=String(RegExp['$2'])[_0x1961fa(0x571)]()[_0x1961fa(0x5d3)]();const _0x348c42=JSON['parse']('['+RegExp['$3']['match'](/\d+/g)+']');_0x2d63e5=_0x2d63e5[_0x1961fa(0x6d1)](0x0)[_0x1961fa(0x557)]()+_0x2d63e5[_0x1961fa(0x4fe)](0x1),_0x1fbc2a=_0x1fbc2a[_0x1961fa(0x6d1)](0x0)[_0x1961fa(0x557)]()+_0x1fbc2a[_0x1961fa(0x4fe)](0x1);const _0x49367a=_0x1961fa(0x6c7)[_0x1961fa(0x69f)](_0x2d63e5,_0x1fbc2a);if(_0x229171[_0x49367a])_0x229171[_0x49367a]=_0x229171[_0x49367a][_0x1961fa(0x50f)](_0x348c42);}}this[_0x1961fa(0x6da)]=_0x229171;},Game_Map['prototype'][_0x55137b(0x37f)]=function(_0xc35290,_0x4977be,_0x1573c2,_0x1003c2){const _0x34d494=_0x55137b,_0x183dc6=this[_0x34d494(0x28b)](_0xc35290,_0x1573c2),_0x2a8fbc=this['roundYWithDirection'](_0x4977be,_0x1573c2),_0x839527=this[_0x34d494(0x71d)](_0x183dc6,_0x2a8fbc),_0xa85ccd=this['_regionRules'];if(_0xa85ccd['AllAllow'][_0x34d494(0x23b)](_0x839527))return!![];else{if(_0x1003c2==='player'){if(_0x34d494(0x559)===_0x34d494(0x559))return _0xa85ccd[_0x34d494(0x5ed)][_0x34d494(0x23b)](_0x839527)||_0xa85ccd['WalkAllow']['includes'](_0x839527);else{if(!_0x2025ea[_0x34d494(0x295)]())return;_0x423c7[_0x34d494(0x53d)](_0x502533,_0x2e320a);let _0x2c5c0a=0x0;_0x2c5c0a+=_0xf77d6a['Frames'],_0x2c5c0a+=_0x322c42['Seconds']*0x3c,_0x2c5c0a+=_0x3d6c07['Minutes']*0x3c*0x3c,_0x2c5c0a+=_0x26311c[_0x34d494(0x3c0)]*0x3c*0x3c*0x3c,_0x17c0f9[_0x34d494(0x6f8)](_0x2c5c0a);}}else{if(_0x1003c2===_0x34d494(0x52c)){if('zSBxJ'!==_0x34d494(0x369))this[_0x34d494(0x5c1)]=!![];else return _0xa85ccd['EventAllow']['includes'](_0x839527)||_0xa85ccd[_0x34d494(0x2cb)][_0x34d494(0x23b)](_0x839527);}else{if(_0xa85ccd[_0x34d494(0x532)][_0x34d494(0x23b)](_0x839527)){if(_0x34d494(0x638)===_0x34d494(0x638))return!![];else this['_saveEventLocation']=!![];}else{if(_0x34d494(0x399)===_0x34d494(0x399)){const _0x37ea67='%1Allow'[_0x34d494(0x69f)](_0x1003c2[_0x34d494(0x6d1)](0x0)['toUpperCase']()+_0x1003c2['slice'](0x1));if(_0xa85ccd[_0x37ea67])return _0xa85ccd[_0x37ea67][_0x34d494(0x23b)](_0x839527);}else return this[_0x34d494(0x603)]()[_0x34d494(0x70b)]??0x0;}}}}return![];},Game_Map[_0x55137b(0x65a)][_0x55137b(0x529)]=function(_0x461e6d,_0x3b180d,_0x3ffd5c,_0x2d4afb){const _0x140452=_0x55137b,_0x3271a4=this[_0x140452(0x28b)](_0x461e6d,_0x3ffd5c),_0x313b0a=this['roundYWithDirection'](_0x3b180d,_0x3ffd5c),_0x41877d=this[_0x140452(0x71d)](_0x3271a4,_0x313b0a),_0x36dd8c=this['_regionRules'];if(_0x36dd8c['AllForbid'][_0x140452(0x23b)](_0x41877d))return!![];else{if(_0x2d4afb===_0x140452(0x3ba))return _0x36dd8c[_0x140452(0x1fe)][_0x140452(0x23b)](_0x41877d)||_0x36dd8c['WalkForbid'][_0x140452(0x23b)](_0x41877d);else{if(_0x2d4afb===_0x140452(0x52c))return _0x36dd8c[_0x140452(0x21c)][_0x140452(0x23b)](_0x41877d)||_0x36dd8c[_0x140452(0x4d9)]['includes'](_0x41877d);else{if(_0x36dd8c['VehicleForbid']['includes'](_0x41877d))return!![];else{if(_0x140452(0x466)!=='CqxLF'){const _0xc75d8b=_0x10a2e5(_0x4d2550['$1'])['toUpperCase']()[_0x140452(0x5d3)](),_0x436829=[_0x140452(0x358),'ADDITIVE',_0x140452(0x227),'SCREEN'];this[_0x140452(0x25d)][_0x140452(0x70b)]=_0x436829[_0x140452(0x5da)](_0xc75d8b)[_0x140452(0x313)](0x0,0x3);}else{const _0x3f3d97=_0x140452(0x35a)['format'](_0x2d4afb[_0x140452(0x6d1)](0x0)[_0x140452(0x557)]()+_0x2d4afb[_0x140452(0x4fe)](0x1));if(_0x36dd8c[_0x3f3d97])return _0x36dd8c[_0x3f3d97][_0x140452(0x23b)](_0x41877d);}}}}}return![];},Game_Map[_0x55137b(0x65a)]['isRegionDockable']=function(_0x16aa7f,_0x59a5ab,_0x5dd28b,_0x3f4512){const _0x3bb45c=_0x55137b;_0x5dd28b=_0x3f4512===_0x3bb45c(0x598)?0x5:_0x5dd28b;const _0x3b36c2=this[_0x3bb45c(0x28b)](_0x16aa7f,_0x5dd28b),_0x5eb84e=this[_0x3bb45c(0x47d)](_0x59a5ab,_0x5dd28b),_0x151cce=this[_0x3bb45c(0x71d)](_0x3b36c2,_0x5eb84e),_0x26e58b=this[_0x3bb45c(0x6da)];if(_0x26e58b['VehicleDock']['includes'](_0x151cce))return!![];else{if(_0x3bb45c(0x461)==='ZrnKz')return this['processMoveRouteSetIndex'](_0x2c23a0(_0x4eb061['$1']));else{const _0x107523=_0x3bb45c(0x23e)[_0x3bb45c(0x69f)](_0x3f4512['charAt'](0x0)[_0x3bb45c(0x557)]()+_0x3f4512[_0x3bb45c(0x4fe)](0x1));if(_0x26e58b[_0x107523])return _0x26e58b[_0x107523]['includes'](_0x151cce);}}return![];},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x6bd)]=Game_Map['prototype'][_0x55137b(0x28e)],Game_Map[_0x55137b(0x65a)][_0x55137b(0x28e)]=function(){const _0x438da5=_0x55137b;VisuMZ[_0x438da5(0x2a6)]['Game_Map_refresh'][_0x438da5(0x24a)](this),this[_0x438da5(0x27b)]();},Game_Map[_0x55137b(0x65a)][_0x55137b(0x27b)]=function(){const _0x56c854=_0x55137b;this[_0x56c854(0x523)]=![];if(this[_0x56c854(0x5db)]()[_0x56c854(0x279)](_0x264ca6=>_0x264ca6['hasAdvancedSwitchVariable']())){this[_0x56c854(0x523)]=!![];return;}if(this[_0x56c854(0x5db)]()[_0x56c854(0x279)](_0xb727ab=>_0xb727ab[_0x56c854(0x6c2)]())){if(_0x56c854(0x543)!==_0x56c854(0x65c)){this[_0x56c854(0x523)]=!![];return;}else{if(this[_0x56c854(0x2b4)]===_0x540fe2)this[_0x56c854(0x539)]();this[_0x56c854(0x2b4)]=_0x2fb89e;;}}if(this[_0x56c854(0x3ab)][_0x56c854(0x279)](_0x2bb98d=>_0x2bb98d[_0x56c854(0x46f)]())){this['_needsPeriodicRefresh']=!![];return;}if(this[_0x56c854(0x3ab)][_0x56c854(0x279)](_0x39cfe6=>_0x39cfe6[_0x56c854(0x6c2)]())){this['_needsPeriodicRefresh']=!![];return;}},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x225)]=Game_Map['prototype'][_0x55137b(0x44c)],Game_Map[_0x55137b(0x65a)]['update']=function(_0x59bac9){const _0x1d6010=_0x55137b;this['updatePeriodicRefresh'](),VisuMZ['EventsMoveCore'][_0x1d6010(0x225)][_0x1d6010(0x24a)](this,_0x59bac9);},Game_Map[_0x55137b(0x65a)]['updatePeriodicRefresh']=function(){const _0x34af55=_0x55137b;if(!this[_0x34af55(0x523)])return;this['_periodicRefreshTimer']=this[_0x34af55(0x6bc)]||0x3c,this[_0x34af55(0x6bc)]--,this[_0x34af55(0x6bc)]<=0x0&&(this[_0x34af55(0x2cc)](),this[_0x34af55(0x6bc)]=0x3c);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x68b)]=Game_Map[_0x55137b(0x65a)][_0x55137b(0x46c)],Game_Map[_0x55137b(0x65a)]['isDashDisabled']=function(){const _0xe6a059=_0x55137b;if(!$gameSystem[_0xe6a059(0x3fe)]())return!![];return VisuMZ['EventsMoveCore'][_0xe6a059(0x68b)][_0xe6a059(0x24a)](this);},Game_Map[_0x55137b(0x65a)]['setupSaveEventLocations']=function(){const _0x25fb5a=_0x55137b;this[_0x25fb5a(0x522)]=![];const _0x377c8c=$dataMap[_0x25fb5a(0x501)]||'';_0x377c8c[_0x25fb5a(0x614)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0x25fb5a(0x522)]=!![]);},Game_Map['prototype'][_0x55137b(0x37e)]=function(){const _0x243d35=_0x55137b;if(this['_saveEventLocations']===undefined)this['setupSaveEventLocations']();return this[_0x243d35(0x522)];},Game_Map[_0x55137b(0x65a)]['removeTemporaryMapSpawnedEvents']=function(_0x3ef95b){const _0x3c584e=_0x55137b;_0x3ef95b!==this[_0x3c584e(0x517)]()&&$gamePlayer&&('nkKCR'===_0x3c584e(0x217)?_0x5443fa[_0x3c584e(0x2e6)]():$gameSystem[_0x3c584e(0x566)](this[_0x3c584e(0x517)]()));},Game_Map[_0x55137b(0x65a)][_0x55137b(0x632)]=function(){const _0xaa8dfc=_0x55137b;this[_0xaa8dfc(0x728)]=$gameSystem[_0xaa8dfc(0x2a9)](this['mapId']()),this[_0xaa8dfc(0x54f)]=!![];},VisuMZ[_0x55137b(0x2a6)]['Game_Map_events']=Game_Map[_0x55137b(0x65a)][_0x55137b(0x5db)],Game_Map['prototype'][_0x55137b(0x5db)]=function(){const _0xfc09e3=_0x55137b;if(this[_0xfc09e3(0x610)])return this[_0xfc09e3(0x610)];const _0x3372ab=VisuMZ[_0xfc09e3(0x2a6)][_0xfc09e3(0x6f7)]['call'](this),_0x4239ed=_0x3372ab[_0xfc09e3(0x50f)](this[_0xfc09e3(0x728)]||[]);return this[_0xfc09e3(0x610)]=_0x4239ed[_0xfc09e3(0x3c7)](_0x444931=>!!_0x444931),this[_0xfc09e3(0x610)];},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x2fe)]=Game_Map[_0x55137b(0x65a)][_0x55137b(0x52c)],Game_Map[_0x55137b(0x65a)][_0x55137b(0x52c)]=function(_0x4bd64d){const _0x4db325=_0x55137b;return _0x4bd64d>=0x3e8?(_0x4bd64d-=0x3e8,this[_0x4db325(0x728)][_0x4bd64d]):VisuMZ['EventsMoveCore'][_0x4db325(0x2fe)][_0x4db325(0x24a)](this,_0x4bd64d);},Game_Map['prototype']['eraseEvent']=function(_0x56571d){const _0x12bba8=_0x55137b,_0x106f7c=this[_0x12bba8(0x52c)](_0x56571d);if(_0x106f7c)_0x106f7c[_0x12bba8(0x4ff)]();},Game_Map['prototype'][_0x55137b(0x496)]=function(){const _0x277378=_0x55137b,_0x1be0ca={'template':_0x277378(0x6f0),'mapId':0x1,'eventId':0xc,'x':$gamePlayer['x']+0x1,'y':$gamePlayer['y']+0x1,'spawnPreserved':!![],'spawnEventId':this[_0x277378(0x728)][_0x277378(0x730)]+0x3e8};this[_0x277378(0x4b6)](_0x1be0ca);},Game_Map[_0x55137b(0x65a)][_0x55137b(0x1f6)]=function(_0x25a009,_0x48feeb){const _0x3615af=_0x55137b;if(this[_0x3615af(0x473)](_0x25a009,_0x48feeb)[_0x3615af(0x730)]>0x0)return!![];if($gamePlayer['x']===_0x25a009&&$gamePlayer['y']===_0x48feeb)return!![];if(this['boat']()[_0x3615af(0x5f8)](_0x25a009,_0x48feeb))return!![];if(this[_0x3615af(0x2f3)]()[_0x3615af(0x5f8)](_0x25a009,_0x48feeb))return!![];return![];},Game_Map[_0x55137b(0x65a)][_0x55137b(0x645)]=function(_0xd07342,_0xa96133,_0x490136){const _0x4fb454=_0x55137b;$gameTemp[_0x4fb454(0x33e)]=_0xd07342;const _0x58c7fd=new Game_Event(_0xd07342[_0x4fb454(0x517)],_0xd07342[_0x4fb454(0x506)]);$gameTemp[_0x4fb454(0x33e)]=undefined,_0x58c7fd[_0x4fb454(0x28e)]();let _0x1824cc=_0xa96133-_0x58c7fd[_0x4fb454(0x314)][_0x4fb454(0x3e0)],_0x51045d=_0xa96133+_0x58c7fd[_0x4fb454(0x314)]['right'],_0x4c5682=_0x490136-_0x58c7fd[_0x4fb454(0x314)]['up'],_0x7db5f9=_0x490136+_0x58c7fd[_0x4fb454(0x314)]['down'];for(let _0x119445=_0x1824cc;_0x119445<=_0x51045d;_0x119445++){for(let _0xb5e6af=_0x4c5682;_0xb5e6af<=_0x7db5f9;_0xb5e6af++){if(this[_0x4fb454(0x1f6)](_0x119445,_0xb5e6af))return![];}}return!![];},Game_Map[_0x55137b(0x65a)][_0x55137b(0x4b6)]=function(_0x11242f){const _0xd6fb54=_0x55137b;$gameTemp['_spawnData']=_0x11242f;const _0x3a27a9=new Game_Event(_0x11242f[_0xd6fb54(0x517)],_0x11242f['eventId']);$gameTemp[_0xd6fb54(0x33e)]=undefined,this['_spawnedEvents']['push'](_0x3a27a9),_0x3a27a9[_0xd6fb54(0x599)](_0x11242f),this[_0xd6fb54(0x59f)]();},Game_Map[_0x55137b(0x65a)]['prepareSpawnedEventAtXY']=function(_0x3bed6e,_0x50a755,_0x5b27d8){const _0x57c85c=_0x55137b,_0x46d5d6=_0x3bed6e['template'][_0x57c85c(0x557)]()['trim']();if(_0x46d5d6!==_0x57c85c(0x3cd)){const _0x408758=VisuMZ[_0x57c85c(0x495)][_0x46d5d6];_0x408758&&(_0x3bed6e[_0x57c85c(0x517)]=_0x408758[_0x57c85c(0x359)],_0x3bed6e[_0x57c85c(0x506)]=_0x408758[_0x57c85c(0x27d)]);}const _0x3c3ff7=_0x3bed6e['x'],_0x36ebc7=_0x3bed6e['y'];if(!this[_0x57c85c(0x23f)](_0x3c3ff7,_0x36ebc7))return![];if(_0x50a755){if(this['checkExistingEntitiesAt'](_0x3c3ff7,_0x36ebc7))return![];if(!this[_0x57c85c(0x645)](_0x3bed6e,_0x3c3ff7,_0x36ebc7))return![];}if(_0x5b27d8){if(_0x57c85c(0x2af)!==_0x57c85c(0x2af)){if(_0x43a08f[_0x57c85c(0x63f)]())return![];return _0x3c0dbb['MapSwitches'][_0x57c85c(0x23b)](_0x4146fd);}else{if(!this[_0x57c85c(0x704)](_0x3c3ff7,_0x36ebc7))return![];}}return this[_0x57c85c(0x4b6)](_0x3bed6e),!![];},Game_Map['prototype'][_0x55137b(0x4ab)]=function(_0x3c89c8,_0x34539b,_0x5b76d0,_0x1958a1){const _0x550257=_0x55137b,_0x5641b2=_0x3c89c8['template'][_0x550257(0x557)]()['trim']();if(_0x5641b2!==_0x550257(0x3cd)){const _0x28b8de=VisuMZ[_0x550257(0x495)][_0x5641b2];if(_0x28b8de){if(_0x550257(0x353)!==_0x550257(0x353)){const _0x4a3fcd=_0x4c79b3(_0x1d3d10['$1']),_0x1fd4a8=this[_0x550257(0x687)](_0x1a4065);return this[_0x550257(0x5d8)](_0x4a3fcd,_0x1fd4a8);}else _0x3c89c8[_0x550257(0x517)]=_0x28b8de[_0x550257(0x359)],_0x3c89c8['eventId']=_0x28b8de[_0x550257(0x27d)];}}const _0x43c0e4=[],_0x140993=this[_0x550257(0x712)](),_0x51018d=this[_0x550257(0x700)]();for(let _0x234d24=0x0;_0x234d24<_0x140993;_0x234d24++){for(let _0x431c1b=0x0;_0x431c1b<_0x51018d;_0x431c1b++){if(!_0x34539b[_0x550257(0x23b)](this[_0x550257(0x71d)](_0x234d24,_0x431c1b)))continue;if(!this[_0x550257(0x23f)](_0x234d24,_0x431c1b))continue;if(_0x5b76d0){if(_0x550257(0x377)!==_0x550257(0x377)){const _0x404666=_0x24ecb1[_0x550257(0x30b)](_0x139ff7-this['x']),_0x3564a2=_0x1f467e[_0x550257(0x30b)](_0x372933-this['y']);this['jump'](_0x404666,_0x3564a2);}else{if(this[_0x550257(0x1f6)](_0x234d24,_0x431c1b))continue;if(!this['isSpawnHitboxCollisionOk'](_0x3c89c8,_0x234d24,_0x431c1b))continue;}}if(_0x1958a1){if(_0x550257(0x70e)!==_0x550257(0x4e3)){if(!this['isPassableByAnyDirection'](_0x234d24,_0x431c1b))continue;}else{_0x3ee6d4['ConvertParams'](_0x45a16a,_0x3d9ae2);const _0x5d8ab6=_0x2989e7[_0x550257(0x2e1)]();if(!_0x56b8a3)return;const _0x1e5aa3=_0x1f594e[_0x550257(0x52c)](_0x270ca3[_0x550257(0x6b8)]||_0x5d8ab6[_0x550257(0x506)]());if(_0x1e5aa3)_0x1e5aa3[_0x550257(0x340)]();}}_0x43c0e4[_0x550257(0x696)]([_0x234d24,_0x431c1b]);}}if(_0x43c0e4['length']>0x0){const _0x257155=_0x43c0e4[Math[_0x550257(0x639)](_0x43c0e4['length'])];return _0x3c89c8['x']=_0x257155[0x0],_0x3c89c8['y']=_0x257155[0x1],this[_0x550257(0x4b6)](_0x3c89c8),!![];}return![];},Game_Map[_0x55137b(0x65a)][_0x55137b(0x699)]=function(_0x2e807,_0x12493e,_0x455a11,_0x239c93){const _0xea9234=_0x55137b,_0x12286a=_0x2e807[_0xea9234(0x2da)][_0xea9234(0x557)]()['trim']();if(_0x12286a!==_0xea9234(0x3cd)){if('VposV'===_0xea9234(0x56d))this[_0xea9234(0x3f1)]['x']=0.5,this[_0xea9234(0x3f1)]['y']=0x1;else{const _0x3b22c2=VisuMZ['EventTemplates'][_0x12286a];if(_0x3b22c2){if(_0xea9234(0x553)===_0xea9234(0x553))_0x2e807[_0xea9234(0x517)]=_0x3b22c2[_0xea9234(0x359)],_0x2e807['eventId']=_0x3b22c2[_0xea9234(0x27d)];else{const _0x505904=_0x2f7573[_0xea9234(0x39b)]()||this;if(_0x505904[_0xea9234(0x514)]!==_0x40ed12)_0x1b3086[_0xea9234(0x2a6)][_0xea9234(0x56b)][_0xea9234(0x24a)](this,_0xcd0bde,_0x571e6b);else{const _0x5dc63b=[_0x505904[_0xea9234(0x378)],_0x505904[_0xea9234(0x627)],_0xea9234(0x60f)['format'](_0x544f3f)];_0x3bcf1e['setValue'](_0x5dc63b,_0x54fd5a);}}}}}const _0x5ececd=[],_0x4be4b7=this[_0xea9234(0x712)](),_0x4b6e87=this[_0xea9234(0x700)]();for(let _0x274518=0x0;_0x274518<_0x4be4b7;_0x274518++){if(_0xea9234(0x342)===_0xea9234(0x30f))return this[_0xea9234(0x407)]();else for(let _0x241e1e=0x0;_0x241e1e<_0x4b6e87;_0x241e1e++){if(!_0x12493e['includes'](this[_0xea9234(0x3a8)](_0x274518,_0x241e1e)))continue;if(!this[_0xea9234(0x23f)](_0x274518,_0x241e1e))continue;if(_0x455a11){if(_0xea9234(0x3dd)!==_0xea9234(0x3dd)){_0x1dd8cb['ConvertParams'](_0x4e33bb,_0x276481);const _0x29b550=_0x53a192[_0xea9234(0x2e1)]();_0x195e56[_0xea9234(0x4fa)]=_0x2584e7[_0xea9234(0x4fa)]||_0x38b751[_0xea9234(0x517)](),_0x292a41[_0xea9234(0x481)](_0x27a617[_0xea9234(0x4fa)],_0x5acc1d[_0xea9234(0x6b8)]||_0x29b550['eventId'](),_0x404d65[_0xea9234(0x6c0)],_0xa8208d[_0xea9234(0x6f2)],_0x4a4423[_0xea9234(0x4be)],_0x3c65a2[_0xea9234(0x2d0)]);}else{if(this[_0xea9234(0x1f6)](_0x274518,_0x241e1e))continue;if(!this[_0xea9234(0x645)](_0x2e807,_0x274518,_0x241e1e))continue;}}if(_0x239c93){if(!this['isPassableByAnyDirection'](_0x274518,_0x241e1e))continue;}_0x5ececd[_0xea9234(0x696)]([_0x274518,_0x241e1e]);}}if(_0x5ececd[_0xea9234(0x730)]>0x0){if(_0xea9234(0x393)!=='VQOUm'){const _0xa93c8=_0x5ececd[Math[_0xea9234(0x639)](_0x5ececd['length'])];return _0x2e807['x']=_0xa93c8[0x0],_0x2e807['y']=_0xa93c8[0x1],this[_0xea9234(0x4b6)](_0x2e807),!![];}else{let _0x58d209=_0x28995c['EventsMoveCore'][_0xea9234(0x671)][_0xea9234(0x24a)](this);return _0x58d209=this['adjustMoveSynchOpacityDelta'](_0x58d209),_0x58d209;}}return![];},Game_Map[_0x55137b(0x65a)][_0x55137b(0x704)]=function(_0x46f6cc,_0x5133be){const _0xe1b03e=_0x55137b;if(this[_0xe1b03e(0x352)](_0x46f6cc,_0x5133be,0x2))return!![];if(this[_0xe1b03e(0x352)](_0x46f6cc,_0x5133be,0x4))return!![];if(this[_0xe1b03e(0x352)](_0x46f6cc,_0x5133be,0x6))return!![];if(this[_0xe1b03e(0x352)](_0x46f6cc,_0x5133be,0x8))return!![];return![];},Game_Map[_0x55137b(0x65a)]['despawnEventId']=function(_0x2de7d5){const _0x344736=_0x55137b;if(_0x2de7d5<0x3e8)return;if(!this[_0x344736(0x728)])return;const _0x6d642=this[_0x344736(0x52c)](_0x2de7d5);_0x6d642[_0x344736(0x5be)](-0x1,-0x1),_0x6d642['erase'](),this[_0x344736(0x728)][_0x2de7d5-0x3e8]=null,this[_0x344736(0x59f)]();},Game_Map[_0x55137b(0x65a)][_0x55137b(0x34b)]=function(){const _0x5a0af9=_0x55137b;for(const _0x276217 of this[_0x5a0af9(0x728)]){if(_0x276217)return _0x276217;}return null;},Game_Map['prototype'][_0x55137b(0x434)]=function(){const _0x4e3033=_0x55137b,_0x13ca5c=this[_0x4e3033(0x34b)]();return _0x13ca5c?_0x13ca5c[_0x4e3033(0x627)]:0x0;},Game_Map[_0x55137b(0x65a)]['lastSpawnedEvent']=function(){const _0xb32fbc=_0x55137b,_0x4e017c=this[_0xb32fbc(0x728)][_0xb32fbc(0x4fe)](0x0)['reverse']();for(const _0x47ead4 of _0x4e017c){if(_0xb32fbc(0x5ce)!==_0xb32fbc(0x5ce)){const _0x216d9b=/\\SELFVAR\[(\d+)\]/gi;while(_0x7af5d0[_0xb32fbc(0x614)](_0x216d9b)){_0x1c07a4=_0x460551['replace'](_0x216d9b,(_0x2065f2,_0xc885d2)=>_0x181055(this[_0xb32fbc(0x378)],this[_0xb32fbc(0x627)],_0xdbc51c(_0xc885d2)));}return _0x34afd2;}else{if(_0x47ead4)return _0x47ead4;}}return null;},Game_Map[_0x55137b(0x65a)][_0x55137b(0x4cc)]=function(){const _0x129482=_0x55137b,_0x6fe05a=this[_0x129482(0x39f)]();return _0x6fe05a?_0x6fe05a[_0x129482(0x627)]:0x0;},Game_Map['prototype'][_0x55137b(0x2bd)]=function(_0x1bbcf5,_0x3c88bf){const _0x575ab2=_0x55137b,_0x47d91d=this[_0x575ab2(0x473)](_0x1bbcf5,_0x3c88bf);for(const _0x53939f of _0x47d91d){if('vGWpH'===_0x575ab2(0x33f)){const _0x527b46=_0x48ff14['event'](_0x2671db(_0x52139e['$1']));return this['moveAwayFromCharacter'](_0x527b46);}else{if(!_0x53939f)continue;if(_0x53939f[_0x575ab2(0x240)]())this['despawnEventId'](_0x53939f[_0x575ab2(0x627)]);}}},Game_Map[_0x55137b(0x65a)]['despawnRegions']=function(_0x174812){const _0x14d6d1=_0x55137b;for(const _0x181196 of this[_0x14d6d1(0x728)]){if(!_0x181196)continue;_0x174812[_0x14d6d1(0x23b)](_0x181196['regionId']())&&(_0x14d6d1(0x232)===_0x14d6d1(0x232)?this[_0x14d6d1(0x335)](_0x181196[_0x14d6d1(0x627)]):(this[_0x14d6d1(0x57e)]='',this[_0x14d6d1(0x508)]()));}},Game_Map['prototype'][_0x55137b(0x2b9)]=function(_0x2d18e2){const _0x47dcf5=_0x55137b;for(const _0x54d0eb of this[_0x47dcf5(0x728)]){if(_0x47dcf5(0x205)!=='ytimz'){if(!_0x54d0eb)continue;_0x2d18e2['includes'](_0x54d0eb[_0x47dcf5(0x3a8)]())&&this[_0x47dcf5(0x335)](_0x54d0eb[_0x47dcf5(0x627)]);}else this[_0x47dcf5(0x622)]=!![];}},Game_Map[_0x55137b(0x65a)]['despawnEverything']=function(){const _0x495a78=_0x55137b;for(const _0x5a45f4 of this['_spawnedEvents']){if(!_0x5a45f4)continue;this[_0x495a78(0x335)](_0x5a45f4[_0x495a78(0x627)]);}},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x634)]=Game_Map[_0x55137b(0x65a)][_0x55137b(0x262)],Game_Map[_0x55137b(0x65a)][_0x55137b(0x262)]=function(_0x417cdf){const _0x326e44=_0x55137b;VisuMZ[_0x326e44(0x2a6)][_0x326e44(0x634)][_0x326e44(0x24a)](this,_0x417cdf);if(_0x417cdf>=0x3e8){const _0x23ff2e=this['event'](_0x417cdf);if(_0x23ff2e)_0x23ff2e[_0x326e44(0x657)]();}},Game_Map['prototype'][_0x55137b(0x651)]=function(){const _0x3d7f08=_0x55137b;this[_0x3d7f08(0x5e1)]=![],this['_forceHidePlayer']=![];if(!$dataMap)return;const _0x4c331a=$dataMap[_0x3d7f08(0x501)]||'';if(_0x4c331a['match'](/<HIDE PLAYER>/i)){if(_0x3d7f08(0x425)!==_0x3d7f08(0x425)){let _0x599767=this[_0x3d7f08(0x688)]()?0x0:-_0x2be393[_0x3d7f08(0x32f)];return this[_0x3d7f08(0x673)]&&(_0x599767*=this[_0x3d7f08(0x673)]),_0x5b2613[_0x3d7f08(0x30b)](_0x599767);}else this[_0x3d7f08(0x5e1)]=![],this[_0x3d7f08(0x57d)]=!![];}else _0x4c331a[_0x3d7f08(0x614)](/<SHOW PLAYER>/i)&&(this[_0x3d7f08(0x5e1)]=!![],this[_0x3d7f08(0x57d)]=![]);},Game_Map[_0x55137b(0x65a)][_0x55137b(0x5f6)]=function(){const _0x4cc016=_0x55137b;return this['_forceShowPlayer']===undefined&&this[_0x4cc016(0x651)](),this[_0x4cc016(0x5e1)];},Game_Map[_0x55137b(0x65a)]['isPlayerForceHidden']=function(){const _0x193ddc=_0x55137b;if(this[_0x193ddc(0x57d)]===undefined){if(_0x193ddc(0x3bc)!=='PlTFG'){if(this['_patternLocked'])return;if(this[_0x193ddc(0x4a0)]())return;_0x4edbfe[_0x193ddc(0x2a6)][_0x193ddc(0x382)]['call'](this);}else this[_0x193ddc(0x651)]();}return this[_0x193ddc(0x57d)];},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x231)]=Game_CharacterBase['prototype'][_0x55137b(0x421)],Game_CharacterBase['prototype'][_0x55137b(0x421)]=function(){const _0xe416d8=_0x55137b;if(this===$gamePlayer){if($gameMap['isPlayerForceShown']())return![];if($gameMap['isPlayerForceHidden']())return!![];}return VisuMZ[_0xe416d8(0x2a6)][_0xe416d8(0x231)][_0xe416d8(0x24a)](this);},Game_Map[_0x55137b(0x65a)][_0x55137b(0x323)]=function(){const _0xdcc1d1=_0x55137b;this['_forceShowFollower']=![],this['_forceHideFollower']=![];if(!$dataMap)return;const _0x4e4bfc=$dataMap[_0xdcc1d1(0x501)]||'';if(_0x4e4bfc[_0xdcc1d1(0x614)](/<HIDE FOLLOWERS>/i)){if(_0xdcc1d1(0x28c)!==_0xdcc1d1(0x6cd))this[_0xdcc1d1(0x6c3)]=![],this[_0xdcc1d1(0x21a)]=!![];else{if(this[_0xdcc1d1(0x510)]===_0x376f14)this[_0xdcc1d1(0x351)]();return this[_0xdcc1d1(0x510)];}}else _0x4e4bfc[_0xdcc1d1(0x614)](/<SHOW FOLLOWERS>/i)&&(this[_0xdcc1d1(0x6c3)]=!![],this[_0xdcc1d1(0x21a)]=![]);},Game_Map[_0x55137b(0x65a)][_0x55137b(0x661)]=function(){const _0x21bbc7=_0x55137b;if(this[_0x21bbc7(0x6c3)]===undefined){if(_0x21bbc7(0x22d)===_0x21bbc7(0x22d))this[_0x21bbc7(0x323)]();else{if(this[_0x21bbc7(0x610)])return this[_0x21bbc7(0x610)];const _0x45a626=_0xf92bf1['EventsMoveCore'][_0x21bbc7(0x6f7)][_0x21bbc7(0x24a)](this),_0x4bf8e1=_0x45a626[_0x21bbc7(0x50f)](this[_0x21bbc7(0x728)]||[]);return this[_0x21bbc7(0x610)]=_0x4bf8e1[_0x21bbc7(0x3c7)](_0x2051d4=>!!_0x2051d4),this[_0x21bbc7(0x610)];}}return this[_0x21bbc7(0x6c3)];},Game_Map[_0x55137b(0x65a)]['areFollowersForceHidden']=function(){const _0x194be9=_0x55137b;return this[_0x194be9(0x21a)]===undefined&&this[_0x194be9(0x323)](),this['_forceHideFollower'];},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x30d)]=Game_Followers[_0x55137b(0x65a)][_0x55137b(0x3f7)],Game_Followers['prototype']['isVisible']=function(){const _0x3b4ec4=_0x55137b;if($gameMap['areFollowersForceShown']())return!![];if($gameMap['areFollowersForceHidden']())return![];return VisuMZ[_0x3b4ec4(0x2a6)][_0x3b4ec4(0x30d)][_0x3b4ec4(0x24a)](this);},Game_CommonEvent[_0x55137b(0x65a)][_0x55137b(0x46f)]=function(){const _0x2b9037=_0x55137b,_0x141a7d=this[_0x2b9037(0x52c)]();return this[_0x2b9037(0x4dc)]()&&_0x141a7d[_0x2b9037(0x373)]>=0x1&&DataManager[_0x2b9037(0x31b)](_0x141a7d[_0x2b9037(0x20e)]);},Game_CommonEvent['prototype'][_0x55137b(0x6c2)]=function(){const _0x31e25f=_0x55137b;return VisuMZ['EventsMoveCore'][_0x31e25f(0x3f0)][_0x31e25f(0x3ab)][_0x31e25f(0x23b)](this[_0x31e25f(0x67f)]);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x558)]=Game_CommonEvent[_0x55137b(0x65a)][_0x55137b(0x4dc)],Game_CommonEvent[_0x55137b(0x65a)][_0x55137b(0x4dc)]=function(){const _0xb9da9c=_0x55137b;if(VisuMZ[_0xb9da9c(0x2a6)][_0xb9da9c(0x558)]['call'](this))return!![];else{if('WllEX'==='qqHXu')_0x4c42d5=this[_0xb9da9c(0x50d)](_0x126731,_0x288572);else{const _0x5e5e50=this[_0xb9da9c(0x52c)]();return VisuMZ['EventsMoveCore'][_0xb9da9c(0x3f0)]['metCPC'](this[_0xb9da9c(0x52c)]()['CPC'],this['_commonEventId'],_0x5e5e50);}}},VisuMZ['EventsMoveCore'][_0x55137b(0x594)]=Game_Map[_0x55137b(0x65a)][_0x55137b(0x516)],Game_Map[_0x55137b(0x65a)][_0x55137b(0x516)]=function(){const _0xee0af1=_0x55137b,_0x218b7f=VisuMZ[_0xee0af1(0x2a6)][_0xee0af1(0x594)][_0xee0af1(0x24a)](this),_0x4ec700=VisuMZ[_0xee0af1(0x2a6)][_0xee0af1(0x3f0)]['_commonEvents'][_0xee0af1(0x276)](_0x48096e=>$dataCommonEvents[_0x48096e]);return _0x218b7f[_0xee0af1(0x50f)](_0x4ec700)['filter']((_0x3e403c,_0x446d8b,_0x1928a6)=>_0x1928a6[_0xee0af1(0x5da)](_0x3e403c)===_0x446d8b);},Game_CharacterBase['ALLOW_LADDER_DASH']=VisuMZ[_0x55137b(0x2a6)]['Settings'][_0x55137b(0x344)][_0x55137b(0x646)]??![],VisuMZ['EventsMoveCore'][_0x55137b(0x524)]=Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x1f8)],Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x1f8)]=function(){const _0x5d7d8c=_0x55137b;VisuMZ[_0x5d7d8c(0x2a6)][_0x5d7d8c(0x524)][_0x5d7d8c(0x24a)](this),this[_0x5d7d8c(0x1f9)]();},Game_CharacterBase[_0x55137b(0x65a)]['initEventsMoveCoreSettings']=function(){const _0x98e610=_0x55137b;this[_0x98e610(0x69b)]=0x1,this[_0x98e610(0x4f9)]=0x1,this[_0x98e610(0x597)]=![],this[_0x98e610(0x560)](),this['clearDashing'](),this[_0x98e610(0x27e)](),this[_0x98e610(0x3a2)]();},VisuMZ['EventsMoveCore']['Game_CharacterBase_opacity']=Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x3fb)],Game_CharacterBase[_0x55137b(0x65a)]['opacity']=function(){const _0x47644f=_0x55137b;let _0x1d4564=VisuMZ[_0x47644f(0x2a6)][_0x47644f(0x671)][_0x47644f(0x24a)](this);return _0x1d4564=this[_0x47644f(0x5ef)](_0x1d4564),_0x1d4564;},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x5ef)]=function(_0x5ba0eb){return _0x5ba0eb;},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x28f)]=function(){const _0x317169=_0x55137b;if(this['constructor']===Game_Player&&this['isInVehicle']())return this[_0x317169(0x26c)]()['characterName']()[_0x317169(0x614)](/\[VS8\]/i);else{if(Imported[_0x317169(0x3f2)]&&this[_0x317169(0x396)]()){if(_0x317169(0x686)!==_0x317169(0x693))return!![];else{const _0x2bb7be=this['event'](_0x5401fb);if(_0x2bb7be)_0x2bb7be[_0x317169(0x657)]();}}else return _0x317169(0x34f)===_0x317169(0x229)?this[_0x317169(0x603)]()[_0x317169(0x604)]??0x1:this['characterName']()[_0x317169(0x614)](/\[VS8\]/i);}},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x662)]=Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x69a)],Game_CharacterBase['prototype']['direction']=function(){const _0x347816=_0x55137b;if(!$dataMap)return this[_0x347816(0x70a)]||0x2;if(this[_0x347816(0x43d)]()&&!this[_0x347816(0x35c)]()&&this[_0x347816(0x28f)]())return _0x347816(0x5e2)!=='NRQDM'?this[_0x347816(0x6f1)]()&&this[_0x347816(0x26c)]()?this['vehicle']()[_0x347816(0x259)](_0x4f8a3d,_0x23f536,_0x5d5fc8):!![]:this['directionOnLadderSpriteVS8dir']();else{if(this[_0x347816(0x43d)]()&&!this[_0x347816(0x35c)]())return 0x8;else{if(this['isPosing']()&&this[_0x347816(0x28f)]())return this[_0x347816(0x4a9)]();else{if(_0x347816(0x356)===_0x347816(0x39c))this[_0x347816(0x335)](_0x4f10f7['_eventId']);else return VisuMZ[_0x347816(0x2a6)]['Game_CharacterBase_direction'][_0x347816(0x24a)](this);}}}},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x736)]=Game_CharacterBase['prototype'][_0x55137b(0x62f)],Game_CharacterBase['prototype'][_0x55137b(0x62f)]=function(_0x4182e1){const _0x4bc3f3=_0x55137b;if(!this['isSpriteVS8dir']())_0x4182e1=this['correctFacingDirection'](_0x4182e1);VisuMZ[_0x4bc3f3(0x2a6)][_0x4bc3f3(0x736)][_0x4bc3f3(0x24a)](this,_0x4182e1),this['updateMoveSynchDirection']();},Game_CharacterBase['prototype'][_0x55137b(0x59d)]=function(_0x2cb894){const _0x3d1eb9=_0x55137b;if(_0x2cb894===0x1)return this['canPass'](this['_x'],this['_y'],0x4)?0x4:0x2;if(_0x2cb894===0x3)return this[_0x3d1eb9(0x25b)](this['_x'],this['_y'],0x6)?0x6:0x2;if(_0x2cb894===0x7)return this[_0x3d1eb9(0x25b)](this['_x'],this['_y'],0x4)?0x4:0x8;if(_0x2cb894===0x9)return this['canPass'](this['_x'],this['_y'],0x6)?0x6:0x8;return _0x2cb894;},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x428)]=function(_0x54b854){return[0x1,0x3,0x5,0x7,0x9]['includes'](_0x54b854);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x355)]=function(){return this['_lastMovedDirection']||0x0;},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x722)]=Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x5ba)],Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x5ba)]=function(_0x3c1f40){const _0xc25ecc=_0x55137b;this[_0xc25ecc(0x414)]=_0x3c1f40,VisuMZ[_0xc25ecc(0x2a6)][_0xc25ecc(0x722)][_0xc25ecc(0x24a)](this,_0x3c1f40);},Game_CharacterBase['prototype'][_0x55137b(0x41e)]=function(_0xf56b4){const _0x40f87c=_0x55137b;if(!this[_0x40f87c(0x428)](_0xf56b4))return this[_0x40f87c(0x5ba)](_0xf56b4);let _0x57686b=0x0,_0x1da540=0x0;switch(_0xf56b4){case 0x1:_0x57686b=0x4,_0x1da540=0x2;break;case 0x3:_0x57686b=0x6,_0x1da540=0x2;break;case 0x7:_0x57686b=0x4,_0x1da540=0x8;break;case 0x9:_0x57686b=0x6,_0x1da540=0x8;break;}if(VisuMZ[_0x40f87c(0x2a6)]['Settings']['Movement'][_0x40f87c(0x337)]){if(_0x40f87c(0x633)===_0x40f87c(0x555))return _0xb22951[_0x40f87c(0x725)][_0x40f87c(0x23b)](_0x47c651)||_0x5a1e14[_0x40f87c(0x2cb)][_0x40f87c(0x23b)](_0x5f3849);else{if(!this['canPass'](this['_x'],this['_y'],_0x57686b))return this[_0x40f87c(0x5ba)](_0x1da540);if(!this[_0x40f87c(0x25b)](this['_x'],this['_y'],_0x1da540))return this[_0x40f87c(0x5ba)](_0x57686b);if(!this[_0x40f87c(0x4bf)](this['_x'],this['_y'],_0x57686b,_0x1da540)){let _0x170d29=VisuMZ['EventsMoveCore'][_0x40f87c(0x6ea)][_0x40f87c(0x344)][_0x40f87c(0x3aa)]?_0x57686b:_0x1da540;return this[_0x40f87c(0x5ba)](_0x170d29);}}}this['_lastMovedDirection']=_0xf56b4,this[_0x40f87c(0x253)](_0x57686b,_0x1da540);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x29a)]=Game_CharacterBase['prototype'][_0x55137b(0x429)],Game_CharacterBase[_0x55137b(0x65a)]['realMoveSpeed']=function(){const _0x2cbb45=_0x55137b;let _0x942706=this[_0x2cbb45(0x4c4)];if(this['isDashing']()){if(_0x2cbb45(0x273)!==_0x2cbb45(0x3d4))_0x942706+=this[_0x2cbb45(0x40c)]();else{const _0xaa66ef=_0x3384d3[_0xa5f216[_0x2cbb45(0x639)](_0x2bcb91[_0x2cbb45(0x730)])];this['executeMoveDir8'](_0xaa66ef);}}return this[_0x2cbb45(0x4d0)](_0x942706);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x40c)]=function(){const _0x37855c=_0x55137b,_0x9076fa=VisuMZ['EventsMoveCore'][_0x37855c(0x6ea)]['Movement'];if(_0x9076fa[_0x37855c(0x374)]!==undefined)return _0x9076fa[_0x37855c(0x374)];else{if('eTHmn'===_0x37855c(0x50a))_0x1b107c[_0x37855c(0x482)]=new _0x5ab7fb(),_0x578659[_0x37855c(0x482)]['_filename']=_0x7b0c44[_0x37855c(0x58e)][_0x37855c(0x702)](),_0x38b220[_0x37855c(0x482)]['bitmap']=_0x576a7a[_0x37855c(0x2e7)](_0x12ebc1[_0x37855c(0x482)]['_filename']),_0x149324[_0x37855c(0x482)][_0x37855c(0x3f1)]['x']=0.5,_0x10ac4f[_0x37855c(0x482)][_0x37855c(0x3f1)]['y']=0x1,_0x52d173[_0x37855c(0x482)]['z']=0x0,this[_0x37855c(0x62a)][_0x37855c(0x3de)](_0x58d7be[_0x37855c(0x482)]);else return VisuMZ['EventsMoveCore'][_0x37855c(0x29a)][_0x37855c(0x24a)](this)-this[_0x37855c(0x4c4)];}},Game_CharacterBase[_0x55137b(0x65a)]['adjustDir8MovementSpeed']=function(_0x4e8891){const _0x45fa2d=_0x55137b,_0x3bd744=VisuMZ['EventsMoveCore'][_0x45fa2d(0x6ea)][_0x45fa2d(0x344)];if(!_0x3bd744[_0x45fa2d(0x650)])return _0x4e8891;return[0x1,0x3,0x7,0x9]['includes'](this[_0x45fa2d(0x414)])&&(_0x4e8891*=_0x3bd744['DiagonalSpeedMultiplier']||0.01),_0x4e8891;},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x2eb)]=Game_CharacterBase['prototype'][_0x55137b(0x58f)],Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x58f)]=function(){const _0x2da60a=_0x55137b;if(!Game_CharacterBase[_0x2da60a(0x3d6)]&&this[_0x2da60a(0x43d)]())return![];if(this[_0x2da60a(0x3bd)])return!![];return VisuMZ['EventsMoveCore'][_0x2da60a(0x2eb)][_0x2da60a(0x24a)](this);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x5a8)]=function(){return this['isDashing']()&&this['_stopCount']===0x0;},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x4d7)]=Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x206)],Game_CharacterBase['prototype']['pattern']=function(){const _0x2a1cc2=_0x55137b;if(this[_0x2a1cc2(0x6a5)]()){if('cHZEQ'===_0x2a1cc2(0x226))return this[_0x2a1cc2(0x71c)]();else{const _0x371527=_0x4eb0c7[_0x2a1cc2(0x5f7)](_0x5b1544,_0x10cbe1)[_0x2a1cc2(0x3c7)](_0x32420f=>_0x32420f!==this&&_0x32420f[_0x2a1cc2(0x521)]());return _0x371527['length']>0x0;}}else return VisuMZ[_0x2a1cc2(0x2a6)][_0x2a1cc2(0x4d7)][_0x2a1cc2(0x24a)](this);},VisuMZ['EventsMoveCore']['Game_CharacterBase_increaseSteps']=Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x5a1)],Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x5a1)]=function(){const _0x380083=_0x55137b;VisuMZ[_0x380083(0x2a6)]['Game_CharacterBase_increaseSteps'][_0x380083(0x24a)](this),this[_0x380083(0x560)]();},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x54c)]=Game_CharacterBase['prototype'][_0x55137b(0x42b)],Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x42b)]=function(){const _0x295226=_0x55137b;if(this[_0x295226(0x28f)]())return this[_0x295226(0x6bf)]();return VisuMZ[_0x295226(0x2a6)][_0x295226(0x54c)][_0x295226(0x24a)](this);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x6bf)]=function(){const _0x4004b0=_0x55137b,_0x5f4e57=this[_0x4004b0(0x69a)]();if(this[_0x4004b0(0x35c)]()){if('qxvVj'!=='qxvVj'){_0x21d197=_0x2343b2['toUpperCase']()[_0x4004b0(0x5d3)]();const _0x214e63=_0x4820ee[_0x4004b0(0x495)][_0x21255a];if(!_0x214e63)return;const _0x16a18c=_0x214e63[_0x4004b0(0x359)],_0x5e4a24=_0x214e63['EventID'];if(!this['checkValidEventerMap'](_0x16a18c,_0x5e4a24))return;if(!_0x4b4e27)_0x214e63[_0x4004b0(0x596)][_0x4004b0(0x24a)](this,_0x16a18c,_0x5e4a24,this);this['morphInto'](_0x16a18c,_0x5e4a24,_0x17c274);if(!_0x57a1c2)_0x214e63[_0x4004b0(0x2dd)][_0x4004b0(0x24a)](this,_0x16a18c,_0x5e4a24,this);if(_0x15cdb3)_0x5d7839[_0x4004b0(0x59f)]();}else{if([0x2,0x4,0x6,0x8][_0x4004b0(0x23b)](_0x5f4e57))return 0x4;if([0x1,0x3,0x7,0x9][_0x4004b0(0x23b)](_0x5f4e57))return 0x5;}}else{if(this[_0x4004b0(0x43d)]())return 0x6;else{if(this[_0x4004b0(0x6a5)]())return this[_0x4004b0(0x430)]();else{if(this[_0x4004b0(0x477)]){if(_0x4004b0(0x2a8)===_0x4004b0(0x4b5))this[_0x4004b0(0x30c)][_0x4004b0(0x41d)]=_0x4a1b57(_0x13d9f9['$1']);else{if([0x2,0x4,0x6,0x8][_0x4004b0(0x23b)](_0x5f4e57))return 0x4;if([0x1,0x3,0x7,0x9][_0x4004b0(0x23b)](_0x5f4e57))return 0x5;}}else{if(this[_0x4004b0(0x330)]()&&this[_0x4004b0(0x2a7)]()){if('oKyap'===_0x4004b0(0x611)){if([0x2,0x4,0x6,0x8]['includes'](_0x5f4e57))return 0x4;if([0x1,0x3,0x7,0x9][_0x4004b0(0x23b)](_0x5f4e57))return 0x5;}else for(const _0xa0b206 of _0x137dc5['events']()){_0xa0b206[_0x4004b0(0x28e)](),_0xa0b206[_0x4004b0(0x2f5)]();}}else{if(this[_0x4004b0(0x5a8)]()){if('kLLJk'===_0x4004b0(0x544))return this[_0x4004b0(0x6de)]()?0x4:0x2;else{if([0x2,0x4,0x6,0x8][_0x4004b0(0x23b)](_0x5f4e57))return 0x2;if([0x1,0x3,0x7,0x9][_0x4004b0(0x23b)](_0x5f4e57))return 0x3;}}else{if([0x2,0x4,0x6,0x8]['includes'](_0x5f4e57))return 0x0;if([0x1,0x3,0x7,0x9][_0x4004b0(0x23b)](_0x5f4e57))return 0x1;}}}}}}},Game_CharacterBase[_0x55137b(0x65a)]['useCarryPoseForIcons']=function(){const _0x568c8b=_0x55137b;return VisuMZ[_0x568c8b(0x2a6)][_0x568c8b(0x6ea)][_0x568c8b(0x4a3)][_0x568c8b(0x2b2)];},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x6de)]=function(){const _0x1ae646=_0x55137b;return this['isOnLadder']()&&this[_0x1ae646(0x3a8)]()===VisuMZ[_0x1ae646(0x2a6)][_0x1ae646(0x6ea)][_0x1ae646(0x703)][_0x1ae646(0x2b7)];},Game_CharacterBase[_0x55137b(0x65a)]['directionOnLadderSpriteVS8dir']=function(){const _0x442692=_0x55137b;if(this['isOnRope']()){if(_0x442692(0x42a)!==_0x442692(0x42a))this[_0x442692(0x363)][_0x442692(0x5bb)]['smooth']=!![];else return 0x4;}else return 0x2;},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x41f)]=Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x44c)],Game_CharacterBase['prototype'][_0x55137b(0x44c)]=function(){const _0x502b5b=_0x55137b;this[_0x502b5b(0x20a)](),VisuMZ['EventsMoveCore'][_0x502b5b(0x41f)]['call'](this),this[_0x502b5b(0x294)]();},Game_CharacterBase['prototype'][_0x55137b(0x20a)]=function(){const _0x374a4b=_0x55137b;this['_scaleX']=this[_0x374a4b(0x69b)]??0x1,this['_scaleY']=this[_0x374a4b(0x4f9)]??0x1;},VisuMZ['EventsMoveCore']['Game_CharacterBase_bushDepth']=Game_CharacterBase[_0x55137b(0x65a)]['bushDepth'],Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x50b)]=function(){const _0x276e68=_0x55137b;let _0x106db6=VisuMZ[_0x276e68(0x2a6)][_0x276e68(0x63e)][_0x276e68(0x24a)](this);return this[_0x276e68(0x673)]!==undefined&&(_0x106db6/=Math[_0x276e68(0x69d)](this[_0x276e68(0x673)],0.00001)),Math[_0x276e68(0x34e)](_0x106db6);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x294)]=function(){const _0x51967a=_0x55137b;this[_0x51967a(0x1f5)]=this[_0x51967a(0x1f5)]||0x0;if(this[_0x51967a(0x1f5)]>0x0){this[_0x51967a(0x1f5)]--;if(this[_0x51967a(0x1f5)]<=0x0&&this['_pose']!==_0x51967a(0x4bb))this[_0x51967a(0x560)]();}},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x42f)]=Game_CharacterBase['prototype'][_0x55137b(0x253)],Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x253)]=function(_0x18cca5,_0x1bbff3){const _0xfce714=_0x55137b;VisuMZ['EventsMoveCore'][_0xfce714(0x42f)][_0xfce714(0x24a)](this,_0x18cca5,_0x1bbff3);if(this['isSpriteVS8dir']())this[_0xfce714(0x61c)](_0x18cca5,_0x1bbff3);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x61c)]=function(_0x395919,_0x4148b3){const _0x2e7386=_0x55137b;if(_0x395919===0x4&&_0x4148b3===0x2)this[_0x2e7386(0x62f)](0x1);if(_0x395919===0x6&&_0x4148b3===0x2)this[_0x2e7386(0x62f)](0x3);if(_0x395919===0x4&&_0x4148b3===0x8)this[_0x2e7386(0x62f)](0x7);if(_0x395919===0x6&&_0x4148b3===0x8)this[_0x2e7386(0x62f)](0x9);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x2c5)]=Game_CharacterBase[_0x55137b(0x65a)]['hasStepAnime'],Game_CharacterBase['prototype'][_0x55137b(0x32e)]=function(){const _0x394f61=_0x55137b;if(this[_0x394f61(0x6a5)]()&&this['getPose']()===_0x394f61(0x4bb))return!![];return VisuMZ[_0x394f61(0x2a6)][_0x394f61(0x2c5)][_0x394f61(0x24a)](this);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x244)]=function(_0x1f1ed4,_0x20bca3){const _0x3b0ab5=_0x55137b;if(_0x1f1ed4[_0x3b0ab5(0x614)](/Z/i))_0x1f1ed4=_0x3b0ab5(0x4bb);if(_0x1f1ed4[_0x3b0ab5(0x614)](/SLEEP/i))_0x1f1ed4=_0x3b0ab5(0x4bb);this['isSpriteVS8dir']()&&(this[_0x3b0ab5(0x6cc)]=_0x1f1ed4['toUpperCase']()[_0x3b0ab5(0x5d3)](),this[_0x3b0ab5(0x1f5)]=_0x20bca3||Infinity);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x2f4)]=function(){const _0x3e8cac=_0x55137b;return this[_0x3e8cac(0x28f)]()?(this[_0x3e8cac(0x6cc)]||'')[_0x3e8cac(0x557)]()[_0x3e8cac(0x5d3)]():_0x3e8cac(0x326)!==_0x3e8cac(0x326)?this[_0x3e8cac(0x316)]&&this['_scene'][_0x3e8cac(0x514)]===_0x582093:''[_0x3e8cac(0x557)]()[_0x3e8cac(0x5d3)]();},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x68d)]=function(_0x4bb0e6,_0x3b3962){const _0x201e1b=_0x55137b;if(this[_0x201e1b(0x28f)]()){if(_0x201e1b(0x669)!==_0x201e1b(0x735)){const _0x905266=['',_0x201e1b(0x4ae),_0x201e1b(0x216),_0x201e1b(0x561),_0x201e1b(0x67d),_0x201e1b(0x588),'SWEAT','COBWEB',_0x201e1b(0x36c),_0x201e1b(0x321),'ZZZ','','','','',''][_0x4bb0e6];this[_0x201e1b(0x244)](_0x905266,_0x3b3962);}else return this['processMoveRouteSelfSwitch'](_0x544e44['$1'],_0x2c3595['$2']);}},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x560)]=function(){const _0x32b9c1=_0x55137b;this[_0x32b9c1(0x6cc)]='',this[_0x32b9c1(0x1f5)]=0x0;},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x6a5)]=function(){const _0x3ef9d4=_0x55137b;return this[_0x3ef9d4(0x28f)]()&&!!this[_0x3ef9d4(0x6cc)];},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x430)]=function(){const _0x597456=_0x55137b,_0x4fa302=this[_0x597456(0x6cc)][_0x597456(0x557)]();switch(this['_pose'][_0x597456(0x557)]()[_0x597456(0x5d3)]()){case'ITEM':case _0x597456(0x35f):case _0x597456(0x3d9):case _0x597456(0x306):case _0x597456(0x292):case _0x597456(0x32a):return 0x6;break;default:return 0x7;break;}},Game_CharacterBase['prototype'][_0x55137b(0x4a9)]=function(){const _0x489cd0=_0x55137b;switch(this['_pose'][_0x489cd0(0x557)]()){case _0x489cd0(0x4ae):case _0x489cd0(0x216):case _0x489cd0(0x561):case'!':case'?':return 0x2;break;case _0x489cd0(0x67d):case'ANGER':case _0x489cd0(0x4c8):return 0x4;break;case _0x489cd0(0x23c):case _0x489cd0(0x35f):case _0x489cd0(0x3d9):case _0x489cd0(0x655):case _0x489cd0(0x36c):case _0x489cd0(0x321):return 0x6;break;case _0x489cd0(0x306):case'KNEEL':case _0x489cd0(0x32a):case _0x489cd0(0x4bb):case _0x489cd0(0x2d4):return 0x8;break;default:return VisuMZ[_0x489cd0(0x2a6)][_0x489cd0(0x736)][_0x489cd0(0x24a)](this);break;}},Game_CharacterBase['prototype'][_0x55137b(0x71c)]=function(){const _0x45713c=_0x55137b;switch(this[_0x45713c(0x6cc)][_0x45713c(0x557)]()){case _0x45713c(0x23c):case _0x45713c(0x306):case _0x45713c(0x4ae):case'!':case'HEART':case _0x45713c(0x655):return 0x0;break;case _0x45713c(0x35f):case'KNEEL':case'QUESTION':case'?':case _0x45713c(0x588):case _0x45713c(0x36c):return 0x1;break;case _0x45713c(0x3d9):case _0x45713c(0x32a):case _0x45713c(0x561):case _0x45713c(0x4c8):case'LIGHT\x20BULB':return 0x2;break;default:return VisuMZ[_0x45713c(0x2a6)][_0x45713c(0x4d7)][_0x45713c(0x24a)](this);break;}},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x641)]=function(){const _0x32777d=_0x55137b;this[_0x32777d(0x477)]=!![];},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x407)]=function(){const _0xee430c=_0x55137b;this[_0xee430c(0x477)]=![];},Game_CharacterBase[_0x55137b(0x65a)]['forceDashing']=function(){const _0x56df29=_0x55137b;this[_0x56df29(0x3bd)]=!![];},Game_CharacterBase[_0x55137b(0x65a)]['clearDashing']=function(){const _0xe19b01=_0x55137b;this[_0xe19b01(0x3bd)]=![];},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x5e0)]=function(){const _0xd15961=_0x55137b;if(this[_0xd15961(0x675)]())return![];if(this['_isObjectCharacter'])return![];if(this[_0xd15961(0x4e6)]==='')return![];if(this[_0xd15961(0x514)]===Game_Vehicle)return![];if(this[_0xd15961(0x421)]())return![];return!![];},Game_CharacterBase['prototype']['isShadowShrink']=function(){const _0x574c05=_0x55137b;if(this[_0x574c05(0x43d)]())return!![];if(this[_0x574c05(0x514)]===Game_Player&&this[_0x574c05(0x6f1)]())return!![];return![];},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x702)]=function(){const _0x389d43=_0x55137b;return VisuMZ['EventsMoveCore'][_0x389d43(0x6ea)][_0x389d43(0x344)]['DefaultShadow'];},Game_CharacterBase['prototype'][_0x55137b(0x526)]=function(){const _0x489df9=_0x55137b;return this[_0x489df9(0x420)]();},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x299)]=function(){const _0x2a809b=_0x55137b,_0x188b68=$gameMap['tileHeight']();return Math[_0x2a809b(0x34e)](this[_0x2a809b(0x5b7)]()*_0x188b68+_0x188b68);},Game_CharacterBase[_0x55137b(0x5e9)]=0x64,Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x45a)]=function(_0x7198cd,_0x166511){const _0x34c49e=_0x55137b;if(TouchInput['isPressed']())return![];if(!$gameMap['isSupportDiagonalMovement']())return![];if($gameMap[_0x34c49e(0x5f7)](_0x7198cd,_0x166511)[_0x34c49e(0x730)]>0x0)return![];if(!$gameMap[_0x34c49e(0x704)](_0x7198cd,_0x166511))return![];const _0xb1825a=$gameMap[_0x34c49e(0x550)][_0x34c49e(0x730)];if(_0xb1825a>=Game_CharacterBase[_0x34c49e(0x5e9)])return![];return!![];},Game_Character[_0x55137b(0x65a)][_0x55137b(0x50d)]=function(_0x11f4e6,_0x5466c3){const _0xc4b279=_0x55137b;let _0x15e5cc=this[_0xc4b279(0x293)](_0x11f4e6,_0x5466c3);if(!this[_0xc4b279(0x45a)](_0x11f4e6,_0x5466c3))return _0x15e5cc;if(this[_0xc4b279(0x6d3)](_0x11f4e6,_0x5466c3))return _0x15e5cc;const _0x1074ca=_0x15e5cc;if(_0x15e5cc===0x2){if(_0xc4b279(0x3e7)!==_0xc4b279(0x70c)){if(_0x11f4e6>this['x']&&this['canPass'](this['x'],this['y'],0x6))_0x15e5cc=0x3;if(_0x11f4e6<this['x']&&this['canPass'](this['x'],this['y'],0x4))_0x15e5cc=0x1;}else _0xd57bc0[_0xc4b279(0x53d)](_0x202178,_0x337316),_0x42d75e[_0xc4b279(0x2f0)](_0x262ca9['Region']);}else{if(_0x15e5cc===0x4){if(_0x5466c3>this['y']&&this[_0xc4b279(0x25b)](this['x'],this['y'],0x4))_0x15e5cc=0x1;if(_0x5466c3<this['y']&&this[_0xc4b279(0x25b)](this['x'],this['y'],0x6))_0x15e5cc=0x7;}else{if(_0x15e5cc===0x6){if(_0x5466c3>this['y']&&this[_0xc4b279(0x25b)](this['x'],this['y'],0x4))_0x15e5cc=0x3;if(_0x5466c3<this['y']&&this[_0xc4b279(0x25b)](this['x'],this['y'],0x6))_0x15e5cc=0x9;}else{if(_0x15e5cc===0x8){if(_0x11f4e6>this['x']&&this[_0xc4b279(0x25b)](this['x'],this['y'],0x6))_0x15e5cc=0x9;if(_0x11f4e6<this['x']&&this[_0xc4b279(0x25b)](this['x'],this['y'],0x4))_0x15e5cc=0x7;}}}}if(!this[_0xc4b279(0x25b)](this['x'],this['y'],_0x15e5cc))return _0x1074ca;const _0x2ea9ed=$gameMap[_0xc4b279(0x28b)](this['x'],_0x15e5cc),_0x12fdcf=$gameMap[_0xc4b279(0x47d)](this['y'],_0x15e5cc);if(this[_0xc4b279(0x6d3)](_0x2ea9ed,_0x12fdcf))_0x15e5cc=_0x1074ca;return _0x15e5cc;},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x648)]=Game_CharacterBase[_0x55137b(0x65a)]['canPass'],Game_CharacterBase[_0x55137b(0x65a)]['canPass']=function(_0x1e300f,_0x5cc547,_0xd60e83){const _0x3e515c=_0x55137b;return this[_0x3e515c(0x6b5)]===_0x3e515c(0x598)?'MvzBz'===_0x3e515c(0x465)?this[_0x3e515c(0x538)]['Player']:this[_0x3e515c(0x26c)]()[_0x3e515c(0x456)](_0x1e300f,_0x5cc547,_0xd60e83):VisuMZ[_0x3e515c(0x2a6)][_0x3e515c(0x648)][_0x3e515c(0x24a)](this,_0x1e300f,_0x5cc547,_0xd60e83);},Game_CharacterBase['prototype'][_0x55137b(0x27e)]=function(){const _0x101ed7=_0x55137b;this[_0x101ed7(0x5af)]=0x0,this[_0x101ed7(0x41c)]=0x0;},VisuMZ['EventsMoveCore'][_0x55137b(0x6a0)]=Game_CharacterBase[_0x55137b(0x65a)]['screenX'],Game_CharacterBase[_0x55137b(0x65a)]['screenX']=function(){const _0x2ecf3c=_0x55137b;return VisuMZ[_0x2ecf3c(0x2a6)][_0x2ecf3c(0x6a0)][_0x2ecf3c(0x24a)](this)+(this[_0x2ecf3c(0x5af)]||0x0);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x254)]=Game_CharacterBase['prototype'][_0x55137b(0x27a)],Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x27a)]=function(){const _0x3c4cd4=_0x55137b;return VisuMZ[_0x3c4cd4(0x2a6)]['Game_CharacterBase_screenY']['call'](this)+(this[_0x3c4cd4(0x41c)]||0x0);},Game_CharacterBase[_0x55137b(0x32f)]=VisuMZ[_0x55137b(0x2a6)]['Settings'][_0x55137b(0x344)][_0x55137b(0x509)]??-0x6,Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x5ab)]=function(){const _0xf7fc50=_0x55137b;let _0x19d0dd=this[_0xf7fc50(0x688)]()?0x0:-Game_CharacterBase['DEFAULT_SHIFT_Y'];return this[_0xf7fc50(0x673)]&&(_0x19d0dd*=this[_0xf7fc50(0x673)]),Math[_0xf7fc50(0x30b)](_0x19d0dd);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x3a2)]=function(){this['_stepPattern']='';},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x382)]=Game_CharacterBase[_0x55137b(0x65a)]['updatePattern'],Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x593)]=function(){const _0x3e7b33=_0x55137b;if(this[_0x3e7b33(0x597)])return;if(this[_0x3e7b33(0x4a0)]())return;VisuMZ[_0x3e7b33(0x2a6)][_0x3e7b33(0x382)][_0x3e7b33(0x24a)](this);},Game_CharacterBase['prototype'][_0x55137b(0x4a0)]=function(){const _0x5c1d4e=_0x55137b;if(!this['hasStepAnime']()&&this[_0x5c1d4e(0x3b6)]>0x0)return![];switch(String(this[_0x5c1d4e(0x5a9)])[_0x5c1d4e(0x557)]()[_0x5c1d4e(0x5d3)]()){case _0x5c1d4e(0x4ca):this['_pattern']+=0x1;if(this[_0x5c1d4e(0x595)]>0x2)this[_0x5c1d4e(0x665)](0x0);break;case _0x5c1d4e(0x52e):this[_0x5c1d4e(0x595)]-=0x1;if(this[_0x5c1d4e(0x595)]<0x0)this[_0x5c1d4e(0x665)](0x2);break;case _0x5c1d4e(0x49f):case _0x5c1d4e(0x2f2):this[_0x5c1d4e(0x3d8)]();break;case'SPIN\x20COUNTERCLOCKWISE':case _0x5c1d4e(0x247):case _0x5c1d4e(0x6ae):case _0x5c1d4e(0x22e):this['turnLeft90']();break;default:return![];}return!![];},Game_CharacterBase[_0x55137b(0x65a)]['getEventIconData']=function(){const _0x526900=_0x55137b;return $gameSystem[_0x526900(0x28d)](this);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x330)]=function(){const _0x17ee35=_0x55137b,_0x276cf4=this[_0x17ee35(0x28d)]();if(!_0x276cf4)return![];return _0x276cf4['iconIndex']>0x0;},Game_CharacterBase[_0x55137b(0x65a)]['frontX']=function(){const _0x370be8=_0x55137b,_0x37fdb0=this[_0x370be8(0x69a)]();return $gameMap['roundXWithDirection'](this['x'],_0x37fdb0);},Game_CharacterBase['prototype']['frontY']=function(){const _0x4ee6bf=_0x55137b,_0x1023f8=this[_0x4ee6bf(0x69a)]();return $gameMap['roundYWithDirection'](this['y'],_0x1023f8);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x689)]=function(){const _0x360d4d=_0x55137b,_0x143a84=this[_0x360d4d(0x4f3)](this['direction']());return $gameMap[_0x360d4d(0x28b)](this['x'],_0x143a84);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x4c0)]=function(){const _0x2853ab=_0x55137b,_0xf805be=this[_0x2853ab(0x4f3)](this[_0x2853ab(0x69a)]());return $gameMap[_0x2853ab(0x47d)](this['y'],_0xf805be);},Game_CharacterBase['prototype']['ccwX']=function(){const _0x173f64=_0x55137b,_0x1823c8=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x173f64(0x69a)]()];return $gameMap['roundXWithDirection'](this['x'],_0x1823c8);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x4b9)]=function(){const _0x2c2126=_0x55137b,_0x497f4e=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x2c2126(0x69a)]()];return $gameMap[_0x2c2126(0x47d)](this['y'],_0x497f4e);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x3d5)]=function(){const _0x3d8c73=_0x55137b,_0x1d7c0f=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x3d8c73(0x69a)]()];return $gameMap[_0x3d8c73(0x28b)](this['x'],_0x1d7c0f);},Game_CharacterBase[_0x55137b(0x65a)]['cwY']=function(){const _0xcf1b20=_0x55137b,_0x18ef27=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0xcf1b20(0x69a)]()];return $gameMap['roundYWithDirection'](this['y'],_0x18ef27);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x3ca)]=Game_Character['prototype'][_0x55137b(0x59e)],Game_Character['prototype']['setMoveRoute']=function(_0xf4d089){const _0x221919=_0x55137b;route=JsonEx['makeDeepCopy'](_0xf4d089),VisuMZ[_0x221919(0x2a6)][_0x221919(0x3ca)][_0x221919(0x24a)](this,route);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x4b7)]=Game_Character[_0x55137b(0x65a)][_0x55137b(0x6b3)],Game_Character['prototype']['forceMoveRoute']=function(_0x11587a){const _0x2c38c0=_0x55137b;route=JsonEx[_0x2c38c0(0x2aa)](_0x11587a),VisuMZ[_0x2c38c0(0x2a6)][_0x2c38c0(0x4b7)]['call'](this,route);},VisuMZ['EventsMoveCore'][_0x55137b(0x6e2)]=Game_Character[_0x55137b(0x65a)][_0x55137b(0x64f)],Game_Character['prototype'][_0x55137b(0x64f)]=function(_0x3f9d1f){const _0x46b6b7=_0x55137b,_0x255e9f=Game_Character,_0x3b679d=_0x3f9d1f[_0x46b6b7(0x62d)];if(_0x3f9d1f['code']===_0x255e9f[_0x46b6b7(0x574)]){if(_0x46b6b7(0x68a)===_0x46b6b7(0x68a)){let _0x2b3651=_0x3f9d1f['parameters'][0x0];_0x2b3651=this[_0x46b6b7(0x628)](_0x2b3651),_0x2b3651=this[_0x46b6b7(0x612)](_0x2b3651),this['processMoveCommandEventsMoveCore'](_0x3f9d1f,_0x2b3651);}else{const _0x14e12c=_0x384af5(_0x3041ea['$1'])[_0x46b6b7(0x571)]()[_0x46b6b7(0x5d3)](),_0x4fb124=_0x58e71c(_0x288b59['$2']);this['_addedHitbox'][_0x14e12c]=_0x4fb124;}}else VisuMZ['EventsMoveCore'][_0x46b6b7(0x6e2)][_0x46b6b7(0x24a)](this,_0x3f9d1f);},Game_Character[_0x55137b(0x65a)][_0x55137b(0x628)]=function(_0x3df617){const _0x538630=_0x55137b,_0x2eb6d8=/\$gameVariables\.value\((\d+)\)/gi,_0x13399e=/\\V\[(\d+)\]/gi;while(_0x3df617[_0x538630(0x614)](_0x2eb6d8)){_0x3df617=_0x3df617[_0x538630(0x25f)](_0x2eb6d8,(_0x537ac9,_0x432028)=>$gameVariables[_0x538630(0x67e)](parseInt(_0x432028)));}while(_0x3df617['match'](_0x13399e)){_0x3df617=_0x3df617['replace'](_0x13399e,(_0x3204a9,_0x1615a4)=>$gameVariables[_0x538630(0x67e)](parseInt(_0x1615a4)));}return _0x3df617;},Game_Character[_0x55137b(0x65a)][_0x55137b(0x612)]=function(_0x4c5ca3){const _0xf8b424=_0x55137b,_0x5ef39a=/\\SELFVAR\[(\d+)\]/gi;while(_0x4c5ca3[_0xf8b424(0x614)](_0x5ef39a)){if('OfJDs'!==_0xf8b424(0x47e))return _0x1b54b2[_0xf8b424(0x2a6)][_0xf8b424(0x6ea)][_0xf8b424(0x607)];else _0x4c5ca3=_0x4c5ca3[_0xf8b424(0x25f)](_0x5ef39a,(_0xde1607,_0x34dac2)=>getSelfVariableValue(this[_0xf8b424(0x378)],this[_0xf8b424(0x627)],parseInt(_0x34dac2)));}return _0x4c5ca3;},Game_Character[_0x55137b(0x65a)]['processMoveCommandEventsMoveCore']=function(_0x1a0007,_0x5d7e37){const _0x5382d2=_0x55137b;if(_0x5d7e37[_0x5382d2(0x614)](/ANIMATION:[ ](\d+)/i)){if('jOpqz'==='UgADG'){if(_0xec452e)_0x265a68[_0x5382d2(0x439)](_0x377335);}else return this[_0x5382d2(0x58a)](Number(RegExp['$1']));}if(_0x5d7e37[_0x5382d2(0x614)](/BALLOON:[ ](.*)/i))return this[_0x5382d2(0x51a)](String(RegExp['$1']));if(_0x5d7e37[_0x5382d2(0x614)](/FADE IN:[ ](\d+)/i))return this[_0x5382d2(0x3f5)](Number(RegExp['$1']));if(_0x5d7e37['match'](/FADE OUT:[ ](\d+)/i))return this['processMoveRouteFadeOut'](Number(RegExp['$1']));if(_0x5d7e37[_0x5382d2(0x614)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:TRUE|ON)/i)){if(_0x5382d2(0x589)===_0x5382d2(0x238)){const _0x5bba13=this['_eventCopyData']['mapId'],_0x5abd32=this[_0x5382d2(0x431)][_0x5382d2(0x506)];return _0x1f77e1[_0x5382d2(0x354)](_0x5bba13,_0x5abd32);}else return this[_0x5382d2(0x641)]();}if(_0x5d7e37[_0x5382d2(0x614)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:FALSE|OFF)/i))return this[_0x5382d2(0x407)]();if(_0x5d7e37[_0x5382d2(0x614)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:TRUE|ON)/i))return this[_0x5382d2(0x383)]();if(_0x5d7e37[_0x5382d2(0x614)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:FALSE|OFF)/i))return this[_0x5382d2(0x60d)]();if(_0x5d7e37[_0x5382d2(0x614)](/HUG:[ ]LEFT/i))return this[_0x5382d2(0x302)](_0x5382d2(0x3e0));if(_0x5d7e37[_0x5382d2(0x614)](/HUG:[ ]RIGHT/i))return this[_0x5382d2(0x302)](_0x5382d2(0x5de));if(_0x5d7e37['match'](/INDEX:[ ](\d+)/i)){if(_0x5382d2(0x1fa)!==_0x5382d2(0x25e))return this[_0x5382d2(0x5d7)](Number(RegExp['$1']));else{if(_0x36901c[0x2][_0x5382d2(0x614)](/(?:SELF|MAP)/i))return this[_0x5382d2(0x569)](_0xe8e5f1);else{return _0x4628ad[_0x5382d2(0x2a6)][_0x5382d2(0x2ea)]['call'](this,_0x2edf81);;}}}if(_0x5d7e37[_0x5382d2(0x614)](/INDEX:[ ]([\+\-]\d+)/i)){const _0x383060=this['_characterIndex']+Number(RegExp['$1']);return this[_0x5382d2(0x5d7)](_0x383060);}if(_0x5d7e37[_0x5382d2(0x614)](/JUMP FORWARD:[ ](\d+)/i))return this[_0x5382d2(0x42e)](Number(RegExp['$1']));if(_0x5d7e37['match'](/JUMP TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){if(_0x5382d2(0x60b)===_0x5382d2(0x391)){_0x122f84=this[_0x5382d2(0x380)]-_0x6825cb,this[_0x5382d2(0x668)](_0x180bd1[_0x5382d2(0x313)](0x0,0xff));if(this[_0x5382d2(0x380)]>0x0)this[_0x5382d2(0x267)]--;}else return this['processMoveRouteJumpTo'](Number(RegExp['$1']),Number(RegExp['$2']));}if(_0x5d7e37['match'](/JUMP TO EVENT:[ ](\d+)/i)){if(_0x5382d2(0x4f8)!==_0x5382d2(0x4f8))return _0x3242d6[_0x5382d2(0x2a6)][_0x5382d2(0x3f0)][_0x5382d2(0x3ab)][_0x5382d2(0x23b)](this[_0x5382d2(0x67f)]);else{const _0x1eb20d=$gameMap[_0x5382d2(0x52c)](Number(RegExp['$1']));return this['processMoveRouteJumpToCharacter'](_0x1eb20d);}}if(_0x5d7e37[_0x5382d2(0x614)](/JUMP TO PLAYER/i))return this['processMoveRouteJumpToCharacter']($gamePlayer);if(_0x5d7e37[_0x5382d2(0x614)](/JUMP TO HOME/i)&&this['eventId']){if('PetYp'===_0x5382d2(0x1f4)){const _0x424cec=this[_0x5382d2(0x72a)],_0x4dba18=this[_0x5382d2(0x545)];return this[_0x5382d2(0x29c)](_0x424cec,_0x4dba18);}else{if(this['_EventIcons']===_0x9045d3)this['initEventsMoveCore']();const _0x2dae60=_0x5382d2(0x331)[_0x5382d2(0x69f)](_0x25413f,_0x314270);this[_0x5382d2(0x538)][_0x2dae60]={'iconIndex':_0x25683d,'bufferX':_0xa66ff3,'bufferY':_0x23be1e,'blendMode':_0x5832a8};}}if(_0x5d7e37[_0x5382d2(0x614)](/MOVE[ ](.*)[ ]UNTIL STOP/i)){const _0x502b1a=String(RegExp['$1']),_0xa511ad=this[_0x5382d2(0x687)](_0x5d7e37);return this[_0x5382d2(0x5d8)](_0x502b1a,_0xa511ad);}if(_0x5d7e37[_0x5382d2(0x614)](/MOVE TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x5822d0=Number(RegExp['$1']),_0x244bdb=Number(RegExp['$2']),_0x9ac719=this[_0x5382d2(0x687)](_0x5d7e37);return this['processMoveRouteMoveTo'](_0x5822d0,_0x244bdb,_0x9ac719);}if(_0x5d7e37[_0x5382d2(0x614)](/MOVE TO EVENT:[ ](\d+)/i)){if('ggUxW'!=='kdHJq'){const _0x317c99=$gameMap[_0x5382d2(0x52c)](Number(RegExp['$1'])),_0x420109=this[_0x5382d2(0x687)](_0x5d7e37);return this['processMoveRouteMoveToCharacter'](_0x317c99,_0x420109);}else this[_0x5382d2(0x604)]['x']=this['_character'][_0x5382d2(0x2ab)]??0x1,this[_0x5382d2(0x604)]['y']=this[_0x5382d2(0x58e)][_0x5382d2(0x673)]??0x1;}if(_0x5d7e37['match'](/MOVE TO PLAYER/i)){const _0x13dc4f=this[_0x5382d2(0x687)](_0x5d7e37);return this[_0x5382d2(0x35b)]($gamePlayer,_0x13dc4f);}if(_0x5d7e37[_0x5382d2(0x614)](/MOVE TO HOME/i)&&this['eventId']){if(_0x5382d2(0x6e3)==='vXYkD'){const _0x3e4662=_0x33b058[_0x5382d2(0x6f5)](this);if(!_0x3e4662)return;const _0x2b2fc9=_0x3e4662[_0x5382d2(0x2da)]['toUpperCase']()[_0x5382d2(0x5d3)]();_0x2b2fc9!==_0x5382d2(0x3cd)?this[_0x5382d2(0x6fb)](_0x2b2fc9,!![]):this[_0x5382d2(0x440)](_0x3e4662[_0x5382d2(0x517)],_0x3e4662['eventId'],!![]);}else{const _0x5f33d6=this[_0x5382d2(0x72a)],_0x36ec6b=this['_randomHomeY'],_0x423886=this[_0x5382d2(0x687)](_0x5d7e37);return this[_0x5382d2(0x4b0)](_0x5f33d6,_0x36ec6b,_0x423886);}}if(_0x5d7e37[_0x5382d2(0x614)](/MOVE LOWER LEFT:[ ](\d+)/i))return this[_0x5382d2(0x556)](0x1,Number(RegExp['$1']));if(_0x5d7e37[_0x5382d2(0x614)](/MOVE DOWN:[ ](\d+)/i)){if(_0x5382d2(0x71b)!==_0x5382d2(0x71b)){const _0x5cfaae=this[_0x5382d2(0x52c)]()[_0x5382d2(0x501)];if(_0x5cfaae==='')return;this[_0x5382d2(0x1fc)](_0x5cfaae);}else return this[_0x5382d2(0x556)](0x2,Number(RegExp['$1']));}if(_0x5d7e37[_0x5382d2(0x614)](/MOVE LOWER RIGHT:[ ](\d+)/i)){if(_0x5382d2(0x617)!==_0x5382d2(0x2b5))return this[_0x5382d2(0x556)](0x3,Number(RegExp['$1']));else{const _0x158377=this[_0x5382d2(0x728)][_0x5382d2(0x4fe)](0x0)[_0x5382d2(0x4a1)]();for(const _0x348cca of _0x158377){if(_0x348cca)return _0x348cca;}return null;}}if(_0x5d7e37['match'](/MOVE LEFT:[ ](\d+)/i))return this[_0x5382d2(0x556)](0x4,Number(RegExp['$1']));if(_0x5d7e37[_0x5382d2(0x614)](/MOVE RIGHT:[ ](\d+)/i))return this[_0x5382d2(0x556)](0x6,Number(RegExp['$1']));if(_0x5d7e37[_0x5382d2(0x614)](/MOVE UPPER LEFT:[ ](\d+)/i))return this[_0x5382d2(0x556)](0x7,Number(RegExp['$1']));if(_0x5d7e37[_0x5382d2(0x614)](/MOVE UP:[ ](\d+)/i))return this[_0x5382d2(0x556)](0x8,Number(RegExp['$1']));if(_0x5d7e37[_0x5382d2(0x614)](/MOVE UPPER RIGHT:[ ](\d+)/i)){if(_0x5382d2(0x615)===_0x5382d2(0x615))return this[_0x5382d2(0x556)](0x9,Number(RegExp['$1']));else this[_0x5382d2(0x604)]['x']=0x1/_0x50bb94['zoomScale'](),this[_0x5382d2(0x604)]['y']=0x1/_0x10ebf5[_0x5382d2(0x677)](),this[_0x5382d2(0x587)]=_0x487e85[_0x5382d2(0x677)]();}if(_0x5d7e37['match'](/OPACITY:[ ](\d+)([%％])/i)){if(_0x5382d2(0x387)!=='KTRlx')this[_0x5382d2(0x5b3)]=!![];else{const _0x3d81cf=Math['round'](Number(RegExp['$1'])/0x64*0xff);return this[_0x5382d2(0x668)](_0x3d81cf[_0x5382d2(0x313)](0x0,0xff));}}if(_0x5d7e37[_0x5382d2(0x614)](/OPACITY:[ ]([\+\-]\d+)([%％])/i)){const _0x413399=this['_opacity']+Math[_0x5382d2(0x30b)](Number(RegExp['$1'])/0x64*0xff);return this[_0x5382d2(0x668)](_0x413399[_0x5382d2(0x313)](0x0,0xff));}if(_0x5d7e37['match'](/OPACITY:[ ]([\+\-]\d+)/i)){const _0x470191=this[_0x5382d2(0x380)]+Number(RegExp['$1']);return this[_0x5382d2(0x668)](_0x470191[_0x5382d2(0x313)](0x0,0xff));}if(_0x5d7e37[_0x5382d2(0x614)](/PATTERN LOCK:[ ](\d+)/i))return this['processMoveRoutePatternLock'](Number(RegExp['$1']));if(_0x5d7e37[_0x5382d2(0x614)](/PATTERN UNLOCK/i))return'SSUut'===_0x5382d2(0x53b)?this['_patternLocked']=![]:this[_0x5382d2(0x569)](_0x164081);if(_0x5d7e37['match'](/POSE:[ ](.*)/i)){const _0x110755=String(RegExp['$1'])[_0x5382d2(0x557)]()['trim']();return this[_0x5382d2(0x244)](_0x110755);}if(_0x5d7e37[_0x5382d2(0x614)](/STEP TOWARD:\s*(\d+)\s*[, ]\s*(\d+)/i)){if(_0x5382d2(0x2e8)==='PldGF')return _0x2296f2[_0x5382d2(0x438)](this),_0x53fd91['EventsMoveCore'][_0x5382d2(0x2f6)][_0x5382d2(0x24a)](this,_0x170889);else{const _0x572823=Number(RegExp['$1']),_0x12ba42=Number(RegExp['$2']);return this[_0x5382d2(0x280)](_0x572823,_0x12ba42);}}if(_0x5d7e37[_0x5382d2(0x614)](/STEP TOWARD EVENT:[ ](\d+)/i)){if('wogJh'==='wogJh'){const _0x7bdd1a=$gameMap[_0x5382d2(0x52c)](Number(RegExp['$1']));return this[_0x5382d2(0x5fe)](_0x7bdd1a);}else _0x48b651[_0x5382d2(0x53d)](_0x3859a8,_0x41033f),_0x329e05['despawnTerrainTags'](_0x458c00['TerrainTags']);}if(_0x5d7e37[_0x5382d2(0x614)](/STEP TOWARD PLAYER/i))return this[_0x5382d2(0x5fe)]($gamePlayer);if(_0x5d7e37['match'](/STEP TOWARD HOME/i)&&this['eventId']){const _0x919890=this[_0x5382d2(0x72a)],_0x4afc3e=this[_0x5382d2(0x545)];return this[_0x5382d2(0x280)](_0x919890,_0x4afc3e);}if(_0x5d7e37[_0x5382d2(0x614)](/STEP AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i)){if(_0x5382d2(0x413)!==_0x5382d2(0x413)){_0xef14da[_0x5382d2(0x53d)](_0x201908,_0x23bfa6);const _0x4755d0=_0x36ce25['getLastPluginCommandInterpreter']();_0x52666f['despawnEventId'](_0x1143a7['EventID']||_0x4755d0[_0x5382d2(0x506)]());}else return this[_0x5382d2(0x573)](Number(RegExp['$1']),Number(RegExp['$2']));}if(_0x5d7e37[_0x5382d2(0x614)](/STEP AWAY FROM EVENT:[ ](\d+)/i)){if('xIcYR'!==_0x5382d2(0x541))return this[_0x5382d2(0x26c)]()[_0x5382d2(0x456)](_0x5d04f4,_0x425a8b,_0xadbb72);else{const _0xf0faee=$gameMap[_0x5382d2(0x52c)](Number(RegExp['$1']));return this['moveAwayFromCharacter'](_0xf0faee);}}if(_0x5d7e37[_0x5382d2(0x614)](/STEP AWAY FROM PLAYER/i))return this[_0x5382d2(0x493)]($gamePlayer);if(_0x5d7e37['match'](/STEP AWAY FROM HOME/i)&&this[_0x5382d2(0x506)]){const _0x96df70=this['_randomHomeX'],_0x33f410=this['_randomHomeY'];return this['moveAwayFromPoint'](_0x96df70,_0x33f410);}if(_0x5d7e37['match'](/TURN TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this['moveTowardPoint'](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x5d7e37[_0x5382d2(0x614)](/TURN TO EVENT:[ ](\d+)/i)){const _0x59f363=$gameMap[_0x5382d2(0x52c)](Number(RegExp['$1']));return this[_0x5382d2(0x533)](_0x59f363);}if(_0x5d7e37['match'](/TURN TO PLAYER/i))return this[_0x5382d2(0x533)]($gamePlayer);if(_0x5d7e37[_0x5382d2(0x614)](/TURN TO HOME/i)&&this[_0x5382d2(0x506)]){const _0x5bbb54=this['_randomHomeX'],_0x1be5ae=this[_0x5382d2(0x545)];return this[_0x5382d2(0x5d2)](_0x5bbb54,_0x1be5ae);}if(_0x5d7e37[_0x5382d2(0x614)](/TURN AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x5382d2(0x5b9)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x5d7e37[_0x5382d2(0x614)](/TURN AWAY FROM EVENT:[ ](\d+)/i)){const _0x609977=$gameMap[_0x5382d2(0x52c)](Number(RegExp['$1']));return this[_0x5382d2(0x44e)](_0x609977);}if(_0x5d7e37[_0x5382d2(0x614)](/TURN AWAY FROM PLAYER/i))return this[_0x5382d2(0x44e)]($gamePlayer);if(_0x5d7e37['match'](/TURN AWAY FROM HOME/i)&&this[_0x5382d2(0x506)]){if(_0x5382d2(0x212)!==_0x5382d2(0x277)){const _0x4b3915=this[_0x5382d2(0x72a)],_0x114670=this['_randomHomeY'];return this['turnAwayFromPoint'](_0x4b3915,_0x114670);}else{if(this[_0x5382d2(0x52c)]()&&!_0x4b5fde[_0x5382d2(0x5bc)]()){if(this[_0x5382d2(0x52c)]()[_0x5382d2(0x501)][_0x5382d2(0x614)](/<(?:PLAYTEST|PLAY TEST)>/i))return-0x1;}return this[_0x5382d2(0x622)]=![],this[_0x5382d2(0x6f3)]=![],this[_0x5382d2(0x52c)]()?_0x4e293e[_0x5382d2(0x2a6)][_0x5382d2(0x65d)][_0x5382d2(0x24a)](this):-0x1;}}if(_0x5d7e37[_0x5382d2(0x614)](/TURN LOWER LEFT/i))return this[_0x5382d2(0x62f)](0x1);if(_0x5d7e37[_0x5382d2(0x614)](/TURN LOWER RIGHT/i))return this['setDirection'](0x3);if(_0x5d7e37[_0x5382d2(0x614)](/TURN UPPER LEFT/i)){if(_0x5382d2(0x637)!=='Qzcmq'){const _0x2093b1=_0x529465;_0x44c897[_0x5382d2(0x2f9)](_0x2093b1);const _0x5e9d17=_0x12542a[_0x5382d2(0x2a6)]['Game_Interpreter_executeCommand'][_0x5382d2(0x24a)](this);return _0x5cd07a[_0x5382d2(0x319)](),_0x5e9d17;}else return this[_0x5382d2(0x62f)](0x7);}if(_0x5d7e37[_0x5382d2(0x614)](/TURN UPPER RIGHT/i))return this[_0x5382d2(0x62f)](0x9);if(_0x5d7e37['match'](/Self Switch[ ](.*):[ ](.*)/i)){if(_0x5382d2(0x255)!==_0x5382d2(0x255)){const _0x369a19=_0x16c283['GetMoveSynchTarget'](this[_0x5382d2(0x732)]());this['moveAwayFromCharacter'](_0x369a19);}else return this[_0x5382d2(0x67c)](RegExp['$1'],RegExp['$2']);}if(_0x5d7e37['match'](/Self Variable[ ](.*):[ ](.*)/i)){if('dmpov'!=='dmpov'){const _0x18c434=this[_0x5382d2(0x72a)],_0x59eeba=this['_randomHomeY'];return this['processMoveRouteTeleportTo'](_0x18c434,_0x59eeba);}else return this['processMoveRouteSelfVariable'](RegExp['$1'],RegExp['$2']);}if(_0x5d7e37[_0x5382d2(0x614)](/TELEPORT TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this['processMoveRouteTeleportTo'](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x5d7e37[_0x5382d2(0x614)](/TELEPORT TO EVENT:[ ](\d+)/i)){if('hbUnH'!==_0x5382d2(0x41a))this[_0x5382d2(0x57c)]=!![],this[_0x5382d2(0x490)]([0x0,0x1,0x2])&&this[_0x5382d2(0x318)]();else{const _0x53a1a9=$gameMap[_0x5382d2(0x52c)](Number(RegExp['$1']));return this['processMoveRouteTeleportToCharacter'](_0x53a1a9);}}if(_0x5d7e37['match'](/TELEPORT TO PLAYER/i)){if(_0x5382d2(0x5f2)!==_0x5382d2(0x5f2))_0x9d9858[_0x5382d2(0x55c)](this['_eventId']);else return this[_0x5382d2(0x6dc)]($gamePlayer);}if(_0x5d7e37[_0x5382d2(0x614)](/TELEPORT TO HOME/i)&&this[_0x5382d2(0x506)]){if('ZFZJz'!=='GuGEB'){const _0x4ebf8c=this[_0x5382d2(0x72a)],_0x3d9929=this[_0x5382d2(0x545)];return this[_0x5382d2(0x4c2)](_0x4ebf8c,_0x3d9929);}else{if(this[_0x5382d2(0x732)]()>=0x0){const _0x5e042e=_0x985633[_0x5382d2(0x4d5)](this[_0x5382d2(0x732)]());if(_0x5e042e){const _0x10ddf9=_0x138ab7[_0x5382d2(0x405)](this[_0x5382d2(0x2c8)],this[_0x5382d2(0x512)],_0x5e042e[_0x5382d2(0x2c8)],_0x5e042e[_0x5382d2(0x512)])-0x1,_0x2f02a7=_0x4ed62f[_0x5382d2(0x642)](_0x2915a3[_0x5382d2(0x5cb)](),_0x35b2e0[_0x5382d2(0x6f4)]()),_0xa45c89=this[_0x5382d2(0x64c)][_0x5382d2(0x66e)]||0x0;_0x156c4f-=_0x409aab[_0x5382d2(0x69d)](0x0,_0x10ddf9)*_0x2f02a7*_0xa45c89;}}return _0x3a4f97;}}try{_0x5382d2(0x442)===_0x5382d2(0x442)?VisuMZ[_0x5382d2(0x2a6)]['Game_Character_processMoveCommand'][_0x5382d2(0x24a)](this,_0x1a0007):this[_0x5382d2(0x498)]();}catch(_0x147ba4){if($gameTemp[_0x5382d2(0x5bc)]())console[_0x5382d2(0x68e)](_0x147ba4);}},Game_Character[_0x55137b(0x65a)][_0x55137b(0x58a)]=function(_0x5911dc){const _0x49936f=_0x55137b;$gameTemp[_0x49936f(0x3c2)]([this],_0x5911dc);},Game_Character[_0x55137b(0x65a)][_0x55137b(0x51a)]=function(_0x552723){const _0x20926b=_0x55137b;let _0x3d02a8=0x0;switch(_0x552723[_0x20926b(0x557)]()[_0x20926b(0x5d3)]()){case'!':case _0x20926b(0x4ae):_0x3d02a8=0x1;break;case'?':case _0x20926b(0x216):_0x3d02a8=0x2;break;case'MUSIC':case'NOTE':case'MUSIC\x20NOTE':case _0x20926b(0x324):case _0x20926b(0x531):_0x3d02a8=0x3;break;case'HEART':case'LOVE':_0x3d02a8=0x4;break;case _0x20926b(0x588):_0x3d02a8=0x5;break;case _0x20926b(0x4c8):_0x3d02a8=0x6;break;case _0x20926b(0x655):case _0x20926b(0x63c):case _0x20926b(0x20b):_0x3d02a8=0x7;break;case _0x20926b(0x36c):case _0x20926b(0x21e):_0x3d02a8=0x8;break;case'LIGHT':case _0x20926b(0x39a):case'LIGHT\x20BULB':case _0x20926b(0x734):case _0x20926b(0x2b8):_0x3d02a8=0x9;break;case'Z':case'ZZ':case _0x20926b(0x4bb):case'SLEEP':_0x3d02a8=0xa;break;case _0x20926b(0x720):_0x3d02a8=0xb;break;case'USER-DEFINED\x202':_0x3d02a8=0xc;break;case'USER-DEFINED\x203':_0x3d02a8=0xd;break;case'USER-DEFINED\x204':_0x3d02a8=0xe;break;case _0x20926b(0x71f):_0x3d02a8=0xf;break;}$gameTemp[_0x20926b(0x228)](this,_0x3d02a8);},Game_Character[_0x55137b(0x65a)]['processMoveRouteFadeIn']=function(_0x27d299){const _0x4bc4c0=_0x55137b;_0x27d299+=this[_0x4bc4c0(0x380)],this['setOpacity'](_0x27d299[_0x4bc4c0(0x313)](0x0,0xff));if(this[_0x4bc4c0(0x380)]<0xff)this['_moveRouteIndex']--;},Game_Character['prototype'][_0x55137b(0x565)]=function(_0x3c1c6d){const _0x1a046a=_0x55137b;_0x3c1c6d=this[_0x1a046a(0x380)]-_0x3c1c6d,this[_0x1a046a(0x668)](_0x3c1c6d['clamp'](0x0,0xff));if(this[_0x1a046a(0x380)]>0x0)this['_moveRouteIndex']--;},Game_Character[_0x55137b(0x65a)]['processMoveRouteHugWall']=function(_0x3ba28c){const _0x1e6174=_0x55137b,_0x10c43a=[0x0,0x3,0x6,0x9,0x2,0x0,0x8,0x1,0x4,0x7],_0x19a347=[0x0,0x7,0x4,0x1,0x8,0x0,0x2,0x9,0x6,0x3],_0x3419a0=this[_0x1e6174(0x69a)](),_0x3a2f23=(_0x3ba28c===_0x1e6174(0x3e0)?_0x10c43a:_0x19a347)[_0x3419a0],_0x14abbc=(_0x3ba28c===_0x1e6174(0x3e0)?_0x19a347:_0x10c43a)[_0x3419a0];if(this[_0x1e6174(0x25b)](this['x'],this['y'],_0x3a2f23))_0x3ba28c==='left'?this[_0x1e6174(0x336)]():this[_0x1e6174(0x3d8)]();else{if(!this[_0x1e6174(0x25b)](this['x'],this['y'],this['direction']())){if(_0x1e6174(0x504)!==_0x1e6174(0x5dc)){if(this[_0x1e6174(0x25b)](this['x'],this['y'],_0x14abbc)){if(_0x1e6174(0x5f9)==='UJvNN')_0x3ba28c==='left'?this['turnRight90']():this[_0x1e6174(0x336)]();else{_0x566244['ConvertParams'](_0xe2ca63,_0x280cc0);const _0x39a057=_0x2d21f0[_0x1e6174(0x62c)];_0xafbd44[_0x1e6174(0x257)](_0x39a057);}}else{if(_0x1e6174(0x5fa)!==_0x1e6174(0x659))this['turn180']();else{if(!_0x56d7f7['EventsMoveCore'][_0x1e6174(0x6ea)]['Movement'][_0x1e6174(0x290)])return;for(const _0x62657 of this[_0x1e6174(0x691)]){this['_tilemap']['removeChild'](_0x62657['_shadowSprite']);}}}}else{_0x488b5e[_0x1e6174(0x53d)](_0x2f2b59,_0x162f96);const _0x41df48=_0x2691b5[_0x1e6174(0x4fa)]||_0x43584d[_0x1e6174(0x517)]();_0x37d57d[_0x1e6174(0x4d1)](_0x41df48);}}}this[_0x1e6174(0x25b)](this['x'],this['y'],this['direction']())&&this[_0x1e6174(0x621)]();},Game_Character[_0x55137b(0x65a)][_0x55137b(0x5d7)]=function(_0x3bc335){const _0x556617=_0x55137b;if(ImageManager[_0x556617(0x34c)](this[_0x556617(0x4e6)]))return;_0x3bc335=_0x3bc335['clamp'](0x0,0x7),this['setImage'](this[_0x556617(0x4e6)],_0x3bc335);},Game_Character[_0x55137b(0x65a)][_0x55137b(0x42e)]=function(_0x21d039){const _0x84fc5a=_0x55137b;switch(this['direction']()){case 0x1:this[_0x84fc5a(0x6a9)](-_0x21d039,_0x21d039);break;case 0x2:this[_0x84fc5a(0x6a9)](0x0,_0x21d039);break;case 0x3:this['jump'](_0x21d039,_0x21d039);break;case 0x4:this[_0x84fc5a(0x6a9)](-_0x21d039,0x0);break;case 0x6:this[_0x84fc5a(0x6a9)](_0x21d039,0x0);break;case 0x7:this[_0x84fc5a(0x6a9)](-_0x21d039,-_0x21d039);break;case 0x8:this[_0x84fc5a(0x6a9)](0x0,-_0x21d039);break;case 0x9:this[_0x84fc5a(0x6a9)](_0x21d039,-_0x21d039);break;}},Game_Character[_0x55137b(0x65a)]['processMoveRouteJumpTo']=function(_0x5b68c5,_0x42a077){const _0x2f9ed0=_0x55137b,_0xe7cc62=Math[_0x2f9ed0(0x30b)](_0x5b68c5-this['x']),_0x38ca86=Math[_0x2f9ed0(0x30b)](_0x42a077-this['y']);this[_0x2f9ed0(0x6a9)](_0xe7cc62,_0x38ca86);},Game_Character[_0x55137b(0x65a)][_0x55137b(0x213)]=function(_0x299da8){const _0x126177=_0x55137b;if(_0x299da8)this[_0x126177(0x29c)](_0x299da8['x'],_0x299da8['y']);},Game_Character[_0x55137b(0x65a)][_0x55137b(0x280)]=function(_0x19c665,_0x59d49d,_0x1607e6){const _0x3d79d4=_0x55137b;let _0x4145c7=0x0;if(_0x1607e6)$gameTemp[_0x3d79d4(0x4ad)]=!![];$gameMap[_0x3d79d4(0x486)]()?_0x4145c7=this[_0x3d79d4(0x50d)](_0x19c665,_0x59d49d):_0x4145c7=this['findDirectionTo'](_0x19c665,_0x59d49d);if(_0x1607e6)$gameTemp['_moveAllowPlayerCollision']=![];this[_0x3d79d4(0x41e)](_0x4145c7),this['setMovementSuccess'](!![]);},Game_Character[_0x55137b(0x65a)][_0x55137b(0x5fe)]=function(_0x399d74){const _0x3f8acb=_0x55137b;if(_0x399d74)this[_0x3f8acb(0x280)](_0x399d74['x'],_0x399d74['y']);},Game_Character[_0x55137b(0x65a)]['processMoveRouteStepFrom']=function(_0x25700f,_0x4ab7a9){const _0x2f1511=_0x55137b,_0x5b5f1c=this[_0x2f1511(0x243)](_0x25700f),_0x187260=this[_0x2f1511(0x36f)](_0x4ab7a9);},Game_Character[_0x55137b(0x65a)][_0x55137b(0x687)]=function(_0xb29393){const _0x330d97=_0x55137b;if(_0xb29393[_0x330d97(0x614)](/(?:CRASH|COLLIDE|COLLISION|ENCOUNTER|TOUCH)/i))return!![];else return _0xb29393['match'](/(?:AVOID|EVADE|DODGE)/i)?_0x330d97(0x6e7)!==_0x330d97(0x55e)?![]:_0x5938a4[_0x330d97(0x2a6)]['Settings'][_0x330d97(0x4e4)][_0x330d97(0x4d6)]:![];},VisuMZ[_0x55137b(0x2a6)]['Game_Event_isCollidedWithPlayerCharacters']=Game_Event[_0x55137b(0x65a)][_0x55137b(0x6ac)],Game_Event[_0x55137b(0x65a)][_0x55137b(0x6ac)]=function(_0x4eccbf,_0x207944){const _0x70500f=_0x55137b;if($gameTemp[_0x70500f(0x4ad)])return![];return VisuMZ[_0x70500f(0x2a6)][_0x70500f(0x527)][_0x70500f(0x24a)](this,_0x4eccbf,_0x207944);},Game_Character['prototype'][_0x55137b(0x5d8)]=function(_0x5c97c3,_0x286f0b){const _0x400e49=_0x55137b,_0x1e627b=['',_0x400e49(0x43a),_0x400e49(0x3c9),_0x400e49(0x36d),_0x400e49(0x3eb),'',_0x400e49(0x2b1),_0x400e49(0x3f3),'UP',_0x400e49(0x28a)],_0x41e267=_0x1e627b[_0x400e49(0x5da)](_0x5c97c3[_0x400e49(0x557)]()['trim']());if(_0x41e267<=0x0)return;if(_0x286f0b)$gameTemp[_0x400e49(0x4ad)]=!![];if(this[_0x400e49(0x25b)](this['x'],this['y'],_0x41e267)){if(_0x286f0b)$gameTemp[_0x400e49(0x4ad)]=![];this[_0x400e49(0x41e)](_0x41e267),this['_moveRouteIndex']-=0x1;}if(_0x286f0b)$gameTemp[_0x400e49(0x4ad)]=![];},Game_Character[_0x55137b(0x65a)][_0x55137b(0x4b0)]=function(_0x2db71c,_0x15bb74,_0x2a8f1d){const _0x2331ac=_0x55137b;this[_0x2331ac(0x280)](_0x2db71c,_0x15bb74,_0x2a8f1d);if(this['x']!==_0x2db71c||this['y']!==_0x15bb74)this[_0x2331ac(0x267)]--;},Game_Character[_0x55137b(0x65a)][_0x55137b(0x35b)]=function(_0xf4a79e,_0x358b18){const _0x2fbdf3=_0x55137b;if(_0xf4a79e&&!_0xf4a79e[_0x2fbdf3(0x51c)]){this[_0x2fbdf3(0x4b0)](_0xf4a79e['x'],_0xf4a79e['y'],_0x358b18);if(_0xf4a79e[_0x2fbdf3(0x521)]()&&this[_0x2fbdf3(0x521)]()){if(_0x2fbdf3(0x2fa)!==_0x2fbdf3(0x2fa))this[_0x2fbdf3(0x312)]=_0x13afbd[_0x2fbdf3(0x39b)](),_0x342d19[_0x2fbdf3(0x2a6)][_0x2fbdf3(0x47b)]['call'](this,_0x8a7eaa,_0x314e38);else{const _0x3a126d=$gameMap[_0x2fbdf3(0x405)](this['x'],this['y'],_0xf4a79e['x'],_0xf4a79e['y']);if(_0x3a126d<=0x1)this[_0x2fbdf3(0x267)]++;}}}},Game_Character['prototype'][_0x55137b(0x556)]=function(_0x7cc6fd,_0x52f0b8){const _0x444d77=_0x55137b;_0x52f0b8=_0x52f0b8||0x0;const _0x38f95f={'code':0x1,'indent':null,'parameters':[]};_0x38f95f[_0x444d77(0x5ac)]=[0x0,0x5,0x1,0x6,0x2,0x0,0x3,0x7,0x4,0x8][_0x7cc6fd],this[_0x444d77(0x39e)][_0x444d77(0x6fe)][this[_0x444d77(0x267)]][_0x444d77(0x62d)][0x0]='';while(_0x52f0b8--){this['_moveRoute'][_0x444d77(0x6fe)][_0x444d77(0x4ed)](this[_0x444d77(0x267)]+0x1,0x0,_0x38f95f);}},Game_Character['prototype'][_0x55137b(0x281)]=function(_0x292d4f){const _0x3ca335=_0x55137b;this[_0x3ca335(0x597)]=!![],this[_0x3ca335(0x665)](_0x292d4f);},Game_Character[_0x55137b(0x65a)][_0x55137b(0x67c)]=function(_0x558444,_0x6d387a){const _0x1908a9=_0x55137b;if(this===$gamePlayer)return;const _0x1fe78c=[this['_mapId'],this[_0x1908a9(0x627)],'A'];if(_0x558444[_0x1908a9(0x614)](/\b[ABCD]\b/i)){if(_0x1908a9(0x296)===_0x1908a9(0x4d4)){if(_0x38ce8c[_0x1908a9(0x37e)]())return!![];return this[_0x1908a9(0x339)];}else _0x1fe78c[0x2]=String(_0x558444)['charAt'](0x0)['toUpperCase']()[_0x1908a9(0x5d3)]();}else _0x1fe78c[0x2]='Self\x20Switch\x20%1'['format'](_0x558444);switch(_0x6d387a[_0x1908a9(0x557)]()['trim']()){case'ON':case _0x1908a9(0x462):$gameSelfSwitches[_0x1908a9(0x464)](_0x1fe78c,!![]);break;case _0x1908a9(0x385):case _0x1908a9(0x31e):$gameSelfSwitches['setValue'](_0x1fe78c,![]);break;case'TOGGLE':$gameSelfSwitches[_0x1908a9(0x464)](_0x1fe78c,!$gameSelfSwitches[_0x1908a9(0x67e)](_0x1fe78c));break;}},Game_Character[_0x55137b(0x65a)][_0x55137b(0x6ed)]=function(_0xdc43ab,_0x5bc97e){const _0x1bff4a=_0x55137b;if(this===$gamePlayer)return;const _0x44386c=[this['_mapId'],this[_0x1bff4a(0x627)],_0x1bff4a(0x60f)[_0x1bff4a(0x69f)](_0xdc43ab)];$gameSelfSwitches[_0x1bff4a(0x464)](_0x44386c,Number(_0x5bc97e));},Game_Character['prototype'][_0x55137b(0x4c2)]=function(_0x3dbc8e,_0x4a3032){const _0x2c4c79=_0x55137b;this[_0x2c4c79(0x5be)](_0x3dbc8e,_0x4a3032);},Game_Character['prototype']['processMoveRouteTeleportToCharacter']=function(_0x3259d3){const _0x5bcdb2=_0x55137b;if(_0x3259d3)this[_0x5bcdb2(0x4c2)](_0x3259d3['x'],_0x3259d3['y']);},Game_Character[_0x55137b(0x65a)][_0x55137b(0x3d8)]=function(){const _0x2e20ad=_0x55137b;switch(this[_0x2e20ad(0x69a)]()){case 0x1:this[_0x2e20ad(0x62f)](0x7);break;case 0x2:this['setDirection'](0x4);break;case 0x3:this[_0x2e20ad(0x62f)](0x1);break;case 0x4:this[_0x2e20ad(0x62f)](0x8);break;case 0x6:this[_0x2e20ad(0x62f)](0x2);break;case 0x7:this[_0x2e20ad(0x62f)](0x9);break;case 0x8:this[_0x2e20ad(0x62f)](0x6);break;case 0x9:this[_0x2e20ad(0x62f)](0x3);break;}},Game_Character['prototype']['turnLeft90']=function(){const _0xca142d=_0x55137b;switch(this[_0xca142d(0x69a)]()){case 0x1:this['setDirection'](0x3);break;case 0x2:this[_0xca142d(0x62f)](0x6);break;case 0x3:this[_0xca142d(0x62f)](0x9);break;case 0x4:this['setDirection'](0x2);break;case 0x6:this[_0xca142d(0x62f)](0x8);break;case 0x7:this[_0xca142d(0x62f)](0x1);break;case 0x8:this[_0xca142d(0x62f)](0x4);break;case 0x9:this[_0xca142d(0x62f)](0x7);break;}},Game_Character[_0x55137b(0x65a)][_0x55137b(0x664)]=function(_0xf18588,_0x52cc97,_0x23f0fa){const _0x41ce4e=_0x55137b,_0x332923=this[_0x41ce4e(0x243)](_0xf18588),_0x3ec403=this[_0x41ce4e(0x36f)](_0x52cc97);if($gameMap[_0x41ce4e(0x486)]()){if(_0x23f0fa||this['isSpriteVS8dir']()){if(_0x332923>0x0&&_0x3ec403<0x0)return 0x1;if(_0x332923<0x0&&_0x3ec403<0x0)return 0x3;if(_0x332923>0x0&&_0x3ec403>0x0)return 0x7;if(_0x332923<0x0&&_0x3ec403>0x0)return 0x9;}}if(Math[_0x41ce4e(0x4f2)](_0x332923)>Math['abs'](_0x3ec403))return _0x332923>0x0?0x4:0x6;else{if(_0x3ec403!==0x0){if(_0x41ce4e(0x695)!==_0x41ce4e(0x4a2))return _0x3ec403>0x0?0x8:0x2;else this[_0x41ce4e(0x3f4)][_0x41ce4e(0x58e)]['isSpriteVS8dir']()&&(this['x']+=_0x5bde76[_0x41ce4e(0x2a6)][_0x41ce4e(0x6ea)][_0x41ce4e(0x4a3)][_0x41ce4e(0x6ce)],this['y']+=_0x1660f8[_0x41ce4e(0x2a6)][_0x41ce4e(0x6ea)][_0x41ce4e(0x4a3)][_0x41ce4e(0x45c)]);}}return 0x0;},Game_Character[_0x55137b(0x65a)][_0x55137b(0x303)]=function(_0x5a1440,_0x2f01af,_0x48e16f){const _0x48d8e0=_0x55137b,_0xd799bf=this[_0x48d8e0(0x243)](_0x5a1440),_0x854951=this['deltaYFrom'](_0x2f01af);if($gameMap[_0x48d8e0(0x486)]()){if(_0x48d8e0(0x6fd)!==_0x48d8e0(0x3df)){if(_0x48e16f||this[_0x48d8e0(0x28f)]()){if('LEeIr'===_0x48d8e0(0x5f0)){if(_0xd799bf>0x0&&_0x854951<0x0)return 0x9;if(_0xd799bf<0x0&&_0x854951<0x0)return 0x7;if(_0xd799bf>0x0&&_0x854951>0x0)return 0x3;if(_0xd799bf<0x0&&_0x854951>0x0)return 0x1;}else return _0x4332b7>0x0?0x8:0x2;}}else{const _0x12099b=this['_proxyWindow']['itemPadding']();this[_0x48d8e0(0x727)][_0x48d8e0(0x2ce)](this['_text'],_0x12099b,0x0);}}if(Math['abs'](_0xd799bf)>Math['abs'](_0x854951))return _0xd799bf>0x0?0x6:0x4;else{if(_0x854951!==0x0){if(_0x48d8e0(0x4cb)===_0x48d8e0(0x58d)){const _0x1379e2=this['direction']();return _0x36f01f[_0x48d8e0(0x28b)](this['x'],_0x1379e2);}else return _0x854951>0x0?0x2:0x8;}}return 0x0;},Game_Character[_0x55137b(0x65a)][_0x55137b(0x56a)]=function(_0xac10aa,_0x5f9af0){const _0x2af0fd=_0x55137b,_0x464e38=this[_0x2af0fd(0x664)](_0xac10aa,_0x5f9af0,!![]);if(_0x464e38)this[_0x2af0fd(0x41e)](_0x464e38);},Game_Character[_0x55137b(0x65a)][_0x55137b(0x573)]=function(_0x19177a,_0x1e4d1d){const _0x11b28c=_0x55137b,_0x166f6c=this[_0x11b28c(0x303)](_0x19177a,_0x1e4d1d,!![]);if(_0x166f6c)this['executeMoveDir8'](_0x166f6c);},Game_Character[_0x55137b(0x65a)]['turnTowardPoint']=function(_0x2bc58b,_0x3a5b20){const _0x34c423=_0x55137b,_0x206473=this['getDirectionToPoint'](_0x2bc58b,_0x3a5b20,![]);if(_0x206473)this[_0x34c423(0x62f)](_0x206473);},Game_Character[_0x55137b(0x65a)][_0x55137b(0x5b9)]=function(_0xd6bd78,_0x28ab37){const _0x2ef83e=_0x55137b,_0x24a1e6=this[_0x2ef83e(0x303)](_0xd6bd78,_0x28ab37,![]);if(_0x24a1e6)this[_0x2ef83e(0x62f)](_0x24a1e6);},Game_Character[_0x55137b(0x65a)][_0x55137b(0x5d5)]=function(_0x2ef1d4){if(_0x2ef1d4)this['moveTowardPoint'](_0x2ef1d4['x'],_0x2ef1d4['y']);},Game_Character['prototype'][_0x55137b(0x493)]=function(_0x15398){const _0x336425=_0x55137b;if(_0x15398)this[_0x336425(0x573)](_0x15398['x'],_0x15398['y']);},Game_Character[_0x55137b(0x65a)]['turnTowardCharacter']=function(_0x565c48){if(_0x565c48)this['turnTowardPoint'](_0x565c48['x'],_0x565c48['y']);},Game_Character[_0x55137b(0x65a)][_0x55137b(0x44e)]=function(_0x4b8515){if(_0x4b8515)this['turnAwayFromPoint'](_0x4b8515['x'],_0x4b8515['y']);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x3b9)]=Game_Player[_0x55137b(0x65a)][_0x55137b(0x58f)],Game_Player['prototype'][_0x55137b(0x58f)]=function(){const _0x589fd2=_0x55137b;if(!Game_CharacterBase[_0x589fd2(0x3d6)]&&this['isOnLadder']())return![];if(this['_forceDashing'])return!![];return VisuMZ['EventsMoveCore'][_0x589fd2(0x3b9)][_0x589fd2(0x24a)](this);},VisuMZ[_0x55137b(0x2a6)]['Game_Player_getInputDirection']=Game_Player[_0x55137b(0x65a)][_0x55137b(0x3cf)],Game_Player['prototype'][_0x55137b(0x3cf)]=function(){const _0x101147=_0x55137b;if($gameMap[_0x101147(0x486)]()){if('nNPRk'!=='nNPRk')for(const _0x45409b of _0x15cdb8){if(_0x45409b[_0x101147(0x614)](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0xfda106=_0xcbc4c9(_0x9ae5b8['$1'])[_0x101147(0x571)]()[_0x101147(0x5d3)](),_0x1f25dc=_0xcd1868(_0x5a628a['$2']);this[_0x101147(0x314)][_0xfda106]=_0x1f25dc;}}else return this[_0x101147(0x653)]();}else return _0x101147(0x61a)!==_0x101147(0x3c1)?VisuMZ[_0x101147(0x2a6)][_0x101147(0x5e8)][_0x101147(0x24a)](this):this['_shadowGraphic'][_0x101147(0x278)];},Game_Player[_0x55137b(0x65a)][_0x55137b(0x653)]=function(){const _0x4fe140=_0x55137b;return Input[_0x4fe140(0x4a7)];},Game_Player['prototype'][_0x55137b(0x35d)]=function(){const _0x2df07e=_0x55137b;if($gameSystem['isPlayerControlDisabled']())return 0x0;if(!this[_0x2df07e(0x6f6)]()&&this['canMove']()){let _0x5efa78=this[_0x2df07e(0x3cf)]();if(_0x5efa78>0x0){if('lkDNB'===_0x2df07e(0x2d1))$gameTemp[_0x2df07e(0x5cc)]();else{const _0x30dd1a=this[_0x2df07e(0x303)](_0x1ebf86,_0x446084,![]);if(_0x30dd1a)this[_0x2df07e(0x62f)](_0x30dd1a);}}else{if($gameTemp[_0x2df07e(0x31f)]()){const _0x4ce289=$gameTemp[_0x2df07e(0x4f7)](),_0x1c7c16=$gameTemp['destinationY']();this[_0x2df07e(0x45a)](_0x4ce289,_0x1c7c16)?_0x5efa78=this[_0x2df07e(0x50d)](_0x4ce289,_0x1c7c16):_0x5efa78=this[_0x2df07e(0x293)](_0x4ce289,_0x1c7c16);}}_0x5efa78>0x0?_0x2df07e(0x46b)===_0x2df07e(0x46b)?(this[_0x2df07e(0x62b)]=this[_0x2df07e(0x62b)]||0x0,this[_0x2df07e(0x584)]()?this[_0x2df07e(0x62f)](_0x5efa78):this[_0x2df07e(0x3fd)](_0x5efa78),this[_0x2df07e(0x62b)]++):(_0x5bb185[_0x2df07e(0x2a6)][_0x2df07e(0x38f)][_0x2df07e(0x24a)](this,_0x4d00db),this[_0x2df07e(0x215)]=![]):this['_inputTime']=0x0;}},Game_Player[_0x55137b(0x65a)][_0x55137b(0x584)]=function(){const _0x4442cb=_0x55137b,_0x32524e=VisuMZ[_0x4442cb(0x2a6)]['Settings'][_0x4442cb(0x344)];if(!_0x32524e[_0x4442cb(0x211)])return![];if($gameTemp['isDestinationValid']())return![];if(this['isDashing']()||this[_0x4442cb(0x6f6)]()||this[_0x4442cb(0x43d)]())return![];return this[_0x4442cb(0x62b)]<_0x32524e[_0x4442cb(0x602)];},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x30e)]=Game_Player[_0x55137b(0x65a)][_0x55137b(0x3fd)],Game_Player[_0x55137b(0x65a)][_0x55137b(0x3fd)]=function(_0x1df0a1){const _0x278552=_0x55137b;if($gameMap[_0x278552(0x486)]())this[_0x278552(0x41e)](_0x1df0a1);else{if(_0x278552(0x5bd)!==_0x278552(0x5bd)){if(!this[_0x278552(0x341)]['visible'])return![];return _0x242d8d[_0x278552(0x65a)]['isShadowVisible']['call'](this);}else VisuMZ[_0x278552(0x2a6)]['Game_Player_executeMove'][_0x278552(0x24a)](this,_0x1df0a1);}},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x53a)]=Game_Player['prototype'][_0x55137b(0x259)],Game_Player[_0x55137b(0x65a)]['isMapPassable']=function(_0x4561ca,_0x35f5b1,_0x224fa7){const _0x48dd2b=_0x55137b;if($gameMap['isRegionAllowPass'](_0x4561ca,_0x35f5b1,_0x224fa7,_0x48dd2b(0x3ba)))return _0x48dd2b(0x530)===_0x48dd2b(0x530)?this[_0x48dd2b(0x6f1)]()&&this[_0x48dd2b(0x26c)]()?this[_0x48dd2b(0x26c)]()[_0x48dd2b(0x259)](_0x4561ca,_0x35f5b1,_0x224fa7):'KbUMh'!==_0x48dd2b(0x709)?_0x299be5[_0x48dd2b(0x2a6)][_0x48dd2b(0x6ea)][_0x48dd2b(0x4e4)][_0x48dd2b(0x6e1)]:!![]:!![];if($gameMap['isRegionForbidPass'](_0x4561ca,_0x35f5b1,_0x224fa7,'player'))return![];return VisuMZ[_0x48dd2b(0x2a6)][_0x48dd2b(0x53a)][_0x48dd2b(0x24a)](this,_0x4561ca,_0x35f5b1,_0x224fa7);},VisuMZ['EventsMoveCore'][_0x55137b(0x2d7)]=Game_Player[_0x55137b(0x65a)][_0x55137b(0x3ef)],Game_Player[_0x55137b(0x65a)][_0x55137b(0x3ef)]=function(_0x41c704){const _0x743ed3=_0x55137b;VisuMZ[_0x743ed3(0x2a6)][_0x743ed3(0x2d7)]['call'](this,_0x41c704);if(this[_0x743ed3(0x581)]()){this['checkEventTriggerEventsMoveCore'](_0x41c704);if(_0x41c704['includes'](0x0)&&this[_0x743ed3(0x5c6)]()===_0x743ed3(0x3cb))this['startMapCommonEventOnOK'](this['x'],this['y']);else(_0x41c704[_0x743ed3(0x23b)](0x1)||_0x41c704[_0x743ed3(0x23b)](0x2))&&this[_0x743ed3(0x366)]();}},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x66c)]=Game_Player['prototype'][_0x55137b(0x432)],Game_Player['prototype'][_0x55137b(0x432)]=function(_0xaec0f3){const _0x4cc9c2=_0x55137b;VisuMZ[_0x4cc9c2(0x2a6)][_0x4cc9c2(0x66c)][_0x4cc9c2(0x24a)](this,_0xaec0f3);if(this[_0x4cc9c2(0x581)]()&&_0xaec0f3[_0x4cc9c2(0x23b)](0x0)&&this[_0x4cc9c2(0x5c6)]()==='front'){const _0x150876=this['direction'](),_0xce2088=$gameMap['roundXWithDirection'](this['x'],_0x150876),_0x5d8a2e=$gameMap['roundYWithDirection'](this['y'],_0x150876);this[_0x4cc9c2(0x475)](_0xce2088,_0x5d8a2e);}},Game_Player[_0x55137b(0x65a)][_0x55137b(0x2cf)]=function(_0x4bdd44){const _0x4f7b46=_0x55137b;if($gameMap[_0x4f7b46(0x51d)]())return;if($gameMap[_0x4f7b46(0x5ff)]())return;const _0x5148df=$gameMap[_0x4f7b46(0x5db)]();for(const _0x228ecb of _0x5148df){if(!_0x228ecb)continue;if(!_0x228ecb['isTriggerIn'](_0x4bdd44))continue;if(this[_0x4f7b46(0x585)](_0x228ecb))return _0x228ecb[_0x4f7b46(0x3f6)]();if(this['meetActivationProximityConditions'](_0x228ecb))return _0x228ecb[_0x4f7b46(0x3f6)]();}},Game_Player[_0x55137b(0x65a)][_0x55137b(0x585)]=function(_0x406bf6){const _0x53d33b=_0x55137b;if($gameMap['isEventRunning']())return![];if($gameMap['isAnyEventStarting']())return![];return _0x406bf6[_0x53d33b(0x698)]()[_0x53d33b(0x23b)](this['regionId']());},Game_Player['prototype'][_0x55137b(0x36e)]=function(_0x13ede4){const _0xa95c1b=_0x55137b;if($gameMap[_0xa95c1b(0x51d)]())return![];if($gameMap[_0xa95c1b(0x5ff)]())return![];if([_0xa95c1b(0x230),'region']['includes'](_0x13ede4[_0xa95c1b(0x298)]()))return![];const _0x251246=_0x13ede4[_0xa95c1b(0x298)](),_0x4e3d5e=_0x13ede4['activationProximityDistance']();switch(_0x251246){case _0xa95c1b(0x451):const _0x34e2b9=$gameMap['distance'](this['x'],this['y'],_0x13ede4['x'],_0x13ede4['y']);return _0x13ede4['activationProximityDistance']()>=_0x34e2b9;break;case _0xa95c1b(0x711):return _0x4e3d5e>=Math[_0xa95c1b(0x4f2)](_0x13ede4['deltaXFrom'](this['x']))&&_0x4e3d5e>=Math['abs'](_0x13ede4[_0xa95c1b(0x36f)](this['y']));break;case _0xa95c1b(0x731):return _0x4e3d5e>=Math[_0xa95c1b(0x4f2)](_0x13ede4[_0xa95c1b(0x36f)](this['y']));break;case'column':return _0x4e3d5e>=Math[_0xa95c1b(0x4f2)](_0x13ede4[_0xa95c1b(0x243)](this['x']));break;case _0xa95c1b(0x3c3):return![];break;}},Game_Player[_0x55137b(0x65a)]['startMapCommonEventOnOK']=function(_0xe29ea4,_0x184a3b){const _0x3e5048=_0x55137b;if($gameMap[_0x3e5048(0x51d)]())return;if($gameMap[_0x3e5048(0x5ff)]())return;let _0x27b68e=VisuMZ['EventsMoveCore'][_0x3e5048(0x6ea)][_0x3e5048(0x2ed)],_0x2643d0=$gameMap[_0x3e5048(0x71d)](_0xe29ea4,_0x184a3b);const _0x73741=_0x3e5048(0x29e)[_0x3e5048(0x69f)](_0x2643d0);_0x27b68e[_0x73741]&&$gameTemp[_0x3e5048(0x5e3)](_0x27b68e[_0x73741]);},Game_Player['prototype'][_0x55137b(0x5c6)]=function(){const _0x2fad38=_0x55137b;return VisuMZ[_0x2fad38(0x2a6)][_0x2fad38(0x6ea)]['RegionOkTarget'];},Game_Player[_0x55137b(0x65a)][_0x55137b(0x366)]=function(){const _0x44cf80=_0x55137b;if($gameMap[_0x44cf80(0x51d)]())return;if($gameMap[_0x44cf80(0x5ff)]())return;let _0x2df835=VisuMZ[_0x44cf80(0x2a6)]['Settings']['RegionTouch'];const _0x3515c4='Region%1'['format'](this[_0x44cf80(0x71d)]());_0x2df835[_0x3515c4]&&$gameTemp[_0x44cf80(0x5e3)](_0x2df835[_0x3515c4]);},VisuMZ[_0x55137b(0x2a6)]['Game_Player_increaseSteps']=Game_Player[_0x55137b(0x65a)][_0x55137b(0x5a1)],Game_Player[_0x55137b(0x65a)][_0x55137b(0x5a1)]=function(){const _0x191127=_0x55137b;VisuMZ[_0x191127(0x2a6)][_0x191127(0x402)][_0x191127(0x24a)](this),VisuMZ['MoveAllSynchTargets'](0x0);},Game_Player[_0x55137b(0x65a)]['updateMoveSynchDirection']=function(){const _0x1a86cd=_0x55137b;VisuMZ[_0x1a86cd(0x55c)](0x0);},VisuMZ['EventsMoveCore'][_0x55137b(0x38f)]=Game_Follower[_0x55137b(0x65a)][_0x55137b(0x483)],Game_Follower[_0x55137b(0x65a)][_0x55137b(0x483)]=function(_0x4909c5){const _0x525b2e=_0x55137b;VisuMZ[_0x525b2e(0x2a6)]['Game_Follower_initialize'][_0x525b2e(0x24a)](this,_0x4909c5),this[_0x525b2e(0x215)]=![];},Game_Follower[_0x55137b(0x65a)][_0x55137b(0x58f)]=function(){const _0x15911c=_0x55137b;if(this[_0x15911c(0x215)])return Game_Character['prototype'][_0x15911c(0x58f)][_0x15911c(0x24a)](this);return $gamePlayer['isDashing']();},Game_Follower[_0x55137b(0x65a)]['isDashingAndMoving']=function(){const _0x3e4d13=_0x55137b;if(this[_0x3e4d13(0x215)])return Game_Character[_0x3e4d13(0x65a)][_0x3e4d13(0x5a8)][_0x3e4d13(0x24a)](this);return $gamePlayer[_0x3e4d13(0x5a8)]()&&this[_0x3e4d13(0x3fa)];},Game_Follower[_0x55137b(0x65a)]['realMoveSpeed']=function(){const _0x419876=_0x55137b;return $gamePlayer[_0x419876(0x429)]();},Game_Follower[_0x55137b(0x65a)][_0x55137b(0x3ee)]=function(){const _0x15e9df=_0x55137b;Game_Character[_0x15e9df(0x65a)]['updateStop'][_0x15e9df(0x24a)](this),this[_0x15e9df(0x3b6)]>0x0&&(this[_0x15e9df(0x3fa)]=![]);},Game_Follower[_0x55137b(0x65a)]['setChaseOff']=function(_0x248807){const _0x2726a6=_0x55137b;this[_0x2726a6(0x215)]=_0x248807;},VisuMZ['EventsMoveCore'][_0x55137b(0x2d3)]=Game_Follower['prototype'][_0x55137b(0x50e)],Game_Follower[_0x55137b(0x65a)][_0x55137b(0x50e)]=function(_0x3dcd34){const _0xb0a142=_0x55137b;if(this['_chaseOff'])return;if($gameSystem[_0xb0a142(0x570)]())return;VisuMZ[_0xb0a142(0x2a6)]['Game_Follower_chaseCharacter']['call'](this,_0x3dcd34),this[_0xb0a142(0x3fa)]=!![];},VisuMZ['EventsMoveCore'][_0x55137b(0x24e)]=Game_Vehicle[_0x55137b(0x65a)]['isMapPassable'],Game_Vehicle[_0x55137b(0x65a)][_0x55137b(0x259)]=function(_0x3abcc3,_0x3c2bb1,_0x267415){const _0xc9a2ce=_0x55137b;if($gameMap['isRegionAllowPass'](_0x3abcc3,_0x3c2bb1,_0x267415,this['_type']))return!![];if($gameMap[_0xc9a2ce(0x529)](_0x3abcc3,_0x3c2bb1,_0x267415,this[_0xc9a2ce(0x5ad)]))return![];return VisuMZ['EventsMoveCore'][_0xc9a2ce(0x24e)][_0xc9a2ce(0x24a)](this,_0x3abcc3,_0x3c2bb1,_0x267415);},Game_Vehicle[_0x55137b(0x65a)]['isAirshipPassable']=function(_0x71ac76,_0x255694,_0x3c7e46){const _0x58be3f=_0x55137b;if($gameMap['isRegionAllowPass'](_0x71ac76,_0x255694,_0x3c7e46,this[_0x58be3f(0x5ad)]))return!![];if($gameMap['isRegionForbidPass'](_0x71ac76,_0x255694,_0x3c7e46,this[_0x58be3f(0x5ad)]))return![];return VisuMZ['EventsMoveCore'][_0x58be3f(0x648)][_0x58be3f(0x24a)]($gamePlayer,_0x71ac76,_0x255694,_0x3c7e46);},VisuMZ[_0x55137b(0x2a6)]['Game_Vehicle_isLandOk']=Game_Vehicle[_0x55137b(0x65a)][_0x55137b(0x52f)],Game_Vehicle[_0x55137b(0x65a)][_0x55137b(0x52f)]=function(_0x20e295,_0x4fd281,_0x4df9f6){const _0x153201=_0x55137b;if($gameMap['isRegionDockable'](_0x20e295,_0x4fd281,_0x4df9f6,this['_type']))return!![];const _0x28c7e4=this[_0x153201(0x5ad)]['charAt'](0x0)[_0x153201(0x557)]()+this[_0x153201(0x5ad)][_0x153201(0x4fe)](0x1),_0x1cc193='%1DockRegionOnly'[_0x153201(0x69f)](_0x28c7e4);if(VisuMZ[_0x153201(0x2a6)][_0x153201(0x6ea)][_0x153201(0x6eb)][_0x1cc193]){if(_0x153201(0x5cf)!=='lvdkc')return![];else{const _0x5bb284=_0x365d60(_0xfce209['$1'])[_0x153201(0x557)]()[_0x153201(0x5d3)](),_0xdc6536=[_0x153201(0x358),_0x153201(0x713),_0x153201(0x227),_0x153201(0x3b7)];this[_0x153201(0x510)][_0x153201(0x70b)]=_0xdc6536[_0x153201(0x5da)](_0x5bb284)['clamp'](0x0,0x3);}}else return VisuMZ[_0x153201(0x2a6)][_0x153201(0x592)][_0x153201(0x24a)](this,_0x20e295,_0x4fd281,_0x4df9f6);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x6d9)]=Game_Vehicle[_0x55137b(0x65a)][_0x55137b(0x660)],Game_Vehicle[_0x55137b(0x65a)][_0x55137b(0x660)]=function(){const _0x49560a=_0x55137b;VisuMZ[_0x49560a(0x2a6)]['Game_Vehicle_initMoveSpeed']['call'](this);const _0x59fed4=VisuMZ['EventsMoveCore'][_0x49560a(0x6ea)][_0x49560a(0x344)];if(this[_0x49560a(0x2ee)]()){if(_0x59fed4[_0x49560a(0x6be)])this[_0x49560a(0x3a1)](_0x59fed4[_0x49560a(0x6be)]);}else{if(this[_0x49560a(0x72b)]()){if(_0x59fed4[_0x49560a(0x2e4)])this[_0x49560a(0x3a1)](_0x59fed4[_0x49560a(0x2e4)]);}else{if(this[_0x49560a(0x54d)]()){if(_0x59fed4[_0x49560a(0x6fc)])this['setMoveSpeed'](_0x59fed4[_0x49560a(0x6fc)]);}}}},VisuMZ[_0x55137b(0x2a6)]['Game_Event_initialize']=Game_Event[_0x55137b(0x65a)]['initialize'],Game_Event[_0x55137b(0x65a)][_0x55137b(0x483)]=function(_0x2aced7,_0x53c338){const _0x2cfaa7=_0x55137b;VisuMZ[_0x2cfaa7(0x2a6)]['Game_Event_initialize'][_0x2cfaa7(0x24a)](this,_0x2aced7,_0x53c338),this[_0x2cfaa7(0x21b)](),this[_0x2cfaa7(0x619)](),this['restoreSavedEventPosition']();},Game_Map[_0x55137b(0x65a)][_0x55137b(0x354)]=function(_0x3dbf7b,_0x4f4792){const _0x4e6ec7=_0x55137b;if(_0x3dbf7b===$gameMap['mapId']()){if('GTiJj'===_0x4e6ec7(0x625))_0x39eec2[_0x4e6ec7(0x2a6)][_0x4e6ec7(0x5c2)]['call'](this,_0x6d706f),this['_selfEvent']=_0x3d86be[_0x4e6ec7(0x39b)]();else return $dataMap[_0x4e6ec7(0x5db)][_0x4f4792];}else return VisuMZ[_0x4e6ec7(0x1fd)][_0x3dbf7b]['events'][_0x4f4792];},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x241)]=Game_Event['prototype'][_0x55137b(0x52c)],Game_Event['prototype'][_0x55137b(0x52c)]=function(){const _0x56077b=_0x55137b;if(this[_0x56077b(0x4dd)]!==undefined){const _0x50a648=this[_0x56077b(0x4dd)]['mapId'],_0x4bc6dd=this[_0x56077b(0x4dd)][_0x56077b(0x506)];return $gameMap[_0x56077b(0x354)](_0x50a648,_0x4bc6dd);}if(this[_0x56077b(0x431)]!==undefined){if(_0x56077b(0x40d)!==_0x56077b(0x40d)){if(!_0x63091c[_0x56077b(0x3d6)]&&this[_0x56077b(0x43d)]())return![];if(this[_0x56077b(0x3bd)])return!![];return _0x463b0b[_0x56077b(0x2a6)]['Game_CharacterBase_isDashing'][_0x56077b(0x24a)](this);}else{const _0xb0e21a=this[_0x56077b(0x431)][_0x56077b(0x517)],_0x3846b8=this[_0x56077b(0x431)][_0x56077b(0x506)];return $gameMap[_0x56077b(0x354)](_0xb0e21a,_0x3846b8);}}if(this[_0x56077b(0x445)]!==undefined){const _0xa1b7e3=this[_0x56077b(0x445)][_0x56077b(0x517)],_0x2be081=this['_eventSpawnData']['eventId'];return $gameMap[_0x56077b(0x354)](_0xa1b7e3,_0x2be081);}if($gameTemp[_0x56077b(0x33e)]!==undefined){const _0x2e0613=$gameTemp[_0x56077b(0x33e)][_0x56077b(0x517)],_0x4794c5=$gameTemp[_0x56077b(0x33e)]['eventId'];return $gameMap[_0x56077b(0x354)](_0x2e0613,_0x4794c5);}return VisuMZ[_0x56077b(0x2a6)][_0x56077b(0x241)][_0x56077b(0x24a)](this);},Game_Event[_0x55137b(0x65a)][_0x55137b(0x33a)]=function(_0x178b71,_0x1f416e){const _0x11c673=_0x55137b;if(_0x178b71===0x0||_0x1f416e===0x0)return![];if(_0x178b71===$gameMap[_0x11c673(0x517)]())return!![];if(!VisuMZ[_0x11c673(0x1fd)][_0x178b71]&&_0x178b71!==$gameMap[_0x11c673(0x517)]()){if('jFKax'==='jFKax')return $gameTemp[_0x11c673(0x5bc)]()&&console[_0x11c673(0x68e)](_0x11c673(0x3bb)['format'](_0x178b71)),![];else this[_0x11c673(0x621)]();}return!![];},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x390)]=Game_Event[_0x55137b(0x65a)]['start'],Game_Event['prototype']['start']=function(){const _0x550d23=_0x55137b;VisuMZ[_0x550d23(0x2a6)][_0x550d23(0x390)][_0x550d23(0x24a)](this),Imported[_0x550d23(0x57b)]&&Input['isPressed'](VisuMZ[_0x550d23(0x5e5)][_0x550d23(0x6ea)][_0x550d23(0x43b)][_0x550d23(0x4f1)])&&(_0x550d23(0x2c3)===_0x550d23(0x3bf)?this[_0x550d23(0x651)]():Input['clear']());},Game_Event['prototype']['setupCopyEvent']=function(){const _0x1015c5=_0x55137b,_0x329366=this[_0x1015c5(0x52c)]()['note'];if(_0x329366==='')return;if(DataManager[_0x1015c5(0x63f)]()||DataManager['isEventTest']())return;const _0x3c38ad=VisuMZ[_0x1015c5(0x2a6)][_0x1015c5(0x6ea)][_0x1015c5(0x332)];let _0x2b97e0=null,_0x47f18e=0x0,_0x229578=0x0;if(_0x329366[_0x1015c5(0x614)](/<COPY EVENT:[ ]MAP[ ](\d+),[ ]EVENT[ ](\d+)>/i)){if(_0x1015c5(0x2bb)===_0x1015c5(0x282)){if(this[_0x1015c5(0x644)]===_0x3be652)this[_0x1015c5(0x5c4)]();this[_0x1015c5(0x644)]=_0x239c63;}else{_0x47f18e=Number(RegExp['$1']),_0x229578=Number(RegExp['$2']);if(_0x47f18e===0x0)_0x47f18e=$gameMap['mapId']();}}else{if(_0x329366[_0x1015c5(0x614)](/<COPY EVENT:[ ](\d+),[ ](\d+)>/i)){_0x47f18e=Number(RegExp['$1']),_0x229578=Number(RegExp['$2']);if(_0x47f18e===0x0)_0x47f18e=$gameMap['mapId']();}else{if(_0x329366[_0x1015c5(0x614)](/<COPY EVENT:[ ](.*?)>/i)){if(_0x1015c5(0x61f)!==_0x1015c5(0x447)){const _0x35e93d=String(RegExp['$1'])[_0x1015c5(0x557)]()['trim']();_0x2b97e0=VisuMZ[_0x1015c5(0x495)][_0x35e93d];if(!_0x2b97e0)return;_0x47f18e=_0x2b97e0[_0x1015c5(0x359)],_0x229578=_0x2b97e0[_0x1015c5(0x27d)];}else this[_0x1015c5(0x64c)][_0x1015c5(0x4b1)]=0x0;}}}if(!this[_0x1015c5(0x33a)](_0x47f18e,_0x229578))return;_0x3c38ad[_0x1015c5(0x647)][_0x1015c5(0x24a)](this,_0x47f18e,_0x229578,this);if(_0x2b97e0)_0x2b97e0[_0x1015c5(0x647)][_0x1015c5(0x24a)](this,_0x47f18e,_0x229578,this);this[_0x1015c5(0x431)]={'mapId':_0x47f18e,'eventId':_0x229578},this[_0x1015c5(0x3e3)]=-0x2,this[_0x1015c5(0x28e)](),_0x3c38ad['PostCopyJS'][_0x1015c5(0x24a)](this,_0x47f18e,_0x229578,this);if(_0x2b97e0)_0x2b97e0[_0x1015c5(0x417)][_0x1015c5(0x24a)](this,_0x47f18e,_0x229578,this);$gameMap[_0x1015c5(0x59f)]();},Game_Event[_0x55137b(0x65a)][_0x55137b(0x619)]=function(){const _0x1a5d2d=_0x55137b,_0x15ed63=$gameSystem['getPreservedMorphEventData'](this);if(!_0x15ed63)return;const _0x4710a2=_0x15ed63[_0x1a5d2d(0x2da)][_0x1a5d2d(0x557)]()[_0x1a5d2d(0x5d3)]();_0x4710a2!=='UNTITLED'?this[_0x1a5d2d(0x6fb)](_0x4710a2,!![]):this['morphInto'](_0x15ed63[_0x1a5d2d(0x517)],_0x15ed63[_0x1a5d2d(0x506)],!![]);},Game_Event['prototype'][_0x55137b(0x440)]=function(_0x19dd1b,_0x500c89,_0x11602f){const _0x565df4=_0x55137b;if(!this[_0x565df4(0x33a)](_0x19dd1b,_0x500c89))return;const _0x1197cf=VisuMZ[_0x565df4(0x2a6)][_0x565df4(0x6ea)][_0x565df4(0x332)];if(!_0x11602f)_0x1197cf[_0x565df4(0x596)]['call'](this,_0x19dd1b,_0x500c89,this);this['_eventMorphData']={'mapId':_0x19dd1b,'eventId':_0x500c89},this[_0x565df4(0x3e3)]=-0x2,this[_0x565df4(0x28e)]();if(!_0x11602f)_0x1197cf['PostMorphJS'][_0x565df4(0x24a)](this,_0x19dd1b,_0x500c89,this);$gameMap[_0x565df4(0x59f)]();},Game_Event[_0x55137b(0x65a)][_0x55137b(0x6fb)]=function(_0xe86185,_0x2e54d7){const _0x59da35=_0x55137b;_0xe86185=_0xe86185[_0x59da35(0x557)]()[_0x59da35(0x5d3)]();const _0x1dd26f=VisuMZ[_0x59da35(0x495)][_0xe86185];if(!_0x1dd26f)return;const _0x25f324=_0x1dd26f[_0x59da35(0x359)],_0x24c89f=_0x1dd26f[_0x59da35(0x27d)];if(!this[_0x59da35(0x33a)](_0x25f324,_0x24c89f))return;if(!_0x2e54d7)_0x1dd26f[_0x59da35(0x596)][_0x59da35(0x24a)](this,_0x25f324,_0x24c89f,this);this[_0x59da35(0x440)](_0x25f324,_0x24c89f,_0x2e54d7);if(!_0x2e54d7)_0x1dd26f[_0x59da35(0x2dd)]['call'](this,_0x25f324,_0x24c89f,this);if($gameMap)$gameMap[_0x59da35(0x59f)]();},Game_Event['prototype'][_0x55137b(0x554)]=function(){const _0x127dd4=_0x55137b;this['_eventMorphData']=undefined,this[_0x127dd4(0x3e3)]=-0x2,this[_0x127dd4(0x28e)]();},Game_Event[_0x55137b(0x65a)][_0x55137b(0x599)]=function(_0x4fe8a9){const _0xb55bc9=_0x55137b,_0x434222=VisuMZ[_0xb55bc9(0x2a6)][_0xb55bc9(0x6ea)][_0xb55bc9(0x332)],_0x4cd79f=_0x4fe8a9[_0xb55bc9(0x2da)][_0xb55bc9(0x557)]()[_0xb55bc9(0x5d3)](),_0xb6805e=!['',_0xb55bc9(0x3cd)][_0xb55bc9(0x23b)](_0x4cd79f);let _0x8a5b03=0x0,_0x577f2d=0x0;if(_0xb6805e){if(_0xb55bc9(0x4db)===_0xb55bc9(0x4db)){const _0x14546b=VisuMZ[_0xb55bc9(0x495)][_0x4cd79f];if(!_0x14546b)return;_0x8a5b03=_0x14546b['MapID'],_0x577f2d=_0x14546b['EventID'];}else{for(const _0x4035fb of this['_spawnedEvents']){if(_0x4035fb)return _0x4035fb;}return null;}}else _0x8a5b03=_0x4fe8a9[_0xb55bc9(0x517)],_0x577f2d=_0x4fe8a9[_0xb55bc9(0x506)];if(!this[_0xb55bc9(0x33a)](_0x8a5b03,_0x577f2d))return;if(_0xb6805e){if(_0xb55bc9(0x394)==='QldEG'){const _0x342566=VisuMZ[_0xb55bc9(0x495)][_0x4cd79f];_0x342566[_0xb55bc9(0x3b4)][_0xb55bc9(0x24a)](this,_0x8a5b03,_0x577f2d,this);}else{if(_0x1201a5[_0xb55bc9(0x706)]&&this['isSmartEventCollisionOn']())return this[_0xb55bc9(0x564)](_0x46cc59,_0x1d8f34);else{const _0xd82fab=_0x44890e[_0xb55bc9(0x5f7)](_0x7f8e2f,_0x1646eb)[_0xb55bc9(0x3c7)](_0x1a3db9=>_0x1a3db9!==this);return _0xd82fab[_0xb55bc9(0x730)]>0x0;}}}_0x434222[_0xb55bc9(0x3b4)][_0xb55bc9(0x24a)](this,_0x8a5b03,_0x577f2d,this),this['_eventSpawnData']=_0x4fe8a9,this[_0xb55bc9(0x3e3)]=-0x2,this[_0xb55bc9(0x378)]=$gameMap[_0xb55bc9(0x517)](),this[_0xb55bc9(0x627)]=_0x4fe8a9['spawnEventId'],this[_0xb55bc9(0x264)]=_0x4fe8a9['spawnPreserved'],this[_0xb55bc9(0x5be)](_0x4fe8a9['x'],_0x4fe8a9['y']),this[_0xb55bc9(0x62f)](_0x4fe8a9[_0xb55bc9(0x69a)]),this['refresh']();if(_0xb6805e){const _0x52088b=VisuMZ['EventTemplates'][_0x4cd79f];if(!_0x52088b)return;_0x52088b[_0xb55bc9(0x433)][_0xb55bc9(0x24a)](this,_0x8a5b03,_0x577f2d,this);}_0x434222[_0xb55bc9(0x433)][_0xb55bc9(0x24a)](this,_0x8a5b03,_0x577f2d,this);const _0x4fc7f6=SceneManager[_0xb55bc9(0x316)];if(_0x4fc7f6&&_0x4fc7f6[_0xb55bc9(0x310)])_0x4fc7f6[_0xb55bc9(0x310)][_0xb55bc9(0x58c)](this);},Game_Event[_0x55137b(0x65a)][_0x55137b(0x240)]=function(){const _0x3baafd=_0x55137b;return!!this[_0x3baafd(0x445)];},Game_Event[_0x55137b(0x65a)][_0x55137b(0x3f6)]=function(){const _0x440139=_0x55137b;if(!this['list']())return;const _0x12a73f=this['list']()[_0x440139(0x3c7)](_0x39a979=>_0x39a979[_0x440139(0x5ac)]!==0x6c&&_0x39a979[_0x440139(0x5ac)]!==0x198);_0x12a73f['length']>0x1&&(_0x440139(0x3b5)!=='mNDmd'?_0x52c103[_0x440139(0x464)](_0x3e2df9,!!_0x1ec0c0):(this['_starting']=!![],this['isTriggerIn']([0x0,0x1,0x2])&&this['lock']()));},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x214)]=Game_Event['prototype'][_0x55137b(0x3c6)],Game_Event[_0x55137b(0x65a)]['clearPageSettings']=function(){const _0x30921a=_0x55137b;VisuMZ[_0x30921a(0x2a6)][_0x30921a(0x214)][_0x30921a(0x24a)](this),this[_0x30921a(0x630)](),this[_0x30921a(0x548)]();},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x4d8)]=Game_Event[_0x55137b(0x65a)]['setupPageSettings'],Game_Event[_0x55137b(0x65a)][_0x55137b(0x59a)]=function(){const _0x4ec503=_0x55137b;this['_activationProximityAutoTriggerBypass']=!![],VisuMZ[_0x4ec503(0x2a6)][_0x4ec503(0x4d8)][_0x4ec503(0x24a)](this),this[_0x4ec503(0x208)](),this['autosaveEventLocation'](),this[_0x4ec503(0x2ff)]=![];},Game_Event[_0x55137b(0x65a)][_0x55137b(0x208)]=function(){const _0x529bc6=_0x55137b;if(!this[_0x529bc6(0x52c)]())return;this[_0x529bc6(0x630)](),this[_0x529bc6(0x395)](),this[_0x529bc6(0x3e8)](),this['updateEventsMoveCoreTagChanges']();},Game_Event[_0x55137b(0x65a)][_0x55137b(0x395)]=function(){const _0x27a952=_0x55137b,_0x387e75=this['event']()['note'];if(_0x387e75==='')return;this[_0x27a952(0x1fc)](_0x387e75);},Game_Event[_0x55137b(0x65a)]['setupEventsMoveCoreCommentTags']=function(){const _0x2441a9=_0x55137b;if(!this[_0x2441a9(0x590)]())return;const _0x4a02af=this['list']();let _0x1f35ce='';for(const _0x3b4eef of _0x4a02af){if(_0x2441a9(0x681)!==_0x2441a9(0x681)){if(this[_0x2441a9(0x367)]===_0x6f5ff5)this['initEventsMoveCoreEffects']();return this[_0x2441a9(0x367)][_0x2441a9(0x730)]>0x0;}else{if([0x6c,0x198]['includes'](_0x3b4eef['code'])){if('nbIzF'===_0x2441a9(0x3d2)){if(_0x1f35ce!=='')_0x1f35ce+='\x0a';_0x1f35ce+=_0x3b4eef[_0x2441a9(0x62d)][0x0];}else this[_0x2441a9(0x5be)](_0x2c8b87,_0x3e1efb);}}}this[_0x2441a9(0x1fc)](_0x1f35ce);},Game_Event[_0x55137b(0x65a)]['initEventsMoveCoreEffects']=function(){const _0x4eba3a=_0x55137b,_0x19c234=VisuMZ['EventsMoveCore'][_0x4eba3a(0x6ea)];this[_0x4eba3a(0x381)]={'type':_0x4eba3a(0x230),'distance':0x0,'regionList':[]},this[_0x4eba3a(0x5c1)]=![],this[_0x4eba3a(0x351)](),this[_0x4eba3a(0x21f)]=![],this[_0x4eba3a(0x48a)]=![],this[_0x4eba3a(0x314)]={'up':0x0,'down':0x0,'left':0x0,'right':0x0},$gameSystem[_0x4eba3a(0x718)](this),this['_eventIcon']=$gameSystem[_0x4eba3a(0x28d)](this),this[_0x4eba3a(0x30c)]={'originalText':'','text':'','visibleRange':_0x19c234['Label'][_0x4eba3a(0x268)],'offsetX':_0x19c234[_0x4eba3a(0x4e4)][_0x4eba3a(0x536)],'offsetY':_0x19c234[_0x4eba3a(0x4e4)][_0x4eba3a(0x577)]},this[_0x4eba3a(0x5b3)]=![],this[_0x4eba3a(0x367)]=[],this['_moveSynch']={'target':-0x1,'type':'random','delay':0x1,'opacityDelta':0x0},this['_randomMoveWeight']=_0x19c234[_0x4eba3a(0x344)][_0x4eba3a(0x683)]??0x0,this['_saveEventLocation']=![],this['_scaleBaseX']=0x1,this[_0x4eba3a(0x4f9)]=0x1,this[_0x4eba3a(0x341)]={'visible':!![],'filename':_0x19c234['Movement'][_0x4eba3a(0x201)]},this[_0x4eba3a(0x27e)](),this[_0x4eba3a(0x3a2)]();},Game_Event[_0x55137b(0x65a)]['checkEventsMoveCoreStringTags']=function(_0x950246){const _0x1ab890=_0x55137b;if(_0x950246[_0x1ab890(0x614)](/<ACTIVATION[ ](?:REGION|REGIONS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x1ab890(0x6c6)===_0x1ab890(0x6c6))this[_0x1ab890(0x381)][_0x1ab890(0x275)]=JSON['parse']('['+RegExp['$1'][_0x1ab890(0x614)](/\d+/g)+']'),this['_activationProximity'][_0x1ab890(0x3e1)]=_0x1ab890(0x47c);else return!![];}else _0x950246[_0x1ab890(0x614)](/<ACTIVATION[ ](.*?):[ ](\d+)>/i)&&(type=String(RegExp['$1'])['toLowerCase']()[_0x1ab890(0x5d3)](),this[_0x1ab890(0x381)]['type']=type,this[_0x1ab890(0x381)][_0x1ab890(0x405)]=Number(RegExp['$2']));_0x950246['match'](/<(?:ATTACH PICTURE|PICTURE) FILENAME:[ ](.*?)>/i)&&(this[_0x1ab890(0x510)][_0x1ab890(0x278)]=String(RegExp['$1']));if(_0x950246[_0x1ab890(0x614)](/<(?:ATTACH PICTURE|PICTURE) BLEND MODE:[ ](.*?)>/i)){if('gAdAE'===_0x1ab890(0x458)){const _0x5a4ac8=String(RegExp['$1'])['toUpperCase']()[_0x1ab890(0x5d3)](),_0x39e0ee=[_0x1ab890(0x358),'ADDITIVE',_0x1ab890(0x227),_0x1ab890(0x3b7)];this[_0x1ab890(0x510)][_0x1ab890(0x70b)]=_0x39e0ee['indexOf'](_0x5a4ac8)['clamp'](0x0,0x3);}else{if(this[_0x1ab890(0x3ea)]())return this[_0x1ab890(0x59b)](_0x17d1a7,_0x2c991f,_0x3bfaee);if(_0x57e57d['isRegionAllowPass'](_0x30a2c3,_0x4a0d0b,_0x3931df,_0x1ab890(0x52c)))return!![];if(_0x2f3206['isRegionForbidPass'](_0x1152bc,_0x576e36,_0xf7da2,_0x1ab890(0x52c)))return![];return _0x23d15d[_0x1ab890(0x65a)]['isMapPassable'][_0x1ab890(0x24a)](this,_0x590c8c,_0x373d74,_0x136925);}}if(_0x950246[_0x1ab890(0x614)](/<(?:ATTACH PICTURE|PICTURE) (?:SIZE|MAX SIZE|MAX):[ ](\d+)>/i)){if(_0x1ab890(0x3ed)!==_0x1ab890(0x3ed))return this[_0x1ab890(0x533)](_0x1d07e2);else this[_0x1ab890(0x510)][_0x1ab890(0x4f0)]=Number(RegExp['$1']);}_0x950246[_0x1ab890(0x614)](/<(?:ATTACH PICTURE|PICTURE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x1ab890(0x510)]['offsetX']=Number(RegExp['$1']));_0x950246[_0x1ab890(0x614)](/<(?:ATTACH PICTURE|PICTURE) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(_0x1ab890(0x643)!==_0x1ab890(0x643)?this[_0x1ab890(0x363)][_0x1ab890(0x5bb)]=new _0x1f7219(0x1,0x1):this[_0x1ab890(0x510)][_0x1ab890(0x41d)]=Number(RegExp['$1']));_0x950246[_0x1ab890(0x614)](/<(?:ATTACH PICTURE|PICTURE) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x1ab890(0x510)][_0x1ab890(0x476)]=Number(RegExp['$1']),this[_0x1ab890(0x510)][_0x1ab890(0x41d)]=Number(RegExp['$2']));_0x950246[_0x1ab890(0x614)](/<(?:ATTACH PICTURE|PICTURE) SCALE:[ ](\d+)([%％])>/i)&&(this[_0x1ab890(0x510)][_0x1ab890(0x604)]=Number(RegExp['$1'])*0.01);_0x950246[_0x1ab890(0x614)](/<ALWAYS UPDATE MOVEMENT>/i)&&(this[_0x1ab890(0x5c1)]=!![]);if(_0x950246[_0x1ab890(0x614)](/<CLICK TRIGGER>/i)){if('IhrjY'!==_0x1ab890(0x3ae))this['_clickTrigger']=!![];else return this[_0x1ab890(0x4c6)];}_0x950246['match'](/<CUSTOM Z:[ ](.*?)>/i)&&(this[_0x1ab890(0x48a)]=Number(RegExp['$1'])||0x0);const _0x4d5ea9=_0x950246[_0x1ab890(0x614)](/<HITBOX[ ](.*?):[ ](\d+)>/gi);if(_0x4d5ea9){if(_0x1ab890(0x2c9)!==_0x1ab890(0x256))for(const _0x30ba10 of _0x4d5ea9){if(_0x30ba10['match'](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0x3eefe5=String(RegExp['$1'])[_0x1ab890(0x571)]()['trim'](),_0x565f28=Number(RegExp['$2']);this[_0x1ab890(0x314)][_0x3eefe5]=_0x565f28;}}else _0xd05591[_0x1ab890(0x28e)](),_0x12737f['updateEventLabelText']();}_0x950246[_0x1ab890(0x614)](/<ICON:[ ](\d+)>/i)&&(this[_0x1ab890(0x25d)][_0x1ab890(0x251)]=Number(RegExp['$1']));if(_0x950246['match'](/<ICON (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)){if(_0x1ab890(0x3a5)===_0x1ab890(0x3a5))this[_0x1ab890(0x25d)][_0x1ab890(0x497)]=Number(RegExp['$1']);else{if(this[_0x1ab890(0x52c)]()[_0x1ab890(0x501)]['match'](/<(?:PLAYTEST|PLAY TEST)>/i))return-0x1;}}_0x950246['match'](/<ICON (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x1ab890(0x25d)][_0x1ab890(0x4c7)]=Number(RegExp['$1']));_0x950246['match'](/<ICON (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x1ab890(0x25d)][_0x1ab890(0x497)]=Number(RegExp['$1']),this[_0x1ab890(0x25d)][_0x1ab890(0x4c7)]=Number(RegExp['$2']));if(_0x950246[_0x1ab890(0x614)](/<ICON BLEND MODE:[ ](.*?)>/i)){if('OsALv'==='OsALv'){const _0x4633cb=String(RegExp['$1'])[_0x1ab890(0x557)]()[_0x1ab890(0x5d3)](),_0x169212=[_0x1ab890(0x358),_0x1ab890(0x713),'MULTIPLY',_0x1ab890(0x3b7)];this[_0x1ab890(0x25d)][_0x1ab890(0x70b)]=_0x169212[_0x1ab890(0x5da)](_0x4633cb)[_0x1ab890(0x313)](0x0,0x3);}else _0x182983[_0x1ab890(0x55c)](0x0);}$gameSystem[_0x1ab890(0x6c1)](this,this[_0x1ab890(0x25d)][_0x1ab890(0x251)],this[_0x1ab890(0x25d)][_0x1ab890(0x497)],this[_0x1ab890(0x25d)]['bufferY'],this['_eventIcon'][_0x1ab890(0x70b)]);if(_0x950246['match'](/<LABEL:[ ](.*?)>/i)){let _0x28cfff=String(RegExp['$1'])[_0x1ab890(0x5d3)]();this[_0x1ab890(0x30c)]['text']=_0x28cfff,this['_labelWindow'][_0x1ab890(0x45d)]=_0x28cfff;}if(_0x950246['match'](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)){let _0x194b0c=String(RegExp['$1'])['trim']();this['_labelWindow']['text']=_0x194b0c,this['_labelWindow'][_0x1ab890(0x45d)]=_0x194b0c;}_0x950246[_0x1ab890(0x614)](/<LABEL (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this[_0x1ab890(0x30c)][_0x1ab890(0x476)]=Number(RegExp['$1']));_0x950246[_0x1ab890(0x614)](/<LABEL (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this['_labelWindow'][_0x1ab890(0x41d)]=Number(RegExp['$1']));_0x950246[_0x1ab890(0x614)](/<LABEL (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this['_labelWindow'][_0x1ab890(0x476)]=Number(RegExp['$1']),this[_0x1ab890(0x30c)]['offsetY']=Number(RegExp['$2']));this[_0x1ab890(0x2f5)]();_0x950246[_0x1ab890(0x614)](/<LABEL RANGE:[ ](\d+)>/i)&&(this[_0x1ab890(0x30c)][_0x1ab890(0x5d0)]=Number(RegExp['$1']));_0x950246['match'](/<MIRROR SPRITE>/i)&&(this['_mirrorSprite']=!![]);if(_0x950246[_0x1ab890(0x614)](/<MOVE ONLY (?:REGION|REGIONS):[ ](\d+(?:\s*,\s*\d+)*)>/i)){const _0xbd2a9b=JSON[_0x1ab890(0x685)]('['+RegExp['$1'][_0x1ab890(0x614)](/\d+/g)+']');this[_0x1ab890(0x367)]=this['_moveOnlyRegions'][_0x1ab890(0x50f)](_0xbd2a9b),this['_moveOnlyRegions'][_0x1ab890(0x27c)](0x0);}if(_0x950246[_0x1ab890(0x614)](/<MOVE SYNCH TARGET:[ ](.*?)>/i)){const _0x325ef5=String(RegExp['$1']);if(_0x325ef5['match'](/PLAYER/i))this['_moveSynch'][_0x1ab890(0x4b1)]=0x0;else _0x325ef5[_0x1ab890(0x614)](/EVENT[ ](\d+)/i)&&(this['_moveSynch']['target']=Number(RegExp['$1']));}_0x950246[_0x1ab890(0x614)](/<MOVE SYNCH TYPE:[ ](.*?)>/i)&&(this[_0x1ab890(0x64c)][_0x1ab890(0x3e1)]=String(RegExp['$1'])[_0x1ab890(0x571)]()[_0x1ab890(0x5d3)]());if(_0x950246['match'](/<MOVE SYNCH DELAY:[ ](\d+)>/i)){if('xQTFi'!==_0x1ab890(0x56e)){if(_0x3cd51e[_0x1ab890(0x51d)]())return![];if(_0x1d109a[_0x1ab890(0x5ff)]())return![];return _0x47a43c[_0x1ab890(0x698)]()['includes'](this[_0x1ab890(0x71d)]());}else this[_0x1ab890(0x64c)]['delay']=Number(RegExp['$1']);}_0x950246['match'](/<MOVE SYNCH DISTANCE OPACITY:[ ](.*?)>/i)&&(this[_0x1ab890(0x64c)][_0x1ab890(0x66e)]=Number(RegExp['$1']));if(_0x950246[_0x1ab890(0x614)](/<TRUE RANDOM MOVE>/i)){if(_0x1ab890(0x2c0)!=='aYWnz')this[_0x1ab890(0x5c3)]=0x0;else return this['_DisablePlayerControl']===_0x4e8739&&(this['_DisablePlayerControl']=![]),this[_0x1ab890(0x71a)];}else{if(_0x950246[_0x1ab890(0x614)](/<RANDOM MOVE WEIGHT:[ ](.*?)>/i)){if(_0x1ab890(0x729)!==_0x1ab890(0x729)){_0x5686e9[_0x1ab890(0x2a6)][_0x1ab890(0x2d7)][_0x1ab890(0x24a)](this,_0x21ccc0);if(this['canStartLocalEvents']()){this['checkEventTriggerEventsMoveCore'](_0x376ffd);if(_0x4019e7[_0x1ab890(0x23b)](0x0)&&this[_0x1ab890(0x5c6)]()===_0x1ab890(0x3cb))this[_0x1ab890(0x475)](this['x'],this['y']);else(_0x2acd88[_0x1ab890(0x23b)](0x1)||_0x333d38[_0x1ab890(0x23b)](0x2))&&this[_0x1ab890(0x366)]();}}else this[_0x1ab890(0x5c3)]=Number(RegExp['$1'])||0x0;}}_0x950246['match'](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(_0x1ab890(0x42c)!=='lhZRI'?this[_0x1ab890(0x339)]=!![]:_0x340444['EventsMoveCore'][_0x1ab890(0x6e2)]['call'](this,_0x44266f));_0x950246[_0x1ab890(0x614)](/<SCALE X:[ ](\d+)([%％])>/i)&&(this[_0x1ab890(0x69b)]=Number(RegExp['$1'])*0.01);if(_0x950246['match'](/<SCALE Y:[ ](\d+)([%％])>/i)){if(_0x1ab890(0x636)===_0x1ab890(0x636))this['_scaleBaseY']=Number(RegExp['$1'])*0.01;else{const _0x196213=this[_0x1ab890(0x47f)],_0x292e4f=_0x1bdd70[this[_0x1ab890(0x4c3)]],_0x563a41=_0x292e4f[_0x1ab890(0x5db)][_0x196213[_0x1ab890(0x506)]];if(_0x563a41&&_0x563a41[_0x1ab890(0x2d8)][_0x196213[_0x1ab890(0x361)]-0x1]){const _0x3be4de=_0x563a41[_0x1ab890(0x2d8)][_0x196213[_0x1ab890(0x361)]-0x1][_0x1ab890(0x6fe)];this[_0x1ab890(0x6e9)](_0x3be4de,this[_0x1ab890(0x506)]());}_0x44e330[this[_0x1ab890(0x4c3)]]=_0x3109e6,this['_callEventMap']=_0x5c2755,this[_0x1ab890(0x47f)]=_0x487367;}}if(_0x950246['match'](/<SCALE:[ ](\d+)([%％])>/i)){const _0x481034=Number(RegExp['$1'])*0.01;this[_0x1ab890(0x69b)]=_0x481034,this[_0x1ab890(0x4f9)]=_0x481034;}if(_0x950246[_0x1ab890(0x614)](/<HIDE SHADOW>/i)){if('YdunE'!==_0x1ab890(0x540)){if(this[_0x1ab890(0x52b)]===_0xd0f3a8)this[_0x1ab890(0x5c4)]();if(this[_0x1ab890(0x52b)][_0x1ab890(0x4fb)]===_0x11de8b)this[_0x1ab890(0x5c4)]();return this[_0x1ab890(0x52b)]['VisibleEventLabels'];}else this[_0x1ab890(0x341)][_0x1ab890(0x3d1)]=![];}_0x950246['match'](/<SHADOW FILENAME:[ ](.*?)>/i)&&(this[_0x1ab890(0x341)]['filename']=String(RegExp['$1']));_0x950246[_0x1ab890(0x614)](/<SPRITE OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x1ab890(0x5af)]=Number(RegExp['$1']));if(_0x950246[_0x1ab890(0x614)](/<SPRITE OFFSET Y:[ ]([\+\-]\d+)>/i)){if(_0x1ab890(0x23a)==='XfiZW')return this['processMoveRouteSelfVariable'](_0x360714['$1'],_0x7b2af9['$2']);else this[_0x1ab890(0x41c)]=Number(RegExp['$1']);}_0x950246[_0x1ab890(0x614)](/<SPRITE OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x1ab890(0x5af)]=Number(RegExp['$1']),this['_spriteOffsetY']=Number(RegExp['$2'])),_0x950246[_0x1ab890(0x614)](/<STEP PATTERN:[ ](.*)>/i)&&(this[_0x1ab890(0x5a9)]=String(RegExp['$1'])['toUpperCase']()[_0x1ab890(0x5d3)]());},Game_Event[_0x55137b(0x65a)][_0x55137b(0x2f5)]=function(){const _0x2b5783=_0x55137b;$gameTemp[_0x2b5783(0x2f9)](this),this[_0x2b5783(0x30c)]['text']=this[_0x2b5783(0x30c)][_0x2b5783(0x45d)];for(;;){if(this[_0x2b5783(0x30c)][_0x2b5783(0x5d6)][_0x2b5783(0x614)](/\\V\[(\d+)\]/gi))this[_0x2b5783(0x30c)][_0x2b5783(0x5d6)]=this[_0x2b5783(0x30c)][_0x2b5783(0x45d)][_0x2b5783(0x25f)](/\\V\[(\d+)\]/gi,(_0x2ee344,_0x5a3280)=>$gameVariables[_0x2b5783(0x67e)](parseInt(_0x5a3280)));else break;}$gameTemp[_0x2b5783(0x319)]();},Game_Event[_0x55137b(0x65a)][_0x55137b(0x4a4)]=function(){const _0x47e43c=_0x55137b;this[_0x47e43c(0x535)]();},Game_Event[_0x55137b(0x65a)][_0x55137b(0x32b)]=function(){const _0x8ddc05=_0x55137b;if(this[_0x8ddc05(0x5c1)])return!![];return Game_Character[_0x8ddc05(0x65a)][_0x8ddc05(0x32b)][_0x8ddc05(0x24a)](this);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x579)]=Game_Event[_0x55137b(0x65a)]['updateSelfMovement'],Game_Event[_0x55137b(0x65a)]['updateSelfMovement']=function(){const _0x2bea83=_0x55137b;if(this[_0x2bea83(0x2e5)]())return;VisuMZ[_0x2bea83(0x2a6)][_0x2bea83(0x579)][_0x2bea83(0x24a)](this),this[_0x2bea83(0x6f6)]()&&('WFBeh'!==_0x2bea83(0x33b)?VisuMZ[_0x2bea83(0x715)](this['_eventId']):(_0x2445a5['prototype'][_0x2bea83(0x5a6)][_0x2bea83(0x24a)](this),this[_0x2bea83(0x518)]()&&(this['visible']=![])));},Game_Event[_0x55137b(0x65a)][_0x55137b(0x2e5)]=function(){const _0x51716e=_0x55137b,_0x270bab=VisuMZ['EventsMoveCore']['Settings'][_0x51716e(0x344)];if($gameMap['isEventRunning']()&&_0x270bab['StopAutoMoveEvents'])return!![];if($gameMessage[_0x51716e(0x2ad)]()&&_0x270bab[_0x51716e(0x623)])return!![];if(!$gameSystem['isAllowEventAutoMovement']())return!![];if(this[_0x51716e(0x732)]()>=0x0)return!![];if(!SceneManager[_0x51716e(0x316)][_0x51716e(0x49b)])return!![];return![];},Game_Event['prototype']['updateShadowChanges']=function(){const _0x2c1f45=_0x55137b,_0x4305df=SceneManager[_0x2c1f45(0x316)]['_spriteset'];if(_0x4305df){if('gBBVI'==='gBBVI'){const _0x1a91f0=_0x4305df[_0x2c1f45(0x694)](this);_0x1a91f0&&_0x1a91f0[_0x2c1f45(0x482)]&&_0x1a91f0['_shadowSprite']['_filename']!==this['shadowFilename']()&&(_0x1a91f0[_0x2c1f45(0x482)][_0x2c1f45(0x263)]=this[_0x2c1f45(0x702)](),_0x1a91f0[_0x2c1f45(0x482)][_0x2c1f45(0x5bb)]=ImageManager[_0x2c1f45(0x2e7)](_0x1a91f0['_shadowSprite']['_filename']));}else{const _0x463735=this['firstSpawnedEvent']();return _0x463735?_0x463735[_0x2c1f45(0x627)]:0x0;}}},Game_Event[_0x55137b(0x65a)]['shadowFilename']=function(){const _0x313ff5=_0x55137b;return this['_shadowGraphic'][_0x313ff5(0x278)];},Game_Event[_0x55137b(0x65a)][_0x55137b(0x5e0)]=function(){const _0xb80c54=_0x55137b;if(!this['_shadowGraphic']['visible'])return![];return Game_CharacterBase['prototype'][_0xb80c54(0x5e0)]['call'](this);},Game_Event[_0x55137b(0x65a)][_0x55137b(0x5b6)]=function(){const _0x545f30=_0x55137b;return this['_labelWindow'][_0x545f30(0x5d6)];},Game_Event[_0x55137b(0x65a)][_0x55137b(0x25a)]=function(){const _0x2f22da=_0x55137b;return this[_0x2f22da(0x30c)][_0x2f22da(0x5d0)];},Game_Event['prototype'][_0x55137b(0x259)]=function(_0x2888f8,_0x4a4422,_0x594d6e){const _0x50dc1e=_0x55137b;if(this[_0x50dc1e(0x3ea)]())return this[_0x50dc1e(0x59b)](_0x2888f8,_0x4a4422,_0x594d6e);if($gameMap[_0x50dc1e(0x37f)](_0x2888f8,_0x4a4422,_0x594d6e,'event'))return!![];if($gameMap[_0x50dc1e(0x529)](_0x2888f8,_0x4a4422,_0x594d6e,'event'))return![];return Game_Character[_0x50dc1e(0x65a)][_0x50dc1e(0x259)][_0x50dc1e(0x24a)](this,_0x2888f8,_0x4a4422,_0x594d6e);},Game_Event['prototype'][_0x55137b(0x3ea)]=function(){const _0x597b2a=_0x55137b;if(this['_moveOnlyRegions']===undefined)this[_0x597b2a(0x630)]();return this['_moveOnlyRegions'][_0x597b2a(0x730)]>0x0;},Game_Event[_0x55137b(0x65a)][_0x55137b(0x59b)]=function(_0x256dda,_0x1b5568,_0x326272){const _0x145853=_0x55137b,_0x3b7f8f=$gameMap[_0x145853(0x28b)](_0x256dda,_0x326272),_0x4336cc=$gameMap[_0x145853(0x47d)](_0x1b5568,_0x326272),_0x1a8698=$gameMap[_0x145853(0x71d)](_0x3b7f8f,_0x4336cc);return this[_0x145853(0x367)][_0x145853(0x23b)](_0x1a8698);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x65d)]=Game_Event[_0x55137b(0x65a)][_0x55137b(0x572)],Game_Event[_0x55137b(0x65a)][_0x55137b(0x572)]=function(){const _0x325762=_0x55137b;if(this[_0x325762(0x52c)]()&&!$gameTemp[_0x325762(0x5bc)]()){if(this[_0x325762(0x52c)]()['note']['match'](/<(?:PLAYTEST|PLAY TEST)>/i))return-0x1;}return this[_0x325762(0x622)]=![],this[_0x325762(0x6f3)]=![],this[_0x325762(0x52c)]()?VisuMZ[_0x325762(0x2a6)][_0x325762(0x65d)][_0x325762(0x24a)](this):-0x1;},VisuMZ['EventsMoveCore'][_0x55137b(0x415)]=Game_Event[_0x55137b(0x65a)][_0x55137b(0x5eb)],Game_Event['prototype']['meetsConditions']=function(_0x13865e){const _0x5bf175=_0x55137b;this[_0x5bf175(0x6e6)](_0x13865e),$gameTemp[_0x5bf175(0x2f9)](this);const _0x4036dc=VisuMZ[_0x5bf175(0x2a6)][_0x5bf175(0x415)]['call'](this,_0x13865e);return $gameTemp['clearSelfTarget'](),_0x4036dc;},Game_Event['prototype'][_0x55137b(0x46f)]=function(){const _0x38c156=_0x55137b;return this[_0x38c156(0x622)];},Game_Event[_0x55137b(0x65a)]['checkAdvancedSwitchVariablePresent']=function(_0x44ae2f){const _0x2e2c0f=_0x55137b,_0xd685fd=_0x44ae2f[_0x2e2c0f(0x701)];if(_0xd685fd[_0x2e2c0f(0x480)]&&DataManager[_0x2e2c0f(0x31b)](_0xd685fd[_0x2e2c0f(0x43c)])){if('qAFlu'===_0x2e2c0f(0x3b3)){if(!_0x45bcea[_0x2e2c0f(0x49e)])return![];}else this['_advancedSwitchVariable']=!![];}else{if(_0xd685fd['switch2Valid']&&DataManager[_0x2e2c0f(0x31b)](_0xd685fd[_0x2e2c0f(0x304)]))this[_0x2e2c0f(0x622)]=!![];else{if(_0xd685fd[_0x2e2c0f(0x3be)]&&DataManager['isAdvancedVariable'](_0xd685fd[_0x2e2c0f(0x3b0)])){if(_0x2e2c0f(0x404)!==_0x2e2c0f(0x404)){if(!_0x1badb4['eventLabelsVisible']())return![];if(this[_0x2e2c0f(0x4f6)]?.[_0x2e2c0f(0x51c)])return![];if(this[_0x2e2c0f(0x4f6)]&&this['_event'][_0x2e2c0f(0x3e3)]<0x0)return![];if(_0x5b4e45[_0x2e2c0f(0x316)][_0x2e2c0f(0x301)]>0x0)return![];const _0x3b8f00=_0x14d743['x'],_0x5c4f71=_0x251729['y'],_0x1a181d=this[_0x2e2c0f(0x4f6)]['x'],_0x2bab04=this[_0x2e2c0f(0x4f6)]['y'];if(this[_0x2e2c0f(0x43e)]===_0x3b8f00&&this['_visiblePlayerY']===_0x5c4f71&&this[_0x2e2c0f(0x5c5)]===_0x1a181d&&this['_visibleEventY']===_0x2bab04)return this[_0x2e2c0f(0x437)];this['_visiblePlayerX']=_0x49ebe5['x'],this[_0x2e2c0f(0x66f)]=_0xf5e215['y'],this['_visibleEventX']=this[_0x2e2c0f(0x4f6)]['x'],this['_visibleEventY']=this[_0x2e2c0f(0x4f6)]['y'];if(_0x149f2e[_0x2e2c0f(0x3ac)](_0x3b8f00,_0x5c4f71,_0x1a181d,_0x2bab04)>this['_event'][_0x2e2c0f(0x25a)]())return this[_0x2e2c0f(0x437)]=![],![];return this[_0x2e2c0f(0x437)]=!![],!![];}else this['_advancedSwitchVariable']=!![];}}}},Game_Event[_0x55137b(0x65a)][_0x55137b(0x3a6)]=function(){const _0x3b34b3=_0x55137b;if(this['_erased'])return![];return this[_0x3b34b3(0x21f)];},Game_Event[_0x55137b(0x65a)]['onClickTrigger']=function(){const _0x3ebc8=_0x55137b;$gameTemp['clearDestination'](),this[_0x3ebc8(0x3f6)]();},Game_Event[_0x55137b(0x65a)][_0x55137b(0x6cf)]=function(_0x2e945a,_0x163202){const _0x5cc4ba=_0x55137b;return this['_addedHitbox']?this[_0x5cc4ba(0x4e1)](_0x2e945a,_0x163202):Game_Character[_0x5cc4ba(0x65a)][_0x5cc4ba(0x6cf)][_0x5cc4ba(0x24a)](this,_0x2e945a,_0x163202);},Game_Event[_0x55137b(0x65a)][_0x55137b(0x4e1)]=function(_0x2e814e,_0x70a1f1){const _0x30b7f7=_0x55137b;var _0x1c9dee=this['x']-this['_addedHitbox']['left'],_0x51f52a=this['x']+this['_addedHitbox'][_0x30b7f7(0x5de)],_0x1ca53b=this['y']-this['_addedHitbox']['up'],_0x2a95ec=this['y']+this[_0x30b7f7(0x314)][_0x30b7f7(0x3a7)];return _0x1c9dee<=_0x2e814e&&_0x2e814e<=_0x51f52a&&_0x1ca53b<=_0x70a1f1&&_0x70a1f1<=_0x2a95ec;},Game_Event[_0x55137b(0x65a)][_0x55137b(0x25b)]=function(_0x37cded,_0x30a42b,_0x52adee){const _0x32db72=_0x55137b;for(let _0x2c5234=-this['_addedHitbox']['left'];_0x2c5234<=this[_0x32db72(0x314)][_0x32db72(0x5de)];_0x2c5234++){for(let _0x5e0ede=-this['_addedHitbox']['up'];_0x5e0ede<=this['_addedHitbox'][_0x32db72(0x3a7)];_0x5e0ede++){if('IbtmW'===_0x32db72(0x624)){const _0x378ced=new _0x538b0b(0x0,0x0,0x1,0x1);this['_proxyWindow']=new _0x31db6f(_0x378ced),this['_proxyWindow']['padding']=0x0,this[_0x32db72(0x3fb)]=this[_0x32db72(0x224)]()?0xff:0x0;}else{if(!Game_Character['prototype']['canPass'][_0x32db72(0x24a)](this,_0x37cded+_0x2c5234,_0x30a42b+_0x5e0ede,_0x52adee)){if(_0x32db72(0x4ef)!==_0x32db72(0x5b5))return![];else _0x1e831a[_0x32db72(0x5e3)](_0x53a6fd[_0x22d9ba]);}}}}return!![];},Game_Event[_0x55137b(0x65a)]['isCollidedWithEvents']=function(_0x590a92,_0x1dc9fa){const _0x37aa6c=_0x55137b;if(Imported[_0x37aa6c(0x706)]&&this['isSmartEventCollisionOn']())return this[_0x37aa6c(0x564)](_0x590a92,_0x1dc9fa);else{if('PgubS'===_0x37aa6c(0x58b))return(this[_0x37aa6c(0x6cc)]||'')[_0x37aa6c(0x557)]()[_0x37aa6c(0x5d3)]();else{const _0x308c3f=$gameMap['eventsXyNt'](_0x590a92,_0x1dc9fa)[_0x37aa6c(0x3c7)](_0x28c6e3=>_0x28c6e3!==this);return _0x308c3f[_0x37aa6c(0x730)]>0x0;}}},Game_Event[_0x55137b(0x65a)]['checkSmartEventCollision']=function(_0x5e3062,_0x109fa0){const _0x1bf733=_0x55137b;if(!this['isNormalPriority']()){if('XaamN'!==_0x1bf733(0x6a4))_0xd5bd17[_0x1bf733(0x65a)]['resetFontSettings'][_0x1bf733(0x24a)](this),this[_0x1bf733(0x2e3)][_0x1bf733(0x236)]=this[_0x1bf733(0x676)]();else return![];}else{if(_0x1bf733(0x4e0)===_0x1bf733(0x6b1)){if(_0x4e59dc&&!_0xd45692['_erased']){this[_0x1bf733(0x4b0)](_0x28153c['x'],_0x10f1fb['y'],_0x2dc6f9);if(_0x3efe38[_0x1bf733(0x521)]()&&this['isNormalPriority']()){const _0x437286=_0x14790a[_0x1bf733(0x405)](this['x'],this['y'],_0x455cea['x'],_0x42db83['y']);if(_0x437286<=0x1)this[_0x1bf733(0x267)]++;}}}else{const _0x20f051=$gameMap[_0x1bf733(0x5f7)](_0x5e3062,_0x109fa0)[_0x1bf733(0x3c7)](_0x3653e0=>_0x3653e0!==this&&_0x3653e0[_0x1bf733(0x521)]());return _0x20f051['length']>0x0;}}},Game_Event['prototype'][_0x55137b(0x298)]=function(){const _0x4de9bd=_0x55137b;return this[_0x4de9bd(0x381)][_0x4de9bd(0x3e1)]||'none';},Game_Event['prototype'][_0x55137b(0x502)]=function(){const _0x2c22fb=_0x55137b;return this[_0x2c22fb(0x381)]['distance']||0x0;},Game_Event[_0x55137b(0x65a)]['activationRegionList']=function(){return this['_activationProximity']['regionList']||[];},Game_Event['prototype'][_0x55137b(0x5a1)]=function(){const _0x3fb52e=_0x55137b;Game_Character[_0x3fb52e(0x65a)][_0x3fb52e(0x5a1)]['call'](this);if([_0x3fb52e(0x230),_0x3fb52e(0x47c)]['includes'](this[_0x3fb52e(0x298)]()))return;$gamePlayer[_0x3fb52e(0x2cf)]([0x2]);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x4aa)]=Game_Event[_0x55137b(0x65a)][_0x55137b(0x2fd)],Game_Event[_0x55137b(0x65a)][_0x55137b(0x2fd)]=function(){const _0x423ef0=_0x55137b;if(this[_0x423ef0(0x2a2)]!==0x3)return;if(this[_0x423ef0(0x2ff)])return;if(!this['checkRegionEventTrigger'](![]))return;if(!this['checkActivationProximity'](![]))return;VisuMZ[_0x423ef0(0x2a6)][_0x423ef0(0x4aa)][_0x423ef0(0x24a)](this);},VisuMZ['EventsMoveCore']['Game_Event_updateParallel']=Game_Event[_0x55137b(0x65a)]['updateParallel'],Game_Event[_0x55137b(0x65a)][_0x55137b(0x4d3)]=function(){const _0x2a851c=_0x55137b;if(!this['_interpreter'])return;if(!this['checkRegionEventTrigger'](!![]))return;if(!this[_0x2a851c(0x4a6)](!![]))return;VisuMZ['EventsMoveCore'][_0x2a851c(0x4bd)][_0x2a851c(0x24a)](this);},Game_Event[_0x55137b(0x65a)][_0x55137b(0x459)]=function(_0x424af5){const _0x1a4d8f=_0x55137b;if(!_0x424af5&&$gameMap[_0x1a4d8f(0x51d)]())return![];if(!_0x424af5&&$gameMap['isAnyEventStarting']())return![];if(this['activationRegionList']()<=0x0)return!![];return $gamePlayer[_0x1a4d8f(0x585)](this);},Game_Event['prototype'][_0x55137b(0x4a6)]=function(_0x210c68){const _0x1388c5=_0x55137b;if(!_0x210c68&&$gameMap[_0x1388c5(0x51d)]())return![];if(!_0x210c68&&$gameMap[_0x1388c5(0x5ff)]())return![];if([_0x1388c5(0x230),'region'][_0x1388c5(0x23b)](this['activationProximityType']()))return!![];return $gamePlayer[_0x1388c5(0x36e)](this);},VisuMZ[_0x55137b(0x715)]=function(_0x23e984){const _0x16d274=_0x55137b;for(const _0x399d4e of $gameMap[_0x16d274(0x5db)]()){if(!_0x399d4e)continue;_0x399d4e[_0x16d274(0x732)]()===_0x23e984&&_0x399d4e[_0x16d274(0x6df)]();}},VisuMZ[_0x55137b(0x4d5)]=function(_0x1e9655){const _0x26f8d1=_0x55137b;if(_0x1e9655===0x0)return $gamePlayer;return $gameMap[_0x26f8d1(0x52c)](_0x1e9655);},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x53f)]=function(){},Game_Event['prototype']['updateMoveSynchDirection']=function(){const _0x4768c7=_0x55137b;VisuMZ[_0x4768c7(0x55c)](this['_eventId']);},VisuMZ['FaceSynchAllSynchTargets']=function(_0x23fcaf){const _0x2ae20a=_0x55137b;for(const _0x1c97d8 of $gameMap[_0x2ae20a(0x5db)]()){if(_0x2ae20a(0x33d)!=='YqhCd'){if(!_0x1c97d8)continue;_0x1c97d8[_0x2ae20a(0x732)]()===_0x23fcaf&&_0x1c97d8[_0x2ae20a(0x2a5)]();}else return![];}},Game_Event['prototype'][_0x55137b(0x732)]=function(){const _0x17d6be=_0x55137b;return this[_0x17d6be(0x64c)][_0x17d6be(0x4b1)];},Game_Event[_0x55137b(0x65a)][_0x55137b(0x5c7)]=function(){const _0x18f89b=_0x55137b;return this[_0x18f89b(0x64c)][_0x18f89b(0x3e1)];},Game_Event[_0x55137b(0x65a)]['realMoveSpeed']=function(){const _0x4b4242=_0x55137b;if(this[_0x4b4242(0x732)]()>=0x0){const _0x35a75b=VisuMZ[_0x4b4242(0x4d5)](this[_0x4b4242(0x732)]());if(_0x35a75b)return _0x35a75b['realMoveSpeed']();}return Game_Character['prototype'][_0x4b4242(0x429)][_0x4b4242(0x24a)](this);},Game_Event[_0x55137b(0x65a)][_0x55137b(0x6df)]=function(){const _0x1758f0=_0x55137b;this[_0x1758f0(0x64c)][_0x1758f0(0x29f)]=this[_0x1758f0(0x64c)]['timer']||0x0,this[_0x1758f0(0x64c)][_0x1758f0(0x29f)]--;if(this['_moveSynch'][_0x1758f0(0x29f)]>0x0)return;this[_0x1758f0(0x64c)][_0x1758f0(0x29f)]=this['_moveSynch'][_0x1758f0(0x6ee)],this[_0x1758f0(0x6d4)]();},Game_Event[_0x55137b(0x65a)][_0x55137b(0x5ef)]=function(_0x307430){const _0x31de48=_0x55137b;if(this[_0x31de48(0x732)]()>=0x0){if(_0x31de48(0x3f8)!==_0x31de48(0x3f8)){if(_0x526a73===0x0)return _0x3ca9c0;return _0x2dd6ec['event'](_0x37da3d);}else{const _0x3c75a0=VisuMZ['GetMoveSynchTarget'](this[_0x31de48(0x732)]());if(_0x3c75a0){const _0x4af98a=$gameMap['distance'](this['_realX'],this[_0x31de48(0x512)],_0x3c75a0[_0x31de48(0x2c8)],_0x3c75a0[_0x31de48(0x512)])-0x1,_0x564da2=Math['min']($gameMap['tileWidth'](),$gameMap[_0x31de48(0x6f4)]()),_0xbc1ad8=this[_0x31de48(0x64c)][_0x31de48(0x66e)]||0x0;_0x307430-=Math[_0x31de48(0x69d)](0x0,_0x4af98a)*_0x564da2*_0xbc1ad8;}}}return _0x307430;},Game_Event[_0x55137b(0x65a)][_0x55137b(0x6d4)]=function(){const _0xb6c34f=_0x55137b;switch(this[_0xb6c34f(0x5c7)]()){case _0xb6c34f(0x235):this[_0xb6c34f(0x4c1)]();break;case'approach':this['processMoveSynchApproach']();break;case _0xb6c34f(0x452):this[_0xb6c34f(0x4b8)]();break;case _0xb6c34f(0x2ca):this[_0xb6c34f(0x309)]();break;case _0xb6c34f(0x365):case'copy':this['processMoveSynchMimic']();break;case _0xb6c34f(0x606):case _0xb6c34f(0x4ea):this[_0xb6c34f(0x223)]();break;case _0xb6c34f(0x3cc):case'horizontal\x20mirror':case _0xb6c34f(0x684):case _0xb6c34f(0x5fb):this['processMoveSynchMirrorHorz']();break;case'mirror\x20vertical':case _0xb6c34f(0x63b):case _0xb6c34f(0x2c6):case _0xb6c34f(0x479):this['processMoveSynchMirrorVert']();break;default:this[_0xb6c34f(0x4c1)]();break;}this[_0xb6c34f(0x44c)]();},Game_Event[_0x55137b(0x65a)][_0x55137b(0x4c1)]=function(){const _0x3b0c22=_0x55137b,_0x38174f=[0x2,0x4,0x6,0x8];if($gameMap['isSupportDiagonalMovement']()){if(_0x3b0c22(0x542)!==_0x3b0c22(0x542)){this['_poseDuration']--;if(this[_0x3b0c22(0x1f5)]<=0x0&&this['_pose']!==_0x3b0c22(0x4bb))this[_0x3b0c22(0x560)]();}else _0x38174f[_0x3b0c22(0x696)](0x1,0x3,0x7,0x9);}const _0xf043db=[];for(const _0xcf9f6b of _0x38174f){if(this[_0x3b0c22(0x25b)](this['x'],this['y'],_0xcf9f6b))_0xf043db[_0x3b0c22(0x696)](_0xcf9f6b);}if(_0xf043db[_0x3b0c22(0x730)]>0x0){if(_0x3b0c22(0x6a6)===_0x3b0c22(0x362)){let _0x45c015=_0x83422c(_0x50ee4a['$1'])[_0x3b0c22(0x5d3)]();this['_labelWindow']['text']=_0x45c015,this[_0x3b0c22(0x30c)][_0x3b0c22(0x45d)]=_0x45c015;}else{const _0x5cebfd=_0xf043db[Math[_0x3b0c22(0x639)](_0xf043db[_0x3b0c22(0x730)])];this['executeMoveDir8'](_0x5cebfd);}}},Game_Event['prototype']['processMoveSynchApproach']=function(){const _0x222939=_0x55137b,_0x3f4229=VisuMZ[_0x222939(0x4d5)](this[_0x222939(0x732)]());this['moveTowardCharacter'](_0x3f4229);},Game_Event[_0x55137b(0x65a)][_0x55137b(0x4b8)]=function(){const _0x29f093=_0x55137b,_0x5282ba=VisuMZ[_0x29f093(0x4d5)](this[_0x29f093(0x732)]());this['moveAwayFromCharacter'](_0x5282ba);},Game_Event['prototype'][_0x55137b(0x309)]=function(){const _0x765a51=_0x55137b;this[_0x765a51(0x488)]();},Game_Event[_0x55137b(0x65a)][_0x55137b(0x4ac)]=function(){const _0x2098b3=_0x55137b,_0x4a33f9=VisuMZ[_0x2098b3(0x4d5)](this[_0x2098b3(0x732)]());this[_0x2098b3(0x41e)](_0x4a33f9['lastMovedDirection']());},Game_Event[_0x55137b(0x65a)][_0x55137b(0x223)]=function(){const _0x39e674=_0x55137b,_0x17ff83=VisuMZ['GetMoveSynchTarget'](this[_0x39e674(0x732)]());this[_0x39e674(0x41e)](this['reverseDir'](_0x17ff83[_0x39e674(0x355)]()));},Game_Event[_0x55137b(0x65a)][_0x55137b(0x5c0)]=function(){const _0x358b88=_0x55137b,_0x40638c=VisuMZ[_0x358b88(0x4d5)](this[_0x358b88(0x732)]()),_0x59ac2b=[0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x40638c[_0x358b88(0x355)]()];this['executeMoveDir8'](_0x59ac2b);},Game_Event[_0x55137b(0x65a)][_0x55137b(0x6ab)]=function(){const _0x3efe92=_0x55137b,_0x4283eb=VisuMZ[_0x3efe92(0x4d5)](this['moveSynchTarget']()),_0x5e0d6f=[0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x4283eb['lastMovedDirection']()];this[_0x3efe92(0x41e)](_0x5e0d6f);},Game_Event[_0x55137b(0x65a)][_0x55137b(0x2a5)]=function(){const _0x24011d=_0x55137b,_0x42a0ec=VisuMZ['GetMoveSynchTarget'](this[_0x24011d(0x732)]()),_0x216c2e=_0x42a0ec[_0x24011d(0x69a)]();switch(this['moveSynchType']()){case _0x24011d(0x365):case _0x24011d(0x635):this[_0x24011d(0x62f)](_0x216c2e);break;case'reverse\x20mimic':case _0x24011d(0x4ea):this[_0x24011d(0x62f)](this['reverseDir'](_0x216c2e));break;case'mirror\x20horizontal':case _0x24011d(0x70f):case _0x24011d(0x684):case _0x24011d(0x5fb):this['setDirection']([0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x216c2e]);break;case _0x24011d(0x207):case'vertical\x20mirror':case _0x24011d(0x2c6):case _0x24011d(0x479):this[_0x24011d(0x62f)]([0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x216c2e]);break;default:return;}this['update']();},Game_Event['prototype']['restoreSavedEventPosition']=function(){const _0x1e75cd=_0x55137b,_0x48ec53=$gameSystem[_0x1e75cd(0x5b4)](this);if(!_0x48ec53)return;this['setPosition'](_0x48ec53['x'],_0x48ec53['y']),this[_0x1e75cd(0x31a)](),this[_0x1e75cd(0x62f)](_0x48ec53[_0x1e75cd(0x69a)]),this['_pageIndex']===_0x48ec53['pageIndex']&&(this[_0x1e75cd(0x267)]=_0x48ec53[_0x1e75cd(0x249)]);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x20c)]=Game_Event[_0x55137b(0x65a)][_0x55137b(0x44c)],Game_Event[_0x55137b(0x65a)][_0x55137b(0x44c)]=function(){const _0x5eefc8=_0x55137b;VisuMZ[_0x5eefc8(0x2a6)][_0x5eefc8(0x20c)][_0x5eefc8(0x24a)](this),!Utils[_0x5eefc8(0x327)]()&&this[_0x5eefc8(0x2e9)]();},Game_Event[_0x55137b(0x65a)]['updateMove']=function(){const _0x3f2e01=_0x55137b;Game_Character[_0x3f2e01(0x65a)][_0x3f2e01(0x448)][_0x3f2e01(0x24a)](this),this[_0x3f2e01(0x548)]();},Game_Event[_0x55137b(0x65a)][_0x55137b(0x4c9)]=function(){const _0x5606d8=_0x55137b;if($gameMap['isSaveEventLocations']())return!![];return this[_0x5606d8(0x339)];},Game_Event[_0x55137b(0x65a)][_0x55137b(0x548)]=function(){const _0x3f161b=_0x55137b;if(!this[_0x3f161b(0x4c9)]())return;this['saveEventLocation']();},Game_Event[_0x55137b(0x65a)][_0x55137b(0x340)]=function(){this['_requestSaveEventLocation']=!![];},Game_Event['prototype'][_0x55137b(0x2e9)]=function(){const _0x4acc7d=_0x55137b;this[_0x4acc7d(0x478)]&&(_0x4acc7d(0x3d0)===_0x4acc7d(0x3d0)?this[_0x4acc7d(0x474)]():_0x14f2f7[_0x4acc7d(0x6df)]());},Game_Event[_0x55137b(0x65a)][_0x55137b(0x474)]=function(){const _0x76b51a=_0x55137b;this[_0x76b51a(0x478)]=![],$gameSystem[_0x76b51a(0x340)](this);},Game_Event[_0x55137b(0x65a)][_0x55137b(0x6cb)]=function(){const _0x36aada=_0x55137b;$gameSystem[_0x36aada(0x605)](this);},Game_Event[_0x55137b(0x65a)][_0x55137b(0x28d)]=function(){const _0x3464cc=_0x55137b;return $gameSystem[_0x3464cc(0x28d)](this)?'Mwcfj'==='Jalng'?this[_0x3464cc(0x5ba)](_0x213bd6):Game_Character[_0x3464cc(0x65a)][_0x3464cc(0x28d)][_0x3464cc(0x24a)](this):{'iconIndex':0x0,'bufferX':settings[_0x3464cc(0x4e5)][_0x3464cc(0x6d2)],'bufferY':settings[_0x3464cc(0x4e5)][_0x3464cc(0x4d2)],'blendMode':settings['Icon'][_0x3464cc(0x72e)]};},Game_Event['prototype'][_0x55137b(0x6c2)]=function(){return this['_CPCs'];},VisuMZ['EventsMoveCore'][_0x55137b(0x45e)]=Game_Event[_0x55137b(0x65a)]['meetsConditions'],Game_Event[_0x55137b(0x65a)]['meetsConditions']=function(_0x37e1f2){const _0x2a9695=_0x55137b,_0x1a8188=VisuMZ[_0x2a9695(0x2a6)][_0x2a9695(0x45e)][_0x2a9695(0x24a)](this,_0x37e1f2);if(!_0x1a8188)return![];return this[_0x2a9695(0x411)](_0x37e1f2);},Game_Event[_0x55137b(0x65a)][_0x55137b(0x411)]=function(_0x39b80e){const _0x160cd8=_0x55137b;VisuMZ['EventsMoveCore'][_0x160cd8(0x3f0)]['loadCPC'](_0x39b80e),this[_0x160cd8(0x6f3)]=_0x39b80e[_0x160cd8(0x36a)][_0x160cd8(0x730)]>0x0;_0x39b80e[_0x160cd8(0x36a)]===undefined&&VisuMZ[_0x160cd8(0x2a6)]['CustomPageConditions']['loadCPC'](_0x39b80e);if(_0x39b80e[_0x160cd8(0x36a)]['length']>0x0)return $gameMap['event'](this[_0x160cd8(0x627)])&&VisuMZ['EventsMoveCore'][_0x160cd8(0x3f0)]['metCPC'](_0x39b80e[_0x160cd8(0x36a)],this['_eventId']);return!![];},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x46e)]=Game_Troop[_0x55137b(0x65a)]['meetsConditions'],Game_Troop['prototype']['meetsConditions']=function(_0x4a82f8){const _0xdb0b5d=_0x55137b;var _0x1c3501=VisuMZ[_0xdb0b5d(0x2a6)]['Game_Troop_meetsConditionsCPC'][_0xdb0b5d(0x24a)](this,_0x4a82f8);return _0x1c3501&&this[_0xdb0b5d(0x26e)](_0x4a82f8);},Game_Troop[_0x55137b(0x65a)][_0x55137b(0x26e)]=function(_0x42b2a0){const _0x2113c3=_0x55137b;_0x42b2a0[_0x2113c3(0x36a)]===undefined&&VisuMZ['EventsMoveCore'][_0x2113c3(0x3f0)][_0x2113c3(0x328)](_0x42b2a0);if(_0x42b2a0[_0x2113c3(0x36a)][_0x2113c3(0x730)]>0x0)return VisuMZ[_0x2113c3(0x2a6)][_0x2113c3(0x3f0)]['metCPC'](_0x42b2a0[_0x2113c3(0x36a)],0x0);return!![];},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x270)]=Game_Event[_0x55137b(0x65a)][_0x55137b(0x5be)],Game_Event[_0x55137b(0x65a)][_0x55137b(0x5be)]=function(_0x44671e,_0x392ac1){const _0x30578a=_0x55137b;VisuMZ[_0x30578a(0x2a6)][_0x30578a(0x270)][_0x30578a(0x24a)](this,_0x44671e,_0x392ac1),this['_randomHomeX']=_0x44671e,this['_randomHomeY']=_0x392ac1,this['autosaveEventLocation']();},VisuMZ['EventsMoveCore'][_0x55137b(0x24b)]=Game_Event['prototype'][_0x55137b(0x6c4)],Game_Event['prototype']['moveTypeRandom']=function(){const _0x290a27=_0x55137b,_0x53c626=$gameMap[_0x290a27(0x405)](this['x'],this['y'],this['_randomHomeX'],this[_0x290a27(0x545)]),_0x1c5e9c=_0x53c626*(this[_0x290a27(0x5c3)]||0x0);if(Math[_0x290a27(0x235)]()>=_0x1c5e9c){if(_0x290a27(0x3e6)!==_0x290a27(0x48f))VisuMZ['EventsMoveCore'][_0x290a27(0x24b)][_0x290a27(0x24a)](this);else return this[_0x290a27(0x4c2)](_0x479e27(_0x33e09e['$1']),_0x250689(_0x10be5e['$2']));}else{if('vcBdC'!==_0x290a27(0x26d))return this[_0x290a27(0x437)];else this['moveBackToRandomHome']();}},Game_Event[_0x55137b(0x65a)][_0x55137b(0x567)]=function(){const _0x3bf42a=_0x55137b,_0x244552=this['deltaXFrom'](this['_randomHomeX']),_0x4062d7=this[_0x3bf42a(0x36f)](this['_randomHomeY']);if(Math['abs'](_0x244552)>Math[_0x3bf42a(0x4f2)](_0x4062d7)){if(_0x3bf42a(0x460)===_0x3bf42a(0x44d)){_0x45a393=_0xa8ab9c===_0x3bf42a(0x598)?0x5:_0x312aaa;const _0x46d241=this[_0x3bf42a(0x28b)](_0x425717,_0x5c658b),_0x3aae4d=this[_0x3bf42a(0x47d)](_0x2a9067,_0x207fdf),_0x1edcd7=this['regionId'](_0x46d241,_0x3aae4d),_0x43c11a=this[_0x3bf42a(0x6da)];if(_0x43c11a[_0x3bf42a(0x586)][_0x3bf42a(0x23b)](_0x1edcd7))return!![];else{const _0x513caa=_0x3bf42a(0x23e)[_0x3bf42a(0x69f)](_0x50e275[_0x3bf42a(0x6d1)](0x0)[_0x3bf42a(0x557)]()+_0x301109['slice'](0x1));if(_0x43c11a[_0x513caa])return _0x43c11a[_0x513caa][_0x3bf42a(0x23b)](_0x1edcd7);}return![];}else this[_0x3bf42a(0x5ba)](_0x244552>0x0?0x4:0x6),!this[_0x3bf42a(0x472)]()&&_0x4062d7!==0x0&&this[_0x3bf42a(0x5ba)](_0x4062d7>0x0?0x8:0x2);}else{if(_0x4062d7!==0x0){this[_0x3bf42a(0x5ba)](_0x4062d7>0x0?0x8:0x2);if(!this[_0x3bf42a(0x472)]()&&_0x244552!==0x0){if(_0x3bf42a(0x22c)==='QRdAb')this['moveStraight'](_0x244552>0x0?0x4:0x6);else{_0x3f9b31['match'](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);let _0x4e5c8d=_0x504bc2(_0x3b6927['$1'])[_0x3bf42a(0x571)]()[_0x3bf42a(0x5d3)](),_0x22767f=_0x2595fa(_0x5b5b8d['$2'])[_0x3bf42a(0x571)]()[_0x3bf42a(0x5d3)]();const _0x2f7f05=_0x118ac2[_0x3bf42a(0x685)]('['+_0x3e18cc['$3'][_0x3bf42a(0x614)](/\d+/g)+']');_0x4e5c8d=_0x4e5c8d[_0x3bf42a(0x6d1)](0x0)[_0x3bf42a(0x557)]()+_0x4e5c8d[_0x3bf42a(0x4fe)](0x1),_0x22767f=_0x22767f[_0x3bf42a(0x6d1)](0x0)[_0x3bf42a(0x557)]()+_0x22767f[_0x3bf42a(0x4fe)](0x1);const _0x1867e9=_0x3bf42a(0x6c7)['format'](_0x4e5c8d,_0x22767f);if(_0x459aa2[_0x1867e9])_0x3b87e8[_0x1867e9]=_0x395c08[_0x1867e9][_0x3bf42a(0x50f)](_0x2f7f05);}}}}},Game_CharacterBase['prototype'][_0x55137b(0x351)]=function(){this['_attachPicture']={'filename':'','blendMode':0x0,'maxSize':0x0,'offsetX':0x0,'offsetY':0x0,'scale':0x1};},Game_CharacterBase[_0x55137b(0x65a)]['attachPictureSettings']=function(){const _0x51e8bc=_0x55137b;if(this['_attachPicture']===undefined)this[_0x51e8bc(0x351)]();return this[_0x51e8bc(0x510)];},Game_CharacterBase[_0x55137b(0x65a)][_0x55137b(0x389)]=function(){const _0x2a41a7=_0x55137b;return this[_0x2a41a7(0x603)]()['filename']??'';},Game_CharacterBase[_0x55137b(0x65a)]['attachPictureBlendMode']=function(){return this['attachPictureSettings']()['blendMode']??0x0;},Game_CharacterBase['prototype'][_0x55137b(0x67a)]=function(){const _0x42854d=_0x55137b;return this[_0x42854d(0x603)]()[_0x42854d(0x4f0)]??0x0;},Game_CharacterBase[_0x55137b(0x65a)]['attachPictureOffsetX']=function(){const _0x580338=_0x55137b;return this[_0x580338(0x603)]()[_0x580338(0x476)]??0x0;},Game_CharacterBase['prototype'][_0x55137b(0x33c)]=function(){const _0x37ee19=_0x55137b;return this['attachPictureSettings']()[_0x37ee19(0x41d)]??0x0;},Game_CharacterBase['prototype'][_0x55137b(0x23d)]=function(){const _0x1df13d=_0x55137b;return this[_0x1df13d(0x603)]()[_0x1df13d(0x604)]??0x1;},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x6b0)]=Game_Interpreter[_0x55137b(0x65a)][_0x55137b(0x24d)],Game_Interpreter[_0x55137b(0x65a)][_0x55137b(0x24d)]=function(){const _0x27aded=_0x55137b;if(this[_0x27aded(0x57e)]===_0x27aded(0x333)){if(window[this[_0x27aded(0x4c3)]])this[_0x27aded(0x57e)]='',this['startCallEvent']();else return!![];}else{if(_0x27aded(0x547)!==_0x27aded(0x547))_0x5848ce[_0x27aded(0x1fd)][_0x440514]=_0x5e744d[_0x56dc15],_0x48d49b[_0x49214b]=_0x1b6a6f;else return VisuMZ[_0x27aded(0x2a6)][_0x27aded(0x6b0)][_0x27aded(0x24a)](this);}},VisuMZ[_0x55137b(0x2a6)]['Game_Interpreter_executeCommand']=Game_Interpreter[_0x55137b(0x65a)][_0x55137b(0x68c)],Game_Interpreter[_0x55137b(0x65a)][_0x55137b(0x68c)]=function(){const _0xcbb8d9=_0x55137b,_0x46953c=$gameMap&&this[_0xcbb8d9(0x627)]?$gameMap[_0xcbb8d9(0x52c)](this[_0xcbb8d9(0x627)]):null;$gameTemp[_0xcbb8d9(0x2f9)](_0x46953c);const _0x275ddd=VisuMZ[_0xcbb8d9(0x2a6)][_0xcbb8d9(0x4ba)][_0xcbb8d9(0x24a)](this);return $gameTemp[_0xcbb8d9(0x319)](),_0x275ddd;},VisuMZ[_0x55137b(0x2a6)]['Game_Interpreter_PluginCommand']=Game_Interpreter[_0x55137b(0x65a)][_0x55137b(0x640)],Game_Interpreter[_0x55137b(0x65a)][_0x55137b(0x640)]=function(_0xdd4d53){const _0x2fa223=_0x55137b;return $gameTemp['setLastPluginCommandInterpreter'](this),VisuMZ['EventsMoveCore'][_0x2fa223(0x2f6)][_0x2fa223(0x24a)](this,_0xdd4d53);},Game_Interpreter[_0x55137b(0x65a)][_0x55137b(0x726)]=function(_0xa62b6f){const _0x2c93cb=_0x55137b;this[_0x2c93cb(0x47f)]=_0xa62b6f;const _0x349b6f=_0x2c93cb(0x455)[_0x2c93cb(0x69f)](_0xa62b6f[_0x2c93cb(0x517)][_0x2c93cb(0x2fb)](0x3));this[_0x2c93cb(0x4c3)]=_0x2c93cb(0x70d)+Graphics[_0x2c93cb(0x4ee)]+'_'+this[_0x2c93cb(0x506)](),DataManager[_0x2c93cb(0x2db)](this[_0x2c93cb(0x4c3)],_0x349b6f),window[this[_0x2c93cb(0x4c3)]]?_0x2c93cb(0x50c)==='IVxFi'?this[_0x2c93cb(0x508)]():this[_0x2c93cb(0x482)]['z']=0x0:this[_0x2c93cb(0x57a)](_0x2c93cb(0x333));},Game_Interpreter[_0x55137b(0x65a)]['startCallEvent']=function(){const _0x1fd5d1=_0x55137b,_0x9b3acd=this['_callEventData'],_0x7c270=window[this[_0x1fd5d1(0x4c3)]],_0x57728c=_0x7c270[_0x1fd5d1(0x5db)][_0x9b3acd[_0x1fd5d1(0x506)]];if(_0x57728c&&_0x57728c[_0x1fd5d1(0x2d8)][_0x9b3acd['pageId']-0x1]){const _0x39f0a5=_0x57728c[_0x1fd5d1(0x2d8)][_0x9b3acd[_0x1fd5d1(0x361)]-0x1][_0x1fd5d1(0x6fe)];this[_0x1fd5d1(0x6e9)](_0x39f0a5,this[_0x1fd5d1(0x506)]());}window[this[_0x1fd5d1(0x4c3)]]=undefined,this[_0x1fd5d1(0x4c3)]=undefined,this['_callEventData']=undefined;};function Game_CPCInterpreter(){const _0x14ab2c=_0x55137b;this['initialize'][_0x14ab2c(0x418)](this,arguments);};Game_CPCInterpreter[_0x55137b(0x65a)]=Object[_0x55137b(0x2ba)](Game_Interpreter['prototype']),Game_CPCInterpreter[_0x55137b(0x65a)][_0x55137b(0x514)]=Game_CPCInterpreter,Game_CPCInterpreter['prototype']['clear']=function(){const _0x464dd2=_0x55137b;Game_Interpreter[_0x464dd2(0x65a)]['clear'][_0x464dd2(0x24a)](this),this[_0x464dd2(0x357)]=![];},Game_CPCInterpreter[_0x55137b(0x65a)]['execute']=function(){const _0x251aa1=_0x55137b;while(this['isRunning']()){if(_0x251aa1(0x65b)!==_0x251aa1(0x65b)){if(_0x4e71a6>this['y']&&this[_0x251aa1(0x25b)](this['x'],this['y'],0x4))_0x2b3ddd=0x3;if(_0x4976a8<this['y']&&this[_0x251aa1(0x25b)](this['x'],this['y'],0x6))_0x46b82b=0x9;}else this['executeCommand']();}},Game_CPCInterpreter[_0x55137b(0x65a)][_0x55137b(0x386)]=function(_0x4c8e45){const _0x2bdc45=_0x55137b;while(this[_0x2bdc45(0x250)]()){_0x2bdc45(0x46a)===_0x2bdc45(0x27f)?(_0x25dced[_0x2bdc45(0x2a6)][_0x2bdc45(0x2b3)][_0x2bdc45(0x24a)](this,_0x433233,_0x3dd6e2),this['setupCopyEvent'](),this[_0x2bdc45(0x619)](),this[_0x2bdc45(0x582)]()):this[_0x2bdc45(0x453)](_0x4c8e45);}},Game_CPCInterpreter[_0x55137b(0x65a)][_0x55137b(0x453)]=function(_0x5399ac){const _0x5b803a=_0x55137b,_0x5ac288=_0x5399ac;$gameTemp['registerSelfTarget'](_0x5ac288);const _0x255598=VisuMZ['EventsMoveCore']['Game_Interpreter_executeCommand'][_0x5b803a(0x24a)](this);return $gameTemp['clearSelfTarget'](),_0x255598;},Game_CPCInterpreter[_0x55137b(0x65a)][_0x55137b(0x5c9)]=function(_0x109894){const _0x580bde=_0x55137b;return Game_Interpreter[_0x580bde(0x65a)][_0x580bde(0x5c9)][_0x580bde(0x24a)](this,_0x109894),this[_0x580bde(0x252)][_0x580bde(0x279)](_0x501795=>_0x501795[_0x580bde(0x614)](/<(?:CONDITION|CONDITIONS) MET>/i))&&(this[_0x580bde(0x357)]=!![]),!![];},VisuMZ[_0x55137b(0x2a6)]['Scene_Map_startEncounterEffect']=Scene_Map['prototype'][_0x55137b(0x38c)],Scene_Map['prototype'][_0x55137b(0x38c)]=function(){const _0x1d8a56=_0x55137b;VisuMZ[_0x1d8a56(0x2a6)][_0x1d8a56(0x6aa)][_0x1d8a56(0x24a)](this),this['_spriteset']['hideShadows']();},VisuMZ['EventsMoveCore']['Scene_Load_onLoadSuccess']=Scene_Load[_0x55137b(0x65a)][_0x55137b(0x3a9)],Scene_Load['prototype']['onLoadSuccess']=function(){const _0x3bde24=_0x55137b;if($gameMap)$gameMap['clearEventCache']();VisuMZ['EventsMoveCore'][_0x3bde24(0x519)][_0x3bde24(0x24a)](this);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x679)]=Sprite_Character[_0x55137b(0x65a)]['initMembers'],Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x1f8)]=function(){const _0x1d7058=_0x55137b;VisuMZ[_0x1d7058(0x2a6)][_0x1d7058(0x679)][_0x1d7058(0x24a)](this),this['initMembersEventsMoveCore'](),this[_0x1d7058(0x6e4)](),this[_0x1d7058(0x680)]();},Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x348)]=function(){const _0x890ec4=_0x55137b;this[_0x890ec4(0x320)]=0xff;},Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x6e4)]=function(){const _0x568615=_0x55137b;this[_0x568615(0x363)]=new Sprite(),this[_0x568615(0x363)][_0x568615(0x3f1)]['x']=0.5,this[_0x568615(0x363)][_0x568615(0x3f1)]['y']=0x1,this[_0x568615(0x3de)](this[_0x568615(0x363)]),this[_0x568615(0x513)]();},Sprite_Character['prototype'][_0x55137b(0x680)]=function(){const _0x15b86d=_0x55137b;this[_0x15b86d(0x54b)]=new Sprite(),this['_eventIconSprite'][_0x15b86d(0x5bb)]=ImageManager[_0x15b86d(0x2e7)](_0x15b86d(0x372)),this['_eventIconSprite'][_0x15b86d(0x5bb)][_0x15b86d(0x5a3)]=![],this[_0x15b86d(0x54b)][_0x15b86d(0x338)](0x0,0x0,0x0,0x0),this[_0x15b86d(0x54b)][_0x15b86d(0x3f1)]['x']=0.5,this[_0x15b86d(0x54b)][_0x15b86d(0x3f1)]['y']=0x1,this[_0x15b86d(0x3de)](this['_eventIconSprite']);},Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x28f)]=function(){const _0x57cc57=_0x55137b;return this[_0x57cc57(0x4e6)]&&this[_0x57cc57(0x4e6)][_0x57cc57(0x614)](/\[VS8\]/i);},Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x2a3)]=function(){const _0x2ddd43=_0x55137b;return this[_0x2ddd43(0x28f)]()&&VisuMZ[_0x2ddd43(0x2a6)][_0x2ddd43(0x6ea)][_0x2ddd43(0x4a3)][_0x2ddd43(0x457)];},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x2c7)]=Sprite_Character['prototype']['update'],Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x44c)]=function(){const _0x495768=_0x55137b;VisuMZ[_0x495768(0x2a6)][_0x495768(0x2c7)][_0x495768(0x24a)](this),this[_0x495768(0x5fc)]();},Sprite_Character[_0x55137b(0x65a)]['updateVisibility']=function(){const _0x4458c8=_0x55137b;Sprite[_0x4458c8(0x65a)][_0x4458c8(0x5a6)]['call'](this),this[_0x4458c8(0x518)]()&&(this['visible']=![]);},Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x518)]=function(){const _0x4411dd=_0x55137b;if(this['getEventIconIndex']()>0x0)return![];if(this[_0x4411dd(0x58e)]){if(this['_character'][_0x4411dd(0x389)]()!=='')return![];}return this[_0x4411dd(0x44a)]()||this['_character']&&this[_0x4411dd(0x58e)]['isTransparent']();},Sprite_Character['prototype'][_0x55137b(0x5fc)]=function(){const _0x4a4a9c=_0x55137b;this[_0x4a4a9c(0x20a)](),this['updateTilt'](),this['updateShadow'](),this[_0x4a4a9c(0x66b)](),this['updateEventCustomZ'](),this[_0x4a4a9c(0x549)](),this[_0x4a4a9c(0x513)]();},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x38e)]=Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x5b2)],Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x5b2)]=function(){const _0x345a49=_0x55137b;VisuMZ[_0x345a49(0x2a6)][_0x345a49(0x38e)][_0x345a49(0x24a)](this),this[_0x345a49(0x5bb)][_0x345a49(0x3a4)](this[_0x345a49(0x49c)]['bind'](this));},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x666)]=Sprite_Character['prototype'][_0x55137b(0x537)],Sprite_Character['prototype'][_0x55137b(0x537)]=function(){const _0x19bb29=_0x55137b;VisuMZ[_0x19bb29(0x2a6)]['Sprite_Character_setCharacterBitmap'][_0x19bb29(0x24a)](this),this[_0x19bb29(0x5bb)]['addLoadListener'](this[_0x19bb29(0x49c)][_0x19bb29(0x65e)](this));},Sprite_Character[_0x55137b(0x65a)]['updateBitmapSmoothing']=function(){const _0x1030dc=_0x55137b;if(!this[_0x1030dc(0x5bb)])return;this['bitmap'][_0x1030dc(0x5a3)]=!!VisuMZ[_0x1030dc(0x2a6)][_0x1030dc(0x6ea)][_0x1030dc(0x344)]['BitmapSmoothing'];},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x2ef)]=Sprite_Character['prototype'][_0x55137b(0x6c5)],Sprite_Character['prototype'][_0x55137b(0x6c5)]=function(){const _0x42ac5b=_0x55137b;if(this['isSpriteVS8dir']())return this['characterPatternYVS8']();else{if(_0x42ac5b(0x40b)!==_0x42ac5b(0x468))return this[_0x42ac5b(0x618)]();else{const _0xd1ec6=_0x30c271['EventsMoveCore'][_0x42ac5b(0x594)][_0x42ac5b(0x24a)](this),_0x15d0d7=_0x3301d6[_0x42ac5b(0x2a6)]['CustomPageConditions'][_0x42ac5b(0x3ab)][_0x42ac5b(0x276)](_0x854944=>_0x828def[_0x854944]);return _0xd1ec6['concat'](_0x15d0d7)['filter']((_0x30aed5,_0x398aa3,_0x3bf4b6)=>_0x3bf4b6[_0x42ac5b(0x5da)](_0x30aed5)===_0x398aa3);}}},Sprite_Character[_0x55137b(0x65a)]['characterPatternYVS8']=function(){const _0x49ceb5=_0x55137b,_0x58730e=this[_0x49ceb5(0x58e)]['direction']();let _0x432e19=[0x2,0x2,0x2,0x4,0x4,0x2,0x6,0x6,0x8,0x8];return this['_character'][_0x49ceb5(0x5b3)]&&(_0x432e19=[0x2,0x4,0x2,0x2,0x6,0x2,0x4,0x8,0x8,0x6]),(_0x432e19[_0x58730e]-0x2)/0x2;},Sprite_Character[_0x55137b(0x65a)]['characterPatternYBasic']=function(){const _0x2bbad9=_0x55137b;let _0x3defd6=this[_0x2bbad9(0x58e)][_0x2bbad9(0x69a)]();if(this[_0x2bbad9(0x58e)][_0x2bbad9(0x5b3)]){if(_0x2bbad9(0x408)==='ZRUDM'){if(_0x3defd6===0x4)_0x3defd6=0x6;else _0x3defd6===0x6&&(_0x2bbad9(0x426)!==_0x2bbad9(0x426)?this['_moveSynch'][_0x2bbad9(0x66e)]=_0x55d500(_0x50d527['$1']):_0x3defd6=0x4);}else{if(this[_0x2bbad9(0x52b)]===_0x4c5103)this['initEventsMoveCore']();if(this[_0x2bbad9(0x52b)][_0x2bbad9(0x307)]===_0x145b50)this[_0x2bbad9(0x5c4)]();this['_EventsMoveCoreSettings'][_0x2bbad9(0x307)]=_0x41387f;}}return(_0x3defd6-0x2)/0x2;},Sprite_Character[_0x55137b(0x65a)]['updateScaleBase']=function(){const _0x17cc22=_0x55137b;this[_0x17cc22(0x604)]['x']=this[_0x17cc22(0x58e)][_0x17cc22(0x2ab)]??0x1,this[_0x17cc22(0x604)]['y']=this[_0x17cc22(0x58e)]['_scaleY']??0x1;},Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x239)]=function(){const _0x506132=_0x55137b;if(!VisuMZ[_0x506132(0x2a6)][_0x506132(0x6ea)][_0x506132(0x344)][_0x506132(0x5d4)])return;this['rotation']=0x0;if(this[_0x506132(0x3d7)]()){const _0x560c84=VisuMZ['EventsMoveCore'][_0x506132(0x6ea)]['Movement'],_0x17bf54=this[_0x506132(0x58e)]['direction']();let _0x2f9ddc=0x0;if([0x1,0x4,0x7]['includes'](_0x17bf54))_0x2f9ddc=_0x560c84['TiltLeft'];if([0x3,0x6,0x9][_0x506132(0x23b)](_0x17bf54))_0x2f9ddc=_0x560c84['TiltRight'];[0x2,0x8][_0x506132(0x23b)](_0x17bf54)&&(_0x2f9ddc=[-_0x560c84['TiltVert'],0x0,_0x560c84[_0x506132(0x5ee)]][this['_character']['pattern']()]);if(this['_reflection'])_0x2f9ddc*=-0x1;this[_0x506132(0x443)]=_0x2f9ddc;}},Sprite_Character['prototype'][_0x55137b(0x3d7)]=function(){const _0x197a00=_0x55137b;if(this[_0x197a00(0x379)])return![];return this[_0x197a00(0x58e)]['isDashingAndMoving']()&&!this[_0x197a00(0x58e)][_0x197a00(0x43d)]()&&!this[_0x197a00(0x58e)][_0x197a00(0x6a5)]()&&this[_0x197a00(0x484)]()===0x0;},Sprite_Character[_0x55137b(0x65a)]['updateShadow']=function(){const _0x2e8ff5=_0x55137b;if(!this[_0x2e8ff5(0x482)])return;this['_shadowSprite']['x']=this[_0x2e8ff5(0x58e)][_0x2e8ff5(0x526)](),this['_shadowSprite']['y']=this[_0x2e8ff5(0x58e)][_0x2e8ff5(0x299)](),this[_0x2e8ff5(0x482)][_0x2e8ff5(0x3fb)]=this['opacity'],this[_0x2e8ff5(0x482)]['visible']=this[_0x2e8ff5(0x58e)][_0x2e8ff5(0x5e0)](),this[_0x2e8ff5(0x482)][_0x2e8ff5(0x2de)]=this[_0x2e8ff5(0x2de)];if(this[_0x2e8ff5(0x58e)][_0x2e8ff5(0x305)]())this[_0x2e8ff5(0x482)][_0x2e8ff5(0x604)]['x']=Math[_0x2e8ff5(0x69d)](0x0,this[_0x2e8ff5(0x482)][_0x2e8ff5(0x604)]['x']-0.1),this['_shadowSprite'][_0x2e8ff5(0x604)]['y']=Math[_0x2e8ff5(0x69d)](0x0,this[_0x2e8ff5(0x482)]['scale']['y']-0.1);else{if(_0x2e8ff5(0x48e)!==_0x2e8ff5(0x616)){if(this[_0x2e8ff5(0x482)][_0x2e8ff5(0x604)]['x']!==this[_0x2e8ff5(0x604)]['x']){if(this[_0x2e8ff5(0x482)][_0x2e8ff5(0x604)]['x']>this['scale']['x'])this[_0x2e8ff5(0x482)]['scale']['x']=Math['min'](this['_shadowSprite'][_0x2e8ff5(0x604)]['x']+0.1,this[_0x2e8ff5(0x604)]['x']);if(this[_0x2e8ff5(0x482)][_0x2e8ff5(0x604)]['x']<this[_0x2e8ff5(0x604)]['x'])this['_shadowSprite'][_0x2e8ff5(0x604)]['x']=Math['max'](this['_shadowSprite'][_0x2e8ff5(0x604)]['x']-0.1,this[_0x2e8ff5(0x604)]['x']);}if(this[_0x2e8ff5(0x482)][_0x2e8ff5(0x604)]['y']!==this[_0x2e8ff5(0x604)]['y']){if(this[_0x2e8ff5(0x482)][_0x2e8ff5(0x604)]['y']>this[_0x2e8ff5(0x604)]['y'])this[_0x2e8ff5(0x482)][_0x2e8ff5(0x604)]['y']=Math[_0x2e8ff5(0x642)](this['_shadowSprite'][_0x2e8ff5(0x604)]['y']+0.1,this[_0x2e8ff5(0x604)]['y']);if(this['_shadowSprite']['scale']['y']<this['scale']['y'])this[_0x2e8ff5(0x482)][_0x2e8ff5(0x604)]['y']=Math[_0x2e8ff5(0x69d)](this[_0x2e8ff5(0x482)][_0x2e8ff5(0x604)]['y']-0.1,this[_0x2e8ff5(0x604)]['y']);}}else{let _0x210d9f=this[_0x2e8ff5(0x507)]()||0x1,_0x322e39=this[_0x2e8ff5(0x65f)]()||0x1;const _0x4812b8=_0x56c774[_0x2e8ff5(0x69d)](0x1,_0x210d9f,_0x322e39);_0xd2ac43=_0x4719dc/_0x4812b8;}}},Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x66b)]=function(){const _0x3ce7d6=_0x55137b;if(!this[_0x3ce7d6(0x54b)])return;const _0x5163bc=this[_0x3ce7d6(0x54b)],_0x5d15c3=this[_0x3ce7d6(0x484)]();if(_0x5d15c3<=0x0)return _0x5163bc[_0x3ce7d6(0x338)](0x0,0x0,0x0,0x0);else{const _0x2d76b1=ImageManager[_0x3ce7d6(0x515)],_0x12f0a3=ImageManager[_0x3ce7d6(0x317)],_0x272353=_0x5d15c3%0x10*_0x2d76b1,_0x146478=Math[_0x3ce7d6(0x34e)](_0x5d15c3/0x10)*_0x12f0a3;_0x5163bc[_0x3ce7d6(0x338)](_0x272353,_0x146478,_0x2d76b1,_0x12f0a3),this[_0x3ce7d6(0x3d1)]=!![];}const _0xfcd471=this['_character'][_0x3ce7d6(0x28d)]();this[_0x3ce7d6(0x2a3)]()?this[_0x3ce7d6(0x346)](_0x5163bc):(_0x5163bc['x']=_0xfcd471?_0xfcd471[_0x3ce7d6(0x497)]:0x0,_0x5163bc['y']=_0xfcd471?-this[_0x3ce7d6(0x700)]+_0xfcd471[_0x3ce7d6(0x4c7)]:0x0),_0x5163bc[_0x3ce7d6(0x70b)]=_0xfcd471?_0xfcd471[_0x3ce7d6(0x70b)]:0x0,this[_0x3ce7d6(0x4cf)](_0x5163bc),this[_0x3ce7d6(0x3de)](_0x5163bc),_0x5163bc[_0x3ce7d6(0x443)]=-this['rotation'];},Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x39d)]=function(){const _0x59b3ec=_0x55137b;if(!this[_0x59b3ec(0x58e)])return;if(this[_0x59b3ec(0x58e)]['_customZ']===undefined)return;if(this[_0x59b3ec(0x58e)][_0x59b3ec(0x48a)]===![])return;this['z']=this[_0x59b3ec(0x58e)][_0x59b3ec(0x48a)],this['z']<0x0?this['_shadowSprite']['z']=this['z']-0x1:this[_0x59b3ec(0x482)]['z']=0x0;},Sprite_Character[_0x55137b(0x65a)]['updateEventMirrorSprite']=function(){const _0x39c0e3=_0x55137b;if(!this[_0x39c0e3(0x58e)])return;let _0x1ccdb0=!!this[_0x39c0e3(0x58e)][_0x39c0e3(0x5b3)];this[_0x39c0e3(0x604)]['x']=Math[_0x39c0e3(0x4f2)](this[_0x39c0e3(0x604)]['x'])*(_0x1ccdb0?-0x1:0x1);},Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x346)]=function(_0x5164d0){const _0x19e603=_0x55137b;_0x5164d0['x']=0x0,_0x5164d0['y']=-this[_0x19e603(0x700)]+this[_0x19e603(0x700)]*0x2/0x5;if(this[_0x19e603(0x58e)]['pattern']()!==0x1){if(_0x19e603(0x37a)!=='Opznd'){_0xafac81[_0x19e603(0x53d)](_0x3dfbe3,_0x5d1fd7);const _0x1b355e=_0x58a92a[_0x19e603(0x401)],_0x55b20f=_0x4c0282['PosY'];_0x2d06f4[_0x19e603(0x2bd)](_0x1b355e,_0x55b20f);}else _0x5164d0['y']+=0x1;}},Sprite_Character['prototype'][_0x55137b(0x484)]=function(){const _0x4d8b4f=_0x55137b;if(!this[_0x4d8b4f(0x58e)])return 0x0;if(this[_0x4d8b4f(0x58e)][_0x4d8b4f(0x51c)])return 0x0;const _0x51bcd8=this['_character']['getEventIconData']();return _0x51bcd8?_0x51bcd8['iconIndex']||0x0:0x0;},Sprite_Character['prototype'][_0x55137b(0x513)]=function(){const _0x1beca1=_0x55137b;if(!this[_0x1beca1(0x363)])return;if(!this[_0x1beca1(0x58e)])return;this[_0x1beca1(0x53c)](),this[_0x1beca1(0x203)]();},Sprite_Character[_0x55137b(0x65a)]['setupAttachPictureBitmap']=function(){const _0x3fc376=_0x55137b;if(!this[_0x3fc376(0x62e)]())return;const _0x2a55c6=this[_0x3fc376(0x58e)]['attachPictureSettings']();this[_0x3fc376(0x412)]=_0x2a55c6[_0x3fc376(0x278)],this['_lastAttachPictureMaxSize']=_0x2a55c6[_0x3fc376(0x4f0)],this[_0x3fc376(0x3c8)]=_0x2a55c6['scale'];if(_0x2a55c6[_0x3fc376(0x278)]!==''){if(_0x3fc376(0x20f)===_0x3fc376(0x5cd))return{'iconIndex':0x0,'bufferX':_0x1df8fa['Icon'][_0x3fc376(0x6d2)],'bufferY':_0x4371a6[_0x3fc376(0x4e5)][_0x3fc376(0x4d2)],'blendMode':_0x542aa7[_0x3fc376(0x4e5)][_0x3fc376(0x72e)]};else{const _0x583fc7=ImageManager[_0x3fc376(0x6b2)](_0x2a55c6[_0x3fc376(0x278)]);_0x583fc7[_0x3fc376(0x3a4)](this[_0x3fc376(0x3e9)][_0x3fc376(0x65e)](this,_0x583fc7));}}else this[_0x3fc376(0x363)][_0x3fc376(0x5bb)]=new Bitmap(0x1,0x1);},Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x203)]=function(){const _0x5bba08=_0x55137b,_0x4b9fd9=this[_0x5bba08(0x363)];_0x4b9fd9['x']=this[_0x5bba08(0x58e)][_0x5bba08(0x419)](),_0x4b9fd9['y']=this[_0x5bba08(0x58e)][_0x5bba08(0x33c)](),_0x4b9fd9[_0x5bba08(0x70b)]=this[_0x5bba08(0x58e)][_0x5bba08(0x6e8)]();},Sprite_Character['prototype'][_0x55137b(0x62e)]=function(){const _0x431651=_0x55137b,_0x387167=this[_0x431651(0x58e)]['attachPictureSettings']();if(_0x387167){if(_0x431651(0x6d7)!==_0x431651(0x6d7)){_0x159401[_0x431651(0x2a6)][_0x431651(0x66c)][_0x431651(0x24a)](this,_0x3bd862);if(this['canStartLocalEvents']()&&_0x2966c9[_0x431651(0x23b)](0x0)&&this[_0x431651(0x5c6)]()==='front'){const _0x2866b7=this['direction'](),_0xd23b4b=_0x409fa8['roundXWithDirection'](this['x'],_0x2866b7),_0x5dd2d7=_0x3b7489[_0x431651(0x47d)](this['y'],_0x2866b7);this[_0x431651(0x475)](_0xd23b4b,_0x5dd2d7);}}else{if(this[_0x431651(0x412)]!==_0x387167['filename'])return!![];if(this[_0x431651(0x322)]!==_0x387167[_0x431651(0x4f0)])return!![];if(this['_lastAttachPictureScale']!==_0x387167[_0x431651(0x604)])return!![];}}return![];},Sprite_Character['prototype'][_0x55137b(0x3e9)]=function(_0x1882ed){const _0x495cec=_0x55137b,_0x1decf9=this[_0x495cec(0x363)];_0x1decf9[_0x495cec(0x5bb)]=_0x1882ed;const _0x12d241=this[_0x495cec(0x58e)][_0x495cec(0x603)](),_0x2398a6=_0x12d241[_0x495cec(0x4f0)],_0x66c031=_0x12d241['scale'];let _0x38b75a=0x1;if(_0x2398a6>0x0){let _0x397ccb=this[_0x495cec(0x507)]()||0x1,_0x2f43d5=this[_0x495cec(0x65f)]()||0x1;const _0x5517a6=Math[_0x495cec(0x69d)](0x1,_0x397ccb,_0x2f43d5);_0x38b75a=_0x2398a6/_0x5517a6;}_0x38b75a*=_0x66c031,_0x38b75a!==0x1&&(this[_0x495cec(0x363)][_0x495cec(0x5bb)][_0x495cec(0x5a3)]=!![]),_0x1decf9[_0x495cec(0x604)]['x']=_0x38b75a,_0x1decf9['scale']['y']=_0x38b75a,this[_0x495cec(0x3d1)]=!![],this[_0x495cec(0x203)]();},Sprite_Character[_0x55137b(0x65a)][_0x55137b(0x507)]=function(){const _0x1b3818=this['_attachPictureSprite'];if(!_0x1b3818)return 0x0;return _0x1b3818['bitmap']['width'];},Sprite_Character['prototype'][_0x55137b(0x65f)]=function(){const _0x44d3bb=_0x55137b,_0x38b266=this[_0x44d3bb(0x363)];if(!_0x38b266)return 0x0;return _0x38b266[_0x44d3bb(0x5bb)][_0x44d3bb(0x700)];},VisuMZ[_0x55137b(0x2a6)]['Sprite_Balloon_setup']=Sprite_Balloon['prototype'][_0x55137b(0x56c)],Sprite_Balloon['prototype']['setup']=function(_0xc8f1c8,_0x31e513){const _0x5162fc=_0x55137b;VisuMZ[_0x5162fc(0x2a6)][_0x5162fc(0x568)][_0x5162fc(0x24a)](this,_0xc8f1c8,_0x31e513),VisuMZ[_0x5162fc(0x2a6)][_0x5162fc(0x6ea)]['VS8'][_0x5162fc(0x200)]&&(_0x5162fc(0x210)==='ygUwD'?this[_0x5162fc(0x3f4)][_0x5162fc(0x58e)]['setBalloonPose'](_0x31e513,this[_0x5162fc(0x272)]):this[_0x5162fc(0x510)]['scale']=_0x5bfea9(_0xb246a9['$1'])*0.01);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x260)]=Sprite_Balloon[_0x55137b(0x65a)][_0x55137b(0x300)],Sprite_Balloon['prototype'][_0x55137b(0x300)]=function(){const _0x47b4f0=_0x55137b;VisuMZ[_0x47b4f0(0x2a6)]['Sprite_Balloon_updatePosition'][_0x47b4f0(0x24a)](this),this[_0x47b4f0(0x360)]();},Sprite_Balloon[_0x55137b(0x65a)][_0x55137b(0x360)]=function(){const _0x2fa4c0=_0x55137b;this[_0x2fa4c0(0x3f4)]['_character'][_0x2fa4c0(0x28f)]()&&(this['x']+=VisuMZ[_0x2fa4c0(0x2a6)][_0x2fa4c0(0x6ea)][_0x2fa4c0(0x4a3)][_0x2fa4c0(0x6ce)],this['y']+=VisuMZ[_0x2fa4c0(0x2a6)][_0x2fa4c0(0x6ea)][_0x2fa4c0(0x4a3)][_0x2fa4c0(0x45c)]);},Sprite_Timer[_0x55137b(0x65a)]['createBitmap']=function(){const _0x4bd77c=_0x55137b;this[_0x4bd77c(0x5bb)]=new Bitmap(Math[_0x4bd77c(0x30b)](Graphics[_0x4bd77c(0x202)]/0x2),0x30),this[_0x4bd77c(0x5bb)]['fontFace']=this[_0x4bd77c(0x534)](),this[_0x4bd77c(0x5bb)][_0x4bd77c(0x236)]=this[_0x4bd77c(0x236)](),this[_0x4bd77c(0x5bb)][_0x4bd77c(0x311)]=ColorManager[_0x4bd77c(0x311)]();},Sprite_Timer['prototype'][_0x55137b(0x505)]=function(){const _0x108d4e=_0x55137b,_0x1d1282=Math[_0x108d4e(0x34e)](this[_0x108d4e(0x422)]/0x3c/0x3c),_0x34c1a2=Math['floor'](this[_0x108d4e(0x422)]/0x3c)%0x3c,_0x2b35ea=this['_seconds']%0x3c;let _0x1b2498=_0x34c1a2[_0x108d4e(0x2fb)](0x2)+':'+_0x2b35ea[_0x108d4e(0x2fb)](0x2);if(_0x1d1282>0x0)_0x1b2498='%1:%2'[_0x108d4e(0x69f)](_0x1d1282,_0x1b2498);return _0x1b2498;};function Sprite_EventLabel(){const _0x310edb=_0x55137b;this[_0x310edb(0x483)](...arguments);}function _0x3c92(){const _0x13134a=['processMoveSynchMirrorVert','isCollidedWithPlayerCharacters','setCommonEvent','SPIN\x20ANTICLOCKWISE','deltaX','Game_Interpreter_updateWaitMode','oaNNS','loadPicture','forceMoveRoute','despawnEverything','_vehicleType','Game_Message_setItemChoice','createLabelWindowForTarget','EventId','resume','Operation','bJhrL','_periodicRefreshTimer','Game_Map_refresh','BoatSpeed','characterIndexVS8','IconIndex','setEventIconData','hasCPCs','_forceShowFollower','moveTypeRandom','characterPatternY','mlrcy','%1%2','3468iiQcUH','qPiuq','deleteSavedEventLocationKey','deleteEventLocation','_pose','BqoXR','BalloonOffsetX','pos','XtOUa','charAt','BufferX','isCollidedWithEvents','processMoveSynch','setEventLabelsVisible','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','AWmFj','SelfDataResetAll','Game_Vehicle_initMoveSpeed','_regionRules','advancedFunc','processMoveRouteTeleportToCharacter','_frames','isOnRope','updateMoveSynch','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','OpacitySpeed','Game_Character_processMoveCommand','lvpLu','createAttachPictureSprite','fittingHeight','checkAdvancedSwitchVariablePresent','fvqQV','attachPictureBlendMode','setupChild','Settings','Region','TargetSwitchId','processMoveRouteSelfVariable','delay','Stop','Button','isInVehicle','IconBufferX','_CPCs','tileHeight','getPreservedMorphEventData','isMoving','Game_Map_events','setFrames','kIdFT','FollowerReset','morphIntoTemplate','AirshipSpeed','yFJLq','list','fOtPr','height','conditions','shadowFilename','TerrainTag','isPassableByAnyDirection','Hidden','VisuMZ_0_CoreEngine','Scene_Boot_onDatabaseLoaded','Disable','KbUMh','_direction','blendMode','rGIvu','$callEventMap','kQTjQ','horizontal\x20mirror','csuNY','square','width','ADDITIVE','padding','MoveAllSynchTargets','TemplateName','drawText','deleteIconsOnEventsData','setupEvents','_DisablePlayerControl','rzKpz','getPosingCharacterPattern','regionId','add','USER-DEFINED\x205','USER-DEFINED\x201','PageId','Game_CharacterBase_moveStraight','Game_Timer_stop','945889WiZcad','EventAllow','pluginCommandCallEvent','_proxyWindow','_spawnedEvents','WTTWJ','_randomHomeX','isShip','Window_EventItem_onCancel','Window_EventItem_onOk','BlendMode','liITv','length','row','moveSynchTarget','createShadow','LIGHT-BULB','gAFUr','Game_CharacterBase_setDirection','PetYp','_poseDuration','checkExistingEntitiesAt','_diagonalSupport','initMembers','initEventsMoveCoreSettings','QXaaF','changeSpeed','checkEventsMoveCoreStringTags','PreloadedMaps','PlayerForbid','jumpAll','AutoBalloon','DefaultShadow','boxWidth','updateAttachPictureBitmap','Ship','htBSf','pattern','mirror\x20vertical','setupEventsMoveCoreEffects','variables','updateScaleBase','FRUSTRATION','Game_Event_update','MobileEnabled','switchId','JHuhQ','ygUwD','EnableTurnInPlace','VqkOm','processMoveRouteJumpToCharacter','Game_Event_clearPageSettings','_chaseOff','QUESTION','gJKwY','SuccessSwitchId','setPlayerControlDisable','_forceHideFollower','setupCopyEvent','EventForbid','Direction','...','_clickTrigger','isSelfSwitch','Game_SelfSwitches_setValue','EventTimerExpireEvent','processMoveSynchReverseMimic','isLabelVisible','Game_Map_update','cHZEQ','MULTIPLY','requestBalloon','HbjMO','return\x20%1','isMapVariable','QRdAb','lAWxt','SPIN\x20ACW','EventLocationDelete','none','Game_CharacterBase_isTransparent','KnRyB','windowPadding','Game_Temp_setDestination','random','fontSize','NJPxz','lrums','updateTilt','aJDkW','includes','ITEM','attachPictureScale','%1Dock','isValid','isSpawnedEvent','Game_Event_event','createLowerLayer','deltaXFrom','setPose','setBackgroundType','Window_ScrollText_startMessage','SPIN\x20CCW','Walk','moveRouteIndex','call','Game_Event_moveTypeRandom','IsGoY','updateWaitMode','Game_Vehicle_isMapPassable','MapSwitches','isRunning','iconIndex','_comments','moveDiagonally','Game_CharacterBase_screenY','HMwXJ','ttcvg','setControlledFollowerID','iClxi','isMapPassable','labelWindowRange','canPass','status','_eventIcon','SUlfr','replace','Sprite_Balloon_updatePosition','IJQqc','unlockEvent','_filename','_spawnPreserved','Seconds','setNumberInput','_moveRouteIndex','VisibleRange','prepareSpawnedEventAtXY','ICsjI','follower','vehicle','vcBdC','CPCsMet','setChaseOff','Game_Event_locate','lOzqd','_duration','UqPrP','move','regionList','map','Hawln','filename','some','screenY','checkNeedForPeriodicRefresh','remove','EventID','clearSpriteOffsets','SdZrY','processMoveRouteStepTo','processMoveRoutePatternLock','WKhNZ','SpawnEventAtRegion','SelfSwitchABCD','oosXP','isEventClickTriggered','ARRAYNUM','IconSize','Game_Troop_meetsConditions','UPPER\x20RIGHT','roundXWithDirection','WvsIh','getEventIconData','refresh','isSpriteVS8dir','ShowShadows','startsWith','KNEEL','findDirectionTo','updatePose','isWorking','vhrPl','LineHeight','activationProximityType','shadowY','Game_CharacterBase_realMoveSpeed','Letter','processMoveRouteJumpTo','SpawnEventDespawnAtXY','Region%1','timer','PreloadMaps','processOk','_trigger','isAutoBufferIcon','_eventOverloadThreshold','processMoveSynchDirection','EventsMoveCore','useCarryPoseForIcons','FRMcS','getMapSpawnedEventData','makeDeepCopy','_scaleX','drawing','isBusy','itemPadding','jUBRV','PosY','RIGHT','CarryPose','Game_Event_initialize','_followerControlID','UsUzS','_eventScreenY','Rope','LIGHTBULB','despawnTerrainTags','create','dItgo','_selfEvent','despawnAtXY','Passability','EVAL','KDFaF','meetsSwitchCondition','mainFontSize','MeEgz','SelfVariableID','Game_CharacterBase_hasStepAnime','mirror\x20vert','Sprite_Character_update','_realX','NRQZw','custom','WalkAllow','requestRefresh','Game_Switches_setValue','drawTextEx','checkEventTriggerEventsMoveCore','IconBlendMode','lkDNB','Enable','Game_Follower_chaseCharacter','SLEEP','createShadows','setDestination','Game_Player_checkEventTriggerHere','pages','hideShadows','template','loadDataFile','isAdvancedVariable','PostMorphJS','_hidden','onOk','updateScale','getLastPluginCommandInterpreter','Speed','contents','ShipSpeed','isPreventSelfMovement','clear','loadSystem','BjyhY','updateSaveEventLocation','Game_SelfSwitches_value','Game_CharacterBase_isDashing','Window_NumberInput_processOk','RegionOk','isBoat','Sprite_Character_characterPatternY','despawnRegions','Game_Map_setup','SPIN\x20CW','ship','getPose','updateEventLabelText','Game_Interpreter_PluginCommand','Frames','onExpire','registerSelfTarget','UhElT','padZero','Window_Message_startMessage','checkEventTriggerAuto','Game_Map_event','_activationProximityAutoTriggerBypass','updatePosition','_encounterEffectDuration','processMoveRouteHugWall','getDirectionFromPoint','switch2Id','isShadowShrink','HURT','EventAutoMovement','gainFrames','processMoveSynchCustom','setupRegionRestrictions','round','_labelWindow','Game_Followers_isVisible','Game_Player_executeMove','AXRBm','_spriteset','outlineColor','_selfTargetNumberInput','clamp','_addedHitbox','USPbi','_scene','iconHeight','lock','clearSelfTarget','refreshBushDepth','isAdvancedSwitch','_working','FUNC','FALSE','isDestinationValid','_shadowOpacity','LIGHT\x20BULB','_lastAttachPictureMaxSize','setupFollowerVisibilityOverrides','MUSIC-NOTE','Event','HpZRk','isMobileDevice','loadCPC','AutoMoveEvents','COLLAPSE','isNearTheScreen','EventTimerFramesSet','XLLPQ','hasStepAnime','DEFAULT_SHIFT_Y','hasEventIcon','Map%1-Event%2','Template','CallEvent','setSelfValue','despawnEventId','turnLeft90','StrictCollision','setFrame','_saveEventLocation','checkValidEventerMap','LFxsj','attachPictureOffsetY','iscBX','_spawnData','LMsXb','saveEventLocation','_shadowGraphic','ejvyD','isEventOverloaded','Movement','Step1MapId','autoEventIconBuffer','name','initMembersEventsMoveCore','deletePreservedMorphEventDataKey','stop','firstSpawnedEvent','isBigCharacter','setStopFollowerChasing','floor','KaRaL','_MapSpawnedEventData','clearAttachPictureSettings','isPassable','waotj','referEvent','lastMovedDirection','MuNye','_cpc','NORMAL','MapID','%1Forbid','processMoveRouteMoveToCharacter','isJumping','moveByInput','SelfSwitches','HMPH','updateVS8BalloonOffsets','pageId','KsQkl','_attachPictureSprite','oIOLO','mimic','startMapCommonEventOnTouch','_moveOnlyRegions','refreshIfNeeded','zSBxJ','CPC','RXwYe','SILENCE','LOWER\x20RIGHT','meetActivationProximityConditions','deltaYFrom','Game_System_initialize','You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a','IconSet','trigger','DashModifier','description','updateOpacity','QvrOF','_mapId','_dragonbones','Opznd','MapVariables','determineEventOverload','setAllowEventAutoMovement','isSaveEventLocations','isRegionAllowPass','_opacity','_activationProximity','Game_CharacterBase_updatePattern','forceDashing','CommonEventID','OFF','executeCommonEvent','KTRlx','metCPC','attachPictureFilename','_interpreter','MorphEventTo','startEncounterEffect','_speed','Sprite_Character_setTileBitmap','Game_Follower_initialize','Game_Event_start','pIyyM','PathfindMobileEnabled','Lpjkq','QldEG','setupEventsMoveCoreNotetags','hasDragonbones','EventIconChange','isSelfVariable','qPqvI','BULB','getSelfTarget','sBWfi','updateEventCustomZ','_moveRoute','lastSpawnedEvent','resizeWindow','setMoveSpeed','clearStepPattern','isPlayerControlDisabled','addLoadListener','LMjtz','hasClickTrigger','down','terrainTag','onLoadSuccess','FavorHorz','_commonEvents','absDistance','resetFontSettings','QKhQB','drawIcon','variableId','1451810GrUWJp','AYfnh','huBeM','PreSpawnJS','mNDmd','_stopCount','SCREEN','isEventTest','Game_Player_isDashing','player','ERROR:\x20Map\x20%1\x20has\x20not\x20been\x20preloaded\x20for\x20remove\x20usage.','PlTFG','_forceDashing','variableValid','gqkGB','Hours','nacvW','requestAnimation','default','roundX','_lastPluginCommandInterpreter','clearPageSettings','filter','_lastAttachPictureScale','DOWN','Game_Character_setMoveRoute','standing','mirror\x20horizontal','UNTITLED','FollowerSetTargetChase','getInputDirection','RCuqo','visible','nbIzF','isAllowEventAutoMovement','tmisX','cwX','ALLOW_LADDER_DASH','isAllowCharacterTilt','turnRight90','VICTORY','%1,','Forbid','mapValue','uodxH','addChild','NapMR','left','type','DashingEnable','_pageIndex','Player','registerCommand','HVPvz','jeubH','setupEventsMoveCoreCommentTags','onLoadAttachPicture','hasMoveOnlyRegions','LEFT','Map\x20%1\x20Variable\x20%2','ROuuR','updateStop','checkEventTriggerHere','CustomPageConditions','anchor','VisuMZ_2_DragonbonesUnion','UPPER\x20LEFT','_target','processMoveRouteFadeIn','start','isVisible','KrEPa','QaOVV','_actuallyMoving','opacity','Window_NumberInput_start','executeMove','isDashingEnabled','VariableGetSelfVariableID','Spriteset_Map_createShadow','PosX','Game_Player_increaseSteps','onCancel','xeRzV','distance','PlayerIconDelete','clearCarrying','ZRUDM','contentsOpacity','EventTimerExpireClear','kMqAQ','dashSpeedModifier','dHIOr','Game_Timer_initialize','PlayerIconChange','AJDyh','meetsCPC','_lastAttachPictureFilename','taaZH','_lastMovedDirection','Game_Event_meetsConditions','_PreservedEventMorphData','PostCopyJS','apply','attachPictureOffsetX','hbUnH','Setting','_spriteOffsetY','offsetY','executeMoveDir8','Game_CharacterBase_update','screenX','isTransparent','_seconds','Name','2769498gYMSiU','dfdtB','MbeiS','setPlayerDiagonalSetting','isDiagonalDirection','realMoveSpeed','pwhfF','characterIndex','Ijdpj','VisuMZ_Setup_Preload_Map','processMoveRouteJumpForward','Game_CharacterBase_moveDiagonally','getPosingCharacterIndex','_eventCopyData','checkEventTriggerThere','PostSpawnJS','firstSpawnedEventID','SpawnEventAtTerrainTag','onChange','_cacheVisibility','setLastPluginCommandInterpreter','resetSelfSwitchesForEvent','LOWER\x20LEFT','General','switch1Id','isOnLadder','_visiblePlayerX','_selfTargetItemChoice','morphInto','savePreservedMorphEventDataKey','XrVZO','rotation','_eventPageIndex','_eventSpawnData','Chase','tSFAc','updateMove','EventLabelRefresh','isEmptyCharacter','resetExitSelfSwitches','update','ITgqr','turnAwayFromCharacter','Self\x20Switch\x20%1','Game_Map_setupEvents','radius','away','executeCommandCommonEvent','RZDOJ','Map%1.json','isAirshipPassable','AutoBuffer','gAdAE','checkRegionEventTrigger','getDiagonalDestination','keys','BalloonOffsetY','originalText','Game_Event_meetsConditionsCPC','isLongPressed','ehyqy','uykQz','TRUE','Game_Variables_value','setValue','uBJXd','CqxLF','switches','DtflB','createSaveEventLocationData','MCoNX','EUJxO','isDashDisabled','_SavedEventLocations','Game_Troop_meetsConditionsCPC','hasAdvancedSwitchVariable','_eventErased','JSON','isMovementSucceeded','eventsXy','processSaveEventLocation','startMapCommonEventOnOK','offsetX','_forceCarrying','_requestSaveEventLocation','vert\x20mirror','FhPhJ','Game_Message_setNumberInput','region','roundYWithDirection','OfJDs','_callEventData','switch1Valid','setEventIconDataKey','_shadowSprite','initialize','getEventIconIndex','NUM','isSupportDiagonalMovement','character','updateRoutineMove','All','_customZ','oEMEL','string','Scene_Map_createDisplayObjects','daktJ','OFuXe','isTriggerIn','processDrawIcon','_followerChaseOff','moveAwayFromCharacter','JtJvN','EventTemplates','setupSpawnTest','bufferX','turn180','1182kzpmxx','determineCommonEventsWithCPC','_active','updateBitmapSmoothing','_eventLabelOffsetY','MOBILE_DIAGONAL_PATHFINDING','SPIN\x20CLOCKWISE','updatePatternEventsMoveCore','reverse','DBTKF','VS8','updateEventsMoveCoreTagChanges','SelfVariables','checkActivationProximity','dir8','MInRr','getPosingCharacterDirection','Game_Event_checkEventTriggerAuto','prepareSpawnedEventAtRegion','processMoveSynchMimic','_moveAllowPlayerCollision','EXCLAMATION','Game_Interpreter_character','processMoveRouteMoveTo','target','NsIIh','Airship','updateText','BOoBJ','createSpawnedEventWithData','Game_Character_forceMoveRoute','processMoveSynchAway','ccwY','Game_Interpreter_executeCommand','ZZZ','50GNgecE','Game_Event_updateParallel','IconBufferY','canPassDiagonally','backY','processMoveSynchRandom','processMoveRouteTeleportTo','_callEventMap','_moveSpeed','MoveRouteIndex','_PlayerDiagonalSetting','bufferY','SWEAT','isSaveEventLocation','LEFT\x20TO\x20RIGHT','Hfbhm','lastSpawnedEventID','SpriteBased','uhwGX','removeChild','adjustDir8MovementSpeed','resetSelfSwitchesForMap','BufferY','updateParallel','JEqlq','GetMoveSynchTarget','FontSize','Game_CharacterBase_pattern','Game_Event_setupPageSettings','WalkForbid','ARRAYJSON','WClsX','isActive','_eventMorphData','AdvancedSwitches','execute','BTNBf','posEventsMoveCore','nIunK','YGgTR','Label','Icon','_characterName','OperateValues','347049UPWfKa','Value','reverse\x20copy','setMapValue','EventTimerSpeed','splice','frameCount','uvrvZ','maxSize','FastForwardKey','abs','reverseDir','_data','Game_Timer_start','_event','destinationX','xXKNg','_scaleBaseY','MapId','VisibleEventLabels','Toggle','MOBILE_EVENT_LABELS','slice','erase','Spriteset_Map_createLowerLayer','note','activationProximityDistance','onDatabaseLoaded','ASPEv','timerText','eventId','getAttachPictureBitmapWidth','startCallEvent','ShiftY','RLuUB','bushDepth','IVxFi','findDiagonalDirectionTo','chaseCharacter','concat','_attachPicture','isMapSwitch','_realY','updateAttachPictureSprite','constructor','iconWidth','parallelCommonEvents','mapId','isEventsMoveCoreInvisible','Scene_Load_onLoadSuccess','processMoveRouteBalloon','blt','_erased','isEventRunning','Collision','48GPTHFa','_selfTarget','isNormalPriority','_saveEventLocations','_needsPeriodicRefresh','Game_CharacterBase_initMembers','EventLocationSave','shadowX','Game_Event_isCollidedWithPlayerCharacters','FollowerSetGlobalChase','isRegionForbidPass','createDisplayObjects','_EventsMoveCoreSettings','event','Allow','RIGHT\x20TO\x20LEFT','isLandOk','YBYig','MUSICNOTE','VehicleAllow','turnTowardCharacter','fontFace','updateShadowChanges','OffsetX','setCharacterBitmap','_EventIcons','initFollowerController','Game_Player_isMapPassable','SSUut','setupAttachPictureBitmap','ConvertParams','rkVdd','updateMoveSynchDirection','YdunE','xIcYR','HfYvB','vgLjx','flFTO','_randomHomeY','WsIMo','bdmvr','autosaveEventLocation','updateEventMirrorSprite','MorphEventRemove','_eventIconSprite','Game_CharacterBase_characterIndex','isAirship','createProxyWindow','_needsRefresh','_events','createCharacterShadow','EventLabelVisible','faKdK','removeMorph','llXnT','processMoveRouteMoveRepeat','toUpperCase','Game_CommonEvent_isActive','aKGUV','TTHIE','mgmub','FaceSynchAllSynchTargets','YIEXA','mQinB','advancedValue','clearPose','MUSIC\x20NOTE','SpawnEventAtXY','spriteId','checkSmartEventCollision','processMoveRouteFadeOut','removeTemporaryMapSpawnedEvents','moveBackToRandomHome','Sprite_Balloon_setup','selfValue','moveTowardPoint','Game_Variables_setValue','setup','gIlns','xQTFi','eDzGF','isStopFollowerChasing','toLowerCase','findProperPageIndex','moveAwayFromPoint','ROUTE_SCRIPT','WWnNY','Minutes','OffsetY','Step1EventId','Game_Event_updateSelfMovement','setWaitMode','VisuMZ_1_MessageCore','_starting','_forceHidePlayer','_waitMode','FollowerSetControl','needsUpdate','canStartLocalEvents','restoreSavedEventPosition','_lastMapId','isTurnInPlace','meetActivationRegionConditions','VehicleDock','_screenZoomScale','ANGER','UQFpk','processMoveRouteAnimation','GgUsd','createSpawnedEvent','sUend','_character','isDashing','page','UXtqU','Game_Vehicle_isLandOk','updatePattern','Game_Map_parallelCommonEvents','_pattern','PreMorphJS','_patternLocked','airship','setupSpawn','setupPageSettings','isMoveOnlyRegionPassable','WBHzG','correctFacingDirection','setMoveRoute','clearEventCache','GNZtp','increaseSteps','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','smooth','createContents','characterPatternYVS8','updateVisibility','deleteIconsOnEventsDataKey','isDashingAndMoving','_stepPattern','KWzGH','shiftY','code','_type','setDashingEnabled','_spriteOffsetX','Step2MapId','_cacheSystemVisible','setTileBitmap','_mirrorSprite','getSavedEventLocation','cqUQz','labelWindowText','scrolledY','startMessage','turnAwayFromPoint','moveStraight','bitmap','isPlaytest','SLKiB','locate','registerSelfEvent','processMoveSynchMirrorHorz','_alwaysUpdateMove','Game_Message_add','_randomMoveWeight','initEventsMoveCore','_visibleEventX','startMapCommonEventOnOKTarget','moveSynchType','exit','command108','Set\x20this\x20up\x20in\x20Events\x20&\x20Movement\x20Core\x27s\x0a','tileWidth','clearDestination','ZuJVh','wPiGo','WzwYf','visibleRange','setItemChoice','turnTowardPoint','trim','EnableDashTilt','moveTowardCharacter','text','processMoveRouteSetIndex','processMoveRouteMoveUntilStop','Preloaded\x20Maps\x20and\x20add\x20in\x20Map\x20%1','indexOf','events','sNBcR','849300MSprUW','right','398XtFvzV','isShadowVisible','_forceShowPlayer','NRQDM','reserveCommonEvent','Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a','MessageCore','Game_Timer_onExpire','pause','Game_Player_getInputDirection','DIAGONAL_PATHFINDING_EVENT_LIMIT','_text','meetsConditions','eventLabelsVisible','PlayerAllow','TiltVert','adjustMoveSynchOpacityDelta','LEeIr','isTargetEventValidForLabelWindow','mfXFr','EventLocationCreate','Game_Followers_jumpAll','Map\x20%1\x20Switch\x20%2','isPlayerForceShown','eventsXyNt','posNt','UJvNN','nLATJ','horz\x20mirror','updateEventsAndMovementCore','DWpCk','processMoveRouteStepToCharacter','isAnyEventStarting','Game_Enemy_meetsSwitchCondition','getPlayerDiagonalSetting','TurnInPlaceDelay','attachPictureSettings','scale','deleteSavedEventLocation','reverse\x20mimic','RegionOkTarget','process_VisuMZ_EventsMoveCore_LoadTemplateMaps','_eventScreenX','ARRAYSTRUCT','RpaQD','followers','clearDashing','List','Self\x20Variable\x20%1','_eventCache','oKyap','convertSelfVariableValuesInScriptCall','AdvancedVariables','match','ayHBf','zwcCo','PvOir','characterPatternYBasic','setupMorphEvent','KCQpV','_counter','setDiagonalDirection','EnableDir8','_visibleEventY','xxSSl','JXjyM','moveForward','_advancedSwitchVariable','StopAutoMoveMessages','hcCUS','kJRzO','VTfyh','_eventId','convertVariableValuesInScriptCall','_paused','_tilemap','_inputTime','FollowerID','parameters','needsAttachPictureUpdate','setDirection','initEventsMoveCoreEffects','return\x200','setupSpawnedEvents','tZaZu','Game_Map_unlockEvent','copy','wHHnA','Qzcmq','HMxRF','randomInt','of\x20Preloaded\x20Maps.\x0a\x0a','vertical\x20mirror','ANNOYED','uetmd','Game_CharacterBase_bushDepth','isBattleTest','command357','forceCarrying','min','wUPLm','_expireCommonEvent','isSpawnHitboxCollisionOk','DashOnLadder','PreCopyJS','Game_CharacterBase_canPass','OTmXB','CAjLC','ARRAYEVAL','_moveSynch','zZYTw','_eventOverload','processMoveCommand','SlowerSpeed','setupPlayerVisibilityOverrides','Step2EventId','getInputDir8','getControlledFollowerID','COBWEB','Step2Preserve','unlock','VariableId','dpdZe','prototype','eUewW','wjevR','Game_Event_findProperPageIndex','bind','getAttachPictureBitmapHeight','initMoveSpeed','areFollowersForceShown','Game_CharacterBase_direction','textSizeEx','getDirectionToPoint','setPattern','Sprite_Character_setCharacterBitmap','SpawnEventDespawnEverything','setOpacity','GgFfu','process_VisuMZ_EventsMoveCore_Switches_Variables','updateEventIconSprite','Game_Player_checkEventTriggerThere','Game_Switches_value','opacityDelta','_visiblePlayerY','zUMtO','Game_CharacterBase_opacity','lineHeight','_scaleY','SwitchGetSelfSwitchABCD','isTile','defaultFontSize','zoomScale','NrCzq','Sprite_Character_initMembers','attachPictureMaxSize','Preserve','processMoveRouteSelfSwitch','HEART','value','_commonEventId','createIconSprite','waBzz','hnwaD','RandomMoveWeight','mirror\x20horz','parse','ZTQaP','checkCollisionKeywords','isObjectCharacter','backX','PHvJk','Game_Map_isDashDisabled','executeCommand','setBalloonPose','log','setupDiagonalSupport','opacitySpeed','_characterSprites','_eventLabelOffsetX','oUAsH','findTargetSprite','vruJx','push','iconSize','activationRegionList','prepareSpawnedEventAtTerrainTag','direction','_scaleBaseX','isSceneMap','max','createLabelWindows','format','Game_CharacterBase_screenX','DashEnableToggle','Dock','STR','XaamN','isPosing','Kdlxd','_labelWindows','ytFTP','jump','Scene_Map_startEncounterEffect'];_0x3c92=function(){return _0x13134a;};return _0x3c92();}Sprite_EventLabel[_0x55137b(0x65a)]=Object[_0x55137b(0x2ba)](Sprite['prototype']),Sprite_EventLabel[_0x55137b(0x65a)][_0x55137b(0x514)]=Sprite_EventLabel,Sprite_EventLabel[_0x55137b(0x65a)][_0x55137b(0x483)]=function(_0xfabb56){const _0x228da9=_0x55137b;this[_0x228da9(0x4f6)]=_0xfabb56,Sprite['prototype'][_0x228da9(0x483)][_0x228da9(0x24a)](this),this[_0x228da9(0x1f8)](),this[_0x228da9(0x54e)]();},Sprite_EventLabel[_0x55137b(0x65a)][_0x55137b(0x1f8)]=function(){const _0xf2db32=_0x55137b;this[_0xf2db32(0x3f1)]['x']=0.5,this[_0xf2db32(0x3f1)]['y']=0x1;},Sprite_EventLabel[_0x55137b(0x65a)]['createProxyWindow']=function(){const _0x4e30b3=_0x55137b,_0x31ba9a=new Rectangle(0x0,0x0,0x1,0x1);this[_0x4e30b3(0x727)]=new Window_Base(_0x31ba9a),this['_proxyWindow'][_0x4e30b3(0x714)]=0x0,this[_0x4e30b3(0x3fb)]=this['isLabelVisible']()?0xff:0x0;},Sprite_EventLabel[_0x55137b(0x65a)]['update']=function(){const _0x567de=_0x55137b;Sprite[_0x567de(0x65a)][_0x567de(0x44c)]['call'](this),this[_0x567de(0x4b4)](),this[_0x567de(0x2e0)](),this['updatePosition'](),this[_0x567de(0x376)]();},Sprite_EventLabel['prototype'][_0x55137b(0x4b4)]=function(){const _0x5d6387=_0x55137b;this['_event']['labelWindowText']()!==this['_text']&&(this[_0x5d6387(0x5ea)]=this[_0x5d6387(0x4f6)][_0x5d6387(0x5b6)](),this['refresh']());},Sprite_EventLabel['prototype'][_0x55137b(0x28e)]=function(){const _0x42eed5=_0x55137b;if(!this['_proxyWindow'])return;this[_0x42eed5(0x3a0)](),this[_0x42eed5(0x717)]();},Sprite_EventLabel[_0x55137b(0x65a)][_0x55137b(0x3a0)]=function(){const _0x3970e5=_0x55137b,_0x3af3cc=this[_0x3970e5(0x727)][_0x3970e5(0x663)](this['_text']),_0x550bae=this[_0x3970e5(0x727)][_0x3970e5(0x2ae)](),_0x5987bb=_0x3af3cc['width']+_0x550bae*0x2,_0xc2ef79=_0x3af3cc[_0x3970e5(0x700)];this['_proxyWindow'][_0x3970e5(0x274)](0x0,0x0,_0x5987bb,_0xc2ef79),this[_0x3970e5(0x727)][_0x3970e5(0x5a4)](),this['bitmap']=this[_0x3970e5(0x727)]['contents'];},Sprite_EventLabel[_0x55137b(0x65a)][_0x55137b(0x717)]=function(){const _0x3e7f03=_0x55137b,_0x49f5cc=this[_0x3e7f03(0x727)][_0x3e7f03(0x2ae)]();this[_0x3e7f03(0x727)][_0x3e7f03(0x2ce)](this[_0x3e7f03(0x5ea)],_0x49f5cc,0x0);},Sprite_EventLabel[_0x55137b(0x65a)]['updateScale']=function(){const _0x42f7da=_0x55137b,_0x3bfddd=VisuMZ[_0x42f7da(0x2a6)][_0x42f7da(0x6ea)]['Label'][_0x42f7da(0x4d6)],_0x1ce9b2=$gameSystem[_0x42f7da(0x2c2)]()||0x1;this['scale']['x']=this[_0x42f7da(0x604)]['y']=_0x3bfddd/_0x1ce9b2;},Sprite_EventLabel[_0x55137b(0x65a)][_0x55137b(0x300)]=function(){const _0x13b128=_0x55137b;if(!SceneManager[_0x13b128(0x316)])return;if(!SceneManager[_0x13b128(0x316)][_0x13b128(0x310)])return;const _0x30e861=SceneManager[_0x13b128(0x316)][_0x13b128(0x310)][_0x13b128(0x694)](this[_0x13b128(0x4f6)]);if(!_0x30e861)return;this['x']=this[_0x13b128(0x4f6)][_0x13b128(0x420)](),this['x']+=this[_0x13b128(0x4f6)][_0x13b128(0x30c)][_0x13b128(0x476)],this['y']=this['_event'][_0x13b128(0x27a)]()-_0x30e861[_0x13b128(0x700)],this['y']+=$gameSystem[_0x13b128(0x233)]()*-0.5,this['y']+=this[_0x13b128(0x4f6)]['_labelWindow'][_0x13b128(0x41d)];},Sprite_EventLabel[_0x55137b(0x65a)][_0x55137b(0x376)]=function(){const _0x382435=_0x55137b;if(this[_0x382435(0x224)]())this[_0x382435(0x3fb)]+=this['opacitySpeed']();else{if(SceneManager[_0x382435(0x316)][_0x382435(0x301)]>0x0){if(_0x382435(0x575)!==_0x382435(0x261))this[_0x382435(0x3fb)]=0x0;else{this[_0x382435(0x4f6)]=_0x4ec640;const _0x395c79=new _0x13c573(0x0,0x0,_0x54109f[_0x382435(0x202)]/0x4,this[_0x382435(0x6e5)](0x1));this[_0x382435(0x1f8)](),_0x890ab9[_0x382435(0x65a)][_0x382435(0x483)][_0x382435(0x24a)](this,_0x395c79),this['contentsOpacity']=0x0,this[_0x382435(0x245)](0x2),this[_0x382435(0x5ea)]='';}}else this[_0x382435(0x3fb)]-=this['opacitySpeed']();}},Sprite_EventLabel[_0x55137b(0x65a)][_0x55137b(0x224)]=function(){const _0x11fbbd=_0x55137b;if(!$gameSystem[_0x11fbbd(0x5ec)]())return![];if(this[_0x11fbbd(0x4f6)]?.['_erased'])return![];if(this[_0x11fbbd(0x4f6)]&&this['_event'][_0x11fbbd(0x3e3)]<0x0)return![];if(SceneManager['_scene'][_0x11fbbd(0x301)]>0x0)return![];const _0x40ea95=$gamePlayer['x'],_0x11d6b3=$gamePlayer['y'],_0x52eff0=this[_0x11fbbd(0x4f6)]['x'],_0x195ac1=this[_0x11fbbd(0x4f6)]['y'];if(this[_0x11fbbd(0x43e)]===_0x40ea95&&this['_visiblePlayerY']===_0x11d6b3&&this[_0x11fbbd(0x5c5)]===_0x52eff0&&this['_visibleEventY']===_0x195ac1)return this[_0x11fbbd(0x437)];this['_visiblePlayerX']=$gamePlayer['x'],this[_0x11fbbd(0x66f)]=$gamePlayer['y'],this[_0x11fbbd(0x5c5)]=this['_event']['x'],this[_0x11fbbd(0x61e)]=this[_0x11fbbd(0x4f6)]['y'];if($gameMap['absDistance'](_0x40ea95,_0x11d6b3,_0x52eff0,_0x195ac1)>this['_event'][_0x11fbbd(0x25a)]())return this[_0x11fbbd(0x437)]=![],![];return this[_0x11fbbd(0x437)]=!![],!![];},Sprite_EventLabel['prototype'][_0x55137b(0x690)]=function(){const _0x533020=_0x55137b;return VisuMZ['EventsMoveCore']['Settings'][_0x533020(0x4e4)][_0x533020(0x6e1)];},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x500)]=Spriteset_Map['prototype'][_0x55137b(0x242)],Spriteset_Map['prototype'][_0x55137b(0x242)]=function(){const _0x1fd9fe=_0x55137b;VisuMZ[_0x1fd9fe(0x2a6)][_0x1fd9fe(0x500)][_0x1fd9fe(0x24a)](this),this[_0x1fd9fe(0x69e)]();},VisuMZ['EventsMoveCore'][_0x55137b(0x400)]=Spriteset_Map[_0x55137b(0x65a)][_0x55137b(0x733)],Spriteset_Map['prototype'][_0x55137b(0x733)]=function(){const _0x12740f=_0x55137b;VisuMZ[_0x12740f(0x2a6)][_0x12740f(0x400)]['call'](this),this[_0x12740f(0x2d5)]();},Spriteset_Map[_0x55137b(0x65a)][_0x55137b(0x2d5)]=function(){const _0x3d2cb7=_0x55137b;if(!VisuMZ[_0x3d2cb7(0x2a6)][_0x3d2cb7(0x6ea)]['Movement'][_0x3d2cb7(0x290)])return;for(const _0x2d87bd of this[_0x3d2cb7(0x691)]){this[_0x3d2cb7(0x551)](_0x2d87bd);}},Spriteset_Map[_0x55137b(0x65a)][_0x55137b(0x551)]=function(_0x6dadde){const _0x3f7374=_0x55137b;_0x6dadde['_shadowSprite']=new Sprite(),_0x6dadde['_shadowSprite']['_filename']=_0x6dadde[_0x3f7374(0x58e)][_0x3f7374(0x702)](),_0x6dadde['_shadowSprite'][_0x3f7374(0x5bb)]=ImageManager[_0x3f7374(0x2e7)](_0x6dadde[_0x3f7374(0x482)][_0x3f7374(0x263)]),_0x6dadde[_0x3f7374(0x482)][_0x3f7374(0x3f1)]['x']=0.5,_0x6dadde[_0x3f7374(0x482)][_0x3f7374(0x3f1)]['y']=0x1,_0x6dadde['_shadowSprite']['z']=0x0,this[_0x3f7374(0x62a)][_0x3f7374(0x3de)](_0x6dadde[_0x3f7374(0x482)]);},Spriteset_Map[_0x55137b(0x65a)][_0x55137b(0x2d9)]=function(){const _0x4ff878=_0x55137b;if(!VisuMZ[_0x4ff878(0x2a6)][_0x4ff878(0x6ea)][_0x4ff878(0x344)][_0x4ff878(0x290)])return;for(const _0x23c815 of this[_0x4ff878(0x691)]){this[_0x4ff878(0x62a)][_0x4ff878(0x4cf)](_0x23c815['_shadowSprite']);}},Spriteset_Map['prototype']['createLabelWindows']=function(){const _0x17a5fe=_0x55137b;this[_0x17a5fe(0x6a7)]=[];for(const _0x2c86fb of $gameMap[_0x17a5fe(0x5db)]()){this[_0x17a5fe(0x6b7)](_0x2c86fb);}},Spriteset_Map[_0x55137b(0x4fd)]=VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x6ea)][_0x55137b(0x4e4)][_0x55137b(0x20d)]??!![],Spriteset_Map['prototype'][_0x55137b(0x6b7)]=function(_0x441a64){const _0x134b79=_0x55137b;if(!this['isTargetEventValidForLabelWindow'](_0x441a64))return;if(Utils[_0x134b79(0x327)]()){if(!Spriteset_Map[_0x134b79(0x4fd)])return;}let _0x3c09b8;const _0x135c7a=VisuMZ[_0x134b79(0x2a6)][_0x134b79(0x6ea)][_0x134b79(0x4e4)][_0x134b79(0x4cd)]??!![];_0x3c09b8=_0x135c7a?new Sprite_EventLabel(_0x441a64):new Window_EventLabel(_0x441a64),_0x3c09b8['z']=0x8,_0x3c09b8[_0x134b79(0x563)]=Sprite[_0x134b79(0x61b)]++,this[_0x134b79(0x62a)]['addChild'](_0x3c09b8),this[_0x134b79(0x6a7)][_0x134b79(0x696)](_0x3c09b8);},Spriteset_Map[_0x55137b(0x65a)][_0x55137b(0x5f1)]=function(_0x8ed010){const _0x432af4=_0x55137b,_0x130b4e=_0x8ed010[_0x432af4(0x52c)]();if(_0x130b4e[_0x432af4(0x501)][_0x432af4(0x614)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x130b4e[_0x432af4(0x501)][_0x432af4(0x614)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];for(const _0x550b88 of _0x130b4e[_0x432af4(0x2d8)]){let _0x286423='';for(const _0xfcb75 of _0x550b88['list']){if([0x6c,0x198][_0x432af4(0x23b)](_0xfcb75[_0x432af4(0x5ac)])){if(_0x432af4(0x4ce)!=='uhwGX')return this[_0x432af4(0x6b5)]===_0x432af4(0x598)?this[_0x432af4(0x26c)]()['isAirshipPassable'](_0xfcb247,_0x4971e5,_0x3477ff):_0x5f1e4c[_0x432af4(0x2a6)][_0x432af4(0x648)]['call'](this,_0x453c7d,_0x584151,_0x2b1e99);else _0x286423+=_0xfcb75[_0x432af4(0x62d)][0x0];}}if(_0x286423['match'](/<LABEL:[ ](.*?)>/i))return!![];if(_0x286423[_0x432af4(0x614)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)){if(_0x432af4(0x55b)===_0x432af4(0x4e2)){if(_0x499836)_0x38f816[_0x432af4(0x4ad)]=![];this[_0x432af4(0x41e)](_0x390e92),this['_moveRouteIndex']-=0x1;}else return!![];}}return![];},Spriteset_Map[_0x55137b(0x65a)][_0x55137b(0x58c)]=function(_0x3e49df){const _0x4d7817=_0x55137b;this[_0x4d7817(0x691)]=this['_characterSprites']||[];const _0x532f64=new Sprite_Character(_0x3e49df);this[_0x4d7817(0x691)][_0x4d7817(0x696)](_0x532f64),this[_0x4d7817(0x62a)]['addChild'](_0x532f64),this[_0x4d7817(0x551)](_0x532f64),this['createLabelWindowForTarget'](_0x3e49df),_0x532f64[_0x4d7817(0x44c)]();},Spriteset_Map[_0x55137b(0x65a)]['refreshEventLabels']=function(){const _0x1e286f=_0x55137b;if(!this[_0x1e286f(0x6a7)])return;for(const _0x2ffb15 of this[_0x1e286f(0x6a7)]){_0x1e286f(0x36b)===_0x1e286f(0x6a8)?this[_0x1e286f(0x508)]():_0x2ffb15&&(_0x2ffb15[_0x1e286f(0x43e)]=undefined,_0x2ffb15[_0x1e286f(0x28e)]());}},VisuMZ['EventsMoveCore'][_0x55137b(0x47b)]=Game_Message[_0x55137b(0x65a)]['setNumberInput'],Game_Message[_0x55137b(0x65a)][_0x55137b(0x266)]=function(_0x5d3e32,_0x47e3de){const _0x3046aa=_0x55137b;this[_0x3046aa(0x312)]=$gameTemp['getSelfTarget'](),VisuMZ[_0x3046aa(0x2a6)][_0x3046aa(0x47b)][_0x3046aa(0x24a)](this,_0x5d3e32,_0x47e3de);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x3fc)]=Window_NumberInput[_0x55137b(0x65a)][_0x55137b(0x3f6)],Window_NumberInput['prototype'][_0x55137b(0x3f6)]=function(){const _0x28f05f=_0x55137b;$gameTemp['registerSelfTarget']($gameMessage[_0x28f05f(0x312)]),VisuMZ[_0x28f05f(0x2a6)][_0x28f05f(0x3fc)]['call'](this),$gameTemp[_0x28f05f(0x319)]();},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x2ec)]=Window_NumberInput[_0x55137b(0x65a)][_0x55137b(0x2a1)],Window_NumberInput[_0x55137b(0x65a)]['processOk']=function(){const _0x4694cd=_0x55137b;$gameTemp[_0x4694cd(0x2f9)]($gameMessage[_0x4694cd(0x312)]),VisuMZ[_0x4694cd(0x2a6)][_0x4694cd(0x2ec)]['call'](this),$gameTemp[_0x4694cd(0x319)](),$gameMessage[_0x4694cd(0x312)]=undefined;},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x6b6)]=Game_Message[_0x55137b(0x65a)][_0x55137b(0x5d1)],Game_Message[_0x55137b(0x65a)][_0x55137b(0x5d1)]=function(_0x375754,_0x250803){const _0xed35b=_0x55137b;this[_0xed35b(0x43f)]=$gameTemp[_0xed35b(0x39b)](),VisuMZ[_0xed35b(0x2a6)][_0xed35b(0x6b6)][_0xed35b(0x24a)](this,_0x375754,_0x250803);},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x72d)]=Window_EventItem['prototype'][_0x55137b(0x2df)],Window_EventItem[_0x55137b(0x65a)][_0x55137b(0x2df)]=function(){const _0x2b5c2f=_0x55137b;$gameTemp[_0x2b5c2f(0x2f9)]($gameMessage[_0x2b5c2f(0x43f)]),VisuMZ[_0x2b5c2f(0x2a6)][_0x2b5c2f(0x72d)][_0x2b5c2f(0x24a)](this),$gameTemp[_0x2b5c2f(0x319)](),$gameMessage[_0x2b5c2f(0x43f)]=undefined;},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x72c)]=Window_EventItem[_0x55137b(0x65a)][_0x55137b(0x403)],Window_EventItem[_0x55137b(0x65a)][_0x55137b(0x403)]=function(){const _0x1493cc=_0x55137b;$gameTemp['registerSelfTarget']($gameMessage[_0x1493cc(0x43f)]),VisuMZ['EventsMoveCore']['Window_EventItem_onCancel'][_0x1493cc(0x24a)](this),$gameTemp[_0x1493cc(0x319)](),$gameMessage[_0x1493cc(0x43f)]=undefined;},VisuMZ[_0x55137b(0x2a6)][_0x55137b(0x2fc)]=Window_Message[_0x55137b(0x65a)][_0x55137b(0x5b8)],Window_Message[_0x55137b(0x65a)][_0x55137b(0x5b8)]=function(){const _0x34a6fc=_0x55137b;$gameMessage[_0x34a6fc(0x5bf)](),VisuMZ[_0x34a6fc(0x2a6)][_0x34a6fc(0x2fc)][_0x34a6fc(0x24a)](this),$gameTemp[_0x34a6fc(0x319)]();},VisuMZ[_0x55137b(0x2a6)]['Window_ScrollText_startMessage']=Window_ScrollText['prototype'][_0x55137b(0x5b8)],Window_ScrollText[_0x55137b(0x65a)]['startMessage']=function(){const _0x575919=_0x55137b;$gameMessage['registerSelfEvent'](),VisuMZ[_0x575919(0x2a6)][_0x575919(0x246)][_0x575919(0x24a)](this),$gameTemp['clearSelfTarget']();};function Window_EventLabel(){const _0x4bcf56=_0x55137b;this[_0x4bcf56(0x483)](...arguments);}Window_EventLabel[_0x55137b(0x65a)]=Object['create'](Window_Base[_0x55137b(0x65a)]),Window_EventLabel['prototype'][_0x55137b(0x514)]=Window_EventLabel,Window_EventLabel[_0x55137b(0x65a)][_0x55137b(0x483)]=function(_0x3bf8fb){const _0x521077=_0x55137b;this[_0x521077(0x4f6)]=_0x3bf8fb;const _0x372ad8=new Rectangle(0x0,0x0,Graphics[_0x521077(0x202)]/0x4,this[_0x521077(0x6e5)](0x1));this[_0x521077(0x1f8)](),Window_Base[_0x521077(0x65a)][_0x521077(0x483)]['call'](this,_0x372ad8),this['contentsOpacity']=0x0,this['setBackgroundType'](0x2),this[_0x521077(0x5ea)]='';},Window_EventLabel[_0x55137b(0x65a)][_0x55137b(0x1f8)]=function(){const _0x2c383f=_0x55137b;this[_0x2c383f(0x470)]=![],this['_screenZoomScale']=$gameScreen['zoomScale'](),this[_0x2c383f(0x609)]=this[_0x2c383f(0x4f6)]['screenX'](),this['_eventScreenY']=this[_0x2c383f(0x4f6)][_0x2c383f(0x27a)](),this[_0x2c383f(0x692)]=this[_0x2c383f(0x4f6)][_0x2c383f(0x30c)][_0x2c383f(0x476)],this['_eventLabelOffsetY']=this[_0x2c383f(0x4f6)][_0x2c383f(0x30c)][_0x2c383f(0x41d)],this['_eventPageIndex']=this[_0x2c383f(0x4f6)]['_pageIndex'],this['_cacheVisibility']=this[_0x2c383f(0x224)](),this[_0x2c383f(0x5b1)]=$gameSystem[_0x2c383f(0x5ec)](),this[_0x2c383f(0x43e)]=$gamePlayer['x'],this[_0x2c383f(0x66f)]=$gamePlayer['y'],this[_0x2c383f(0x5c5)]=this[_0x2c383f(0x4f6)]['x'],this['_visibleEventY']=this[_0x2c383f(0x4f6)]['y'];},Window_EventLabel[_0x55137b(0x65a)]['update']=function(){const _0x47ff22=_0x55137b;Window_Base[_0x47ff22(0x65a)][_0x47ff22(0x44c)][_0x47ff22(0x24a)](this);if(!this[_0x47ff22(0x580)]())return;this[_0x47ff22(0x4b4)](),this[_0x47ff22(0x2e0)](),this[_0x47ff22(0x300)](),this[_0x47ff22(0x376)]();},Window_EventLabel[_0x55137b(0x65a)]['needsUpdate']=function(){const _0x2c8f41=_0x55137b;if(!this['_event'])return![];if(!this['_event']['_labelWindow'])return![];if(this['_eventPageIndex']!==this['_event'][_0x2c8f41(0x3e3)])return!![];if(this[_0x2c8f41(0x4f6)]['_erased']&&!this['_eventErased'])return!![];if(this[_0x2c8f41(0x4f6)]['_labelWindow'][_0x2c8f41(0x5d6)]==='')return![];if(this[_0x2c8f41(0x587)]!==$gameScreen[_0x2c8f41(0x677)]())return!![];if(this[_0x2c8f41(0x609)]!==this['_event'][_0x2c8f41(0x420)]())return!![];if(this[_0x2c8f41(0x2b6)]!==this[_0x2c8f41(0x4f6)][_0x2c8f41(0x27a)]())return!![];if(this[_0x2c8f41(0x692)]!==this[_0x2c8f41(0x4f6)][_0x2c8f41(0x30c)][_0x2c8f41(0x476)])return!![];if(this[_0x2c8f41(0x49d)]!==this[_0x2c8f41(0x4f6)][_0x2c8f41(0x30c)][_0x2c8f41(0x41d)])return!![];if(this[_0x2c8f41(0x43e)]!==$gamePlayer['x'])return!![];if(this['_visiblePlayerY']!==$gamePlayer['y'])return!![];if(this['_visibleEventX']!==this[_0x2c8f41(0x4f6)]['x'])return!![];if(this[_0x2c8f41(0x61e)]!==this[_0x2c8f41(0x4f6)]['y'])return!![];if(this[_0x2c8f41(0x5b1)]!==$gameSystem[_0x2c8f41(0x5ec)]())return!![];if(this[_0x2c8f41(0x437)]&&this[_0x2c8f41(0x409)]<0xff)return!![];if(!this[_0x2c8f41(0x437)]&&this[_0x2c8f41(0x409)]>0x0)return!![];if(SceneManager[_0x2c8f41(0x316)][_0x2c8f41(0x301)]>0x0)return!![];return![];},Window_EventLabel[_0x55137b(0x65a)][_0x55137b(0x4b4)]=function(){const _0x27c666=_0x55137b;this[_0x27c666(0x4f6)]['labelWindowText']()!==this[_0x27c666(0x5ea)]&&(_0x27c666(0x72f)!==_0x27c666(0x72f)?this[_0x27c666(0x475)](this['x'],this['y']):(this['_text']=this['_event']['labelWindowText'](),this['refresh']()));},Window_EventLabel['prototype'][_0x55137b(0x2e0)]=function(){const _0x1733ae=_0x55137b;this[_0x1733ae(0x604)]['x']=0x1/$gameScreen[_0x1733ae(0x677)](),this[_0x1733ae(0x604)]['y']=0x1/$gameScreen[_0x1733ae(0x677)](),this[_0x1733ae(0x587)]=$gameScreen[_0x1733ae(0x677)]();},Window_EventLabel['prototype']['updatePosition']=function(){const _0x1d8bed=_0x55137b;if(!SceneManager[_0x1d8bed(0x316)])return;if(!SceneManager['_scene']['_spriteset'])return;const _0x13fa61=SceneManager[_0x1d8bed(0x316)]['_spriteset'][_0x1d8bed(0x694)](this[_0x1d8bed(0x4f6)]);if(!_0x13fa61)return;this['x']=Math[_0x1d8bed(0x30b)](this[_0x1d8bed(0x4f6)][_0x1d8bed(0x420)]()-Math[_0x1d8bed(0x34e)](this[_0x1d8bed(0x712)]*this[_0x1d8bed(0x604)]['x']/0x2)),this['x']+=this[_0x1d8bed(0x4f6)]['_labelWindow'][_0x1d8bed(0x476)],this['y']=this['_event'][_0x1d8bed(0x27a)]()-_0x13fa61[_0x1d8bed(0x700)],this['y']+=Math[_0x1d8bed(0x30b)]($gameSystem[_0x1d8bed(0x233)]()*0.5),this['y']-=Math[_0x1d8bed(0x30b)](this[_0x1d8bed(0x700)]*this[_0x1d8bed(0x604)]['y']),this['y']+=this['_event'][_0x1d8bed(0x30c)]['offsetY'],this[_0x1d8bed(0x470)]=this[_0x1d8bed(0x4f6)][_0x1d8bed(0x51c)],this[_0x1d8bed(0x609)]=this['_event'][_0x1d8bed(0x420)](),this[_0x1d8bed(0x2b6)]=this[_0x1d8bed(0x4f6)][_0x1d8bed(0x27a)](),this[_0x1d8bed(0x692)]=this[_0x1d8bed(0x4f6)][_0x1d8bed(0x30c)]['offsetX'],this[_0x1d8bed(0x49d)]=this[_0x1d8bed(0x4f6)][_0x1d8bed(0x30c)]['offsetY'],this[_0x1d8bed(0x444)]=this[_0x1d8bed(0x4f6)][_0x1d8bed(0x3e3)],this[_0x1d8bed(0x470)]&&(this[_0x1d8bed(0x409)]=0x0);},Window_EventLabel[_0x55137b(0x65a)][_0x55137b(0x376)]=function(){const _0x31757a=_0x55137b;if(this[_0x31757a(0x224)]())this[_0x31757a(0x409)]+=this['opacitySpeed']();else{if(SceneManager[_0x31757a(0x316)][_0x31757a(0x301)]>0x0){if('QOsni'===_0x31757a(0x64d)){const _0xb10cd6=_0x13d3b7[_0x51e643[_0x31757a(0x639)](_0xdc97c0[_0x31757a(0x730)])];return _0x1f0665['x']=_0xb10cd6[0x0],_0x41cb68['y']=_0xb10cd6[0x1],this[_0x31757a(0x4b6)](_0x17d720),!![];}else this[_0x31757a(0x409)]=0x0;}else this[_0x31757a(0x409)]-=this[_0x31757a(0x690)]();}},Window_EventLabel['prototype'][_0x55137b(0x224)]=function(){const _0x3a4b7f=_0x55137b;if(!$gameSystem[_0x3a4b7f(0x5ec)]())return![];if(this[_0x3a4b7f(0x4f6)]?.[_0x3a4b7f(0x51c)])return![];if(SceneManager[_0x3a4b7f(0x316)][_0x3a4b7f(0x301)]>0x0)return![];const _0x3f3552=$gamePlayer['x'],_0x3718e6=$gamePlayer['y'],_0x191e04=this[_0x3a4b7f(0x4f6)]['x'],_0x382bd0=this[_0x3a4b7f(0x4f6)]['y'];if(this[_0x3a4b7f(0x43e)]===_0x3f3552&&this['_visiblePlayerY']===_0x3718e6&&this[_0x3a4b7f(0x5c5)]===_0x191e04&&this['_visibleEventY']===_0x382bd0)return this[_0x3a4b7f(0x437)];this[_0x3a4b7f(0x43e)]=$gamePlayer['x'],this['_visiblePlayerY']=$gamePlayer['y'],this['_visibleEventX']=this[_0x3a4b7f(0x4f6)]['x'],this[_0x3a4b7f(0x61e)]=this[_0x3a4b7f(0x4f6)]['y'];if($gameMap['absDistance'](_0x3f3552,_0x3718e6,_0x191e04,_0x382bd0)>this[_0x3a4b7f(0x4f6)][_0x3a4b7f(0x25a)]()){if(_0x3a4b7f(0x591)!==_0x3a4b7f(0x64a))return this[_0x3a4b7f(0x437)]=![],![];else{const _0x127cdf=_0x570d18['EventsMoveCore'][_0x3a4b7f(0x6ea)][_0x3a4b7f(0x344)];if(!_0x127cdf['EnableTurnInPlace'])return![];if(_0x353dcd[_0x3a4b7f(0x31f)]())return![];if(this[_0x3a4b7f(0x58f)]()||this[_0x3a4b7f(0x6f6)]()||this[_0x3a4b7f(0x43d)]())return![];return this['_inputTime']<_0x127cdf[_0x3a4b7f(0x602)];}}return this['_cacheVisibility']=!![],!![];},Window_EventLabel[_0x55137b(0x65a)][_0x55137b(0x690)]=function(){const _0x53fbf4=_0x55137b;return VisuMZ[_0x53fbf4(0x2a6)][_0x53fbf4(0x6ea)]['Label'][_0x53fbf4(0x6e1)];},Window_EventLabel[_0x55137b(0x65a)][_0x55137b(0x3a0)]=function(){const _0x19fdbd=_0x55137b,_0x4e124a=this['textSizeEx'](this['_text']);this['width']=_0x4e124a[_0x19fdbd(0x712)]+($gameSystem[_0x19fdbd(0x233)]()+this[_0x19fdbd(0x2ae)]())*0x2,this[_0x19fdbd(0x700)]=Math[_0x19fdbd(0x69d)](this[_0x19fdbd(0x672)](),_0x4e124a[_0x19fdbd(0x700)])+$gameSystem[_0x19fdbd(0x233)]()*0x2,this[_0x19fdbd(0x5a4)]();},Window_EventLabel['prototype'][_0x55137b(0x672)]=function(){const _0x50505c=_0x55137b;return VisuMZ['EventsMoveCore']['Settings']['Label'][_0x50505c(0x297)];},Window_EventLabel[_0x55137b(0x65a)][_0x55137b(0x3ad)]=function(){const _0x10cd1e=_0x55137b;Window_Base['prototype']['resetFontSettings'][_0x10cd1e(0x24a)](this),this[_0x10cd1e(0x2e3)][_0x10cd1e(0x236)]=this['defaultFontSize']();},Window_EventLabel['prototype'][_0x55137b(0x676)]=function(){const _0x56262c=_0x55137b;return VisuMZ[_0x56262c(0x2a6)]['Settings'][_0x56262c(0x4e4)][_0x56262c(0x4d6)];},Window_EventLabel[_0x55137b(0x65a)]['refresh']=function(){const _0x16ec45=_0x55137b;this['resizeWindow'](),this[_0x16ec45(0x2e3)]['clear']();const _0x36e17f=this[_0x16ec45(0x5ea)]['split'](/[\r\n]+/);let _0x17a219=0x0;for(const _0x1f3531 of _0x36e17f){const _0x2b9a64=this[_0x16ec45(0x663)](_0x1f3531),_0x37c813=Math[_0x16ec45(0x34e)]((this['innerWidth']-_0x2b9a64[_0x16ec45(0x712)])/0x2);this[_0x16ec45(0x2ce)](_0x1f3531,_0x37c813,_0x17a219),_0x17a219+=_0x2b9a64[_0x16ec45(0x700)];}},Window_EventLabel[_0x55137b(0x65a)][_0x55137b(0x491)]=function(_0x183398,_0x3f9f97){const _0x24f59f=_0x55137b;_0x3f9f97[_0x24f59f(0x2ac)]&&this['drawIcon'](_0x183398,_0x3f9f97['x']+0x2,_0x3f9f97['y']),_0x3f9f97['x']+=Math[_0x24f59f(0x642)](this[_0x24f59f(0x697)](),ImageManager[_0x24f59f(0x515)])+0x4;},Window_EventLabel['prototype'][_0x55137b(0x3af)]=function(_0xa07ea6,_0x1c6c76,_0x234547){const _0x2a6551=_0x55137b,_0x382e49=ImageManager['loadSystem'](_0x2a6551(0x372)),_0x30040c=ImageManager['iconWidth'],_0x5bd0e0=ImageManager[_0x2a6551(0x317)],_0x1db9cf=_0xa07ea6%0x10*_0x30040c,_0x34c4e4=Math[_0x2a6551(0x34e)](_0xa07ea6/0x10)*_0x5bd0e0,_0x4e93dd=Math['min'](this[_0x2a6551(0x697)]()),_0x273886=Math[_0x2a6551(0x642)](this[_0x2a6551(0x697)]());this['contents'][_0x2a6551(0x51b)](_0x382e49,_0x1db9cf,_0x34c4e4,_0x30040c,_0x5bd0e0,_0x1c6c76,_0x234547,_0x4e93dd,_0x273886);},Window_EventLabel['prototype'][_0x55137b(0x697)]=function(){const _0x96c058=_0x55137b;return VisuMZ[_0x96c058(0x2a6)][_0x96c058(0x6ea)][_0x96c058(0x4e4)][_0x96c058(0x288)];};