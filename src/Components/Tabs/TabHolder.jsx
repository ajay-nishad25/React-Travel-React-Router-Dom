import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Component import
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {

    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabHolder() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="The weekend break" {...a11yProps(0)} />
                    <Tab label="The package holiday" {...a11yProps(1)} />
                    <Tab label="The group tour" {...a11yProps(2)} />
                    <Tab label="the solo traveller" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: "center" , flexWrap:"wrap"}}>
                <CustomTabPanel value={value} index={0}>
                    {/* Tab 1 */}
                    <Tab1 />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {/* Tav 2 */}
                    <Tab2/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    {/* Tav 3 */}
                    <Tab3/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    {/* Tav 4 */}
                    <Tab4/>
                </CustomTabPanel>
            </Box>
        </Box>
    );
}
