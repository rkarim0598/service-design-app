export class Ticket {
    id?: string;
    status: TicketStatus = TicketStatus.OPENED;
    device: string;
    description: string;
    previousAttempts?: string;
    solution?: string;
    agentId: number;
    userId: string;
}

export enum TicketStatus {
    OPENED,
    CLOSED
}
