const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blach'},
        {id: '2', title: 'help me find bowser', content: 'blah blah blach'},
        {id: '3', title: 'so longa Bowser!', content: 'blah blah blach'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log("created project", action.project);
            /* falls through */
        default:
            console.log('no match')
    }
    return state
}

export default projectReducer