import 'normalize.css';
import React, { Component } from 'react';
import classnames from 'classnames';
import custom from '../css/custom.css';

import { Button, IconButton, BrowseButton } from 'pivot-ui/lib/button';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'pivot-ui/lib/list';
import Dropdown from 'pivot-ui/lib/dropdown';
import DplButton from 'pivot-ui/lib/dpl_button';
import DplPie from 'pivot-ui/lib/dpl_pie';
import DplCard from 'pivot-ui/lib/dpl_card';
import DplBar from 'pivot-ui/lib/dpl_bar';
import DplStatus from 'pivot-ui/lib/dpl_status';
import DplSummative from 'pivot-ui/lib/dpl_summative';
import {DplTable, DplTableCollapsible} from 'pivot-ui/lib/dpl_table';

import {DplPopover} from 'pivot-ui/lib/dpl_popover';
import {DplMenuContainer} from 'pivot-ui/lib/dpl_menuContainer';
import {DplDropdown} from 'pivot-ui/lib/dpl_dropdown';
import {DplIcon} from 'pivot-ui/lib/dpl_icon';
import generalPieChartData from '../utils/pie_test.json';
import generalBarChartData from '../utils/bar_test.json';
import generalStatusChartData from '../utils/status_test.json';
import generalSummativeChartData from '../utils/summative_test.json';
import {DplCollapsible, DplAccordion} from 'pivot-ui/lib/dpl_accordion';
import DplNavDrawer from 'pivot-ui/lib/dpl_navDrawer';
import {DplLink} from 'pivot-ui/lib/dpl_link';
import DplFilter from 'pivot-ui/lib/dpl_filter';
import DplPalette from 'pivot-ui/lib/dpl_palette';
import { Table, TableHead, TableRow, TableCell } from 'pivot-ui/lib/table';
import { Scrollbars } from 'react-custom-scrollbars';
const year = [
	{ value: '2017', label: '2017' },
	{ value: '2016', label: '2016'},
	{ value: '2015', label: '2015' },
	{ value: '2014', label: '2014'}
];

const table_header = ['Year to date', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];


const table_data = [
  { name: 'ILR 16-18 Apprenticeships Programme Funding (£)', aug: "146,976.56", sep: "145,053.99", oct: "127,663.80", nov: "117,098.13", dec: "111,729.15", jan: "99,850.46", feb: "99,850.46", mar: "98,850.46", apr: "98,850.46", may: "98,850.46", jun: "98,850.46", jul: "98,850.46" },
  { name: 'ILR 16-18 Apprenticeships Learning Support (£)', aug: 0, sep: 0, oct: 0, nov: 0, dec: 0, jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: '8%', jul: 0},
  { name: 'Total 16-18 Apprenticeships (£)', aug: "146,976.56", sep: "145,053.99", oct: "127,663.80", nov: "117,098.13", dec: "111,729.15", jan: "99,850.46", feb: "99,850.46", mar: "98,850.46", apr: "98,850.46", may: "98,850.46", jun: "98,850.46", jul: "98,850.46"}
];

const collapsible_table_data = [
  { name: '19-23 Apprenticeships', yearToEnd: "100,000", projected: "100,000", total: "100,000"},
  { name: '19-24 Apprenticeships', yearToEnd: "100,000", projected: "100,000", total: "100,000"},
  { name: '16-18 Traineeships', yearToEnd: "100,000", projected: "100,000", total: "100,000"},
  { name: '', yearToEnd: "100,000", projected: "100,000", total: "100,000"}
];


const collapsible_table_header = [
                {name : '16-18 Apprenticeships Overview'},
                {name : 'Year to end', value: `£100,000`},
                {name : 'Projected', value: `£100,000`},
                {name : 'Total', value: `£100,000`}
              ];

const chartSeries = [
  {
    "field": "Completed",
    "name": "684 Completed",
    "color": "rgba(141,226,106,1)",
    "url" : "#"
  },
  {
    "field": "Continuing",
    "name": "3764 Continuing",
    "color": "rgba(255,163,0,1)",
    "url" : "#"
  },
  {
    "field": "Temp withdrawn",
    "name": "684 Temp withdrawn",
    "color": "rgba(0,181,226,1)",
    "url" : "#"
  },
  {
    "field": "withdrawn",
    "name": "684 withdrawn",
    "color": "rgba(233,79,59,1)",
    "url" : "#"
  }
];

