gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDGroundObjects1= [];
gdjs.Game_32SceneCode.GDGroundObjects2= [];
gdjs.Game_32SceneCode.GDBallObjects1= [];
gdjs.Game_32SceneCode.GDBallObjects2= [];
gdjs.Game_32SceneCode.GDBlock_9595LightObjects1= [];
gdjs.Game_32SceneCode.GDBlock_9595LightObjects2= [];
gdjs.Game_32SceneCode.GDBlock_9595HeavyObjects1= [];
gdjs.Game_32SceneCode.GDBlock_9595HeavyObjects2= [];
gdjs.Game_32SceneCode.GDButGaucheObjects1= [];
gdjs.Game_32SceneCode.GDButGaucheObjects2= [];
gdjs.Game_32SceneCode.GDButDroiteObjects1= [];
gdjs.Game_32SceneCode.GDButDroiteObjects2= [];
gdjs.Game_32SceneCode.GDTuxObjects1= [];
gdjs.Game_32SceneCode.GDTuxObjects2= [];
gdjs.Game_32SceneCode.GDScoreObjects1= [];
gdjs.Game_32SceneCode.GDScoreObjects2= [];
gdjs.Game_32SceneCode.GDArrierePlanObjects1= [];
gdjs.Game_32SceneCode.GDArrierePlanObjects2= [];
gdjs.Game_32SceneCode.GDJoueur2Objects1= [];
gdjs.Game_32SceneCode.GDJoueur2Objects2= [];
gdjs.Game_32SceneCode.GDJoystick1Objects1= [];
gdjs.Game_32SceneCode.GDJoystick1Objects2= [];
gdjs.Game_32SceneCode.GDJoystick2Objects1= [];
gdjs.Game_32SceneCode.GDJoystick2Objects2= [];
gdjs.Game_32SceneCode.GDScore2Objects1= [];
gdjs.Game_32SceneCode.GDScore2Objects2= [];
gdjs.Game_32SceneCode.GDNotificationObjects1= [];
gdjs.Game_32SceneCode.GDNotificationObjects2= [];
gdjs.Game_32SceneCode.GDAgainButtonObjects1= [];
gdjs.Game_32SceneCode.GDAgainButtonObjects2= [];
gdjs.Game_32SceneCode.GDQuitButtonObjects1= [];
gdjs.Game_32SceneCode.GDQuitButtonObjects2= [];
gdjs.Game_32SceneCode.GDTimeBarObjects1= [];
gdjs.Game_32SceneCode.GDTimeBarObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Game_32SceneCode.GDBallObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects = Hashtable.newFrom({"Tux": gdjs.Game_32SceneCode.GDTuxObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Game_32SceneCode.GDBallObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoueur2Objects1Objects = Hashtable.newFrom({"Joueur2": gdjs.Game_32SceneCode.GDJoueur2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoueur2Objects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects = Hashtable.newFrom({"Joueur2": gdjs.Game_32SceneCode.GDJoueur2Objects1, "Tux": gdjs.Game_32SceneCode.GDTuxObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoueur2Objects1Objects = Hashtable.newFrom({"Joueur2": gdjs.Game_32SceneCode.GDJoueur2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects = Hashtable.newFrom({"Tux": gdjs.Game_32SceneCode.GDTuxObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Game_32SceneCode.GDBallObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDButDroiteObjects1Objects = Hashtable.newFrom({"ButDroite": gdjs.Game_32SceneCode.GDButDroiteObjects1});
gdjs.Game_32SceneCode.asyncCallback12345524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Joueur2"), gdjs.Game_32SceneCode.GDJoueur2Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("Notification"), gdjs.Game_32SceneCode.GDNotificationObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects2[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects2[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNotificationObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNotificationObjects2[i].getBehavior("Text").setText(" ");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Crowd Cheering Sound Effect - Matteo's Sound Stuff.mp3", true, 20, 1);
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
for (const obj of gdjs.Game_32SceneCode.GDJoueur2Objects1) asyncObjectsList.addObject("Joueur2", obj);
for (const obj of gdjs.Game_32SceneCode.GDNotificationObjects1) asyncObjectsList.addObject("Notification", obj);
for (const obj of gdjs.Game_32SceneCode.GDTuxObjects1) asyncObjectsList.addObject("Tux", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback12345524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Game_32SceneCode.GDBallObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDButGaucheObjects1Objects = Hashtable.newFrom({"ButGauche": gdjs.Game_32SceneCode.GDButGaucheObjects1});
gdjs.Game_32SceneCode.asyncCallback12349220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Joueur2"), gdjs.Game_32SceneCode.GDJoueur2Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("Notification"), gdjs.Game_32SceneCode.GDNotificationObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects2[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects2[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNotificationObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNotificationObjects2[i].getBehavior("Text").setText(" ");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Crowd Cheering Sound Effect - Matteo's Sound Stuff.mp3", true, 20, 1);
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
for (const obj of gdjs.Game_32SceneCode.GDJoueur2Objects1) asyncObjectsList.addObject("Joueur2", obj);
for (const obj of gdjs.Game_32SceneCode.GDNotificationObjects1) asyncObjectsList.addObject("Notification", obj);
for (const obj of gdjs.Game_32SceneCode.GDTuxObjects1) asyncObjectsList.addObject("Tux", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback12349220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects = Hashtable.newFrom({"Tux": gdjs.Game_32SceneCode.GDTuxObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Game_32SceneCode.GDBallObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects = Hashtable.newFrom({"Tux": gdjs.Game_32SceneCode.GDTuxObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects = Hashtable.newFrom({"Tux": gdjs.Game_32SceneCode.GDTuxObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoueur2Objects1Objects = Hashtable.newFrom({"Joueur2": gdjs.Game_32SceneCode.GDJoueur2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoueur2Objects1Objects = Hashtable.newFrom({"Joueur2": gdjs.Game_32SceneCode.GDJoueur2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDButDroiteObjects1Objects = Hashtable.newFrom({"ButDroite": gdjs.Game_32SceneCode.GDButDroiteObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Game_32SceneCode.GDBallObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoueur2Objects1Objects = Hashtable.newFrom({"Joueur2": gdjs.Game_32SceneCode.GDJoueur2Objects1});
gdjs.Game_32SceneCode.asyncCallback12359780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Joueur2"), gdjs.Game_32SceneCode.GDJoueur2Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("Notification"), gdjs.Game_32SceneCode.GDNotificationObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects2[i].setY(gdjs.randomInRange(502, 485));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects2[i].setX(gdjs.randomInRange(800, 1014));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNotificationObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNotificationObjects2[i].getBehavior("Text").setText(" ");
}
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
for (const obj of gdjs.Game_32SceneCode.GDJoueur2Objects1) asyncObjectsList.addObject("Joueur2", obj);
for (const obj of gdjs.Game_32SceneCode.GDNotificationObjects1) asyncObjectsList.addObject("Notification", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback12359780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects = Hashtable.newFrom({"Tux": gdjs.Game_32SceneCode.GDTuxObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDButGaucheObjects1Objects = Hashtable.newFrom({"ButGauche": gdjs.Game_32SceneCode.GDButGaucheObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.Game_32SceneCode.GDBallObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects = Hashtable.newFrom({"Tux": gdjs.Game_32SceneCode.GDTuxObjects1});
gdjs.Game_32SceneCode.asyncCallback12361932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Notification"), gdjs.Game_32SceneCode.GDNotificationObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects2[i].setY(gdjs.randomInRange(502, 485));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects2[i].setX(gdjs.randomInRange(394, 180));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNotificationObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNotificationObjects2[i].getBehavior("Text").setText(" ");
}
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
for (const obj of gdjs.Game_32SceneCode.GDNotificationObjects1) asyncObjectsList.addObject("Notification", obj);
for (const obj of gdjs.Game_32SceneCode.GDTuxObjects1) asyncObjectsList.addObject("Tux", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback12361932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Game_32SceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Joueur2"), gdjs.Game_32SceneCode.GDJoueur2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBallObjects1Objects, "Physics2", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBallObjects1Objects, "Physics2", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoueur2Objects1Objects, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBallObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDJoueur2Objects1 */
/* Reuse gdjs.Game_32SceneCode.GDTuxObjects1 */
{gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoueur2Objects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoueur2Objects1Objects, true);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects, true);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].setY(gdjs.Game_32SceneCode.GDBallObjects1[i].getY() - (gdjs.random(190)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Game_32SceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButDroite"), gdjs.Game_32SceneCode.GDButDroiteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBallObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDButDroiteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBallObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Joueur2"), gdjs.Game_32SceneCode.GDJoueur2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Game_32SceneCode.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32SceneCode.GDScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNotificationObjects1[i].getBehavior("Text").setText("GOAL!!!");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "goal.mp3", false, 40, 1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].clearForces();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].setX(585);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].setY(528);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].setY(500);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].setX(180);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects1[i].setX(1014);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects1[i].setY(500);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Game_32SceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButGauche"), gdjs.Game_32SceneCode.GDButGaucheObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBallObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDButGaucheObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBallObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Joueur2"), gdjs.Game_32SceneCode.GDJoueur2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Game_32SceneCode.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Game_32SceneCode.GDScore2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNotificationObjects1[i].getBehavior("Text").setText("GOAL!!!");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "goal.mp3", false, 40, 1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].clearForces();
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScore2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].setX(585);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].setY(528);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects1[i].setY(500);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects1[i].setX(1014);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].setX(180);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].setY(500);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Game_32SceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBallObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDTuxObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects, true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].addPolarForce(270, 900, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Joueur2"), gdjs.Game_32SceneCode.GDJoueur2Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects1[i].addPolarForce(270, 900, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].addPolarForce(360, 700, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Joueur2"), gdjs.Game_32SceneCode.GDJoueur2Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects1[i].addPolarForce(360, 700, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].addPolarForce(180, 700, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Joueur2"), gdjs.Game_32SceneCode.GDJoueur2Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects1[i].addPolarForce(180, 700, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].addPolarForce(90, 20, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Joueur2"), gdjs.Game_32SceneCode.GDJoueur2Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects1[i].addPolarForce(90, 20, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joystick1"), gdjs.Game_32SceneCode.GDJoystick1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJoystick1Objects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDJoystick1Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJoystick1Objects1[k] = gdjs.Game_32SceneCode.GDJoystick1Objects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJoystick1Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Joueur2"), gdjs.Game_32SceneCode.GDJoueur2Objects1);
/* Reuse gdjs.Game_32SceneCode.GDJoystick1Objects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects1[i].addPolarForce(180, -((( gdjs.Game_32SceneCode.GDJoystick1Objects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDJoystick1Objects1[0].StickForceX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) * 500, 0);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects1[i].addPolarForce(270, -((( gdjs.Game_32SceneCode.GDJoystick1Objects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDJoystick1Objects1[0].StickForceY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) * 1100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joystick2"), gdjs.Game_32SceneCode.GDJoystick2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJoystick2Objects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDJoystick2Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJoystick2Objects1[k] = gdjs.Game_32SceneCode.GDJoystick2Objects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJoystick2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDJoystick2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].addPolarForce(180, -((( gdjs.Game_32SceneCode.GDJoystick2Objects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDJoystick2Objects1[0].StickForceX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) * 500, 0);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].addPolarForce(270, -((( gdjs.Game_32SceneCode.GDJoystick2Objects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDJoystick2Objects1[0].StickForceY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) * 1100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joueur2"), gdjs.Game_32SceneCode.GDJoueur2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects, "Physics2", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoueur2Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDTuxObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].setY(gdjs.Game_32SceneCode.GDTuxObjects1[i].getY() - (gdjs.randomInRange(-(2), 10)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Game_32SceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButDroite"), gdjs.Game_32SceneCode.GDButDroiteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Joueur2"), gdjs.Game_32SceneCode.GDJoueur2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoueur2Objects1Objects, "Physics2", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDButDroiteObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBallObjects1Objects, "Physics2", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJoueur2Objects1Objects, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBallObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Game_32SceneCode.GDNotificationObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNotificationObjects1[i].getBehavior("Text").setText("Save!");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].clearForces();
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Game_32SceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButGauche"), gdjs.Game_32SceneCode.GDButGaucheObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects, "Physics2", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDButGaucheObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBallObjects1Objects, "Physics2", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTuxObjects1Objects, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBallObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Game_32SceneCode.GDNotificationObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNotificationObjects1[i].getBehavior("Text").setText("Save!");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].clearForces();
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Crowd Cheering Sound Effect - Matteo's Sound Stuff.mp3", true, 20, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTime");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "GameTime") >= 120;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AgainButton"), gdjs.Game_32SceneCode.GDAgainButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Game_32SceneCode.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.Game_32SceneCode.GDQuitButtonObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNotificationObjects1[i].getBehavior("Text").setText("Game Over!");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDQuitButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDQuitButtonObjects1[i].setZOrder(6);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDAgainButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDAgainButtonObjects1[i].setZOrder(7);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.Game_32SceneCode.GDQuitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDQuitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDQuitButtonObjects1[k] = gdjs.Game_32SceneCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDQuitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AgainButton"), gdjs.Game_32SceneCode.GDAgainButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDAgainButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDAgainButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDAgainButtonObjects1[k] = gdjs.Game_32SceneCode.GDAgainButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDAgainButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDAgainButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Game_32SceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Joueur2"), gdjs.Game_32SceneCode.GDJoueur2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Notification"), gdjs.Game_32SceneCode.GDNotificationObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.Game_32SceneCode.GDQuitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32SceneCode.GDScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tux"), gdjs.Game_32SceneCode.GDTuxObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Crowd Cheering Sound Effect - Matteo's Sound Stuff.mp3", true, 20, 1);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDNotificationObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDNotificationObjects1[i].getBehavior("Text").setText(" ");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects1[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects1[i].setY(500);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJoueur2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoueur2Objects1[i].setX(1014);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].setX(180);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDTuxObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTuxObjects1[i].setY(500);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].setY(528);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBallObjects1[i].setX(585);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDAgainButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDAgainButtonObjects1[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDQuitButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDQuitButtonObjects1[i].setZOrder(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTime");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TimeBar"), gdjs.Game_32SceneCode.GDTimeBarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTimeBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTimeBarObjects1[i].SetValue(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "GameTime"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBallObjects1.length = 0;
gdjs.Game_32SceneCode.GDBallObjects2.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595LightObjects1.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595LightObjects2.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595HeavyObjects1.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595HeavyObjects2.length = 0;
gdjs.Game_32SceneCode.GDButGaucheObjects1.length = 0;
gdjs.Game_32SceneCode.GDButGaucheObjects2.length = 0;
gdjs.Game_32SceneCode.GDButDroiteObjects1.length = 0;
gdjs.Game_32SceneCode.GDButDroiteObjects2.length = 0;
gdjs.Game_32SceneCode.GDTuxObjects1.length = 0;
gdjs.Game_32SceneCode.GDTuxObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects2.length = 0;
gdjs.Game_32SceneCode.GDArrierePlanObjects1.length = 0;
gdjs.Game_32SceneCode.GDArrierePlanObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoueur2Objects1.length = 0;
gdjs.Game_32SceneCode.GDJoueur2Objects2.length = 0;
gdjs.Game_32SceneCode.GDJoystick1Objects1.length = 0;
gdjs.Game_32SceneCode.GDJoystick1Objects2.length = 0;
gdjs.Game_32SceneCode.GDJoystick2Objects1.length = 0;
gdjs.Game_32SceneCode.GDJoystick2Objects2.length = 0;
gdjs.Game_32SceneCode.GDScore2Objects1.length = 0;
gdjs.Game_32SceneCode.GDScore2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNotificationObjects1.length = 0;
gdjs.Game_32SceneCode.GDNotificationObjects2.length = 0;
gdjs.Game_32SceneCode.GDAgainButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDAgainButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDQuitButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDQuitButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDTimeBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDTimeBarObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList4(runtimeScene);
gdjs.Game_32SceneCode.GDGroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBallObjects1.length = 0;
gdjs.Game_32SceneCode.GDBallObjects2.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595LightObjects1.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595LightObjects2.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595HeavyObjects1.length = 0;
gdjs.Game_32SceneCode.GDBlock_9595HeavyObjects2.length = 0;
gdjs.Game_32SceneCode.GDButGaucheObjects1.length = 0;
gdjs.Game_32SceneCode.GDButGaucheObjects2.length = 0;
gdjs.Game_32SceneCode.GDButDroiteObjects1.length = 0;
gdjs.Game_32SceneCode.GDButDroiteObjects2.length = 0;
gdjs.Game_32SceneCode.GDTuxObjects1.length = 0;
gdjs.Game_32SceneCode.GDTuxObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects2.length = 0;
gdjs.Game_32SceneCode.GDArrierePlanObjects1.length = 0;
gdjs.Game_32SceneCode.GDArrierePlanObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoueur2Objects1.length = 0;
gdjs.Game_32SceneCode.GDJoueur2Objects2.length = 0;
gdjs.Game_32SceneCode.GDJoystick1Objects1.length = 0;
gdjs.Game_32SceneCode.GDJoystick1Objects2.length = 0;
gdjs.Game_32SceneCode.GDJoystick2Objects1.length = 0;
gdjs.Game_32SceneCode.GDJoystick2Objects2.length = 0;
gdjs.Game_32SceneCode.GDScore2Objects1.length = 0;
gdjs.Game_32SceneCode.GDScore2Objects2.length = 0;
gdjs.Game_32SceneCode.GDNotificationObjects1.length = 0;
gdjs.Game_32SceneCode.GDNotificationObjects2.length = 0;
gdjs.Game_32SceneCode.GDAgainButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDAgainButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDQuitButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDQuitButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDTimeBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDTimeBarObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
