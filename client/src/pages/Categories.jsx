import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
const Categories = () => {
    const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return(
        <>
      <h1>Category</h1>
          <List dense className='!bg-white-100 dark:!bg-teal-900'>
          {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            className=''
          >
             <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  
                />
              </ListItemAvatar>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
             <IconButton edge="end" aria-label="edit" className='!text-white'>
                <EditIcon />
              </IconButton>
               <IconButton edge="end" aria-label="delete" className='!text-white'>
                <DeleteIcon />
              </IconButton>
            {/* <ListItemButton>
             
            </ListItemButton> */}
          </ListItem>
        );
      })}
    </List>
        </>
    )
}
export default Categories;