const barChartSeries = [
  {
	field: 'data',
	name: 'Data',
	color: "#00B5E2",
	style: {
	  'fillOpacity': 1
	}
  }
];

const filter_data = [
	{'name' : 'organization', 'href' :  '#'},
	{'name' : 'funding', 'href' :  '#'},
	{'name' : 'learner', 'href' :  '#'},
	{'name' : 'programme / aim', 'href' :  '#'},
	{'name' : 'outcome / withdrawal', 'href' :  '#'}
];

const drop_down_data = [
	{ value: 'buttons', label: 'Buttons'},
	{ value: 'form-element', label: 'From Element' },
	{ value: 'images', label: 'Images'}
];

const navList = [
  {'name' : 'DASHBOARD', 'href' :  '#'},
  {'name' : 'LEARNER STATUS', child: [
    {'name' : 'CONTINUING', 'href' :  '#'},
    {'name' : 'WITHDRAWN', 'href' : '#/DASHBOARD'},
    {'name' : 'TEMP WITHDRAWN', 'href' :  '#'},
    {'name' : 'COMPLETED', 'href' :  '#'}
  ]},
  {'name' : 'ON PROGRAMME', 'href' :  '#'},
  {'name' : 'PLANNED COMPLETIONS', child: [
    {'name' : 'CONTINUING', 'href' :  '#'},
    {'name' : 'WITHDRAWN', 'href' :  '#'},
    {'name' : 'TEMP WITHDRAWN', 'href' :  '#'},
    {'name' : 'COMPLETED', 'href' :  '#'}
  ]},
  {'name' : 'DESTINATION & PROGRESION', 'href' :  '#'},
  {'name' : 'ENROLMENT', 'href' :  '#'}
];
const dataTypeahead = [ '3212311', '3212454', '3212666', '3212661' ];
const data = [
  {'value' : 'PROGRAMME DATA', 'id' :  'id_0', 'startDate': '2016-12-25', 'endDate': '2017-01-25', 'type': 'date'},
  {'value' : 'DASHBOARD', 'id' :  'id_1'},
  {'value' : 'LEARNER STATUS', child: [
    {'value' : 'Funding model', 'id' :  'id_2'},
    {'value' : 'Funding modeling', 'id' :  'id_3'},
    {'value' : 'Funding country', child: [
      {'value' : 'Funding modell', 'id' :  'id_4'},
      {'value' : 'Funding countryy', 'id' : 'id_5'}
    ]}
  ]},
  {'value' : 'ON PROGRAMME', 'id' :  'id_6'},
  {'value' : 'PLANNED COMPLETIONS', child: [
    {'value' : 'CONTINUING', 'id' :  'id_7'},
    {'value' : 'WITHDRAWN', 'id' :  'id_8'},
    {'value' : 'TEMP WITHDRAWN', 'id' :  'id_9'},
    {'value' : 'COMPLETED', 'id' :  'id_10'}
  ]},
  {'value' : 'DESTINATION & PROGRESION', 'id' :  'id_11'},
  {'value' : 'ENROLMENT', 'id' :  'id_12'},
  {'value' : 'Employer ID', 'id' :  'id_13', 'typeahead': true, child: [
    {'value' : '3212311', 'id' :  'id_14'},
    {'value' : '3212454', 'id' :  'id_15'},
    {'value' : '3212666', 'id' :  'id_16'},
    {'value' : '3212661', 'id' :  'id_17'}
  ]}
];
const cardClasses = classnames(custom.cardClasses, custom.rightComponentContainer);

let bar_x = function(d) {
  return d.month;
};

let bar_y = function(d) {
  console.log(d);
  return +d.data;
};

class ReportsUi extends React.Component {

	state = { 
		year: '2017',
		scrollLeftZero: true,
		scrollRightZero: false
	}

	handleChange(year) {
		this.setState({year: year});
	}

