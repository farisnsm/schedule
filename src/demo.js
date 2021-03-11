import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { green, lightBlue, red, pink, orange } from '@material-ui/core/colors';
import {ViewState, GroupingState, IntegratedGrouping} from '@devexpress/dx-react-scheduler';
import {Scheduler, Resources, Appointments, GroupingPanel, WeekView} from '@devexpress/dx-react-scheduler-material-ui';
const fetch = require("node-fetch");
const moment = require('moment')


const isWeekOrMonthView = viewName => viewName === 'Week' || viewName === 'Month';;
var R = []

export default class Demo extends React.PureComponent {
  componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    fetch("https://climbcalendar.herokuapp.com/api")
        .then(function(response){
          return response.text()
        })
        .then(function(xdata) {
            let result = JSON.parse(xdata).map(function(R,I){
                let gym = 0
                let end = moment(R.ts,"YYYYMMDDHHmm").add(165,"minutes").format()
                if(R.gym==='OYY'){
                 end = moment(R.ts,"YYYYMMDDHHmm").add(2,"hours").format()
                }
                switch (R.gym) {
                    case 'BW': gym = 1; break;
                    case 'BFF': gym = 2; break;
                    case 'OYY': gym = 3; break;
                    case 'LHC': gym = 4; break;
                    case 'FB': gym = 5; break;
                    default: gym = 6; break
                }
                return({
                    title: R.slots +" slots",
                    priorityId: gym,
                    startDate: moment(R.ts,"YYYYMMDDHHmm").format(),
                    endDate: end,
                    id: I,
                })
            });
          result = result.filter(R => moment(R.endDate).format('YYYYMMDDHHmm') >= moment().format('YYYYMMDDHHmm'))
          return(result)
        })
        .then(res => {
            this.setState({
                data: res,
                today: moment(res[0].startDate).format('YYYY-MM-DD'),
                week: [0,1,2,3,4,5,6].filter(D => D!==moment(res[0].startDate).weekday())
            })
        })
  }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }



  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.prevdate = this.prevdate.bind(this);
    this.nextdate = this.nextdate.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.bw=this.bw.bind(this);
      this.bff=this.bff.bind(this);
      this.oyy=this.oyy.bind(this);
      this.lhc=this.lhc.bind(this);
      this.fb=this.fb.bind(this)

    this.state = {
        priorityData: [
            { text: 'BW', id: 1, color: lightBlue },
            { text: 'BFF', id: 2, color: green },
            { text: 'OYY', id: 3, color: red },
            { text: 'LHC', id: 4, color: pink },
            { text: 'FB', id: 5, color: orange }
        ],
        hour: moment().hour()-1,
        bw: true,
        bff:true,
        oyy:true,
        lhc:true,
        fb:true,
        width: 0,
        height: 0,
      today: moment().format('YYYY-MM-DD'),
      week: [0,1,2,3,4,5,6].filter(D => D!==moment().weekday()),
      data: R,
      resources: [{
        fieldName: 'priorityId',
        title: 'Priority',
        instances: [
            { text: 'BW', id: 1, color: lightBlue },
            { text: 'BFF', id: 2, color: green },
            { text: 'OYY', id: 3, color: red },
            { text: 'LHC', id: 4, color: pink },
            { text: 'FB', id: 5, color: orange }
        ]
      }],
      grouping: [{
        resourceName: 'priorityId',
      }],
      groupByDate: isWeekOrMonthView,
      isGroupByDate: true,
    };

  }



  nextdate(e) {
    this.setState({
        week: [0,1,2,3,4,5,6].filter(D => D!==moment(this.state.today,'YYYY-MM-DD').add(1,"days").weekday()),
        today: moment(this.state.today,'YYYY-MM-DD').add(1,"days").format('YYYY-MM-DD')
    });
    if(this.state.today === moment().add(-1,"days").format('YYYY-MM-DD')){
        this.setState({
            hour: moment().hour()-1
        })
    } else{
        this.setState({hour:9})
    }
  }
  prevdate(e) {
        this.setState({
            week: [0,1,2,3,4,5,6].filter(D => D!==moment(this.state.today,'YYYY-MM-DD').add(-1,"days").weekday()),
            today: moment(this.state.today,'YYYY-MM-DD').add(-1,"days").format('YYYY-MM-DD')
        });
      if(this.state.today === moment().add(1,"days").format('YYYY-MM-DD')){
          this.setState({
              hour: moment().hour()-1
          })
      } else{
          this.setState({hour:9})
      }
    }

  handleChange(event) {
    this.setState({i_agree: !this.state.i_agree});
  }
  bw(e){
      if(this.state.bw){
          this.setState({
              bw: !this.state.bw,
              priorityData: this.state.priorityData.filter(R=> R.text !== 'BW'),
              resources: [{
                  fieldName: 'priorityId',
                  title: 'Priority',
                  instances: this.state.priorityData.filter(R=> R.text !== 'BW')
              }]
          })
      }else{
          let arr = this.state.priorityData.concat({ text: 'BW', id: 1, color: lightBlue })
          arr.sort((a, b) => (a.id>b.id) ? 1 : -1)
          this.setState({
              bw: !this.state.bw,
              priorityData: arr,
              resources: [{
                  fieldName: 'priorityId',
                  title: 'Priority',
                  instances: arr
              }]
          })
      }
  };
  bff(e){
        if(this.state.bff){
            this.setState({
                bff: !this.state.bff,
                priorityData: this.state.priorityData.filter(R=> R.text !== 'BFF'),
                resources: [{
                    fieldName: 'priorityId',
                    title: 'Priority',
                    instances: this.state.priorityData.filter(R=> R.text !== 'BFF')
                }]
            })
        }else{
            let arr = this.state.priorityData.concat({ text: 'BFF', id: 2, color: green })
            arr.sort((a, b) => (a.id>b.id) ? 1 : -1)
            this.setState({
                bff: !this.state.bff,
                priorityData: arr,
                resources: [{
                    fieldName: 'priorityId',
                    title: 'Priority',
                    instances: arr
                }]
            })
        }
    };
  oyy(e){
        if(this.state.oyy){
            this.setState({
                oyy: !this.state.oyy,
                priorityData: this.state.priorityData.filter(R=> R.text !== 'OYY'),
                resources: [{
                    fieldName: 'priorityId',
                    title: 'Priority',
                    instances: this.state.priorityData.filter(R=> R.text !== 'OYY')
                }]
            })
        }else{
            let arr = this.state.priorityData.concat({ text: 'OYY', id: 3, color: red })
            arr.sort((a, b) => (a.id>b.id) ? 1 : -1)
            this.setState({
                oyy: !this.state.oyy,
                priorityData: arr,
                resources: [{
                    fieldName: 'priorityId',
                    title: 'Priority',
                    instances: arr
                }]
            })
        }
    };
  lhc(e){
        if(this.state.lhc){
            this.setState({
                lhc: !this.state.lhc,
                priorityData: this.state.priorityData.filter(R=> R.text !== 'LHC'),
                resources: [{
                    fieldName: 'priorityId',
                    title: 'Priority',
                    instances: this.state.priorityData.filter(R=> R.text !== 'LHC')
                }]
            })
        }else{
            let arr = this.state.priorityData.concat({ text: 'LHC', id: 4, color: pink })
            arr.sort((a, b) => (a.id>b.id) ? 1 : -1)
            this.setState({
                lhc: !this.state.lhc,
                priorityData: arr,
                resources: [{
                    fieldName: 'priorityId',
                    title: 'Priority',
                    instances: arr
                }]
            })
        }
    };
  fb(e){
        if(this.state.fb){
            this.setState({
                fb: !this.state.fb,
                priorityData: this.state.priorityData.filter(R=> R.text !== 'FB'),
                resources: [{
                    fieldName: 'priorityId',
                    title: 'Priority',
                    instances: this.state.priorityData.filter(R=> R.text !== 'FB')
                }]
            })
        }else{
            let arr = this.state.priorityData.concat({ text: 'FB', id: 5, color: orange })
            arr.sort((a, b) => (a.id>b.id) ? 1 : -1)
            this.setState({
                fb: !this.state.fb,
                priorityData: arr,
                resources: [{
                    fieldName: 'priorityId',
                    title: 'Priority',
                    instances: arr
                }]
            })
        }
    }



  render() {
    const {
      data, resources, grouping, groupByDate,today,week,hour
    } = this.state;
    const mystyle = {
      display:"flex",
      flexDirection:"row"
    };
    const buttons = {
      display:"flex",
        flexDirection:"row",
        justifyContent: "space-between"
    }
    var nb = '';
    if(today <= moment().add(7,"days").format('YYYY-MM-DD')){
        nb = <button style={{fontSize:"3vmin", fontFamily:'Courier New'}} onClick={this.nextdate}>{moment(today).add(1,"days").format("DD MMM")}<br/>&#8594; &#8594; &#8594;</button>
    }
    var bb ='';
    if(today > moment().format('YYYY-MM-DD')){
        bb =<button style={{fontSize:"3vmin", fontFamily:'Courier New'}} onClick={this.prevdate}>{moment(today).add(-1,"days").format("DD MMM")}<br/>&#8592; &#8592; &#8592;</button>
    }
    // var d1 = [0,1,2,3,4,5,6].filter(D => D!==moment().weekday());
    // var d2 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(1,"days").weekday());
    // var d3 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(2,"days").weekday());
    // var d4 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(3,"days").weekday());
    // var d5 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(4,"days").weekday());
    // var d6 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(5,"days").weekday());
    // var d7 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(6,"days").weekday());
    // var d8 = [0,1,2,3,4,5,6].filter(D => D!==moment().add(7,"days").weekday());
    // var w1 = moment().format('YYYY-MM-DD');
    // var w2 = moment().add(1,"days").format('YYYY-MM-DD');
    // var w3 = moment().add(2,"days").format('YYYY-MM-DD');
    // var w4 = moment().add(3,"days").format('YYYY-MM-DD');
    // var w5 = moment().add(4,"days").format('YYYY-MM-DD');
    // var w6 = moment().add(5,"days").format('YYYY-MM-DD');
    // var w7 = moment().add(6,"days").format('YYYY-MM-DD');
    // var w8 = moment().add(7,"days").format('YYYY-MM-DD');
    // if(i_agree){
    //       return (
    //           <React.Fragment>
    //               <br/>
    //               <div style={buttons}>
    //                   <label>
    //                       <button onClick={this.handleChange}>Go To Daily View</button>
    //                   </label>
    //               </div>
    //               <br/>
    //               <br/>
    //               <Paper>
    //                   <div style={mystyle}>
    //                       <Scheduler
    //                           data={data}
    //                           height={1600}
    //                       >
    //                           <ViewState
    //                               defaultCurrentDate={w1}
    //                           />
    //                           <GroupingState
    //                               grouping={grouping}
    //                               groupByDate={groupByDate}
    //                           />
    //                           <WeekView
    //                               startDayHour={9}
    //                               endDayHour={23}
    //                               excludedDays={d1}
    //                           />
    //                           <Appointments />
    //                           <Resources
    //                               data={resources}
    //                               mainResourceName="priorityId"
    //                           />
    //                           <IntegratedGrouping />
    //                           <GroupingPanel />
    //                       </Scheduler>
    //                       <Scheduler
    //                           data={data}
    //                           height={1600}
    //                       >
    //                           <ViewState
    //                               defaultCurrentDate={w2}
    //                           />
    //                           <GroupingState
    //                               grouping={grouping}
    //                               groupByDate={groupByDate}
    //                           />
    //                           <WeekView
    //                               startDayHour={9}
    //                               endDayHour={23}
    //                               excludedDays={d2}
    //                           />
    //                           <Appointments />
    //                           <Resources
    //                               data={resources}
    //                               mainResourceName="priorityId"
    //                           />
    //                           <IntegratedGrouping />
    //                           <GroupingPanel />
    //                       </Scheduler>
    //                       <Scheduler
    //                           data={data}
    //                           height={1600}
    //                       >
    //                           <ViewState
    //                               defaultCurrentDate={w3}
    //                           />
    //                           <GroupingState
    //                               grouping={grouping}
    //                               groupByDate={groupByDate}
    //                           />
    //                           <WeekView
    //                               startDayHour={9}
    //                               endDayHour={23}
    //                               excludedDays={d3}
    //                           />
    //                           <Appointments />
    //                           <Resources
    //                               data={resources}
    //                               mainResourceName="priorityId"
    //                           />
    //                           <IntegratedGrouping />
    //                           <GroupingPanel />
    //                       </Scheduler>
    //                       <Scheduler
    //                           data={data}
    //                           height={1600}
    //                       >
    //                           <ViewState
    //                               defaultCurrentDate={w4}
    //                           />
    //                           <GroupingState
    //                               grouping={grouping}
    //                               groupByDate={groupByDate}
    //                           />
    //                           <WeekView
    //                               startDayHour={9}
    //                               endDayHour={23}
    //                               excludedDays={d4}
    //                           />
    //                           <Appointments />
    //                           <Resources
    //                               data={resources}
    //                               mainResourceName="priorityId"
    //                           />
    //                           <IntegratedGrouping />
    //                           <GroupingPanel />
    //                       </Scheduler>
    //                       <Scheduler
    //                           data={data}
    //                           height={1600}
    //                       >
    //                           <ViewState
    //                               defaultCurrentDate={w5}
    //                           />
    //                           <GroupingState
    //                               grouping={grouping}
    //                               groupByDate={groupByDate}
    //                           />
    //                           <WeekView
    //                               startDayHour={9}
    //                               endDayHour={23}
    //                               excludedDays={d5}
    //                           />
    //                           <Appointments />
    //                           <Resources
    //                               data={resources}
    //                               mainResourceName="priorityId"
    //                           />
    //                           <IntegratedGrouping />
    //                           <GroupingPanel />
    //                       </Scheduler>
    //                       <Scheduler
    //                           data={data}
    //                           height={1600}
    //                       >
    //                           <ViewState
    //                               defaultCurrentDate={w6}
    //                           />
    //                           <GroupingState
    //                               grouping={grouping}
    //                               groupByDate={groupByDate}
    //                           />
    //                           <WeekView
    //                               startDayHour={9}
    //                               endDayHour={23}
    //                               excludedDays={d6}
    //                           />
    //                           <Appointments />
    //                           <Resources
    //                               data={resources}
    //                               mainResourceName="priorityId"
    //                           />
    //                           <IntegratedGrouping />
    //                           <GroupingPanel />
    //                       </Scheduler>
    //                       <Scheduler
    //                           data={data}
    //                           height={1600}
    //                       >
    //                           <ViewState
    //                               defaultCurrentDate={w7}
    //                           />
    //                           <GroupingState
    //                               grouping={grouping}
    //                               groupByDate={groupByDate}
    //                           />
    //                           <WeekView
    //                               startDayHour={9}
    //                               endDayHour={23}
    //                               excludedDays={d7}
    //                           />
    //                           <Appointments />
    //                           <Resources
    //                               data={resources}
    //                               mainResourceName="priorityId"
    //                           />
    //                           <IntegratedGrouping />
    //                           <GroupingPanel />
    //                       </Scheduler>
    //                       <Scheduler
    //                           data={data}
    //                           height={1600}
    //                       >
    //                           <ViewState
    //                               defaultCurrentDate={w8}
    //                           />
    //                           <GroupingState
    //                               grouping={grouping}
    //                               groupByDate={groupByDate}
    //                           />
    //                           <WeekView
    //                               startDayHour={9}
    //                               endDayHour={23}
    //                               excludedDays={d8}
    //                           />
    //                           <Appointments />
    //                           <Resources
    //                               data={resources}
    //                               mainResourceName="priorityId"
    //                           />
    //                           <IntegratedGrouping />
    //                           <GroupingPanel />
    //                       </Scheduler>
    //                   </div>
    //               </Paper>
    //           </React.Fragment>
    //       );
    //   }else{
    //     return (
    //           <React.Fragment>
    //               <div style={buttons}>
    //
    //                       <button onClick={this.prevdate}> &#8592; {moment().add(-1,"days").format("DD MMM")}</button>
    //
    //                       <button onClick={this.handleChange} style={{fontSize:this.state.height*0.02}}>Go To Weekly View</button>
    //
    //                   <button onClick={this.nextdate}>{moment().add(1,"days").format("DD MMM")} &#8594; </button>
    //
    //               </div>
    //               <Paper>
    //                   <div style={mystyle}>
    //
    //                       <Scheduler
    //                           data={data}
    //                           height={this.state.height*0.9}
    //                       >
    //                           <ViewState
    //                               currentDate={today}
    //                           />
    //                           <GroupingState
    //                               grouping={grouping}
    //                               groupByDate={groupByDate}
    //                           />
    //                           <WeekView
    //                               startDayHour={9}
    //                               endDayHour={23}
    //                               excludedDays={week}
    //                           />
    //
    //                           <Appointments />
    //
    //                           <Resources
    //                               data={resources}
    //                               mainResourceName="priorityId"
    //                           />
    //                           <IntegratedGrouping />
    //                           <GroupingPanel />
    //                       </Scheduler>
    //                   </div>
    //               </Paper>
    //           </React.Fragment>
    //       );
    //   }

      return (
          <React.Fragment>
              <div style={buttons}>
                  <div style={{width:70}}>
                      {bb}
                  </div>
                  <text style={{fontSize:"7vmin", fontFamily:'Courier New'}}>WhereGotSlot</text>
                  <div style={{width:70}}>
                      {nb}
                  </div>
              </div>
              <br/>
              <div style = {buttons}>
                  <label>
                      <input type="checkbox"
                             defaultChecked={true}
                             onChange={this.bw}
                      />
                      BW
                  </label>
                  <label>
                      <input type="checkbox"
                             defaultChecked={true}
                             onChange={this.bff}
                      />
                      BFF
                  </label>
                  <label>
                      <input type="checkbox"
                             defaultChecked={true}
                             onChange={this.oyy}
                      />
                      OYY
                  </label>
                  <label>
                      <input type="checkbox"
                             defaultChecked={true}
                             onChange={this.lhc}
                      />
                      LHC
                  </label>
                  <label>
                      <input type="checkbox"
                             defaultChecked={true}
                             onChange={this.fb}
                      />
                      FB
                  </label>
              </div>
              <br/>
              <Paper>
                  <div style={mystyle}>

                      <Scheduler
                          data={data}
                          height={this.state.height*0.85}
                      >
                          <ViewState
                              currentDate={today}
                          />
                          <GroupingState
                              grouping={grouping}
                              groupByDate={groupByDate}
                          />
                          <WeekView
                              startDayHour={hour}
                              endDayHour={23}
                              excludedDays={week}
                          />

                          <Appointments />

                          <Resources
                              data={resources}
                              mainResourceName="priorityId"
                          />
                          <IntegratedGrouping />
                          <GroupingPanel />
                      </Scheduler>
                  </div>
              </Paper>
          </React.Fragment>
      );
  }
}
