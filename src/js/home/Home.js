var style = {
  color: 'red'
};

var Home = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        <div>
          <Step />
          <Step />
          <Step />
          <Step />
        </div>
      </div>
    )
  }
});
