function buildHeaderStyle(style) {
  var headerStyle = {
    textAlign: 'center',
    fontFamily: 'avenirlight',
    color: green
  };

  return _.defaults(style, headerStyle);
}

var welcome = buildHeaderStyle({
  fontSize: '28px',
  paddingTop: '30px',
});

var product = buildHeaderStyle({
  fontFamily: 'trashhand',
  fontSize: '60px',
  color: orange
});

var description = buildHeaderStyle({
});

var stepsIntro = buildHeaderStyle({
  fontFamily: 'trashhand',
  fontSize: '18px',
  paddingTop: '10px',
  paddingBottom: '5px'
});

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
