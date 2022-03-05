import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styles from './Sidebar.module.css'
export const Sidebar = () => {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);



    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const handleClick3 = () => {
        setOpen3(!open3);
    };
    const handleClick4 = () => {
        setOpen4(!open4);
    };
    const handleClick5 = () => {
        setOpen5(!open5);
    };
    const handleClick6 = () => {
        setOpen6(!open6);
    };

    return (
        <div className={styles.div}>
            <List
                sx={{ width: '100%', maxWidth: 210, boxSizing: "border-box", pt: 20, verticalAlign: "top", display: "inline-block" }}

                subheader={
                    <ListSubheader sx={{ fontSize: 20, fontWeight: 600, textAlign: 'left', borderBottom: "1px solid #dcdcdc;", color: "#323232" }} component="div" id="nested-list-subheader">
                        CLOTHING
                    </ListSubheader>
                }
            >
                <ListItemButton sx={{ borderBottom: "1px solid #dcdcdc;" }}>
                    <div className={styles.div1}>JUMPSUITS</div>
                </ListItemButton>
                <ListItemButton sx={{ borderBottom: "1px solid #dcdcdc;" }}>
                    <div className={styles.div1}>WORK FROM HOME COLLECTION</div>

                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <div className={styles.div1}>LOUNGEWEAR</div>

                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>

                            <div className={styles.div1}>COORDINATES</div>

                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>TOPS</div>


                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>DRESSES</div>


                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>

                            <div className={styles.div1}>SKIRTS</div>

                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>

                            <div className={styles.div1}>BOTTOMS</div>

                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton sx={{ borderBottom: "1px solid #dcdcdc;", borderTop: "1px solid #dcdcdc" }}>
                    <div className={styles.div1}>PARTY WEAR</div>
                </ListItemButton>
                <ListItemButton sx={{ borderBottom: "1px solid #dcdcdc;", borderTop: "1px solid #dcdcdc" }}>
                    <div className={styles.div1}>NAB-NOW PIECES</div>
                </ListItemButton>
                <ListItemButton onClick={handleClick2}>
                    <div className={styles.div1}>TOPS</div>

                    {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>

                            <div className={styles.div1}>CROP TOPS</div>

                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>TANK TOPS</div>


                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>T-SHIRTS</div>


                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>

                            <div className={styles.div1}>SHIRTS</div>

                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>BLOUSES</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>MAXI TOPS</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>PEPLUM TOPS</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>CAPE TOPS</div>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton sx={{ borderTop: "1px solid #dcdcdc;" }} onClick={handleClick3}>
                    <div className={styles.div1}>DRESSES</div>

                    {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>

                            <div className={styles.div1}>BODYCON DRESSES</div>

                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>SKATER DRESSES</div>


                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>A-LINE DRESSES</div>


                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>

                            <div className={styles.div1}>SHIRT DRESSES</div>

                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>SHIFT DRESSES</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>MAXI DRESSES</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>WRAP DRESSES</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>HALTER DRESS</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>OFF SHOULDER DRESSES</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>COLD SHOULDER DRESSES</div>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton sx={{ borderTop: "1px solid #dcdcdc;" }} onClick={handleClick4}>
                    <div className={styles.div1}>SKIRTS</div>

                    {open4 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open4} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>MINI SKIRTS</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>MAXI SKIRTS</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>MIDI SKIRTS</div>
                        </ListItemButton>

                    </List>
                </Collapse>
                <ListItemButton sx={{ borderTop: "1px solid #dcdcdc;" }} onClick={handleClick5}>
                    <div className={styles.div1}>BOTTOMS</div>

                    {open5 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open5} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>FORMAL TROUSERS</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>LEGGINGS & JEGGINGS</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>WIDE LEGGED PANTS</div>
                        </ListItemButton>

                    </List>
                </Collapse>
                <ListItemButton sx={{ borderTop: "1px solid #dcdcdc;" }} onClick={handleClick6}>
                    <div className={styles.div1}>WINTER WEAR</div>

                    {open6 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open6} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>BRAZERS</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>JACKETS</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>COATS</div>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className={styles.div1}>SHRUGS</div>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton sx={{ borderBottom: "1px solid #dcdcdc;", borderTop: "1px solid #dcdcdc" }}>
                    <div className={styles.div1}>JEANS</div>
                </ListItemButton>
                <ListItemButton sx={{ borderBottom: "1px solid #dcdcdc;", borderTop: "1px solid #dcdcdc" }}>
                    <div className={styles.div1}>SHORTS</div>
                </ListItemButton>
                <ListItemButton sx={{ borderBottom: "1px solid #dcdcdc;", borderTop: "1px solid #dcdcdc" }}>
                    <div className={styles.div1}>SHRUGS</div>
                </ListItemButton>
                <ListItemButton sx={{ borderBottom: "1px solid #dcdcdc;", borderTop: "1px solid #dcdcdc" }}>
                    <div className={styles.div1}>UNDER 699</div>
                </ListItemButton>
                <ListItemButton sx={{ borderBottom: "1px solid #dcdcdc;", borderTop: "1px solid #dcdcdc" }}>
                    <div className={styles.div1}>UNDER 799</div>
                </ListItemButton>
            </List>
        </div>
    );
}