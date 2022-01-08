import type LaunchSite from './LaunchSiteInterface';
import type Links from './LinksInterface';
import type RocketInfo from './RocketInfoInterface';

export default interface LaunchInfo {
  mission_name: string;
  launch_date_local: Date;
  launch_site: LaunchSite;
  launch_success: boolean;
  launch_year: string;
  links: Links;
  rocket: RocketInfo;
  details: string;
}
