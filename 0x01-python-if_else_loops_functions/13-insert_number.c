#include <stdio.h>
#include <stdlib.h>
#include "lists.h"
#include <unistd.h>
/**
 * insert_node - inserts a number into a list that is sorted
 * @number: number to be inserted
 * @head: a linked list
 * Return: pointer to the new head
 */
listint_t *insert_node(listint_t **head, int number)
{
	listint_t *current = *head;
	listint_t *new = NULL;
	listint_t *temp = NULL;

	if (!head)
		return (NULL);

	new = malloc(sizeof(listint_t));
	if (!new)
		return (NULL);
	new->n = number;
	new->next = NULL;

	if (!*head || (*head)->n > number)
	{
		new->next = *head;
		return (*head = new);
	}
	else
	{
		while (current && current->n < number)
		{
			temp = current;
			current = current->next;
		}
		temp->next = new;
		new->next =  current;
	}
	return (new);
}