	getBarLegendDesc() {
		return (
			<p>
			  <span><strong>0</strong></span>
			  <span>&nbsp;new enrolments this month</span>
			  <br/>              
			  <span><strong>2276</strong></span>
			  <span>&nbsp;new enrolments this year</span>
			</p>
		);
	}

	getGeneralPieChartData() {
	    let yearId = this.state.year || new Date().getFullYear(),
	        data = [];
	    generalPieChartData.map(function(value,index){
	      if(generalPieChartData[index].year == yearId) 
	        data = generalPieChartData[index].value  
	    });
	    return data;
	}

	getGeneralBarChartData() {
	    let yearId = this.state.year || new Date().getFullYear(),
	        data = [];
	    generalBarChartData.map(function(value,index){
	      if(generalBarChartData[index].year == yearId) 
	        data = generalBarChartData[index].value  
	    });
	    return data;
	}

	getGeneralStatusChartData() {
	    let yearId = this.state.year || new Date().getFullYear(),
	        data = [];
	    generalStatusChartData.map(function(value,index){
	      if(generalStatusChartData[index].year == yearId) 
	        data = generalStatusChartData[index].value  
	    });
	    return data;
	}

	getGeneralSummativeChartData() {
	    let yearId = this.state.year || new Date().getFullYear(),
	        data = [];
	    generalSummativeChartData.map(function(value,index){
	      if(generalSummativeChartData[index].year == yearId) 
	        data = generalSummativeChartData[index].value  
	    });
	    return data;
	}

	getCardDesciption() {
	    return (
	    	<div>
	    		<Scrollbars data-react-toolobox="dashletCardDesciption" style={{'width': '100%', 'height': 170 }}>
		    		<p>Includes all learner programmes that were fully withdrawn during the selected year.</p>
		    		<p>The summary values correspond to the Withdrawal Reasons field. The summary values correspond to the Withdrawal Reasons field. The summary values correspond to the Withdrawal Reasons field. The summary values correspond to the Withdrawal Reasons field.</p>
		    	</Scrollbars>
	    	</div>
	    );
	}

