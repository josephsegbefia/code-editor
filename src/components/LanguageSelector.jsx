/* eslint-disable react/prop-types */
// import React from 'react';
import { Box, Text, Menu, MenuButton, MenuList, Button, MenuItem } from '@chakra-ui/react';
import { LANGUAGE_VERSIONS } from '../constants';

// AN array of arrays
const languages = Object.entries(LANGUAGE_VERSIONS)

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box>
      <Text mb={2} fontSize='lg'>Language: </Text>
      <Menu>
        <MenuButton as={Button} >
         {language}
        </MenuButton>
        <MenuList>
          {
            languages.map(([language, version]) => (
              <MenuItem key = {language} onClick={() => onSelect(language)}>{language}
                &nbsp;
                <Text as = "span" color = "gray.600" fontSize="sm">
                  {version}
                </Text>
              </MenuItem>
            ))
          }
        </MenuList>
</Menu>
    </Box>
  )
}

export default LanguageSelector
