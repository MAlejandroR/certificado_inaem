import "./chunk-B4Q33VKO.js";

// node_modules/scratchblocks/build/scratchblocks.min.es.js
var t = { pen: "pen", video: "sensing", music: "sound" };
var e = { ...t, faceSensing: "faceSensing", tts: "tts", translate: "translate", microbit: "microbit", gdxfor: "gdxfor", wedo: "wedo", makeymakey: "makeymakey", ev3: "ev3", boost: "boost" };
var s = { wedo2: "wedo", text2speech: "tts" };
var i = ["motion", "looks", "sound", "variables", "list", "events", "control", "sensing", "operators", "custom", "custom-arg", "extension", "grey", "obsolete", ...Object.keys(e), ...Object.keys(s)];
var o = Object.assign(/* @__PURE__ */ Object.create(null), { gray: "grey", other: "grey" });
var r = ["hat", "cap", "stack", "boolean", "reporter", "ring", "cat"];
var c = ["ar", "ckb", "fa", "he"];
var n = /%([0-9]+)/;
var a = /(%[a-zA-Z0-9](?:\.[a-zA-Z0-9]+)?)/;
var l = RegExp(a.source, "g");
var h = /(@[a-zA-Z]+)/;
var p = RegExp(`${a.source}|${h.source}| +`, "g");
var d = /^#(?:[0-9a-fA-F]{3}){1,2}?$/;
function f(t8) {
  const e2 = n.exec(t8);
  return e2 ? +e2[1] : 0;
}
function u(t8) {
  const e2 = t8.split(p).filter((t9) => t9), s2 = e2.filter((t9) => a.test(t9));
  return { spec: t8, parts: e2, inputs: s2, hash: g(t8) };
}
function g(t8) {
  return V(t8.replace(l, " _ "));
}
function V(t8) {
  return t8.replace(/_/g, " _ ").replace(/ +/g, " ").replace(/[,%?:]/g, "").replace(/ß/g, "ss").replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(". . .", "...").replace(/^…$/, "...").trim().toLowerCase();
}
var m = {};
var b = [{ id: "MOTION_MOVESTEPS", selector: "forward:", spec: "move %1 steps", inputs: ["%n"], shape: "stack", category: "motion" }, { id: "MOTION_TURNRIGHT", selector: "turnRight:", spec: "turn @turnRight %1 degrees", inputs: ["%n"], shape: "stack", category: "motion" }, { id: "MOTION_TURNLEFT", selector: "turnLeft:", spec: "turn @turnLeft %1 degrees", inputs: ["%n"], shape: "stack", category: "motion" }, { id: "MOTION_POINTINDIRECTION", selector: "heading:", spec: "point in direction %1", inputs: ["%d.direction"], shape: "stack", category: "motion" }, { id: "MOTION_POINTTOWARDS", selector: "pointTowards:", spec: "point towards %1", inputs: ["%m.spriteOrMouse"], shape: "stack", category: "motion" }, { id: "MOTION_GOTOXY", selector: "gotoX:y:", spec: "go to x:%1 y:%2", inputs: ["%n", "%n"], shape: "stack", category: "motion" }, { id: "MOTION_GOTO", selector: "gotoSpriteOrMouse:", spec: "go to %1", inputs: ["%m.location"], shape: "stack", category: "motion" }, { id: "MOTION_GLIDESECSTOXY", selector: "glideSecs:toX:y:elapsed:from:", spec: "glide %1 secs to x:%2 y:%3", inputs: ["%n", "%n", "%n"], shape: "stack", category: "motion" }, { id: "MOTION_GLIDETO", spec: "glide %1 secs to %2", inputs: ["%n", "%m.location"], shape: "stack", category: "motion" }, { id: "MOTION_CHANGEXBY", selector: "changeXposBy:", spec: "change x by %1", inputs: ["%n"], shape: "stack", category: "motion" }, { id: "MOTION_SETX", selector: "xpos:", spec: "set x to %1", inputs: ["%n"], shape: "stack", category: "motion" }, { id: "MOTION_CHANGEYBY", selector: "changeYposBy:", spec: "change y by %1", inputs: ["%n"], shape: "stack", category: "motion" }, { id: "MOTION_SETY", selector: "ypos:", spec: "set y to %1", inputs: ["%n"], shape: "stack", category: "motion" }, { id: "MOTION_SETROTATIONSTYLE", selector: "setRotationStyle", spec: "set rotation style %1", inputs: ["%m.rotationStyle"], shape: "stack", category: "motion" }, { id: "LOOKS_SAYFORSECS", selector: "say:duration:elapsed:from:", spec: "say %1 for %2 seconds", inputs: ["%s", "%n"], shape: "stack", category: "looks" }, { id: "LOOKS_SAY", selector: "say:", spec: "say %1", inputs: ["%s"], shape: "stack", category: "looks" }, { id: "LOOKS_THINKFORSECS", selector: "think:duration:elapsed:from:", spec: "think %1 for %2 seconds", inputs: ["%s", "%n"], shape: "stack", category: "looks" }, { id: "LOOKS_THINK", selector: "think:", spec: "think %1", inputs: ["%s"], shape: "stack", category: "looks" }, { id: "LOOKS_SHOW", selector: "show", spec: "show", inputs: [], shape: "stack", category: "looks" }, { id: "LOOKS_HIDE", selector: "hide", spec: "hide", inputs: [], shape: "stack", category: "looks" }, { id: "LOOKS_SWITCHCOSTUMETO", selector: "lookLike:", spec: "switch costume to %1", inputs: ["%m.costume"], shape: "stack", category: "looks" }, { id: "LOOKS_NEXTCOSTUME", selector: "nextCostume", spec: "next costume", inputs: [], shape: "stack", category: "looks" }, { id: "LOOKS_NEXTBACKDROP_BLOCK", selector: "nextScene", spec: "next backdrop", inputs: [], shape: "stack", category: "looks" }, { id: "LOOKS_SWITCHBACKDROPTO", selector: "startScene", spec: "switch backdrop to %1", inputs: ["%m.backdrop"], shape: "stack", category: "looks" }, { id: "LOOKS_SWITCHBACKDROPTOANDWAIT", selector: "startSceneAndWait", spec: "switch backdrop to %1 and wait", inputs: ["%m.backdrop"], shape: "stack", category: "looks" }, { id: "LOOKS_CHANGEEFFECTBY", selector: "changeGraphicEffect:by:", spec: "change %1 effect by %2", inputs: ["%m.effect", "%n"], shape: "stack", category: "looks" }, { id: "LOOKS_SETEFFECTTO", selector: "setGraphicEffect:to:", spec: "set %1 effect to %2", inputs: ["%m.effect", "%n"], shape: "stack", category: "looks" }, { id: "LOOKS_CLEARGRAPHICEFFECTS", selector: "filterReset", spec: "clear graphic effects", inputs: [], shape: "stack", category: "looks" }, { id: "LOOKS_CHANGESIZEBY", selector: "changeSizeBy:", spec: "change size by %1", inputs: ["%n"], shape: "stack", category: "looks" }, { id: "LOOKS_SETSIZETO", selector: "setSizeTo:", spec: "set size to %1%", inputs: ["%n"], shape: "stack", category: "looks" }, { selector: "comeToFront", spec: "go to front", inputs: [], shape: "stack", category: "looks" }, { id: "LOOKS_GOTOFRONTBACK", spec: "go to %1 layer", inputs: ["%m"], shape: "stack", category: "looks" }, { selector: "goBackByLayers:", spec: "go back %1 layers", inputs: ["%n"], shape: "stack", category: "looks" }, { id: "LOOKS_GOFORWARDBACKWARDLAYERS", spec: "go %1 %2 layers", inputs: ["%m", "%n"], shape: "stack", category: "looks" }, { id: "SOUND_PLAY", selector: "playSound:", spec: "start sound %1", inputs: ["%m.sound"], shape: "stack", category: "sound" }, { id: "SOUND_CHANGEEFFECTBY", spec: "change %1 effect by %2", inputs: ["%m", "%n"], shape: "stack", category: "sound" }, { id: "SOUND_SETEFFECTO", spec: "set %1 effect to %2", inputs: ["%m", "%n"], shape: "stack", category: "sound" }, { id: "SOUND_CLEAREFFECTS", spec: "clear sound effects", inputs: [], shape: "stack", category: "sound" }, { id: "SOUND_PLAYUNTILDONE", selector: "doPlaySoundAndWait", spec: "play sound %1 until done", inputs: ["%m.sound"], shape: "stack", category: "sound" }, { id: "SOUND_STOPALLSOUNDS", selector: "stopAllSounds", spec: "stop all sounds", inputs: [], shape: "stack", category: "sound" }, { id: "music.playDrumForBeats", selector: "playDrum", spec: "play drum %1 for %2 beats", inputs: ["%d.drum", "%n"], shape: "stack", category: "music" }, { id: "music.restForBeats", selector: "rest:elapsed:from:", spec: "rest for %1 beats", inputs: ["%n"], shape: "stack", category: "music" }, { id: "music.playNoteForBeats", selector: "noteOn:duration:elapsed:from:", spec: "play note %1 for %2 beats", inputs: ["%d.note", "%n"], shape: "stack", category: "music" }, { id: "music.setInstrument", selector: "instrument:", spec: "set instrument to %1", inputs: ["%d.instrument"], shape: "stack", category: "music" }, { id: "SOUND_CHANGEVOLUMEBY", selector: "changeVolumeBy:", spec: "change volume by %1", inputs: ["%n"], shape: "stack", category: "sound" }, { id: "SOUND_SETVOLUMETO", selector: "setVolumeTo:", spec: "set volume to %1%", inputs: ["%n"], shape: "stack", category: "sound" }, { id: "music.changeTempo", selector: "changeTempoBy:", spec: "change tempo by %1", inputs: ["%n"], shape: "stack", category: "music" }, { selector: "setTempoTo:", spec: "set tempo to %1 bpm", inputs: ["%n"], shape: "stack", category: "sound" }, { id: "music.setTempo", selector: "setTempoTo:", spec: "set tempo to %1", inputs: ["%n"], shape: "stack", category: "music" }, { id: "pen.clear", selector: "clearPenTrails", spec: "erase all", inputs: [], shape: "stack", category: "pen" }, { id: "pen.stamp", selector: "stampCostume", spec: "stamp", inputs: [], shape: "stack", category: "pen" }, { id: "pen.penDown", selector: "putPenDown", spec: "pen down", inputs: [], shape: "stack", category: "pen" }, { id: "pen.penUp", selector: "putPenUp", spec: "pen up", inputs: [], shape: "stack", category: "pen" }, { id: "pen.setColor", selector: "penColor:", spec: "set pen color to %1", inputs: ["%c"], shape: "stack", category: "pen" }, { id: "pen.changeHue", selector: "changePenHueBy:", spec: "change pen color by %1", inputs: ["%n"], shape: "stack", category: "pen" }, { id: "pen.setColorParam", spec: "set pen %1 to %2", inputs: ["%m.color", "%c"], shape: "stack", category: "pen" }, { id: "pen.changeColorParam", spec: "change pen %1 by %2", inputs: ["%m.color", "%n"], shape: "stack", category: "pen" }, { id: "pen.setHue", selector: "setPenHueTo:", spec: "set pen color to %1", inputs: ["%n"], shape: "stack", category: "pen" }, { id: "pen.changeShade", selector: "changePenShadeBy:", spec: "change pen shade by %1", inputs: ["%n"], shape: "stack", category: "pen" }, { id: "pen.setShade", selector: "setPenShadeTo:", spec: "set pen shade to %1", inputs: ["%n"], shape: "stack", category: "pen" }, { id: "pen.changeSize", selector: "changePenSizeBy:", spec: "change pen size by %1", inputs: ["%n"], shape: "stack", category: "pen" }, { id: "pen.setSize", selector: "penSize:", spec: "set pen size to %1", inputs: ["%n"], shape: "stack", category: "pen" }, { id: "EVENT_WHENFLAGCLICKED", selector: "whenGreenFlag", spec: "when @greenFlag clicked", inputs: [], shape: "hat", category: "events" }, { id: "EVENT_WHENKEYPRESSED", selector: "whenKeyPressed", spec: "when %1 key pressed", inputs: ["%m.key"], shape: "hat", category: "events" }, { id: "EVENT_WHENTHISSPRITECLICKED", selector: "whenClicked", spec: "when this sprite clicked", inputs: [], shape: "hat", category: "events" }, { id: "EVENT_WHENSTAGECLICKED", spec: "when stage clicked", inputs: [], shape: "hat", category: "events" }, { id: "EVENT_WHENBACKDROPSWITCHESTO", selector: "whenSceneStarts", spec: "when backdrop switches to %1", inputs: ["%m.backdrop"], shape: "hat", category: "events" }, { id: "EVENT_WHENGREATERTHAN", selector: "whenSensorGreaterThan", spec: "when %1 > %2", inputs: ["%m.triggerSensor", "%n"], shape: "hat", category: "events" }, { id: "EVENT_WHENBROADCASTRECEIVED", selector: "whenIReceive", spec: "when I receive %1", inputs: ["%m.broadcast"], shape: "hat", category: "events" }, { id: "EVENT_BROADCAST", selector: "broadcast:", spec: "broadcast %1", inputs: ["%m.broadcast"], shape: "stack", category: "events" }, { id: "EVENT_BROADCASTANDWAIT", selector: "doBroadcastAndWait", spec: "broadcast %1 and wait", inputs: ["%m.broadcast"], shape: "stack", category: "events" }, { id: "CONTROL_WAIT", selector: "wait:elapsed:from:", spec: "wait %1 seconds", inputs: ["%n"], shape: "stack", category: "control" }, { id: "CONTROL_REPEAT", selector: "doRepeat", spec: "repeat %1", inputs: ["%n"], shape: "c-block", category: "control", hasLoopArrow: true }, { id: "CONTROL_FOREVER", selector: "doForever", spec: "forever", inputs: [], shape: "c-block cap", category: "control", hasLoopArrow: true }, { id: "CONTROL_IF", selector: "doIf", spec: "if %1 then", inputs: ["%b"], shape: "c-block", category: "control" }, { id: "CONTROL_WAITUNTIL", selector: "doWaitUntil", spec: "wait until %1", inputs: ["%b"], shape: "stack", category: "control" }, { id: "CONTROL_REPEATUNTIL", selector: "doUntil", spec: "repeat until %1", inputs: ["%b"], shape: "c-block", category: "control", hasLoopArrow: true }, { id: "CONTROL_STOP", selector: "stopScripts", spec: "stop %1", inputs: ["%m.stop"], shape: "cap", category: "control" }, { id: "CONTROL_STARTASCLONE", selector: "whenCloned", spec: "when I start as a clone", inputs: [], shape: "hat", category: "control" }, { id: "CONTROL_CREATECLONEOF", selector: "createCloneOf", spec: "create clone of %1", inputs: ["%m.spriteOnly"], shape: "stack", category: "control" }, { id: "CONTROL_DELETETHISCLONE", selector: "deleteClone", spec: "delete this clone", inputs: [], shape: "cap", category: "control" }, { id: "SENSING_ASKANDWAIT", selector: "doAsk", spec: "ask %1 and wait", inputs: ["%s"], shape: "stack", category: "sensing" }, { id: "videoSensing.videoToggle", selector: "setVideoState", spec: "turn video %1", inputs: ["%m.videoState"], shape: "stack", category: "video" }, { id: "videoSensing.setVideoTransparency", selector: "setVideoTransparency", spec: "set video transparency to %1%", inputs: ["%n"], shape: "stack", category: "video" }, { id: "videoSensing.whenMotionGreaterThan", spec: "when video motion > %1", inputs: ["%n"], shape: "hat", category: "video" }, { id: "SENSING_RESETTIMER", selector: "timerReset", spec: "reset timer", inputs: [], shape: "stack", category: "sensing" }, { id: "DATA_SETVARIABLETO", selector: "setVar:to:", spec: "set %1 to %2", inputs: ["%m.var", "%s"], shape: "stack", category: "variables" }, { id: "DATA_CHANGEVARIABLEBY", selector: "changeVar:by:", spec: "change %1 by %2", inputs: ["%m.var", "%n"], shape: "stack", category: "variables" }, { id: "DATA_SHOWVARIABLE", selector: "showVariable:", spec: "show variable %1", inputs: ["%m.var"], shape: "stack", category: "variables" }, { id: "DATA_HIDEVARIABLE", selector: "hideVariable:", spec: "hide variable %1", inputs: ["%m.var"], shape: "stack", category: "variables" }, { id: "DATA_ADDTOLIST", selector: "append:toList:", spec: "add %1 to %2", inputs: ["%s", "%m.list"], shape: "stack", category: "list" }, { id: "DATA_DELETEOFLIST", selector: "deleteLine:ofList:", spec: "delete %1 of %2", inputs: ["%d.listDeleteItem", "%m.list"], shape: "stack", category: "list" }, { id: "DATA_DELETEALLOFLIST", spec: "delete all of %1", inputs: ["%m.list"], shape: "stack", category: "list" }, { id: "MOTION_IFONEDGEBOUNCE", selector: "bounceOffEdge", spec: "if on edge, bounce", inputs: [], shape: "stack", category: "motion" }, { id: "DATA_INSERTATLIST", selector: "insert:at:ofList:", spec: "insert %1 at %2 of %3", inputs: ["%s", "%d.listItem", "%m.list"], shape: "stack", category: "list" }, { id: "DATA_REPLACEITEMOFLIST", selector: "setLine:ofList:to:", spec: "replace item %1 of %2 with %3", inputs: ["%d.listItem", "%m.list", "%s"], shape: "stack", category: "list" }, { id: "DATA_SHOWLIST", selector: "showList:", spec: "show list %1", inputs: ["%m.list"], shape: "stack", category: "list" }, { id: "DATA_HIDELIST", selector: "hideList:", spec: "hide list %1", inputs: ["%m.list"], shape: "stack", category: "list" }, { id: "MOTION_XPOSITION", selector: "xpos", spec: "x position", inputs: [], shape: "reporter", category: "motion" }, { id: "MOTION_YPOSITION", selector: "ypos", spec: "y position", inputs: [], shape: "reporter", category: "motion" }, { id: "MOTION_DIRECTION", selector: "heading", spec: "direction", inputs: [], shape: "reporter", category: "motion" }, { id: "SENSING_OF_COSTUMENUMBER", selector: "costumeIndex", spec: "costume #", inputs: [], shape: "reporter", category: "looks" }, { id: "LOOKS_COSTUMENUMBERNAME", selector: "LOOKS_COSTUMENUMBERNAME", spec: "costume %1", inputs: ["%m"], shape: "reporter", category: "looks" }, { id: "LOOKS_SIZE", selector: "scale", spec: "size", inputs: [], shape: "reporter", category: "looks" }, { id: "SENSING_OF_BACKDROPNAME", selector: "sceneName", spec: "backdrop name", inputs: [], shape: "reporter", category: "looks" }, { id: "LOOKS_BACKDROPNUMBERNAME", spec: "backdrop %1", inputs: ["%m"], shape: "reporter", category: "looks" }, { id: "SENSING_OF_BACKDROPNUMBER", selector: "backgroundIndex", spec: "backdrop #", inputs: [], shape: "reporter", category: "looks" }, { id: "SOUND_VOLUME", selector: "volume", spec: "volume", inputs: [], shape: "reporter", category: "sound" }, { id: "music.getTempo", selector: "tempo", spec: "tempo", inputs: [], shape: "reporter", category: "music" }, { id: "SENSING_TOUCHINGOBJECT", selector: "touching:", spec: "touching %1?", inputs: ["%m.touching"], shape: "boolean", category: "sensing" }, { id: "SENSING_TOUCHINGCOLOR", selector: "touchingColor:", spec: "touching color %1?", inputs: ["%c"], shape: "boolean", category: "sensing" }, { id: "SENSING_COLORISTOUCHINGCOLOR", selector: "color:sees:", spec: "color %1 is touching %2?", inputs: ["%c", "%c"], shape: "boolean", category: "sensing" }, { id: "SENSING_DISTANCETO", selector: "distanceTo:", spec: "distance to %1", inputs: ["%m.spriteOrMouse"], shape: "reporter", category: "sensing" }, { id: "SENSING_ANSWER", selector: "answer", spec: "answer", inputs: [], shape: "reporter", category: "sensing" }, { id: "SENSING_KEYPRESSED", selector: "keyPressed:", spec: "key %1 pressed?", inputs: ["%m.key"], shape: "boolean", category: "sensing" }, { id: "SENSING_MOUSEDOWN", selector: "mousePressed", spec: "mouse down?", inputs: [], shape: "boolean", category: "sensing" }, { id: "SENSING_MOUSEX", selector: "mouseX", spec: "mouse x", inputs: [], shape: "reporter", category: "sensing" }, { id: "SENSING_MOUSEY", selector: "mouseY", spec: "mouse y", inputs: [], shape: "reporter", category: "sensing" }, { id: "SENSING_SETDRAGMODE", spec: "set drag mode %1", inputs: ["%m"], shape: "stack", category: "sensing" }, { id: "SENSING_LOUDNESS", selector: "soundLevel", spec: "loudness", inputs: [], shape: "reporter", category: "sensing" }, { id: "videoSensing.videoOn", selector: "senseVideoMotion", spec: "video %1 on %2", inputs: ["%m.videoMotionType", "%m.stageOrThis"], shape: "reporter", category: "video" }, { id: "SENSING_TIMER", selector: "timer", spec: "timer", inputs: [], shape: "reporter", category: "sensing" }, { id: "SENSING_OF", selector: "getAttribute:of:", spec: "%1 of %2", inputs: ["%m.attribute", "%m.spriteOrStage"], shape: "reporter", category: "sensing" }, { id: "SENSING_CURRENT", selector: "timeAndDate", spec: "current %1", inputs: ["%m.timeAndDate"], shape: "reporter", category: "sensing" }, { id: "SENSING_DAYSSINCE2000", selector: "timestamp", spec: "days since 2000", inputs: [], shape: "reporter", category: "sensing" }, { id: "SENSING_ONLINE", spec: "online?", inputs: [], shape: "boolean", category: "sensing" }, { id: "SENSING_USERNAME", selector: "getUserName", spec: "username", inputs: [], shape: "reporter", category: "sensing" }, { id: "OPERATORS_ADD", selector: "+", spec: "%1 + %2", inputs: ["%n", "%n"], shape: "reporter", category: "operators" }, { id: "OPERATORS_SUBTRACT", selector: "-", spec: "%1 - %2", inputs: ["%n", "%n"], shape: "reporter", category: "operators" }, { id: "OPERATORS_MULTIPLY", selector: "*", spec: "%1 * %2", inputs: ["%n", "%n"], shape: "reporter", category: "operators" }, { id: "OPERATORS_DIVIDE", selector: "/", spec: "%1 / %2", inputs: ["%n", "%n"], shape: "reporter", category: "operators" }, { id: "OPERATORS_RANDOM", selector: "randomFrom:to:", spec: "pick random %1 to %2", inputs: ["%n", "%n"], shape: "reporter", category: "operators" }, { id: "OPERATORS_LT", selector: "<", spec: "%1 < %2", inputs: ["%s", "%s"], shape: "boolean", category: "operators" }, { id: "OPERATORS_EQUALS", selector: "=", spec: "%1 = %2", inputs: ["%s", "%s"], shape: "boolean", category: "operators" }, { id: "OPERATORS_GT", selector: ">", spec: "%1 > %2", inputs: ["%s", "%s"], shape: "boolean", category: "operators" }, { id: "OPERATORS_AND", selector: "&", spec: "%1 and %2", inputs: ["%b", "%b"], shape: "boolean", category: "operators" }, { id: "OPERATORS_OR", selector: "|", spec: "%1 or %2", inputs: ["%b", "%b"], shape: "boolean", category: "operators" }, { id: "OPERATORS_NOT", selector: "not", spec: "not %1", inputs: ["%b"], shape: "boolean", category: "operators" }, { id: "OPERATORS_JOIN", selector: "concatenate:with:", spec: "join %1 %2", inputs: ["%s", "%s"], shape: "reporter", category: "operators" }, { id: "OPERATORS_LETTEROF", selector: "letter:of:", spec: "letter %1 of %2", inputs: ["%n", "%s"], shape: "reporter", category: "operators" }, { id: "OPERATORS_LENGTH", selector: "stringLength:", spec: "length of %1", inputs: ["%s"], shape: "reporter", category: "operators" }, { id: "OPERATORS_MOD", selector: "%", spec: "%1 mod %2", inputs: ["%n", "%n"], shape: "reporter", category: "operators" }, { id: "OPERATORS_ROUND", selector: "rounded", spec: "round %1", inputs: ["%n"], shape: "reporter", category: "operators" }, { id: "OPERATORS_MATHOP", selector: "computeFunction:of:", spec: "%1 of %2", inputs: ["%m.mathOp", "%n"], shape: "reporter", category: "operators" }, { id: "OPERATORS_CONTAINS", spec: "%1 contains %2?", inputs: ["%s", "%s"], shape: "boolean", category: "operators" }, { id: "DATA_ITEMOFLIST", selector: "getLine:ofList:", spec: "item %1 of %2", inputs: ["%d.listItem", "%m.list"], shape: "reporter", category: "list" }, { id: "DATA_ITEMNUMOFLIST", spec: "item # of %1 in %2", inputs: ["%s", "%m.list"], shape: "reporter", category: "list" }, { id: "DATA_LENGTHOFLIST", selector: "lineCountOfList:", spec: "length of %1", inputs: ["%m.list"], shape: "reporter", category: "list" }, { id: "DATA_LISTCONTAINSITEM", selector: "list:contains:", spec: "%1 contains %2?", inputs: ["%m.list", "%s"], shape: "boolean", category: "list" }, { id: "CONTROL_ELSE", spec: "else", inputs: [], shape: "celse", category: "control" }, { id: "scratchblocks:end", spec: "end", inputs: [], shape: "cend", category: "control" }, { id: "scratchblocks:ellipsis", spec: ". . .", inputs: [], shape: "stack", category: "grey" }, { id: "scratchblocks:addInput", spec: "%1 @addInput", inputs: ["%n"], shape: "ring", category: "grey" }, { id: "SENSING_USERID", spec: "user id", inputs: [], shape: "reporter", category: "obsolete" }, { selector: "doIf", spec: "if %1", inputs: ["%b"], shape: "c-block", category: "obsolete" }, { selector: "doForeverIf", spec: "forever if %1", inputs: ["%b"], shape: "c-block cap", category: "obsolete" }, { selector: "doReturn", spec: "stop script", inputs: [], shape: "cap", category: "obsolete" }, { selector: "stopAll", spec: "stop all", inputs: [], shape: "cap", category: "obsolete" }, { selector: "lookLike:", spec: "switch to costume %1", inputs: ["%m.costume"], shape: "stack", category: "obsolete" }, { selector: "nextScene", spec: "next background", inputs: [], shape: "stack", category: "obsolete" }, { selector: "startScene", spec: "switch to background %1", inputs: ["%m.backdrop"], shape: "stack", category: "obsolete" }, { selector: "backgroundIndex", spec: "background #", inputs: [], shape: "reporter", category: "obsolete" }, { id: "SENSING_LOUD", selector: "isLoud", spec: "loud?", inputs: [], shape: "boolean", category: "obsolete" }, { id: "faceSensing.goToPart", spec: "go to %1", inputs: ["%m"], shape: "stack", category: "faceSensing" }, { id: "faceSensing.pointInFaceTiltDirection", spec: "point in direction of face tilt", inputs: [], shape: "stack", category: "faceSensing" }, { id: "faceSensing.setSizeToFaceSize", spec: "set size to face size", inputs: [], shape: "stack", category: "faceSensing" }, { id: "faceSensing.whenTilted", spec: "when face tilts %1", inputs: ["%m"], shape: "hat", category: "faceSensing" }, { id: "faceSensing.whenSpriteTouchesPart", spec: "when this sprite touches a %1", inputs: ["%m"], shape: "hat", category: "faceSensing" }, { id: "faceSensing.whenFaceDetected", spec: "when a face is detected", inputs: [], shape: "hat", category: "faceSensing" }, { id: "faceSensing.faceDetected", spec: "a face is detected?", inputs: [], shape: "boolean", category: "faceSensing" }, { id: "faceSensing.faceTilt", spec: "face tilt", inputs: [], shape: "reporter", category: "faceSensing" }, { id: "faceSensing.faceSize", spec: "face size", inputs: [], shape: "reporter", category: "faceSensing" }, { id: "text2speech.speakAndWaitBlock", spec: "speak %1", inputs: ["%s"], shape: "stack", category: "tts" }, { id: "text2speech.setVoiceBlock", spec: "set voice to %1", inputs: ["%m"], shape: "stack", category: "tts" }, { id: "text2speech.setLanguageBlock", spec: "set language to %1", inputs: ["%m"], shape: "stack", category: "tts" }, { id: "translate.translateBlock", spec: "translate %1 to %2", inputs: ["%s", "%m"], shape: "reporter", category: "translate" }, { id: "translate.viewerLanguage", spec: "language", shape: "reporter", category: "translate" }, { id: "makeymakey.whenKeyPressed", spec: "when %1 key pressed", inputs: ["%m"], shape: "hat", category: "makeymakey" }, { id: "makeymakey.whenKeysPressedInOrder", spec: "when %1 pressed in order", inputs: ["%m"], shape: "hat", category: "makeymakey" }, { id: "microbit.whenButtonPressed", spec: "when %1 button pressed", inputs: ["%m"], shape: "hat", category: "microbit" }, { id: "microbit.isButtonPressed", spec: "%1 button pressed?", inputs: ["%m"], shape: "boolean", category: "microbit" }, { id: "microbit.whenGesture", spec: "when %1", inputs: ["%m"], shape: "hat", category: "microbit" }, { id: "microbit.displaySymbol", spec: "display %1", inputs: ["%m"], shape: "stack", category: "microbit" }, { id: "microbit.displayText", spec: "display text %1", inputs: ["%s"], shape: "stack", category: "microbit" }, { id: "microbit.clearDisplay", spec: "clear display", shape: "stack", category: "microbit" }, { id: "microbit.whenTilted", spec: "when tilted %1", inputs: ["%m"], shape: "hat", category: "microbit" }, { id: "microbit.isTilted", spec: "tilted %1?", inputs: ["%m"], shape: "boolean", category: "microbit" }, { id: "microbit.tiltAngle", spec: "tilt angle %1", inputs: ["%m"], shape: "reporter", category: "microbit" }, { id: "microbit.whenPinConnected", spec: "when pin %1 connected", inputs: ["%m"], shape: "hat", category: "microbit" }, { id: "ev3.motorTurnClockwise", spec: "motor %1 turn this way for %2 seconds", inputs: ["%m", "%n"], shape: "stack", category: "ev3" }, { id: "ev3.motorTurnCounterClockwise", spec: "motor %1 turn that way for %2 seconds", inputs: ["%m", "%n"], shape: "stack", category: "ev3" }, { id: "ev3.motorSetPower", spec: "motor %1 set power %2%", inputs: ["%m", "%n"], shape: "stack", category: "ev3" }, { id: "ev3.getMotorPosition", spec: "motor %1 position", inputs: ["%m"], shape: "reporter", category: "ev3" }, { id: "ev3.whenButtonPressed", spec: "when button %1 pressed", inputs: ["%m"], shape: "hat", category: "ev3" }, { id: "ev3.whenDistanceLessThan", spec: "when distance < %1", inputs: ["%n"], shape: "hat", category: "ev3" }, { id: "ev3.whenBrightnessLessThan", spec: "when brightness < %1", inputs: ["%n"], shape: "hat", category: "ev3" }, { id: "ev3.buttonPressed", spec: "button %1 pressed?", inputs: ["%m"], shape: "boolean", category: "ev3" }, { id: "ev3.getDistance", spec: "distance", shape: "reporter", category: "ev3" }, { id: "ev3.getBrightness", spec: "brightness", shape: "reporter", category: "ev3" }, { id: "ev3.beepNote", spec: "beep note %1 for %2 secs", inputs: ["%d.note", "%n"], shape: "stack", category: "ev3" }, { id: "wedo2.motorOn", spec: "turn %1 on", inputs: ["%m.motor"], shape: "stack", category: "wedo" }, { id: "wedo2.motorOff", spec: "turn %1 off", inputs: ["%m.motor"], shape: "stack", category: "wedo" }, { id: "wedo2.startMotorPower", spec: "set %1 power to %2", inputs: ["%m.motor", "%n"], shape: "stack", category: "wedo" }, { id: "wedo2.setMotorDirection", spec: "set %1 direction to %2", inputs: ["%m.motor2", "%m.motorDirection"], shape: "stack", category: "wedo" }, { id: "wedo2.whenDistance", spec: "when distance %1 %2", inputs: ["%m.lessMore", "%n"], shape: "hat", category: "wedo" }, { id: "wedo2.getDistance", spec: "distance", inputs: [], shape: "reporter", category: "wedo" }, { id: "wedo2.motorOnFor", spec: "turn %1 on for %2 seconds", inputs: ["%m.motor", "%n"], shape: "stack", category: "wedo" }, { id: "wedo2.setLightHue", spec: "set light color to %1", inputs: ["%n"], shape: "stack", category: "wedo" }, { id: "wedo2.playNoteFor", spec: "play note %1 for %2 seconds", inputs: ["%n", "%n"], shape: "stack", category: "wedo" }, { id: "wedo2.whenTilted", spec: "when tilted %1", inputs: ["%m.xxx"], shape: "hat", category: "wedo" }, { id: "wedo2.isTilted", spec: "tilted %1?", inputs: ["%m"], shape: "boolean", category: "wedo" }, { id: "wedo2.getTiltAngle", spec: "tilt angle %1", inputs: ["%m.xxx"], shape: "reporter", category: "wedo" }, { id: "gdxfor.whenGesture", spec: "when %1", inputs: ["%m"], shape: "hat", category: "gdxfor" }, { id: "gdxfor.whenForcePushedOrPulled", spec: "when force sensor %1", inputs: ["%m"], shape: "hat", category: "gdxfor" }, { id: "gdxfor.getForce", spec: "force", shape: "reporter", category: "gdxfor" }, { id: "gdxfor.whenTilted", spec: "when tilted %1", inputs: ["%m"], shape: "hat", category: "gdxfor" }, { id: "gdxfor.isTilted", spec: "tilted %1?", inputs: ["%m"], shape: "boolean", category: "gdxfor" }, { id: "gdxfor.getTilt", spec: "tilt angle %1", inputs: ["%m"], shape: "reporter", category: "gdxfor" }, { id: "gdxfor.isFreeFalling", spec: "falling?", shape: "boolean", category: "gdxfor" }, { id: "gdxfor.getSpin", spec: "spin speed %1", inputs: ["%m"], shape: "reporter", category: "gdxfor" }, { id: "gdxfor.getAcceleration", spec: "acceleration %1", inputs: ["%m"], shape: "reporter", category: "gdxfor" }, { id: "boost.motorOnFor", spec: "turn motor %1 for %2 seconds", inputs: ["%m", "%n"], shape: "stack", category: "boost" }, { id: "boost.motorOnForRotation", spec: "turn motor %1 for %2 rotations", inputs: ["%m", "%n"], shape: "stack", category: "boost" }, { id: "boost.motorOn", spec: "turn motor %1 on", inputs: ["%m"], shape: "stack", category: "boost" }, { id: "boost.motorOff", spec: "turn motor %1 off", inputs: ["%m"], shape: "stack", category: "boost" }, { id: "boost.setMotorPower", spec: "set motor %1 speed to %2%", inputs: ["%m", "%n"], shape: "stack", category: "boost" }, { id: "boost.setMotorDirection", spec: "set motor %1 direction %2", inputs: ["%m", "%m"], shape: "stack", category: "boost" }, { id: "boost.getMotorPosition", spec: "motor %1 position", inputs: ["%m"], shape: "reporter", category: "boost" }, { id: "boost.whenColor", spec: "when %1 brick seen", inputs: ["%m"], shape: "hat", category: "boost" }, { id: "boost.seeingColor", spec: "seeing %1 brick?", inputs: ["%m"], shape: "boolean", category: "boost" }, { id: "boost.whenTilted", spec: "when tilted %1", inputs: ["%m"], shape: "hat", category: "boost" }, { id: "boost.getTiltAngle", spec: "tilt angle %1", inputs: ["%m"], shape: "reporter", category: "boost" }, { id: "boost.setLightHue", spec: "set light color to %1", inputs: ["%n"], shape: "stack", category: "boost" }].map((t8) => {
  if (!t8.id) {
    if (!t8.selector) throw Error("Missing ID: " + t8.spec);
    t8.id = "sb2:" + t8.selector;
  }
  if (!t8.spec) throw Error("Missing spec: " + t8.id);
  const e2 = { id: t8.id, spec: t8.spec, parts: t8.spec.split(p).filter((t9) => t9), selector: t8.selector || "sb3:" + t8.id, inputs: null == t8.inputs ? [] : t8.inputs, shape: t8.shape, category: t8.category, hasLoopArrow: !!t8.hasLoopArrow };
  if (m[e2.id]) throw Error("Duplicate ID: " + e2.id);
  return m[e2.id] = e2, e2;
});
var A = { "@greenFlag": "⚑", "@turnRight": "↻", "@turnLeft": "↺", "@addInput": "▸", "@delInput": "◂" };
var y = {};
function k(t8) {
  Object.keys(t8).forEach((e2) => function(t9, e3) {
    const s2 = e3.blocksByHash = {};
    Object.keys(e3.commands).forEach((t10) => {
      const i3 = e3.commands[t10], o2 = m[t10], r2 = g(i3);
      s2[r2] || (s2[r2] = []), s2[r2].push(o2);
      const c2 = h.exec(o2.spec);
      if (c2) {
        const t11 = c2[0], e4 = r2.replace(g(t11), A[t11]);
        s2[e4] || (s2[e4] = []), s2[e4].push(o2);
      }
    }), e3.nativeAliases = {}, Object.keys(e3.aliases).forEach((t10) => {
      const i3 = e3.aliases[t10], o2 = m[i3];
      if (void 0 === o2) throw Error(`Invalid alias '${i3}'`);
      const r2 = g(t10);
      s2[r2] || (s2[r2] = []), s2[r2].push(o2), e3.nativeAliases[i3] || (e3.nativeAliases[i3] = []), e3.nativeAliases[i3].push(t10);
    }), Object.keys(e3.renamedBlocks || {}).forEach((t10) => {
      const s3 = e3.renamedBlocks[t10];
      if (!m[s3]) throw Error("Unknown ID: " + s3);
      const i3 = m[s3], o2 = g(t10);
      w.blocksByHash[o2] || (w.blocksByHash[o2] = []), w.blocksByHash[o2].push(i3);
    }), e3.nativeDropdowns = {}, Object.keys(e3.dropdowns).forEach((t10) => {
      const s3 = e3.dropdowns[t10];
      e3.nativeDropdowns[s3] = t10;
    }), e3.code = t9, y[t9] = e3;
  }(e2, t8[e2]));
}
var w = { aliases: { "turn ccw %1 degrees": "MOTION_TURNLEFT", "turn left %1 degrees": "MOTION_TURNLEFT", "turn cw %1 degrees": "MOTION_TURNRIGHT", "turn right %1 degrees": "MOTION_TURNRIGHT", "when flag clicked": "EVENT_WHENFLAGCLICKED", "when gf clicked": "EVENT_WHENFLAGCLICKED", "when green flag clicked": "EVENT_WHENFLAGCLICKED" }, renamedBlocks: { "say %1 for %2 secs": "LOOKS_SAYFORSECS", "think %1 for %2 secs": "LOOKS_THINKFORSECS", "play sound %1": "SOUND_PLAY", "wait %1 secs": "CONTROL_WAIT", clear: "pen.clear" }, definePrefix: ["define"], defineSuffix: [], ignorelt: ["when distance"], math: ["abs", "floor", "ceiling", "sqrt", "sin", "cos", "tan", "asin", "acos", "atan", "ln", "log", "e ^", "10 ^"], name: "English", faceParts: ["nose", "mouth", "left eye", "right eye", "between eyes", "left ear", "right ear", "top of head"], soundEffects: ["pitch", "pan left/right"], microbitWhen: ["moved", "shaken", "jumped"], osis: ["other scripts in sprite", "other scripts in stage"], dropdowns: {}, commands: {} };
function v(t8, e2) {
  if (!m[t8]) throw Error("Unknown ID: " + t8);
  m[t8].accepts = e2;
}
function S(t8, e2, s2) {
  v(t8, (t9, e3, i3) => s2(e3, i3)), v(e2, (t9, e3, i3) => !s2(e3, i3));
}
function O(t8) {
  const e2 = [];
  for (const s2 of t8.children) {
    if (!s2.isLabel) return;
    e2.push(s2.value);
  }
  return e2.join(" ");
}
function L(t8, e2) {
  if (!t8) throw Error("Assertion failed! " + (e2 || ""));
}
b.forEach((t8) => {
  w.commands[t8.id] = t8.spec;
}), k({ en: w }), S("OPERATORS_MATHOP", "SENSING_OF", (t8, e2) => {
  const s2 = t8[0];
  if (!s2.isInput) return;
  const i3 = s2.value;
  return e2.math.includes(i3);
}), S("SOUND_CHANGEEFFECTBY", "LOOKS_CHANGEEFFECTBY", (t8, e2) => {
  for (const s2 of t8) if ("dropdown" === s2.shape) {
    const t9 = s2.value;
    for (const s3 of e2.soundEffects) if (V(s3) === V(t9)) return true;
  }
  return false;
}), S("SOUND_SETEFFECTO", "LOOKS_SETEFFECTTO", (t8, e2) => {
  for (const s2 of t8) if ("dropdown" === s2.shape) {
    const t9 = s2.value;
    for (const s3 of e2.soundEffects) if (V(s3) === V(t9)) return true;
  }
  return false;
}), S("DATA_LENGTHOFLIST", "OPERATORS_LENGTH", (t8, e2) => {
  const s2 = t8[t8.length - 1];
  if (s2.isInput) return "dropdown" === s2.shape;
}), S("DATA_LISTCONTAINSITEM", "OPERATORS_CONTAINS", (t8, e2) => {
  const s2 = t8[0];
  if (s2.isInput) return "dropdown" === s2.shape;
}), S("pen.setColor", "pen.setHue", (t8, e2) => {
  const s2 = t8[t8.length - 1];
  return s2.isInput && s2.isColor || s2.isBlock;
}), S("faceSensing.goToPart", "MOTION_GOTO", (t8, e2) => {
  for (const s2 of t8) if ("dropdown" === s2.shape) {
    const t9 = s2.value;
    for (const s3 of e2.faceParts) if (V(s3) === V(t9)) return true;
  }
  return false;
}), S("microbit.whenGesture", "gdxfor.whenGesture", (t8, e2) => {
  for (const s2 of t8) if ("dropdown" === s2.shape) {
    const t9 = s2.value;
    for (const s3 of e2.microbitWhen) if (V(s3) === V(t9)) return true;
  }
  return false;
}), S("ev3.buttonPressed", "microbit.isButtonPressed", (t8, e2) => {
  for (const e3 of t8) if ("dropdown" === e3.shape) switch (V(e3.value)) {
    case "1":
    case "2":
    case "3":
    case "4":
      return true;
  }
  return false;
}), function(t8, e2) {
  if (!m[t8]) throw Error("Unknown ID: " + t8);
  m[t8].specialCase = e2;
}("CONTROL_STOP", (t8, e2, s2) => {
  const i3 = e2[e2.length - 1];
  if (!i3.isInput) return;
  const o2 = i3.value;
  return s2.osis.includes(o2) ? { ...m.CONTROL_STOP, shape: "stack" } : void 0;
});
var E = "￼DIFF";
function T(t8) {
  return t8.includes(E) ? t8.split("\n").map((t9) => t9.includes(E) ? t9.replace(RegExp(`( *)${E}([-+])`, "g"), "$2$1") : "  " + t9).join("\n") : t8;
}
var R = class {
  constructor(t8, e2) {
    this.value = t8, this.cls = e2 || "", this.el = null, this.height = 12, this.metrics = null, this.x = 0;
  }
  get isLabel() {
    return true;
  }
  stringify() {
    return this._stringify();
  }
  _stringify() {
    return "<" === this.value || ">" === this.value ? this.value : this.value.replace(/([<>[\](){}\\])/g, "\\$1").replace(/:{2,}/g, (t8) => ":" + "\\:".repeat(t8.length - 1));
  }
};
var C = class _C {
  constructor(t8) {
    this.name = t8, this.isArrow = "loopArrow" === t8, L(_C.icons[t8], "no info for icon " + t8);
  }
  get isIcon() {
    return true;
  }
  static get icons() {
    return { greenFlag: true, stopSign: true, turnLeft: true, turnRight: true, loopArrow: true, addInput: true, delInput: true, list: true };
  }
  stringify() {
    return this._stringify();
  }
  _stringify() {
    return A["@" + this.name] || "";
  }
};
var M = class {
  constructor(t8, e2, s2) {
    this.shape = t8, this.value = e2, this.menu = s2 || null, this.isRound = "number" === t8 || "number-dropdown" === t8, this.isBoolean = "boolean" === t8, this.isStack = "stack" === t8, this.isInset = "boolean" === t8 || "stack" === t8 || "reporter" === t8, this.isColor = "color" === t8, this.hasArrow = "dropdown" === t8 || "number-dropdown" === t8, this.isDarker = "boolean" === t8 || "stack" === t8 || "dropdown" === t8, this.isSquare = "string" === t8 || "color" === t8 || "dropdown" === t8, this.hasLabel = !(this.isColor || this.isInset), this.label = this.hasLabel ? new R(e2, "literal-" + this.shape) : null, this.x = 0;
  }
  get isInput() {
    return true;
  }
  stringify() {
    return this._stringify();
  }
  _stringify() {
    if (this.isColor) return L("#" === this.value[0]), `[${this.value}]`;
    let t8 = this.value ? this.value + "" : "";
    return this.isSquare && (t8 = t8.replace(/([\]\\])/g, "\\$1")), this.isRound && (t8 = t8.replace(/([()[<])/g, "\\$1")), t8 = t8.replace(/ v$/, " \\v"), this.hasArrow ? t8 += " v" : d.test(t8) && (t8 = "\\" + t8), this.isRound ? `(${t8})` : this.isSquare ? `[${t8}]` : this.isBoolean ? "<>" : this.isStack ? "{}" : t8;
  }
  translate(t8) {
    if (this.hasArrow) {
      const t9 = this.menu || this.value;
      this.value = t9, this.label = new R(this.value, "literal-" + this.shape);
    }
  }
};
var I = class {
  constructor(t8, e2, s2) {
    L(t8), this.info = { ...t8 }, this.children = e2, this.comment = s2 || null, this.diff = null;
    const i3 = this.info.shape;
    this.isHat = "hat" === i3 || "cat" === i3 || "define-hat" === i3 || "define-cat" === i3, this.hasPuzzle = "stack" === i3 || "hat" === i3 || "cat" === i3 || "c-block" === i3 || "define-hat" === i3 || "define-cat" === i3, this.isFinal = /cap/.test(i3), this.isCommand = "stack" === i3 || "cap" === i3 || /block/.test(i3), this.isOutline = "outline" === i3, this.isReporter = "reporter" === i3, this.isBoolean = "boolean" === i3, this.isRing = "ring" === i3, this.hasScript = /block/.test(i3), this.isElse = "celse" === i3, this.isEnd = "cend" === i3;
  }
  get isBlock() {
    return true;
  }
  stringify(t8) {
    return T(this._stringify(t8));
  }
  _stringify(t8) {
    let e2 = null, s2 = false, i3 = this.children.map((t9, i4, o3) => {
      if (t9.isIcon && (s2 = true), e2 || t9.isLabel || t9.isIcon || (e2 = t9), t9.isScript) return t9.isEmpty ? "\n" : `
${function(t10) {
        return t10.split("\n").map((t11) => "  " + t11).join("\n");
      }(t9._stringify())}
`;
      let r3 = o3[i4 + 1];
      r3 = r3 && "loopArrow" === r3.name ? o3[i4 + 2] : r3;
      const c3 = !(r3 && r3.isScript);
      return t9._stringify().trim() + (c3 ? " " : "");
    }).join("").trim();
    if ("reporter" === this.info.shape && d.test(i3)) return `(\\${i3})`;
    const o2 = this.info.language;
    if (s2 && o2 && this.info.selector) {
      const t9 = o2.nativeAliases[this.info.id];
      if (t9 && t9.length) {
        let s3 = t9[0];
        return a.test(s3) && e2 && (s3 = s3.replace(a, e2._stringify())), s3;
      }
    }
    let r2 = t8 || this.info.diff || "";
    (false === this.info.categoryIsDefault || "custom-arg" === this.info.category && (this.isReporter || this.isBoolean) || "custom" === this.info.category && "stack" === this.info.shape) && (r2 && (r2 += " "), this.info.isReset && "obsolete" === this.info.category ? r2 += "reset" : r2 += this.info.category), false === this.info.shapeIsDefault && (r2 && (r2 += " "), r2 += "define-cat" === this.info.shape ? "cat" : this.info.shape), r2 && (i3 += " :: " + r2), (i3.startsWith("+") || i3.startsWith("-")) && "reporter" !== this.info.shape && "boolean" !== this.info.shape && (i3 = "\\" + i3);
    const c2 = this.diff && !this.info.diff ? `${E}${this.diff} ` : "";
    return this.hasScript ? c2 + i3 + "\n" + (Object.keys(o2.aliases).find((t9) => "scratchblocks:end" === o2.aliases[t9]) || "end") : "reporter" === this.info.shape ? `${c2}(${i3})` : "boolean" === this.info.shape ? `${c2}<${i3}>` : c2 + i3;
  }
  translate(t8, e2) {
    if (!t8) throw Error("Missing language");
    const s2 = this.info.id;
    if (!s2) return;
    if ("PROCEDURES_DEFINITION" === s2) {
      const e3 = this.children.find((t9) => t9.isOutline);
      this.children = [];
      for (const e4 of t8.definePrefix) this.children.push(new R(e4));
      this.children.push(e3);
      for (const e4 of t8.defineSuffix) this.children.push(new R(e4));
      return;
    }
    if ("PROCEDURES_CALL" === s2) return void this.children.forEach((e3) => {
      e3.isLabel || e3.isIcon || e3.translate(t8);
    });
    if ("custom-arg" === this.info.category || "custom" === this.info.category) return;
    const i3 = this.info.language.commands[s2], o2 = t8.commands[s2];
    if (!o2) return;
    const r2 = u(o2), n2 = this.children.filter((t9) => !t9.isLabel && !t9.isIcon);
    e2 || n2.forEach((e3) => e3.translate(t8));
    const a2 = u(i3).parts.map((t9) => f(t9)).filter((t9) => t9);
    let l2 = 0;
    const p2 = a2.map((t9) => (l2 = Math.max(l2, t9), n2[t9 - 1])), d2 = n2.slice(l2);
    this.children = r2.parts.map((t9) => {
      if (!(t9 = t9.trim())) return;
      const e3 = f(t9);
      return e3 ? p2[e3 - 1] : h.test(t9) ? new C(t9.slice(1)) : new R(t9);
    }).filter((t9) => t9), d2.forEach((e3, s3) => {
      1 === s3 && "CONTROL_IF" === this.info.id && this.children.push(new R(t8.commands.CONTROL_ELSE)), this.children.push(e3);
    }), this.info.language = t8, this.info.isRTL = c.includes(t8.code), this.info.categoryIsDefault = true;
  }
};
var x = class {
  constructor(t8, e2) {
    this.label = new R(t8, "comment-label"), this.width = null, this.hasBlock = e2;
  }
  get isComment() {
    return true;
  }
  stringify() {
    return this._stringify();
  }
  _stringify() {
    return "// " + this.label.value.trim();
  }
};
var N = class {
  constructor(t8) {
    L(t8), this.child = t8, t8.isBlock ? (this.shape = t8.info.shape, this.info = t8.info) : this.shape = "stack";
  }
  get isGlow() {
    return true;
  }
  stringify() {
    return T(this._stringify());
  }
  _stringify() {
    if (this.child.isBlock) return this.child._stringify("+");
    return this.child._stringify().split("\n").map((t8) => t8.includes(E) ? t8 : `${E}+ ${t8}`).join("\n");
  }
  translate(t8) {
    this.child.translate(t8);
  }
};
var B = class {
  constructor(t8) {
    this.blocks = t8, this.isEmpty = !t8.length, this.isFinal = !this.isEmpty && t8[t8.length - 1].isFinal;
  }
  get isScript() {
    return true;
  }
  stringify() {
    return T(this._stringify());
  }
  _stringify() {
    return this.blocks.map((t8) => {
      let e2 = t8._stringify();
      if (t8.comment) if (t8.isBlock && t8.hasScript) {
        const s2 = " " + t8.comment._stringify(), i3 = e2.indexOf("\n");
        -1 !== i3 ? e2 = e2.slice(0, i3) + s2 + e2.slice(i3) : e2 += s2;
      } else e2 += " " + t8.comment._stringify();
      return e2;
    }).join("\n");
  }
  translate(t8) {
    this.blocks.forEach((e2) => e2.translate && e2.translate(t8));
  }
};
var D = class {
  constructor(t8) {
    this.scripts = t8;
  }
  stringify() {
    return this.scripts.map((t8) => t8.stringify()).join("\n\n");
  }
  translate(t8) {
    this.scripts.forEach((e2) => e2.translate(t8));
  }
};
function P(t8, e2, s2) {
  let n2 = [];
  Array.isArray(e2[e2.length - 1]) && (n2 = e2.pop());
  const a2 = [];
  for (const t9 of e2) t9.isLabel ? a2.push(t9.value) : t9.isIcon ? a2.push("@" + t9.name) : a2.push("_");
  const l2 = a2.join(" "), p2 = t8.hash = V(l2);
  let f2, u2;
  if (!n2.includes("reset")) {
    const i3 = function(t9, e3, s3, i4) {
      for (const o2 of i4) if (Object.prototype.hasOwnProperty.call(o2.blocksByHash, t9)) {
        const i5 = o2.blocksByHash[t9];
        for (let t10 of i5) if (("reporter" !== e3.shape || "reporter" === t10.shape || "ring" === t10.shape) && ("boolean" !== e3.shape || "boolean" === t10.shape) && (!(i5.length > 1 && t10.accepts) || t10.accepts(e3, s3, o2))) return t10.specialCase && (t10 = t10.specialCase(e3, s3, o2) || t10), { type: t10, lang: o2 };
      }
    }(p2, t8, e2, s2);
    if (i3) f2 = i3.lang, u2 = i3.type, t8.language = f2, t8.isRTL = c.includes(f2.code), ("ring" === u2.shape ? "reporter" === t8.shape : "stack" === t8.shape) && (t8.shape = u2.shape), o[u2.category] ? t8.category = o[u2.category] : t8.category = u2.category, t8.categoryIsDefault = true, u2.selector && (t8.selector = u2.selector), u2.id && (t8.id = u2.id), t8.hasLoopArrow = u2.hasLoopArrow, ". . ." === u2.spec && (e2 = [new R(". . .")]);
    else for (const i4 of s2) {
      if (!F(e2, i4)) continue;
      t8.shape = "define-hat", t8.category = "custom";
      const o2 = e2.splice(i4.definePrefix.length, e2.length - i4.defineSuffix.length).map((t9) => {
        if (t9.isInput && t9.isBoolean) t9 = P({ shape: "boolean", argument: "boolean", category: "custom-arg" }, [new R("")], s2);
        else if (!t9.isInput || "string" !== t9.shape && "number" !== t9.shape) (t9.isReporter || t9.isBoolean) && (t9.info.categoryIsDefault && (t9.info.category = "custom-arg"), t9.info.argument = t9.isBoolean ? "boolean" : "number");
        else {
          const e3 = t9.value.split(/ +/g).map((t10) => new R(t10));
          t9 = P({ shape: "reporter", argument: "string" === t9.shape ? "string" : "number", category: "custom-arg" }, e3, s2);
        }
        return t9;
      }), r2 = new I({ shape: "outline", category: "custom", categoryIsDefault: true, hasLoopArrow: false }, o2);
      e2.splice(i4.definePrefix.length, 0, r2);
      break;
    }
  }
  !function(t9, e3) {
    for (const s3 of e3) d.test(s3) ? (t9.color = s3, t9.category = "", t9.categoryIsDefault = false) : o[s3] && i.includes(o[s3]) ? (t9.category = o[s3], t9.categoryIsDefault = false) : i.includes(s3) ? (t9.category = s3, t9.categoryIsDefault = false) : "cat" === s3 && "define-hat" === t9.shape ? (t9.shape = "define-cat", t9.shapeIsDefault = false) : r.includes(s3) ? (t9.shape = s3, t9.shapeIsDefault = false) : "loop" === s3 ? t9.hasLoopArrow = true : "+" === s3 || "-" === s3 ? t9.diff = s3 : "reset" === s3 && (t9.categoryIsDefault = false, t9.isReset = true);
  }(t8, n2), t8.hasLoopArrow && e2.push(new C("loopArrow"));
  const g2 = new I(t8, e2);
  return u2 && h.test(u2.spec) && g2.translate(f2, true), "+" === t8.diff ? new N(g2) : (g2.diff = t8.diff, g2);
}
function F(t8, e2) {
  if (t8.length < e2.definePrefix.length) return false;
  if (t8.length < e2.defineSuffix.length) return false;
  for (let s2 = 0; s2 < e2.definePrefix.length; s2++) {
    const i3 = e2.definePrefix[s2], o2 = t8[s2];
    if (!o2.isLabel || V(o2.value) !== V(i3)) return false;
  }
  for (let s2 = 1; s2 <= e2.defineSuffix.length; s2++) {
    const i3 = e2.defineSuffix[e2.defineSuffix.length - s2], o2 = t8[t8.length - s2];
    if (!o2.isLabel || V(o2.value) !== V(i3)) return false;
  }
  return true;
}
function z(t8, e2) {
  let s2, i3 = t8[0], o2 = 0;
  function r2() {
    i3 = t8[++o2];
  }
  function c2() {
    return t8[o2 + 1];
  }
  function n2() {
    for (let e3 = o2 + 1; e3 < t8.length; e3++) if (" " !== t8[e3]) return t8[e3];
  }
  let a2 = [];
  function l2(t9, s3) {
    const i4 = s3.filter((t10) => !t10.isLabel).length;
    return P({ shape: t9, category: "reporter" !== t9 || i4 ? "obsolete" : "variables", categoryIsDefault: true, hasLoopArrow: false }, s3, e2);
  }
  function h2(t9, s3) {
    const i4 = function(t10, e3) {
      for (const s4 of e3) if (Object.prototype.hasOwnProperty.call(s4.nativeDropdowns, t10)) return s4.nativeDropdowns[t10];
    }(s3, e2) || s3;
    return new M(t9, s3, i4);
  }
  function p2(t9) {
    const e3 = [];
    let s3;
    for (; i3 && "\n" !== i3; ) {
      if (("<" === i3 || ">" === i3) && ">" === t9 && 1 === e3.length && !e3[e3.length - 1].isLabel) {
        const t10 = n2();
        if ("[" === t10 || "(" === t10 || "<" === t10 || "{" === t10) {
          s3 = null, e3.push(new R(i3)), r2();
          continue;
        }
      }
      if (i3 === t9) break;
      if ("/" === i3 && "/" === c2() && !t9) break;
      switch (i3) {
        case "[":
          s3 = null, e3.push(f2());
          break;
        case "(":
          s3 = null, e3.push(g2());
          break;
        case "<":
          s3 = null, e3.push(V2());
          break;
        case "{":
          s3 = null, e3.push(m2());
          break;
        case " ":
        case "	":
          r2(), s3 = null;
          break;
        case "◂":
        case "▸":
          e3.push(b2()), s3 = null;
          break;
        case "@": {
          r2();
          let t10 = "";
          for (; i3 && /[a-zA-Z]/.test(i3); ) t10 += i3, r2();
          "cloud" === t10 ? e3.push(new R("☁")) : e3.push(Object.prototype.hasOwnProperty.call(C.icons, t10) ? new C(t10) : new R("@" + t10)), s3 = null;
          break;
        }
        case "\\":
          r2();
        case ":":
          if (":" === i3 && ":" === c2()) return e3.push(A2(t9)), e3;
        default:
          s3 || e3.push(s3 = new R("")), s3.value += i3, r2();
      }
    }
    return e3;
  }
  function f2() {
    r2();
    let t9 = "", e3 = false;
    const s3 = "\\" === i3;
    for (; i3 && "]" !== i3 && "\n" !== i3; ) {
      if ("\\" === i3) {
        if (r2(), "v" === i3 && (e3 = true), !i3) break;
      } else e3 = false;
      t9 += i3, r2();
    }
    return "]" === i3 && r2(), !s3 && d.test(t9) ? new M("color", t9) : !e3 && / v$/.test(t9) ? h2("dropdown", t9.slice(0, t9.length - 2)) : new M("string", t9);
  }
  function u2(t9) {
    const e3 = p2(t9);
    if (i3 && "\n" === i3 && (s2 = true, r2()), 0 !== e3.length) {
      if (1 === e3.length) {
        const t10 = e3[0];
        if (t10.isBlock && (t10.isReporter || t10.isBoolean || t10.isRing)) return t10;
      }
      return l2("stack", e3);
    }
  }
  function g2() {
    r2();
    const t9 = "\\" === i3;
    if (" " === i3 && (r2(), "v" === i3 && ")" === c2())) return r2(), r2(), new M("number-dropdown", "");
    const e3 = p2(")");
    if (i3 && ")" === i3 && r2(), 0 === e3.length) return new M("number", "");
    if (1 === e3.length && e3[0].isLabel) {
      const s4 = e3[0].value;
      if (/^[0-9e.-]*$/.test(s4)) return new M("number", s4);
      if (!t9 && d.test(s4)) return new M("color", s4);
    }
    if (e3.length > 1 && e3.every((t10) => t10.isLabel)) {
      if ("v" === e3[e3.length - 1].value) {
        e3.pop();
        return h2("number-dropdown", e3.map((t10) => t10.value).join(" "));
      }
    }
    const s3 = l2("reporter", e3);
    if (s3.info && "ring" === s3.info.shape) {
      const t10 = s3.children[0];
      t10 && t10.isInput && "number" === t10.shape && "" === t10.value ? s3.children[0] = new M("reporter") : (t10 && t10.isScript && t10.isEmpty || t10 && t10.isBlock && !t10.children.length) && (s3.children[0] = new M("stack"));
    }
    return s3;
  }
  function V2() {
    r2();
    const t9 = p2(">");
    return i3 && ">" === i3 && r2(), 0 === t9.length ? new M("boolean") : l2("boolean", t9);
  }
  function m2() {
    r2(), s2 = false;
    const t9 = H(function() {
      for (; i3 && "}" !== i3; ) {
        const t10 = u2("}");
        if (t10) return t10;
      }
    });
    let e3 = [];
    return t9.forEach((t10) => {
      e3 = e3.concat(t10.blocks);
    }), "}" === i3 && r2(), s2 ? new B(e3) : (function(t10) {
      if (!t10) throw Error("Assertion failed! ");
    }(e3.length <= 1), e3.length ? e3[0] : l2("stack", []));
  }
  function b2() {
    const t9 = i3;
    switch (r2(), t9) {
      case "▸":
        return new C("addInput");
      case "◂":
        return new C("delInput");
      default:
        return;
    }
  }
  function A2(t9) {
    r2(), r2();
    const e3 = [];
    let s3 = "";
    for (; i3 && "\n" !== i3 && i3 !== t9; ) {
      if (" " === i3) s3 && (e3.push(s3), s3 = "");
      else {
        if ("/" === i3 && "/" === c2()) break;
        s3 += i3;
      }
      r2();
    }
    return s3 && e3.push(s3), e3;
  }
  function y2() {
    let t9;
    "+" !== i3 && "-" !== i3 || (t9 = i3, r2());
    const e3 = u2();
    if ("/" === i3 && "/" === c2()) {
      const t10 = function(t11) {
        r2(), r2();
        let e4 = "";
        for (; i3 && "\n" !== i3 && i3 !== t11; ) e4 += i3, r2();
        return i3 && "\n" === i3 && r2(), new x(e4, true);
      }();
      if (t10.hasBlock = e3 && e3.children.length, !t10.hasBlock) return t10;
      e3.comment = t10;
    }
    return e3 && (e3.diff = t9), e3;
  }
  return e2.map((t9) => {
    a2 = a2.concat(t9.define);
  }), () => {
    if (!i3) return;
    return y2() || "NL";
  };
}
function H(t8) {
  let e2 = t8();
  function s2() {
    e2 = t8();
  }
  function i3() {
    const t9 = e2;
    if (s2(), t9.hasScript) for (; ; ) {
      const i4 = o2();
      if (t9.children.push(new B(i4)), !e2 || !e2.isElse) {
        e2 && e2.isEnd && s2();
        break;
      }
      for (const s3 of e2.children) t9.children.push(s3);
      s2();
    }
    return t9;
  }
  function o2() {
    const t9 = [];
    for (; e2; ) {
      if ("NL" === e2) {
        s2();
        continue;
      }
      if (!e2.isCommand) return t9;
      const o3 = i3(), r2 = "+" === o3.diff;
      if (r2 && (o3.diff = null), r2) {
        const e3 = t9[t9.length - 1];
        let s3 = [];
        e3 && e3.isGlow && (t9.pop(), s3 = e3.child.isScript ? e3.child.blocks : [e3.child]), s3.push(o3), t9.push(new N(new B(s3)));
      } else t9.push(o3);
    }
    return t9;
  }
  return function() {
    for (; "NL" === e2; ) s2();
    const t9 = [];
    for (; e2; ) {
      let o3 = [];
      for (; e2 && "NL" !== e2; ) {
        let e3 = i3();
        const s3 = "+" === e3.diff;
        if (s3 && (e3.diff = null), (e3.isElse || e3.isEnd) && (e3 = new I({ ...e3.info, shape: "stack" }, e3.children)), s3) {
          const t10 = o3[o3.length - 1];
          let s4 = [];
          t10 && t10.isGlow && (o3.pop(), s4 = t10.child.isScript ? t10.child.blocks : [t10.child]), s4.push(e3), o3.push(new N(new B(s4)));
        } else if (e3.isHat) o3.length && t9.push(new B(o3)), o3 = [e3];
        else {
          if (e3.isFinal) {
            o3.push(e3);
            break;
          }
          if (!e3.isCommand) {
            o3.length && t9.push(new B(o3)), t9.push(new B([e3])), o3 = [];
            break;
          }
          o3.push(e3);
        }
      }
      for (o3.length && t9.push(new B(o3)); "NL" === e2; ) s2();
    }
    return t9;
  }();
}
function G(t8, e2) {
  t8.isScript ? t8.blocks = t8.blocks.map((t9) => (G(t9, e2), e2(t9) || t9)) : t8.isBlock ? t8.children = t8.children.map((t9) => (G(t9, e2), e2(t9) || t9)) : t8.isGlow && G(t8.child, e2);
}
var U = { "append:toList:": 1, "deleteLine:ofList:": 1, "insert:at:ofList:": 2, "setLine:ofList:to:": 1, "showList:": 0, "hideList:": 0 };
function j(t8, e2) {
  if ((e2 = { inline: false, languages: ["en"], ...e2 }).dialect) throw Error("Option 'dialect' no longer supported");
  t8 = (t8 = t8.replace(/&lt;/g, "<")).replace(/&gt;/g, ">"), e2.inline && (t8 = t8.replace(/\n/g, " "));
  const s2 = e2.languages.map((t9) => {
    const e3 = y[t9];
    if (!e3) throw Error(`Unknown language: '${t9}'`);
    return e3;
  }), i3 = H(z(t8, s2));
  return function(t9) {
    const e3 = /* @__PURE__ */ Object.create(null), s3 = /* @__PURE__ */ new Set();
    t9.forEach((t10) => {
      const i4 = /* @__PURE__ */ new Set();
      G(t10, (t11) => {
        if (t11.isBlock) {
          if ("define-hat" === t11.info.shape || "define-cat" === t11.info.shape) {
            const s4 = t11.children.find((t12) => t12.isOutline);
            if (!s4) return;
            const o2 = [], r2 = [];
            for (const t12 of s4.children) if (t12.isLabel) r2.push(t12.value.replace(/%/g, ""));
            else if (t12.isBlock) {
              if (!t12.info.argument) return;
              r2.push({ number: "%n", string: "%s", boolean: "%b" }[t12.info.argument]);
              const e4 = O(t12);
              o2.push(e4), i4.add(e4);
            }
            const c2 = r2.join(" "), n2 = g(c2), a2 = { spec: c2, names: o2 };
            e3[n2] || (e3[n2] = a2), t11.info.id = "PROCEDURES_DEFINITION", t11.info.selector = "procDef", t11.info.call = a2.spec, t11.info.names = a2.names, t11.info.category = "custom";
          } else if (t11.info.categoryIsDefault && (t11.isReporter || t11.isBoolean)) {
            const e4 = O(t11);
            i4.has(e4) && (t11.info.category = "custom-arg", t11.info.categoryIsDefault = false, t11.info.selector = "getParam");
          } else if (Object.prototype.hasOwnProperty.call(U, t11.info.selector)) {
            const e4 = U[t11.info.selector], i5 = t11.children.filter((t12) => !t12.isLabel)[e4];
            i5 && i5.isInput && s3.add(i5.value);
          }
        }
      });
    }), t9.forEach((t10) => {
      G(t10, (t11) => {
        if (t11.info && t11.info.categoryIsDefault && "obsolete" === t11.info.category) {
          const s4 = e3[t11.info.hash];
          return void (s4 && (t11.info.id = "PROCEDURES_CALL", t11.info.selector = "call", t11.info.call = s4.spec, t11.info.names = s4.names, t11.info.category = "custom"));
        }
        let i4, o2;
        t11.isReporter && "variables" === t11.info.category && t11.info.categoryIsDefault && (t11.info.selector = "readVariable", i4 = O(t11), o2 = t11.info), i4 && s3.has(i4) && (o2.category = "list", o2.categoryIsDefault = false, o2.selector = "contentsOfList:");
      });
    });
  }(i3), new D(i3);
}
function _(t8, e2) {
  if (!t8) throw Error("Assertion failed! " + e2);
}
var K;
var W;
var Z = { textContent: true };
var Q = class t2 {
  static init(e2) {
    K = e2.document;
    const s2 = e2.DOMParser;
    W = new s2().parseFromString("<xml></xml>", "application/xml"), t2.XMLSerializer = e2.XMLSerializer;
  }
  static makeCanvas() {
    return K.createElement("canvas");
  }
  static cdata(t8) {
    return W.createCDATASection(t8);
  }
  static el(e2, s2) {
    const i3 = K.createElementNS("http://www.w3.org/2000/svg", e2);
    return t2.setProps(i3, s2);
  }
  static setProps(t8, e2) {
    for (const s2 in e2) {
      const i3 = e2[s2] + "";
      Z[s2] ? t8[s2] = i3 : null != e2[s2] && Object.prototype.hasOwnProperty.call(e2, s2) && t8.setAttributeNS(null, s2, i3);
    }
    return t8;
  }
  static withChildren(t8, e2) {
    for (const s2 of e2) t8.appendChild(s2);
    return t8;
  }
  static group(e2) {
    return t2.withChildren(t2.el("g"), e2);
  }
  static newSVG(e2, s2, i3) {
    return t2.el("svg", { version: "1.1", width: e2 * i3, height: s2 * i3, viewBox: `0 0 ${e2} ${s2}` });
  }
  static polygon(e2) {
    return t2.el("polygon", { ...e2, points: e2.points.join(" ") });
  }
  static path(e2) {
    return t2.el("path", { ...e2, path: null, d: e2.path.join(" ") });
  }
  static text(e2, s2, i3, o2) {
    return t2.el("text", { ...o2, x: e2, y: s2, textContent: i3 });
  }
  static symbol(e2) {
    return t2.el("use", { href: e2 });
  }
  static move(e2, s2, i3) {
    return t2.setProps(i3, { transform: `translate(${e2} ${s2})` }), i3;
  }
  static translatePath(t8, e2, s2) {
    let i3 = true;
    const o2 = s2.split(/\s+/), r2 = [];
    for (let s3 = 0; s3 < o2.length; s3++) {
      let c2 = o2[s3];
      if ("A" === c2) {
        const t9 = s3 + 5;
        for (r2.push("A"); s3 < t9; ) r2.push(o2[++s3]);
        continue;
      }
      /[A-Za-z]/.test(c2) ? _(i3, "translatePath: invalid argument") : (c2 = +c2, c2 += i3 ? t8 : e2, i3 = !i3), r2.push(c2);
    }
    return r2.join(" ");
  }
  static rect(e2, s2, i3) {
    return t2.el("rect", { ...i3, x: 0, y: 0, width: e2, height: s2 });
  }
  static ellipse(e2, s2, i3) {
    return t2.el("ellipse", { ...i3, cx: e2 / 2, cy: s2 / 2, rx: e2 / 2, ry: s2 / 2 });
  }
  static arc(t8, e2, s2, i3, o2, r2) {
    return `L ${t8} ${e2} A ${o2} ${r2} 0 0 1 ${s2} ${i3}`;
  }
  static arcw(t8, e2, s2, i3, o2, r2) {
    return `L ${t8} ${e2} A ${o2} ${r2} 0 0 0 ${s2} ${i3}`;
  }
  static roundedPath(e2, s2) {
    const i3 = s2 / 2;
    return ["M", i3, 0, t2.arc(e2 - i3, 0, e2 - i3, s2, i3, i3), t2.arc(i3, s2, i3, 0, i3, i3), "Z"];
  }
  static roundedRect(e2, s2, i3) {
    return t2.path({ ...i3, path: t2.roundedPath(e2, s2) });
  }
  static pointedPath(t8, e2) {
    const s2 = e2 / 2;
    return ["M", s2, 0, "L", t8 - s2, 0, t8, s2, "L", t8, s2, t8 - s2, e2, "L", s2, e2, 0, s2, "L", 0, s2, s2, 0, "Z"];
  }
  static pointedRect(e2, s2, i3) {
    return t2.path({ ...i3, path: t2.pointedPath(e2, s2) });
  }
  static getTop(t8) {
    return `M 0 3
      L 3 0
      L 13 0
      L 16 3
      L 24 3
      L 27 0
      L ${t8 - 3} 0
      L ${t8} 3`;
  }
  static getRingTop(t8) {
    return `M 0 3
      L 3 0
      L 7 0
      L 10 3
      L 16 3
      L 19 0
      L ${t8 - 3} 0
      L ${t8} 3`;
  }
  static getRightAndBottom(t8, e2, s2, i3) {
    void 0 === i3 && (i3 = 0);
    let o2 = ["L", t8, e2 - 3, "L", t8 - 3, e2];
    return s2 && (o2 = o2.concat(["L", i3 + 27, e2, "L", i3 + 24, e2 + 3, "L", i3 + 16, e2 + 3, "L", i3 + 13, e2])), o2 = i3 > 0 ? o2.concat(["L", i3 + 2, e2, "L", i3, e2 + 2]) : o2.concat(["L", i3 + 3, e2, "L", 0, e2 - 3]), o2.join(" ");
  }
  static getArm(t8, e2) {
    return `L 15 ${e2 - 2}
      L 17 ${e2}
      L ${t8 - 3} ${e2}
      L ${t8} ${e2 + 3}`;
  }
  static stackRect(e2, s2, i3) {
    return t2.path({ ...i3, path: [t2.getTop(e2), t2.getRightAndBottom(e2, s2, true, 0), "Z"] });
  }
  static capPath(e2, s2) {
    return [t2.getTop(e2), t2.getRightAndBottom(e2, s2, false, 0), "Z"];
  }
  static capRect(e2, s2, i3) {
    return t2.path({ ...i3, path: t2.capPath(e2, s2) });
  }
  static hatRect(e2, s2, i3) {
    return t2.path({ ...i3, path: ["M", 0, 12, t2.arc(0, 12, 80, 10, 80, 80), "L", e2 - 3, 10, "L", e2, 13, t2.getRightAndBottom(e2, s2, true), "Z"] });
  }
  static curve(t8, e2, s2, i3, o2) {
    const r2 = (e2 + i3) / 2;
    return `${Math.round((t8 + s2) / 2 + (o2 = o2 || 0.42) * (i3 - e2))} ${Math.round(r2 - o2 * (s2 - t8))} ${s2} ${i3}`;
  }
  static procHatBase(e2, s2, i3, o2) {
    return i3 = Math.min(0.2, 35 / e2), t2.path({ ...o2, path: ["M", 0, 15, "Q", t2.curve(0, 15, e2, 15, i3), t2.getRightAndBottom(e2, s2, true), "M", -1, 13, "Q", t2.curve(-1, 13, e2 + 1, 13, i3), "Q", t2.curve(e2 + 1, 13, e2, 16, 0.6), "Q", t2.curve(e2, 16, 0, 16, -i3), "Q", t2.curve(0, 16, -1, 13, 0.6), "Z"] });
  }
  static procHatCap(e2, s2, i3) {
    return t2.path({ path: ["M", -1, 13, "Q", t2.curve(-1, 13, e2 + 1, 13, i3), "Q", t2.curve(e2 + 1, 13, e2, 16, 0.6), "Q", t2.curve(e2, 16, 0, 16, -i3), "Q", t2.curve(0, 16, -1, 13, 0.6), "Z"], class: "sb-define-hat-cap" });
  }
  static procHatRect(e2, s2, i3) {
    const o2 = s2 - 52, r2 = Math.min(0.2, 35 / e2);
    return t2.move(0, o2, t2.group([t2.procHatBase(e2, 52, r2, i3), t2.procHatCap(e2, 52, r2)]));
  }
  static mouthRect(e2, s2, i3, o2, r2) {
    let c2 = o2[0].height;
    const n2 = [t2.getTop(e2), t2.getRightAndBottom(e2, c2, true, 15)];
    for (let s3 = 1; s3 < o2.length; s3 += 2) {
      const r3 = s3 + 2 === o2.length;
      c2 += o2[s3].height - 3, n2.push(t2.getArm(e2, c2));
      const a2 = !(r3 && i3), l2 = r3 ? 0 : 15;
      c2 += o2[s3 + 1].height + 3, n2.push(t2.getRightAndBottom(e2, c2, a2, l2));
    }
    return t2.path({ ...r2, path: n2 });
  }
  static ringRect(e2, s2, i3, o2, r2, c2, n2) {
    const a2 = "reporter" === c2 ? t2.roundedPath : "boolean" === c2 ? t2.pointedPath : t2.capPath;
    return t2.path({ ...n2, path: ["M", 8, 0, t2.arcw(8, 0, 0, 8, 8, 8), t2.arcw(0, s2 - 8, 8, s2, 8, 8), t2.arcw(e2 - 8, s2, e2, s2 - 8, 8, 8), t2.arcw(e2, 8, e2 - 8, 0, 8, 8), "Z", t2.translatePath(4, i3 || 4, a2(o2, r2).join(" "))], "fill-rule": "even-odd" });
  }
  static commentRect(e2, s2, i3) {
    return t2.path({ ...i3, class: "sb-comment", path: ["M", 6, 0, t2.arc(e2 - 6, 0, e2, 6, 6, 6), t2.arc(e2, s2 - 6, e2 - 6, s2, 6, 6), t2.arc(6, s2, 0, s2 - 6, 6, 6), t2.arc(0, 6, 6, 0, 6, 6), "Z"] });
  }
  static commentLine(e2, s2) {
    return t2.move(-e2, 9, t2.rect(e2, 2, { ...s2, class: "sb-comment-line" }));
  }
  static strikethroughLine(e2, s2) {
    return t2.path({ ...s2, path: ["M", 0, 0, "L", e2, 0], class: "sb-diff sb-diff-del" });
  }
};
var X = class {
  constructor(t8, e2) {
    this.el = Q.el("filter", { ...e2, id: t8, x0: "-50%", y0: "-50%", width: "200%", height: "200%" }), this.highestId = 0;
  }
  fe(t8, e2, s2) {
    const i3 = `${t8.toLowerCase().replace(/gaussian|osite/, "")}-${++this.highestId}`;
    return this.el.appendChild(Q.withChildren(Q.el("fe" + t8, { ...e2, result: i3 }), s2 || [])), i3;
  }
  comp(t8, e2, s2, i3) {
    return this.fe("Composite", { ...i3, operator: t8, in: e2, in2: s2 });
  }
  subtract(t8, e2) {
    return this.comp("arithmetic", t8, e2, { k2: 1, k3: -1 });
  }
  offset(t8, e2, s2) {
    return this.fe("Offset", { in: s2, dx: t8, dy: e2 });
  }
  flood(t8, e2, s2) {
    return this.fe("Flood", { in: s2, "flood-color": t8, "flood-opacity": e2 });
  }
  blur(t8, e2) {
    return this.fe("GaussianBlur", { in: e2, stdDeviation: `${t8} ${t8}` });
  }
  colorMatrix(t8, e2) {
    return this.fe("ColorMatrix", { in: t8, type: "matrix", values: e2.join(" ") });
  }
  merge(t8) {
    this.fe("Merge", {}, t8.map((t9) => Q.el("feMergeNode", { in: t9 })));
  }
};
var Y = class t3 {
  static get cssContent() {
    return ".sb-label{font-family:Lucida Grande,Verdana,Arial,DejaVu Sans,sans-serif;font-weight:700;fill:#fff;font-size:10px;word-spacing:1px}.sb-obsolete{fill:#d42828}.sb-motion{fill:#4a6cd4}.sb-looks{fill:#8a55d7}.sb-sound{fill:#bb42c3}.sb-pen{fill:#0e9a6c}.sb-events{fill:#c88330}.sb-control{fill:#e1a91a}.sb-sensing{fill:#2ca5e2}.sb-operators{fill:#5cb712}.sb-variables{fill:#ee7d16}.sb-list{fill:#cc5b22}.sb-custom{fill:#632d99}.sb-custom-arg{fill:#5947b1}.sb-extension{fill:#4b4a60}.sb-grey{fill:#969696}.sb-bevel{filter:url(#bevelFilter)}.sb-input{filter:url(#inputBevelFilter)}.sb-input-number,.sb-input-number-dropdown,.sb-input-string{fill:#fff}.sb-literal-dropdown,.sb-literal-number,.sb-literal-number-dropdown,.sb-literal-string{font-weight:400;font-size:9px;word-spacing:0}.sb-literal-number,.sb-literal-number-dropdown,.sb-literal-string{fill:#000}.sb-darker{filter:url(#inputDarkFilter)}.sb-outline{stroke:#fff;stroke-opacity:.2;stroke-width:2;fill:none}.sb-comment,.sb-define-hat-cap{stroke:#632d99;stroke-width:1;fill:#8e2ec2}.sb-comment{fill:#ffffa5;stroke:#d0d1d2}.sb-comment-line{fill:#ffff80}.sb-comment-label{font-family:Helvetica,Arial,DejaVu Sans,sans-serif;font-weight:700;fill:#5c5d5f;word-spacing:0;font-size:12px}.sb-diff{fill:none;stroke:#000}.sb-diff-ins{stroke-width:2px}.sb-diff-del{stroke-width:3px}";
  }
  static makeIcons() {
    return [Q.el("path", { d: "M1.504 21L0 19.493 4.567 0h1.948l-.5 2.418s1.002-.502 3.006 0c2.006.503 3.008 2.01 6.517 2.01 3.508 0 4.463-.545 4.463-.545l-.823 9.892s-2.137 1.005-5.144.696c-3.007-.307-3.007-2.007-6.014-2.51-3.008-.502-4.512.503-4.512.503L1.504 21z", fill: "#3f8d15", id: "greenFlag" }), Q.el("polygon", { points: "6.3,0.4725 12.516,0.4725 18.585,6.3 18.585,12.495 12.495,18.585 6.3,18.585 0.483,12.495 0.483,6.3  ", fill: "#bb0010", id: "stopSign" }), Q.el("path", { d: "M6.724 0C3.01 0 0 2.91 0 6.5c0 2.316 1.253 4.35 3.14 5.5H5.17v-1.256C3.364 10.126 2.07 8.46 2.07 6.5 2.07 4.015 4.152 2 6.723 2c1.14 0 2.184.396 2.993 1.053L8.31 4.13c-.45.344-.398.826.11 1.08L15 8.5 13.858.992c-.083-.547-.514-.714-.963-.37l-1.532 1.172A6.825 6.825 0 0 0 6.723 0z", fill: "#fff", id: "turnRight" }), Q.el("path", { d: "M3.637 1.794A6.825 6.825 0 0 1 8.277 0C11.99 0 15 2.91 15 6.5c0 2.316-1.253 4.35-3.14 5.5H9.83v-1.256c1.808-.618 3.103-2.285 3.103-4.244 0-2.485-2.083-4.5-4.654-4.5-1.14 0-2.184.396-2.993 1.053L6.69 4.13c.45.344.398.826-.11 1.08L0 8.5 1.142.992c.083-.547.514-.714.963-.37l1.532 1.172z", fill: "#fff", id: "turnLeft" }), Q.el("path", { d: "M0 0L4 4L0 8Z", fill: "#111", id: "addInput" }), Q.el("path", { d: "M4 0L4 8L0 4Z", fill: "#111", id: "delInput" }), Q.setProps(Q.group([Q.el("path", { d: "M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2", fill: "#000", opacity: "0.3" }), Q.move(-1, -1, Q.el("path", { d: "M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2", fill: "#fff", opacity: "0.9" }))]), { id: "loopArrow" }), Q.setProps(Q.group([Q.el("rect", { x: "0", y: "0", width: "12", height: "14", fill: "#000", opacity: "0.25" }), Q.el("rect", { x: "1", y: "1", width: "1", height: "13", fill: "#fff" }), Q.el("rect", { x: "11", y: "1", width: "1", height: "13", fill: "#fff" }), Q.el("rect", { x: "2", y: "1", width: "9", height: "1", fill: "#fff" }), Q.el("rect", { x: "2", y: "5", width: "9", height: "1", fill: "#fff" }), Q.el("rect", { x: "2", y: "9", width: "9", height: "1", fill: "#fff" }), Q.el("rect", { x: "2", y: "13", width: "9", height: "1", fill: "#fff" }), Q.el("rect", { x: "2", y: "2", width: "9", height: "2", fill: "#ea8d1c" }), Q.el("rect", { x: "2", y: "6", width: "9", height: "2", fill: "#ea8d1c" }), Q.el("rect", { x: "2", y: "10", width: "9", height: "2", fill: "#ea8d1c" }), Q.el("rect", { x: "11", y: "0", width: "1", height: "1", fill: "#ea8d1c" }), Q.el("rect", { x: "0", y: "13", width: "1", height: "1", fill: "#ea8d1c" })]), { id: "list" })];
  }
  static makeStyle() {
    const e2 = Q.el("style");
    return e2.appendChild(Q.cdata(t3.cssContent)), e2;
  }
  static bevelFilter(t8, e2) {
    const s2 = new X(t8), i3 = "SourceAlpha", o2 = e2 ? -1 : 1, r2 = s2.blur(1, i3);
    return s2.merge(["SourceGraphic", s2.comp("in", s2.flood("#fff", 0.15), s2.subtract(i3, s2.offset(+o2, +o2, r2))), s2.comp("in", s2.flood("#000", 0.7), s2.subtract(i3, s2.offset(-o2, -o2, r2)))]), s2.el;
  }
  static darkFilter(t8) {
    const e2 = new X(t8);
    return e2.merge(["SourceGraphic", e2.comp("in", e2.flood("#000", 0.2), "SourceAlpha")]), e2.el;
  }
  static darkRect(t8, e2, s2, i3) {
    return Q.setProps(Q.group([Q.setProps(i3, { class: `sb-${s2} sb-darker` })]), { width: t8, height: e2 });
  }
  static get defaultFontFamily() {
    return "Lucida Grande, Verdana, Arial, DejaVu Sans, sans-serif";
  }
};
var { defaultFontFamily: q, makeStyle: $, makeIcons: J, darkRect: tt, bevelFilter: et, darkFilter: st } = Y;
var it = class t4 {
  constructor(t8) {
    Object.assign(this, t8), this.el = null, this.height = 12, this.metrics = null, this.x = 0;
  }
  get isLabel() {
    return true;
  }
  draw() {
    return this.el;
  }
  get width() {
    return this.metrics.width;
  }
  measure() {
    const e2 = this.value, s2 = "sb-" + this.cls;
    this.el = Q.text(0, 10, e2, { class: "sb-label " + s2 });
    let i3 = t4.metricsCache[s2];
    if (i3 || (i3 = t4.metricsCache[s2] = /* @__PURE__ */ Object.create(null)), Object.hasOwnProperty.call(i3, e2)) this.metrics = i3[e2];
    else {
      const s3 = /comment-label/.test(this.cls) ? "bold 12px Helvetica, Arial, DejaVu Sans, sans-serif" : /literal/.test(this.cls) ? "normal 9px " + q : "bold 10px " + q;
      this.metrics = i3[e2] = t4.measure(e2, s3);
    }
  }
  static measure(e2, s2) {
    const i3 = t4.measuring;
    i3.font = s2;
    return { width: i3.measureText(e2).width + 0.5 | 0 };
  }
};
it.metricsCache = {}, it.toMeasure = [];
var ot = class t5 {
  constructor(e2) {
    Object.assign(this, e2);
    const s2 = t5.icons[this.name];
    if (!s2) throw Error("no info for icon: " + this.name);
    Object.assign(this, s2);
  }
  get isIcon() {
    return true;
  }
  draw() {
    return Q.symbol("#" + this.name, { width: this.width, height: this.height });
  }
  static get icons() {
    return { greenFlag: { width: 20, height: 21, dy: -2 }, stopSign: { width: 20, height: 20 }, turnLeft: { width: 15, height: 12, dy: 1 }, turnRight: { width: 15, height: 12, dy: 1 }, loopArrow: { width: 14, height: 11 }, addInput: { width: 4, height: 8 }, delInput: { width: 4, height: 8 }, list: { width: 12, height: 14 } };
  }
};
var rt = class t6 {
  constructor(t8) {
    Object.assign(this, t8), t8.label && (this.label = pt(t8.label)), this.x = 0;
  }
  measure() {
    this.hasLabel && this.label.measure();
  }
  static get shapes() {
    return { string: Q.rect, number: Q.roundedRect, "number-dropdown": Q.roundedRect, color: Q.rect, dropdown: Q.rect, boolean: Q.pointedRect, stack: Q.stackRect, reporter: Q.roundedRect };
  }
  draw(e2) {
    let s2, i3;
    this.hasLabel ? (i3 = this.label.draw(), s2 = Math.max(14, this.label.width + ("string" === this.shape || "number-dropdown" === this.shape ? 6 : 9))) : s2 = this.isInset ? 30 : this.isColor ? 13 : null, this.hasArrow && (s2 += 10), this.width = s2;
    const o2 = this.height = this.isRound || this.isColor ? 13 : 14;
    let r2 = t6.shapes[this.shape](s2, o2);
    this.isColor ? Q.setProps(r2, { fill: this.value }) : this.isDarker && (r2 = tt(s2, o2, e2.info.category, r2), e2.info.color && Q.setProps(r2, { fill: e2.info.color }));
    const c2 = Q.group([Q.setProps(r2, { class: "sb-input sb-input-" + this.shape })]);
    if (this.hasLabel) {
      const t8 = this.isRound ? 5 : 4;
      c2.appendChild(Q.move(t8, 0, i3));
    }
    if (this.hasArrow) {
      const t8 = "dropdown" === this.shape ? 5 : 4;
      c2.appendChild(Q.move(s2 - 10, t8, Q.polygon({ points: [7, 0, 3.5, 4, 0, 0], fill: "#000", opacity: "0.6" })));
    }
    return c2;
  }
};
var ct = class i2 {
  constructor(i3) {
    Object.assign(this, i3), this.children = i3.children.map(pt), this.comment = this.comment ? pt(this.comment) : null, Object.prototype.hasOwnProperty.call(s, this.info.category) && (this.info.category = s[this.info.category]), Object.prototype.hasOwnProperty.call(t, this.info.category) ? this.info.category = t[this.info.category] : Object.prototype.hasOwnProperty.call(e, this.info.category) && (this.info.category = "extension"), this.x = 0, this.width = null, this.height = null, this.firstLine = null, this.innerWidth = null;
  }
  get isBlock() {
    return true;
  }
  measure() {
    for (const t8 of this.children) t8.measure && t8.measure();
    this.comment && this.comment.measure();
  }
  static get shapes() {
    return { stack: Q.stackRect, "c-block": Q.stackRect, "if-block": Q.stackRect, celse: Q.stackRect, cend: Q.stackRect, cap: Q.capRect, reporter: Q.roundedRect, boolean: Q.pointedRect, hat: Q.hatRect, cat: Q.hatRect, "define-hat": Q.procHatRect, "define-cat": Q.procHatRect, ring: Q.roundedRect };
  }
  drawSelf(t8, e2, s2) {
    if (s2.length > 1) return Q.mouthRect(t8, e2, this.isFinal, s2, { class: `sb-${this.info.category} sb-bevel` });
    if ("outline" === this.info.shape) return Q.setProps(Q.stackRect(t8, e2), { class: "sb-outline" });
    if (this.isRing) {
      const s3 = this.children[0];
      if (s3 && (s3.isStack || s3.isBlock || s3.isScript)) {
        const i3 = s3.isScript ? "stack" : s3.isStack ? s3.shape : s3.info.shape;
        return Q.ringRect(t8, e2, s3.y, s3.width, s3.height, i3, { class: `sb-${this.info.category} sb-bevel` });
      }
    }
    const o2 = i2.shapes[this.info.shape];
    if (!o2) throw Error("no shape func: " + this.info.shape);
    return o2(t8, e2, { class: `sb-${this.info.category} sb-bevel` });
  }
  minDistance(t8) {
    return this.isBoolean ? t8.isReporter ? 4 + t8.height / 4 | 0 : t8.isLabel ? 5 + t8.height / 2 | 0 : t8.isBoolean || "boolean" === t8.shape ? 5 : 2 + t8.height / 2 | 0 : this.isReporter ? t8.isInput && t8.isRound || (t8.isReporter || t8.isBoolean) && !t8.hasScript ? 0 : t8.isLabel ? 2 + t8.height / 2 | 0 : t8.height / 2 - 2 | 0 : 0;
  }
  static get padding() {
    return { hat: [15, 6, 2], cat: [15, 6, 2], "define-hat": [21, 8, 9], "define-cat": [21, 8, 9], reporter: [3, 4, 1], boolean: [3, 4, 2], cap: [6, 6, 2], "c-block": [3, 6, 2], "if-block": [3, 6, 2], ring: [4, 4, 2], null: [4, 6, 2] };
  }
  draw() {
    const t8 = "define-hat" === this.info.shape || "define-cat" === this.info.shape;
    let e2 = this.children;
    const s2 = i2.padding[this.info.shape] || i2.padding.null;
    let o2 = s2[0];
    const r2 = s2[1], c2 = s2[2];
    let n2 = 0;
    const a2 = function(t9) {
      this.y = t9, this.width = 0, this.height = t9 ? 13 : 16, this.children = [];
    };
    let l2 = 0, h2 = 0, p2 = new a2(n2);
    const d2 = (t9) => {
      0 === f2.length ? p2.height += o2 + c2 : (p2.height += t9 ? 0 : 2, p2.y -= 1), n2 += p2.height, f2.push(p2);
    };
    if (this.info.isRTL) {
      let t9 = 0;
      const s3 = () => {
        e2 = e2.slice(0, t9).concat(e2.slice(t9, i3).reverse()).concat(e2.slice(i3));
      };
      let i3;
      for (i3 = 0; i3 < e2.length; i3++) e2[i3].isScript && (s3(), t9 = i3 + 1);
      t9 < i3 && s3();
    }
    const f2 = [];
    for (let t9 = 0; t9 < e2.length; t9++) {
      const s3 = e2[t9];
      if (s3.el = s3.draw(this), s3.isScript && this.isCommand) this.hasScript = true, d2(), s3.y = n2, f2.push(s3), h2 = Math.max(h2, Math.max(1, s3.width)), s3.height = Math.max(12, s3.height) + 3, n2 += s3.height, p2 = new a2(n2);
      else if (s3.isArrow) p2.children.push(s3);
      else {
        const e3 = t9 > 0 ? 30 : 0, i3 = this.isCommand ? 0 : this.minDistance(s3), o3 = this.isCommand ? s3.isBlock || s3.isInput ? e3 : 0 : i3;
        o3 && !f2.length && p2.width < o3 - r2 && (p2.width = o3 - r2), s3.x = p2.width, p2.width += s3.width, l2 = Math.max(l2, p2.width + Math.max(0, i3 - r2)), p2.width += 4, s3.isLabel || (p2.height = Math.max(p2.height, s3.height)), p2.children.push(s3);
      }
    }
    if (d2(true), l2 = Math.max(l2 + 2 * r2, this.isHat || this.hasScript ? 83 : this.isCommand || this.isOutline || this.isRing ? 39 : 20), this.height = n2, this.width = h2 ? Math.max(l2, 15 + h2) : l2, t8) {
      const t9 = Math.min(26, 3.5 + 0.13 * l2 | 0) - 18;
      this.height += t9, o2 += 2 * t9;
    }
    this.firstLine = f2[0], this.innerWidth = l2;
    const u2 = [];
    for (const e3 of f2) {
      if (e3.isScript) {
        u2.push(Q.move(15, e3.y, e3.el));
        continue;
      }
      const s3 = e3.height;
      for (const i3 of e3.children) {
        if (i3.isArrow) {
          u2.push(Q.move(l2 - 15, this.height - 3, i3.el));
          continue;
        }
        let n3 = o2 + (s3 - i3.height - o2 - c2) / 2 - 1;
        if (t8 && i3.isLabel ? n3 += 3 : i3.isIcon && (n3 += 0 | i3.dy), !(this.isRing && (i3.y = e3.y + n3 | 0, i3.isInset) || (u2.push(Q.move(r2 + i3.x, e3.y + n3 | 0, i3.el)), "+" !== i3.diff))) {
          const t9 = Q.insEllipse(i3.width, i3.height);
          u2.push(Q.move(r2 + i3.x, e3.y + n3 | 0, t9));
        }
      }
    }
    const g2 = this.drawSelf(l2, this.height, f2);
    return u2.splice(0, 0, g2), this.info.color && Q.setProps(g2, { fill: this.info.color }), Q.group(u2);
  }
};
var nt = class t7 {
  constructor(t8) {
    Object.assign(this, t8), this.label = pt(t8.label), this.width = null;
  }
  get isComment() {
    return true;
  }
  static get lineLength() {
    return 12;
  }
  get height() {
    return 20;
  }
  measure() {
    this.label.measure();
  }
  draw() {
    const e2 = this.label.draw();
    return this.width = this.label.width + 16, Q.group([Q.commentLine(this.hasBlock ? t7.lineLength : 0, 6), Q.commentRect(this.width, this.height, { class: "sb-comment" }), Q.move(8, 4, e2)]);
  }
};
var at = class {
  constructor(t8) {
    Object.assign(this, t8), this.child = pt(t8.child), this.width = null, this.height = null, this.y = 0;
  }
  get isGlow() {
    return true;
  }
  measure() {
    this.child.measure();
  }
  drawSelf() {
    const t8 = this.child;
    let e2;
    const s2 = this.width, i3 = this.height - 1;
    return e2 = t8.isScript ? !t8.isEmpty && t8.blocks[0].isHat ? Q.hatRect(s2, i3) : t8.isFinal ? Q.capRect(s2, i3) : Q.stackRect(s2, i3) : t8.drawSelf(s2, i3, []), Q.setProps(e2, { class: "sb-diff sb-diff-ins" });
  }
  draw() {
    const t8 = this.child, e2 = t8.isScript ? t8.draw(true) : t8.draw();
    return this.width = t8.width, this.height = t8.isBlock && t8.firstLine.height || t8.height, Q.group([e2, this.drawSelf()]);
  }
};
var lt = class {
  constructor(t8) {
    Object.assign(this, t8), this.blocks = t8.blocks.map(pt), this.y = 0;
  }
  get isScript() {
    return true;
  }
  measure() {
    for (const t8 of this.blocks) t8.measure();
  }
  draw(t8) {
    var _a;
    const e2 = [];
    let s2 = 0;
    this.width = 0;
    for (const i4 of this.blocks) {
      const o2 = t8 ? 0 : 2, r2 = i4.draw();
      e2.push(Q.move(o2, s2, r2)), this.width = Math.max(this.width, i4.width);
      if ("-" === (i4.diff || ((_a = i4.info) == null ? void 0 : _a.diff))) {
        const t9 = i4.width, r3 = i4.firstLine.height || i4.height;
        e2.push(Q.move(o2, s2 + r3 / 2 + 1, Q.strikethroughLine(t9))), this.width = Math.max(this.width, i4.width);
      }
      s2 += i4.height;
      const c2 = i4.comment;
      if (c2) {
        const t9 = i4.firstLine, o3 = i4.innerWidth + 2 + nt.lineLength, r3 = s2 - i4.height + t9.height / 2, n2 = c2.draw();
        e2.push(Q.move(o3, r3 - c2.height / 2, n2)), this.width = Math.max(this.width, o3 + c2.width);
      }
    }
    this.height = s2, t8 || this.isFinal || (this.height += 3);
    const i3 = this.blocks[this.blocks.length - 1];
    return !t8 && i3.isGlow && (this.height += 2), Q.group(e2);
  }
};
var ht = class {
  constructor(t8, e2) {
    Object.assign(this, t8), this.scripts = t8.scripts.map(pt), this.width = null, this.height = null, this.el = null, this.defs = null, this.scale = e2.scale;
  }
  measure() {
    this.scripts.forEach((t8) => t8.measure());
  }
  render(t8) {
    if ("function" == typeof t8) throw Error("render() no longer takes a callback");
    this.measure();
    let e2 = 0, s2 = 0;
    const i3 = [];
    for (const t9 of this.scripts) s2 && (s2 += 10), t9.y = s2, i3.push(Q.move(0, s2, t9.draw())), s2 += t9.height, e2 = Math.max(e2, t9.width + 4);
    this.width = e2, this.height = s2;
    const o2 = Q.newSVG(e2, s2, this.scale);
    return o2.appendChild(this.defs = Q.withChildren(Q.el("defs"), [et("bevelFilter", false), et("inputBevelFilter", true), st("inputDarkFilter"), ...J()])), o2.appendChild(Q.group(i3)), this.el = o2, o2;
  }
  exportSVGString() {
    if (null == this.el) throw Error("call draw() first");
    const t8 = $();
    this.defs.appendChild(t8);
    const e2 = new Q.XMLSerializer().serializeToString(this.el);
    return this.defs.removeChild(t8), e2;
  }
  exportSVG() {
    return "data:image/svg+xml;utf8," + this.exportSVGString().replace(/[#]/g, encodeURIComponent);
  }
  toCanvas(t8, e2) {
    e2 = e2 || 1;
    const s2 = Q.makeCanvas();
    s2.width = Math.max(1, this.width * e2 * this.scale), s2.height = Math.max(1, this.height * e2 * this.scale);
    const i3 = s2.getContext("2d"), o2 = new Image();
    o2.src = this.exportSVG(), o2.onload = () => {
      i3.save(), i3.scale(e2, e2), i3.drawImage(o2, 0, 0), i3.restore(), t8(s2);
    };
  }
  exportPNG(t8, e2) {
    this.toCanvas((e3) => {
      URL && URL.createObjectURL && Blob && e3.toBlob ? e3.toBlob((e4) => {
        t8(URL.createObjectURL(e4));
      }, "image/png") : t8(e3.toDataURL("image/png"));
    }, e2);
  }
};
var pt = (t8, e2) => new (((t9) => {
  switch (t9.constructor) {
    case R:
      return it;
    case C:
      return ot;
    case M:
      return rt;
    case I:
      return ct;
    case x:
      return nt;
    case N:
      return at;
    case B:
      return lt;
    case D:
      return ht;
    default:
      throw Error("no view for " + t9.constructor.name);
  }
})(t8))(t8, e2);
var dt = Y.makeStyle;
var ft;
var ut;
var gt = { textContent: true };
var Vt = class _Vt {
  static init(t8) {
    ft = t8.document;
    const e2 = t8.DOMParser;
    ut = new e2().parseFromString("<xml></xml>", "application/xml"), _Vt.XMLSerializer = t8.XMLSerializer;
  }
  static makeCanvas() {
    return ft.createElement("canvas");
  }
  static cdata(t8) {
    return ut.createCDATASection(t8);
  }
  static el(t8, e2) {
    const s2 = ft.createElementNS("http://www.w3.org/2000/svg", t8);
    return _Vt.setProps(s2, e2);
  }
  static setProps(t8, e2) {
    for (const s2 in e2) {
      const i3 = e2[s2] + "";
      gt[s2] ? t8[s2] = i3 : null != e2[s2] && Object.prototype.hasOwnProperty.call(e2, s2) && t8.setAttributeNS(null, s2, i3);
    }
    return t8;
  }
  static withChildren(t8, e2) {
    for (const s2 of e2) t8.appendChild(s2);
    return t8;
  }
  static group(t8) {
    return _Vt.withChildren(_Vt.el("g"), t8);
  }
  static newSVG(t8, e2, s2) {
    return _Vt.el("svg", { version: "1.1", width: t8 * s2, height: e2 * s2, viewBox: `0 0 ${t8 * s2} ${e2 * s2}` });
  }
  static polygon(t8) {
    return _Vt.el("polygon", { ...t8, points: t8.points.join(" ") });
  }
  static path(t8) {
    return _Vt.el("path", { ...t8, path: null, d: t8.path.join(" ") });
  }
  static text(t8, e2, s2, i3) {
    return _Vt.el("text", { ...i3, x: t8, y: e2, textContent: s2 });
  }
  static symbol(t8) {
    return _Vt.el("use", { href: t8 });
  }
  static move(t8, e2, s2) {
    return _Vt.setProps(s2, { transform: `translate(${t8} ${e2})` }), s2;
  }
  static rect(t8, e2, s2) {
    return _Vt.el("rect", { ...s2, x: 0, y: 0, width: t8, height: e2 });
  }
  static roundRect(t8, e2, s2) {
    return _Vt.rect(t8, e2, { ...s2, rx: 4, ry: 4 });
  }
  static pillRect(t8, e2, s2) {
    const i3 = e2 / 2;
    return _Vt.rect(t8, e2, { ...s2, rx: i3, ry: i3 });
  }
  static pointedPath(t8, e2) {
    const s2 = e2 / 2;
    return [`M ${s2} 0`, `L ${t8 - s2} 0 ${t8} ${s2}`, `L ${t8} ${s2} ${t8 - s2} ${e2}`, `L ${s2} ${e2} 0 ${s2}`, `L 0 ${s2} ${s2} 0`, "Z"];
  }
  static pointedRect(t8, e2, s2) {
    return _Vt.path({ ...s2, path: _Vt.pointedPath(t8, e2) });
  }
  static topNotch(t8, e2) {
    return `c 2 0 3 1 4 2
      l 4 4
      c 1 1 2 2 4 2
      h 12
      c 2 0 3 -1 4 -2
      l 4 -4
      c 1 -1 2 -2 4 -2
      L ${t8 - 4} ${e2}
      a 4 4 0 0 1 4 4`;
  }
  static getTop(t8) {
    return "M 0 4\n      A 4 4 0 0 1 4 0\n      H 12 " + _Vt.topNotch(t8, 0);
  }
  static getRingTop(t8) {
    return `M 0 3
      L 3 0
      L 7 0
      L 10 3
      L 16 3
      L 19 0
      L ${t8 - 3} 0
      L ${t8} 3`;
  }
  static getRightAndBottom(t8, e2, s2, i3) {
    void 0 === i3 && (i3 = 0);
    let o2 = [`L ${t8} ${e2 - 4}`, "a 4 4 0 0 1 -4 4"];
    return s2 && (o2 = o2.concat([`L ${i3 + 48} ${e2}`, "c -2 0 -3 1 -4 2", "l -4 4", "c -1 1 -2 2 -4 2", "h -12", "c -2 0 -3 -1 -4 -2", "l -4 -4", "c -1 -1 -2 -2 -4 -2"])), 0 === i3 ? (o2.push("L", i3 + 4, e2), o2.push("a 4 4 0 0 1 -4 -4")) : (o2.push("L", i3 + 4, e2), o2.push("a 4 4 0 0 0 -4 4")), o2.join(" ");
  }
  static getArm(t8, e2) {
    return `L 16 ${e2 - 4}
      a 4 4 0 0 0 4 4
      L 28 ${e2} ${_Vt.topNotch(t8, e2)}`;
  }
  static getArmNoNotch(t8, e2) {
    return `L 16 ${e2 - 4}
      a 4 4 0 0 0 4 4
      L 28 ${e2} L ${t8 - 4} ${e2}
      a 4 4 0 0 1 4 4`;
  }
  static stackRect(t8, e2, s2) {
    return _Vt.path({ ...s2, path: [_Vt.getTop(t8), _Vt.getRightAndBottom(t8, e2, true, 0), "Z"] });
  }
  static capPath(t8, e2) {
    return [_Vt.getTop(t8), _Vt.getRightAndBottom(t8, e2, false, 0), "Z"];
  }
  static capRect(t8, e2, s2) {
    return _Vt.path({ ...s2, path: _Vt.capPath(t8, e2) });
  }
  static getHatTop(t8) {
    return `M 0 16 c 25,-22 71,-22 96,0 L ${t8 - 4} 16 a 4 4 0 0 1 4 4`;
  }
  static getCatTop(t8) {
    return `M 0 32
      c2.6,-2.3 5.5,-4.3 8.5,-6.2c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4c8.4,-1.3 17,-1.3 25.4,0c1.9,-2.3 14.7,-17.2 18.4,-15.4c3.1,1.5 9.4,12.3 8.4,24.8c3,1.8 5.9,3.9 8.5,6.1
      L ${t8 - 4} 32
      a 4 4 0 0 1 4 4`;
  }
  static hatRect(t8, e2, s2) {
    return _Vt.path({ ...s2, path: [_Vt.getHatTop(t8), _Vt.getRightAndBottom(t8, e2, true, 0), "Z"] });
  }
  static catParts() {
    return _Vt.group([_Vt.move(0, 32, _Vt.setProps(_Vt.group([_Vt.el("circle", { cx: 29.1, cy: -3.3, r: 3.4 }), _Vt.el("circle", { cx: 59.2, cy: -3.3, r: 3.4 }), _Vt.el("path", { d: "M45.6,0.1c-0.9,0-1.7-0.3-2.3-0.9c-0.6,0.6-1.3,0.9-2.2,0.9c-0.9,0-1.8-0.3-2.3-0.9c-1-1.1-1.1-2.6-1.1-2.8c0-0.5,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1c0,0.4,0.1,1.7,1.4,1.7c0.5,0,0.7-0.2,0.8-0.3c0.3-0.3,0.4-1,0.4-1.3c0-0.1,0-0.1,0-0.2c0-0.5,0.5-1,1-1l0,0c0.5,0,1,0.4,1,1c0,0,0,0.1,0,0.2c0,0.3,0.1,0.9,0.4,1.2C44.8-2.2,45-2,45.5-2s0.7-0.2,0.8-0.3c0.3-0.4,0.4-1.1,0.3-1.3c0-0.5,0.4-1,0.9-1.1c0.5,0,1,0.4,1.1,0.9c0,0.2,0.1,1.8-0.8,2.8C47.5-0.4,46.8,0.1,45.6,0.1z" })]), { fill: "#000", "fill-opacity": 0.6 })), _Vt.move(0, 32, _Vt.el("path", { d: "M73.1-15.6c1.7-4.2,4.5-9.1,5.8-8.5c1.6,0.8,5.4,7.9,5,15.4c0,0.6-0.7,0.7-1.1,0.5c-3-1.6-6.4-2.8-8.6-3.6C72.8-12.3,72.4-13.7,73.1-15.6z", fill: "#FFD5E6", transform: "translate(0, 32)" })), _Vt.move(0, 32, _Vt.el("path", { d: "M22.4-15.6c-1.7-4.2-4.5-9.1-5.8-8.5c-1.6,0.8-5.4,7.9-5,15.4c0,0.6,0.7,0.7,1.1,0.5c3-1.6,6.4-2.8,8.6-3.6C22.8-12.3,23.2-13.7,22.4-15.6z", fill: "#FFD5E6", transform: "translate(0, 32)" }))]);
  }
  static catHat(t8, e2, s2) {
    return _Vt.group([_Vt.path({ ...s2, path: [_Vt.getCatTop(t8), _Vt.getRightAndBottom(t8, e2, true, 0), "Z"] }), _Vt.catParts()]);
  }
  static getProcHatTop(t8) {
    return `M 0 20 a 20 20 0 0 1 20 -20 L ${t8 - 20} 0 a 20,20 0 0,1 20,20`;
  }
  static getProcCatTop(t8) {
    return `M 0 20 c 0,-7.1 3.7,-13.3 9.3,-16.9 c 1.7,-7.5 5.4,-13.2 7.6,-14.2 c 2.6,-1.3 10,6 14.6,11.1 h 33 c 4.6,-5.1 11.9,-12.4 14.6,-11.1 c 1.9,0.9 4.9,5.2 6.8,11.1 h 7.8 L ${t8 - 20} 0 a 20,20 0 0,1 20,20`;
  }
  static procHatRect(t8, e2, s2) {
    return _Vt.path({ ...s2, path: [_Vt.getProcHatTop(t8), _Vt.getRightAndBottom(t8, e2, true, 0), "Z"] });
  }
  static procCatRect(t8, e2, s2) {
    return _Vt.group([_Vt.path({ ...s2, path: [_Vt.getProcCatTop(t8), _Vt.getRightAndBottom(t8, e2, true, 0), "Z"] }), _Vt.move(0, -13, _Vt.catParts())]);
  }
  static mouthRect(t8, e2, s2, i3, o2) {
    let r2 = i3[0].height;
    const c2 = [_Vt.getTop(t8), _Vt.getRightAndBottom(t8, r2, true, 16)];
    for (let e3 = 1; e3 < i3.length; e3 += 2) {
      const o3 = e3 + 2 === i3.length, n2 = i3[e3];
      r2 += n2.height - 3, n2.isFinal ? c2.push(_Vt.getArmNoNotch(t8, r2)) : c2.push(_Vt.getArm(t8, r2));
      const a2 = !(o3 && s2), l2 = o3 ? 0 : 16;
      r2 += i3[e3 + 1].height + 3, c2.push(_Vt.getRightAndBottom(t8, r2, a2, l2));
    }
    return c2.push("Z"), _Vt.path({ ...o2, path: c2 });
  }
  static commentRect(t8, e2, s2) {
    return _Vt.roundRect(t8, e2, { ...s2, class: "sb3-comment" });
  }
  static commentLine(t8, e2) {
    return _Vt.move(-t8, 9, _Vt.rect(t8, 2, { ...e2, class: "sb3-comment-line" }));
  }
  static strikethroughLine(t8, e2) {
    return _Vt.path({ ...e2, path: ["M", 0, 0, "L", t8, 0], class: "sb3-diff sb3-diff-del" });
  }
};
var mt = /* @__PURE__ */ new Set(["dropdownArrow", "turnRight", "turnLeft", "loopArrow", "musicBlock", "penBlock", "videoBlock", "faceSensingBlock", "ttsBlock", "translationBlock"]);
var bt = class _bt {
  static get cssContent() {
    return ".sb3-label{font:500 12pt Helvetica Neue,Helvetica,sans-serif}.sb3-literal-dropdown,.sb3-literal-number,.sb3-literal-number-dropdown,.sb3-literal-string{word-spacing:0}.sb3-diff{fill:none;stroke:#000}.sb3-diff-ins{stroke-width:2px}.sb3-diff-del{stroke-width:3px}svg .sb3-motion{fill:#4c97ff;stroke:#3373cc}svg .sb3-motion-alt{fill:#4280d7}svg .sb3-motion-dark{fill:#3373cc}svg .sb3-looks{fill:#96f;stroke:#774dcb}svg .sb3-looks-alt{fill:#855cd6}svg .sb3-looks-dark{fill:#774dcb}svg .sb3-sound{fill:#cf63cf;stroke:#bd42bd}svg .sb3-sound-alt{fill:#c94fc9}svg .sb3-sound-dark{fill:#bd42bd}svg .sb3-control{fill:#ffab19;stroke:#cf8b17}svg .sb3-control-alt{fill:#ec9c13}svg .sb3-control-dark{fill:#cf8b17}svg .sb3-events{fill:#ffbf00;stroke:#c90}svg .sb3-events-alt{fill:#e6ac00}svg .sb3-events-dark{fill:#c90}svg .sb3-sensing{fill:#5cb1d6;stroke:#2e8eb8}svg .sb3-sensing-alt{fill:#47a8d1}svg .sb3-sensing-dark{fill:#2e8eb8}svg .sb3-operators{fill:#59c059;stroke:#389438}svg .sb3-operators-alt{fill:#46b946}svg .sb3-operators-dark{fill:#389438}svg .sb3-variables{fill:#ff8c1a;stroke:#db6e00}svg .sb3-variables-alt{fill:#ff8000}svg .sb3-variables-dark{fill:#db6e00}svg .sb3-list{fill:#ff661a;stroke:#e64d00}svg .sb3-list-alt{fill:#f50}svg .sb3-list-dark{fill:#e64d00}svg .sb3-custom{fill:#ff6680;stroke:#f35}svg .sb3-custom-alt{fill:#ff4d6a}svg .sb3-custom-dark{fill:#f35}svg .sb3-extension{fill:#0fbd8c;stroke:#0b8e69}svg .sb3-extension-alt{fill:#0da57a}svg .sb3-extension-dark{fill:#0b8e69}svg .sb3-obsolete{fill:#ed4242;stroke:#ca2b2b}svg .sb3-obsolete-alt{fill:#db3333}svg .sb3-obsolete-dark{fill:#ca2b2b}svg .sb3-grey{fill:#bfbfbf;stroke:#909090}svg .sb3-grey-alt{fill:#b2b2b2}svg .sb3-grey-dark{fill:#909090}svg .sb3-label{fill:#fff}svg .sb3-input-color{stroke:#fff}svg .sb3-input-number,svg .sb3-input-string{fill:#fff}svg .sb3-literal-number,svg .sb3-literal-string{fill:#575e75}svg .sb3-custom-arg{fill:#ff6680;stroke:#f35}svg .sb3-extension-line{stroke:#0da57a}svg.scratchblocks-style-scratch3-high-contrast .sb3-motion{fill:#80b5ff;stroke:#3373cc}svg.scratchblocks-style-scratch3-high-contrast .sb3-motion-alt{fill:#b3d2ff}svg.scratchblocks-style-scratch3-high-contrast .sb3-motion-dark{fill:#3373cc}svg.scratchblocks-style-scratch3-high-contrast .sb3-looks{fill:#ccb3ff;stroke:#774dcb}svg.scratchblocks-style-scratch3-high-contrast .sb3-looks-alt{fill:#dcf}svg.scratchblocks-style-scratch3-high-contrast .sb3-looks-dark{fill:#774dcb}svg.scratchblocks-style-scratch3-high-contrast .sb3-sound{fill:#e19de1;stroke:#bd42bd}svg.scratchblocks-style-scratch3-high-contrast .sb3-sound-alt{fill:#ffb3ff}svg.scratchblocks-style-scratch3-high-contrast .sb3-sound-dark{fill:#bd42bd}svg.scratchblocks-style-scratch3-high-contrast .sb3-control{fill:#ffbe4c;stroke:#cf8b17}svg.scratchblocks-style-scratch3-high-contrast .sb3-control-alt{fill:#ffda99}svg.scratchblocks-style-scratch3-high-contrast .sb3-control-dark{fill:#cf8b17}svg.scratchblocks-style-scratch3-high-contrast .sb3-events{fill:#ffd966;stroke:#c90}svg.scratchblocks-style-scratch3-high-contrast .sb3-events-alt{fill:#ffecb3}svg.scratchblocks-style-scratch3-high-contrast .sb3-events-dark{fill:#c90}svg.scratchblocks-style-scratch3-high-contrast .sb3-sensing{fill:#85c4e0;stroke:#2e8eb8}svg.scratchblocks-style-scratch3-high-contrast .sb3-sensing-alt{fill:#aed8ea}svg.scratchblocks-style-scratch3-high-contrast .sb3-sensing-dark{fill:#2e8eb8}svg.scratchblocks-style-scratch3-high-contrast .sb3-operators{fill:#7ece7e;stroke:#389438}svg.scratchblocks-style-scratch3-high-contrast .sb3-operators-alt{fill:#b5e3b5}svg.scratchblocks-style-scratch3-high-contrast .sb3-operators-dark{fill:#389438}svg.scratchblocks-style-scratch3-high-contrast .sb3-variables{fill:#ffa54c;stroke:#db6e00}svg.scratchblocks-style-scratch3-high-contrast .sb3-variables-alt{fill:#fc9}svg.scratchblocks-style-scratch3-high-contrast .sb3-variables-dark{fill:#db6e00}svg.scratchblocks-style-scratch3-high-contrast .sb3-list{fill:#f96;stroke:#e64d00}svg.scratchblocks-style-scratch3-high-contrast .sb3-list-alt{fill:#ffcab0}svg.scratchblocks-style-scratch3-high-contrast .sb3-list-dark{fill:#e64d00}svg.scratchblocks-style-scratch3-high-contrast .sb3-custom{fill:#f9a;stroke:#f35}svg.scratchblocks-style-scratch3-high-contrast .sb3-custom-alt{fill:#ffccd5}svg.scratchblocks-style-scratch3-high-contrast .sb3-custom-dark{fill:#f35}svg.scratchblocks-style-scratch3-high-contrast .sb3-extension{fill:#13ecaf;stroke:#0b8e69}svg.scratchblocks-style-scratch3-high-contrast .sb3-extension-alt{fill:#75f0cd}svg.scratchblocks-style-scratch3-high-contrast .sb3-extension-dark{fill:#0b8e69}svg.scratchblocks-style-scratch3-high-contrast .sb3-obsolete{fill:#fc6666;stroke:#d32121}svg.scratchblocks-style-scratch3-high-contrast .sb3-obsolete-alt{fill:#fcb0b0}svg.scratchblocks-style-scratch3-high-contrast .sb3-obsolete-dark{fill:#d32121}svg.scratchblocks-style-scratch3-high-contrast .sb3-grey{fill:#bfbfbf;stroke:#959595}svg.scratchblocks-style-scratch3-high-contrast .sb3-grey-alt{fill:#b2b2b2}svg.scratchblocks-style-scratch3-high-contrast .sb3-grey-dark{fill:#959595}svg.scratchblocks-style-scratch3-high-contrast .sb3-label{fill:#000}svg.scratchblocks-style-scratch3-high-contrast .sb3-input-color{stroke:#fff}svg.scratchblocks-style-scratch3-high-contrast .sb3-input-number,svg.scratchblocks-style-scratch3-high-contrast .sb3-input-string{fill:#fff}svg.scratchblocks-style-scratch3-high-contrast .sb3-literal-number,svg.scratchblocks-style-scratch3-high-contrast .sb3-literal-string{fill:#000}svg.scratchblocks-style-scratch3-high-contrast .sb3-custom-arg{fill:#f9a;stroke:#f35}svg.scratchblocks-style-scratch3-high-contrast .sb3-extension-line{stroke:#75f0cd}.sb3-comment{fill:#ffffa5;stroke:#d0d1d2;stroke-width:1}.sb3-comment-line{fill:#ffff80}.sb3-comment-label,.sb3-label.sb3-comment-label{font:400 12pt Helvetica Neue,Helvetica,sans-serif;fill:#000;word-spacing:0}";
  }
  static makeCommonIcons() {
    return [Vt.setProps(Vt.group([Vt.el("path", { d: "M20.8 3.7c-.4-.2-.9-.1-1.2.2-2 1.6-4.8 1.6-6.8 0-2.3-1.9-5.6-2.3-8.3-1v-.4c0-.6-.5-1-1-1s-1 .4-1 1v18.8c0 .5.5 1 1 1h.1c.5 0 1-.5 1-1v-6.4c1-.7 2.1-1.2 3.4-1.3 1.2 0 2.4.4 3.4 1.2 2.9 2.3 7 2.3 9.8 0 .3-.2.4-.5.4-.9V4.7c0-.5-.3-.9-.8-1zm-.3 10.2C18 16 14.4 16 11.9 14c-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2l.1.1-.1 9.2z", fill: "#45993d" }), Vt.el("path", { d: "M20.6 4.8l-.1 9.1v.1c-2.5 2-6.1 2-8.6 0-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2c0 .1.1.1.1.2z", fill: "#4cbf56" })]), { id: "sb3-greenFlag" }), Vt.setProps(Vt.el("polygon", { points: "6.6,0.5 13.12,0.5 19.5,6.6 19.5,13.12 13.12,19.5 6.6,19.5 0.5,13.12 0.5,6.6 ", fill: "#ec5959", stroke: "#b84848", "stroke-linejoin": "round", "stroke-linecap": "round" }), { id: "sb3-stopSign" }), Vt.el("path", { d: "M0 0L4 4L0 8Z", fill: "#111", id: "sb3-addInput" }), Vt.el("path", { d: "M4 0L4 8L0 4Z", fill: "#111", id: "sb3-delInput" }), Vt.setProps(Vt.group([Vt.el("rect", { x: "0", y: "0", width: "15", height: "18", fill: "#fff" }), Vt.el("rect", { x: "1", y: "1", width: "13", height: "4", fill: "#ff920f" }), Vt.el("rect", { x: "1", y: "7", width: "13", height: "4", fill: "#ff920f" }), Vt.el("rect", { x: "1", y: "13", width: "13", height: "4", fill: "#ff920f" })]), { id: "sb3-list" }), Vt.el("image", { id: "sb3-microbitBlock", width: "40px", height: "40px", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAACmlBMVEUAAAArKysrIB8lJCNBRlY2O0U9X48sKCvOoBQzKzMnJyfrswi/xdDRoxN2dnbToxPosgnmsAq/lxo6MSq0kCLOoRXKnhbEmhc7LRooJCTcqQ7OoBXstAjpsgi9lhuvjCCPdSd4Zyg2NjZMi+Slhyq8lR5CR1fZqBG+lh3ttQjFnBnLnhbDmhqZore3kh5ARlW2kR6qiCGcfyU6QEtyYyd4ZSDSoxOGdDedgizLnhfgrA25kx9YXWqbgCxMUWDfqwzcqg/VphBBR1ecpLmcgSzHmxijq77BmRprYkOOlKZARlVGdbabo7m3kRxGcrKwjB9ARVSIjaCZobuVeyahgh+VdyE8XIOLayBIOydBR1f/vwBMl//m5+g+Q1JlanY6P0uCiJjj5OU9QVBARVQ/RFP9vgBFZpjk5ebwtgbzuAR0eotARlZITl3d3+KNlKRQVmRNUmGxs7mRlJtUW2nLnhfInRfpsQn1uQS/wsa0t7qlp62doKeKjpeBg41YXmxCSlvGyMtHb6xCUGlCTGBJgdJDSFVobXlMlPhLhtq/wchIesFGbqpDVXRXXGxCTGNiXEe+lh1LjuzP0dRJg9RIfslJfMW9v8RGbKRFY5Jzd4NdYm88QE1+bjrQpCHQohTxtwVLkPDa3OHd3t9If826vMCusLZHcrGIj6F6gpaDho9ESlpITFOQeTLcqhnEmhnqsw34uwVKkfNNhdi6vMRLUWBPUFC7lzDWpx31uQjutQj6vAP5+frZ29zZ2dvW2NtHc7JGbKVFaJx/hpl/hpdxd4hzd4JDWHpDUm5UWWiZhEh3aT6WfC/EnSqtiyW/lxzBmRpKi+VQgMhRermqq7BSdrCLjpVEXYVEW4A/SFtOT1BaV0pxZUCpjT2xkTcYNOUYAAAAWXRSTlMADBgV5DRLEdcIE+3Z2QLt6unOI/zp1dEcDf7z7eu9qVtFBPv7+/fx7u3p3NnOzcq0lXZENzD6+fj39vTm5uXk4t3c2tbS0c/NvrCopKKcm4yLbGpiTUA3JzDAPbYAAAQqSURBVFjD7dX1fxJhHMDxE+MIRRFrdnd3d3fr9ziwhsVsmC2K6HRTtzlb0ens2uzu7m79X3z4HufdwTNvj/qbfPYaPDe+vMf23AEXL168/6bBTfoWx5r0GskxVMhsoDfg3Lb12LlzIwz0zKZYzzy0lkPVKtXdutXw++o2a5UQ7SUMcqibGpA8kD09slX0azRkazwISB5Inn4D+ShwrNYjIHpQQA96mqPAYlqPgOhBAT0oUpgGyh6C6EHYWz11e7jbO9hAxUMQPezR6+wtW0nBlJzV7CB62nIyN/mB5H/ouM0G0j3ITIXsAMDUVMjcygbSPQgqrzCNDaR7sCEzO2cLKSvlLNP/ED1qgbRbh0m37viBAUSPvU/BYFZWcAMFRI+9HW/fOFLSgAaixw6erZWS5qeBVG+XKwlghWsuwALXHIA5rgUAc10r1KADvViwKNDaLO4EWCQuA5gnLgVYKs4DWCYuUoPoFRhcKa4FWCwuB1gizgeYLy4BWC4uBqWPq9Cjg55EJ5bogUi7J0wBmDwhMXzjBHBOmAyQSG4wnPd4cJ4Kejbem4gdTQL9NPN00Hlk0jRs//0p+puinaeDs0XxwMFtk8RZM6fob4pmPl/wxtqkOcemIai7Kco8HTx/88Ns8dBxgMcrEdTfFKcyP/9m1xhwwbV30sBGCdTPqczPu9Y5BoTzZODAg6S5kT9Zf1PU8+fz25TrTJuizOd32kjtL9CmaOfpJ/Zd5UTV3RTtfP6X3mfl0tNNuVSpILYp5xHL25ccFUQv9cwGhrcvPZB4jgiovyn6IHrrZFB/U/RBf6rD8f4sgqzRwTtZQfKZGPiXm4Kxb8rff6awgf9sU5jTB9O79G63BqTW1C5baQ9geNSwvnIEJ8s2PCkPXqhTtlM6HUxvWpiv3h6kyozmDY2egnzUkjc3/3X0bAjPt3gW+VWVxvFtSn6hgi9acxzfeI001yiBs46pI7/AkjzHVSgjg5XIkwvXB+xbcxNnGraHCmZUr8nxJS/g3AlC1KzujQgnOpo5axufDFasYLUa2gK2p2ohzlTtJB2sV6NCNSECCtUq1Kj3CxSq2luXlY8gufF4e9PkCLiwpWFULg38+qKiILgFYe9Lr++07zSur4SXr7zeV5Gj0z5vxt69GVcFt1vI874kS6/0pDIZsWB6crLgzhNI+wRhOrm7Sr5n4HIhWeW5yRJ/EBYuS4+5yUN5Vy9fuewT6GDouQq8qAFDITX4/XmuDF788eTJRQpoD4PTT6nAXA14KVcNhshgBDx16VTokk9oZo4Czf0JiEkgpoCYApJkEPMJwxOiQFONDn8DlrRbuWjRXrWEzWKzlOhnLNfHWN5S2Va5cndjufLG8uWMpRs0sFmqdMNliRKlS1nIlw2Xxh5kWaVKC0NNLiarqdAfZ+LixYsX77f9BFJt17cXqnnkAAAAAElFTkSuQmCC" }), Vt.setProps(Vt.group([Vt.el("path", { d: "M23.513 11.17h-.73c-.319 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479", fill: "#7C87A5" }), Vt.el("path", { d: "M24.91 11.17h-.73c-.319 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z" }), Vt.el("path", { d: "M9.54 11.17h-.728c-.32 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.257-.479-.577-.479", fill: "#7C87A5" }), Vt.el("path", { d: "M10.938 11.17h-.729c-.32 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.257-.479-.577-.479z" }), Vt.el("path", { d: "M26.305 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479", fill: "#7C87A5" }), Vt.el("path", { d: "M27.702 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479z" }), Vt.el("path", { d: "M29.101 11.17h-.73c-.318 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479", fill: "#7C87A5" }), Vt.el("path", { d: "M30.498 11.17h-.73c-.318 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z" }), Vt.el("path", { d: "M17.925 11.17h-.73c-.319 0-.577.213-.577.478v1.08h1.883v-1.08c0-.265-.258-.479-.576-.479", fill: "#7C87A5" }), Vt.el("path", { d: "M19.322 11.17h-.73c-.319 0-.577.213-.577.478v1.08h1.883v-1.08c0-.265-.258-.479-.576-.479z" }), Vt.el("path", { d: "M20.717 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479", fill: "#7C87A5" }), Vt.el("path", { d: "M22.114 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479z" }), Vt.el("path", { d: "M15.129 11.17H14.4c-.32 0-.576.213-.576.478v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479", fill: "#7C87A5" }), Vt.el("path", { d: "M16.526 11.17h-.729c-.32 0-.576.213-.576.478v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479z" }), Vt.el("path", { d: "M12.335 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.882v-1.08c0-.265-.26-.479-.577-.479", fill: "#7C87A5" }), Vt.el("path", { d: "M13.732 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479z" }), Vt.el("path", { d: "M31.893 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479", fill: "#7C87A5" }), Vt.el("path", { d: "M33.29 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479z" }), Vt.el("path", { d: "M33.647 28.407H15.765V12.533h17.882c.52 0 .941.445.941.992v13.89c0 .547-.421.992-.94.992", fill: "#FFF" }), Vt.el("path", { d: "M33.647 28.407H15.765V12.533h17.882c.52 0 .941.445.941.992v13.89c0 .547-.421.992-.94.992z", stroke: "#7C87A5", "stroke-width": ".893" }), Vt.el("path", { d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z", fill: "#FFF" }), Vt.el("path", { d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z", stroke: "#7C87A5", "stroke-width": ".893" }), Vt.el("path", { d: "M12.941 12.533H11.06c-1.559 0-2.824 1.334-2.824 2.977v1.986c0 .547.422.992.941.992H12c.52 0 .941-.445.941-.992V15.51c0-1.643 1.265-2.977 2.824-2.977h.94-3.764z", fill: "#4C97FF" }), Vt.el("path", { d: "M12.941 12.533H11.06c-1.559 0-2.824 1.334-2.824 2.977v1.986c0 .547.422.992.941.992H12c.52 0 .941-.445.941-.992V15.51c0-1.643 1.265-2.977 2.824-2.977h.94-3.764z", stroke: "#3D79CC", "stroke-width": ".893" }), Vt.el("path", { stroke: "#7C87A5", "stroke-width": ".893", d: "M4.47 20.474h27.961l2.157 2.974" }), Vt.el("path", { d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z", stroke: "#7C87A5", "stroke-width": ".893" }), Vt.el("path", { d: "M21.307 18.964h-.73c-.319 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479", fill: "#7C87A5" }), Vt.el("path", { d: "M21.307 18.964h-.73c-.319 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z" }), Vt.el("path", { d: "M24.178 18.964h-.728c-.32 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.578-.479", fill: "#7C87A5" }), Vt.el("path", { d: "M24.178 18.964h-.728c-.32 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.578-.479z" }), Vt.el("path", { d: "M27.051 18.964h-.73c-.318 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.257-.479-.576-.479", fill: "#7C87A5" }), Vt.el("path", { d: "M27.051 18.964h-.73c-.318 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.257-.479-.576-.479z" }), Vt.el("path", { d: "M29.923 18.964h-.729c-.32 0-.576.214-.576.479v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479", fill: "#7C87A5" }), Vt.el("path", { d: "M29.923 18.964h-.729c-.32 0-.576.214-.576.479v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479z" }), Vt.el("path", { d: "M33.647 28.407H15.765V20.47H32.43l2.157 2.978v3.966c0 .548-.421.993-.94.993", fill: "#E6E7E8" }), Vt.el("path", { d: "M33.647 28.407H15.765V20.47H32.43l2.157 2.978v3.966c0 .548-.421.993-.94.993z", stroke: "#7C87A5", "stroke-width": ".893" }), Vt.el("path", { d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V20.47h11.294v7.937z", fill: "#E6E7E8" }), Vt.el("path", { d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V20.47h11.294v7.937z", stroke: "#7C87A5", "stroke-width": ".893" }), Vt.el("path", { fill: "#E6E7E8", d: "M19.53 24.438h11.294V20.47H19.529z" }), Vt.el("path", { stroke: "#7C87A5", "stroke-width": ".893", d: "M19.53 24.438h11.294V20.47H19.529zm12.902-3.964l2.157-2.794" })]), { id: "sb3-wedoBlock", fill: "none" }), Vt.setProps(Vt.group([Vt.el("rect", { stroke: "#7C87A5", fill: "#FFF", x: ".5", y: "3.59", width: "28", height: "25.81", rx: "1" }), Vt.el("rect", { stroke: "#7C87A5", fill: "#E6E7E8", x: "2.5", y: ".5", width: "24", height: "32", rx: "1" }), Vt.el("path", { stroke: "#7C87A5", fill: "#FFF", d: "M2.5 14.5h24v13h-24z" }), Vt.el("path", { d: "M14.5 10.5v4", stroke: "#7C87A5", fill: "#E6E7E8" }), Vt.el("rect", { fill: "#414757", x: "4.5", y: "2.5", width: "20", height: "10", rx: "1" }), Vt.el("rect", { fill: "#7C87A5", opacity: ".5", x: "13.5", y: "20.13", width: "2", height: "2", rx: ".5" }), Vt.el("path", { d: "M9.06 20.13h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.5a1 1 0 0 1 0-2zM19.93 22.13h-1.51a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1.5a1 1 0 0 1 .01 2zM8.23 17.5H5a.5.5 0 0 1-.5-.5v-2.5h6l-1.85 2.78a.51.51 0 0 1-.42.22zM18.15 18.85l-.5.5a.49.49 0 0 0-.15.36V20a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5v-.29a.49.49 0 0 0-.15-.36l-.5-.5a.51.51 0 0 1 0-.71l1.51-1.49a.47.47 0 0 1 .35-.15h3.58a.47.47 0 0 1 .35.15l1.51 1.49a.51.51 0 0 1 0 .71zM10.85 23.45l.5-.5a.49.49 0 0 0 .15-.36v-.29a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.29a.49.49 0 0 0 .15.36l.5.5a.5.5 0 0 1 0 .7l-1.51 1.5a.47.47 0 0 1-.35.15h-3.58a.47.47 0 0 1-.35-.15l-1.51-1.5a.5.5 0 0 1 0-.7z", fill: "#7C87A5", opacity: ".5" }), Vt.el("path", { d: "M21.5 27.5h5v4a1 1 0 0 1-1 1h-4v-5z", stroke: "#CC4C23", fill: "#F15A29" })]), { transform: "translate(5.5 3.5)", id: "sb3-ev3Block" }), Vt.setProps(Vt.group([Vt.el("path", { d: "M35 28H5a1 1 0 0 1-1-1V12c0-.6.4-1 1-1h30c.5 0 1 .4 1 1v15c0 .5-.5 1-1 1z", fill: "#fff" }), Vt.el("path", { fill: "red", d: "M4 25h32v2.7H4zm9-1h-2.2a1 1 0 0 1-1-1v-9.7c0-.6.4-1 1-1H13c.6 0 1 .4 1 1V23c0 .6-.5 1-1 1z" }), Vt.el("path", { fill: "red", d: "M6.1 19.3v-2.2c0-.5.4-1 1-1h9.7c.5 0 1 .5 1 1v2.2c0 .5-.5 1-1 1H7.1a1 1 0 0 1-1-1z" }), Vt.el("circle", { fill: "red", cx: "22.8", cy: "18.2", r: "3.4" }), Vt.el("circle", { fill: "red", cx: "30.6", cy: "18.2", r: "3.4" }), Vt.el("path", { fill: "red", d: "M4.2 27h31.9v.7H4.2z" }), Vt.el("circle", { fill: "#e0e0e0", cx: "22.8", cy: "18.2", r: "2.3" }), Vt.el("circle", { fill: "#e0e0e0", cx: "30.6", cy: "18.2", r: "2.3" }), Vt.el("path", { fill: "#e0e0e0", d: "M12.5 22.9h-1.2c-.3 0-.5-.2-.5-.5V14c0-.3.2-.5.5-.5h1.2c.3 0 .5.2.5.5v8.4c0 .3-.2.5-.5.5z" }), Vt.el("path", { fill: "#e0e0e0", d: "M7.2 18.7v-1.2c0-.3.2-.5.5-.5h8.4c.3 0 .5.2.5.5v1.2c0 .3-.2.5-.5.5H7.7c-.3 0-.5-.2-.5-.5zM4 26h32v2H4z" }), Vt.el("path", { stroke: "#666", "stroke-width": ".5", d: "M35.2 27.9H4.8a1 1 0 0 1-1-1V12.1c0-.6.5-1 1-1h30.5c.5 0 1 .4 1 1V27a1 1 0 0 1-1.1.9z" }), Vt.el("path", { stroke: "#666", "stroke-width": ".5", d: "M35.2 27.9H4.8a1 1 0 0 1-1-1V12.1c0-.6.5-1 1-1h30.5c.5 0 1 .4 1 1V27a1 1 0 0 1-1.1.9z" })]), { id: "sb3-makeymakeyBlock", fill: "none" }), Vt.el("image", { id: "sb3-gdxforBlock", width: "40px", height: "40px", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABAlBMVEUAAAABAQEAAAB9h6YAAAAAAAAAAAB8iKZ7iKaAjKvm5+h+iqhcXFxGR0d8iKbj5OV9iKZ8h6be3+Db3d19h6acnJ0AAAB7nrDh4uPh4uN9iabZ2tt9iKbX19nJycnExsZ8iKe+wMC7vL2Eka/g4ePU1dV8iKZ9iKZ9iKd+iKitra2RkZGLjo5wcHCLi7l0oqJV//9csdZ8h6WFkq//vwDm5+iEka79vgJ6iql9iaaHk6tgq9Btm71+iadmo8dzk7OCj6yAjKp/iqhiqc1qnsB4jKtgrNFwl7d1tLTgtCxpocN0krJ2j65ossWNtZSbt4LAulHWsDnasTTuvhXzvg9zk7TzqAfaAAAAMXRSTlMAJiLoFBwI8q4a+0c4M/nr3tnQwKxYDAnk2726tbGMh4J9dinXq56ddG9nT01ACwsDk/+seAAAAidJREFUWMPt2Olu2kAUhuE5NvuaBAhZm7TpvufgMXaBbmAghOzp/d9KD7RW6yaqPeL7YVV9/471aBgfCXnUH7ULNhtkF96qv1dgwwoxoM08cDsJcwfMdgwonoiJPRFjQXkscQM3Adhxk4NuJwkoDx0nSp5NDTiae958NEaBwzkvC4YYcOxx7fCoeJhnrwcBv7H9TklFm08R4JD5SEkiMg8B4IjXwsV1HgHAPu+EizsQcMbr2B0OufZz7X0NcIZSwC9+rD3nADI2/fCtrHEfAvZ8Liqp6PuIwZZO+ZmSnspcY8AZ55WU5xkElDwuK1Vm7xgFTjhfLud5AgPHAUvBGARKvYnnTXpp/gvAg9PLyykSPLt1nNszIHjuSOdAcNp1nO4UeYYXNzcX0UH62P+0AnjH8lgCgL8s/+uXzwZgrOV2JAMwxpIMwRjLHIyxzMEYyxyMWgAwYiHAzm99iLQ6eOJEul4d7Ea6WhG8W7rAE+fertHgVXp+clpB9Oet64M/wH2TKwI/FrRFTH6JIZ6NvmZpxoDtptlFULOtzGPWy+4/r//gvwKGgcC90NtTqIg2dIuyClaWDvTjKlDMLba4UaUMcIuVbd0gyiGwjGVlFuKWfkQZhEfSQnypd8mCvOHGvkA5quo6EQSs6yrlNumN3obs0KKGHJ70QD+hLOQMW7r0sFI5KJVeY+bGkr1JopKlEG0StXbrW/uvQGMookXLLPFAZYTMJju/7z6rRW1MZcnIAAAAAElFTkSuQmCC" }), Vt.el("image", { id: "sb3-boostBlock", width: "40px", height: "40px", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAKlBMVEUAAAD///98h6Xm5+iVnrb/Zhq+w9L5hk73+Pnf4eSQmbLr7Ozo39vp184hSCf6AAAAAXRSTlMAQObYZgAAAOFJREFUSMftlDEOgjAUhonhAi1sLvIk7NDJDTYu0LhzBzcXruHoDTyFB/BCNi30KU3InzioSb++hAS+vPfKa5pEIpHvk7a8gpf8ISWINtlg4i7ZFOKVTBlqsUR+ItYZJG7VzQQgMqGYd7zWRArpULEAe5Q/J9JMj4rluC7uleNw7TFRXcoREDnlinjX57eUsvRTn8+AE0/6OKV0g5buYTTyWFFr/XAp3aDzed4yFJWnKbhPbtaXXohDNYlDJWz4zSxEokkkEjb496AiVtqAbIYgYNGWBmhgES+NX6SRSORfeAJMWajr95DdqQAAAABJRU5ErkJggg==" })];
  }
  static makeOriginalIcons() {
    return [..._bt.makeCommonIcons(), Vt.setProps(Vt.group([Vt.el("path", { d: "M12.71 2.44A2.41 2.41 0 0 1 12 4.16L8.08 8.08a2.45 2.45 0 0 1-3.45 0L.72 4.16A2.42 2.42 0 0 1 0 2.44 2.48 2.48 0 0 1 .71.71C1 .47 1.43 0 6.36 0s5.39.46 5.64.71a2.44 2.44 0 0 1 .71 1.73z", fill: "#231f20", opacity: ".1" }), Vt.el("path", { d: "M6.36 7.79a1.43 1.43 0 0 1-1-.42L1.42 3.45a1.44 1.44 0 0 1 0-2c.56-.56 9.31-.56 9.87 0a1.44 1.44 0 0 1 0 2L7.37 7.37a1.43 1.43 0 0 1-1.01.42z", fill: "#fff" })]), { id: "sb3-dropdownArrow", transform: "scale(0.94413847364)" }), Vt.setProps(Vt.group([Vt.el("path", { d: "M22.68 12.2a1.6 1.6 0 0 1-1.27.63h-7.69a1.59 1.59 0 0 1-1.16-2.58l1.12-1.41a4.82 4.82 0 0 0-3.14-.77 4.31 4.31 0 0 0-2 .8A4.25 4.25 0 0 0 7.2 10.6a5.06 5.06 0 0 0 .54 4.62A5.58 5.58 0 0 0 12 17.74a2.26 2.26 0 0 1-.16 4.52A10.25 10.25 0 0 1 3.74 18a10.14 10.14 0 0 1-1.49-9.22 9.7 9.7 0 0 1 2.83-4.14A9.92 9.92 0 0 1 9.66 2.5a10.66 10.66 0 0 1 7.72 1.68l1.08-1.35a1.57 1.57 0 0 1 1.24-.6 1.6 1.6 0 0 1 1.54 1.21l1.7 7.37a1.57 1.57 0 0 1-.26 1.39z", fill: "#3d79cc" }), Vt.el("path", { d: "M21.38 11.83h-7.61a.59.59 0 0 1-.43-1l1.75-2.19a5.9 5.9 0 0 0-4.7-1.58 5.07 5.07 0 0 0-4.11 3.17A6 6 0 0 0 7 15.77a6.51 6.51 0 0 0 5 2.92 1.31 1.31 0 0 1-.08 2.62 9.3 9.3 0 0 1-7.35-3.82 9.16 9.16 0 0 1-1.4-8.37A8.51 8.51 0 0 1 5.71 5.4a8.76 8.76 0 0 1 4.11-1.92 9.71 9.71 0 0 1 7.75 2.07l1.67-2.1a.59.59 0 0 1 1 .21L22 11.08a.59.59 0 0 1-.62.75z", fill: "#fff" })]), { id: "sb3-turnRight" }), Vt.setProps(Vt.group([Vt.el("path", { d: "M20.34 18.21a10.24 10.24 0 0 1-8.1 4.22 2.26 2.26 0 0 1-.16-4.52 5.58 5.58 0 0 0 4.25-2.53 5.06 5.06 0 0 0 .54-4.62A4.25 4.25 0 0 0 15.55 9a4.31 4.31 0 0 0-2-.8 4.82 4.82 0 0 0-3.15.8l1.12 1.41A1.59 1.59 0 0 1 10.36 13H2.67a1.56 1.56 0 0 1-1.26-.63A1.54 1.54 0 0 1 1.13 11l1.72-7.43A1.59 1.59 0 0 1 4.38 2.4a1.57 1.57 0 0 1 1.24.6L6.7 4.35a10.66 10.66 0 0 1 7.72-1.68A9.88 9.88 0 0 1 19 4.81 9.61 9.61 0 0 1 21.83 9a10.08 10.08 0 0 1-1.49 9.21z", fill: "#3d79cc" }), Vt.el("path", { d: "M19.56 17.65a9.29 9.29 0 0 1-7.35 3.83 1.31 1.31 0 0 1-.08-2.62 6.53 6.53 0 0 0 5-2.92 6.05 6.05 0 0 0 .67-5.51 5.32 5.32 0 0 0-1.64-2.16 5.21 5.21 0 0 0-2.48-1A5.86 5.86 0 0 0 9 8.84L10.74 11a.59.59 0 0 1-.43 1H2.7a.6.6 0 0 1-.6-.75l1.71-7.42a.59.59 0 0 1 1-.21l1.67 2.1a9.71 9.71 0 0 1 7.75-2.07 8.84 8.84 0 0 1 4.12 1.92 8.68 8.68 0 0 1 2.54 3.72 9.14 9.14 0 0 1-1.33 8.36z", fill: "#fff" })]), { id: "sb3-turnLeft" }), Vt.setProps(Vt.group([Vt.el("path", { d: "M23.3 11c-.3.6-.9 1-1.5 1h-1.6c-.1 1.3-.5 2.5-1.1 3.6-.9 1.7-2.3 3.2-4.1 4.1-1.7.9-3.6 1.2-5.5.9-1.8-.3-3.5-1.1-4.9-2.3-.7-.7-.7-1.9 0-2.6.6-.6 1.6-.7 2.3-.2H7c.9.6 1.9.9 2.9.9s1.9-.3 2.7-.9c1.1-.8 1.8-2.1 1.8-3.5h-1.5c-.9 0-1.7-.7-1.7-1.7 0-.4.2-.9.5-1.2l4.4-4.4c.7-.6 1.7-.6 2.4 0L23 9.2c.5.5.6 1.2.3 1.8z", fill: "#cf8b17" }), Vt.el("path", { d: "M21.8 11h-2.6c0 1.5-.3 2.9-1 4.2-.8 1.6-2.1 2.8-3.7 3.6-1.5.8-3.3 1.1-4.9.8-1.6-.2-3.2-1-4.4-2.1-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1 1 .7 2.2 1.1 3.4 1.1s2.3-.3 3.3-1c.9-.6 1.6-1.5 2-2.6.3-.9.4-1.8.2-2.8h-2.4c-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.4l4.4-4.4c.3-.3.7-.3.9 0L22 9.8c.3.3.4.6.3.9s-.3.3-.5.3z", fill: "#fff" })]), { id: "sb3-loopArrow" }), Vt.setProps(Vt.group([Vt.el("path", { d: "M28.456 21.675c-.009-.312-.087-.825-.256-1.702-.096-.495-.612-3.022-.753-3.73-.395-1.98-.76-3.92-1.142-6.113-.732-4.223-.693-6.05.344-6.527.502-.23 1.06-.081 1.842.35.413.227 2.181 1.365 2.07 1.296 1.993 1.243 3.463 1.775 4.928 1.549 1.527-.237 2.505-.06 2.877.618.348.635.015 1.416-.729 2.18-1.473 1.516-3.976 2.514-5.849 2.023-.822-.218-1.238-.464-2.38-1.266a9.737 9.737 0 0 0-.095-.066c.047.593.264 1.74.717 3.803.294 1.336 2.079 9.187 2.637 11.674l.002.012c.529 2.637-1.872 4.724-5.235 4.724-3.29 0-6.363-1.988-6.862-4.528-.53-2.64 1.873-4.734 5.233-4.734a8.411 8.411 0 0 1 2.65.437zM11.46 27.666c-.01-.319-.091-.84-.266-1.738-.09-.46-.595-2.937-.753-3.727-.39-1.96-.752-3.892-1.131-6.07-.732-4.224-.692-6.052.344-6.527.502-.23 1.06-.082 1.841.349.414.228 2.181 1.365 2.07 1.296 1.992 1.243 3.461 1.775 4.925 1.549 1.525-.24 2.504-.064 2.876.614.348.635.015 1.415-.728 2.18-1.474 1.517-3.977 2.513-5.847 2.017-.822-.218-1.237-.463-2.38-1.266a9.729 9.729 0 0 0-.094-.065c.047.593.264 1.74.717 3.802.294 1.337 2.078 9.19 2.636 11.675l.003.013c.517 2.638-1.884 4.732-5.234 4.732-3.286 0-6.359-1.993-6.87-4.54-.518-2.639 1.885-4.73 5.242-4.73.904 0 1.802.15 2.65.436z", stroke: "#000", "stroke-opacity": ".1" }), Vt.el("path", { d: "M32.18 25.874C32.636 28.157 30.512 30 27.433 30c-3.07 0-5.923-1.843-6.372-4.126-.458-2.285 1.665-4.136 4.743-4.136.647 0 1.283.084 1.89.234a7 7 0 0 1 .938.302c.87-.02-.104-2.294-1.835-12.229-2.134-12.303 3.06-1.87 8.768-2.753 5.708-.885.076 4.82-3.65 3.844-3.724-.987-4.65-7.153.263 14.738zm-16.998 5.99C15.63 34.148 13.507 36 10.439 36c-3.068 0-5.92-1.852-6.379-4.136-.448-2.284 1.674-4.135 4.751-4.135 1.002 0 1.974.197 2.854.544.822-.055-.15-2.377-1.862-12.228-2.133-12.303 3.059-1.87 8.764-2.753 5.706-.894.076 4.821-3.648 3.834-3.723-.987-4.648-7.152.263 14.738z", fill: "#FFF" })]), { id: "sb3-musicBlock", fill: "none" }), Vt.setProps(Vt.group([Vt.el("path", { d: "M8.753 34.602l-4.251 1.779 1.784-4.236c1.218-2.892 2.907-5.423 5.03-7.538L31.066 4.93c.846-.842 2.65-.41 4.032.967 1.38 1.375 1.816 3.173.97 4.015L16.318 29.59c-2.123 2.116-4.664 3.799-7.565 5.012", fill: "#FFF" }), Vt.el("path", { d: "M29.41 6.111s-4.45-2.379-8.202 5.771c-1.734 3.766-4.35 1.546-4.35 1.546" }), Vt.el("path", { d: "M36.42 8.825c0 .463-.14.873-.432 1.164l-9.335 9.301c.282-.29.41-.668.41-1.12 0-.874-.507-1.963-1.406-2.868-1.362-1.358-3.147-1.8-4.002-.99L30.99 5.01c.844-.84 2.65-.41 4.035.96.898.904 1.396 1.982 1.396 2.855M10.515 33.774a23.74 23.74 0 0 1-1.764.83L4.5 36.382l1.786-4.235c.258-.604.529-1.186.833-1.757.69.183 1.449.625 2.109 1.282.659.658 1.102 1.412 1.287 2.102", fill: "#4C97FF" }), Vt.el("path", { d: "M36.498 8.748c0 .464-.141.874-.433 1.165l-19.742 19.68c-2.131 2.111-4.673 3.793-7.572 5.01L4.5 36.381l.974-2.317 1.925-.808c2.899-1.218 5.441-2.899 7.572-5.01l19.742-19.68c.292-.292.432-.702.432-1.165 0-.647-.27-1.4-.779-2.123.249.172.498.377.736.614.898.905 1.396 1.983 1.396 2.856", fill: "#575E75", opacity: ".15" }), Vt.el("path", { d: "M18.45 12.831a.904.904 0 1 1-1.807 0 .904.904 0 0 1 1.807 0z", fill: "#575E75" })]), { id: "sb3-penBlock", stroke: "#575E75", fill: "none", "stroke-linejoin": "round" }), Vt.setProps(Vt.group([Vt.el("circle", { opacity: 0.25, cx: 32, cy: 16, r: 4.5 }), Vt.el("circle", { opacity: 0.5, cx: 32, cy: 12, r: 4.5 }), Vt.el("circle", { opacity: 0.75, cx: 32, cy: 8, r: 4.5 }), Vt.el("circle", { cx: 32, cy: 4, r: 4.5 }), Vt.el("path", { d: "M22.672 4.42l-6.172 4V6.1c0-2.01-1.563-3.6-3.5-3.6H4.1C2.076 2.5.5 4.076.5 6.1V14c0 1.927 1.584 3.512 3.6 3.6H13c1.902 0 3.5-1.653 3.5-3.6v-2.283l6.257 3.754.097.075c.02.02.098.054.146.054.267 0 .5-.217.5-.5V4.8c0 .037-.056-.094-.129-.243-.145-.242-.43-.299-.7-.137z", fill: "#4D4D4D", "stroke-linejoin": "round" })]), { id: "sb3-videoBlock", stroke: "#000", fill: "#FFF", "stroke-opacity": 0.15 }), Vt.setProps(Vt.group([Vt.el("circle", { cx: 8.35, cy: 9.65, r: 0.97, fill: "#FFF" }), Vt.el("circle", { cx: 14.19, cy: 9.65, r: 0.97, fill: "#FFF" }), Vt.el("path", { d: "M11.27 4.14c-3.94 0-7.13 3.19-7.13 7.13s3.19 7.13 7.13 7.13 7.13-3.19 7.13-7.13-3.19-7.13-7.13-7.13m0 1.3c3.22 0 5.84 2.61 5.84 5.84s-2.61 5.84-5.84 5.84-5.84-2.61-5.84-5.84 2.61-5.84 5.84-5.84", fill: "#FFF" }), Vt.el("path", { d: "M17.57 13.88c.57-.15 1.02-.6 1.17-1.17l.35-1.3c.16-.61 1.04-.61 1.2 0l.35 1.3c.15.57.6 1.02 1.18 1.17l1.3.35c.61.16.61 1.04 0 1.2l-1.3.35c-.57.15-1.02.6-1.18 1.17l-.35 1.3c-.17.62-1.04.62-1.2 0l-.35-1.3c-.15-.57-.6-1.02-1.17-1.17l-1.3-.35c-.61-.17-.61-1.04 0-1.2l1.3-.35Zm-16-11.43c.43-.12.76-.45.88-.88l.26-.98c.12-.46.78-.46.9 0l.26.98c.12.43.45.76.88.88l.98.26c.46.12.46.78 0 .9l-.98.26c-.43.11-.77.45-.88.88l-.26.98c-.12.46-.78.46-.9 0l-.26-.98a1.26 1.26 0 0 0-.88-.88l-.98-.26c-.46-.12-.46-.78 0-.9z", fill: "#ffbf00", "fill-rule": "evenodd", stroke: "#0b8e69", "stroke-miterlimit": "2", "stroke-width": ".5" }), Vt.el("path", { d: "M12.68 12.53c.2-.3.6-.38.9-.18s.38.6.18.9c-.56.83-1.41 1.26-2.48 1.26s-1.93-.43-2.48-1.26c-.2-.3-.12-.7.18-.9s.7-.12.9.18c.31.46.75.68 1.41.68s1.1-.22 1.41-.68Z", fill: "#FFF" }), Vt.el("path", { d: "M20.89 6.06a.57.57 0 0 1-.57-.57V2.2h-3.31c-.31 0-.57-.25-.57-.57s.25-.57.57-.57h3.88c.31 0 .57.25.57.57v3.86c0 .31-.25.57-.57.57M5.44 21.46H1.59a.57.57 0 0 1-.57-.57v-3.82c0-.31.25-.57.57-.57s.57.25.57.57v3.25h3.28c.31 0 .57.25.57.57s-.25.57-.57.57", fill: "#0b8e69" })]), { id: "sb3-faceSensingBlock", transform: "scale(1.67785234899 1.67785234899)" }), Vt.setProps(Vt.group([Vt.el("path", { d: "M25.644 20.5c-1.667 1.937-4.539 3.429-5.977 3.429a1.25 1.25 0 0 1-.557-.137c-.372-.186-.61-.542-.61-1.03 0-.105.017-.207.05-.308.076-.236.624-.986.727-1.173.27-.484.462-1.075.566-1.865A8.5 8.5 0 0 1 24 3.5h4a8.5 8.5 0 1 1 0 17h-2.356z", fill: "#FFF" }), Vt.el("path", { d: "M15.5 21.67c0-1.016-1.494-1.586-2.387-.782l-2.7 2.163A5.958 5.958 0 0 1 6.7 24.33h-.4c-1.035 0-1.8.69-1.8 1.573v4.235c0 .883.765 1.572 1.8 1.572h.4c1.458 0 2.754.423 3.82 1.287l2.598 2.161c.908.75 2.382.188 2.382-.876V21.67z", fill: "#4D4D4D" })]), { id: "sb3-ttsBlock", stroke: "#000", "stroke-opacity": 0.15 }), Vt.el("image", { id: "sb3-translateBlock", width: "40px", height: "40px", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA21BMVEUAAAAAAAAAAAAAAADS0tIAAABHR0cAAADX19cAAAAAAACkpKRqamq2traurq6WlpbV1dWEhITHx8fPz8/Ly8vDw8O9vb0AAABMTEz////Z2dlXXnVMl//g4ODu7u7m5ub4+PhPmf/x8fH09PT6+vri4uNRmv/r6+1uqv/0+P9Ynv/p8v+rrrphZ33S5f+51v9ho/+1uMKBhpfH3v+Wmqhrcoacxf+Pvv/KzNSgpLGLkKDd6/+rzf9npv/AwsuDtv98s/90rv9jpP9GieeOrtm5ubl2fI7Z4u56otk5hEFfAAAAGXRSTlMAJhgM1wYyHvIkEWpBhXhc5U+uybyhk0YvleQYgwAABDpJREFUWMPtmNl6mzAQhQMCBAYbvLX1GIwxi7e2TtosTdKk+/L+T1QBVoQtJHDby5yLROYTPzOagSM4e9az6oVUrDgKxh39//Bwb+QBkTZ2VL3hypYilKWicpY6gmWcTCbxIoSh0xHjOkZXA4m0rlGcrcBsslcSmrYq4qm2GczmE6Hms6A8W4GQHZ1BTxXweuTCErGz1TEEaTpLymML6HVq87VhIWPRs21yNu679guNXn9hOnWVMUwanzxG0yCTdYQQts195umwJmnUDSatFHQRPaVvljkl4CAuRlWrCfD9uiZEbR+ObrnjfRDhwHUtdAi0gK/vLtts+VqDVfIMjZSmLEycBuD1D4kK8MHc+Ju3/FFQaHdXc4rBU/8NiCE+OJyAIQKuz32qjA7O1xzwqMtiUETAXeRzinZcyoPgsPpDcco3q9WD729WhTI/e1itbriUzwwtqPI0Q5et4ZoA6SDj1pCWOeB44qJ88aOiIB8j/xMH5IiUJwG+jfyHPMCNH20FQEpkPGnbnBeFuI78Fd82VWJCeTyQCzHb3pMCb8VAQhxBCkPKkzf2Z9J9mR9dCxqb3tBO17EoTw4ky0f0VXSnUCGE6LDp1tvlwK0cyNQMJA1DlL3Px8TenvTjpcAN5cD7VVSsoR992c4oS+aGcuDbzxFBfVqvv5L/375DCzeUAXfnOW5TJHudffvdzg3FwPdZvnbX6/LXr+9t3ZCzAAaMNh/X9BdAWzcUm9T2vnrpk91QbqOhLEDeDZuNHkBSX94Nm7ciAJOWAkW8WZIDl1MikAD57ZwceJsDL0VAfsPJwgzzO5cHvsmBb2IJkAlhB5InntlXlJcc8MO00GMzsHTbsMJDdU+hOxIeCfKuXYQu7ZJ5oDmExwPjfAEvyZ9lGyDW9tOWMH6l1z4nLwjrQ572RRugAvMS57mq4MH7czq9Kgpz1QZoDcI4DsHrWUjw4E1JbLeTSZ5z2gLYMTTwBnaOEwBvS1Ke86UUyF7isKpLrIHkSvVGBORdUQx8nFb0KAUy38aSCO8I510hMrhrBOrGEFIYGToPZM+Fn+XwiraiAMh2Uwnb+3DAC9Z/t3TIA2W7MwZkYbH+uZIC+f0jD3z9+vXF05hIAJTtcK3TLIDnMSLnhqeZlDo8eksYqH/3UskWPz7aCuDTX3urMiA5ejHCp7+YV4W9gxBnMFJP/XRwKNT3IEhLZpIGQMp86seNY6LlutRQgrFr6dLPLyELjm44eemIWt6C+JP0A1HffCIm4GDEw2jvpNTxbIwQ0kUTUYUYkgYTSXfMBU1Ee+G6fSwkOlpA/RFcJCR2erRHkllKSjNWhdd+NQbqkJrgunyPhKBIprpeiZyLZtEeCRNWQdlUZPU8yF1yYJ1J1HGGEC5iknS8pN0tRtoDDzTSNDLpqjMu2s4b9fBZg/TcJVHjrA7GSl/JZz7rWbX6A0ZzUfwVEqfrAAAAAElFTkSuQmCC" })];
  }
  static makeHighContrastIcons() {
    return [..._bt.makeCommonIcons(), Vt.setProps(Vt.group([Vt.el("path", { d: "M12.71 2.44A2.41 2.41 0 0 1 12 4.16L8.08 8.08a2.45 2.45 0 0 1-3.45 0L.72 4.16A2.42 2.42 0 0 1 0 2.44 2.48 2.48 0 0 1 .71.71C1 .47 1.43 0 6.36 0s5.39.46 5.64.71a2.44 2.44 0 0 1 .71 1.73z", fill: "#231f20", opacity: ".1" }), Vt.el("path", { d: "M6.36 7.79a1.43 1.43 0 0 1-1-.42L1.42 3.45a1.44 1.44 0 0 1 0-2c.56-.56 9.31-.56 9.87 0a1.44 1.44 0 0 1 0 2L7.37 7.37a1.43 1.43 0 0 1-1.01.42z", fill: "#000" })]), { id: "sb3-dropdownArrow-high-contrast", transform: "scale(0.944)" }), Vt.setProps(Vt.group([Vt.el("path", { d: "M22.68 12.2a1.6 1.6 0 0 1-1.27.63h-7.69a1.59 1.59 0 0 1-1.16-2.58l1.12-1.41a4.82 4.82 0 0 0-3.14-.77 4.31 4.31 0 0 0-2 .8A4.25 4.25 0 0 0 7.2 10.6a5.06 5.06 0 0 0 .54 4.62A5.58 5.58 0 0 0 12 17.74a2.26 2.26 0 0 1-.16 4.52A10.25 10.25 0 0 1 3.74 18a10.14 10.14 0 0 1-1.49-9.22 9.7 9.7 0 0 1 2.83-4.14A9.92 9.92 0 0 1 9.66 2.5a10.66 10.66 0 0 1 7.72 1.68l1.08-1.35a1.57 1.57 0 0 1 1.24-.6 1.6 1.6 0 0 1 1.54 1.21l1.7 7.37a1.57 1.57 0 0 1-.26 1.39z", fill: "#000" }), Vt.el("path", { d: "M21.38 11.83h-7.61a.59.59 0 0 1-.43-1l1.75-2.19a5.9 5.9 0 0 0-4.7-1.58 5.07 5.07 0 0 0-4.11 3.17A6 6 0 0 0 7 15.77a6.51 6.51 0 0 0 5 2.92 1.31 1.31 0 0 1-.08 2.62 9.3 9.3 0 0 1-7.35-3.82 9.16 9.16 0 0 1-1.4-8.37A8.51 8.51 0 0 1 5.71 5.4a8.76 8.76 0 0 1 4.11-1.92 9.71 9.71 0 0 1 7.75 2.07l1.67-2.1a.59.59 0 0 1 1 .21L22 11.08a.59.59 0 0 1-.62.75z", fill: "#000" })]), { id: "sb3-turnRight-high-contrast" }), Vt.setProps(Vt.group([Vt.el("path", { d: "M20.34 18.21a10.24 10.24 0 0 1-8.1 4.22 2.26 2.26 0 0 1-.16-4.52 5.58 5.58 0 0 0 4.25-2.53 5.06 5.06 0 0 0 .54-4.62A4.25 4.25 0 0 0 15.55 9a4.31 4.31 0 0 0-2-.8 4.82 4.82 0 0 0-3.15.8l1.12 1.41A1.59 1.59 0 0 1 10.36 13H2.67a1.56 1.56 0 0 1-1.26-.63A1.54 1.54 0 0 1 1.13 11l1.72-7.43A1.59 1.59 0 0 1 4.38 2.4a1.57 1.57 0 0 1 1.24.6L6.7 4.35a10.66 10.66 0 0 1 7.72-1.68A9.88 9.88 0 0 1 19 4.81 9.61 9.61 0 0 1 21.83 9a10.08 10.08 0 0 1-1.49 9.21z", fill: "#000" }), Vt.el("path", { d: "M19.56 17.65a9.29 9.29 0 0 1-7.35 3.83 1.31 1.31 0 0 1-.08-2.62 6.53 6.53 0 0 0 5-2.92 6.05 6.05 0 0 0 .67-5.51 5.32 5.32 0 0 0-1.64-2.16 5.21 5.21 0 0 0-2.48-1A5.86 5.86 0 0 0 9 8.84L10.74 11a.59.59 0 0 1-.43 1H2.7a.6.6 0 0 1-.6-.75l1.71-7.42a.59.59 0 0 1 1-.21l1.67 2.1a9.71 9.71 0 0 1 7.75-2.07 8.84 8.84 0 0 1 4.12 1.92 8.68 8.68 0 0 1 2.54 3.72 9.14 9.14 0 0 1-1.33 8.36z", fill: "#000" })]), { id: "sb3-turnLeft-high-contrast" }), Vt.setProps(Vt.group([Vt.el("path", { d: "M23.3 11c-.3.6-.9 1-1.5 1h-1.6c-.1 1.3-.5 2.5-1.1 3.6-.9 1.7-2.3 3.2-4.1 4.1-1.7.9-3.6 1.2-5.5.9-1.8-.3-3.5-1.1-4.9-2.3-.7-.7-.7-1.9 0-2.6.6-.6 1.6-.7 2.3-.2H7c.9.6 1.9.9 2.9.9s1.9-.3 2.7-.9c1.1-.8 1.8-2.1 1.8-3.5h-1.5c-.9 0-1.7-.7-1.7-1.7 0-.4.2-.9.5-1.2l4.4-4.4c.7-.6 1.7-.6 2.4 0L23 9.2c.5.5.6 1.2.3 1.8z", fill: "#000" }), Vt.el("path", { d: "M21.8 11h-2.6c0 1.5-.3 2.9-1 4.2-.8 1.6-2.1 2.8-3.7 3.6-1.5.8-3.3 1.1-4.9.8-1.6-.2-3.2-1-4.4-2.1-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1 1 .7 2.2 1.1 3.4 1.1s2.3-.3 3.3-1c.9-.6 1.6-1.5 2-2.6.3-.9.4-1.8.2-2.8h-2.4c-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.4l4.4-4.4c.3-.3.7-.3.9 0L22 9.8c.3.3.4.6.3.9s-.3.3-.5.3z", fill: "#000" })]), { id: "sb3-loopArrow-high-contrast" }), Vt.setProps(Vt.group([Vt.el("path", { d: "M28.456 21.675c-.009-.312-.087-.825-.256-1.702-.096-.495-.612-3.022-.753-3.73-.395-1.98-.76-3.92-1.142-6.113-.732-4.223-.693-6.05.344-6.527.502-.23 1.06-.081 1.842.35.413.227 2.181 1.365 2.07 1.296 1.993 1.243 3.463 1.775 4.928 1.549 1.527-.237 2.505-.06 2.877.618.348.635.015 1.416-.729 2.18-1.473 1.516-3.976 2.514-5.849 2.023-.822-.218-1.238-.464-2.38-1.266a9.737 9.737 0 0 0-.095-.066c.047.593.264 1.74.717 3.803.294 1.336 2.079 9.187 2.637 11.674l.002.012c.529 2.637-1.872 4.724-5.235 4.724-3.29 0-6.363-1.988-6.862-4.528-.53-2.64 1.873-4.734 5.233-4.734a8.411 8.411 0 0 1 2.65.437zM11.46 27.666c-.01-.319-.091-.84-.266-1.738-.09-.46-.595-2.937-.753-3.727-.39-1.96-.752-3.892-1.131-6.07-.732-4.224-.692-6.052.344-6.527.502-.23 1.06-.082 1.841.349.414.228 2.181 1.365 2.07 1.296 1.992 1.243 3.461 1.775 4.925 1.549 1.525-.24 2.504-.064 2.876.614.348.635.015 1.415-.728 2.18-1.474 1.517-3.977 2.513-5.847 2.017-.822-.218-1.237-.463-2.38-1.266a9.729 9.729 0 0 0-.094-.065c.047.593.264 1.74.717 3.802.294 1.337 2.078 9.19 2.636 11.675l.003.013c.517 2.638-1.884 4.732-5.234 4.732-3.286 0-6.359-1.993-6.87-4.54-.518-2.639 1.885-4.73 5.242-4.73.904 0 1.802.15 2.65.436z", stroke: "#000" }), Vt.el("path", { d: "M32.18 25.874C32.636 28.157 30.512 30 27.433 30c-3.07 0-5.923-1.843-6.372-4.126-.458-2.285 1.665-4.136 4.743-4.136.647 0 1.283.084 1.89.234a7 7 0 0 1 .938.302c.87-.02-.104-2.294-1.835-12.229-2.134-12.303 3.06-1.87 8.768-2.753 5.708-.885.076 4.82-3.65 3.844-3.724-.987-4.65-7.153.263 14.738zm-16.998 5.99C15.63 34.148 13.507 36 10.439 36c-3.068 0-5.92-1.852-6.379-4.136-.448-2.284 1.674-4.135 4.751-4.135 1.002 0 1.974.197 2.854.544.822-.055-.15-2.377-1.862-12.228-2.133-12.303 3.059-1.87 8.764-2.753 5.706-.894.076 4.821-3.648 3.834-3.723-.987-4.648-7.152.263 14.738z", fill: "#000" })]), { id: "sb3-musicBlock-high-contrast", fill: "none" }), Vt.setProps(Vt.group([Vt.el("path", { d: "M8.753 34.602l-4.251 1.779 1.784-4.236c1.218-2.892 2.907-5.423 5.03-7.538L31.066 4.93c.846-.842 2.65-.41 4.032.967 1.38 1.375 1.816 3.173.97 4.015L16.318 29.59c-2.123 2.116-4.664 3.799-7.565 5.012", fill: "#FFF" }), Vt.el("path", { d: "M29.41 6.111s-4.45-2.379-8.202 5.771c-1.734 3.766-4.35 1.546-4.35 1.546" }), Vt.el("path", { d: "M36.42 8.825c0 .463-.14.873-.432 1.164l-9.335 9.301c.282-.29.41-.668.41-1.12 0-.874-.507-1.963-1.406-2.868-1.362-1.358-3.147-1.8-4.002-.99L30.99 5.01c.844-.84 2.65-.41 4.035.96.898.904 1.396 1.982 1.396 2.855M10.515 33.774a23.74 23.74 0 0 1-1.764.83L4.5 36.382l1.786-4.235c.258-.604.529-1.186.833-1.757.69.183 1.449.625 2.109 1.282.659.658 1.102 1.412 1.287 2.102", fill: "#4C97FF" }), Vt.el("path", { d: "M36.498 8.748c0 .464-.141.874-.433 1.165l-19.742 19.68c-2.131 2.111-4.673 3.793-7.572 5.01L4.5 36.381l.974-2.317 1.925-.808c2.899-1.218 5.441-2.899 7.572-5.01l19.742-19.68c.292-.292.432-.702.432-1.165 0-.647-.27-1.4-.779-2.123.249.172.498.377.736.614.898.905 1.396 1.983 1.396 2.856", fill: "#0b8e69", opacity: ".15" }), Vt.el("path", { d: "M18.45 12.831a.904.904 0 1 1-1.807 0 .904.904 0 0 1 1.807 0z", fill: "#0b8e69" })]), { id: "sb3-penBlock-high-contrast", stroke: "#0b8e69", fill: "none", "stroke-linejoin": "round" }), Vt.setProps(Vt.group([Vt.el("circle", { opacity: 0.25, cx: 32, cy: 16, r: 4.5 }), Vt.el("circle", { opacity: 0.5, cx: 32, cy: 12, r: 4.5 }), Vt.el("circle", { opacity: 0.75, cx: 32, cy: 8, r: 4.5 }), Vt.el("circle", { cx: 32, cy: 4, r: 4.5 }), Vt.el("path", { d: "M22.672 4.42l-6.172 4V6.1c0-2.01-1.563-3.6-3.5-3.6H4.1C2.076 2.5.5 4.076.5 6.1V14c0 1.927 1.584 3.512 3.6 3.6H13c1.902 0 3.5-1.653 3.5-3.6v-2.283l6.257 3.754.097.075c.02.02.098.054.146.054.267 0 .5-.217.5-.5V4.8c0 .037-.056-.094-.129-.243-.145-.242-.43-.299-.7-.137z", fill: "#000", "stroke-linejoin": "round" })]), { id: "sb3-videoBlock-high-contrast", stroke: "#0b8e69", fill: "#FFF", "stroke-opacity": 0.15 }), Vt.setProps(Vt.group([Vt.el("circle", { fill: "#231f20", cx: 8.35, cy: 9.65, r: 0.97 }), Vt.el("circle", { fill: "#231f20", cx: 14.19, cy: 9.65, r: 0.97 }), Vt.el("path", { d: "M11.27 4.14c-3.94 0-7.13 3.19-7.13 7.13s3.19 7.13 7.13 7.13 7.13-3.19 7.13-7.13-3.19-7.13-7.13-7.13m0 1.3c3.22 0 5.84 2.61 5.84 5.84s-2.61 5.84-5.84 5.84-5.84-2.61-5.84-5.84 2.61-5.84 5.84-5.84", fill: "#231f20" }), Vt.el("path", { d: "M17.57 13.88c.57-.15 1.02-.6 1.17-1.17l.35-1.3c.16-.61 1.04-.61 1.2 0l.35 1.3c.15.57.6 1.02 1.18 1.17l1.3.35c.61.16.61 1.04 0 1.2l-1.3.35c-.57.15-1.02.6-1.18 1.17l-.35 1.3c-.17.62-1.04.62-1.2 0l-.35-1.3c-.15-.57-.6-1.02-1.17-1.17l-1.3-.35c-.61-.17-.61-1.04 0-1.2l1.3-.35Zm-16-11.43c.43-.12.76-.45.88-.88l.26-.98c.12-.46.78-.46.9 0l.26.98c.12.43.45.76.88.88l.98.26c.46.12.46.78 0 .9l-.98.26c-.43.11-.77.45-.88.88l-.26.98c-.12.46-.78.46-.9 0l-.26-.98a1.26 1.26 0 0 0-.88-.88l-.98-.26c-.46-.12-.46-.78 0-.9z", fill: "#ffbf00", "fill-rule": "evenodd", stroke: "#0b8e69", "stroke-miterlimit": "2", "stroke-width": ".5" }), Vt.el("path", { d: "M12.68 12.53c.2-.3.6-.38.9-.18s.38.6.18.9c-.56.83-1.41 1.26-2.48 1.26s-1.93-.43-2.48-1.26c-.2-.3-.12-.7.18-.9s.7-.12.9.18c.31.46.75.68 1.41.68s1.1-.22 1.41-.68Z", fill: "#231f20" }), Vt.el("path", { d: "M20.89 6.06a.57.57 0 0 1-.57-.57V2.2h-3.31c-.31 0-.57-.25-.57-.57s.25-.57.57-.57h3.88c.31 0 .57.25.57.57v3.86c0 .31-.25.57-.57.57M5.44 21.46H1.59a.57.57 0 0 1-.57-.57v-3.82c0-.31.25-.57.57-.57s.57.25.57.57v3.25h3.28c.31 0 .57.25.57.57s-.25.57-.57.57", fill: "#0b8e69" })]), { id: "sb3-faceSensingBlock-high-contrast", transform: "scale(1.67785234899 1.67785234899)" }), Vt.setProps(Vt.group([Vt.el("path", { d: "M25.644 20.5c-1.667 1.937-4.539 3.429-5.977 3.429a1.25 1.25 0 0 1-.557-.137c-.372-.186-.61-.542-.61-1.03 0-.105.017-.207.05-.308.076-.236.624-.986.727-1.173.27-.484.462-1.075.566-1.865A8.5 8.5 0 0 1 24 3.5h4a8.5 8.5 0 1 1 0 17h-2.356z", fill: "#FFF", stroke: "#0b8e69" }), Vt.el("path", { d: "M15.5 21.67c0-1.016-1.494-1.586-2.387-.782l-2.7 2.163A5.958 5.958 0 0 1 6.7 24.33h-.4c-1.035 0-1.8.69-1.8 1.573v4.235c0 .883.765 1.572 1.8 1.572h.4c1.458 0 2.754.423 3.82 1.287l2.598 2.161c.908.75 2.382.188 2.382-.876V21.67z", fill: "#000" })]), { id: "sb3-ttsBlock-high-contrast", "stroke-opacity": 0.15 }), Vt.el("image", { id: "sb3-translateBlock-high-contrast", width: "40px", height: "40px", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxoAAARjCAMAAADfFKLnAAABhlBMVEUAAAALjWkOj2oLjmkAAAAQj2wkmnkYlHILj2kLjmkAAAAAAABsu6VouaIJjmgimncAAAAAAAALjml0v6kAAAAAAAAAAAAATzhjt6A9pogVk28XlHAVk28ZlHEAAAAAAAAAAAANj2oAAAAJj2oAAAAAAAByvahsu6VVsZcqnXwAAAAAAAAAAAAMj2oQkWsAAAAPkGwAAABHqo4AAAAclnMcl3MKj2kXlHIXk3EAAAALj2gAAAD///8AAAB9w6+ExrONyrmHyLWrzv/3+/r8/v6Fx7VpqP/0+fh7s/9Ml//4/PvK59/4+//u9f/l8P/V5v9vrP9an/9Smv/o6OjMzMwrKysDAwPp8//e7P+w0f+axf9xrf9kpf9jpP9ho/9Nl//e3t7E5Nu+4dfT09OUzb2QzLuZmZlMrJKGhoYpnHxlZWVgYGBCQkINDQ30+P/J4P/D3P+11P+Nvf90rv9Jlvby8vLc3Nyl1cik1ce+vr6DxrKlpaWfn58xnJZBpJWJiYl+fn4fHx9PedmHAAAAPHRSTlMAd4OAxg/0wohyDv78+Tj16Ik6+ux+WAb79e7mvbCemW1rZDYXC/n39PTw39u8t7RVNvX11NLDm5qOWx0x5AFdAAAGd0lEQVR42uzbV3faQBCG4XGChMEU4wLujntv6WXXIUAwxd3Gvfea3nv+eQaBcgS5ztV8zwWMfsB7js7uiAAAAAAAAP6fgKfCwRMg1l49OBzqJgC5DLfZO+nQa7oNovq2Ia2rJwhArFZ/QpVI+Fspr57b8BKAUAEzrgpmXhSHjBmgvDGtQwQglKdWFaU27KnWQ0TekEvruvYwAYh08ym3ML0ei8V2NvlnfZofn98gorC2DBKASFYaq8md9MLW1kJ6O7lqp9Hj0qzqFgGIxGlYtjeUepPkwU6D20AZIJidRmxhZnbxtTMN8rpQBshlpzGdTL2dTzjSYJEnBCCVnYaaS++uqb9pAEhnpzGXXFycn1PZo2g0ejpiL410EYBQhTRepnZTs2vz776f+yYd/EG3QQAiWVd+s+nNV/yX+NEQVyXiDS0EIFKNmeAEZlRe9jyuysSDNQQgkrsvo4qOfOofvgoCEMloNWs/cgNTx9FT+7RqaUV/KI7PcFoFYgVG+7iMxpbK+19UwU+tfyENEC/SvK+yAw8cdxy5XO53AmmAdI8bD/qbxh13HMv67Ex/RhogXVfzvQ6DHGlc6L09fYk0AJgjjalrza7fIw2QrjtSksZXfXFycqm/IQ0QrrPK5XWmcbWylD+/vUIaIFtnldaFNjx+lbd8qNjhMq78QDQug7l6eAwE46pMxsSiCAhVpy1hYu7y9cKM300AMoXbOQ5XyEvMaAn6opbjKQ7jkw9L6SBZSOsxe66pqLSMNnIb/hG8TYFk3mqt66nMw4Gs2m+OEIBgE9zGcFtZHeNN/Qe3OwhAsu5HQ3fq2qiU0XG3Cd+GAwAAAAD8YQ8OBAAAAACA/F8bQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYQ8OBAAAAACA/F8bQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV2IMDAQAAAAAg/9dGUFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUV9uBAAAAAAADI/7URVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWFPTgQAAAAAADyf20EVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVhDw4EAAAAAID8XxtBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVXYgwMBAAAAACD/10ZQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRX24EAAAAAAAMj/tRFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYU9OBAAAAAAAPJ/bQRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWEPDgQAAAAAgPxfG0FVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdiDAwEAAAAAIP/XRlBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFfbgQAAAAAAAyP+1EVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVhT04EAAAAAAA8n9tBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYQ8OBAAAAACA/F8bQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV2oNDAgAAAABB/1/7wgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMArKwCvdMdAc1YAAAAASUVORK5CYII=" })];
  }
  static iconName(t8, e2) {
    return "high-contrast" === e2 && mt.has(t8) ? t8 + "-high-contrast" : t8;
  }
  static makeStyle() {
    const t8 = Vt.el("style");
    return t8.appendChild(Vt.cdata(_bt.cssContent)), t8;
  }
  static get defaultFont() {
    return "500 12pt Helvetica Neue, Helvetica, sans-serif";
  }
  static get commentFont() {
    return "400 12pt Helvetica Neue, Helvetica, sans-serif";
  }
};
var { defaultFont: At, commentFont: yt, makeStyle: kt, makeOriginalIcons: wt, makeHighContrastIcons: vt, iconName: St } = bt;
var Ot = class _Ot {
  constructor(t8) {
    Object.assign(this, t8), this.el = null, this.height = 12, this.metrics = null, this.x = 0;
  }
  get isLabel() {
    return true;
  }
  draw(t8) {
    return this.el;
  }
  get width() {
    return this.metrics.width;
  }
  measure() {
    const t8 = this.value, e2 = "sb3-" + this.cls;
    this.el = Vt.text(0, 13.1, t8, { class: "sb3-label " + e2 });
    let s2 = _Ot.metricsCache[e2];
    if (s2 || (s2 = _Ot.metricsCache[e2] = /* @__PURE__ */ Object.create(null)), Object.hasOwnProperty.call(s2, t8)) this.metrics = s2[t8];
    else {
      const e3 = /comment-label/.test(this.cls) ? yt : At;
      this.metrics = s2[t8] = _Ot.measure(t8, e3);
    }
  }
  static measure(t8, e2) {
    const s2 = _Ot.measuring;
    s2.font = e2;
    return { width: s2.measureText(t8).width };
  }
};
Ot.metricsCache = {}, Ot.toMeasure = [];
var Lt = class _Lt {
  constructor(t8) {
    Object.assign(this, t8);
    const e2 = _Lt.icons[this.name];
    if (!e2) throw Error("no info for icon: " + this.name);
    Object.assign(this, e2);
  }
  get isIcon() {
    return true;
  }
  draw(t8) {
    return Vt.symbol("#sb3-" + St(this.name, t8), { width: this.width, height: this.height });
  }
  static get icons() {
    return { greenFlag: { width: 20, height: 21, dy: -1 }, stopSign: { width: 20, height: 20 }, turnLeft: { width: 24, height: 24 }, turnRight: { width: 24, height: 24 }, loopArrow: { width: 24, height: 24 }, addInput: { width: 4, height: 8 }, delInput: { width: 4, height: 8 }, list: { width: 15, height: 18 }, musicBlock: { width: 40, height: 40 }, penBlock: { width: 40, height: 40 }, videoBlock: { width: 40, height: 40, dy: 10 }, faceSensingBlock: { width: 40, height: 40, dy: 3.9932885906 }, ttsBlock: { width: 40, height: 40 }, translateBlock: { width: 40, height: 40 }, wedoBlock: { width: 40, height: 40 }, ev3Block: { width: 40, height: 40 }, microbitBlock: { width: 40, height: 40 }, makeymakeyBlock: { width: 40, height: 40 }, gdxforBlock: { width: 40, height: 40 }, boostBlock: { width: 40, height: 40 } };
  }
};
var Et = class {
  constructor() {
    this.width = 1, this.height = 40, this.x = 0;
  }
  get isLine() {
    return true;
  }
  measure() {
  }
  draw(t8, e2) {
    return Vt.el("line", { class: "sb3-extension-line", "stroke-linecap": "round", x1: 0, y1: 0, x2: 0, y2: 40 });
  }
};
var Tt = class _Tt {
  constructor(t8) {
    Object.assign(this, t8), t8.label && (this.label = Nt(t8.label)), this.isBoolean = "boolean" === this.shape, this.isDropdown = "dropdown" === this.shape, this.isRound = !(this.isBoolean || this.isDropdown), this.x = 0;
  }
  get isInput() {
    return true;
  }
  measure() {
    this.hasLabel && this.label.measure();
  }
  static get shapes() {
    return { string: Vt.pillRect, number: Vt.pillRect, "number-dropdown": Vt.pillRect, color: Vt.pillRect, dropdown: Vt.roundRect, boolean: Vt.pointedRect, stack: Vt.stackRect, reporter: Vt.pillRect };
  }
  draw(t8, e2) {
    let s2, i3, o2;
    this.isBoolean ? s2 = 48 : this.isColor ? s2 = 40 : this.hasLabel ? (i3 = this.label.draw(t8), this.hasArrow ? (o2 = 11, s2 = this.label.width + o2 + 31) : (o2 = this.label.width >= 18 ? 11 : (40 - this.label.width) / 2, s2 = this.label.width + 2 * o2), i3 = Vt.move(o2, 9, i3)) : s2 = this.isInset ? 30 : null, this.width = s2;
    const r2 = this.height = 32, c2 = _Tt.shapes[this.shape](s2, r2);
    Vt.setProps(c2, { class: `${this.isColor ? "" : "sb3-" + e2.info.category} sb3-input sb3-input-${this.shape}` }), this.isColor ? Vt.setProps(c2, { fill: this.value }) : "dropdown" === this.shape ? e2.info.color && Vt.setProps(c2, { fill: e2.info.color, stroke: "rgba(0, 0, 0, 0.2)" }) : "number-dropdown" === this.shape ? (c2.classList.add(`sb3-${e2.info.category}-alt`), e2.info.color && Vt.setProps(c2, { fill: "rgba(0, 0, 0, 0.1)", stroke: "rgba(0, 0, 0, 0.15)" })) : "boolean" === this.shape && (c2.classList.remove("sb3-" + e2.info.category), c2.classList.add(`sb3-${e2.info.category}-dark`), e2.info.color && Vt.setProps(c2, { fill: "rgba(0, 0, 0, 0.15)" }));
    const n2 = Vt.group([c2]);
    return this.hasLabel && n2.appendChild(i3), this.hasArrow && n2.appendChild(Vt.move(s2 - 24, 12.8505114083, Vt.symbol("high-contrast" === t8 ? "#sb3-dropdownArrow-high-contrast" : "#sb3-dropdownArrow", {}))), n2;
  }
};
var Rt = class _Rt {
  constructor(t8) {
    Object.assign(this, t8), this.children = t8.children.map(Nt), this.comment = this.comment ? Nt(this.comment) : null, this.isRound = this.isReporter, this.info = { ...t8.info }, Object.prototype.hasOwnProperty.call(s, this.info.category) && (this.info.category = s[this.info.category]), Object.prototype.hasOwnProperty.call(e, this.info.category) && (this.children.unshift(new Et()), this.children.unshift(new Lt({ name: this.info.category + "Block" })), this.info.category = "extension"), this.x = 0, this.width = null, this.height = null, this.firstLine = null, this.innerWidth = null;
  }
  get isBlock() {
    return true;
  }
  measure() {
    for (const t8 of this.children) t8.measure && t8.measure();
    this.comment && this.comment.measure();
  }
  static get shapes() {
    return { stack: Vt.stackRect, "c-block": Vt.stackRect, "if-block": Vt.stackRect, celse: Vt.stackRect, cend: Vt.stackRect, cap: Vt.capRect, reporter: Vt.pillRect, boolean: Vt.pointedRect, hat: Vt.hatRect, cat: Vt.catHat, "define-hat": Vt.procHatRect, "define-cat": Vt.procCatRect, ring: Vt.pillRect };
  }
  drawSelf(t8, e2, s2, i3) {
    if (i3.length > 1) return Vt.mouthRect(e2, s2, this.isFinal, i3, { class: "sb3-" + this.info.category });
    if ("outline" === this.info.shape) return Vt.setProps(Vt.stackRect(e2, s2), { class: `sb3-${this.info.category} sb3-${this.info.category}-alt` });
    if (this.isRing) {
      const t9 = this.children[0];
      if (t9 && (t9.isInput || t9.isBlock || t9.isScript)) return Vt.roundRect(e2, s2, { class: "sb3-" + this.info.category });
    }
    const o2 = _Rt.shapes[this.info.shape];
    if (!o2) throw Error("no shape func: " + this.info.shape);
    return o2(e2, s2, { class: "sb3-" + this.info.category });
  }
  static get padding() {
    return { hat: [24, 8, 17], cat: [24, 8, 49], "define-hat": [20, 16, 0], "define-cat": [20, 16, 0], null: [4, 4, 0] };
  }
  horizontalPadding(t8) {
    if (this.isRound) {
      if (t8.isIcon) return 16;
      if (t8.isLabel) return 12;
      if (t8.isDropdown) return 12;
      if (t8.isBoolean) return 12;
      if (t8.isRound) return 4;
    } else if (this.isBoolean) {
      if (t8.isIcon) return 24;
      if (t8.isLabel) return 20;
      if (t8.isDropdown) return 20;
      if (t8.isRound && t8.isBlock) return 24;
      if (t8.isRound) return 20;
      if (t8.isBoolean) return 8;
    }
    return 8;
  }
  marginBetween(t8, e2) {
    return t8.isLabel && e2.isLabel ? 4.447998046875 : 8;
  }
  draw(t8) {
    const e2 = "define-hat" === this.info.shape || "define-cat" === this.info.shape;
    let s2 = this.children;
    const i3 = this.isCommand, o2 = _Rt.padding[this.info.shape] || _Rt.padding.null, r2 = o2[0], c2 = o2[1];
    let n2 = "cat" === this.info.shape ? 16 : 0;
    const a2 = function(t9) {
      this.y = t9, this.width = 0, this.height = i3 ? 40 : 32, this.children = [];
    };
    let l2 = 0, h2 = 0, p2 = new a2(n2);
    const d2 = () => {
      0 === f2.length ? p2.height += r2 + c2 : (p2.height -= 11, p2.y -= 2), n2 += p2.height, f2.push(p2);
    };
    if (this.info.isRTL) {
      let t9 = 0;
      const e3 = () => {
        s2 = s2.slice(0, t9).concat(s2.slice(t9, i4).reverse()).concat(s2.slice(i4));
      };
      let i4;
      for (i4 = 0; i4 < s2.length; i4++) s2[i4].isScript && (e3(), t9 = i4 + 1);
      t9 < i4 && e3();
    }
    const f2 = [];
    let u2, g2;
    for (let e3 = 0; e3 < s2.length; e3++) {
      const i4 = s2[e3];
      if (i4.el = i4.draw(t8, this), i4.isScript && this.isCommand) this.hasScript = true, d2(), i4.y = n2 - 1, f2.push(i4), h2 = Math.max(h2, Math.max(1, i4.width)), i4.height = Math.max(29, i4.height + 3) - 2, n2 += i4.height, p2 = new a2(n2), u2 = null;
      else if (i4.isArrow) p2.children.push(i4), u2 = i4;
      else {
        if (f2.length || (g2 = i4), u2 && (p2.width += this.marginBetween(u2, i4)), null != s2[0]) {
          const t9 = 48 - this.horizontalPadding(s2[0]);
          (this.isCommand || this.isOutline) && !i4.isLabel && !i4.isIcon && p2.width < t9 && (p2.width = t9);
        }
        i4.isIcon && 0 === e3 && this.isCommand && (p2.height = Math.max(p2.height, i4.height + 8)), i4.x = p2.width, p2.width += i4.width, l2 = Math.max(l2, p2.width), i4.isLabel || (p2.height = Math.max(p2.height, i4.height)), p2.children.push(i4), u2 = i4;
      }
    }
    d2();
    let V2 = s2.length ? this.horizontalPadding(s2[0]) : 0;
    l2 += V2 + (s2.length ? this.horizontalPadding(g2) : 0);
    const m2 = l2;
    l2 = Math.max(this.hasScript ? 160 : this.isHat ? 100 : this.isCommand || this.isOutline ? 64 : this.isReporter ? 48 : 0, l2), this.isReporter && (V2 += (l2 - m2) / 2), this.height = n2, this.width = h2 ? Math.max(l2, 15 + h2) : l2, this.firstLine = f2[0], this.innerWidth = l2;
    const b2 = [];
    for (let t9 = 0; t9 < f2.length; t9++) {
      const s3 = f2[t9];
      if (s3.isScript) {
        b2.push(Vt.move(16, s3.y, s3.el));
        continue;
      }
      const i4 = s3.height;
      for (let o3 = 0; o3 < s3.children.length; o3++) {
        const n3 = s3.children[o3];
        if (n3.isArrow) {
          b2.push(Vt.move(l2 - 32, this.height - 28, n3.el));
          continue;
        }
        let a3 = r2 + (i4 - n3.height - r2 - c2) / 2;
        n3.isLabel && 0 === t9 ? a3 -= 1 : e2 && n3.isLabel ? a3 += 3 : n3.isIcon && (a3 += 0 | n3.dy, this.isCommand && 0 === t9 && 0 === o3 && (a3 += 4));
        let h3 = V2 + n3.x;
        n3.dx && (h3 += n3.dx), b2.push(Vt.move(h3, s3.y + a3 | 0, n3.el));
      }
    }
    const A2 = this.drawSelf(t8, l2, this.height, f2);
    b2.splice(0, 0, A2), this.info.color && Vt.setProps(A2, { fill: this.info.color, stroke: "rgba(0, 0, 0, 0.2)" });
    const y2 = Vt.group(b2);
    return "define-cat" === this.info.shape ? (this.height += 16, Vt.group([Vt.move(0, 16, y2)])) : y2;
  }
};
var Ct = class _Ct {
  constructor(t8) {
    Object.assign(this, t8), this.label = Nt(t8.label), this.width = null;
  }
  get isComment() {
    return true;
  }
  static get lineLength() {
    return 12;
  }
  get height() {
    return 20;
  }
  measure() {
    this.label.measure();
  }
  draw(t8) {
    const e2 = this.label.draw(t8);
    return this.width = this.label.width + 16, Vt.group([Vt.commentLine(this.hasBlock ? _Ct.lineLength : 0, 6), Vt.commentRect(this.width, this.height, { class: "sb3-comment" }), Vt.move(8, 4, e2)]);
  }
};
var Mt = class {
  constructor(t8) {
    Object.assign(this, t8), this.child = Nt(t8.child), this.width = null, this.height = null, this.y = 0;
  }
  get isGlow() {
    return true;
  }
  measure() {
    this.child.measure();
  }
  drawSelf(t8) {
    const e2 = this.child;
    let s2;
    const i3 = this.width, o2 = this.height - 1;
    return s2 = e2.isScript ? !e2.isEmpty && e2.blocks[0].isHat ? Vt.hatRect(i3, o2) : e2.isFinal ? Vt.capRect(i3, o2) : Vt.stackRect(i3, o2) : e2.drawSelf(t8, i3, o2, []), Vt.setProps(s2, { class: "sb3-diff sb3-diff-ins" });
  }
  draw(t8) {
    const e2 = this.child, s2 = e2.isScript ? e2.draw(t8, true) : e2.draw(t8);
    return this.width = e2.width, this.height = e2.isBlock && e2.firstLine.height || e2.height, Vt.group([s2, this.drawSelf(t8)]);
  }
};
var It = class {
  constructor(t8) {
    Object.assign(this, t8), this.blocks = t8.blocks.map(Nt), this.y = 0;
  }
  get isScript() {
    return true;
  }
  measure() {
    for (const t8 of this.blocks) t8.measure();
  }
  draw(t8, e2) {
    var _a;
    const s2 = [];
    let i3 = 1;
    this.width = 0;
    for (const o3 of this.blocks) {
      const r2 = e2 ? 0 : 2, c2 = o3.draw(t8);
      s2.push(Vt.move(r2, i3, c2)), this.width = Math.max(this.width, o3.width);
      if ("-" === (o3.diff || ((_a = o3.info) == null ? void 0 : _a.diff))) {
        const t9 = o3.width, e3 = o3.firstLine.height || o3.height;
        s2.push(Vt.move(r2, i3 + e3 / 2 + 1, Vt.strikethroughLine(t9))), this.width = Math.max(this.width, o3.width);
      }
      i3 += o3.height;
      const n2 = o3.comment;
      if (n2) {
        const e3 = o3.firstLine, r3 = o3.innerWidth + 2 + Ct.lineLength, c3 = Rt.padding[o3.info.shape] || Rt.padding.null, a2 = i3 - o3.height + (e3.height - c3[2]) / 2 + c3[2], l2 = n2.draw(t8);
        s2.push(Vt.move(r3, a2 - n2.height / 2, l2)), this.width = Math.max(this.width, r3 + n2.width);
      }
    }
    const o2 = this.blocks[this.blocks.length - 1];
    return this.height = i3 + 1, e2 || this.isFinal || (this.height += o2.hasPuzzle ? 8 : 0), !e2 && o2.isGlow && (this.height += 7), Vt.group(s2);
  }
};
var xt = class {
  constructor(t8, e2) {
    Object.assign(this, t8), this.scripts = t8.scripts.map(Nt), this.width = null, this.height = null, this.el = null, this.defs = null, this.scale = e2.scale, this.iconStyle = e2.style.replace("scratch3-", "");
  }
  measure() {
    this.scripts.forEach((t8) => {
      t8.measure();
    });
  }
  render(t8) {
    if ("function" == typeof t8) throw Error("render() no longer takes a callback");
    this.measure();
    let e2 = 0, s2 = 0;
    const i3 = [];
    for (let t9 = 0; t9 < this.scripts.length; t9++) {
      const o3 = this.scripts[t9];
      s2 && (s2 += 10), o3.y = s2, i3.push(Vt.move(0, s2, o3.draw(this.iconStyle))), s2 += o3.height, t9 !== this.scripts.length - 1 && (s2 += 36), e2 = Math.max(e2, o3.width + 4);
    }
    this.width = e2, this.height = s2;
    const o2 = Vt.newSVG(e2, s2, this.scale), r2 = "high-contrast" === this.iconStyle ? vt() : wt();
    return o2.appendChild(this.defs = Vt.withChildren(Vt.el("defs"), r2)), o2.appendChild(Vt.setProps(Vt.group(i3), { style: `transform: scale(${this.scale})` })), this.el = o2, o2;
  }
  exportSVGString() {
    if (null == this.el) throw Error("call draw() first");
    const t8 = kt();
    this.defs.appendChild(t8);
    const e2 = new Vt.XMLSerializer().serializeToString(this.el);
    return this.defs.removeChild(t8), e2;
  }
  exportSVG() {
    return "data:image/svg+xml;utf8," + this.exportSVGString().replace(/[#]/g, encodeURIComponent);
  }
  toCanvas(t8, e2) {
    e2 = e2 || 1;
    const s2 = Vt.makeCanvas();
    s2.width = Math.max(1, this.width * e2 * this.scale), s2.height = Math.max(1, this.height * e2 * this.scale);
    const i3 = s2.getContext("2d"), o2 = new Image();
    o2.src = this.exportSVG(), o2.onload = () => {
      i3.save(), i3.scale(e2, e2), i3.drawImage(o2, 0, 0), i3.restore(), t8(s2);
    };
  }
  exportPNG(t8, e2) {
    this.toCanvas((e3) => {
      URL && URL.createObjectURL && Blob && e3.toBlob ? e3.toBlob((e4) => {
        t8(URL.createObjectURL(e4));
      }, "image/png") : t8(e3.toDataURL("image/png"));
    }, e2);
  }
};
var Nt = (t8, e2) => new (((t9) => {
  switch (t9.constructor) {
    case R:
      return Ot;
    case C:
      return Lt;
    case M:
      return Tt;
    case I:
      return Rt;
    case x:
      return Ct;
    case N:
      return Mt;
    case B:
      return It;
    case D:
      return xt;
    default:
      throw Error("no view for " + t9.constructor.name);
  }
})(t8))(t8, e2);
var Bt = bt.makeStyle;
var Dt = function(t8) {
  const e2 = t8.document;
  function s2(t9, e3) {
    if ((e3 = { style: "scratch2", ...e3 }).scale = e3.scale || 1, "scratch2" === e3.style) return pt(t9, e3);
    if (/^scratch3($|-)/.test(e3.style)) return Nt(t9, e3);
    throw Error("Unknown style: " + e3.style);
  }
  function i3(t9, e3) {
    if ("function" == typeof e3) throw Error("render() no longer takes a callback");
    const i4 = s2(t9, e3).render();
    return i4.classList.add("scratchblocks-style-" + e3.style), i4;
  }
  function o2(t9, s3) {
    s3 = { inline: false, ...s3 };
    const i4 = t9.innerHTML.replace(/<br>\s?|\n|\r\n|\r/gi, "\n"), o3 = e2.createElement("pre");
    o3.innerHTML = i4;
    let r3 = o3.textContent;
    return s3.inline && (r3 = r3.replace("\n", "")), r3;
  }
  function r2(t9, s3, i4, o3) {
    let r3;
    if (o3.inline) {
      r3 = e2.createElement("span");
      let t10 = "scratchblocks scratchblocks-inline";
      i4.scripts[0] && !i4.scripts[0].isEmpty && (t10 += " scratchblocks-inline-" + i4.scripts[0].blocks[0].shape), r3.className = t10, r3.style.display = "inline-block", r3.style.verticalAlign = "middle";
    } else r3 = e2.createElement("div"), r3.className = "scratchblocks";
    r3.appendChild(s3), t9.innerHTML = "", t9.appendChild(r3);
  }
  return function(t9) {
    Q.init(t9), it.measuring = Q.makeCanvas().getContext("2d");
  }(t8), function(t9) {
    Vt.init(t9), Ot.measuring = Vt.makeCanvas().getContext("2d");
  }(t8), { allLanguages: y, loadLanguages: k, stringify: function(t9) {
    return t9.stringify();
  }, Label: R, Icon: C, Input: M, Block: I, Comment: x, Script: B, Document: D, newView: s2, read: o2, parse: j, replace: r2, render: i3, renderMatching: function(t9, s3) {
    t9 = t9 || "pre.blocks", s3 = { style: "scratch2", inline: false, languages: ["en"], scale: 1, read: o2, parse: j, render: i3, replace: r2, ...s3 };
    [].slice.apply(e2.querySelectorAll(t9)).forEach((t10) => {
      const e3 = s3.read(t10, s3), i4 = s3.parse(e3, s3), o3 = s3.render(i4, s3);
      s3.replace(t10, o3, i4, s3);
    });
  }, appendStyles: function() {
    e2.head.appendChild(dt()), e2.head.appendChild(Bt());
  } };
}(window);
Dt.appendStyles();
export {
  Dt as default
};
/*! Bundled license information:

scratchblocks/build/scratchblocks.min.es.js:
  (**
   * scratchblocks v3.7.1
   * https://scratchblocks.github.io/
   * Make pictures of Scratch blocks from text.
   *
   * Copyright 2013–2026, Tim Radvan
   * @license MIT
   *)
*/
//# sourceMappingURL=scratchblocks.js.map
