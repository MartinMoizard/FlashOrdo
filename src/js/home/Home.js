var buttonStyle = {
  margin: '0 auto',
  width: '200px',
  height: '36px',
  textAlign: 'center',
  backgroundColor: green
};

var buttonTitleStyle = {
  lineHeight: '36px',
  color: 'white',
  fontFamily: 'avenirlight'
};

var Home = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        <div>
          <Step description="Prenez en photo votre ordonnance avec votre smartphone."/>
          <Step description="Ajoutez un éventuel commentaire pour votre pharmacien."/>
          <Step description="Renseignez votre profil patient."/>
          <Step description="Venez chercher vos médicaments préparés par votre pharmacien !"/>
        </div>
        <div>
          <div style={buttonStyle}><span style={buttonTitleStyle}>COMMENCER</span></div>
        </div>
      </div>
    )
  }
});
