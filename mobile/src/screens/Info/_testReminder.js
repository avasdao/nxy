import {schedNotif} from '../../NotifManager'

const test = () => {
    schedNotif(
        'Daily Update',
        `This is just a (scheduled) 5sec test.`,
        new Date(Date.now() + 5000)
    )
}

export default test
