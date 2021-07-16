import { Employee } from "./employee";
import { Position } from "./position";

export class LogEvent
{
    constructor() {
        this.id = 0
        this.employees = [];
    }
    id: number;
    startsAt?: string;
    endsAt?: string;
    position?: Position
    employees?: Employee[]
}