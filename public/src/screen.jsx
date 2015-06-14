var ScreenComponent=React.createClass({
	render:function(){
return (
	<div className="container-fluid fill">
		<StageComponent />
		<HubComponent/>
		<ActionsComponent/>
	</div>
	);
	}
});

var StageComponent=React.createClass({
	render:function(){
		return (
		<div className="row stage">
			<div className="col-xs-12">
				<img id="im-stage" src="img/image1.jpg" />
			</div>
		</div>
		);		
	},
});


var HubComponent=React.createClass({
	render:function(){
		return (
		<div className="row hub">
			<div className="col-xs-12">
				<span>Empieza la lucha</span>
			</div>
		</div>
		);		
	},
});


var ActionsComponent=React.createClass({
	render:function(){
		return (
		<div className="row control">
			<div className="col-xs-12">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-4">
							<button type="button" className="btn-xs btn-primary">Atacar</button>
						</div>
						<div className="col-xs-4">
						</div>
						<div className="col-xs-4">
							<button type="button" className="btn-xs btn-primary">Esquivar</button>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-4">
							<button type="button" className="btn-xs btn-primary">Apuntar</button>
						</div>
						<div className="col-xs-4">
						</div>
						<div className="col-xs-4">
							<button type="button" className="btn-xs btn-primary">...</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		);		
	},
});

React.render(
<ScreenComponent />, document.getElementById("screen")
);
