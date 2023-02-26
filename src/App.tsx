import {ReminderList} from "./components/Reminder/ReminderList";
import {Reminder} from "./models/reminder";
import {useEffect, useState} from "react";
import reminderService from "./services/reminder.service";

function App() {
    const [reminders, setReminders] = useState<Reminder[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        loadReminders();
    }, []);

    const loadReminders = async () => {
        const reminders = await reminderService.getReminders();
        setReminders(reminders);
    }
    const removeReminder = (id: number) => {
        console.log(id);
    }


    return (
        <div className="container m-5">
            <ReminderList reminderList={reminders} onRemoveReminder={removeReminder}/>
        </div>

    )
}

export default App;