import React from "react";
import {Reminder} from "../../models/reminder";

type ReminderProps = {
    reminderList: Reminder[],
    onRemoveReminder: (id: number) => void
}
export const ReminderList: React.FC<ReminderProps> = ({reminderList, onRemoveReminder}) => {
    return (
        <ul className="list-group">
            {reminderList.map(item =>
                <li key={item.id} className="list-group-item ">
                    {item.title}
                    <button className="btn btn-outline-danger mx-3 rounded-pill"
                            onClick={() => onRemoveReminder(item.id)}>
                        Delete
                    </button>
                </li>
            )}
        </ul>
    )
}