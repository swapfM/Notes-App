
 <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        className = {location.pathname === item.path ? classes.active : null}>

                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {props.children}

            </div>
        </div>
