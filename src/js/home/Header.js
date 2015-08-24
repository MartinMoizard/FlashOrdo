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
  paddingTop: '10px',
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

var logoStyle = {
  position: 'absolute',
  top: '5px',
  right: '5px',
  width: '80px',
  height: '80px'
};

var Header = React.createClass({
  render: function(){
    return (
      <div>
        <div style={logoStyle}>
          <img width="80" src="img/logo_pharma.png"></img>
        </div>
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
