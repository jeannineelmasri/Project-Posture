/* .js files add interaction to your website */
var factList = ['Poor posture can be a cause for digestive issues because it compresses your organs','Bad posture is the main cause of headaches because of the strain on the neck','Bad posture can negatively affect your sleeping schedule','Tilting your head downward to read your phone can be the equivalent of SIXTY pounds of pressure','Research shows bad posture correlates with having a bad mood','By pushing your shoulders back, you boost testosterone which helps with confidence, and lower cortisol which is assosciated with stress'];

var factButton = document.getElementById('clickFact');
var clickCount = 0;
var factMessage = document.getElementById('newFact');

factButton.addEventListener('click', displayFact);

function displayFact(){
	factMessage.innerHTML = factList[clickCount];
	clickCount += 1;
	if (clickCount >= factList.length){
		clickCount = 0;
	}
}

