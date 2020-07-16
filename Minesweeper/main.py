import pygame
import time
import random

display_width = 500
display_height = 600

black = (0, 0, 0)
white = (255, 255, 255)
red = (255, 0, 0)
green = (0, 255, 0)
blue = (0, 0, 255)

pygame.init()
gameDisplay = pygame.display.set_mode((display_width, display_height))
pygame.display.set_caption('Sweeper of Bombs')
clock = pygame.time.Clock()


def game_loop():
    gameExit = False
    while not gameExit:

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

        gameDisplay.fill(black)

        pygame.draw.rect(gameDisplay, white, [0 , 100 , display_width,  display_height])

        pygame.display.update()
        clock.tick(120)

game_loop()
pygame.quit()
quit()

                