	render() {		
		return (
			<div className={custom.pageLayout}>
				<div className={custom.lg}>
					<h1 className={custom.pagetitle}>Reports UI</h1>
				</div>
				<div className={custom.Container}>
					<div className={custom.componentContainer}>
						<div className={custom.leftComponentContainer}>
							<h2>Palette</h2>
							<p>These colours are unique to the reports UI.</p>
						</div>
						<div className={custom.rightComponentContainer}>
							<DplPalette className="dplpaletteclick" data-type="secondary" paletteTitle="Click" paletteColor="#005FA0" />
							<DplPalette className="dplpaletteprimary" data-type="primary" paletteTitle="Primary" paletteColor="#0077C8" />
							<DplPalette className="dplpalettehover" data-type="accent" paletteTitle="Hover" paletteColor="#3392D3" />
						</div>
					</div>
					<div className={custom.componentContainer}>
						<div className={custom.leftComponentContainer}>
							<h2>Link</h2>
							<p>Standard body text links and hover/click states.</p>
						</div>
						<div className={custom.rightComponentContainer}>
					        <DplLink  href="#/components/link" label="Text link (semibold)" semibold />
					        <br />
					        <DplLink  href="#/components/link" label="Text link (regular)" />
					    </div>
					</div>
					<div className={custom.componentContainer}>
						<div className={custom.leftComponentContainer}>
							<h2>Buttons</h2>
							<p>The standard button and its hover, click and disabled states.</p>
						</div>
						<div className={custom.rightComponentContainer}>
							<DplButton label="STANDARD" />
							<DplButton disabled="disabled" label="DISABLED" />
							<DplButton icon="download" label="STANDARD WITH ICON" />
						</div>
					</div>
					<div className={custom.componentContainer}>
						<div className={custom.leftComponentContainer}>
							<h2>Buttons small</h2>
							<p>The standard button and its hover, click and disabled states shown in this example with an icon.</p>
						</div>
						<div className={custom.rightComponentContainer}>
							<DplButton icon="plus-circle" mini label="Add Filter" />
							<DplButton icon="plus-circle" mini disabled label="Add Filter" />
						</div>
					</div>
					<div className={custom.componentContainer}>
						<div className={custom.leftComponentContainer}>
							<h2>Buttons alt</h2>
							<p>The secondary or alternative button and its various states. In this example the button is shown with an optional icon.</p>
						</div>
						<div className={custom.rightComponentContainer}>
							<DplButton icon="download" label="EXPORT REPORT" />
							<DplButton icon="download" disabled label="EXPORT REPORT" />
						</div>
					</div>
					<div className={custom.componentContainer}>
						<div className={custom.leftComponentContainer}>
							<h2>Buttons alt small</h2>
							<p>The standard button and its hover, click and disabled states shown in this example with an icon.</p>
						</div>
						<div className={custom.rightComponentContainer}>
							<DplButton icon="times-circle" mini secondary label="Filter" />
							<DplButton icon="times-circle" mini secondary disabled label="Filter" />
						</div>
					</div>
					<div className={custom.componentContainer}>
						<div className={custom.leftComponentContainer}>
							<h2>File download blocks</h2>
							<p>For when the system offers a downloadable file to the user.</p>
						</div>
						<div className={custom.rightComponentContainer}>
							<DplButton icon="download" action="https://www.google.com" download href="https://www.google.com" label="Download the full main occupancy report based on <Batch File ID>" /><br/><br/>
							<DplButton icon="download" download secondary href="https://www.yahoo.com" action="https://www.yahoo.com" label="Download the full main occupancy report based on <Batch File ID>" />
						</div>
					</div>
					<div className={custom.componentContainer}>
						<div className={custom.leftComponentContainer}>
							<h2>Scroll indicators</h2>
							<p>Large and small table scroll indicators with all states.</p>
						</div>
						<div className={custom.rightComponentContainer}>
							<DplButton icon="angle-left" />
							<DplButton icon="angle-right"  /><br/><br/>
							<DplButton icon="angle-left"  disabled />
							<DplButton icon="angle-right"  disabled /><br/><br/>
							<DplButton icon="angle-left" mini />
							<DplButton icon="angle-right" mini  /><br/><br/>
							<DplButton icon="angle-left" mini disabled />
							<DplButton icon="angle-right" mini disabled /><br/><br/>
						</div>
					</div>
					<div className={custom.componentContainer}>
						<div className={custom.leftComponentContainer}>
							<h2>Icons</h2>
							<p>Various icons used in the project in all states.</p>
						</div>
						<div className={custom.rightComponentContainer}>
							<DplIcon name="info-circle" iconstyle={true}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<DplIcon name="question-circle" iconstyle={true} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<DplIcon name="cog" iconstyle={true} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<DplIcon name="chevron-circle-down" iconstyle={true} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<DplIcon name="chevron-circle-right" iconstyle={true} />
						</div>
					</div>
					<div className={custom.componentContainer}>
						<div className={custom.leftComponentContainer}>
							<h2>Popover</h2>
							<p>Popover menu with hover and click states.</p>
						</div>
						<div className={custom.rightComponentContainer}>
							<DplMenuContainer title="STANDARD" >
								<DplPopover>
									<List selectable ripple>
			        					<ListItem  caption='Export table'/>
			        					<ListItem  caption='Reset table'/>
			        					<ListItem  caption='Show/Hide columns'/>
			        				</List>
			        			</DplPopover>
							</DplMenuContainer>
						</div>
					</div>
					<div className={custom.componentContainer}>
						<div className={custom.leftComponentContainer}>
							<h2>Dropdown</h2>
							<p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet ipsum.</p>
						</div>
						<div className={custom.rightComponentContainer}>
							<DplDropdown data={drop_down_data}/>
							<br />
							<br />
							<DplDropdown data={drop_down_data} disabled />
						</div>
					</div>
					<div className={custom.componentContainer}>
						<div className={custom.leftComponentContainer}>
							<h2>Card</h2>
							<p>Flippable cards with hover states. These cards contain various charts used in the project.</p>
						</div>
						<div className={cardClasses}>
							<DplCard flipCard chartTitle= "Learner status" cardDesciption={this.getCardDesciption()}>
								<DplPie data={this.getGeneralPieChartData()} chartLink="#" chartSeries={chartSeries}/>
							</DplCard>

							<DplCard flipCard chartTitle= "Enrolment" cardDesciption={this.getCardDesciption()}>
								<DplBar xAxix={bar_x} yAxix={bar_y} yOptional={true} data={this.getGeneralBarChartData()} chartSeries={barChartSeries} legendDesc={this.getBarLegendDesc()}/>
							</DplCard>

							<DplCard flipCard chartTitle= "Administration" cardDesciption={this.getCardDesciption()}>
								<DplStatus data={this.getGeneralStatusChartData()} />
							</DplCard>

							<DplCard flipCard chartTitle= "Finanace Report" cardDesciption={this.getCardDesciption()}>
								<DplSummative data={this.getGeneralSummativeChartData()} />
							</DplCard>
						</div>
					</div>						
					<div className={custom.componentContainerr}>
						<div className={custom.leftComponentContainerr}>
							<h2>Table</h2>
							<p>The component for showing large sets of tabular data.</p>
						</div>
						<div className={custom.rightComponentContainerr}>
							<DplTable label="16-18 Apprenticeships Overview" viewLink="https://www.google.com">
								<TableHead>
				                  {table_header.map((header, header_id) => (
				                    <TableCell key={header_id}><span>{header}</span></TableCell>
				                  ))}
				                </TableHead>
				                {table_data.map((item, idx) => (
				                  <TableRow key={idx}>
				                    <TableCell><span>{item.name}</span></TableCell>
				                    <TableCell><span>&pound;{item.aug}</span></TableCell>
				                    <TableCell><span>&pound;{item.sep}</span></TableCell>
				                    <TableCell><span>&pound;{item.oct}</span></TableCell>
				                    <TableCell><span>&pound;{item.nov}</span></TableCell>
				                    <TableCell><span>&pound;{item.dec}</span></TableCell>
				                    <TableCell><span>&pound;{item.jan}</span></TableCell>
				                    <TableCell><span>&pound;{item.feb}</span></TableCell>
				                    <TableCell><span>&pound;{item.mar}</span></TableCell>
				                    <TableCell><span>&pound;{item.apr}</span></TableCell>
				                    <TableCell><span>&pound;{item.may}</span></TableCell>
				                    <TableCell><span>&pound;{item.jun}</span></TableCell>
				                    <TableCell><span>&pound;{item.jul}</span></TableCell>
				                  </TableRow>
				                ))}
				            </DplTable>
						</div>
					</div>	
					<div className={custom.componentContainerr}>
						<div className={custom.leftComponentContainerr}>
							<h2>Disclosure UI: Tables</h2>
							<p>For when the system presents more than one  large table view:</p>
						</div>
						<div className={custom.rightComponentContainerr}>
							<DplTableCollapsible tableHeaders={collapsible_table_header}>
								{					        
								    collapsible_table_data.map((item, idx) => (
								        <TableRow key={idx} >
								          <TableCell><div ><a href="#">{item.name}</a></div></TableCell>
								          <TableCell><div ><span>&pound;{item.yearToEnd}</span></div></TableCell>
								          <TableCell><div ><span>&pound;{item.projected}</span></div></TableCell>
								          <TableCell><div ><span>&pound;{item.total}</span></div></TableCell>
								        </TableRow>
								    ))					      
							    }
							</DplTableCollapsible>
						</div>
					</div>
					<div className={custom.componentContainerr}>
						<div className={custom.leftComponentContainerr}>
							<h2>Filters</h2>
							<p>The filter component which contains small button (see buttons section) </p>
						</div>
						<div className={custom.rightComponentContainerr}>
							<DplFilter data={data} outline={true} />
						</div>
					</div>
					<div className={custom.componentContainerr}>
						<div className={custom.leftComponentContainerr}>
							<h2>Sidebar</h2>
							<p>For when the system presents more than one  large table view:</p>
						</div>
						<div className={custom.rightComponentContainerr}>
	                		<DplNavDrawer data={navList} logo= { require("../images/pivot.png")} active='#/DASHBOARD'/>         
	                	</div>
	                </div>
				</div>				
			</div>
	    );
	}
}

export default ReportsUi