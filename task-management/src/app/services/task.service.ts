import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
    dueDate: Date;
    createdAt: Date;
}

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks: Task[] = [
        { id: 1, title: 'Complete Angular project', description: 'Finish the task management application', completed: false, priority: 'high', dueDate: new Date('2024-02-15'), createdAt: new Date('2024-01-01') },
        { id: 2, title: 'Review code', description: 'Review pull requests from team members', completed: true, priority: 'medium', dueDate: new Date('2024-02-10'), createdAt: new Date('2024-01-02') },
        { id: 3, title: 'Write unit tests', description: 'Add test coverage for new features', completed: false, priority: 'high', dueDate: new Date('2024-02-20'), createdAt: new Date('2024-01-03') },
        { id: 4, title: 'Update documentation', description: 'Update API documentation', completed: true, priority: 'low', dueDate: new Date('2024-02-05'), createdAt: new Date('2024-01-04') },
        { id: 5, title: 'Fix bug in login', description: 'Resolve authentication issue', completed: false, priority: 'high', dueDate: new Date('2024-02-08'), createdAt: new Date('2024-01-05') },
        { id: 6, title: 'Design new UI', description: 'Create mockups for dashboard', completed: false, priority: 'medium', dueDate: new Date('2024-02-25'), createdAt: new Date('2024-01-06') },
        { id: 7, title: 'Database optimization', description: 'Improve query performance', completed: true, priority: 'medium', dueDate: new Date('2024-02-12'), createdAt: new Date('2024-01-07') },
        { id: 8, title: 'Setup CI/CD', description: 'Configure deployment pipeline', completed: false, priority: 'low', dueDate: new Date('2024-03-01'), createdAt: new Date('2024-01-08') },
        { id: 9, title: 'Security audit', description: 'Perform security assessment', completed: false, priority: 'high', dueDate: new Date('2024-02-18'), createdAt: new Date('2024-01-09') },
        { id: 10, title: 'User training', description: 'Prepare training materials', completed: true, priority: 'medium', dueDate: new Date('2024-02-14'), createdAt: new Date('2024-01-10') },
        { id: 11, title: 'Performance testing', description: 'Load test the application', completed: false, priority: 'medium', dueDate: new Date('2024-02-22'), createdAt: new Date('2024-01-11') },
        { id: 12, title: 'Backup strategy', description: 'Implement data backup solution', completed: false, priority: 'low', dueDate: new Date('2024-03-05'), createdAt: new Date('2024-01-12') },
        { id: 13, title: 'Mobile responsiveness', description: 'Make app mobile-friendly', completed: true, priority: 'medium', dueDate: new Date('2024-02-16'), createdAt: new Date('2024-01-13') },
        { id: 14, title: 'API rate limiting', description: 'Implement API throttling', completed: false, priority: 'low', dueDate: new Date('2024-02-28'), createdAt: new Date('2024-01-14') },
        { id: 15, title: 'Error handling', description: 'Improve error messages', completed: false, priority: 'medium', dueDate: new Date('2024-02-24'), createdAt: new Date('2024-01-15') },
        { id: 16, title: 'Logging system', description: 'Setup application logging', completed: true, priority: 'low', dueDate: new Date('2024-02-11'), createdAt: new Date('2024-01-16') },
        { id: 17, title: 'Email notifications', description: 'Add email alert system', completed: false, priority: 'medium', dueDate: new Date('2024-02-26'), createdAt: new Date('2024-01-17') },
        { id: 18, title: 'Data validation', description: 'Strengthen input validation', completed: false, priority: 'high', dueDate: new Date('2024-02-19'), createdAt: new Date('2024-01-18') },
        { id: 19, title: 'Analytics integration', description: 'Add user analytics tracking', completed: true, priority: 'low', dueDate: new Date('2024-02-13'), createdAt: new Date('2024-01-19') },
        { id: 20, title: 'Cache implementation', description: 'Add Redis caching layer', completed: false, priority: 'medium', dueDate: new Date('2024-03-03'), createdAt: new Date('2024-01-20') }
    ];

    getTasks(): Observable<Task[]> {
        return of(this.tasks);
    }

    getTaskById(id: number): Observable<Task | undefined> {
        const task = this.tasks.find(t => t.id === id);
        return of(task);
    }

    addTask(task: Omit<Task, 'id' | 'createdAt'>): Observable<Task> {
        const newTask: Task = {
            ...task,
            id: Math.max(...this.tasks.map(t => t.id)) + 1,
            createdAt: new Date()
        };
        this.tasks.push(newTask);
        return of(newTask);
    }

    updateTask(id: number, updates: Partial<Task>): Observable<Task | null> {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            this.tasks[index] = { ...this.tasks[index], ...updates };
            return of(this.tasks[index]);
        }
        return of(null);
    }

    deleteTask(id: number): Observable<boolean> {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return of(true);
        }
        return of(false);
    }
}