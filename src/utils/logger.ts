type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: any;
}

class Logger {
  private logs: LogEntry[] = [];
  private readonly maxLogs = 1000;

  private createLogEntry(level: LogLevel, message: string, data?: any): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      data
    };
  }

  private log(level: LogLevel, message: string, data?: any) {
    const entry = this.createLogEntry(level, message, data);
    
    // Add to internal logs array
    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    // Format console output
    const logMessage = `[${entry.timestamp}] ${level.toUpperCase()}: ${message}`;
    const consoleData = data ? { ...data } : undefined;

    // Log to console with appropriate level
    switch (level) {
      case 'debug':
        console.debug(logMessage, consoleData);
        break;
      case 'info':
        console.info(logMessage, consoleData);
        break;
      case 'warn':
        console.warn(logMessage, consoleData);
        break;
      case 'error':
        console.error(logMessage, consoleData);
        break;
    }
  }

  debug(message: string, data?: any) {
    this.log('debug', message, data);
  }

  info(message: string, data?: any) {
    this.log('info', message, data);
  }

  warn(message: string, data?: any) {
    this.log('warn', message, data);
  }

  error(message: string, data?: any) {
    this.log('error', message, data);
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  clearLogs() {
    this.logs = [];
  }
}

export const logger = new Logger();