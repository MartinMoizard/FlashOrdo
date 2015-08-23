var green = '#008C6F';
var orange = '#F97528';

var welcome = {
  textAlign: 'center',
  fontFamily: 'avenirlight',
  fontSize: '28px',
  paddingTop: '30px',
  color: green
};

var product = {
  textAlign: 'center',
  fontFamily: 'trashhand',
  fontSize: '60px',
  color: orange
};

var description = {
  textAlign: 'center',
  fontFamily: 'avenirlight',
  color: green
};

var stepsIntro = {
  textAlign: 'center',
  fontFamily: 'trashhand',
  fontSize: '18px',
  color: green
};

var steps = {
  color: orange
};

var Header = React.createClass({
  render: function(){
    return (
      <div>
        <div style={welcome}>Bienvenue sur</div>
        <div style={product}>FLASH ORDO</div>
        <div style={description}>
          Un moyen simple et rapide<br />de récupérer le contenu
          de votre ordonnance à la pharmacie Plein Sud d&#39;Amiens !
        </div>
        <div style={stepsIntro}>Récupérez vos médicaments en seulement <span style={steps}>4 étapes</span> :</div>
      </div>
    )
  }
});
