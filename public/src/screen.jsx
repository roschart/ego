function getFightStoreState(){
	return {data:FightStore.getState()};
}

var ScreenComponent=React.createClass({
	getInitialState:function(){
			return (getFightStoreState());
	},
	attackAction:function(){
		//TODO:Call to future dispatcher
		FightStore.attack();
	},
	componentDidMount:function(){
		FightStore.onChange=(function(){
			this.setState(getFightStoreState());
		}).bind(this);	
	},	
	render:function(){
return (
	<div className="container-fluid fill">
		<StageComponent />
		<StatComponent data={this.state.data}/>
		<HubComponent/>
		<ActionsComponent onAttact={this.attackAction}/>
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

var StatComponent=React.createClass({
	render:function(){
		return (
		<div className="row stat">
			<div className="col-xs-12">
				<span>
					Vida:<strong>{this.props.data.player.live}</strong>
					Vida:<strong>{this.props.data.monster.live}</strong>
				</span>
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
							<button type="button" className="btn-xs btn-primary" onClick={this.props.onAttact}>Atacar</button>
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
