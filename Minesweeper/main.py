import pygame, sys

pygame.init()

gameDisplay = pygame.display.set_mode((500, 500))
pygame.display.set_caption('Sweeper of Bombs')
clock = pygame.time.Clock()
crashed = False
