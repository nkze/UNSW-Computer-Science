// Interface to the Queue ADT

// !!! DO NOT MODIFY THIS FILE !!!

#ifndef QUEUE_H
#define QUEUE_H

#include <stdbool.h>
#include <stdio.h>

typedef int Item;

typedef struct queue *Queue;

/**
 * Creates a new empty queue
 */
Queue QueueNew(void);

/**
 * Frees all resources associated with the given queue
 */
void QueueFree(Queue q);

/**
 * Adds an item to the end of the queue
 */
void QueueEnqueue(Queue q, Item it);

/**
 * Removes an item from the front of the queue and returns it
 * Assumes that the queue is not empty
 */
Item QueueDequeue(Queue q);

/**
 * Gets the item at the front of the queue without removing it
 * Assumes that the queue is not empty
 */
Item QueueFront(Queue q);

/**
 * Gets the size of the given queue
 */
int QueueSize(Queue q);

/**
 * Returns true if the queue is empty, and false otherwise
 */
bool QueueIsEmpty(Queue q);

/**
 * Prints the queue to the given file with items space-separated
 */
void QueueDump(Queue q, FILE *fp);

/**
 * Prints out information for debugging
 */
void QueueDebugPrint(Queue q);

#endif
