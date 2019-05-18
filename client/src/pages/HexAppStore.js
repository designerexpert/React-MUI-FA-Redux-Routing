import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import './HexAppStore.css';

class AppStore extends Component {
	render() {
		return (
			<div>
				<HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
					<Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
						<Hexagon q={0} r={0} s={0}>
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								APP
							</Text>
						</Hexagon>
						{/* Using pattern (defined below) to fill the hexagon */}
						<Hexagon q={0} r={-1} s={1} fill="pat-1">
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								TC
							</Text>
						</Hexagon>
						<Hexagon q={0} r={1} s={-1}>
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								ETL
							</Text>
						</Hexagon>
						<Hexagon q={1} r={-1} s={0}>
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								EDB
							</Text>
						</Hexagon>
						<Hexagon q={1} r={0} s={-1}>
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								EID
							</Text>
						</Hexagon>
						<Hexagon q={1} r={-2} s={0}>
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								4
							</Text>
						</Hexagon>
						{/* FAR RIGHT START */}
						<Hexagon q={2} r={-2} s={-1}>
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								5
							</Text>
						</Hexagon>
						<Hexagon q={2} r={-1} s={-1}>
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								6
							</Text>
						</Hexagon>
						<Hexagon q={2} r={0} s={-1}>
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								7
							</Text>
						</Hexagon>
						{/* FAR RIGHT END */}
						<Hexagon q={-1} r={-1} s={0}>
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								0
							</Text>
						</Hexagon>
						{/* Pattern and text */}
						<Hexagon q={-1} r={1} s={0}>
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								EEB
							</Text>
						</Hexagon>
						<Hexagon q={-1} r={0} s={1}>
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								EEF
							</Text>
						</Hexagon>
						{/* FAR LEFT START */}
						<Hexagon q={-2} r={0} s={1}>
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								1
							</Text>
						</Hexagon>
						<Hexagon q={-2} r={1} s={1}>
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								2
							</Text>
						</Hexagon>
						<Hexagon q={-2} r={2} s={1}>
							<Text style={{ fontSize: '1rem !important', fontWeight: 400, color: '#fff !important' }}>
								3
							</Text>
						</Hexagon>
						{/* FAR LEFT END */}

						<Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
					</Layout>
					<Pattern
						id="pat-1"
						link="https://media.licdn.com/dms/image/C4D03AQGkEOhVhtmMRQ/profile-displayphoto-shrink_200_200/0?e=1563408000&v=beta&t=zoIxjIRGb0sODPKiEMBefL5OB0O6bvWbMBxSO65bYaA"
					/>
				</HexGrid>
			</div>
		);
	}
}

export default AppStore;
