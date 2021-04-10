/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
   render() {
    
    const {  location } = this.props
    let pathname = location.pathname

    return (
        <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-menu">
            <ul>
              <li> 
                <a href="/dark/app/main/dashboard"><i className="la la-home" /> <span>Back to Home</span></a>
              </li>
              <li className="menu-title">Settings</li>
              <li className={pathname.includes('companysetting') ?"active" :""}> 
                <a href="/dark/settings/companysetting"><i className="la la-building" /> <span>Company Settings</span></a>
              </li>
              <li className={pathname.includes('localization') ?"active" :""}> 
                <a href="/dark/settings/localization"><i className="la la-clock-o" /> <span>Localization</span></a>
              </li>
              <li className={pathname.includes('theme-') ?"active" :""}> 
                <a href="/dark/settings/theme-settings"><i className="la la-photo" /> <span>Theme Settings</span></a>
              </li>
              <li className={pathname.includes('roles-permissions') ?"active" :""}> 
                <a href="/dark/settings/roles-permissions"><i className="la la-key" /> <span>Roles &amp; Permissions</span></a>
              </li>
              <li className={pathname.includes('email-') ?"active" :""}> 
                <a href="/dark/settings/email-settings"><i className="la la-at" /> <span>Email Settings</span></a>
              </li>
              <li className={pathname.includes('invoice-') ?"active" :""}> 
                <a href="/dark/settings/invoice-settings"><i className="la la-pencil-square" /> <span>Invoice Settings</span></a>
              </li>
              <li className={pathname.includes('salary-') ?"active" :""}> 
                <a href="/dark/settings/salary-settings"><i className="la la-money" /> <span>Salary Settings</span></a>
              </li>
              <li className={pathname.includes('notifications') ?"active" :""}> 
                <a href="/dark/settings/notifications"><i className="la la-globe" /> <span>Notifications</span></a>
              </li>
              <li className={pathname.includes('-password') ?"active" :""}> 
                <a href="/dark/settings/change-password"><i className="la la-lock" /> <span>Change Password</span></a>
              </li>
              <li className={pathname.includes('-type') ?"active" :""}> 
                <a href="/dark/settings/leave-type"><i className="la la-cogs" /> <span>Leave Type</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
       
      );
   }
}

export default withRouter(Sidebar);
