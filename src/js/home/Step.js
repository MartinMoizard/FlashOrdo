var stepContainer = {
  paddingTop: '5px',
  paddingBottom: '5px',
  flexWrap: 'nowrap'
};

var stepImage = {
  width: '40px',
  height: '40px',
  flex: '1 0 40'
};

var stepText = {
  paddingLeft: '10px',
  color: green,
  fontFamily: 'avenirlight',
  fontSize: '13px',
  flex: '2 1'
};

var Step = React.createClass({
  render: function(){
    return (
      <div className="flex" style={stepContainer}>
        <img className="alignSelfCenter" style={stepImage} src="http://lorempixel.com/40/40/"></img>
        <div className="alignSelfCenter" style={stepText}>{this.props.description}</div>
      </div>
    )
  }
});
