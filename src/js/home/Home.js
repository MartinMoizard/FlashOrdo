var buttonStyle = {
  margin: '0 auto',
  width: '60%',
  height: '36px',
  textAlign: 'center',
  backgroundColor: green,
  cursor: 'pointer'
};

var buttonTitleStyle = {
  lineHeight: '38px',
  color: 'white',
  fontFamily: 'avenirlight'
};

var stepsStyle = {
  paddingBottom: '10px'
};

var Home = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        <div style={stepsStyle}>
          <Step icon="camera" description="Prenez en photo votre ordonnance avec votre smartphone."/>
          <Step icon="pencil" description="Ajoutez un éventuel commentaire pour votre pharmacien."/>
          <Step icon="user" description="Renseignez votre profil patient."/>
          <Step icon="send" description="Venez chercher vos médicaments préparés par votre pharmacien !"/>
        </div>
        <div className="noselect">
          <div onClick={this._onStart} style={buttonStyle}><span style={buttonTitleStyle}>COMMENCER</span></div>
        </div>
      </div>
    )
  },

  _onStart: function() {
    console.log('start');
  }
});
