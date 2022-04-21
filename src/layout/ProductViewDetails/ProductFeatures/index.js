import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import TrandingElectronics from '../../TrandingElectronics';
import CustomerRatings from '../CustomerRatings';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #000;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }



  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  width:260px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function ProductFeatures() {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>OverView</Tab>
        <Tab>Review</Tab>
      </TabsList>
      <TabPanel value={0}>
          <div>
            <h1 className="flex flex-row">Highlights</h1>
            <p className="flex flex-row">
                    Ultra-High Speed SSD - Maximize your play sessions with near instant load times for installed PS5 games.
                    Integrated I/O - The custom integration of the PS5 console's systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible.
                    Ray Tracing - Immerse yourself in worlds with a new level of realism as rays of light are individually simulated, creating true-to-life shadows and reflections in supported PS5 games.
                    4K-TV Gaming - Play your favorite PS5 games on your stunning 4K TV.
                    Up to 120fps with 120Hz Output - Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays.
                    HDR Technology - With an HDR TV, supported PS5 games display an unbelievably vibrant and lifelike range of colors.
            </p>
          </div>

          <div  className="">
            <h1 className="flex flex-row"> Overview </h1>
                <span className="flex flex-row">
                        Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games. PS5 Digital Edition is an all-digital version of the PS5 console with no disc drive. Sign into your account for PlayStation Network and go to PlayStationStore to buy and download games. Package includes: PlayStation5 Digital Edition Console DualSense Wireless Controller DualSense USB charging cable ASTRO's PLAYROOM (Pre-installed game)** Base HDMI cable AC power cord Printed materials ** System software update may be required. Internet connection required for update.
                </span> 
          </div>
      <TrandingElectronics />
      </TabPanel>
      <TabPanel value={1}>
          <CustomerRatings/>
      </TabPanel>
    </TabsUnstyled>
  );
}
