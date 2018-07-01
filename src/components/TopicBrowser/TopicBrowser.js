import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'
import MadLib from '../Topics/MadLib'
import ChooseYourAdventure from '../Topics/ChooseYourAdventure'
import Password from '../Topics/Password'

class TopicBrowser extends Component {
    render () {
        return (
        <div>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
            <MadLib />
            <ChooseYourAdventure />
            <Password/>
        </div>
        )
    }
}

export default TopicBrowser;